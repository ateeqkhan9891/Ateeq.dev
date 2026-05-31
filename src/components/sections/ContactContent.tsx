"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MessageCircle,
  Clock,
  Send,
  CheckCircle2,
} from "lucide-react";
import Image from "next/image";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { IMAGES, ALT } from "@/lib/images";

const projectTypes = [
  "AI SaaS Development", "Data Analysis Dashboard", "Machine Learning Model", "Backend API Development", "Business Website", "Healthcare Website", "WordPress to Next.js", "SEO & Performance", "Other",
];

const budgetRanges = [
  "Under $500", "$500 – $1,500", "$1,500 – $5,000", "$5,000+", "Let's discuss",
];

export default function ContactContent() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [form, setForm] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({
          name: "",
          email: "",
          projectType: "",
          budget: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="pt-32 pb-24">
      <div className="wrap">

        <div className="mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-3 block">
            Contact
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let&apos;s Work Together
          </h1>
          <p className="text-slate-400 text-lg max-w-xl">
            Have a project in mind? I&apos;d love to hear about it. Send me a message
            and I&apos;ll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            {status === "sent" ? (
              <div className="glass rounded-2xl p-10 text-center h-full flex flex-col items-center justify-center min-h-[400px]">
                <CheckCircle2 size={40} className="text-cyan-400 mb-4" />
                <h2 className="text-xl font-bold text-white mb-2">
                  Message Sent!
                </h2>
                <p className="text-slate-400 text-sm">
                  Thanks for reaching out. I&apos;ll reply within 24 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="glass rounded-2xl p-8 space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-lg bg-white/[0.04] border border-white/[0.08] text-white placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-500/50 focus:bg-white/[0.06] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-lg bg-white/[0.04] border border-white/[0.08] text-white placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-500/50 focus:bg-white/[0.06] transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-2">
                      Project Type
                    </label>
                    <select
                      name="projectType"
                      value={form.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/[0.04] border border-white/[0.08] text-slate-300 text-sm focus:outline-none focus:border-cyan-500/50 transition-all appearance-none"
                    >
                      <option value="" className="bg-slate-900">
                        Select type...
                      </option>
                      {projectTypes.map((t) => (
                        <option key={t} value={t} className="bg-slate-900">
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-2">
                      Budget Range
                    </label>
                    <select
                      name="budget"
                      value={form.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/[0.04] border border-white/[0.08] text-slate-300 text-sm focus:outline-none focus:border-cyan-500/50 transition-all appearance-none"
                    >
                      <option value="" className="bg-slate-900">
                        Select budget...
                      </option>
                      {budgetRanges.map((b) => (
                        <option key={b} value={b} className="bg-slate-900">
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project, what you're building, what problem you're solving, and what you need help with..."
                    className="w-full px-4 py-3 rounded-lg bg-white/[0.04] border border-white/[0.08] text-white placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-500/50 focus:bg-white/[0.06] transition-all resize-none"
                  />
                </div>

                {status === "error" && (
                  <p className="text-red-400 text-sm">
                    Something went wrong. Try emailing directly at
                    ateeqrehmankhan0346@gmail.com
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 disabled:opacity-60 disabled:cursor-not-allowed text-slate-900 font-semibold text-sm transition-all"
                >
                  <Send size={15} />
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </motion.div>


          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2 space-y-5"
          >

            <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] aspect-[4/3]"
              style={{ background: "#070c18" }}>
              <Image
                src={IMAGES.profile.contact}
                alt={ALT.contact}
                fill
                sizes="(max-width:768px) 100vw, 420px"
                className="object-cover object-center"
              />

              <div className="absolute bottom-0 inset-x-0 h-20 pointer-events-none"
                style={{ background: "linear-gradient(to top, #060912 0%, transparent 100%)" }} />

              <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/25 bg-[#060912]/80 backdrop-blur-sm text-[11px] font-semibold text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                Available for new projects
              </div>
            </div>


            <div className="glass rounded-xl p-6 space-y-4">
              <h3 className="text-sm font-semibold text-white mb-4">
                Direct Contact
              </h3>
              <ContactRow
                icon={<Mail size={15} />}
                label="Email"
                value="ateeqrehmankhan0346@gmail.com"
                href="mailto:ateeqrehmankhan0346@gmail.com"
              />
              <ContactRow
                icon={<GithubIcon width={15} height={15} />}
                label="GitHub"
                value="github.com/ateeqkhan9891"
                href="https://github.com/ateeqkhan9891"
              />
              <ContactRow
                icon={<LinkedinIcon width={15} height={15} />}
                label="LinkedIn"
                value="Ateeq Rehman Wazir"
                href="https://www.linkedin.com/in/ateeq-rehman-a7698b26b/"
              />
              <ContactRow
                icon={<MessageCircle size={15} />}
                label="WhatsApp"
                value="+92 336 7070686"
                href="https://wa.me/923367070686"
              />
            </div>


            <div className="glass rounded-xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm font-semibold text-white">
                  Available
                </span>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed">
                I&apos;m currently open to new freelance projects, short-term
                contracts, and collaborations. I aim to respond within 24 hours.
              </p>
            </div>


            <div className="glass rounded-xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <Clock size={15} className="text-cyan-400" />
                <span className="text-sm font-semibold text-white">
                  Response Time
                </span>
              </div>
              <p className="text-sm text-slate-500">
                Usually within{" "}
                <span className="text-cyan-400">24 hours</span>. For urgent
                work, WhatsApp is fastest.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-start gap-3 group"
    >
      <div className="text-slate-500 group-hover:text-cyan-400 transition-colors mt-0.5">
        {icon}
      </div>
      <div>
        <div className="text-xs text-slate-600 mb-0.5">{label}</div>
        <div className="text-sm text-slate-400 group-hover:text-cyan-400 transition-colors break-all">
          {value}
        </div>
      </div>
    </a>
  );
}
