"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Search,
  Layers,
  Code2,
  Rocket,
  MessageSquare,
  FileText,
  RefreshCw,
  ShieldCheck,
} from "lucide-react";

/* ── Process steps ─────────────────────────────────────────────── */
const STEPS = [
  {
    n:    "01",
    icon: Search,
    title: "Understand",
    sub:   "Discovery & Scoping",
    desc:  "I start by learning the actual problem, not just the feature list. What does success look like? Who are the users? What are the constraints? This shapes everything downstream.",
    accent: "#06b6d4",
    dim:    "rgba(6,182,212,0.08)",
    border: "rgba(6,182,212,0.2)",
  },
  {
    n:    "02",
    icon: Layers,
    title: "Plan",
    sub:   "Architecture & Scope",
    desc:  "Before writing a line of code I produce a clear technical plan, stack decision, database schema, API structure, milestones, and an honest timeline. No surprises later.",
    accent: "#8b5cf6",
    dim:    "rgba(139,92,246,0.08)",
    border: "rgba(139,92,246,0.2)",
  },
  {
    n:    "03",
    icon: Code2,
    title: "Build",
    sub:   "Iterative Development",
    desc:  "Development happens in short cycles with visible progress. You always know what I'm working on. I ship working pieces early so we can validate direction before it's too late to change.",
    accent: "#3b82f6",
    dim:    "rgba(59,130,246,0.08)",
    border: "rgba(59,130,246,0.2)",
  },
  {
    n:    "04",
    icon: Rocket,
    title: "Ship",
    sub:   "Deploy & Handoff",
    desc:  "Production deployment, final testing, performance checks, and a clean handoff. I stay available post-launch, bugs don't always surface during testing.",
    accent: "#10b981",
    dim:    "rgba(16,185,129,0.08)",
    border: "rgba(16,185,129,0.2)",
  },
];

/* ── Working principles ─────────────────────────────────────────── */
const PRINCIPLES = [
  {
    icon:  FileText,
    title: "Written scope before code",
    body:  "I document what we're building and agree on it before starting. Avoids scope creep and wasted work.",
    accent: "#06b6d4",
  },
  {
    icon:  MessageSquare,
    title: "Proactive communication",
    body:  "I don't disappear mid-project. If something changes or takes longer, you hear about it early, not at deadline.",
    accent: "#8b5cf6",
  },
  {
    icon:  RefreshCw,
    title: "Iterative, not waterfall",
    body:  "I ship working slices early so we can validate direction. Feedback loops are built in, not bolted on.",
    accent: "#3b82f6",
  },
  {
    icon:  ShieldCheck,
    title: "Quality over speed",
    body:  "TypeScript, clean abstractions, proper testing, readable code. The work I hand over is work you can build on.",
    accent: "#10b981",
  },
];

/* ── Step card ──────────────────────────────────────────────────── */
function StepCard({
  step,
  index,
  isLast,
}: {
  step: typeof STEPS[0];
  index: number;
  isLast: boolean;
}) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const Icon   = step.icon;

  return (
    <div ref={ref} className="relative flex flex-col">
      {/* Connector line between cards (desktop only) */}
      {!isLast && (
        <div className="hidden lg:block absolute top-[2.25rem] left-full w-full h-px z-0"
          style={{ width: "calc(100% - 4.5rem)" }}>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.3 + index * 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="h-full origin-left"
            style={{
              background: `linear-gradient(90deg, ${step.accent}60, ${STEPS[index + 1].accent}30)`,
            }}
          />
          {/* Arrow head */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.3, delay: 0.9 + index * 0.15 }}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0"
            style={{
              borderTop: "4px solid transparent",
              borderBottom: "4px solid transparent",
              borderLeft: `6px solid ${STEPS[index + 1].accent}50`,
            }}
          />
        </div>
      )}

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.55, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 flex flex-col h-full rounded-2xl border p-6 group hover:shadow-card-hover transition-all duration-300"
        style={{
          background:   step.dim,
          borderColor:  "rgba(255,255,255,0.06)",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.borderColor = step.border;
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)";
        }}
      >
        {/* Top accent line */}
        <div className="absolute top-0 inset-x-0 h-px rounded-t-2xl"
          style={{ background: `linear-gradient(90deg, ${step.accent}60, transparent)` }}
        />

        {/* Number + Icon row */}
        <div className="flex items-center justify-between mb-5">
          <span
            className="text-[2.6rem] font-black leading-none tracking-tight select-none"
            style={{ color: `${step.accent}18` }}
          >
            {step.n}
          </span>
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
            style={{ background: `${step.accent}15`, border: `1px solid ${step.accent}30` }}
          >
            <Icon size={18} style={{ color: step.accent }} />
          </div>
        </div>

        {/* Text */}
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.13em] mb-1.5"
            style={{ color: step.accent }}>
            {step.sub}
          </p>
          <h3 className="text-lg font-bold text-white mb-3 tracking-tight">
            {step.title}
          </h3>
          <p className="text-sm text-slate-500 leading-relaxed group-hover:text-slate-400 transition-colors">
            {step.desc}
          </p>
        </div>

        {/* Step indicator dot */}
        <div className="mt-5 pt-4 border-t border-white/[0.05] flex items-center gap-2">
          <div className="w-2 h-2 rounded-full" style={{ background: step.accent }} />
          <span className="text-[10px] text-slate-700 font-mono tracking-widest">STEP {step.n}</span>
        </div>
      </motion.div>
    </div>
  );
}

