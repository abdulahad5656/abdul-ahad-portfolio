"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/data/projects";
import ProjectCard from "./ProjectCard";

interface ProjectGalleryProps {
  projects: Project[];
  onOpenCaseStudy: (slug: string) => void;
}

const categories = [
  { id: "all", name: "All Projects" },
  { id: "fashion", name: "Fashion" },
  { id: "beauty", name: "Beauty" },
  { id: "furniture", name: "Furniture" },
  { id: "electronics", name: "Electronics" },
  { id: "health", name: "Health" }
];

export default function ProjectGallery({ projects, onOpenOpenCaseStudy }: { projects: Project[]; onOpenOpenCaseStudy: (slug: string) => void }) {
  const [activeTab, setActiveTab] = useState("all");

  const filteredProjects = activeTab === "all"
    ? projects
    : projects.filter((p) => p.industry.toLowerCase() === activeTab || p.category.toLowerCase().includes(activeTab));

  return (
    <div className="space-y-12">
      {/* Category filters */}
      <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveTab(cat.id)}
            className={`px-4.5 py-2.5 rounded-lg text-[10px] font-bold uppercase tracking-wider border transition-all duration-200 cursor-pointer ${
              activeTab === cat.id
                ? "bg-shopify-forest text-white border-shopify-forest shadow-sm"
                : "bg-white border-gray-border text-charcoal-light hover:border-charcoal hover:bg-gray-bg shadow-sm"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Grid wrapper */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              key={project.slug}
            >
              <ProjectCard project={project} onOpenCaseStudy={onOpenOpenCaseStudy} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
