"use client";

import { motion } from "framer-motion";

const GROUPS = [
  {
    label: "Data Science",
    color: "#3b82f6",
    skills: [
      { name: "Python",      note: "Primary language"  },
      { name: "Pandas",      note: "Data manipulation" },
      { name: "NumPy",       note: "Numerical ops"     },
      { name: "Matplotlib",  note: "Visualization"     },
      { name: "Seaborn",     note: "Statistical plots" },
      { name: "Jupyter",     note: "Notebooks"         },
    ],
  },
  {
    label: "AI / Machine Learning",
    color: "#8b5cf6",
    skills: [
      { name: "Scikit-learn", note: "Classical ML"     },
      { name: "PyTorch",      note: "Deep learning"    },
      { name: "XGBoost",      note: "Gradient boosting"},
      { name: "NLTK",         note: "NLP"              },
      { name: "OpenAI API",   note: "LLM integration"  },
      { name: "Groq",         note: "Fast inference"   },
    ],
  },
  {
    label: "Frontend",
    color: "#06b6d4",
    skills: [
      { name: "Next.js",      note: "App Router"       },
      { name: "React",        note: "Component model"  },
      { name: "TypeScript",   note: "Type safety"      },
      { name: "Tailwind CSS", note: "Utility-first"    },
      { name: "Framer Motion",note: "Animations"       },
    ],
  },
  {
    label: "Backend",
    color: "#22c55e",
    skills: [
      { name: "FastAPI",      note: "REST APIs"        },
      { name: "Node.js",      note: "JS runtime"       },
      { name: "PostgreSQL",   note: "Relational DB"    },
      { name: "Supabase",     note: "BaaS"             },
      { name: "SQLAlchemy",   note: "ORM"              },
      { name: "Pydantic",     note: "Validation"       },
    ],
  },
  {
    label: "Tools & DevOps",
    color: "#f97316",
    skills: [
      { name: "Git",          note: "Version control"  },
      { name: "GitHub",       note: "Collaboration"    },
      { name: "Vercel",       note: "Deployment"       },
      { name: "Docker",       note: "Containers"       },
      { name: "Postman",      note: "API testing"      },
      { name: "VS Code",      note: "Editor"           },
    ],
  },
  {
    label: "SEO & Performance",
    color: "#e879f9",
    skills: [
      { name: "Technical SEO",    note: "Audit & fixes"    },
      { name: "Metadata & OG",    note: "Social previews"  },
      { name: "Schema Markup",    note: "JSON-LD"          },
      { name: "Core Web Vitals",  note: "Lighthouse"       },
      { name: "Sitemap / robots", note: "Crawlability"     },
    ],
  },
];

export default function TechStack() {
  return (
    <section className="section border-t border-white/[0.05]">
      <div className="wrap">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14"
        >
          <div>
            <span className="eyebrow mb-3 block">Tech Stack</span>
            <h2
              className="font-bold text-white tracking-tight"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", letterSpacing: "-0.025em" }}
            >
              Tools I Work With
            </h2>
          </div>
          <p className="text-slate-500 text-sm max-w-xs text-right hidden sm:block">
            Production-grade tools used across real projects.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {GROUPS.map((g, gi) => (
            <motion.div
              key={g.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: gi * 0.07 }}
              className="rounded-2xl border border-white/[0.06] hover:border-white/[0.1] bg-[#0b1120] p-6 transition-colors duration-300"
            >
              {/* Group header */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ background: g.color, boxShadow: `0 0 8px ${g.color}60` }}
                />
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                  {g.label}
                </span>
              </div>

              {/* Skills list */}
              <div className="space-y-2.5">
                {g.skills.map((sk, si) => (
                  <motion.div
                    key={sk.name}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: gi * 0.06 + si * 0.04 }}
                    className="flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-2.5">
                      <div
                        className="w-1 h-1 rounded-full shrink-0"
                        style={{ background: g.color }}
                      />
                      <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                        {sk.name}
                      </span>
                    </div>
                    <span className="text-xs text-slate-700 group-hover:text-slate-500 transition-colors">
                      {sk.note}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
