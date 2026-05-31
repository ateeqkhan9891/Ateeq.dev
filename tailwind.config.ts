import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg:          "#060912",
        surface:     "#0b1120",
        "surface-2": "#0f1829",
        "surface-3": "#131f35",
        accent: {
          DEFAULT: "#06b6d4",
          dark:    "#0891b2",
          light:   "#22d3ee",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
      fontSize: {
        "display-1": ["clamp(2.8rem, 6vw, 5rem)",  { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        "display-2": ["clamp(2rem, 4vw, 3.5rem)",   { lineHeight: "1.1",  letterSpacing: "-0.025em" }],
        "heading-1": ["clamp(1.5rem, 3vw, 2.25rem)", { lineHeight: "1.2",  letterSpacing: "-0.02em" }],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-gradient":
          "radial-gradient(ellipse 90% 70% at 50% -10%, rgba(6,182,212,0.08) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 80% 50%, rgba(99,102,241,0.05) 0%, transparent 60%)",
        "dot-pattern":
          "radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)",
        "grid-pattern":
          "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "72px 72px",
        dot:  "28px 28px",
      },
      animation: {
        "fade-up":    "fadeUp 0.55s ease forwards",
        "fade-in":    "fadeIn 0.4s ease forwards",
        "marquee":    "marquee 28s linear infinite",
        "float-a":    "floatA 6s ease-in-out infinite",
        "float-b":    "floatB 5s ease-in-out infinite 1.5s",
        "float-c":    "floatA 7s ease-in-out infinite 3s",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        "spin-slow":  "spin 10s linear infinite",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to:   { opacity: "1" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to:   { transform: "translateX(-50%)" },
        },
        floatA: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-12px)" },
        },
        floatB: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(10px)" },
        },
        glowPulse: {
          "0%, 100%": { opacity: "0.5" },
          "50%":      { opacity: "1" },
        },
      },
      boxShadow: {
        "glow-sm":  "0 0 20px rgba(6,182,212,0.12)",
        "glow-md":  "0 0 50px rgba(6,182,212,0.18), 0 0 100px rgba(6,182,212,0.06)",
        "glow-btn": "0 0 30px rgba(6,182,212,0.45)",
        "card":     "0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)",
        "card-hover":"0 20px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(6,182,212,0.15)",
      },
    },
  },
  plugins: [],
};

export default config;
