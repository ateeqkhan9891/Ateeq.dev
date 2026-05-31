"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn, ImageOff } from "lucide-react";

/* ── types ─────────────────────────────────────────────────────── */
interface Props {
  cover?: string;
  screenshots?: string[];
  title: string;
  accentColor: string; // e.g. "#8b5cf6"
  accentGlow: string;  // e.g. "rgba(139,92,246,0.10)"
}

/* ── inner: single image with fallback ─────────────────────────── */
function ProjectImage({
  src,
  alt,
  fill = false,
  className = "",
  priority = false,
}: {
  src: string;
  alt: string;
  fill?: boolean;
  className?: string;
  priority?: boolean;
}) {
  const [error, setError] = useState(false);

  if (error) return null; // let parent show placeholder

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      priority={priority}
      sizes={fill ? "100vw" : "600px"}
      className={`object-cover ${className}`}
      onError={() => setError(true)}
    />
  );
}

/* ── placeholder tile shown when image is missing ──────────────── */
function Placeholder({
  accent,
  glow,
  label = "Screenshot coming soon",
}: {
  accent: string;
  glow: string;
  label?: string;
}) {
  return (
    <div
      className="absolute inset-0 flex flex-col items-center justify-center gap-3"
      style={{ background: `radial-gradient(ellipse 80% 60% at 50% 50%, ${glow} 0%, transparent 70%)` }}
    >
      <ImageOff size={22} style={{ color: accent, opacity: 0.4 }} />
      <span className="text-xs font-medium" style={{ color: accent, opacity: 0.5 }}>
        {label}
      </span>
    </div>
  );
}

