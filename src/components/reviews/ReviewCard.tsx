"use client";

import { motion } from "framer-motion";

interface Review {
  id: string;
  name: string;
  role: string;
  company?: string;
  project: string;
  rating: number;
  feedback: string;
  featured?: boolean;
  created_at: string;
}

interface Props {
  review: Review;
  index?: number;
}

export default function ReviewCard({ review, index = 0 }: Props) {
  // Generate initials from name
  const initials = review.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  // Generate consistent gradient from name
  const gradients = [
    "from-blue-500 to-cyan-500",
    "from-violet-500 to-purple-500",
    "from-emerald-500 to-teal-500",
    "from-pink-500 to-rose-500",
    "from-amber-500 to-orange-500",
  ];
  const gradient = gradients[review.name.charCodeAt(0) % gradients.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="group relative flex flex-col rounded-2xl border border-white/[0.07] hover:border-white/[0.12] bg-[#0b1120] p-6 transition-all duration-300 hover:shadow-xl overflow-hidden"
    >
      {/* Featured badge */}
      {review.featured && (
        <div className="absolute top-3 right-3 text-[9px] font-bold uppercase tracking-wider text-amber-400 border border-amber-400/20 bg-amber-400/10 px-2 py-0.5 rounded-full">
          Featured
        </div>
      )}

      {/* Large decorative quote */}
      <div className="absolute top-3 right-8 text-6xl font-serif text-white/[0.025] select-none pointer-events-none leading-none">
        &ldquo;
      </div>

      {/* Project tag */}
      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-600 mb-4">
        {review.project}
      </span>

      {/* Stars */}
      <div className="flex items-center gap-0.5 mb-4">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            viewBox="0 0 12 12"
            className={`w-3 h-3 ${i < review.rating ? "fill-amber-400" : "fill-slate-800"}`}
          >
            <path d="M6 .5l1.39 2.82 3.11.45-2.25 2.19.53 3.1L6 7.52 3.22 9.06l.53-3.1L1.5 3.77l3.11-.45z" />
          </svg>
        ))}
        <span className="text-xs text-slate-600 ml-1">{review.rating}.0</span>
      </div>

      {/* Feedback */}
      <blockquote className="flex-1 text-sm text-slate-400 leading-relaxed mb-6">
        &ldquo;{review.feedback}&rdquo;
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div
          className={`w-9 h-9 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center shrink-0 text-white text-xs font-bold`}
        >
          {initials}
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-sm font-semibold text-slate-200 truncate">{review.name}</div>
          <div className="text-[11px] text-slate-600 truncate">
            {review.role}
            {review.company ? ` · ${review.company}` : ""}
          </div>
        </div>
        <div className="text-[10px] text-slate-700 shrink-0">
          {new Date(review.created_at).toLocaleDateString("en-US", {
            month: "short",
            year: "numeric",
          })}
        </div>
      </div>
    </motion.div>
  );
}
