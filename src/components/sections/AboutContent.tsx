"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { IMAGES, ALT } from "@/lib/images";
import Link from "next/link";
import {
  Brain,
  Code2,
  BarChart3,
  Server,
  ArrowRight,
  CheckCircle2,
  Zap,
  Target,
  Layers,
  RefreshCw,
  Users,
  MapPin,
  Activity,
} from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] },
});

const CAPABILITIES = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    desc: "I design and ship ML systems that do real work, predictive models, NLP pipelines, recommendation engines, and AI API integrations that make products measurably smarter.",
    tags: ["PyTorch", "Scikit-learn", "OpenAI", "Groq", "NLP", "XGBoost"],
    accent: "#8b5cf6",
    dim: "rgba(139,92,246,0.07)",
    border: "rgba(139,92,246,0.18)",
  },
  {
    icon: Code2,
    title: "Full Stack Engineering",
    desc: "End-to-end product engineering with Next.js, TypeScript, and FastAPI. From database schema to deployed frontend, production-grade, clean architecture, and properly tested.",
    tags: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL", "Supabase"],
    accent: "#06b6d4",
    dim: "rgba(6,182,212,0.07)",
    border: "rgba(6,182,212,0.18)",
  },
  {
    icon: BarChart3,
    title: "Data Science & Analytics",
    desc: "Turning raw, messy data into decisions. EDA, feature engineering, dashboards, and business intelligence reports that give stakeholders a clear view of what's happening and why.",
    tags: ["Python", "Pandas", "Matplotlib", "Power BI", "Streamlit"],
    accent: "#3b82f6",
    dim: "rgba(59,130,246,0.07)",
    border: "rgba(59,130,246,0.18)",
  },
];

const PHASES = [
  {
    label: "Foundation",
    title: "Data Science & ML Core",
    desc: "Built the foundation in Python, statistical analysis, and machine learning. Shipped regression, classification, and NLP models on real datasets, not toy examples. Learned that data cleaning is 70% of the work and feature engineering matters more than model selection.",
    stack: ["Python", "Pandas", "Scikit-learn", "NumPy", "Matplotlib"],
    accent: "#3b82f6",
  },
  {
    label: "Backend Systems",
    title: "APIs, Databases & Architecture",
    desc: "Moved into production backend engineering, FastAPI, PostgreSQL, JWT authentication, SQLAlchemy ORM, and Docker deployment. Built systems designed to handle real traffic with proper abstractions and documentation.",
    stack: ["FastAPI", "PostgreSQL", "SQLAlchemy", "JWT", "Docker"],
    accent: "#10b981",
  },
  {
    label: "Product Development",
    title: "Full Stack & Client Work",
    desc: "Shipped full products, premium healthcare websites for plastic surgery clinics, a SaaS platform with Stripe billing and AI integrations, and multiple business sites that convert visitors. Learned that technical quality and business outcome are not separate concerns.",
    stack: ["Next.js", "TypeScript", "Supabase", "Stripe", "Framer Motion"],
    accent: "#8b5cf6",
  },
  {
    label: "Current",
    title: "AI Products at Scale",
    desc: "Now focused on AI-powered SaaS, LLM integrations, and building products that put intelligence directly into user workflows. Combining the ML background, backend architecture skills, and product instinct into a single focused output.",
    stack: ["OpenAI", "Groq", "Next.js", "Supabase", "PyTorch"],
    accent: "#06b6d4",
  },
];

const TECH_GROUPS = [
  {
    category: "AI & Machine Learning",
    color: "#8b5cf6",
    skills: ["PyTorch", "Scikit-learn", "XGBoost", "NLTK", "OpenAI API", "Groq", "Hugging Face"],
  },
  {
    category: "Data Science",
    color: "#3b82f6",
    skills: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Power BI", "Streamlit"],
  },
  {
    category: "Frontend",
    color: "#06b6d4",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Backend",
    color: "#10b981",
    skills: ["FastAPI", "Node.js", "PostgreSQL", "Supabase", "SQLAlchemy", "JWT", "Alembic"],
  },
  {
    category: "Infrastructure",
    color: "#f59e0b",
    skills: ["Docker", "Vercel", "Render", "Git", "GitHub", "CPanel"],
  },
  {
    category: "Integrations",
    color: "#ec4899",
    skills: ["Stripe API", "OpenAI API", "Supabase Auth", "REST", "Postman"],
  },
];

