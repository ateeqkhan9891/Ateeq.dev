"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Download, ArrowRight, Star, Check, MapPin } from "lucide-react";
import Image from "next/image";
import { IMAGES, ALT } from "@/lib/images";

/* ── Avatar data for social proof strip ────────────────── */
const AVATARS = [
  { initials: "DK", from: "#0891b2", to: "#2563eb",  label: "Dr Karamat"   },
  { initials: "DM", from: "#be185d", to: "#9333ea",  label: "Dr Miami"     },
  { initials: "DZ", from: "#059669", to: "#0284c7",  label: "Dr Zulqarnain"},
  { initials: "HA", from: "#7c3aed", to: "#db2777",  label: "Hamza A."     },
  { initials: "NW", from: "#b45309", to: "#c2410c",  label: "Nawal"        },
];

/* ── Social proof strip component ──────────────────────── */
function SocialProofStrip() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="flex items-center gap-4 mb-10"
    >
      {/* Stacked avatar row */}
      <div className="flex items-center">
        {AVATARS.map((av, i) => (
          <motion.div
            key={av.initials}
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.65 + i * 0.06 }}
            title={av.label}
            className="relative group"
            style={{ marginLeft: i === 0 ? 0 : "-10px", zIndex: AVATARS.length - i }}
          >
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-white ring-2 ring-[#060912] text-[11px] font-bold select-none"
              style={{ background: `linear-gradient(135deg, ${av.from}, ${av.to})` }}
            >
              {av.initials}
            </div>
            {/* Hover tooltip */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-md bg-[#0f1829] border border-white/[0.1] text-[10px] text-slate-300 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
              {av.label}
            </div>
          </motion.div>
        ))}

        {/* +N overflow badge */}
        <motion.div
          initial={{ opacity: 0, x: -6 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.65 + AVATARS.length * 0.06 }}
          className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold text-slate-400 ring-2 ring-[#060912]"
          style={{ marginLeft: "-10px", background: "#131f35", zIndex: 0 }}
        >
          +25
        </motion.div>
      </div>

      {/* Divider */}
      <div className="w-px h-8 bg-white/[0.08]" />

      {/* Stars + label */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 1.05 }}
        className="flex flex-col gap-0.5"
      >
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={12} className="fill-amber-400 text-amber-400" />
          ))}
          <span className="text-xs font-bold text-white ml-1">5.0</span>
        </div>
        <p className="text-[11px] text-slate-500 leading-none">
          <span className="text-slate-300 font-semibold">30+</span> positive reviews
        </p>
      </motion.div>
    </motion.div>
  );
}

/* ── Roles ─────────────────────────────────────────────── */
const ROLES = [
  "Data Scientist", "AI Developer", "Full Stack Dev", "Next.js Engineer", "Backend Architect",
];

/* ── Marquee tech ───────────────────────────────────────── */
const TECH = [
  { name: "Python",       dot: "#3b82f6" },
  { name: "Next.js",      dot: "#f0f6ff" },
  { name: "TypeScript",   dot: "#06b6d4" },
  { name: "FastAPI",      dot: "#22c55e" },
  { name: "PyTorch",      dot: "#f97316" },
  { name: "PostgreSQL",   dot: "#38bdf8" },
  { name: "Supabase",     dot: "#34d399" },
  { name: "OpenAI",       dot: "#a78bfa" },
  { name: "Scikit-learn", dot: "#fb923c" },
  { name: "Docker",       dot: "#60a5fa" },
  { name: "Tailwind CSS", dot: "#06b6d4" },
  { name: "Framer",       dot: "#e879f9" },
];

/* ── Featured projects ─────────────────────────────────── */
const FEATURED = [
  { name: "MyamiCV AI",             label: "AI SaaS",          color: "#8b5cf6", href: "/projects/myamicv-ai" },
  { name: "Miami Aesthetic Care",   label: "Healthcare Web",   color: "#ec4899", href: "/projects/miami-aesthetic-care" },
  { name: "Dr Zulqarnain Surgery",  label: "Medical Brand",    color: "#06b6d4", href: "/projects/dr-zulqarnain" },
];

/* ── Trust stats ────────────────────────────────────────── */
const STATS = [
  { value: "15+", label: "Projects Built" },
  { value: "3+",  label: "Business Sites" },
  { value: "5+",  label: "Tech Domains"   },
];

/* ── 5 stars ────────────────────────────────────────────── */
function Stars() {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={13} className="fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

/* ── Card wrapper, glass + hover lift ──────────────────── */
function GlassCard({
  children,
  className = "",
  glowColor = "rgba(6,182,212,0.12)",
  delay = 0,
  floatClass = "",
}: {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  delay?: number;
  floatClass?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, transition: { duration: 0.25 } }}
      className={`relative rounded-2xl border border-white/[0.09] backdrop-blur-xl overflow-hidden cursor-default ${floatClass} ${className}`}
      style={{
        background: "rgba(11,17,32,0.75)",
        boxShadow: `0 0 0 1px rgba(255,255,255,0.04), 0 8px 32px rgba(0,0,0,0.5), 0 0 40px ${glowColor}`,
      }}
    >
      {/* Subtle top-edge shimmer */}
      <div className="absolute top-0 inset-x-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)" }}
      />
      {children}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════ */
