"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Project, getProjectType } from "@/data/projects";
import DeviceMockup from "./DeviceMockup";

interface FeaturedProjectProps {
  project: Project;
  index: number;
  onOpenCaseStudy: (slug: string) => void;
}

export default function FeaturedProject({ project, index, onOpenCaseStudy }: FeaturedProjectProps) {
  const isEven = index % 2 === 0;
  const projectType = getProjectType(project.slug);

  // Render Overlapping Mockups Visual Frame
  const renderVisualMockup = () => (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full max-w-[850px] mx-auto select-none group overflow-visible"
    >
      <div className="w-full transform hover:scale-[1.015] transition-all duration-500 overflow-visible">
        <DeviceMockup
          storeName={project.name}
          storeUrl={project.url}
          primaryColor={project.color}
          category={project.category}
          desktopPath={project.desktopPath}
          mobilePath={project.mobilePath}
        />
      </div>
    </motion.div>
  );

  // Render Metadata Column
  const renderContentColumn = () => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
      className="text-left space-y-6 lg:py-6"
    >
      <div className="flex flex-wrap items-center gap-2">
        {/* Project Type Badge */}
        <span
          className={`text-[9px] font-black px-3 py-1 rounded-md uppercase tracking-wider ${
            projectType === "Client Work"
              ? "text-shopify-forest bg-shopify-forest/10 border border-shopify-forest/15"
              : "text-indigo-600 bg-indigo-600/10 border border-indigo-600/15"
          }`}
        >
          {projectType}
        </span>

        <span className="text-[9px] font-black text-shopify-forest bg-shopify-forest/5 px-3 py-1 rounded-md uppercase tracking-wider border border-shopify-forest/10">
          {project.category}
        </span>
        <span className="text-[9px] font-black text-amber-600 bg-amber-500/10 px-3 py-1 rounded-md border border-amber-500/15">
          ⚡ {project.performance} Speed
        </span>
      </div>

      <h3 className="font-heading font-extrabold text-3xl sm:text-4xl text-charcoal tracking-tight leading-tight">
        {project.name}
      </h3>

      <p className="text-charcoal-light text-xs sm:text-sm leading-relaxed font-bold">
        {project.desc}
      </p>

      {/* Mini specification metrics */}
      <div className="grid grid-cols-2 gap-4 p-4 rounded-xl border border-gray-border bg-gray-bg/40 text-[11px] font-bold text-charcoal-light">
        <div>
          <span className="text-[8px] uppercase tracking-wider block text-charcoal-light/75 mb-0.5">Project Outcome</span>
          <span className="text-shopify-forest font-extrabold text-xs sm:text-sm">{project.results}</span>
        </div>
        <div>
          <span className="text-[8px] uppercase tracking-wider block text-charcoal-light/75 mb-0.5">Liquid Code</span>
          <span className="text-charcoal text-xs sm:text-sm">OS 2.0 Compliant</span>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-wrap items-center gap-3 pt-2">
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 bg-charcoal hover:bg-shopify-forest text-white rounded-lg font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 transition-colors shadow-sm cursor-pointer"
          >
            Visit Live Store
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}
        <button
          onClick={() => onOpenCaseStudy(project.slug)}
          className="px-6 py-3 bg-white border border-gray-border hover:border-charcoal text-charcoal rounded-lg font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer shadow-sm"
        >
          View Case Study
        </button>
      </div>
    </motion.div>
  );

  return (
    <section className="py-12 sm:py-16 overflow-visible border-b border-gray-border last:border-0">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        {isEven ? (
          <>
            <div className="lg:col-span-7 w-full overflow-visible">
              {renderVisualMockup()}
            </div>
            <div className="lg:col-span-5 w-full">
              {renderContentColumn()}
            </div>
          </>
        ) : (
          <>
            <div className="lg:col-span-5 w-full order-last lg:order-none">
              {renderContentColumn()}
            </div>
            <div className="lg:col-span-7 w-full overflow-visible">
              {renderVisualMockup()}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
