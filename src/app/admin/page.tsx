"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const router = useRouter();

  const login = (e: React.FormEvent) => {
    e.preventDefault();
    // Store in sessionStorage for simplicity
    sessionStorage.setItem("admin_secret", password);
    router.push("/admin/reviews");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ background: "#060912" }}
    >
      <div className="w-full max-w-sm px-6">
        <div
          className="rounded-2xl border border-white/[0.08] overflow-hidden"
          style={{ background: "#0b1120" }}
        >
          <div className="h-px bg-gradient-to-r from-cyan-500/50 via-violet-500/30 to-transparent" />
          <div className="p-8">
            <h1 className="text-xl font-bold text-white mb-1">Admin Access</h1>
            <p className="text-slate-500 text-sm mb-6">
              Enter your admin password to continue.
            </p>
            <form onSubmit={login} className="space-y-4">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Admin password"
                required
                className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-500/50 transition-colors"
              />
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-[#060912] font-bold text-sm transition-all"
              >
                Access Dashboard
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
