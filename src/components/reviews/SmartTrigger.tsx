"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import FeedbackModal from "./FeedbackModal";

export default function SmartFeedbackTrigger() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const triggered = useRef(false);

  const trigger = () => {
    if (triggered.current || dismissed) return;
    triggered.current = true;
    setShow(true);
  };

  useEffect(() => {

    if (typeof window !== "undefined" && sessionStorage.getItem("feedback_dismissed")) return;

    timerRef.current = setTimeout(trigger, 60_000);

    const handleScroll = () => {
      const scrollPct =
        (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight;
      if (scrollPct >= 0.7) trigger();
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timerRef.current) clearTimeout(timerRef.current);
    };

  }, [dismissed]);

  const dismiss = () => {
    setShow(false);
    setDismissed(true);
    if (typeof window !== "undefined") {
      sessionStorage.setItem("feedback_dismissed", "1");
    }
  };

  const openModal = () => {
    setShow(false);
    setModalOpen(true);
  };

  return (
    <>
      <AnimatePresence>
        {show && !dismissed && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-6 right-6 z-40 max-w-[280px]"
          >
            <div
              className="rounded-2xl border border-white/[0.1] overflow-hidden shadow-2xl"
              style={{
                background: "rgba(11,17,32,0.95)",
                backdropFilter: "blur(20px)",
              }}
            >
              <div className="h-0.5 bg-gradient-to-r from-cyan-500 via-violet-500 to-cyan-500" />
              <div className="p-4">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-1.5">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} viewBox="0 0 12 12" className="w-3 h-3 fill-amber-400">
                        <path d="M6 .5l1.39 2.82 3.11.45-2.25 2.19.53 3.1L6 7.52 3.22 9.06l.53-3.1L1.5 3.77l3.11-.45z" />
                      </svg>
                    ))}
                  </div>
                  <button
                    onClick={dismiss}
                    className="text-slate-600 hover:text-slate-400 transition-colors p-0.5"
                    aria-label="Dismiss"
                  >
                    <X size={14} />
                  </button>
                </div>
                <p className="text-sm font-semibold text-white mb-1">
                  Enjoying the portfolio?
                </p>
                <p className="text-xs text-slate-500 mb-3 leading-relaxed">
                  If we have worked together, I would love your feedback.
                </p>
                <div className="flex items-center gap-2">
                  <button
                    onClick={openModal}
                    className="flex-1 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-[#060912] font-semibold text-xs transition-colors"
                  >
                    Leave Feedback
                  </button>
                  <button
                    onClick={dismiss}
                    className="px-3 py-2 rounded-lg text-xs text-slate-500 hover:text-slate-300 transition-colors"
                  >
                    Not now
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <FeedbackModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
