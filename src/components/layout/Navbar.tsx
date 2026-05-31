"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV = [
  { href: "/",         label: "Home"     },
  { href: "/about",    label: "About"    },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/resume",   label: "Resume"   },
  { href: "/contact",  label: "Contact"  },
];

export default function Navbar() {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname              = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <>
      <header
        className="fixed top-0 inset-x-0 z-50 border-b transition-all duration-300"
        style={{
          paddingTop:       scrolled ? "0.75rem" : "1.25rem",
          paddingBottom:    scrolled ? "0.75rem" : "1.25rem",
          background:       scrolled ? "rgba(6,9,18,0.85)"  : "rgba(6,9,18,0)",
          backdropFilter:   scrolled ? "blur(20px)"          : "blur(0px)",
          WebkitBackdropFilter: scrolled ? "blur(20px)"     : "blur(0px)",
          borderColor:      scrolled ? "rgba(255,255,255,0.07)" : "rgba(255,255,255,0)",
        }}
      >
        <div className="wrap flex items-center justify-between">


          <Link href="/" className="flex items-center gap-0.5 group" aria-label="Home">
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
                        active
                          ? "text-white"
                          : "text-slate-500 hover:text-slate-200"
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


            <button
              onClick={() => setOpen((v) => !v)}
              className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.06] transition-colors"
              aria-label="Toggle menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>


      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-x-0 top-0 z-40 pt-20 glass border-b border-white/[0.06] md:hidden"
          >
            <nav className="wrap py-6">
              <ul className="flex flex-col gap-1 mb-6">
                {NAV.map((link) => {
                  const active = pathname === link.href;
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={cn(
                          "block px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                          active
                            ? "bg-white/[0.07] text-white"
                            : "text-slate-500 hover:text-white hover:bg-white/[0.04]"
                        )}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-[#060912] font-semibold text-sm transition-colors"
              >
                Hire Me
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
