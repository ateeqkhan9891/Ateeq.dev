"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const REASONS = [
  {
    n: "01",
    title: "Full Stack + AI in One Developer",
    body: "You get ML model training, backend APIs, and polished frontends from a single person who understands how they connect. No handoff tax, no translation layer.",
  },
  {
    n: "02",
    title: "Business-First Thinking",
    body: "Every decision I make is anchored to a business outcome. I don't build impressive demos, I build things that create measurable value for real users.",
  },
  {
    n: "03",
    title: "Production Code Quality",
    body: "TypeScript throughout, proper abstractions, clean folder structure, and code that a future developer can actually extend without rewriting everything.",
  },
  {
    n: "04",
    title: "Real Project Experience",
    body: "Healthcare websites live in production. A SaaS platform with Stripe billing. ML pipelines processing real data. Not just coursework, real deliverables.",
  },
  {
    n: "05",
    title: "Fast, Focused Delivery",
    body: "I scope clearly, estimate honestly, and communicate proactively. I don't drag timelines. If something changes, you hear about it early.",
  },
  {
    n: "06",
    title: "Attention to the Details That Matter",
    body: "Lighthouse scores, SEO metadata, mobile layouts, error states, loading UX, the things most developers leave unfinished are where I pay extra attention.",
  },
];

export default function WhyHireMe() {
  return (
    <section
      className="section border-t border-white/[0.05]"
      style={{ background: "#070c18" }}
    >
      <div className="wrap">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="eyebrow mb-4 block">Why Me</span>
            <h2
              className="font-bold text-white tracking-tight"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", letterSpacing: "-0.025em" }}
            >
              Why Work With Me
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 leading-relaxed self-end text-sm lg:text-base"
          >
            I combine technical depth with clear communication and a track record
            of delivering things that actually work in the real world.
          </motion.p>
        </div>

        {/* Reasons grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.04] rounded-2xl overflow-hidden">
          {REASONS.map((r, i) => (
            <motion.div
              key={r.n}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="group relative bg-[#070c18] hover:bg-[#0b1120] p-7 transition-colors duration-250 overflow-hidden"
            >
              {/* Top-left number */}
              <div className="text-xs font-bold font-mono tracking-widest text-slate-700 group-hover:text-cyan-500/60 transition-colors mb-4">
                {r.n}
              </div>

              {/* Title */}
              <h3 className="text-sm font-bold text-slate-200 group-hover:text-white transition-colors mb-3 leading-snug">
                {r.title}
              </h3>

              {/* Body */}
              <p className="text-xs text-slate-600 leading-relaxed group-hover:text-slate-500 transition-colors">
                {r.body}
              </p>

              {/* Hover accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-cyan-500/0 via-cyan-500/40 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-6 mt-10 pt-8 border-t border-white/[0.05]"
        >
          <p className="text-slate-500 text-sm text-center sm:text-left">
            Ready to see if we're a good fit?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-[#060912] font-semibold text-sm transition-all duration-200 hover:shadow-glow-btn"
          >
            Start a Conversation <ArrowUpRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
