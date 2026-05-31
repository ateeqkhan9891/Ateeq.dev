"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";

export default function CTA() {
  return (
    <section className="relative border-t border-white/[0.05] overflow-hidden">

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#060912] via-[#070e1f] to-[#060912]" />
      <div className="absolute inset-0 bg-gradient-radial from-cyan-500/[0.06] via-transparent to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-cyan-500/50 to-transparent" />

      {/* Glow orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-cyan-500/[0.04] blur-[100px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-10 py-28 text-center z-10">

        {/* Availability pill */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/[0.07] text-emerald-400 text-xs font-semibold tracking-wide mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-slow" />
          Open to new projects, 2025
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-bold text-white tracking-tight mb-5"
          style={{ fontSize: "clamp(2rem, 5vw, 3.8rem)", letterSpacing: "-0.03em", lineHeight: "1.1" }}
        >
          Have a project
          <br />
          <span className="gradient-text">in mind?</span>
        </motion.h2>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-slate-500 mb-12 max-w-lg mx-auto leading-relaxed"
          style={{ fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)" }}
        >
          Whether you need a data product, an AI integration, a full stack
          application, or a high-converting business website, I'd love to hear
          about it.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-[#060912] font-bold text-sm transition-all duration-200 hover:shadow-glow-btn"
          >
            <Mail size={16} />
            Get In Touch
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-white/[0.1] hover:border-white/[0.2] bg-white/[0.04] hover:bg-white/[0.07] text-slate-300 hover:text-white font-semibold text-sm transition-all duration-200"
          >
            View Projects <ArrowRight size={15} />
          </Link>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-white/[0.05] pt-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-slate-600"
          >
            <a
              href="mailto:ateeqrehmankhan0346@gmail.com"
              className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
            >
              <Mail size={14} />
              ateeqrehmankhan0346@gmail.com
            </a>
            <div className="hidden sm:block w-px h-4 bg-white/[0.08]" />
            <a
              href="https://github.com/ateeqkhan9891"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-slate-300 transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              github.com/ateeqkhan9891
            </a>
            <div className="hidden sm:block w-px h-4 bg-white/[0.08]" />
            <a
              href="https://www.linkedin.com/in/ateeq-rehman-a7698b26b/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-blue-400 transition-colors"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              LinkedIn
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