/* ── lightbox ───────────────────────────────────────────────────── */
function Lightbox({
  images,
  index,
  title,
  onClose,
  onPrev,
  onNext,
}: {
  images: string[];
  index: number;
  title: string;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const hasPrev = index > 0;
  const hasNext = index < images.length - 1;

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && hasPrev) onPrev();
      if (e.key === "ArrowRight" && hasNext) onNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [hasPrev, hasNext, onClose, onPrev, onNext]);

  // lock body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-[100] flex items-center justify-center"
        onClick={onClose}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-[#060912]/95 backdrop-blur-xl" />

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-10 p-2.5 rounded-xl bg-white/[0.07] hover:bg-white/[0.12] border border-white/[0.1] text-slate-300 hover:text-white transition-all"
          aria-label="Close"
        >
          <X size={18} />
        </button>

        {/* Prev */}
        {hasPrev && (
          <button
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
            className="absolute left-4 md:left-8 z-10 p-3 rounded-xl bg-white/[0.07] hover:bg-white/[0.12] border border-white/[0.1] text-slate-300 hover:text-white transition-all"
            aria-label="Previous"
          >
            <ChevronLeft size={20} />
          </button>
        )}

        {/* Next */}
        {hasNext && (
          <button
            onClick={(e) => { e.stopPropagation(); onNext(); }}
            className="absolute right-4 md:right-8 z-10 p-3 rounded-xl bg-white/[0.07] hover:bg-white/[0.12] border border-white/[0.1] text-slate-300 hover:text-white transition-all"
            aria-label="Next"
          >
            <ChevronRight size={20} />
          </button>
        )}

        {/* Image container */}
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.94, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 max-w-[90vw] max-h-[85vh] rounded-2xl overflow-hidden border border-white/[0.1] shadow-2xl"
          onClick={(e) => e.stopPropagation()}
          style={{ aspectRatio: "16/9", width: "min(1200px, 90vw)" }}
        >
          <div className="relative w-full h-full bg-[#0b1120]">
            <ProjectImage src={images[index]} alt={`${title} screenshot ${index + 1}`} fill priority />
          </div>
        </motion.div>

        {/* Dot indicators */}
        {images.length > 1 && (
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); /* handled by parent */ }}
                className={`rounded-full transition-all ${
                  i === index
                    ? "w-4 h-1.5 bg-cyan-400"
                    : "w-1.5 h-1.5 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        )}

        {/* Counter */}
        <div className="absolute bottom-6 right-6 text-xs text-slate-600 z-10">
          {index + 1} / {images.length}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════════════════════════════════ */
export default function ProjectGallery({ cover, screenshots = [], title, accentColor, accentGlow }: Props) {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [coverError, setCoverError] = useState(false);

  // All images: cover first, then screenshots
  const allImages = [
    ...(cover ? [cover] : []),
    ...screenshots,
  ].filter(Boolean);

  const openLightbox = useCallback((idx: number) => setLightbox(idx), []);
  const closeLightbox = useCallback(() => setLightbox(null), []);
  const goPrev = useCallback(() => setLightbox((i) => (i !== null && i > 0 ? i - 1 : i)), []);
  const goNext = useCallback(() => setLightbox((i) => (i !== null && i < allImages.length - 1 ? i + 1 : i)), [allImages.length]);

  const hasCover      = Boolean(cover && !coverError);
  const hasScreenshots = screenshots.length > 0;

  return (
    <>
      {/* ── Gallery layout ─────────────────────────────────── */}
      <div className="space-y-3">

        {/* ── Browser mockup (cover image) ─────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="group rounded-2xl overflow-hidden border border-white/[0.08] shadow-card"
          style={{ background: "#0a0f1a" }}
        >
          {/* Browser chrome bar */}
          <div
            className="flex items-center gap-3 px-4 py-3 border-b border-white/[0.06]"
            style={{ background: "#0d1422" }}
          >
            {/* Traffic lights */}
            <div className="flex items-center gap-1.5 shrink-0">
              <div className="w-3 h-3 rounded-full bg-red-500/70 hover:bg-red-500 transition-colors cursor-default" />
              <div className="w-3 h-3 rounded-full bg-amber-500/70 hover:bg-amber-500 transition-colors cursor-default" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/70 hover:bg-emerald-500 transition-colors cursor-default" />
            </div>

            {/* URL bar */}
            <div
              className="flex-1 max-w-md mx-auto h-6 rounded-md flex items-center px-3 gap-2"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
            >
              <div className="w-2 h-2 rounded-full shrink-0" style={{ background: accentColor, opacity: 0.6 }} />
              <span className="text-[10px] text-slate-600 truncate font-mono">
                {title.toLowerCase().replace(/\s+/g, "-")}.vercel.app
              </span>
            </div>

            {/* Zoom hint */}
            {hasCover && (
              <button
                onClick={() => openLightbox(0)}
                className="shrink-0 p-1.5 rounded-lg text-slate-700 hover:text-slate-400 transition-colors opacity-0 group-hover:opacity-100"
                aria-label="View fullscreen"
              >
                <ZoomIn size={14} />
              </button>
            )}
          </div>

          {/* Screen area */}
          <div
            className="relative w-full cursor-pointer overflow-hidden"
            style={{ aspectRatio: "16/9" }}
            onClick={() => hasCover && openLightbox(0)}
          >
            {hasCover ? (
              <>
                <ProjectImage
                  src={cover!}
                  alt={`${title}, main screenshot`}
                  fill
                  priority
                  className="transition-transform duration-500 group-hover:scale-[1.02]"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2 px-4 py-2 rounded-xl bg-black/60 backdrop-blur-sm border border-white/[0.1] text-white text-xs font-medium">
                    <ZoomIn size={13} /> View fullscreen
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* Placeholder skeleton UI */}
                <div className="absolute inset-0 bg-[#070c18]" />
                <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse 70% 60% at 50% 30%, ${accentGlow} 0%, transparent 70%)` }} />
                <div className="absolute inset-0 p-6 flex flex-col gap-3 opacity-50">
                  <div className="flex gap-2">
                    {[40, 60, 30].map((w, i) => (
                      <div key={i} className="h-7 rounded-lg bg-white/[0.06] border border-white/[0.05]" style={{ width: `${w}%` }} />
                    ))}
                  </div>
                  <div className="flex gap-2 flex-1">
                    <div className="w-1/3 rounded-xl bg-white/[0.04] border border-white/[0.04]" />
                    <div className="flex-1 flex flex-col gap-2">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="h-8 rounded-lg bg-white/[0.04] border border-white/[0.04]" />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                  <ImageOff size={24} style={{ color: accentColor, opacity: 0.35 }} />
                  <p className="text-xs font-medium" style={{ color: accentColor, opacity: 0.45 }}>
                    Add your screenshot to{" "}
                    <code className="font-mono">/public/projects/{"{slug}"}/cover.png</code>
                  </p>
                </div>
              </>
            )}
          </div>
        </motion.div>

        {/* ── Screenshot grid ───────────────────────────────── */}
        {hasScreenshots && (
          <div className={`grid gap-3 ${screenshots.length === 1 ? "grid-cols-1" : screenshots.length === 2 ? "grid-cols-2" : "grid-cols-3"}`}>
            {screenshots.map((src, i) => {
              const lightboxIdx = cover ? i + 1 : i;
              return (
                <motion.div
                  key={src}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  onClick={() => openLightbox(lightboxIdx)}
                  className="group relative rounded-xl overflow-hidden border border-white/[0.07] hover:border-white/[0.14] cursor-pointer transition-all duration-300 hover:shadow-card-hover"
                  style={{ aspectRatio: "16/10", background: "#0a0f1a" }}
                >
                  <ScreenshotThumb
                    src={src}
                    alt={`${title} screenshot ${i + 1}`}
                    accent={accentColor}
                    glow={accentGlow}
                    label={`Screenshot ${i + 1}`}
                  />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-250 flex items-center justify-center">
                    <ZoomIn
                      size={20}
                      className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-250 drop-shadow-lg"
                    />
                  </div>

                  {/* Accent border glow on hover */}
                  <div
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{ boxShadow: `inset 0 0 0 1px ${accentColor}30` }}
                  />
                </motion.div>
              );
            })}
          </div>
        )}

        {/* Image count badge */}
        {allImages.length > 0 && (
          <p className="text-[11px] text-slate-700 text-center pt-1">
            {allImages.length} screenshot{allImages.length !== 1 ? "s" : ""}, click to enlarge
          </p>
        )}
      </div>

      {/* ── Lightbox ─────────────────────────────────────── */}
      {lightbox !== null && (
        <Lightbox
          images={allImages}
          index={lightbox}
          title={title}
          onClose={closeLightbox}
          onPrev={goPrev}
          onNext={goNext}
        />
      )}
    </>
  );
}

/* ── Screenshot thumbnail with error handling ───────────────────── */
function ScreenshotThumb({
  src, alt, accent, glow, label,
}: {
  src: string; alt: string; accent: string; glow: string; label: string;
}) {
  const [err, setErr] = useState(false);

  return (
    <div className="absolute inset-0">
      {!err ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 400px"
          className="object-cover"
          onError={() => setErr(true)}
        />
      ) : (
        <Placeholder accent={accent} glow={glow} label={label} />
      )}
    </div>
  );
}
