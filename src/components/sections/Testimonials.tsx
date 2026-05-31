"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import FeedbackButton from "@/components/reviews/FeedbackButton";

const FEATURED = [
  {
    id: "static-1",
    quote:
      "The website captured exactly the premium feel I wanted for my practice. Within two weeks of launch we were getting WhatsApp inquiries from patients who found us through Google. The design is professional and my patients notice it.",
    name: "Dr. Zulqarnain",
    role: "Plastic Surgeon, Hair Transplant Specialist",
    initials: "DZ",
    gradient: "from-emerald-500 to-teal-600",
    domain: "Healthcare Website",
    rating: 5,
  },
  {
    id: "static-2",
    quote:
      "Ateeq delivered our sales dashboard on time and within scope. Our team uses it daily. What stood out was how quickly he understood our business data without needing everything explained twice. Clean output, zero back-and-forth.",
    name: "Hamza Aslam",
    role: "Business Director",
    initials: "HA",
    gradient: "from-blue-500 to-cyan-500",
    domain: "Data Analytics",
    rating: 5,
  },
  {
    id: "static-3",
    quote:
      "We needed a full website fast and Ateeq understood the brief immediately. He asked the right questions, flagged things we had not considered, and delivered something far better than we expected. Would work with him again.",
    name: "Nawal",
    role: "Founder",
    initials: "NW",
    gradient: "from-violet-500 to-purple-500",
    domain: "Web Development",
    rating: 5,
  },
];

interface DynamicReview {
  id: string;
  name: string;
  role: string;
  company?: string;
  project: string;
  rating: number;
  feedback: string;
}

interface Card {
  id: string;
  quote: string;
  name: string;
  role: string;
  initials: string;
  gradient: string;
  domain: string;
  rating: number;
}

const AVATAR_GRADIENTS = [
  "from-sky-500 to-blue-600",
  "from-rose-500 to-pink-600",
  "from-amber-500 to-orange-500",
  "from-indigo-500 to-violet-600",
  "from-teal-500 to-cyan-500",
];

