"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, ArrowUpRight, ExternalLink, Check } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import { Project } from "@/data/projects";
import ProjectGallery from "@/components/ui/ProjectGallery";

const PALETTE: Record<string, {
  dot: string; text: string; glow: string; via: string;
}> = {
  "AI / SaaS":           { dot: "#8b5cf6", via: "#06b6d4", text: "#c4b5fd", glow: "rgba(139,92,246,0.10)" },
  "Data Science":        { dot: "#3b82f6", via: "#06b6d4", text: "#93c5fd", glow: "rgba(59,130,246,0.10)"  },
  "Machine Learning":    { dot: "#6366f1", via: "#7c3aed", text: "#a5b4fc", glow: "rgba(99,102,241,0.10)"  },
  "Web Development":     { dot: "#06b6d4", via: "#2563eb", text: "#67e8f9", glow: "rgba(6,182,212,0.10)"   },
  "Backend APIs":        { dot: "#10b981", via: "#0891b2", text: "#6ee7b7", glow: "rgba(16,185,129,0.10)"  },
  "Healthcare Websites": { dot: "#ec4899", via: "#9333ea", text: "#f9a8d4", glow: "rgba(236,72,153,0.10)"  },
  "WordPress / CMS":     { dot: "#f97316", via: "#b45309", text: "#fed7aa", glow: "rgba(249,115,22,0.10)"  },
};

function getPalette(categories: string[]) {
  for (const c of categories) if (PALETTE[c]) return PALETTE[c];
  return PALETTE["Web Development"];
}

const TECH_COLOR: Record<string, string> = {
  "Next.js": "#f0f6ff", "TypeScript": "#22d3ee", "Python": "#60a5fa", "FastAPI": "#34d399", "PostgreSQL": "#38bdf8", "Supabase": "#4ade80", "OpenAI": "#c084fc", "Groq": "#a78bfa", "Stripe": "#818cf8", "PyTorch": "#fb923c", "Scikit-learn": "#fbbf24", "Docker": "#60a5fa", "Tailwind CSS": "#22d3ee", "Framer Motion": "#e879f9", "React": "#67e8f9", "SQLAlchemy": "#86efac", "Pydantic": "#6ee7b7", "JWT": "#fde68a", "Pandas": "#93c5fd", "NumPy": "#bfdbfe", "Matplotlib": "#a5f3fc", "NLTK": "#fca5a5", "XGBoost": "#fdba74", "WordPress": "#c4b5fd", "PHP": "#a5b4fc", "Elementor": "#86efac", "Vercel": "#f0f6ff",
};

const STATUS_STYLE = {
  "in-progress": { t: "In Progress", c: "text-amber-400 border-amber-400/30 bg-amber-400/[0.07]" },
  live:          { t: "Live",         c: "text-emerald-400 border-emerald-400/30 bg-emerald-400/[0.07]" },
  completed:     { t: "Completed",    c: "text-slate-400 border-slate-400/30 bg-slate-400/[0.07]" },
};

