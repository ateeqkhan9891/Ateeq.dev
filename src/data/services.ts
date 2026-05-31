export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
  category: string;
}

export const services: Service[] = [
  {
    id: "ai-saas",
    title: "AI SaaS Development",
    description:
      "End-to-end development of AI-powered SaaS applications. From authentication and billing to AI integrations and user dashboards.",
    features: [
      "Next.js + TypeScript frontend", "Supabase or PostgreSQL backend", "OpenAI / Groq AI integration", "Stripe subscription billing", "User dashboard and admin panel",
    ],
    icon: "bot",
    category: "AI & Development",
  },
  {
    id: "data-dashboards",
    title: "Data Analysis Dashboards",
    description:
      "Transform raw business data into clear, interactive dashboards that help you make faster decisions.",
    features: [
      "Python data pipeline", "KPI cards and trend analysis", "Interactive charts and reports", "Power BI or Streamlit delivery", "Business-ready visual storytelling",
    ],
    icon: "bar-chart-3",
    category: "Data Science",
  },
  {
    id: "ml-models",
    title: "Machine Learning Models",
    description:
      "Custom ML models for prediction, classification, and intelligent automation tailored to your business problem.",
    features: [
      "Data cleaning and EDA", "Feature engineering", "Model training and evaluation", "Scikit-learn, XGBoost, PyTorch", "Model deployment and API wrapping",
    ],
    icon: "cpu",
    category: "AI & Development",
  },
  {
    id: "backend-apis",
    title: "Backend API Development",
    description:
      "Scalable, secure REST APIs built with FastAPI or Node.js, designed to power web apps, mobile apps, and integrations.",
    features: [
      "FastAPI or Express.js", "PostgreSQL or Supabase", "JWT authentication", "CRUD + business logic", "Auto-generated API documentation",
    ],
    icon: "server",
    category: "Backend",
  },
  {
    id: "business-websites",
    title: "Business Website Development",
    description:
      "High-converting business websites that look professional, load fast, and help you get more clients.",
    features: [
      "Next.js + Tailwind CSS", "SEO-optimized structure", "Mobile-first responsive design", "Contact form integration", "Vercel deployment",
    ],
    icon: "globe",
    category: "Web Development",
  },
  {
    id: "healthcare-websites",
    title: "Healthcare Website Development",
    description:
      "Premium websites for medical practices, clinics, and healthcare professionals designed to build trust and drive patient inquiries.",
    features: [
      "Luxury medical UI design", "Procedure landing pages", "Before & after galleries", "WhatsApp and phone CTAs", "HIPAA-conscious design practices",
    ],
    icon: "heart-pulse",
    category: "Web Development",
  },
  {
    id: "wp-migration",
    title: "WordPress to Next.js Migration",
    description:
      "Migrate your outdated WordPress site to a fast, modern Next.js application with improved performance and SEO.",
    features: [
      "Content migration", "Design modernization", "Performance optimization", "SEO preservation", "Vercel deployment",
    ],
    icon: "repeat",
    category: "Web Development",
  },
  {
    id: "seo-performance",
    title: "SEO & Performance Optimization",
    description:
      "Audit and optimize your website for search engines and Core Web Vitals to improve rankings and user experience.",
    features: [
      "Technical SEO audit", "Metadata and schema markup", "Core Web Vitals optimization", "Sitemap and robots.txt", "Lighthouse score improvement",
    ],
    icon: "zap",
    category: "Growth",
  },
];
