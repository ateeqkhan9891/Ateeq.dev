"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Bot,
  BarChart3,
  Cpu,
  Server,
  Globe,
  HeartPulse,
  Repeat,
  Zap,
  ArrowRight,
} from "lucide-react";
import { services } from "@/data/services";
import SectionHeader from "@/components/ui/SectionHeader";

const iconMap: Record<string, React.ElementType> = {
  bot: Bot,
  "bar-chart-3": BarChart3,
  cpu: Cpu,
  server: Server,
  globe: Globe,
  "heart-pulse": HeartPulse,
  repeat: Repeat,
  zap: Zap,
};

const colorMap: Record<string, { bg: string; text: string }> = {
  "AI & Development": { bg: "bg-purple-500/10", text: "text-purple-400" },
  "Data Science": { bg: "bg-blue-500/10", text: "text-blue-400" },
  Backend: { bg: "bg-green-500/10", text: "text-green-400" },
  "Web Development": { bg: "bg-cyan-500/10", text: "text-cyan-400" },
  Growth: { bg: "bg-orange-500/10", text: "text-orange-400" },
};

export default function ServicesContent() {
  return (
    <div className="pt-32 pb-24">
      <div className="wrap">
        <SectionHeader
          eyebrow="Services"
          title="What I Can Build For You"
          subtitle="From AI integrations and data products to high-converting business websites, I build things that create real value."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || Zap;
            const colors = colorMap[service.category] || {
              bg: "bg-cyan-500/10",
              text: "text-cyan-400",
            };

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass glass-hover rounded-xl p-6"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className={`w-10 h-10 rounded-xl ${colors.bg} flex items-center justify-center shrink-0`}
                  >
                    <Icon size={18} className={colors.text} />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white mb-1">
                      {service.title}
                    </h3>
                    <span className="text-xs text-slate-600">
                      {service.category}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed mb-4">
                  {service.description}
                </p>
                <ul className="space-y-1.5">
                  {service.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-xs text-slate-500"
                    >
                      <div className="w-1 h-1 rounded-full bg-cyan-400 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center glass rounded-2xl p-10">
          <h2 className="text-2xl font-bold text-white mb-3">
            Not sure what you need?
          </h2>
          <p className="text-slate-400 mb-6 max-w-md mx-auto text-sm">
            Tell me about your project and I&apos;ll help you figure out the right
            approach.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold text-sm transition-all"
          >
            Start a Conversation <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
}
