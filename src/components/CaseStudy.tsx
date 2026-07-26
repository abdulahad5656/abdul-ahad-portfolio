"use client";

import { X, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/data/projects";
import DeviceMockup from "./DeviceMockup";

interface CaseStudyProps {
  project: Project | null;
  onClose: () => void;
}

export default function CaseStudy({ project, onClose }: CaseStudyProps) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 overflow-y-auto bg-charcoal/50 backdrop-blur-sm p-4 sm:p-6 flex items-center justify-center text-charcoal select-none"
        >
          <motion.div
            initial={{ scale: 0.96, y: 15 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.96, y: 15 }}
            className="w-full max-w-4xl bg-white rounded-2xl border border-gray-border shadow-2xl overflow-hidden text-left relative flex flex-col max-h-[85vh]"
          >
            {/* Header */}
            <div className="px-5 py-4 bg-gray-bg border-b border-gray-border flex items-center justify-between sticky top-0 z-10">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-shopify-forest" />
                <span className="font-heading font-extrabold text-sm uppercase tracking-wider">{project.name} Case Study</span>
              </div>
              <button
                onClick={onClose}
                className="p-1 rounded-lg border border-gray-border hover:border-charcoal hover:bg-gray-bg text-charcoal-light hover:text-charcoal cursor-pointer"
              >
                <X className="w-4.5 h-4.5" />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-grow">
              {/* Visual device previews */}
              <div className="p-4 sm:p-6 bg-gray-bg rounded-xl border border-gray-border">
                <DeviceMockup
                  storeName={project.name}
                  storeUrl={project.url}
                  primaryColor={project.color}
                  category={project.category}
                  desktopPath={project.desktopPath}
                  mobilePath={project.mobilePath}
                />
              </div>

              {/* Outcomes Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-gray-bg/40 border border-gray-border text-left">
                  <span className="text-[9px] font-bold text-charcoal-light uppercase tracking-wider block">eCommerce Segment</span>
                  <span className="text-xs font-extrabold text-charcoal">{project.category}</span>
                </div>
                <div className="p-4 rounded-xl bg-gray-bg/40 border border-gray-border text-left">
                  <span className="text-[9px] font-bold text-charcoal-light uppercase tracking-wider block">Lighthouse Speed</span>
                  <span className="text-xs font-extrabold text-shopify-forest">⚡ {project.performance} / 100</span>
                </div>
                <div className="p-4 rounded-xl bg-gray-bg/40 border border-gray-border text-left">
                  <span className="text-[9px] font-bold text-charcoal-light uppercase tracking-wider block">Conversion Metrics</span>
                  <span className="text-xs font-extrabold text-shopify-forest">{project.results}</span>
                </div>
              </div>

              {/* Narrative specs */}
              <div className="space-y-4">
                <h4 className="font-heading font-extrabold text-base text-charcoal">Redesign Case Study</h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-xs sm:text-sm">
                  <div className="space-y-1.5 text-left">
                    <span className="font-bold text-red-500 uppercase tracking-wider text-[9px] block">The Problem</span>
                    <p className="text-charcoal-light leading-relaxed font-semibold bg-red-500/5 p-4 rounded-xl border border-red-500/10">
                      {project.problem}
                    </p>
                  </div>
                  <div className="space-y-1.5 text-left">
                    <span className="font-bold text-shopify-forest uppercase tracking-wider text-[9px] block">The Solution</span>
                    <p className="text-charcoal-light leading-relaxed font-semibold bg-shopify-forest/5 p-4 rounded-xl border border-shopify-forest/10">
                      {project.solution}
                    </p>
                  </div>
                </div>
              </div>

              {/* Tech tag list */}
              <div className="space-y-2 text-left">
                <span className="text-[9px] font-bold text-charcoal uppercase tracking-wider block">Technology Stack</span>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded bg-gray-bg text-charcoal font-bold text-[10px] uppercase tracking-wider border border-gray-border">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="px-5 py-4 bg-gray-bg border-t border-gray-border flex items-center justify-end gap-2.5 sticky bottom-0 z-10">
              <button
                onClick={onClose}
                className="px-4 py-2 border border-gray-border hover:bg-gray-bg rounded-lg text-[10px] font-bold uppercase tracking-wider cursor-pointer"
              >
                Close Details
              </button>
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2 bg-shopify-forest hover:bg-charcoal text-white rounded-lg text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 cursor-pointer shadow-sm"
                >
                  Visit Live Store
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