function FadeUp({ children, delay = 0, className = "" }: {
  children: React.ReactNode; delay?: number; className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Rule() {
  return <div className="h-px bg-white/[0.05] my-20" />;
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-600 mb-8">
      {children}
    </p>
  );
}

interface Props { project: Project }

export default function ProjectDetail({ project }: Props) {
  const pal    = getPalette(project.category);
  const status = STATUS_STYLE[project.status];

  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY  = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const heroOp = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <article>


      <div ref={heroRef} className="relative min-h-[85vh] flex flex-col justify-end overflow-hidden">


        <motion.div style={{ y: heroY }} className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-40" />
          <div className="absolute inset-0"
            style={{ background: `radial-gradient(ellipse 110% 70% at 50% -5%, ${pal.glow} 0%, transparent 65%)` }}
          />
          <div className="absolute -top-32 left-[15%] w-[800px] h-[800px] rounded-full blur-[160px]"
            style={{ background: `${pal.dot}12` }}
          />
          <div className="absolute top-[30%] right-[-10%] w-[500px] h-[500px] rounded-full blur-[120px]"
            style={{ background: `${pal.via}0a` }}
          />
        </motion.div>


        <motion.div style={{ opacity: heroOp }} className="relative z-10 wrap pb-20 pt-40">


          <motion.div initial={{ opacity: 0, x: -14 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }} className="mb-12">
            <Link href="/projects"
              className="inline-flex items-center gap-2 text-xs font-medium text-slate-600 hover:text-slate-300 transition-colors group uppercase tracking-wider">
              <ArrowLeft size={13} className="group-hover:-translate-x-0.5 transition-transform" />
              Projects
            </Link>
          </motion.div>


          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className="flex flex-wrap items-center gap-3 mb-8">
            {project.category.map(cat => (
              <span key={cat}
                className="text-[11px] font-bold uppercase tracking-[0.14em]"
                style={{ color: pal.text }}>
                {cat}
              </span>
            ))}
            <span className="text-slate-700 text-xs select-none">/</span>
            <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${status.c}`}>
              {status.t}
            </span>
            <span className="text-slate-700 text-xs select-none">/</span>
            <span className="text-[11px] text-slate-600">{project.year}</span>
          </motion.div>


          <motion.h1
            initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.13, ease: [0.22, 1, 0.36, 1] }}
            className="font-black text-white leading-[0.92] tracking-tight mb-7"
            style={{ fontSize: "clamp(3.2rem, 9vw, 7.5rem)", letterSpacing: "-0.04em" }}
          >
            {project.title}
          </motion.h1>


          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.22 }}
            className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 max-w-5xl">
            <p className="text-slate-400 leading-relaxed max-w-lg"
              style={{ fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)" }}>
              {project.tagline}
            </p>

            <div className="flex items-center gap-2.5 shrink-0">
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/[0.1] bg-white/[0.05] hover:bg-white/[0.09] text-slate-300 hover:text-white text-sm font-medium transition-all">
                  <GithubIcon className="w-3.5 h-3.5" /> GitHub
                </a>
              )}
              {project.liveUrl && project.liveUrl !== "#" && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-[#060912] text-sm font-bold transition-all hover:shadow-glow-btn">
                  <ExternalLink size={14} /> Live
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>


        <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
          style={{ background: "linear-gradient(to top, #060912, transparent)" }}
        />
      </div>


      <div className="wrap pb-32">


        <div className="mb-14 -mt-6">
          <ProjectGallery
            cover={project.cover}
            screenshots={project.screenshots}
            title={project.title}
            accentColor={pal.dot}
            accentGlow={pal.glow}
          />
        </div>


        <FadeUp>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/[0.04] rounded-2xl overflow-hidden mb-24 border border-white/[0.04]">
            {[
              { l: "Year",     v: project.year },
              { l: "Domain",   v: project.category[0] },
              { l: "Stack",    v: `${project.tech.length} technologies` },
              { l: "Status",   v: status.t },
            ].map(({ l, v }) => (
              <div key={l} className="bg-[#0b1120] px-6 py-5 hover:bg-[#0f1829] transition-colors">
                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-700 mb-1.5">{l}</div>
                <div className="text-sm font-semibold text-slate-200">{v}</div>
              </div>
            ))}
          </div>
        </FadeUp>


        <FadeUp>
          <div className="mb-24">
            <SectionLabel>Overview</SectionLabel>
            <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12 items-start">
              <p className="text-slate-300 leading-[1.95] text-base lg:text-lg">
                {project.overview}
              </p>

              <div className="rounded-2xl p-6 border"
                style={{ background: `${pal.dot}0c`, borderColor: `${pal.dot}28` }}>
                <div className="w-8 h-0.5 mb-4 rounded-full" style={{ background: pal.dot }} />
                <p className="text-sm font-semibold mb-1" style={{ color: pal.text }}>
                  {project.category[0]}
                </p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {project.tech.length} technologies &middot; {project.features.length} key features &middot; {project.results.length} outcomes
                </p>
              </div>
            </div>
          </div>
        </FadeUp>

        <Rule />


        <div className="mb-24">
          <FadeUp><SectionLabel>Challenge & Approach</SectionLabel></FadeUp>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <FadeUp delay={0.06}>
              <div className="h-full rounded-2xl p-7 bg-[#0b1120] border border-white/[0.06] hover:border-white/[0.1] transition-colors relative overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />
                <span className="block text-[10px] font-bold uppercase tracking-[0.15em] text-orange-400/70 mb-5">
                  The Problem
                </span>
                <p className="text-slate-400 text-sm leading-[1.85]">{project.problem}</p>
              </div>
            </FadeUp>
            <FadeUp delay={0.13}>
              <div className="h-full rounded-2xl p-7 bg-[#0b1120] border border-white/[0.06] hover:border-white/[0.1] transition-colors relative overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-px"
                  style={{ background: `linear-gradient(90deg, transparent, ${pal.dot}60, transparent)` }}
                />
                <span className="block text-[10px] font-bold uppercase tracking-[0.15em] mb-5"
                  style={{ color: `${pal.text}b0` }}>
                  The Solution
                </span>
                <p className="text-slate-400 text-sm leading-[1.85]">{project.solution}</p>
              </div>
            </FadeUp>
          </div>
        </div>

        <Rule />


        <div className="mb-24">
          <FadeUp><SectionLabel>Key Features</SectionLabel></FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {project.features.map((f, i) => (
              <FadeUp key={f} delay={i * 0.05}>
                <div className="flex items-start gap-4 p-5 rounded-xl border border-white/[0.05] bg-white/[0.015] hover:bg-white/[0.035] hover:border-white/[0.08] transition-all group cursor-default">
                  <div className="w-5 h-5 rounded-full shrink-0 mt-0.5 flex items-center justify-center"
                    style={{ background: `${pal.dot}20`, border: `1px solid ${pal.dot}38` }}>
                    <Check size={9} style={{ color: pal.text }} strokeWidth={3} />
                  </div>
                  <span className="text-sm text-slate-500 group-hover:text-slate-400 transition-colors leading-snug">
                    {f}
                  </span>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>

        <Rule />


        <div className="mb-24">
          <FadeUp><SectionLabel>Technologies Used</SectionLabel></FadeUp>
          <FadeUp delay={0.05}>
            <div className="flex flex-wrap gap-2.5">
              {project.tech.map((t, i) => {
                const color = TECH_COLOR[t] ?? "#94a3b8";
                return (
                  <motion.span key={t}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.28, delay: i * 0.04 }}
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-medium border border-white/[0.07] bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/[0.12] transition-all cursor-default text-slate-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: color }} />
                    {t}
                  </motion.span>
                );
              })}
            </div>
          </FadeUp>
        </div>

        <Rule />


        <div className="mb-24">
          <FadeUp><SectionLabel>Results & Impact</SectionLabel></FadeUp>
          <div className="space-y-0 divide-y divide-white/[0.04]">
            {project.results.map((r, i) => (
              <FadeUp key={r} delay={i * 0.07}>
                <div className="flex items-center gap-6 py-5 group hover:bg-white/[0.02] -mx-4 px-4 rounded-lg transition-colors">
                  <span className="text-[10px] font-black font-mono tracking-widest text-slate-700 group-hover:text-slate-600 transition-colors shrink-0 w-5 text-right">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="w-px h-5 bg-white/[0.08] shrink-0" />
                  <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors leading-relaxed flex-1">
                    {r}
                  </p>
                  <div className="w-1.5 h-1.5 rounded-full shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ background: pal.dot }}
                  />
                </div>
              </FadeUp>
            ))}
          </div>
        </div>

        <Rule />


        <div className="mb-24">
          <FadeUp><SectionLabel>Lessons Learned</SectionLabel></FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {project.lessons.map((l, i) => (
              <FadeUp key={l} delay={i * 0.08}>
                <div className="relative h-full p-6 rounded-2xl border border-white/[0.05] bg-[#0b1120] overflow-hidden hover:border-white/[0.09] transition-colors group">

                  <div className="absolute -bottom-4 -right-2 font-black leading-none select-none pointer-events-none"
                    style={{ fontSize: "7rem", color: `${pal.dot}07` }}>
                    {i + 1}
                  </div>
                  <div className="relative">
                    <div className="w-5 h-0.5 rounded-full mb-5" style={{ background: pal.dot }} />
                    <p className="text-sm text-slate-500 group-hover:text-slate-400 leading-[1.8] transition-colors">
                      {l}
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>


        <FadeUp>
          <div className="relative rounded-2xl overflow-hidden border border-white/[0.07]">
            <div className="absolute inset-0 bg-[#0b1120]" />
            <div className="absolute inset-0"
              style={{ background: `radial-gradient(ellipse 90% 80% at 10% 120%, ${pal.glow} 0%, transparent 55%)` }}
            />
            <div className="absolute top-0 inset-x-0 h-px"
              style={{ background: `linear-gradient(90deg, transparent 10%, ${pal.dot}50, transparent 90%)` }}
            />

            <div className="relative p-10 lg:p-14 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.15em] mb-3" style={{ color: pal.text }}>
                  Hire Me
                </p>
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2 tracking-tight"
                  style={{ letterSpacing: "-0.025em" }}>
                  Want to build something like this?
                </h2>
                <p className="text-slate-500 text-sm max-w-md leading-relaxed">
                  Open to freelance projects, SaaS builds, data products, and business websites.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 shrink-0">
                <Link href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-[#060912] font-bold text-sm transition-all hover:shadow-glow-btn whitespace-nowrap">
                  Get In Touch <ArrowUpRight size={15} />
                </Link>
                <Link href="/projects"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/[0.1] hover:border-white/[0.18] bg-white/[0.04] hover:bg-white/[0.07] text-slate-300 hover:text-white font-semibold text-sm transition-all whitespace-nowrap">
                  <ArrowLeft size={14} /> All Projects
                </Link>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </article>
  );
}
