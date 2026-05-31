"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ReviewCard from "./ReviewCard";
import FeedbackButton from "./FeedbackButton";
import { MessageSquarePlus } from "lucide-react";

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

export default function PublicReviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/reviews")
      .then((r) => r.json())
      .then((d) => {
        setReviews(d.reviews ?? []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const avgRating =
    reviews.length
      ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
      : null;

  return (
    <section className="section border-t border-white/[0.05]">
      <div className="wrap">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="eyebrow mb-4 block">Client Feedback</span>
            <h2
              className="font-bold text-white tracking-tight mb-2"
              style={{ fontSize: "clamp(1.8rem,3.5vw,2.6rem)", letterSpacing: "-0.025em" }}
            >
              What Clients Say
            </h2>
            {avgRating && (
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} viewBox="0 0 12 12" className="w-3 h-3 fill-amber-400">
                      <path d="M6 .5l1.39 2.82 3.11.45-2.25 2.19.53 3.1L6 7.52 3.22 9.06l.53-3.1L1.5 3.77l3.11-.45z" />
                    </svg>
                  ))}
                </div>
                <span className="font-semibold text-white">{avgRating}</span>
                <span>
                  from {reviews.length} verified review{reviews.length !== 1 ? "s" : ""}
                </span>
              </div>
            )}
          </motion.div>
          <FeedbackButton variant="ghost" />
        </div>

        {/* Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/[0.05] bg-[#0b1120] p-6 animate-pulse h-48"
              />
            ))}
          </div>
        ) : reviews.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {reviews.map((r, i) => (
              <ReviewCard key={r.id} review={r} index={i} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 mb-10">
            <div className="w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/[0.07] flex items-center justify-center mx-auto mb-4">
              <MessageSquarePlus size={22} className="text-slate-600" />
            </div>
            <p className="text-slate-500 text-sm mb-6">
              No public reviews yet. Be the first.
            </p>
            <FeedbackButton variant="primary" />
          </div>
        )}

        {/* Bottom CTA */}
        {reviews.length > 0 && (
          <div className="text-center">
            <p className="text-slate-600 text-sm mb-4">
              Worked with me? Share your experience.
            </p>
            <FeedbackButton variant="primary" />
          </div>
        )}
      </div>
    </section>
  );
}
