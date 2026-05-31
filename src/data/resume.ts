

export const personalInfo = {
  name:         "Ateeq Rehman Wazir",
  title:        "AI Engineer & Full Stack Developer",
  headline:     "Building AI-powered products, data systems, and scalable web applications",
  location:     "Islamabad, Pakistan (Remote)",
  email:        "ateeqrehmankhan0346@gmail.com",
  github:       "https://github.com/ateeqkhan9891",
  linkedin:     "https://www.linkedin.com/in/ateeq-rehman-a7698b26b/",
  whatsapp:     "https://wa.me/923367070686",
  phone:        "+92 336 7070686",
  availability: "Open to Work",
};

export const summary = {
  headline: "AI Engineer, Data Scientist & Full Stack Developer",
  paragraphs: [
    "I design and ship AI-powered products end-to-end. From training ML models and engineering FastAPI backends to building production Next.js applications and data intelligence systems — I work across the full stack with a business-first mindset. My work includes a full SaaS platform with AI resume analysis and Stripe billing (MyamiCV AI), premium healthcare websites for medical professionals that drive real patient inquiries, production REST APIs, and ML models deployed on real-world data.",
    "I don't build demos. I build products that work, scale, and create measurable outcomes for clients and users.",
  ],
};

export const careerSnapshot = [
  { value: "15+",  label: "Products Shipped",  sub: "AI, SaaS & web"     },
  { value: "3+",   label: "Live Client Sites",  sub: "Healthcare & biz"   },
  { value: "2+",   label: "Years Delivering",   sub: "Production software" },
  { value: "SaaS", label: "Built from Scratch", sub: "MyamiCV AI"          },
];

export const skills = [
  {
    category: "AI & Machine Learning",
    color: "#8b5cf6",
    items: ["PyTorch", "Scikit-learn", "XGBoost", "OpenAI API", "Groq", "NLTK", "Hugging Face", "RAG Systems", "LLM Integration"],
  },
  {
    category: "Data Science",
    color: "#3b82f6",
    items: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "EDA", "Feature Engineering", "Power BI", "Streamlit"],
  },
  {
    category: "Frontend",
    color: "#06b6d4",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Backend & APIs",
    color: "#10b981",
    items: ["FastAPI", "Node.js", "PostgreSQL", "Supabase", "SQLAlchemy", "JWT", "Stripe API", "Docker", "Alembic"],
  },
  {
    category: "Tools & Infrastructure",
    color: "#f59e0b",
    items: ["Git", "GitHub", "Vercel", "Render", "Postman", "VS Code", "Jupyter", "Figma"],
  },
];

