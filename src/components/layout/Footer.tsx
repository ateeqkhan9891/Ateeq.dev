import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const NAV_LINKS = [
  { label: "Home",     href: "/"          },
  { label: "About",    href: "/about"     },
  { label: "Projects", href: "/projects"  },
  { label: "Services", href: "/services"  },
  { label: "Resume",   href: "/resume"    },
  { label: "Contact",  href: "/contact"   },
];

const SERVICE_LINKS = [
  { label: "AI SaaS",          href: "/services#ai-saas"             },
  { label: "Data Dashboards",  href: "/services#data-dashboards"     },
  { label: "Machine Learning", href: "/services#ml-models"           },
  { label: "Backend APIs",     href: "/services#backend-apis"        },
  { label: "Healthcare Web",   href: "/services#healthcare-websites" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06]" style={{ background: "#050810" }}>

      {/* CTA strip */}
      <div className="border-b border-white/[0.05]" style={{ background: "rgba(6,182,212,0.025)" }}>
        <div className="wrap py-5 md:py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-white mb-0.5">Ready to start a project?</p>
            <p className="text-xs text-slate-600">Open to freelance, contracts &amp; collaborations.</p>
          </div>
          <div className="flex flex-row sm:flex-row items-center gap-2.5 w-full sm:w-auto">
            <a
              href="https://wa.me/923367070686"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 flex-1 sm:flex-none px-4 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200"
              style={{
                background: "linear-gradient(135deg, #25d366, #128c7e)",
                color: "#fff",
                boxShadow: "0 0 0 1px rgba(37,211,102,0.3), 0 4px 20px rgba(37,211,102,0.15)",
              }}
            >
              <WhatsAppIcon className="w-3.5 h-3.5 shrink-0" />
              WhatsApp
            </a>
            <a
              href="mailto:ateeqrehmankhan0346@gmail.com"
              className="inline-flex items-center justify-center gap-2 flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.1] hover:border-white/[0.18] text-slate-300 hover:text-white font-semibold text-sm transition-all duration-200"
            >
              <Mail size={13} />
              Email
            </a>
          </div>
        </div>
      </div>

      {/* Main grid */}
      <div className="wrap py-8 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10 mb-8 md:mb-12">

          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-0.5 mb-3">
              <span className="text-lg font-bold text-white tracking-tight">Ateeq</span>
              <span className="text-lg font-bold text-cyan-400">.</span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed mb-4 max-w-xs">
              Data Scientist &amp; Full Stack Developer building AI-powered products and high-converting websites.
            </p>
            <div className="flex items-center gap-1.5 text-xs text-slate-700 mb-4">
              <MapPin size={11} />
              Islamabad, Pakistan &middot; Remote
            </div>
            <div className="flex items-center gap-2">
              {[
                { href: "https://github.com/ateeqkhan9891",                    label: "GitHub",   hover: "hover:text-white hover:border-white/[0.18] hover:bg-white/[0.08]",       icon: <GithubIcon className="w-3.5 h-3.5" /> },
                { href: "https://www.linkedin.com/in/ateeq-rehman-a7698b26b/", label: "LinkedIn", hover: "hover:text-blue-400 hover:border-blue-400/30 hover:bg-blue-400/[0.08]",   icon: <LinkedinIcon className="w-3.5 h-3.5" /> },
                { href: "mailto:ateeqrehmankhan0346@gmail.com",                label: "Email",    hover: "hover:text-cyan-400 hover:border-cyan-400/30 hover:bg-cyan-400/[0.08]",   icon: <Mail size={13} /> },
                { href: "https://wa.me/923367070686",                          label: "WhatsApp", hover: "hover:text-emerald-400 hover:border-emerald-400/30 hover:bg-emerald-400/[0.08]", icon: <WhatsAppIcon className="w-3.5 h-3.5" /> },
              ].map(({ href, label, hover, icon }) => (
                <a key={label} href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer" aria-label={label}
                  className={`w-8 h-8 rounded-lg flex items-center justify-center border border-white/[0.08] bg-white/[0.04] text-slate-500 transition-all ${hover}`}>
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links + Services — 2-col on mobile, separate on desktop */}
          <div className="grid grid-cols-2 gap-6 md:contents">
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-600 mb-4">
                Pages
              </h4>
              <ul className="space-y-2.5">
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

            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-600 mb-4">
                Services
              </h4>
              <ul className="space-y-2.5">
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
          </div>

          {/* Reach Me — hidden on mobile (info already in brand row) */}
          <div className="hidden md:block">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-600 mb-4">
              Reach Me
            </h4>
            <div className="space-y-3">
              {[
                { href: "https://github.com/ateeqkhan9891",                    icon: <GithubIcon className="w-3 h-3" />,         label: "github.com/ateeqkhan9891",         hover: "group-hover:border-white/[0.15]"       },
                { href: "https://www.linkedin.com/in/ateeq-rehman-a7698b26b/", icon: <LinkedinIcon className="w-3 h-3" />,       label: "LinkedIn Profile",                  hover: "group-hover:border-blue-400/30"        },
                { href: "mailto:ateeqrehmankhan0346@gmail.com",                icon: <Mail size={11} />,                          label: "Send an email",                     hover: "group-hover:border-cyan-400/30"        },
                { href: "https://wa.me/923367070686",                          icon: <WhatsAppIcon className="w-3 h-3" />,        label: "WhatsApp",                          hover: "group-hover:border-emerald-400/30"     },
              ].map(({ href, icon, label, hover }) => (
                <a key={label} href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-sm text-slate-500 hover:text-slate-200 transition-colors">
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center bg-white/[0.04] border border-white/[0.07] transition-colors shrink-0 ${hover}`}>
                    {icon}
                  </div>
                  <span className="truncate text-xs">{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.05] pt-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-700">
            &copy; {year} Ateeq Rehman Wazir
          </p>
          <div className="flex items-center gap-4 text-xs text-slate-700">
            <span className="hidden sm:inline">Data Scientist &amp; Full Stack Developer</span>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-emerald-700">Available</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
