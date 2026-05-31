"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const STATS = [
  { value: "15+",  label: "Projects Shipped",   desc: "Across AI, data & web",     color: "from-cyan-400 to-cyan-500"   },
  { value: "5",    label: "Technical Domains",   desc: "ML, backend, web, SEO",     color: "from-violet-400 to-violet-500"},
  { value: "3+",   label: "Client Websites",     desc: "Real businesses, live today",color: "from-emerald-400 to-emerald-500"},
  { value: "2+",   label: "Years Building",      desc: "Production software",        color: "from-blue-400 to-blue-500"   },
];

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="relative border-y border-white/[0.05]">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b1120]/60 to-[#060912]" />

      <div className="relative wrap py-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.04] rounded-2xl overflow-hidden">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-[#0b1120] flex flex-col items-center justify-center py-10 px-6 hover:bg-[#0f1829] transition-colors duration-300 overflow-hidden"
            >
              {/* Top accent line on hover */}
              <div
                className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${s.color} opacity-0 group-hover:opacity-100 transition-opacity duration-400`}
              />

              {/* Value */}
              <div
                className={`text-4xl lg:text-[2.75rem] font-bold tracking-tight mb-2 bg-gradient-to-br ${s.color} bg-clip-text text-transparent`}
              >
                {s.value}
              </div>

              {/* Label */}
              <div className="text-sm font-semibold text-slate-200 mb-1 text-center leading-snug">
                {s.label}
              </div>

              {/* Sub */}
              <div className="text-xs text-slate-600 text-center">
                {s.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
