"use client";

import { ExternalLink } from "lucide-react";
import { Project } from "@/data/projects";
import DeviceMockup from "./DeviceMockup";

interface ProjectCardProps {
  project: Project;
  onOpenCaseStudy: (slug: string) => void;
}

export default function ProjectCard({ project, onOpenCaseStudy }: ProjectCardProps) {
  return (
    <div className="flex flex-col rounded-2xl border border-gray-border bg-white overflow-hidden shadow-sm hover:shadow-lg hover:border-shopify-forest/20 transition-all duration-300">
      
      {/* Overlapping Mockups Visual Frame */}
      <div className="bg-gray-bg border-b border-gray-border p-5 flex flex-col justify-end overflow-hidden relative group select-none">
        
        {/* Render consolidated DeviceMockup */}
        <div className="w-full transform group-hover:scale-[1.01] transition-transform duration-500">
          <DeviceMockup
            storeName={project.name}
            storeUrl={project.url}
            primaryColor={project.color}
            desktopPath={project.desktopPath}
            mobilePath={project.mobilePath}
          />
        </div>

        {/* Hover Actions Panel */}
        <div className="absolute inset-0 bg-charcoal/60 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-3 transition-opacity duration-300">
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-lg bg-white text-charcoal font-bold text-[10px] uppercase tracking-wider flex items-center gap-1 shadow-md hover:scale-105 transition-transform"
            >
              Visit Store
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
          <button
            onClick={() => onOpenCaseStudy(project.slug)}
            className="px-4 py-2 rounded-lg bg-shopify-forest text-white font-bold text-[10px] uppercase tracking-wider shadow-md hover:scale-105 transition-transform cursor-pointer"
          >
            Case Study
          </button>
        </div>

      </div>

      {/* Card Details Panel */}
      <div className="p-5 flex-grow flex flex-col justify-between space-y-4 bg-white text-left">
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <h4 className="font-heading font-extrabold text-sm sm:text-base text-charcoal truncate">
              {project.name}
            </h4>
            <div className="flex items-center gap-1.5">
              <span className="text-[8px] font-black text-shopify-forest bg-shopify-forest/10 px-2 py-0.5 rounded-md uppercase tracking-wider">
                {project.industry}
              </span>
              <span className="text-[8px] font-black text-amber-600 bg-amber-500/10 px-2 py-0.5 rounded-md">
                ⚡ {project.performance} Speed
              </span>
            </div>
          </div>
          <p className="text-charcoal-light text-xs leading-relaxed line-clamp-2">
            {project.desc}
          </p>
        </div>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1 text-[8px] font-bold uppercase text-charcoal-light">
          {project.features.slice(0, 3).map((feat, fidx) => (
            <span key={fidx} className="px-2 py-0.5 rounded bg-gray-bg border border-gray-border">
              {feat}
            </span>
          ))}
        </div>
      </div>

    </div>
  );
}
