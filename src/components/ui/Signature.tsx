"use client";

import { motion } from "framer-motion";

export default function Signature({ className = "" }: { className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      className={`select-none inline-flex flex-col items-start ${className}`}
    >
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.3 }}
        style={{
          fontFamily: "var(--font-signature)",
          fontSize: "clamp(2.2rem, 4vw, 3rem)",
          fontWeight: 600,
          lineHeight: 1.15,
          background: "linear-gradient(135deg, #22d3ee 20%, #818cf8 80%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          filter: "drop-shadow(0 0 18px rgba(6,182,212,0.25))",
          letterSpacing: "-0.01em",
        }}
      >
        Ateeq Rehman
      </motion.span>

      <svg
        viewBox="0 0 240 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "clamp(160px, 28vw, 240px)", marginTop: "-2px" }}
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="sig-line" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="#22d3ee" stopOpacity="0.9" />
            <stop offset="55%"  stopColor="#818cf8" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#818cf8" stopOpacity="0"   />
          </linearGradient>
        </defs>

        {/* Main flowing underline */}
        <motion.path
          d="M 4 14 C 30 6, 70 18, 120 12 C 155 8, 185 16, 210 11 C 220 9, 228 11, 235 9"
          stroke="url(#sig-line)"
          strokeWidth="1.6"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.6, delay: 0.7, ease: [0.4, 0, 0.2, 1] }}
        />

        {/* Small flourish dot at the end */}
        <motion.circle
          cx="236"
          cy="9"
          r="1.8"
          fill="#818cf8"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.8 }}
          transition={{ duration: 0.3, delay: 2.2 }}
        />

        {/* Subtle second line — shorter, offset */}
        <motion.path
          d="M 4 18 C 25 14, 55 20, 90 17"
          stroke="#22d3ee"
          strokeWidth="0.8"
          strokeLinecap="round"
          opacity="0.35"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.9, delay: 1.4, ease: "easeOut" }}
        />
      </svg>
    </motion.div>
  );
}