const FOCUS_NOW = [
  {
    title: "MyamiCV AI",
    type: "SaaS Platform",
    status: "Building",
    statusColor: "#06b6d4",
    desc: "AI resume builder with ATS scoring, cover letter generation, and Stripe billing. Full SaaS architecture, auth, billing, AI pipeline, dashboard.",
    tech: ["Next.js", "Supabase", "OpenAI", "Stripe"],
  },
  {
    title: "AI SaaS Architecture",
    type: "Technical Focus",
    status: "Active",
    statusColor: "#8b5cf6",
    desc: "Deepening expertise in LLM integrations, vector databases, and building AI-native product workflows. RAG systems, prompt engineering, multi-model pipelines.",
    tech: ["OpenAI", "Groq", "LangChain", "PostgreSQL"],
  },
  {
    title: "Healthcare Digital Products",
    type: "Client Work",
    status: "Ongoing",
    statusColor: "#10b981",
    desc: "Premium websites for medical professionals and clinics, focused on conversion, trust-building design, and local SEO that drives real patient inquiries.",
    tech: ["Next.js", "Framer Motion", "SEO", "TypeScript"],
  },
];

const PRINCIPLES = [
  {
    icon: Users,
    n: "01",
    title: "Build for real users",
    desc: "Products exist to solve problems for people. Every technical decision should trace back to a user outcome.",
  },
  {
    icon: Target,
    n: "02",
    title: "Data-driven decisions",
    desc: "Intuition is useful. Data is better. I measure what matters and let evidence shape direction.",
  },
  {
    icon: Zap,
    n: "03",
    title: "Performance by design",
    desc: "Speed is a feature. I build fast applications by default, not by bolting optimizations on afterward.",
  },
  {
    icon: Layers,
    n: "04",
    title: "Simplicity over cleverness",
    desc: "The best code is the code that doesn't need explaining. Simple, readable, extensible.",
  },
  {
    icon: Server,
    n: "05",
    title: "Architecture that scales",
    desc: "I design systems that grow with the product, not systems that need to be rewritten the moment traffic picks up.",
  },
  {
    icon: RefreshCw,
    n: "06",
    title: "Ship, learn, iterate",
    desc: "Working software beats perfect plans. I ship early, gather signal, and improve in cycles, not in isolation.",
  },
];

function AboutPhoto() {
  const [err, setErr] = useState(false);
  const W = 300, H = 400, R = 16, PERIM = 1420;

  return (
    <div className="relative w-full max-w-[288px] mx-auto lg:mx-0 select-none">
      <div className="absolute -inset-8 rounded-3xl blur-3xl opacity-25 pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #06b6d4 0%, #8b5cf6 60%, transparent 80%)" }} />

      <div className="relative rounded-2xl" style={{ padding: "2px", overflow: "hidden" }}>
        <motion.div className="absolute pointer-events-none"
          style={{ width: "200%", height: "200%", top: "-50%", left: "-50%",
            background: "conic-gradient(from 0deg, transparent 0%, transparent 30%, #06b6d4 45%, #22d3ee 55%, transparent 70%, transparent 100%)" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }} />
        <motion.div className="absolute pointer-events-none opacity-50"
          style={{ width: "200%", height: "200%", top: "-50%", left: "-50%",
            background: "conic-gradient(from 200deg, transparent 0%, transparent 30%, #8b5cf6 45%, #a78bfa 55%, transparent 70%, transparent 100%)" }}
          animate={{ rotate: -360 }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "linear" }} />

        <div className="relative rounded-xl overflow-hidden aspect-[3/4]" style={{ background: "#070c18" }}>
          {!err ? (
            <Image src={IMAGES.about.workspace} alt={ALT.workspace} fill
              sizes="(max-width:768px) 80vw, 320px" className="object-cover object-center"
              onError={() => setErr(true)} priority />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center"
              style={{ background: "linear-gradient(135deg,#0891b2,#7c3aed)" }}>
              <span className="text-5xl font-black text-white/20">AR</span>
            </div>
          )}
          <motion.div className="absolute inset-x-0 h-[2px] pointer-events-none"
            style={{ background: "linear-gradient(90deg, transparent 0%, rgba(6,182,212,0.0) 10%, rgba(6,182,212,0.7) 40%, rgba(129,140,248,0.7) 60%, rgba(6,182,212,0.0) 90%, transparent 100%)", boxShadow: "0 0 12px rgba(6,182,212,0.5)" }}
            animate={{ y: ["-4px", "calc(100% + 4px)"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear", repeatDelay: 0.4 }} />
          <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-[#060912]/70 to-transparent pointer-events-none" />
          <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none"
            className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 10 }}>
            <motion.rect x="1.5" y="1.5" width={W-3} height={H-3} rx={R} ry={R}
              fill="none" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round"
              strokeDasharray={`90 ${PERIM}`}
              animate={{ strokeDashoffset: [0, -PERIM] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }} />
            <motion.rect x="1.5" y="1.5" width={W-3} height={H-3} rx={R} ry={R}
              fill="none" stroke="#818cf8" strokeWidth="1.5" strokeLinecap="round"
              strokeDasharray={`55 ${PERIM}`}
              animate={{ strokeDashoffset: [-(PERIM/3), -(PERIM/3)-PERIM] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "linear" }} />
            <motion.rect x="1.5" y="1.5" width={W-3} height={H-3} rx={R} ry={R}
              fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="1" strokeLinecap="round"
              strokeDasharray={`30 ${PERIM}`}
              animate={{ strokeDashoffset: [-(PERIM*2)/3, -(PERIM*2)/3-PERIM] }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }} />
          </svg>
        </div>
      </div>

      {(["tl","tr","bl","br"] as const).map((pos, i) => (
        <motion.div key={pos} className="absolute w-5 h-5 pointer-events-none"
          style={{
            top: pos.startsWith("t") ? 2 : "auto", bottom: pos.startsWith("b") ? 2 : "auto",
            left: pos.endsWith("l") ? 2 : "auto", right: pos.endsWith("r") ? 2 : "auto",
            borderTop: pos.startsWith("t") ? "2px solid" : "none",
            borderBottom: pos.startsWith("b") ? "2px solid" : "none",
            borderLeft: pos.endsWith("l") ? "2px solid" : "none",
            borderRight: pos.endsWith("r") ? "2px solid" : "none",
            borderColor: i % 2 === 0 ? "#06b6d4" : "#8b5cf6",
            borderRadius: pos==="tl"?"8px 0 0 0":pos==="tr"?"0 8px 0 0":pos==="bl"?"0 0 0 8px":"0 0 8px 0",
          }}
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: i * 0.55 }} />
      ))}

      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/25 bg-[#060912] text-[11px] font-semibold text-emerald-400 whitespace-nowrap shadow-xl z-20">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
        Open to Work · 2025
      </div>
    </div>
  );
}

