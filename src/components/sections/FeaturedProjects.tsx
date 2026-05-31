"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { featuredProjects, projects } from "@/data/projects";

/* -- gradient map per project ------------------------------- */
const GRADIENTS: Record<string, string> = {
  "kredo-ai":           "from-violet-600/20 via-cyan-600/10 to-transparent", "miami-aesthetic-care": "from-pink-600/15 via-rose-600/8 to-transparent", "dr-zulqarnain":        "from-emerald-600/15 via-teal-600/8 to-transparent",
};

const ICON_COLORS: Record<string, string> = {
  "kredo-ai":           "text-violet-400", "miami-aesthetic-care": "text-pink-400", "dr-zulqarnain":        "text-emerald-400",
};

const BORDER_COLORS: Record<string, string> = {
  "kredo-ai":           "hover:border-violet-500/30", "miami-aesthetic-care": "hover:border-pink-500/30", "dr-zulqarnain":        "hover:border-emerald-500/30",
};

const STATUS_LABELS: Record<string, { label: string; color: string }> = {
  "in-progress": { label: "In Progress", color: "text-amber-400 bg-amber-400/10 border-amber-400/20" },
  live:          { label: "Live",        color: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20" },
  completed:     { label: "Completed",   color: "text-slate-400 bg-slate-400/10 border-slate-400/20" },
};

/* -- Small project card (sidebar) --------------------------- */
function SmallCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
    >
      <Link
        href={`/projects/${project.slug}`}
        className="group flex items-start gap-4 p-4 rounded-xl border border-white/[0.05] hover:border-white/[0.1] bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-250"
      >
        {/* Icon box */}
        <div className="w-10 h-10 rounded-lg bg-white/[0.05] border border-white/[0.08] flex items-center justify-center shrink-0 group-hover:border-cyan-500/30 transition-colors">
          <div className="w-4 h-4 rounded-sm bg-gradient-to-br from-cyan-400/60 to-blue-500/60" />
        </div>

        {/* Text */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <span className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors truncate">
              {project.title}
            </span>
            <ArrowUpRight size={13} className="text-slate-600 group-hover:text-cyan-400 transition-colors shrink-0" />
          </div>
          <p className="text-xs text-slate-600 mt-0.5 line-clamp-1">{project.tagline}</p>
          <div className="flex flex-wrap gap-1 mt-2">
            {project.tech.slice(0, 3).map((t) => (
              <span key={t} className="text-[10px] text-slate-600 px-1.5 py-0.5 rounded bg-white/[0.04] border border-white/[0.06]">
                {t}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

/* ----------------------------------------------------------- */
export default function FeaturedProjects() {
  const hero   = featuredProjects[0]; // MyamiCV AI
  const rest   = featuredProjects.slice(1); // Miami + Dr Z
  const others = projects.filter((p) => !p.featured).slice(0, 3);

  const heroStatus = STATUS_LABELS[hero.status];

  return (
    <section className="section">
      <div className="wrap">

      {/* -- Section header ----------------------------- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12"
      >
        <div>
          <span className="eyebrow mb-3 block">Selected Work</span>
          <h2
            className="font-bold text-white tracking-tight"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", letterSpacing: "-0.025em" }}
          >
            Projects I'm Proud Of
          </h2>
        </div>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-cyan-400 transition-colors shrink-0"
        >
          View all projects <ArrowUpRight size={14} />
        </Link>
      </motion.div>

      <div className="grid grid-cols-1 xl:grid-cols-[1fr_340px] gap-6">

        {/* -- Left column -------------------------------- */}
        <div className="flex flex-col gap-6">

          {/* -- Hero featured card ---------------------- */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <Link
              href={`/projects/${hero.slug}`}
              className={`group relative block rounded-2xl border border-white/[0.07] hover:border-violet-500/30 bg-[#0b1120] overflow-hidden transition-all duration-350 hover:shadow-card-hover`}
            >
              {/* gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${GRADIENTS[hero.slug] ?? "from-cyan-600/10 to-transparent"} transition-opacity duration-500`} />

              {/* grid pattern inside card */}
              <div className="absolute inset-0 bg-dot-pattern bg-dot opacity-40" />

              <div className="relative p-8 lg:p-10">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
                  <div className="flex flex-wrap gap-2">
                    {hero.category.slice(0, 2).map((c) => (
                      <span key={c} className="text-xs font-medium px-2.5 py-1 rounded-md bg-violet-500/10 border border-violet-500/20 text-violet-300">
                        {c}
                      </span>
                    ))}
                  </div>
                  <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${heroStatus.color}`}>
                    {heroStatus.label}
                  </span>
                </div>

                {/* Project visual area */}
                <div className="relative h-40 lg:h-52 rounded-xl border border-white/[0.06] bg-[#070c18] overflow-hidden mb-8 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-cyan-600/5" />
                  {/* Mock dashboard UI */}
                  <div className="relative grid grid-cols-3 gap-2 p-4 w-full max-w-sm opacity-70">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="h-8 rounded bg-white/[0.06] border border-white/[0.08]" />
                    ))}
                    <div className="col-span-2 h-20 rounded bg-white/[0.04] border border-white/[0.06]" />
                    <div className="h-20 rounded bg-white/[0.04] border border-white/[0.06]" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120] via-transparent to-transparent" />
                </div>

                <h3
                  className="font-bold text-white group-hover:text-violet-200 transition-colors mb-3"
                  style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)", letterSpacing: "-0.02em" }}
                >
                  {hero.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 max-w-xl">
                  {hero.tagline}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {hero.tech.slice(0, 5).map((t) => (
                      <span key={t} className="text-xs text-slate-500 px-2 py-1 rounded bg-white/[0.04] border border-white/[0.06]">
                        {t}
                      </span>
                    ))}
                    {hero.tech.length > 5 && (
                      <span className="text-xs text-slate-600 px-2 py-1">+{hero.tech.length - 5}</span>
                    )}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-medium text-slate-400 group-hover:text-violet-400 transition-colors">
                    Case Study <ArrowUpRight size={13} />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* -- Two smaller featured cards --------------- */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {rest.map((p, i) => {
              const st = STATUS_LABELS[p.status];
              return (
                <motion.div
                  key={p.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.1 }}
                >
                  <Link
                    href={`/projects/${p.slug}`}
                    className={`group relative block h-full rounded-2xl border border-white/[0.07] ${BORDER_COLORS[p.slug] ?? "hover:border-cyan-500/30"} bg-[#0b1120] overflow-hidden transition-all duration-300 hover:shadow-card-hover`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${GRADIENTS[p.slug] ?? "from-cyan-600/10 to-transparent"}`} />
                    <div className="relative p-6">
                      <div className="flex items-start justify-between gap-2 mb-5">
                        <div className="flex flex-wrap gap-1.5">
                          {p.category.slice(0, 1).map((c) => (
                            <span key={c} className="text-[11px] font-medium px-2 py-0.5 rounded bg-white/[0.07] border border-white/[0.1] text-slate-400">
                              {c}
                            </span>
                          ))}
                        </div>
                        <span className={`text-[11px] font-medium px-2 py-0.5 rounded-full border ${st.color} shrink-0`}>
                          {st.label}
                        </span>
                      </div>

                      {/* mini visual */}
                      <div className="h-28 rounded-lg border border-white/[0.06] bg-[#070c18] mb-5 overflow-hidden flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full border border-white/[0.06] bg-white/[0.03] flex items-center justify-center">
                          <Sparkles size={20} className={ICON_COLORS[p.slug] ?? "text-cyan-400"} />
                        </div>
                      </div>

                      <h3 className="text-base font-bold text-white group-hover:text-slate-200 transition-colors mb-2">
                        {p.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-2">
                        {p.tagline}
                      </p>

                      <div className="flex flex-wrap gap-1">
                        {p.tech.slice(0, 3).map((t) => (
                          <span key={t} className="text-[10px] text-slate-600 px-1.5 py-0.5 rounded bg-white/[0.04] border border-white/[0.06]">
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-1.5 mt-4 text-xs font-medium text-slate-500 group-hover:text-cyan-400 transition-colors">
                        View details <ArrowUpRight size={12} />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* -- Right column: other projects list ---------- */}
        <div className="flex flex-col gap-3">
          <div className="mb-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-slate-600">
              More Projects
            </span>
          </div>
          {others.map((p, i) => (
            <SmallCard key={p.slug} project={p} index={i} />
          ))}

          <Link
            href="/projects"
            className="mt-4 flex items-center justify-center gap-2 py-3 rounded-xl border border-white/[0.06] hover:border-cyan-500/25 text-sm font-medium text-slate-500 hover:text-cyan-400 transition-all duration-250 bg-white/[0.02] hover:bg-white/[0.04]"
          >
            Browse all projects <ArrowUpRight size={13} />
          </Link>
        </div>
      </div>
      </div>
    </section>
  );
}
