import Link from "next/link";
import { Mail, ArrowUpRight, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";

/* ── WhatsApp SVG icon ─────────────────────────────────────────── */
function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

/* ── Quick links ────────────────────────────────────────────────── */
const NAV_LINKS = [
  { label: "Home",     href: "/"          },
  { label: "About",    href: "/about"     },
  { label: "Projects", href: "/projects"  },
  { label: "Services", href: "/services"  },
  { label: "Contact",  href: "/contact"   },
];

const SERVICE_LINKS = [
  { label: "AI SaaS Development",    href: "/services#ai-saas"             },
  { label: "Data Dashboards",        href: "/services#data-dashboards"     },
  { label: "Machine Learning",       href: "/services#ml-models"           },
  { label: "Backend APIs",           href: "/services#backend-apis"        },
  { label: "Healthcare Websites",    href: "/services#healthcare-websites" },
];

/* ═══════════════════════════════════════════════════════════════════ */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06]" style={{ background: "#050810" }}>

      {/* ── Top CTA strip ──────────────────────────────────────── */}
      <div className="border-b border-white/[0.05]" style={{ background: "rgba(6,182,212,0.025)" }}>
        <div className="wrap py-8 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div>
            <p className="text-sm font-semibold text-white mb-0.5">
              Ready to start a project?
            </p>
            <p className="text-xs text-slate-600">
              I&apos;m open to freelance, contracts &amp; collaborations.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* WhatsApp CTA, premium green */}
            <a
              href="https://wa.me/923367070686"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200"
              style={{
                background: "linear-gradient(135deg, #25d366, #128c7e)",
                color: "#fff",
                boxShadow: "0 0 0 1px rgba(37,211,102,0.3), 0 4px 20px rgba(37,211,102,0.2)",
              }}
            >
              <WhatsAppIcon className="w-4 h-4" />
              Chat on WhatsApp
              <ArrowUpRight
                size={13}
                className="opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </a>

            {/* Email CTA */}
            <a
              href="mailto:ateeqrehmankhan0346@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.1] hover:border-white/[0.18] text-slate-300 hover:text-white font-semibold text-sm transition-all duration-200"
            >
              <Mail size={14} />
              Send Email
            </a>
          </div>
        </div>
      </div>

      {/* ── Main footer grid ───────────────────────────────────── */}
      <div className="wrap py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* ── Brand column ──────────────────────────────────── */}
          <div className="sm:col-span-2 lg:col-span-1">
            {/* Logo */}
            <div className="flex items-center gap-0.5 mb-4">
              <span className="text-xl font-bold text-white tracking-tight">Ateeq</span>
              <span className="text-xl font-bold text-cyan-400">.</span>
            </div>

            <p className="text-sm text-slate-500 leading-relaxed mb-5 max-w-xs">
              Data Scientist &amp; Full Stack Developer, building AI-powered products,
              ML systems, and high-converting business websites.
            </p>

            {/* Location */}
            <div className="flex items-center gap-2 text-xs text-slate-700 mb-5">
              <MapPin size={12} />
              Islamabad, Pakistan, Remote
            </div>

            {/* Social icon row */}
            <div className="flex items-center gap-2">
              <a href="https://github.com/ateeqkhan9891"
                target="_blank" rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-8 h-8 rounded-lg flex items-center justify-center border border-white/[0.08] bg-white/[0.04] text-slate-500 hover:text-white hover:border-white/[0.18] hover:bg-white/[0.08] transition-all">
                <GithubIcon className="w-3.5 h-3.5" />
              </a>
              <a href="https://www.linkedin.com/in/ateeq-rehman-a7698b26b/"
                target="_blank" rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-lg flex items-center justify-center border border-white/[0.08] bg-white/[0.04] text-slate-500 hover:text-blue-400 hover:border-blue-400/30 hover:bg-blue-400/[0.08] transition-all">
                <LinkedinIcon className="w-3.5 h-3.5" />
              </a>
              <a href="mailto:ateeqrehmankhan0346@gmail.com"
                aria-label="Email"
                className="w-8 h-8 rounded-lg flex items-center justify-center border border-white/[0.08] bg-white/[0.04] text-slate-500 hover:text-cyan-400 hover:border-cyan-400/30 hover:bg-cyan-400/[0.08] transition-all">
                <Mail size={14} />
              </a>
              <a href="https://wa.me/923367070686"
                target="_blank" rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-8 h-8 rounded-lg flex items-center justify-center border border-white/[0.08] bg-white/[0.04] text-slate-500 hover:text-emerald-400 hover:border-emerald-400/30 hover:bg-emerald-400/[0.08] transition-all">
                <WhatsAppIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* ── Quick Links ───────────────────────────────────── */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-600 mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}
                    className="group flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-200 transition-colors">
                    <span className="w-1 h-1 rounded-full bg-slate-700 group-hover:bg-cyan-400 transition-colors shrink-0" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Services ──────────────────────────────────────── */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-600 mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {SERVICE_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}
                    className="group flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-200 transition-colors">
                    <span className="w-1 h-1 rounded-full bg-slate-700 group-hover:bg-cyan-400 transition-colors shrink-0" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact / Reach ───────────────────────────────── */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-600 mb-5">
              Reach Me
            </h4>
            <div className="space-y-3">
              {/* GitHub */}
              <a href="https://github.com/ateeqkhan9891"
                target="_blank" rel="noopener noreferrer"
                className="group flex items-center gap-3 text-sm text-slate-500 hover:text-slate-200 transition-colors">
                <div className="w-7 h-7 rounded-lg flex items-center justify-center bg-white/[0.04] border border-white/[0.07] group-hover:border-white/[0.15] transition-colors shrink-0">
                  <GithubIcon className="w-3 h-3" />
                </div>
                <span className="truncate">github.com</span>
              </a>

              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/ateeq-rehman-a7698b26b/"
                target="_blank" rel="noopener noreferrer"
                className="group flex items-center gap-3 text-sm text-slate-500 hover:text-blue-400 transition-colors">
                <div className="w-7 h-7 rounded-lg flex items-center justify-center bg-white/[0.04] border border-white/[0.07] group-hover:border-blue-400/30 transition-colors shrink-0">
                  <LinkedinIcon className="w-3 h-3" />
                </div>
                <span>LinkedIn Profile</span>
              </a>

              {/* Email */}
              <a href="mailto:ateeqrehmankhan0346@gmail.com"
                className="group flex items-center gap-3 text-sm text-slate-500 hover:text-cyan-400 transition-colors">
                <div className="w-7 h-7 rounded-lg flex items-center justify-center bg-white/[0.04] border border-white/[0.07] group-hover:border-cyan-400/30 transition-colors shrink-0">
                  <Mail size={12} />
                </div>
                <span className="truncate">Send an email</span>
              </a>

              {/* WhatsApp */}
              <a href="https://wa.me/923367070686"
                target="_blank" rel="noopener noreferrer"
                className="group flex items-center gap-3 text-sm text-slate-500 hover:text-emerald-400 transition-colors">
                <div className="w-7 h-7 rounded-lg flex items-center justify-center bg-white/[0.04] border border-white/[0.07] group-hover:border-emerald-400/30 transition-colors shrink-0">
                  <WhatsAppIcon className="w-3 h-3" />
                </div>
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ────────────────────────────────────── */}
        <div className="border-t border-white/[0.05] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-700">
            &copy; {year} Ateeq Rehman Wazir, All rights reserved.
          </p>

          <div className="flex items-center gap-5 text-xs text-slate-700">
            <span>Data Scientist &amp; Full Stack Developer</span>
            <div className="w-px h-3 bg-white/[0.07]" />
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-emerald-700">Available for work</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
