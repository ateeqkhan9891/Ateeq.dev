import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <div className="text-6xl font-bold text-white mb-4">404</div>
      <p className="text-slate-400 mb-8">Page not found</p>
      <Link
        href="/"
        className="px-6 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold text-sm transition-all"
      >
        Back Home
      </Link>
    </div>
  );
}
