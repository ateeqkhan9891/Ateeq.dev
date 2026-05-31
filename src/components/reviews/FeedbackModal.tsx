"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, AlertCircle, Star, MessageSquarePlus, Lock } from "lucide-react";

/* ── Projects list ─────────────────────────────────────────── */
const PROJECTS = [
  "MyamiCV AI",
  "Miami Aesthetic Care",
  "Dr Zulqarnain Surgery",
  "Sales Data Dashboard",
  "FastAPI Backend",
  "House Price Prediction",
  "WordPress Website",
  "Consulting / Code Review",
  "Other",
];

const RATING_LABELS = ["", "Poor", "Fair", "Good", "Very Good", "Excellent"];
const RATING_COLORS = ["", "#ef4444", "#f97316", "#eab308", "#22c55e", "#06b6d4"];

/* ── Types ─────────────────────────────────────────────────── */
interface Props {
  open: boolean;
  onClose: () => void;
}
type Status = "idle" | "submitting" | "success" | "error";

/* ── Star rating component ─────────────────────────────────── */
function StarPicker({
  value,
  onChange,
}: {
  value: number;
  onChange: (v: number) => void;
}) {
  const [hover, setHover] = useState(0);
  const active = hover || value;
  const color = RATING_COLORS[active] || "#475569";

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-1.5">
        {[1, 2, 3, 4, 5].map((n) => (
          <button
            key={n}
            type="button"
            onClick={() => onChange(n)}
            onMouseEnter={() => setHover(n)}
            onMouseLeave={() => setHover(0)}
            className="transition-all duration-150 hover:scale-110 focus:outline-none"
            aria-label={`${n} star${n > 1 ? "s" : ""}`}
          >
            <Star
              size={28}
              className="transition-all duration-150"
              style={{
                fill: n <= active ? color : "transparent",
                color: n <= active ? color : "#334155",
                filter: n <= active ? `drop-shadow(0 0 6px ${color}60)` : "none",
              }}
            />
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        {active > 0 && (
          <motion.span
            key={active}
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 6 }}
            transition={{ duration: 0.15 }}
            className="text-xs font-semibold"
            style={{ color }}
          >
            {RATING_LABELS[active]}
          </motion.span>
        )}
        {active === 0 && (
          <motion.span
            key="empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xs text-slate-600"
          >
            Click to rate your experience
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ── Field wrapper ─────────────────────────────────────────── */
function Field({
  label,
  required,
  optional,
  children,
}: {
  label: string;
  required?: boolean;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-center gap-1.5 mb-1.5">
        <label className="text-xs font-semibold text-slate-400">{label}</label>
        {required && <span className="text-red-400 text-xs">*</span>}
        {optional && (
          <span className="text-[10px] text-slate-700 font-normal">optional</span>
        )}
      </div>
      {children}
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════
   MAIN MODAL
══════════════════════════════════════════════════════════════ */
export default function FeedbackModal({ open, onClose }: Props) {
  const [form, setForm] = useState({
    name: "",
    role: "",
    company: "",
    email: "",
    linkedin_url: "",
    project: "",
    rating: 0,
    feedback: "",
    permission_to_publish: false,
  });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const set = (k: string, v: string | number | boolean) =>
    setForm((p) => ({ ...p, [k]: v }));

  const validate = (): string | null => {
    if (!form.name.trim() || form.name.trim().length < 2) return "Name must be at least 2 characters.";
    if (!form.role.trim() || form.role.trim().length < 2) return "Role / Position is required.";
    if (!form.project) return "Please select the project you worked on.";
    if (!form.rating || form.rating < 1) return "Please select a rating.";
    if (!form.feedback.trim() || form.feedback.trim().length < 30) return "Feedback must be at least 30 characters.";
    if (form.feedback.trim().length > 1000) return "Feedback cannot exceed 1000 characters.";
    if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) return "Invalid email address.";
    if (!form.permission_to_publish) return "Please check the permission box to continue.";
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const err = validate();
    if (err) { setErrorMsg(err); return; }
    setErrorMsg("");
    setStatus("submitting");

    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, rating: Number(form.rating) }),
      });
      const data = await res.json();
      if (!res.ok) {
        setErrorMsg(data.error ?? "Something went wrong.");
        setStatus("error");
      } else {
        setStatus("success");
      }
    } catch {
      setErrorMsg("Network error. Please check your connection.");
      setStatus("error");
    }
  };

  const handleClose = () => {
    if (status === "submitting") return;
    onClose();
    setTimeout(() => {
      setStatus("idle");
      setErrorMsg("");
      setForm({
        name: "", role: "", company: "", email: "",
        linkedin_url: "", project: "", rating: 0,
        feedback: "", permission_to_publish: false,
      });
    }, 300);
  };

  const inputCls =
    "w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-slate-700 text-sm focus:outline-none focus:border-cyan-500/40 focus:bg-white/[0.06] transition-all duration-200";
  const charPct = Math.min((form.feedback.length / 1000) * 100, 100);
  const charColor =
    form.feedback.length > 1000 ? "#ef4444"
    : form.feedback.length >= 30 ? "#06b6d4"
    : "#475569";

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center sm:p-4"
          onClick={handleClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-[#060912]/85 backdrop-blur-xl" />

          {/* Modal card */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full sm:max-w-[520px] max-h-[92vh] sm:max-h-[90vh] overflow-hidden rounded-t-3xl sm:rounded-2xl border border-white/[0.1] shadow-2xl flex flex-col"
            style={{ background: "#0b1120" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* ── Decorative header ───────────────────────── */}
            <div className="relative overflow-hidden shrink-0">
              {/* Gradient background */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse 120% 100% at 50% 0%, rgba(6,182,212,0.12) 0%, rgba(139,92,246,0.06) 60%, transparent 100%)",
                }}
              />
              <div
                className="absolute inset-0 bg-grid-pattern bg-grid opacity-30"
              />
              {/* Top accent line */}
              <div className="h-[2px] bg-gradient-to-r from-cyan-500 via-violet-500 to-cyan-500" />

              <div className="relative px-6 pt-6 pb-5 flex items-start justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  {/* Icon */}
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      background: "rgba(6,182,212,0.12)",
                      border: "1px solid rgba(6,182,212,0.25)",
                    }}
                  >
                    <MessageSquarePlus size={20} className="text-cyan-400" />
                  </div>
                  <div>
                    <h2 className="text-base font-bold text-white leading-tight">
                      Share Your Experience
                    </h2>
                    <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">
                      All reviews are moderated before appearing publicly.
                    </p>
                  </div>
                </div>
                <button
                  onClick={handleClose}
                  className="p-2 rounded-xl text-slate-500 hover:text-white hover:bg-white/[0.08] transition-all shrink-0 mt-0.5"
                  aria-label="Close"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* ── Scrollable body ─────────────────────────── */}
            <div
              className="flex-1 overflow-y-auto px-6 pb-6"
              style={{ scrollbarWidth: "none" }}
            >

              {/* SUCCESS STATE */}
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="py-12 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.1, type: "spring", stiffness: 200, damping: 14 }}
                    className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center mx-auto mb-5"
                  >
                    <CheckCircle2 size={30} className="text-emerald-400" />
                  </motion.div>
                  <h3 className="text-lg font-bold text-white mb-2">Thank You!</h3>
                  <p className="text-sm text-slate-400 mb-8 max-w-xs mx-auto leading-relaxed">
                    Your review has been received and is pending approval. I appreciate you taking the time.
                  </p>
                  <button
                    onClick={handleClose}
                    className="px-8 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-[#060912] font-bold text-sm transition-all hover:shadow-glow-btn"
                  >
                    Close
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 pt-5">

                  {/* Section: Identity */}
                  <div className="grid grid-cols-2 gap-3">
                    <Field label="Name" required>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => set("name", e.target.value)}
                        placeholder="Your full name"
                        className={inputCls}
                      />
                    </Field>
                    <Field label="Role / Position" required>
                      <input
                        type="text"
                        value={form.role}
                        onChange={(e) => set("role", e.target.value)}
                        placeholder="e.g. CEO, Dev Lead"
                        className={inputCls}
                      />
                    </Field>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <Field label="Company" optional>
                      <input
                        type="text"
                        value={form.company}
                        onChange={(e) => set("company", e.target.value)}
                        placeholder="Organization name"
                        className={inputCls}
                      />
                    </Field>
                    <Field label="Email" optional>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => set("email", e.target.value)}
                        placeholder="your@email.com"
                        className={inputCls}
                      />
                    </Field>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-white/[0.05]" />

                  {/* Project */}
                  <Field label="Project or Service" required>
                    <select
                      value={form.project}
                      onChange={(e) => set("project", e.target.value)}
                      className={`${inputCls} appearance-none cursor-pointer`}
                      style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='%23475569'%3E%3Cpath fill-rule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'/%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 12px center", backgroundSize: "16px" }}
                    >
                      <option value="" className="bg-[#0b1120]">Select a project...</option>
                      {PROJECTS.map((p) => (
                        <option key={p} value={p} className="bg-[#0b1120]">{p}</option>
                      ))}
                    </select>
                  </Field>

                  {/* Rating */}
                  <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-4">
                    <p className="text-xs font-semibold text-slate-400 mb-3">
                      Your Rating <span className="text-red-400">*</span>
                    </p>
                    <StarPicker value={form.rating} onChange={(v) => set("rating", v)} />
                  </div>

                  {/* Feedback */}
                  <Field label="Your Feedback" required>
                    <textarea
                      value={form.feedback}
                      onChange={(e) => set("feedback", e.target.value)}
                      placeholder="What did Ateeq deliver? What stood out? How did it impact your project or business?"
                      rows={4}
                      className={`${inputCls} resize-none leading-relaxed`}
                    />
                    {/* Progress bar + counter */}
                    <div className="flex items-center justify-between mt-2 gap-3">
                      <div className="flex-1 h-0.5 rounded-full bg-white/[0.06] overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-300"
                          style={{ width: `${charPct}%`, background: charColor }}
                        />
                      </div>
                      <span
                        className="text-[10px] font-medium shrink-0"
                        style={{ color: charColor }}
                      >
                        {form.feedback.length < 30
                          ? `${30 - form.feedback.length} more chars needed`
                          : `${form.feedback.length} / 1000`}
                      </span>
                    </div>
                  </Field>

                  {/* LinkedIn (optional, compact) */}
                  <Field label="LinkedIn Profile" optional>
                    <input
                      type="url"
                      value={form.linkedin_url}
                      onChange={(e) => set("linkedin_url", e.target.value)}
                      placeholder="https://linkedin.com/in/yourprofile"
                      className={inputCls}
                    />
                  </Field>

                  {/* Permission */}
                  <label
                    htmlFor="permission"
                    className="flex items-start gap-3.5 p-4 rounded-xl border cursor-pointer transition-all group"
                    style={{
                      borderColor: form.permission_to_publish
                        ? "rgba(6,182,212,0.3)"
                        : "rgba(255,255,255,0.07)",
                      background: form.permission_to_publish
                        ? "rgba(6,182,212,0.04)"
                        : "rgba(255,255,255,0.02)",
                    }}
                  >
                    {/* Custom checkbox */}
                    <div
                      className="w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 transition-all duration-200"
                      style={{
                        background: form.permission_to_publish
                          ? "rgba(6,182,212,0.9)"
                          : "rgba(255,255,255,0.05)",
                        border: form.permission_to_publish
                          ? "1px solid #06b6d4"
                          : "1px solid rgba(255,255,255,0.15)",
                      }}
                    >
                      {form.permission_to_publish && (
                        <motion.svg
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 300, damping: 20 }}
                          viewBox="0 0 12 12"
                          className="w-3 h-3"
                        >
                          <path
                            d="M2 6l3 3 5-5"
                            stroke="#060912"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                          />
                        </motion.svg>
                      )}
                    </div>
                    <input
                      type="checkbox"
                      id="permission"
                      checked={form.permission_to_publish}
                      onChange={(e) => set("permission_to_publish", e.target.checked)}
                      className="sr-only"
                    />
                    <div>
                      <p className="text-xs font-semibold text-slate-300 mb-0.5">
                        Permission to publish
                      </p>
                      <p className="text-[11px] text-slate-600 leading-relaxed">
                        I allow my name, role, and feedback to be displayed publicly on this portfolio after admin approval.
                      </p>
                    </div>
                  </label>

                  {/* Error */}
                  <AnimatePresence>
                    {errorMsg && (
                      <motion.div
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="flex items-start gap-2.5 p-3.5 rounded-xl bg-red-500/[0.08] border border-red-500/20"
                      >
                        <AlertCircle size={14} className="text-red-400 shrink-0 mt-0.5" />
                        <p className="text-xs text-red-400 leading-relaxed">{errorMsg}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full py-3 rounded-xl font-bold text-sm transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed relative overflow-hidden"
                    style={{
                      background: "linear-gradient(135deg, #06b6d4, #0284c7)",
                      boxShadow: "0 0 24px rgba(6,182,212,0.25), 0 0 0 1px rgba(6,182,212,0.3)",
                      color: "#060912",
                    }}
                  >
                    {status === "submitting" ? (
                      <span className="flex items-center justify-center gap-2">
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                          className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full"
                        />
                        Submitting...
                      </span>
                    ) : (
                      "Submit Review"
                    )}
                  </button>

                  {/* Security note */}
                  <div className="flex items-center justify-center gap-1.5">
                    <Lock size={10} className="text-slate-700" />
                    <p className="text-[10px] text-slate-700">
                      Reviews are manually approved before appearing publicly.
                    </p>
                  </div>

                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