export default function AboutContent() {
  return (
    <div className="pt-24">


      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-100" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cyan-500/[0.04] blur-[120px]" />

        <div className="wrap relative">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] xl:grid-cols-[1fr_320px] gap-14 xl:gap-20 items-center">

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, ease: [0.22,1,0.36,1] }}>
              <span className="eyebrow mb-5 block">About Me</span>
              <h1 className="font-bold text-white leading-tight mb-6"
                style={{ fontSize: "clamp(2rem,4.5vw,3.4rem)", letterSpacing: "-0.03em" }}>
                I Build AI-Powered Products,<br />
                <span className="gradient-text">Data Systems &amp; Applications</span><br />
                That Solve Real Problems.
              </h1>
              <p className="text-slate-400 leading-[1.85] mb-4"
                style={{ fontSize: "clamp(0.95rem,1.4vw,1.05rem)" }}>
                I&apos;m Ateeq Rehman Wazir, a Data Scientist and Full Stack Developer based in Pakistan,
                building for the world remotely. I work across the entire product stack: from training
                ML models and engineering data pipelines, to shipping polished Next.js applications
                and FastAPI backends that handle real user traffic.
              </p>
              <p className="text-slate-500 leading-[1.85] mb-8" style={{ fontSize: "clamp(0.9rem,1.3vw,1rem)" }}>
                What separates my work is the combination of technical depth and business clarity.
                I don&apos;t just write code, I understand what the product needs to do, who it&apos;s for,
                and how to measure whether it&apos;s working. That cross-domain thinking is where I add the most value.
              </p>


              <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
                {[
                  { icon: MapPin, text: "Islamabad, PK · Remote" },
                  { icon: Activity, text: "Open to Work" },
                  { icon: CheckCircle2, text: "15+ Projects Shipped" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-2 text-slate-500">
                    <Icon size={13} className="text-slate-700 shrink-0" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.22,1,0.36,1] }}
              className="hidden lg:block"
            >
              <AboutPhoto />
            </motion.div>
          </div>
        </div>
      </section>


      <section className="py-16 border-t border-white/[0.05]" style={{ background: "#070c18" }}>
        <div className="wrap">
          <motion.div {...fadeUp()} className="mb-12">
            <span className="eyebrow mb-4 block">Capabilities</span>
            <h2 className="font-bold text-white tracking-tight"
              style={{ fontSize: "clamp(1.6rem,3vw,2.2rem)", letterSpacing: "-0.025em" }}>
              What I Specialise In
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {CAPABILITIES.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <motion.div key={cap.title} {...fadeUp(i * 0.1)}
                  className="rounded-2xl border border-white/[0.06] p-6 hover:border-white/[0.1] transition-all duration-300 relative overflow-hidden group"
                  style={{ background: cap.dim }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = cap.border}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)"}
                >
                  <div className="absolute top-0 inset-x-0 h-px"
                    style={{ background: `linear-gradient(90deg, transparent, ${cap.accent}50, transparent)` }} />
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: `${cap.accent}18`, border: `1px solid ${cap.accent}30` }}>
                    <Icon size={20} style={{ color: cap.accent }} />
                  </div>
                  <h3 className="text-base font-bold text-white mb-3 tracking-tight">{cap.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-5 group-hover:text-slate-400 transition-colors">
                    {cap.desc}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {cap.tags.map(t => (
                      <span key={t} className="text-[10px] font-medium px-2 py-0.5 rounded border"
                        style={{ borderColor: `${cap.accent}25`, background: `${cap.accent}0a`, color: cap.accent }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>


      <section className="py-16 border-t border-white/[0.05]">
        <div className="wrap">
          <motion.div {...fadeUp()} className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="eyebrow mb-3 block">Stack</span>
              <h2 className="font-bold text-white tracking-tight"
                style={{ fontSize: "clamp(1.6rem,3vw,2.2rem)", letterSpacing: "-0.025em" }}>
                Technology Ecosystem
              </h2>
            </div>
            <p className="text-slate-600 text-sm max-w-xs text-right hidden sm:block">
              Intentionally curated. Production-tested.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {TECH_GROUPS.map((group, i) => (
              <motion.div key={group.category} {...fadeUp(i * 0.07)}
                className="rounded-xl border border-white/[0.06] p-5 hover:border-white/[0.1] transition-colors duration-250"
                style={{ background: "#0b1120" }}
              >
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-2 h-2 rounded-full shrink-0"
                    style={{ background: group.color, boxShadow: `0 0 8px ${group.color}60` }} />
                  <span className="text-xs font-bold text-white uppercase tracking-wider">
                    {group.category}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {group.skills.map(skill => (
                    <span key={skill}
                      className="text-[11px] font-medium px-2.5 py-1 rounded-md border"
                      style={{ borderColor: `${group.color}28`, background: `${group.color}0e`, color: group.color }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      <section className="py-16 border-t border-white/[0.05]" style={{ background: "#070c18" }}>
        <div className="wrap">
          <motion.div {...fadeUp()} className="mb-12">
            <span className="eyebrow mb-4 block">Progression</span>
            <h2 className="font-bold text-white tracking-tight"
              style={{ fontSize: "clamp(1.6rem,3vw,2.2rem)", letterSpacing: "-0.025em" }}>
              How I Got Here
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {PHASES.map((phase, i) => (
              <motion.div key={phase.label} {...fadeUp(i * 0.09)}
                className="rounded-2xl border border-white/[0.06] p-6 hover:border-white/[0.1] transition-colors group"
                style={{ background: "#0b1120" }}
              >

                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-[0.15em]"
                    style={{ color: phase.accent }}>
                    {phase.label}
                  </span>
                  {phase.label === "Current" && (
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold text-emerald-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Active
                    </span>
                  )}
                </div>

                <div className="w-8 h-0.5 rounded-full mb-4"
                  style={{ background: phase.accent }} />
                <h3 className="text-sm font-bold text-white mb-3 leading-snug">{phase.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-4 group-hover:text-slate-400 transition-colors">
                  {phase.desc}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {phase.stack.map(t => (
                    <span key={t} className="text-[10px] px-2 py-0.5 rounded bg-white/[0.04] text-slate-500 border border-white/[0.06]">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      <section className="py-16 border-t border-white/[0.05]">
        <div className="wrap">
          <motion.div {...fadeUp()} className="mb-12">
            <span className="eyebrow mb-4 block">Right Now</span>
            <h2 className="font-bold text-white tracking-tight"
              style={{ fontSize: "clamp(1.6rem,3vw,2.2rem)", letterSpacing: "-0.025em" }}>
              Current Focus
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {FOCUS_NOW.map((item, i) => (
              <motion.div key={item.title} {...fadeUp(i * 0.1)}
                className="rounded-2xl border border-white/[0.07] p-5 hover:border-white/[0.12] transition-all group relative overflow-hidden"
                style={{ background: "#0b1120" }}
              >

                <div className="absolute top-0 inset-x-0 h-px"
                  style={{ background: `linear-gradient(90deg, transparent, ${item.statusColor}50, transparent)` }} />

                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-600">{item.type}</span>
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold"
                    style={{ color: item.statusColor }}>
                    <span className="w-1.5 h-1.5 rounded-full animate-pulse"
                      style={{ background: item.statusColor }} />
                    {item.status}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-white mb-2">{item.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-4 group-hover:text-slate-400 transition-colors">
                  {item.desc}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {item.tech.map(t => (
                    <span key={t} className="text-[10px] px-2 py-0.5 rounded bg-white/[0.04] text-slate-600 border border-white/[0.06]">{t}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      <section className="py-16 border-t border-white/[0.05]" style={{ background: "#070c18" }}>
        <div className="wrap">
          <motion.div {...fadeUp()} className="mb-12">
            <span className="eyebrow mb-4 block">How I Work</span>
            <h2 className="font-bold text-white tracking-tight"
              style={{ fontSize: "clamp(1.6rem,3vw,2.2rem)", letterSpacing: "-0.025em" }}>
              Engineering Principles
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.04] rounded-2xl overflow-hidden">
            {PRINCIPLES.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div key={p.n} {...fadeUp(i * 0.06)}
                  className="group bg-[#070c18] hover:bg-[#0b1120] p-6 transition-colors duration-250 relative overflow-hidden"
                >

                  <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-cyan-500/0 via-cyan-500/40 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-[10px] font-black font-mono tracking-widest text-slate-700 group-hover:text-cyan-500/50 transition-colors">
                      {p.n}
                    </span>
                    <div className="w-7 h-7 rounded-lg bg-white/[0.04] border border-white/[0.07] flex items-center justify-center">
                      <Icon size={13} className="text-slate-700 group-hover:text-cyan-400 transition-colors" />
                    </div>
                  </div>
                  <h3 className="text-sm font-bold text-slate-200 group-hover:text-white transition-colors mb-2 leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed group-hover:text-slate-500 transition-colors">
                    {p.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>


      <section className="py-16 border-t border-white/[0.05]">
        <div className="wrap">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-14 items-start">
            <motion.div {...fadeUp()}>
              <span className="eyebrow mb-4 block">Philosophy</span>
              <h2 className="font-bold text-white tracking-tight mb-6"
                style={{ fontSize: "clamp(1.6rem,3vw,2.2rem)", letterSpacing: "-0.025em" }}>
                Why I Build
              </h2>
              <p className="text-slate-400 leading-[1.9] mb-5" style={{ fontSize: "clamp(0.9rem,1.3vw,1rem)" }}>
                Most developers build features. I build outcomes. The distinction matters because
                features are easy to ship, outcomes require understanding the user, the market,
                and what success actually looks like before writing a single line of code.
              </p>
              <p className="text-slate-500 leading-[1.9] mb-5" style={{ fontSize: "clamp(0.9rem,1.3vw,1rem)" }}>
                I came to software through data science, which means I think in systems and
                probabilities before I think in code. That background gives me an unusual ability
                to see both the technical architecture and the business logic simultaneously, and
                to know which one to optimise first.
              </p>
              <p className="text-slate-500 leading-[1.9] mb-8" style={{ fontSize: "clamp(0.9rem,1.3vw,1rem)" }}>
                The work I find most meaningful sits at the intersection of AI and real products:
                tools that help people make better decisions, systems that automate the tedious
                so people can focus on the consequential, websites that actually convert because
                they were designed to earn trust.
              </p>
              <Link href="/contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors">
                Let&apos;s build something together <ArrowRight size={14} />
              </Link>
            </motion.div>


            <motion.div {...fadeUp(0.12)}>
              <div className="rounded-2xl border border-white/[0.07] overflow-hidden"
                style={{ background: "#0b1120" }}>
                <div className="h-px bg-gradient-to-r from-cyan-500/50 via-violet-500/30 to-transparent" />
                <div className="p-6 space-y-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-700">
                    What I value in work
                  </p>
                  {[
                    "Real users with real problems", "Measurable business outcomes", "Clean, extensible codebases", "Fast feedback loops", "Cross-discipline collaboration",
                  ].map((val, i) => (
                    <div key={val} className="flex items-start gap-3">
                      <CheckCircle2 size={13} className="text-cyan-500/60 shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-400">{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}
