"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const AREAS = [
  {
    num: "01",
    title: "AI & Machine Learning",
    desc: "Predictive models, NLP pipelines, and AI API integrations that solve real business problems with measurable outcomes.",
    tags: ["Scikit-learn", "PyTorch", "OpenAI", "Groq", "NLP"],
    accent: "#a78bfa",
    dim: "rgba(167,139,250,0.07)",
    border: "rgba(167,139,250,0.15)",
    href: "/services#ml-models",
  },
  {
    num: "02",
    title: "Data Science & Analytics",
    desc: "From raw datasets to executive dashboards, EDA, feature engineering, visualizations, and BI reporting that drives decisions.",
    tags: ["Pandas", "NumPy", "Matplotlib", "Power BI", "Streamlit"],
    accent: "#38bdf8",
    dim: "rgba(56,189,248,0.07)",
    border: "rgba(56,189,248,0.15)",
    href: "/services#data-dashboards",
  },
  {
    num: "03",
    title: "Full Stack Development",
    desc: "End-to-end web applications with Next.js, TypeScript, and modern React patterns, from design system to production deployment.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    accent: "#06b6d4",
    dim: "rgba(6,182,212,0.07)",
    border: "rgba(6,182,212,0.15)",
    href: "/services#business-websites",
  },
  {
    num: "04",
    title: "Backend API Development",
    desc: "Secure, well-documented REST APIs with FastAPI and PostgreSQL. Authentication, CRUD, business logic, built to scale.",
    tags: ["FastAPI", "PostgreSQL", "Supabase", "SQLAlchemy", "JWT"],
    accent: "#34d399",
    dim: "rgba(52,211,153,0.07)",
    border: "rgba(52,211,153,0.15)",
    href: "/services#backend-apis",
  },
  {
    num: "05",
    title: "Healthcare Websites",
    desc: "Premium websites for clinics and surgeons, trust-first design, procedure landing pages, before/after galleries, and appointment CTAs.",
    tags: ["Next.js", "SEO", "Tailwind CSS", "WhatsApp CTA"],
    accent: "#f472b6",
    dim: "rgba(244,114,182,0.07)",
    border: "rgba(244,114,182,0.15)",
    href: "/services#healthcare-websites",
  },
  {
    num: "06",
    title: "AI SaaS Platforms",
    desc: "Full SaaS architecture, auth, billing, user dashboards, and AI feature integration. From MVP to production-grade product.",
    tags: ["Supabase", "Stripe", "OpenAI", "Next.js", "PostgreSQL"],
    accent: "#fb923c",
    dim: "rgba(251,146,60,0.07)",
    border: "rgba(251,146,60,0.15)",
    href: "/services#ai-saas",
  },
];

export default function WhatIDo() {
  return (
    <section className="section border-t border-white/[0.05]" style={{ background: "#070c18" }}>
      <div className="wrap">


        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl mb-16"
        >
          <span className="eyebrow mb-4 block">Capabilities</span>
          <h2
            className="font-bold text-white tracking-tight mb-4"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", letterSpacing: "-0.025em" }}
          >
            What I Build
          </h2>
          <p className="text-slate-500 leading-relaxed text-base">
            I work across the full spectrum, from training ML models to shipping
            polished web interfaces. Each domain with production-grade depth.
          </p>
        </motion.div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {AREAS.map((area, i) => (
            <motion.div
              key={area.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
            >
              <Link
                href={area.href}
                className="group block h-full rounded-2xl p-6 border transition-all duration-300 hover:shadow-card-hover"
                style={{
                  background: area.dim,
                  borderColor: "rgba(255,255,255,0.06)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = area.border;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)";
                }}
              >

                <div className="flex items-center justify-between mb-5">
                  <span
                    className="text-xs font-bold font-mono tracking-widest"
                    style={{ color: area.accent }}
                  >
                    {area.num}
                  </span>
                  <ArrowUpRight
                    size={14}
                    className="text-slate-700 group-hover:text-slate-400 transition-colors"
                  />
                </div>


                <h3 className="text-base font-bold text-white mb-3 leading-snug group-hover:text-slate-100 transition-colors">
                  {area.title}
                </h3>


                <p className="text-sm text-slate-600 leading-relaxed mb-5">
                  {area.desc}
                </p>


                <div className="flex flex-wrap gap-1.5">
                  {area.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-medium px-2 py-0.5 rounded border border-white/[0.07] text-slate-500"
                      style={{ background: "rgba(255,255,255,0.03)" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
