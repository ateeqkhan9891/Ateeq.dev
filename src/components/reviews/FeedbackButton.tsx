"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { MessageSquarePlus } from "lucide-react";
import FeedbackModal from "./FeedbackModal";

interface Props {
  variant?: "primary" | "ghost" | "subtle";
  className?: string;
}

export default function FeedbackButton({ variant = "primary", className = "" }: Props) {
  const [open, setOpen] = useState(false);

  const styles = {
    primary:
      "inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-[#060912] font-semibold text-sm transition-all hover:shadow-lg",
    ghost:
      "inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-white/[0.1] hover:border-white/[0.2] bg-white/[0.04] hover:bg-white/[0.07] text-slate-300 hover:text-white font-medium text-sm transition-all",
    subtle:
      "inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-cyan-400 transition-colors",
  };

  return (
    <>
      <motion.button
        onClick={() => setOpen(true)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`${styles[variant]} ${className}`}
      >
        <MessageSquarePlus size={15} />
        Leave Feedback
      </motion.button>
      <FeedbackModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
