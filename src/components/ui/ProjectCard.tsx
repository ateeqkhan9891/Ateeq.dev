"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import { Project } from "@/data/projects";
import Badge from "./Badge";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export default function ProjectCard({
  project,
  featured = false,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={cn(
        "glass glass-hover rounded-xl overflow-hidden group",
        featured ? "md:col-span-1" : ""
      )}
    >

      <div className="relative h-48 bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-6xl font-bold text-white/5">
            {project.title[0]}
          </div>
        </div>
        {project.status === "in-progress" && (
          <div className="absolute top-3 right-3">
            <span className="text-xs font-medium px-2 py-1 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/20">
              In Progress
            </span>
          </div>
        )}
        {project.status === "live" && (
          <div className="absolute top-3 right-3 flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs font-medium text-green-400">Live</span>
          </div>
        )}
      </div>


      <div className="p-6">
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.category.slice(0, 2).map((cat) => (
            <Badge key={cat} variant="cyan">
              {cat}
            </Badge>
          ))}
          <Badge variant="default">{project.year}</Badge>
        </div>

        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-slate-500 leading-relaxed mb-4 line-clamp-2">
          {project.tagline}
        </p>


        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.slice(0, 4).map((t) => (
            <span
              key={t}
              className="text-xs text-slate-500 px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.06]"
            >
              {t}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="text-xs text-slate-600 px-2 py-0.5">
              +{project.tech.length - 4}
            </span>
          )}
        </div>


        <div className="flex items-center gap-3">
          <Link
            href={`/projects/${project.slug}`}
            className="flex items-center gap-1.5 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            View Details <ArrowUpRight size={14} />
          </Link>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-slate-300 transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon width={15} height={15} />
            </a>
          )}
          {project.liveUrl && project.liveUrl !== "#" && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs text-slate-500 hover:text-green-400 transition-colors"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
              Live
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
