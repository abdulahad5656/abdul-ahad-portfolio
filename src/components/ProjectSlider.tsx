"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { Project, getProjectType } from "@/data/projects";
import DeviceMockup from "./DeviceMockup";

interface ProjectSliderProps {
  projects: Project[];
  onOpenCaseStudy: (slug: string) => void;
}

export default function ProjectSlider({ projects, onOpenCaseStudy }: ProjectSliderProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    dragFree: false,
    duration: 35,
    align: "center",
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback((emblaApi: any) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  const startAutoplay = useCallback(() => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(() => {
      if (emblaApi) emblaApi.scrollNext();
    }, 5000);
  }, [emblaApi]);

  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    startAutoplay();

    return () => {
      stopAutoplay();
    };
  }, [emblaApi, onSelect, startAutoplay, stopAutoplay]);

  return (
    <div
      className="relative w-full overflow-hidden"
      onMouseEnter={stopAutoplay}
      onMouseLeave={startAutoplay}
    >
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex select-none">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="flex-[0_0_100%] min-w-0 px-4 sm:px-6 md:px-12 flex flex-col space-y-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center text-left max-w-6xl mx-auto w-full">
                {/* Mockup Showcase */}
                <div className="lg:col-span-7 w-full">
                  <DeviceMockup
                    storeName={project.name}
                    storeUrl={project.url}
                    primaryColor={project.color}
                    category={project.category}
                    desktopPath={project.desktopPath}
                    mobilePath={project.mobilePath}
                  />
                </div>

                {/* Content Box */}
                <div className="lg:col-span-5 space-y-6 lg:pl-4">
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={`text-[9px] font-black px-2.5 py-1 rounded-md uppercase tracking-wider ${
                          getProjectType(project.slug) === "Client Work"
                            ? "text-shopify-forest bg-shopify-forest/10 border border-shopify-forest/15"
                            : "text-indigo-600 bg-indigo-600/10 border border-indigo-600/15"
                        }`}
                      >
                        {getProjectType(project.slug)}
                      </span>
                      <span
                        className="text-[9px] font-black uppercase tracking-wider px-2.5 py-1.5 rounded-md border bg-white shadow-sm inline-block"
                        style={{ color: project.color, borderColor: `${project.color}20` }}
                      >
                        {project.category}
                      </span>
                    </div>
                    <h3 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-charcoal tracking-tight">
                      {project.name}
                    </h3>
                  </div>

                  <p className="text-charcoal-light text-xs sm:text-sm leading-relaxed">
                    {project.desc}
                  </p>

                  <div className="p-4 rounded-xl bg-gray-bg border border-gray-border flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-shopify-forest animate-pulse-slow flex-shrink-0" />
                    <div>
                      <span className="text-[8px] font-bold text-charcoal-light uppercase tracking-wider block">Conversion Metrics</span>
                      <span className="text-xs font-extrabold text-[#008060]">{project.results}</span>
                    </div>
                  </div>

                  <div className="flex gap-4 pt-1">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 py-3 px-4 text-center text-[10px] font-bold uppercase tracking-wider rounded-lg bg-charcoal text-white hover:bg-shopify-forest transition-colors duration-300 flex items-center justify-center gap-1.5 shadow-sm"
                    >
                      Visit Store
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <button
                      onClick={() => onOpenCaseStudy(project.slug)}
                      className="flex-1 py-3 px-4 text-center text-[10px] font-bold uppercase tracking-wider rounded-lg border border-gray-border hover:border-charcoal bg-white text-charcoal transition-colors duration-200 cursor-pointer shadow-sm"
                    >
                      Case Study
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination indicators */}
      <div className="max-w-6xl mx-auto px-4 mt-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === selectedIndex ? "w-6 bg-shopify-forest" : "bg-charcoal/20 hover:bg-charcoal/45"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={scrollPrev}
            className="w-10 h-10 rounded-full border border-gray-border hover:border-charcoal bg-white flex items-center justify-center text-charcoal shadow-sm active:scale-95 transition-all cursor-pointer"
            aria-label="Previous slide"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <button
            onClick={scrollNext}
            className="w-10 h-10 rounded-full border border-gray-border hover:border-charcoal bg-white flex items-center justify-center text-charcoal shadow-sm active:scale-95 transition-all cursor-pointer"
            aria-label="Next slide"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
