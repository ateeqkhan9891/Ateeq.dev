"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";

const NAV = [
  { href: "/",         label: "Home"     },
  { href: "/about",    label: "About"    },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/resume",   label: "Resume"   },
  { href: "/contact",  label: "Contact"  },
];

export default function Navbar() {
  const [open, setOpen]         = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname                = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header
        className="fixed top-0 inset-x-0 z-50 border-b transition-all duration-300"
        style={{
          paddingTop:           scrolled ? "0.75rem" : "1.25rem",
          paddingBottom:        scrolled ? "0.75rem" : "1.25rem",
          background:           scrolled ? "rgba(6,9,18,0.88)" : "rgba(6,9,18,0)",
          backdropFilter:       scrolled ? "blur(20px)" : "blur(0px)",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "blur(0px)",
          borderColor:          scrolled ? "rgba(255,255,255,0.07)" : "rgba(255,255,255,0)",
        }}
      >
        <div className="wrap flex items-center justify-between">

          <Link href="/" className="flex items-center gap-0.5" aria-label="Home">
            <span className="text-lg font-bold text-white tracking-tight">Ateeq</span>
            <motion.span
              className="text-lg font-bold text-cyan-400"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            >
              .
            </motion.span>
          </Link>

          <nav className="hidden md:flex items-center">
            <ul className="flex items-center gap-1">
              {NAV.map((link) => {
                const active = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        "relative px-3.5 py-2 rounded-lg text-sm font-medium transition-colors duration-200",
                        active ? "text-white" : "text-slate-500 hover:text-slate-200"
                      )}
                    >
                      {active && (
                        <motion.span
                          layoutId="nav-active"
                          className="absolute inset-0 rounded-lg bg-white/[0.07]"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                        />
                      )}
                      <span className="relative">{link.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-[#060912] font-semibold text-sm transition-all duration-200 hover:shadow-glow-btn"
            >
              Hire Me
            </Link>

            <motion.button
              onClick={() => setOpen((v) => !v)}
              whileTap={{ scale: 0.92 }}
              className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] text-slate-400 hover:text-white hover:bg-white/[0.08] hover:border-white/[0.14] transition-all"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                {open ? (
                  <motion.span key="x"
                    initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <X size={18} />
                  </motion.span>
                ) : (
                  <motion.span key="menu"
                    initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <Menu size={18} />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-[60] md:hidden"
              style={{ background: "rgba(6,9,18,0.75)", backdropFilter: "blur(4px)" }}
              onClick={() => setOpen(false)}
            />

            {/* Drawer — slides in from right */}
            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 bottom-0 z-[70] md:hidden flex flex-col"
              style={{
                width: "min(300px, 85vw)",
                background: "#0b1120",
                borderLeft: "1px solid rgba(255,255,255,0.07)",
                boxShadow: "-24px 0 80px rgba(0,0,0,0.5)",
              }}
            >
              {/* Top accent line */}
              <div className="h-[2px] bg-gradient-to-r from-cyan-500 via-violet-500 to-cyan-500 shrink-0" />

              {/* Drawer header */}
              <div className="flex items-center justify-between px-6 py-5 shrink-0 border-b border-white/[0.05]">
                <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-0.5">
                  <span className="text-lg font-bold text-white tracking-tight">Ateeq</span>
                  <span className="text-lg font-bold text-cyan-400">.</span>
                </Link>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setOpen(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-500 hover:text-white hover:bg-white/[0.06] transition-all"
                  aria-label="Close menu"
                >
                  <X size={16} />
                </motion.button>
              </div>

              {/* Nav links */}
              <nav className="flex-1 overflow-y-auto px-4 py-6">
                <ul className="space-y-1">
                  {NAV.map((link, i) => {
                    const active = pathname === link.href;
                    return (
                      <motion.li
                        key={link.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.25, delay: 0.05 + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <Link
                          href={link.href}
                          className={cn(
                            "flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 group",
                            active
                              ? "bg-cyan-500/[0.1] text-cyan-400 border border-cyan-500/20"
                              : "text-slate-400 hover:text-white hover:bg-white/[0.05] border border-transparent"
                          )}
                        >
                          <span>{link.label}</span>
                          {active && (
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                          )}
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>
              </nav>

              {/* Bottom section */}
              <div className="px-4 pb-6 shrink-0 border-t border-white/[0.05] pt-5 space-y-3">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, delay: 0.35 }}
                >
                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-[#060912] font-bold text-sm transition-all"
                  >
                    Hire Me <ArrowUpRight size={14} />
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.25, delay: 0.42 }}
                  className="flex items-center justify-center gap-3 pt-1"
                >
                  <a
                    href="https://github.com/ateeqkhan9891"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="w-9 h-9 flex items-center justify-center rounded-lg border border-white/[0.07] bg-white/[0.03] text-slate-600 hover:text-white hover:border-white/[0.16] transition-all"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ateeq-rehman-a7698b26b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="w-9 h-9 flex items-center justify-center rounded-lg border border-white/[0.07] bg-white/[0.03] text-slate-600 hover:text-blue-400 hover:border-blue-400/30 transition-all"
                  >
                    <LinkedinIcon className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="mailto:ateeqrehmankhan0346@gmail.com"
                    aria-label="Email"
                    className="w-9 h-9 flex items-center justify-center rounded-lg border border-white/[0.07] bg-white/[0.03] text-slate-600 hover:text-cyan-400 hover:border-cyan-400/30 transition-all text-xs font-bold"
                  >
                    @
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