export const featuredProjectsResume = [
  {
    name:      "MyamiCV AI",
    type:      "AI SaaS Platform",
    year:      "2024",
    status:    "In Progress",
    isFlagship: true,
    challenge: "Job seekers waste hours on resumes that fail ATS filters — with no intelligent feedback on why.",
    solution:  "Built a full SaaS platform with AI-powered resume analysis, real-time ATS scoring, tailored cover letter generation, and a job application tracker. Integrated OpenAI/Groq for AI pipeline, Supabase for auth and database, and Stripe for subscription billing.",
    tech:      ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "OpenAI", "Groq", "Stripe", "Tailwind CSS"],
    outcome:   "Complete SaaS architecture from scratch: AI pipeline, billing, auth, user dashboard, and subscription management.",
    link:      "/projects/myamicv-ai",
  },
  {
    name:      "Miami Aesthetic Care",
    type:      "Healthcare Website",
    year:      "2024",
    status:    "Live",
    isFlagship: true,
    challenge: "A premium plastic surgery clinic had no professional online presence that reflected their luxury positioning or drove patient inquiries.",
    solution:  "Built a high-performance Next.js site with individual procedure pages, before/after gallery, WhatsApp appointment CTAs, and technical SEO targeting Miami medical keywords.",
    tech:      ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "SEO", "Vercel"],
    outcome:   "90+ Lighthouse score. Live site generating WhatsApp inquiries from Google organic search within weeks of launch.",
    link:      "/projects/miami-aesthetic-care",
  },
  {
    name:      "Dr Zulqarnain Surgery",
    type:      "Medical Brand Website",
    year:      "2024",
    status:    "Live",
    isFlagship: true,
    challenge: "A specialist plastic surgeon and hair transplant expert had zero online presence and was losing patients to competitors.",
    solution:  "Designed a luxury dark-themed medical brand website with procedure landing pages, patient gallery, WhatsApp CTA, and structured SEO data.",
    tech:      ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Schema.org"],
    outcome:   "Premium medical brand established online. Procedure pages indexed and ranking for local hair transplant searches.",
    link:      "/projects/dr-zulqarnain",
  },
  {
    name:      "Sales Data Dashboard",
    type:      "Data Science",
    year:      "2023",
    status:    "Completed",
    isFlagship: false,
    challenge: "Business stakeholders spending hours per week on manual Excel reporting.",
    solution:  "Python data pipeline + Power BI interactive dashboard with KPI cards, trend charts, and regional comparisons.",
    tech:      ["Python", "Pandas", "Power BI", "Streamlit"],
    outcome:   "80% reduction in manual reporting time. Daily automated insights delivered to decision-makers.",
    link:      "/projects/sales-data-dashboard",
  },
  {
    name:      "House Price Prediction",
    type:      "Machine Learning",
    year:      "2023",
    status:    "Completed",
    isFlagship: false,
    challenge: "Real estate pricing is subjective. Buyers and sellers need objective, data-driven estimates.",
    solution:  "Regression pipeline with feature engineering, EDA, and model comparison across Linear Regression, Random Forest, and XGBoost.",
    tech:      ["Python", "Scikit-learn", "XGBoost", "Pandas", "Matplotlib"],
    outcome:   "R² score of 0.89 on held-out test data. Clean reproducible ML pipeline with documented methodology.",
    link:      "/projects/house-price-prediction",
  },
  {
    name:      "FastAPI Backend System",
    type:      "Backend API",
    year:      "2023",
    status:    "Completed",
    isFlagship: false,
    challenge: "Modern web apps need fast, well-documented APIs that teams can actually use without back-and-forth.",
    solution:  "Structured FastAPI application with SQLAlchemy ORM, JWT auth, auto-generated Swagger docs, and Docker deployment.",
    tech:      ["FastAPI", "PostgreSQL", "SQLAlchemy", "Docker", "JWT", "Pydantic"],
    outcome:   "Sub-50ms average response time. 100% endpoint coverage. Production-ready with Docker Compose.",
    link:      "/projects/fastapi-backend",
  },
];

export const experience = [
  {
    role:     "AI & Full Stack Engineer",
    company:  "Freelance / Independent",
    type:     "Freelance",
    period:   "2022 — Present",
    duration: "2+ years",
    location: "Remote",
    description:
      "End-to-end product engineering across AI, data science, and web domains. I take projects from brief to deployment — owning architecture, implementation, and delivery.",
    responsibilities: [
      "Designed and shipped MyamiCV AI: a production SaaS platform with AI resume analysis, ATS scoring, Stripe billing, and Supabase backend",
      "Built premium healthcare websites for plastic surgery clinics generating measurable patient inquiries through organic search",
      "Engineered production FastAPI backends with sub-50ms response time, PostgreSQL, JWT auth, and Swagger documentation",
      "Delivered business intelligence dashboards in Python and Power BI, reducing manual reporting time by 80%",
      "Trained and evaluated ML models achieving R² 0.89 on regression and 97.8% accuracy on NLP classification tasks",
    ],
    tech: ["Next.js", "FastAPI", "Python", "Supabase", "PostgreSQL", "OpenAI", "Stripe", "TypeScript"],
  },
];