function toInitials(name: string) {
  return name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
}
function toGradient(name: string) {
  return AVATAR_GRADIENTS[name.charCodeAt(0) % AVATAR_GRADIENTS.length];
}

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} viewBox="0 0 12 12"
          className={`w-3 h-3 ${i < n ? "fill-amber-400" : "fill-slate-800"}`}>
          <path d="M6 .5l1.39 2.82 3.11.45-2.25 2.19.53 3.1L6 7.52 3.22 9.06l.53-3.1L1.5 3.77l3.11-.45z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ card }: { card: Card }) {
  return (
    <div className="flex flex-col h-full rounded-2xl border border-white/[0.08] bg-[#0b1120] p-7 relative overflow-hidden">

      <div className="absolute top-3 right-5 text-7xl font-serif leading-none select-none pointer-events-none"
        style={{ color: "rgba(255,255,255,0.025)" }}>
        &ldquo;
      </div>


      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-600 mb-5">
        {card.domain}
      </span>


      <div className="mb-4">
        <Stars n={card.rating} />
      </div>


      <blockquote className="flex-1 text-sm text-slate-300 leading-[1.85] mb-7 font-light">
        &ldquo;{card.quote}&rdquo;
      </blockquote>


      <div className="flex items-center gap-3 pt-5 border-t border-white/[0.05]">
        <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${card.gradient} flex items-center justify-center shrink-0`}>
          <span className="text-xs font-bold text-white">{card.initials}</span>
        </div>
        <div className="min-w-0">
          <div className="text-sm font-semibold text-white truncate">{card.name}</div>
          <div className="text-xs text-slate-600 truncate">{card.role}</div>
        </div>
      </div>
    </div>
  );
}

const SLIDE_DURATION = 5000;
const TRANSITION = { duration: 0.45, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] };

export default function Testimonials() {
  const [dynamic, setDynamic]   = useState<DynamicReview[]>([]);
  const [index, setIndex]       = useState(0);
  const [dir, setDir]           = useState(1);
  const [paused, setPaused]     = useState(false);
  const [perView, setPerView]   = useState(3);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);


  useEffect(() => {
    fetch("/api/reviews")
      .then((r) => r.json())
      .then((d) => setDynamic(d.reviews ?? []))
      .catch(() => {});
  }, []);


  const featuredNames = new Set(FEATURED.map((f) => f.name.toLowerCase()));
  const dynamicCards: Card[] = dynamic
    .filter((r) => !featuredNames.has(r.name.toLowerCase()))
    .map((r) => ({
      id:       r.id,
      quote:    r.feedback,
      name:     r.name,
      role:     r.company ? `${r.role} · ${r.company}` : r.role,
      initials: toInitials(r.name),
      gradient: toGradient(r.name),
      domain:   r.project,
      rating:   r.rating,
    }));

  const cards: Card[] = [...FEATURED, ...dynamicCards];


  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 768)       setPerView(1);
      else if (window.innerWidth < 1024) setPerView(2);
      else                               setPerView(3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = Math.max(0, cards.length - perView);

  const prev = useCallback(() => {
    setDir(-1);
    setIndex((i) => (i <= 0 ? maxIndex : i - 1));
  }, [maxIndex]);

  const next = useCallback(() => {
    setDir(1);
    setIndex((i) => (i >= maxIndex ? 0 : i + 1));
  }, [maxIndex]);

  const goTo = (i: number) => {
    setDir(i > index ? 1 : -1);
    setIndex(i);
  };


  useEffect(() => {
    if (paused || cards.length <= perView) return;
    timerRef.current = setInterval(() => next(), SLIDE_DURATION);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [paused, next, cards.length, perView]);


  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft")  prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [prev, next]);

  const slideVariants = {
    enter: (d: number) => ({ x: d > 0 ? 60 : -60, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit:  (d: number) => ({ x: d > 0 ? -60 : 60, opacity: 0 }),
  };

  const visible = cards.slice(index, index + perView);

  return (
    <section className="section border-t border-white/[0.05]">
      <div className="wrap">


        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12"
        >
          <div>
            <span className="eyebrow mb-4 block">Client Feedback</span>
            <h2
              className="font-bold text-white tracking-tight"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", letterSpacing: "-0.025em" }}
            >
              What Clients Say
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              {cards.length} verified review{cards.length !== 1 ? "s" : ""}
            </p>
          </div>


          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              aria-label="Previous review"
              className="w-9 h-9 rounded-xl border border-white/[0.08] bg-white/[0.04] hover:bg-white/[0.08] hover:border-white/[0.16] text-slate-400 hover:text-white flex items-center justify-center transition-all duration-200 disabled:opacity-30"
              disabled={cards.length <= perView}
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={next}
              aria-label="Next review"
              className="w-9 h-9 rounded-xl border border-white/[0.08] bg-white/[0.04] hover:bg-white/[0.08] hover:border-white/[0.16] text-slate-400 hover:text-white flex items-center justify-center transition-all duration-200 disabled:opacity-30"
              disabled={cards.length <= perView}
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </motion.div>


        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence mode="popLayout" custom={dir}>
            <motion.div
              key={index}
              custom={dir}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={TRANSITION}
              className="grid gap-5"
              style={{ gridTemplateColumns: `repeat(${perView}, 1fr)` }}
            >
              {visible.map((card) => (
                <ReviewCard key={card.id} card={card} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>


        {cards.length > perView && (
          <div className="flex items-center justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className="transition-all duration-300 rounded-full"
                style={{
                  width:   i === index ? "24px" : "6px",
                  height:  "6px",
                  background: i === index ? "#06b6d4" : "rgba(255,255,255,0.15)",
                }}
              />
            ))}
          </div>
        )}


        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="text-center mt-10"
        >
          <p className="text-slate-600 text-sm mb-4">Worked with me? Share your experience.</p>
          <FeedbackButton variant="primary" />
        </motion.div>
      </div>
    </section>
  );
}
