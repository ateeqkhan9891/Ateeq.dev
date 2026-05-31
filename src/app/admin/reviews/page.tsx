"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Search, CheckCircle2, XCircle, Trash2, Star, RefreshCw } from "lucide-react";

interface Review {
  id: string;
  name: string;
  role: string;
  company?: string;
  email?: string;
  linkedin_url?: string;
  project: string;
  rating: number;
  feedback: string;
  permission_to_publish: boolean;
  status: "pending" | "approved" | "rejected";
  featured: boolean;
  admin_note?: string;
  created_at: string;
  approved_at?: string;
}

type StatusFilter = "all" | "pending" | "approved" | "rejected";

const STATUS_COLORS: Record<string, string> = {
  pending: "text-amber-400 bg-amber-400/10 border-amber-400/20",
  approved: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
  rejected: "text-red-400 bg-red-400/10 border-red-400/20",
};

export default function AdminReviews() {
  const router = useRouter();
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");
  const [actionLoading, setActionLoading] = useState<string | null>(null);
  const [secret, setSecret] = useState("");

  useEffect(() => {
    const stored = sessionStorage.getItem("admin_secret") ?? "";
    if (!stored) {
      router.push("/admin");
      return;
    }
    setSecret(stored);
  }, [router]);

  const fetchReviews = useCallback(async () => {
    if (!secret) return;
    setLoading(true);
    const params = new URLSearchParams();
    if (statusFilter !== "all") params.set("status", statusFilter);
    if (search.trim()) params.set("search", search.trim());

    try {
      const res = await fetch(`/api/admin/reviews?${params}`, {
        headers: { "x-admin-secret": secret },
      });
      if (res.status === 401) {
        router.push("/admin");
        return;
      }
      const data = await res.json();
      setReviews(data.reviews ?? []);
    } catch {
      // ignore
    } finally {
      setLoading(false);
    }
  }, [secret, statusFilter, search, router]);

  useEffect(() => {
    if (secret) fetchReviews();
  }, [secret, fetchReviews]);

  const patch = async (id: string, updates: Record<string, unknown>) => {
    setActionLoading(id);
    try {
      await fetch(`/api/reviews/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "x-admin-secret": secret,
        },
        body: JSON.stringify(updates),
      });
      await fetchReviews();
    } finally {
      setActionLoading(null);
    }
  };

  const remove = async (id: string) => {
    if (!confirm("Delete this review? This cannot be undone.")) return;
    setActionLoading(id);
    try {
      await fetch(`/api/reviews/${id}`, {
        method: "DELETE",
        headers: { "x-admin-secret": secret },
      });
      setReviews((prev) => prev.filter((r) => r.id !== id));
    } finally {
      setActionLoading(null);
    }
  };

  // Stats
  const pending = reviews.filter((r) => r.status === "pending").length;
  const approved = reviews.filter((r) => r.status === "approved").length;
  const rejected = reviews.filter((r) => r.status === "rejected").length;
  const avgRating =
    reviews.length
      ? (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1)
      : "—";

  const inputCls =
    "px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-500/50 transition-all";

  const tabs: { label: string; value: StatusFilter }[] = [
    { label: "All", value: "all" },
    { label: "Pending", value: "pending" },
    { label: "Approved", value: "approved" },
    { label: "Rejected", value: "rejected" },
  ];

  return (
    <div className="min-h-screen" style={{ background: "#060912" }}>
      {/* Top bar */}
      <div
        className="border-b border-white/[0.06] px-6 py-4 flex items-center justify-between"
        style={{ background: "#0b1120" }}
      >
        <div>
          <h1 className="text-lg font-bold text-white">Review Dashboard</h1>
          <p className="text-xs text-slate-500 mt-0.5">Manage submitted feedback</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={fetchReviews}
            className="p-2 rounded-lg text-slate-500 hover:text-white hover:bg-white/[0.06] transition-all"
            title="Refresh"
          >
            <RefreshCw size={16} />
          </button>
          <button
            onClick={() => {
              sessionStorage.removeItem("admin_secret");
              router.push("/admin");
            }}
            className="text-xs text-slate-500 hover:text-red-400 transition-colors"
          >
            Sign out
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Pending", value: pending, color: "text-amber-400" },
            { label: "Approved", value: approved, color: "text-emerald-400" },
            { label: "Rejected", value: rejected, color: "text-red-400" },
            { label: "Avg Rating", value: avgRating, color: "text-cyan-400" },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-white/[0.07] p-4"
              style={{ background: "#0b1120" }}
            >
              <div className={`text-2xl font-bold ${s.color}`}>{s.value}</div>
              <div className="text-xs text-slate-600 mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          {/* Status tabs */}
          <div className="flex gap-1 p-1 rounded-xl border border-white/[0.06]" style={{ background: "#0b1120" }}>
            {tabs.map((t) => (
              <button
                key={t.value}
                onClick={() => setStatusFilter(t.value)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  statusFilter === t.value
                    ? "bg-cyan-500 text-[#060912]"
                    : "text-slate-500 hover:text-white"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative flex-1">
            <Search
              size={14}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-600"
            />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && fetchReviews()}
              placeholder="Search by name, project, feedback..."
              className={`${inputCls} w-full pl-9`}
            />
          </div>
          <button
            onClick={fetchReviews}
            className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-[#060912] font-semibold text-sm transition-all"
          >
            Search
          </button>
        </div>

        {/* Reviews */}
        {loading ? (
          <div className="space-y-4">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/[0.05] p-6 animate-pulse h-36"
                style={{ background: "#0b1120" }}
              />
            ))}
          </div>
        ) : reviews.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-slate-500 text-sm">No reviews found.</p>
          </div>
        ) : (
          <div className="space-y-4">
            <AnimatePresence mode="popLayout">
              {reviews.map((r) => (
                <motion.div
                  key={r.id}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.25 }}
                  className="rounded-2xl border border-white/[0.07] p-5 transition-all hover:border-white/[0.12]"
                  style={{ background: "#0b1120" }}
                >
                  {/* Top row */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div className="flex items-start gap-3">
                      {/* Avatar */}
                      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-cyan-500 to-violet-500 flex items-center justify-center shrink-0 text-white text-xs font-bold">
                        {r.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")
                          .slice(0, 2)
                          .toUpperCase()}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-sm font-semibold text-white">{r.name}</span>
                          <span className="text-xs text-slate-500">
                            {r.role}
                            {r.company ? ` · ${r.company}` : ""}
                          </span>
                          {r.email && (
                            <span className="text-[10px] text-slate-600">{r.email}</span>
                          )}
                        </div>
                        <div className="flex items-center gap-2 mt-1 flex-wrap">
                          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-600">
                            {r.project}
                          </span>
                          <div className="flex gap-0.5">
                            {[...Array(5)].map((_, i) => (
                              <svg
                                key={i}
                                viewBox="0 0 12 12"
                                className={`w-2.5 h-2.5 ${
                                  i < r.rating ? "fill-amber-400" : "fill-slate-800"
                                }`}
                              >
                                <path d="M6 .5l1.39 2.82 3.11.45-2.25 2.19.53 3.1L6 7.52 3.22 9.06l.53-3.1L1.5 3.77l3.11-.45z" />
                              </svg>
                            ))}
                          </div>
                          <span
                            className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${
                              STATUS_COLORS[r.status]
                            }`}
                          >
                            {r.status}
                          </span>
                          {r.featured && (
                            <span className="text-[9px] font-bold uppercase tracking-wider text-amber-400 border border-amber-400/20 bg-amber-400/10 px-2 py-0.5 rounded-full">
                              Featured
                            </span>
                          )}
                          <span className="text-[10px] text-slate-700">
                            {new Date(r.created_at).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-1.5 shrink-0">
                      {r.status !== "approved" && (
                        <button
                          onClick={() => patch(r.id, { status: "approved" })}
                          disabled={actionLoading === r.id}
                          title="Approve"
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 text-emerald-400 text-xs font-semibold transition-all disabled:opacity-50"
                        >
                          <CheckCircle2 size={13} />
                          Approve
                        </button>
                      )}
                      {r.status !== "rejected" && (
                        <button
                          onClick={() => patch(r.id, { status: "rejected" })}
                          disabled={actionLoading === r.id}
                          title="Reject"
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 text-red-400 text-xs font-semibold transition-all disabled:opacity-50"
                        >
                          <XCircle size={13} />
                          Reject
                        </button>
                      )}
                      <button
                        onClick={() => patch(r.id, { featured: !r.featured })}
                        disabled={actionLoading === r.id}
                        title={r.featured ? "Unfeature" : "Feature"}
                        className={`px-3 py-1.5 rounded-lg border text-xs font-semibold transition-all disabled:opacity-50 ${
                          r.featured
                            ? "bg-amber-400/10 border-amber-400/20 text-amber-400 hover:bg-amber-400/20"
                            : "bg-white/[0.04] border-white/[0.08] text-slate-500 hover:text-amber-400 hover:border-amber-400/20"
                        }`}
                      >
                        <Star size={13} />
                      </button>
                      <button
                        onClick={() => remove(r.id)}
                        disabled={actionLoading === r.id}
                        title="Delete"
                        className="px-3 py-1.5 rounded-lg bg-white/[0.03] hover:bg-red-500/10 border border-white/[0.06] hover:border-red-500/20 text-slate-600 hover:text-red-400 transition-all disabled:opacity-50"
                      >
                        <Trash2 size={13} />
                      </button>
                    </div>
                  </div>

                  {/* Feedback */}
                  <blockquote className="text-sm text-slate-400 leading-relaxed border-l-2 border-white/[0.08] pl-3">
                    &ldquo;{r.feedback}&rdquo;
                  </blockquote>

                  {/* Permission warning */}
                  {!r.permission_to_publish && (
                    <p className="text-[10px] text-amber-500/60 mt-2">
                      No publish permission granted — will not appear publicly even if approved.
                    </p>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );
}