/* ── Principle card ─────────────────────────────────────────────── */
function PrincipleCard({
  p,
  i,
}: {
  p: typeof PRINCIPLES[0];
  i: number;
}) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const Icon   = p.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group flex gap-4 p-5 rounded-2xl border border-white/[0.05] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.09] transition-all duration-250"
    >
      {/* Icon */}
      <div
        className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
        style={{ background: `${p.accent}12`, border: `1px solid ${p.accent}25` }}
      >
        <Icon size={16} style={{ color: p.accent }} />
      </div>

      {/* Text */}
      <div>
        <h4 className="text-sm font-semibold text-slate-200 mb-1.5 group-hover:text-white transition-colors leading-snug">
          {p.title}
        </h4>
        <p className="text-xs text-slate-600 leading-relaxed group-hover:text-slate-500 transition-colors">
          {p.body}
        </p>
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   MAIN EXPORT
═══════════════════════════════════════════════════════════════════ */
export default function HowIWork() {
  const headerRef = useRef(null);
  const inView    = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section className="section border-t border-white/[0.05]" style={{ background: "#070c18" }}>
      <div className="wrap">

        {/* ── Header ────────────────────────────────────────── */}
        <div ref={headerRef} className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10 mb-16 items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="eyebrow mb-4 block">Process</span>
            <h2
              className="font-bold text-white tracking-tight"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", letterSpacing: "-0.03em" }}
            >
              How I Work
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-slate-500 text-sm leading-relaxed lg:text-base self-end"
          >
            A structured process that keeps projects on track, clients informed,
            and output high-quality, from first conversation to final deployment.
          </motion.p>
        </div>

        {/* ── Step cards ────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {STEPS.map((step, i) => (
            <StepCard
              key={step.n}
              step={step}
              index={i}
              isLast={i === STEPS.length - 1}
            />
          ))}
        </div>

        {/* ── Divider ───────────────────────────────────────── */}
        <div className="h-px bg-white/[0.05] mb-10" />

        {/* ── Principles ────────────────────────────────────── */}
        <div className="mb-6">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-700 mb-6"
          >
            Working Principles
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PRINCIPLES.map((p, i) => (
              <PrincipleCard key={p.title} p={p} i={i} />
            ))}
          </div>
        </div>

        {/* ── Bottom quote ──────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 pt-8 border-t border-white/[0.05] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        >
          <p className="text-slate-600 text-sm max-w-lg leading-relaxed">
            <span className="text-slate-400 font-medium">Every project is different.</span>{" "}
            But this framework, understand, plan, build, ship, adapts to whether
            you need a quick MVP or a production-grade platform.
          </p>
          <div className="shrink-0 flex items-center gap-2 text-xs text-slate-700 font-mono tracking-wide">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-slow" />
            Currently available
          </div>
        </motion.div>

      </div>
    </section>
  );
}