export const education = [
  {
    degree:      "BS Data Science",
    institution: "IMSciences University",
    location:    "Peshawar, Pakistan",
    period:      "2020 — 2024",
    highlights: [
      "Core focus on machine learning, statistical analysis, and software engineering",
      "Applied projects in real-world ML model development and data pipeline engineering",
      "Complemented academic learning with production-level self-directed development",
    ],
  },
  {
    degree:      "FSc Pre-Medical",
    institution: "ICMS College",
    location:    "Pakistan",
    period:      "2018 — 2020",
    highlights: [
      "Pre-Medical stream: Biology, Chemistry, Physics",
    ],
  },
];

export const certifications = [
  { name: "Machine Learning Specialization", issuer: "DeepLearning.AI",  year: "2023", link: "#" },
  { name: "Python for Data Science & AI",    issuer: "IBM / Coursera",   year: "2023", link: "#" },
  { name: "FastAPI — The Complete Course",   issuer: "Udemy",            year: "2023", link: "#" },
];

export const currentlyBuilding = [
  {
    name:    "MyamiCV AI",
    tag:     "SaaS",
    status:  "Active",
    color:   "#8b5cf6",
    desc:    "AI resume builder SaaS with ATS scoring, cover letter generation, and Stripe billing.",
  },
  {
    name:    "AI Integration Stack",
    tag:     "Research",
    status:  "Exploring",
    color:   "#06b6d4",
    desc:    "LangChain, vector databases, and RAG systems for production AI applications.",
  },
  {
    name:    "Healthcare Digital Platforms",
    tag:     "Client",
    status:  "Ongoing",
    color:   "#10b981",
    desc:    "Premium websites for medical professionals focused on SEO and conversion.",
  },
];

export const engineeringPrinciples = [
  { n: "01", title: "Build for real users",        desc: "Every feature traces back to a user outcome. Not a demo, not a portfolio piece." },
  { n: "02", title: "Ship, measure, improve",      desc: "Working software beats perfect plans. Early shipping creates early feedback." },
  { n: "03", title: "Data-driven decisions",       desc: "Intuition is a starting point. Evidence is what shapes direction." },
  { n: "04", title: "Clean, extensible code",      desc: "TypeScript, proper abstractions, clear structure. Code you hand over should be code someone can build on." },
  { n: "05", title: "Performance by design",       desc: "Speed is a feature. It gets engineered in, not bolted on at the end." },
  { n: "06", title: "Security as a baseline",      desc: "Auth, input validation, least privilege. Security is not optional infrastructure." },
];

export const currentFocus = [
  { label: "Building",      value: "MyamiCV AI — AI SaaS platform" },
  { label: "Learning",      value: "LangChain, vector databases, RAG" },
  { label: "Exploring",     value: "AI agents, multi-model pipelines" },
  { label: "Available for", value: "Freelance, contracts, SaaS builds" },
];

export const techEcosystem: Record<string, string[]> = {
  Languages:      ["Python", "TypeScript", "JavaScript", "SQL", "HTML", "CSS"],
  Frameworks:     ["Next.js", "React", "FastAPI", "Tailwind CSS", "Framer Motion"],
  "AI & ML":      ["PyTorch", "Scikit-learn", "XGBoost", "Pandas", "NumPy", "OpenAI", "Groq"],
  Databases:      ["PostgreSQL", "Supabase", "MySQL", "SQLite"],
  Infrastructure: ["Docker", "Vercel", "Render", "Git", "GitHub"],
  "Dev Tools":    ["VS Code", "Postman", "Jupyter", "Figma"],
};

export const languages = [
  { lang: "English", level: "Professional Working Proficiency" },
  { lang: "Urdu",    level: "Native"                           },
  { lang: "Pashto",  level: "Native"                           },
];

export const interests = [
  "Artificial Intelligence & LLMs",
  "SaaS Product Development",
  "Data Science & Analytics",
  "Software Architecture",
  "Healthcare Technology",
  "Open Source",
];

export const services = [
  "AI SaaS Development",
  "Machine Learning Models",
  "Data Analysis Dashboards",
  "Backend API Development",
  "Full Stack Web Applications",
  "Healthcare Website Development",
];
