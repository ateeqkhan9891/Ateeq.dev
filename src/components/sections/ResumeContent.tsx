"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { IMAGES, ALT } from "@/lib/images";
import {
  Mail, MapPin, Download, ExternalLink,
  ArrowRight, GitBranch, Zap, Target,
  Users, RefreshCw, Layers, Shield,
  CheckCircle2,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import {
  personalInfo, summary, careerSnapshot, skills,
  experience, education, certifications, featuredProjectsResume,
  currentFocus, techEcosystem, languages, interests,
  currentlyBuilding, engineeringPrinciples,
} from "@/data/resume";

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] },
});

function StatusBadge({ status }: { status: string }) {
  const map: Record<string, string> = {
    Live:         "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    "In Progress":"bg-cyan-500/10   text-cyan-400   border-cyan-500/20",
    Completed:    "bg-slate-500/10  text-slate-400  border-slate-500/20",
  };
  return (
    <span className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full border ${map[status] ?? map["Completed"]}`}>
      {status}
    </span>
  );
}

function Divider() { return <div className="h-px bg-white/[0.05] my-10" />; }

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-7">
      <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-600">{children}</span>
      <div className="flex-1 h-px bg-white/[0.05]" />
    </div>
  );
}

function ProfileAvatar() {
  const [imgError, setImgError] = useState(false);
  return (
    <div className="relative mx-auto mb-5" style={{ width: 88, height: 88 }}>
      <div className="absolute -inset-1 rounded-full opacity-50 blur-md"
        style={{ background: "linear-gradient(135deg, #06b6d4, #8b5cf6)" }} />
      <div className="relative w-[88px] h-[88px] rounded-full overflow-hidden border border-white/[0.15]">
        {!imgError ? (
          <Image src={IMAGES.profile.resume} alt={ALT.resume} fill sizes="88px"
            className="object-cover object-top" onError={() => setImgError(true)} priority />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-white text-xl font-black"
            style={{ background: "linear-gradient(135deg, #0891b2, #7c3aed)" }}>
            AR
          </div>
        )}
      </div>
    </div>
  );
}

const PRINCIPLE_ICONS = [Users, RefreshCw, Target, Layers, Zap, Shield];

export default function ResumeContent() {
  return (
    <div className="min-h-screen pt-20 pb-24" style={{ background: "#060912" }}>


      <div className="fixed inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full opacity-[0.03] blur-[130px]" style={{ background: "#06b6d4" }} />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full opacity-[0.025] blur-[110px]" style={{ background: "#8b5cf6" }} />
      </div>

      <div className="wrap relative">
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start">


          <motion.aside
            {...fadeUp(0)}
            className="w-full lg:w-[272px] xl:w-[290px] shrink-0 lg:sticky lg:top-24"
            style={{ maxHeight: "calc(100vh - 7rem)", overflowY: "auto", scrollbarWidth: "none" }}
          >
            <div className="rounded-2xl border border-white/[0.08] overflow-hidden" style={{ background: "#0b1120" }}>
              <div className="h-[3px]" style={{ background: "linear-gradient(90deg, #06b6d4, #818cf8, #06b6d4)" }} />


              <div className="px-6 pt-7 pb-6 text-center">
                <ProfileAvatar />
                <h1 className="text-[15px] font-bold text-white leading-snug tracking-tight mb-1">{personalInfo.name}</h1>
                <p className="text-[11px] text-slate-500 mb-3 px-1">AI Engineer & Full Stack Developer</p>
                <div className="inline-flex items-center gap-1.5 text-[10px] text-slate-700 mb-4">
                  <MapPin size={9} />Islamabad, PK · Remote
                </div>
                <div className="flex justify-center mb-5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-semibold text-emerald-400 border border-emerald-500/20 bg-emerald-500/[0.07]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />Open to Work
                  </span>
                </div>
                <a href="/resume.pdf" download
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-[#060912] text-[13px] font-bold mb-3 hover:opacity-90 transition-opacity"
                  style={{ background: "linear-gradient(135deg, #06b6d4, #0284c7)", boxShadow: "0 0 24px rgba(6,182,212,0.22)" }}>
                  <Download size={13} />Download Resume
                </a>
                <div className="flex items-center justify-center gap-2">
                  {[
                    { href: `mailto:${personalInfo.email}`, label: "Email",    hover: "hover:text-cyan-400 hover:border-cyan-500/30",    icon: <Mail size={13} /> },
                    { href: personalInfo.github,            label: "GitHub",   hover: "hover:text-white hover:border-white/20",           icon: <GithubIcon className="w-3.5 h-3.5" /> },
                    { href: personalInfo.linkedin,          label: "LinkedIn", hover: "hover:text-blue-400 hover:border-blue-400/30",     icon: <LinkedinIcon className="w-3.5 h-3.5" /> },
                    { href: personalInfo.whatsapp,          label: "WhatsApp", hover: "hover:text-emerald-400 hover:border-emerald-400/30", icon: <WhatsAppIcon className="w-3.5 h-3.5" /> },
                  ].map(({ href, label, hover, icon }) => (
                    <a key={label} href={href} target={href.startsWith("mailto") ? undefined : "_blank"}
                      rel="noopener noreferrer" aria-label={label} title={label}
                      className={`w-9 h-9 rounded-xl flex items-center justify-center border border-white/[0.07] bg-white/[0.03] text-slate-600 transition-all duration-200 ${hover}`}>
                      {icon}
                    </a>
                  ))}
                </div>
              </div>

              <div className="h-px bg-white/[0.06] mx-6" />


              <div className="px-6 py-5">
                <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-slate-700 mb-4">At a Glance</p>
                <div className="grid grid-cols-2 gap-x-4 gap-y-4">
                  {careerSnapshot.map((item) => (
                    <div key={item.label}>
                      <div className="text-xl font-black leading-none mb-0.5"
                        style={{ background: "linear-gradient(135deg, #22d3ee, #818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                        {item.value}
                      </div>
                      <div className="text-[11px] font-semibold text-slate-300 leading-tight">{item.label}</div>
                      <div className="text-[10px] text-slate-700">{item.sub}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="h-px bg-white/[0.06] mx-6" />


              <div className="px-6 py-5">
                <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-slate-700 mb-3.5">Available For</p>
                <div className="space-y-2.5">
                  {[
                    { label: "Remote Work",        color: "#06b6d4" },
                    { label: "Freelance Projects", color: "#8b5cf6" },
                    { label: "SaaS Contracts",     color: "#10b981" },
                    { label: "Startup Collabs",    color: "#f59e0b" },
                  ].map(({ label, color }) => (
                    <div key={label} className="flex items-center gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: color }} />
                      <span className="text-[12px] text-slate-400">{label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="h-px bg-white/[0.06] mx-6" />


              <div className="px-6 py-5">
                <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-slate-700 mb-3.5">Contact</p>
                <div className="space-y-2.5">
                  <a href={`mailto:${personalInfo.email}`} className="group flex items-center gap-2.5">
                    <div className="w-6 h-6 rounded-lg flex items-center justify-center bg-white/[0.04] border border-white/[0.07] group-hover:border-cyan-500/30 group-hover:bg-cyan-500/[0.07] transition-all shrink-0">
                      <Mail size={10} className="text-slate-600 group-hover:text-cyan-400 transition-colors" />
                    </div>
                    <span className="text-[11px] text-slate-500 group-hover:text-slate-300 transition-colors break-all">{personalInfo.email}</span>
                  </a>
                  <a href="https://wa.me/923367070686" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2.5">
                    <div className="w-6 h-6 rounded-lg flex items-center justify-center bg-white/[0.04] border border-white/[0.07] group-hover:border-emerald-500/30 group-hover:bg-emerald-500/[0.07] transition-all shrink-0">
                      <WhatsAppIcon className="w-2.5 h-2.5 text-slate-600 group-hover:text-emerald-400 transition-colors" />
                    </div>
                    <span className="text-[11px] text-slate-500 group-hover:text-slate-300 transition-colors">+92 336 7070686</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.aside>


          <main className="flex-1 min-w-0">


            <motion.div {...fadeUp(0)} className="mb-12">
              <span className="eyebrow mb-3 block">Resume / CV</span>
              <h2 className="font-bold text-white tracking-tight mb-2"
                style={{ fontSize: "clamp(1.8rem,3.5vw,2.6rem)", letterSpacing: "-0.025em" }}>
                Engineer Profile
              </h2>
              <p className="text-sm text-slate-500">AI Engineer, Data Scientist & Full Stack Developer · Remote</p>
            </motion.div>


            <motion.section {...fadeUp(0.05)} className="mb-12">
              <SectionLabel>Professional Summary</SectionLabel>
              <div className="space-y-4">
                {summary.paragraphs.map((para, i) => (
                  <p key={i} className={`leading-[1.9] ${i === 0 ? "text-slate-300 text-[15px]" : "text-slate-500 text-sm"}`}>{para}</p>
                ))}
              </div>
            </motion.section>

            <Divider />


            <motion.section {...fadeUp(0.05)} className="mb-12">
              <SectionLabel>Currently Building</SectionLabel>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {currentlyBuilding.map((item, i) => (
                  <motion.div key={item.name} {...fadeUp(i * 0.08)}
                    className="rounded-xl border border-white/[0.06] p-4 hover:border-white/[0.1] transition-colors relative overflow-hidden group"
                    style={{ background: "#0b1120" }}>
                    <div className="absolute top-0 inset-x-0 h-px"
                      style={{ background: `linear-gradient(90deg, transparent, ${item.color}50, transparent)` }} />
                    <div className="flex items-start justify-between mb-3">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-700">{item.tag}</span>
                      <span className="inline-flex items-center gap-1 text-[10px] font-semibold" style={{ color: item.color }}>
                        <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: item.color }} />{item.status}
                      </span>
                    </div>
                    <h3 className="text-sm font-bold text-white mb-2">{item.name}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed group-hover:text-slate-500 transition-colors">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            <Divider />


            <motion.section {...fadeUp(0.05)} className="mb-12">
              <SectionLabel>Technical Skills</SectionLabel>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {skills.map((group, i) => (
                  <motion.div key={group.category} {...fadeUp(i * 0.05)}
                    className="rounded-xl p-4 border border-white/[0.05] hover:border-white/[0.09] transition-colors"
                    style={{ background: "rgba(11,17,32,0.5)" }}>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-2 h-2 rounded-full shrink-0"
                        style={{ background: group.color, boxShadow: `0 0 6px ${group.color}60` }} />
                      <span className="text-xs font-bold text-white uppercase tracking-wider">{group.category}</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {group.items.map(item => (
                        <span key={item} className="text-[11px] font-medium px-2 py-0.5 rounded-md border"
                          style={{ borderColor: `${group.color}28`, background: `${group.color}0e`, color: group.color }}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            <Divider />


            <motion.section {...fadeUp(0.05)} className="mb-12">
              <SectionLabel>Featured Projects</SectionLabel>


              <div className="space-y-5 mb-5">
                {featuredProjectsResume.filter(p => p.isFlagship).map((p, i) => (
                  <motion.div key={p.name} {...fadeUp(i * 0.08)}
                    className="rounded-2xl border border-white/[0.07] hover:border-white/[0.12] transition-all group relative overflow-hidden"
                    style={{ background: "#0b1120" }}>
                    <div className="absolute top-0 inset-x-0 h-px"
                      style={{ background: "linear-gradient(90deg, transparent, rgba(6,182,212,0.4), transparent)" }} />
                    <div className="p-6">

                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
                        <div className="flex items-center gap-3">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className="text-base font-bold text-white">{p.name}</h4>
                              <StatusBadge status={p.status} />
                            </div>
                            <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-600">{p.type} · {p.year}</span>
                          </div>
                        </div>
                        <Link href={p.link}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors shrink-0">
                          Case Study <ArrowRight size={12} />
                        </Link>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
                        {[
                          { label: "Challenge", text: p.challenge, color: "#f97316" },
                          { label: "Solution",  text: p.solution,  color: "#06b6d4" },
                          { label: "Outcome",   text: p.outcome,   color: "#10b981" },
                        ].map(col => (
                          <div key={col.label}>
                            <p className="text-[9px] font-bold uppercase tracking-[0.15em] mb-2" style={{ color: col.color }}>{col.label}</p>
                            <p className="text-xs text-slate-500 leading-relaxed group-hover:text-slate-400 transition-colors">{col.text}</p>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-1.5">
                        {p.tech.map(t => (
                          <span key={t} className="text-[10px] px-2 py-0.5 rounded bg-white/[0.05] text-slate-400 border border-white/[0.07]">{t}</span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>


              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {featuredProjectsResume.filter(p => !p.isFlagship).map((p, i) => (
                  <motion.div key={p.name} {...fadeUp(i * 0.06)}
                    className="rounded-xl p-4 border border-white/[0.06] hover:border-white/[0.1] transition-colors flex flex-col gap-3"
                    style={{ background: "rgba(11,17,32,0.6)" }}>
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-600">{p.type}</span>
                        <StatusBadge status={p.status} />
                      </div>
                      <h4 className="text-sm font-bold text-white mb-1.5">{p.name}</h4>
                      <p className="text-xs text-slate-500 leading-relaxed">{p.challenge}</p>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {p.tech.slice(0, 3).map(t => (
                        <span key={t} className="text-[10px] px-1.5 py-0.5 rounded bg-white/[0.05] text-slate-500 border border-white/[0.06]">{t}</span>
                      ))}
                    </div>
                    <div className="flex items-start gap-1.5 text-[11px] text-emerald-400/80 mt-auto">
                      <CheckCircle2 size={11} className="shrink-0 mt-0.5" />
                      <span>{p.outcome}</span>
                    </div>
                    <Link href={p.link} className="inline-flex items-center gap-1 text-[11px] font-semibold text-cyan-400 hover:text-cyan-300 transition-colors">
                      View <ArrowRight size={10} />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            <Divider />


            <motion.section {...fadeUp(0.05)} className="mb-12">
              <SectionLabel>Experience</SectionLabel>
              <div className="space-y-5">
                {experience.map((exp, i) => (
                  <motion.div key={exp.role} {...fadeUp(i * 0.08)} className="relative pl-6">
                    <div className="absolute left-0 top-0 bottom-0 flex flex-col items-center">
                      <div className="w-2.5 h-2.5 rounded-full shrink-0 mt-1.5 border-2 border-cyan-500" style={{ background: "#060912" }} />
                      {i < experience.length - 1 && <div className="w-px flex-1 bg-gradient-to-b from-cyan-500/30 to-transparent mt-1" />}
                    </div>
                    <div className="rounded-xl p-5 border border-white/[0.06] hover:border-white/[0.1] transition-colors"
                      style={{ background: "rgba(11,17,32,0.5)" }}>
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                        <div>
                          <h4 className="text-sm font-bold text-white">{exp.role}</h4>
                          <div className="flex items-center gap-2 mt-1 flex-wrap">
                            <span className="text-xs text-slate-400">{exp.company}</span>
                            <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-400">{exp.type}</span>
                          </div>
                        </div>
                        <div className="text-right shrink-0">
                          <div className="text-xs font-semibold text-slate-300">{exp.period}</div>
                          <div className="text-[10px] text-slate-600 mt-0.5 flex items-center gap-1 justify-end"><MapPin size={9} />{exp.location}</div>
                        </div>
                      </div>
                      <p className="text-xs text-slate-500 leading-relaxed mb-3">{exp.description}</p>
                      <ul className="space-y-2 mb-4">
                        {exp.responsibilities.map(r => (
                          <li key={r} className="flex items-start gap-2 text-xs text-slate-400">
                            <span className="w-1 h-1 rounded-full bg-cyan-500/50 shrink-0 mt-1.5" />{r}
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-1.5">
                        {exp.tech.map(t => (
                          <span key={t} className="text-[10px] px-2 py-0.5 rounded bg-white/[0.05] text-slate-400 border border-white/[0.06]">{t}</span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            <Divider />


            <motion.section {...fadeUp(0.05)} className="mb-12">
              <SectionLabel>Engineering Principles</SectionLabel>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {engineeringPrinciples.map((p, i) => {
                  const Icon = PRINCIPLE_ICONS[i];
                  return (
                    <motion.div key={p.n} {...fadeUp(i * 0.06)}
                      className="group rounded-xl p-4 border border-white/[0.05] hover:border-white/[0.1] hover:bg-white/[0.03] transition-all relative overflow-hidden"
                      style={{ background: "rgba(11,17,32,0.4)" }}>
                      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-cyan-500/0 via-cyan-500/30 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="flex items-start justify-between mb-3">
                        <span className="text-[10px] font-black font-mono tracking-widest text-slate-700 group-hover:text-cyan-500/50 transition-colors">{p.n}</span>
                        <div className="w-7 h-7 rounded-lg bg-white/[0.04] border border-white/[0.07] flex items-center justify-center group-hover:border-cyan-500/20 transition-colors">
                          <Icon size={13} className="text-slate-700 group-hover:text-cyan-400 transition-colors" />
                        </div>
                      </div>
                      <h4 className="text-xs font-bold text-slate-200 group-hover:text-white transition-colors mb-1.5 leading-snug">{p.title}</h4>
                      <p className="text-[11px] text-slate-600 leading-relaxed group-hover:text-slate-500 transition-colors">{p.desc}</p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.section>

            <Divider />


            <motion.section {...fadeUp(0.05)} className="mb-12">
              <SectionLabel>Education</SectionLabel>
              <div className="flex flex-col gap-5">
                {education.map((edu) => (
                  <motion.div key={edu.degree} {...fadeUp(0.05)}
                    className="rounded-xl p-5 border border-white/[0.06] hover:border-white/[0.09] transition-colors"
                    style={{ background: "rgba(11,17,32,0.5)" }}>
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                      <div>
                        <h4 className="text-sm font-bold text-white mb-1">{edu.degree}</h4>
                        <p className="text-xs text-slate-400">{edu.institution}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <div className="text-xs font-semibold text-slate-300">{edu.period}</div>
                        <div className="text-[10px] text-slate-600 mt-0.5 flex items-center gap-1 justify-end"><MapPin size={9} />{edu.location}</div>
                      </div>
                    </div>
                    <ul className="space-y-1.5">
                      {edu.highlights.map(h => (
                        <li key={h} className="flex items-start gap-2 text-xs text-slate-500">
                          <span className="w-1 h-1 rounded-full bg-cyan-500/50 shrink-0 mt-1.5" />{h}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            <Divider />


            <motion.section {...fadeUp(0.05)} className="mb-12">
              <SectionLabel>Certifications</SectionLabel>
              <div className="flex flex-col gap-2.5">
                {certifications.map((cert, i) => (
                  <motion.a key={cert.name} href={cert.link} target="_blank" rel="noopener noreferrer"
                    {...fadeUp(i * 0.05)}
                    className="group flex items-center justify-between gap-4 px-4 py-3 rounded-xl border border-white/[0.05] hover:border-white/[0.1] transition-colors"
                    style={{ background: "rgba(11,17,32,0.4)" }}>
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500/50 shrink-0" />
                      <span className="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors truncate">{cert.name}</span>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      <span className="text-[11px] text-slate-600">{cert.issuer}</span>
                      <span className="text-[10px] text-slate-700">{cert.year}</span>
                      <ExternalLink size={11} className="text-slate-700 group-hover:text-cyan-400 transition-colors" />
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.section>

            <Divider />


            <motion.section {...fadeUp(0.05)} className="mb-12">
              <SectionLabel>GitHub & Open Source</SectionLabel>
              <div className="rounded-2xl border border-white/[0.07] overflow-hidden" style={{ background: "#0b1120" }}>
                <div className="h-px bg-gradient-to-r from-transparent via-slate-500/30 to-transparent" />
                <div className="p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center">
                        <GithubIcon className="w-5 h-5 text-slate-400" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white">github.com/ateeqkhan9891</div>
                        <div className="text-xs text-slate-600">Public repositories & project work</div>
                      </div>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed max-w-sm">
                      AI/ML projects, FastAPI backends, Next.js applications, and data science notebooks.
                      Focus on clean, well-documented code that others can learn from and build on.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["Python", "TypeScript", "FastAPI", "Next.js", "ML"].map(lang => (
                      <span key={lang} className="text-[11px] font-medium px-3 py-1 rounded-full border border-white/[0.08] bg-white/[0.04] text-slate-400">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="px-6 pb-5">
                  <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors">
                    <GitBranch size={14} />View GitHub Profile <ArrowRight size={13} />
                  </a>
                </div>
              </div>
            </motion.section>

            <Divider />


            <motion.section {...fadeUp(0.05)} className="mb-12">
              <SectionLabel>Technology Ecosystem</SectionLabel>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                {Object.entries(techEcosystem).map(([cat, items], i) => (
                  <motion.div key={cat} {...fadeUp(i * 0.05)}
                    className="rounded-xl p-4 border border-white/[0.05]" style={{ background: "rgba(11,17,32,0.5)" }}>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-600 mb-2.5">{cat}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {items.map(item => (
                        <span key={item} className="text-[11px] px-2 py-0.5 rounded bg-white/[0.05] text-slate-300 border border-white/[0.07]">{item}</span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            <Divider />


            <motion.section {...fadeUp(0.05)} className="mb-12">
              <SectionLabel>Languages</SectionLabel>
              <div className="flex flex-col sm:flex-row gap-3">
                {languages.map(lng => (
                  <div key={lng.lang} className="flex-1 rounded-xl p-4 border border-white/[0.06] text-center"
                    style={{ background: "rgba(11,17,32,0.5)" }}>
                    <div className="text-sm font-bold text-white mb-1">{lng.lang}</div>
                    <div className="text-[11px] text-slate-500">{lng.level}</div>
                  </div>
                ))}
              </div>
            </motion.section>

            <Divider />


            <motion.section {...fadeUp(0.05)}>
              <SectionLabel>Interests</SectionLabel>
              <div className="flex flex-wrap gap-2">
                {interests.map(item => (
                  <span key={item} className="text-xs px-3 py-1.5 rounded-full border border-white/[0.07] bg-white/[0.03] text-slate-400">
                    {item}
                  </span>
                ))}
              </div>
            </motion.section>

          </main>
        </div>
      </div>
    </div>
  );
}