export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setRoleIdx((p) => (p + 1) % ROLES.length), 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden">

      {/* ── Background ────────────────────────────────────── */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-100" />
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="orb absolute top-[-10%] left-[30%] w-[600px] h-[600px] rounded-full bg-cyan-500/[0.04] blur-[120px] pointer-events-none" />
      <div className="orb-2 absolute bottom-[-5%] right-[-5%] w-[500px] h-[500px] rounded-full bg-violet-600/[0.04] blur-[100px] pointer-events-none" />
      <div className="orb-3 absolute top-[40%] left-[-5%] w-[400px] h-[400px] rounded-full bg-blue-600/[0.03] blur-[90px] pointer-events-none" />

      {/* ── Main content ──────────────────────────────────── */}
      <div className="relative wrap py-16 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_460px] gap-14 xl:gap-20 items-center">

          {/* ──────────────────────────────────────────────
              LEFT, unchanged text content
          ────────────────────────────────────────────── */}
          <div>

            {/* Status pill */}
            <motion.div
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/[0.07] text-emerald-400 text-xs font-medium tracking-wide mb-8"
            >
              <span className="pulse-dot w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Available for new projects · 2025
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-bold text-white leading-[1.06] tracking-[-0.03em] mb-5"
              style={{ fontSize: "clamp(2.6rem, 5.5vw, 4.6rem)" }}
            >
              Building
              <br />
              <span className="gradient-text">AI-Powered</span>
              <br />
              Products That
              <br />
              <span className="text-slate-400 font-semibold">Actually Work.</span>
            </motion.h1>

            {/* Role switcher */}
            <motion.div
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex items-center gap-3 mb-7"
            >
              <div className="h-px w-6 bg-cyan-500/60" />
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIdx}
                  initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.28 }}
                  className="text-sm font-semibold tracking-wide text-cyan-400 uppercase"
                >
                  {ROLES[roleIdx]}
                </motion.span>
              </AnimatePresence>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="text-slate-400 leading-relaxed mb-10 max-w-lg"
              style={{ fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)" }}
            >
              I help businesses turn complex data and ideas into scalable AI systems,
              full stack applications, and high-converting websites.
              Clean code. Real results.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="flex flex-wrap items-center gap-3 mb-6"
            >
              <Link href="/projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-[#060912] font-semibold text-sm transition-all duration-200 hover:shadow-glow-btn">
                View My Work <ArrowRight size={15} />
              </Link>
              <Link href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.1] hover:border-white/[0.18] text-white font-semibold text-sm transition-all duration-200">
                Hire Me <ArrowUpRight size={14} />
              </Link>
              <a href="/resume.pdf" download
                className="inline-flex items-center gap-1.5 px-5 py-2.5 text-slate-500 hover:text-slate-300 font-medium text-sm transition-colors duration-200">
                <Download size={14} />
                Resume
              </a>
            </motion.div>

            {/* ── Social proof strip ──────────────────────────── */}
            <SocialProofStrip />

            {/* ── MOBILE social proof (lg hidden on desktop) ── */}
            <motion.div
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap items-center gap-3 lg:hidden"
            >
              {/* Mobile stars + label */}
              <div className="flex items-center gap-2 px-3 py-2 rounded-xl border border-white/[0.08] bg-white/[0.04]">
                <Stars />
                <span className="text-xs text-slate-400 font-medium">5.0 · Project Feedback</span>
              </div>
              {/* Mobile stats chips */}
              {STATS.map((s) => (
                <div key={s.label}
                  className="px-3 py-2 rounded-xl border border-white/[0.08] bg-white/[0.04] text-center">
                  <span className="block text-sm font-bold text-white">{s.value}</span>
                  <span className="block text-[10px] text-slate-600">{s.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ──────────────────────────────────────────────
              RIGHT — large borderless photo + animated lines
          ────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block relative"
          >
            {/* Ambient glow behind photo */}
            <div
              className="absolute -inset-10 blur-3xl opacity-20 pointer-events-none"
              style={{ background: "radial-gradient(ellipse 60% 80% at 55% 40%, #06b6d4 0%, #8b5cf6 50%, transparent 80%)" }}
            />

            {/* ── Image — no border, no card frame ─────── */}
            <div className="relative overflow-hidden" style={{ aspectRatio: "3/4" }}>

              <Image
                src={IMAGES.profile.hero}
                alt={ALT.hero}
                fill
                priority
                sizes="(max-width: 1280px) 420px, 460px"
                className="object-cover object-top"
              />

              {/* Left edge — blends into background seamlessly */}
              <div
                className="absolute inset-y-0 left-0 w-28 pointer-events-none z-10"
                style={{ background: "linear-gradient(to right, #060912 0%, transparent 100%)" }}
              />

              {/* Bottom edge fade */}
              <div
                className="absolute bottom-0 inset-x-0 h-48 pointer-events-none z-10"
                style={{ background: "linear-gradient(to top, #060912 0%, rgba(6,9,18,0.4) 60%, transparent 100%)" }}
              />

              {/* Subtle scan line */}
              <motion.div
                className="absolute inset-x-0 h-[1px] pointer-events-none z-20"
                style={{
                  background: "linear-gradient(90deg, transparent 0%, rgba(6,182,212,0) 10%, rgba(6,182,212,0.5) 40%, rgba(129,140,248,0.5) 60%, rgba(6,182,212,0) 90%, transparent 100%)",
                  boxShadow: "0 0 10px rgba(6,182,212,0.4)",
                }}
                animate={{ y: ["-4px", "calc(100% + 4px)"] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear", repeatDelay: 0.5 }}
              />

              {/* SVG animated border lines — same as About page */}
              <svg
                viewBox="0 0 300 400"
                preserveAspectRatio="none"
                className="absolute inset-0 w-full h-full pointer-events-none"
                style={{ zIndex: 15 }}
              >
                {/* Line 1 — cyan, fast */}
                <motion.rect
                  x="1" y="1" width="298" height="398" rx="0" ry="0"
                  fill="none" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round"
                  strokeDasharray="90 1500"
                  animate={{ strokeDashoffset: [0, -1500] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
                />
                {/* Line 2 — violet, medium */}
                <motion.rect
                  x="1" y="1" width="298" height="398" rx="0" ry="0"
                  fill="none" stroke="#818cf8" strokeWidth="1.5" strokeLinecap="round"
                  strokeDasharray="55 1500"
                  animate={{ strokeDashoffset: [-(1500 / 3), -(1500 / 3) - 1500] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                />
                {/* Line 3 — white dim, slow */}
                <motion.rect
                  x="1" y="1" width="298" height="398" rx="0" ry="0"
                  fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1" strokeLinecap="round"
                  strokeDasharray="30 1500"
                  animate={{ strokeDashoffset: [-(1500 * 2) / 3, -(1500 * 2) / 3 - 1500] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
                />
              </svg>

              {/* Corner brackets */}
              {(["tl", "tr", "bl", "br"] as const).map((pos, i) => (
                <motion.div
                  key={pos}
                  className="absolute w-6 h-6 pointer-events-none"
                  style={{
                    top:         pos.startsWith("t") ? 3 : "auto",
                    bottom:      pos.startsWith("b") ? 3 : "auto",
                    left:        pos.endsWith("l")   ? 3 : "auto",
                    right:       pos.endsWith("r")   ? 3 : "auto",
                    borderTop:    pos.startsWith("t") ? "2px solid" : "none",
                    borderBottom: pos.startsWith("b") ? "2px solid" : "none",
                    borderLeft:   pos.endsWith("l")   ? "2px solid" : "none",
                    borderRight:  pos.endsWith("r")   ? "2px solid" : "none",
                    borderColor:  i % 2 === 0 ? "#06b6d4" : "#8b5cf6",
                    zIndex: 20,
                  }}
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.6 }}
                />
              ))}
            </div>

            {/* ── Floating badges ──────────────────────── */}
            {/* Available */}
            <motion.div
              initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="float-c absolute -right-6 top-14 glass rounded-xl border border-white/[0.12] px-4 py-3"
              style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.5)" }}
            >
              <div className="flex items-center gap-2 mb-0.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                <span className="text-sm font-bold text-white">Available</span>
              </div>
              <div className="text-[10px] text-slate-500">Open to work · 2025</div>
            </motion.div>

            {/* Projects */}
            <motion.div
              initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.05 }}
              className="float-b absolute -left-6 top-[38%] glass rounded-xl border border-white/[0.12] px-4 py-3"
              style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.5)" }}
            >
              <div className="text-2xl font-black text-white leading-none mb-0.5">15+</div>
              <div className="text-[10px] text-slate-500">Projects shipped</div>
            </motion.div>

            {/* Rating */}
            <motion.div
              initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="float-a absolute left-1/2 -translate-x-1/2 bottom-8 glass rounded-xl border border-white/[0.12] px-4 py-2.5 flex items-center gap-2.5"
              style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.5)" }}
            >
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={11} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs font-semibold text-white">5.0</span>
              <span className="text-[10px] text-slate-500">· 30+ reviews</span>
            </motion.div>

          </motion.div>

        </div>
      </div>

      {/* ── Marquee strip ─────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="relative z-10 w-full border-t border-white/[0.05] bg-white/[0.015] overflow-hidden py-4 mt-6"
      >
        <div className="flex gap-10 w-max" style={{ animation: "marquee 30s linear infinite" }}>
          {[...TECH, ...TECH].map((t, i) => (
            <div key={i} className="flex items-center gap-2.5 shrink-0">
              <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: t.dot }} />
              <span className="text-xs font-medium text-slate-500 tracking-wide whitespace-nowrap">{t.name}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
