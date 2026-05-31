"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";

const categories = [
  "All", "AI / SaaS", "Data Science", "Machine Learning", "Web Development", "Backend APIs", "WordPress / CMS", "Healthcare Websites",
];

export default function ProjectsContent() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category.includes(active));

  return (
    <div className="pt-32 pb-24">
      <div className="wrap">
        {/* Header */}
        <div className="mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-3 block">
            Portfolio
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            All Projects
          </h1>
          <p className="text-slate-400 text-lg max-w-xl">
            A full collection of my work across AI, data science, web
            development, backend APIs, and business websites.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`text-xs font-medium px-4 py-2 rounded-full border transition-all duration-200 ${
                active === cat
                  ? "bg-cyan-500 border-cyan-500 text-slate-900"
                  : "bg-white/[0.04] border-white/[0.08] text-slate-400 hover:text-white hover:border-white/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-slate-600">
            No projects in this category yet.
          </div>
        )}
      </div>
    </div>
  );
}
