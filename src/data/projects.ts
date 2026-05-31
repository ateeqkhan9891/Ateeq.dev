export interface Project {
  slug: string;
  title: string;
  tagline: string;
  category: string[];
  status: "live" | "in-progress" | "completed";
  featured: boolean;
  year: string;
  overview: string;
  problem: string;
  solution: string;
  features: string[];
  tech: string[];
  results: string[];
  lessons: string[];
  /** Main cover image shown in project cards */
  image: string;
  /** Hero screenshot (shown in browser mockup at top of detail page) */
  cover?: string;
  /** Additional screenshots for the gallery grid */
  screenshots?: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    slug: "myamicv-ai",
    title: "MyamiCV AI",
    tagline: "AI-powered resume builder and career intelligence platform",
    category: ["AI / SaaS"],
    status: "in-progress",
    featured: true,
    year: "2024",
    overview:
      "MyamiCV AI is a full-stack SaaS platform that helps job seekers create ATS-optimized resumes, generate cover letters, and track job applications, all powered by AI. The platform includes a subscription billing system, user dashboard, and real-time AI feedback.",
    problem:
      "Most job seekers struggle to create resumes that pass Applicant Tracking Systems (ATS). Generic resume builders lack intelligence. Cover letter generation is time-consuming. Job seekers have no unified tool to manage applications.",
    solution:
      "Built a SaaS platform with Groq/OpenAI for AI analysis, Supabase for auth and database, Stripe for subscription billing, and a clean React dashboard. The AI analyzes resumes against job descriptions, scores ATS compatibility, and generates tailored cover letters.",
    features: [
      "AI resume analysis and ATS score checker", "Drag-and-drop resume builder with live preview", "AI-generated cover letters tailored to job descriptions", "Job application tracker with status management", "Subscription tiers with Stripe billing", "User dashboard with progress analytics",
    ],
    tech: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "OpenAI", "Groq", "Stripe", "Tailwind CSS", "Framer Motion"],
    results: [
      "Full SaaS architecture built from scratch", "AI resume scoring system with actionable feedback", "Complete Stripe billing integration", "Scalable Supabase backend with Row Level Security",
    ],
    lessons: [
      "Learned to integrate multiple AI APIs with fallback strategies", "Built production-grade authentication with Supabase Auth", "Implemented Stripe webhooks for reliable subscription management",
    ],
    image: "/projects/myamicv-ai/cover.png",
    cover: "/projects/myamicv-ai/cover.png",
    screenshots: [
      "/projects/myamicv-ai/screenshot-1.png", "/projects/myamicv-ai/screenshot-2.png", "/projects/myamicv-ai/screenshot-3.png",
    ],
    githubUrl: "https://github.com/ateeqkhan9891",
  },
  {
    slug: "miami-aesthetic-care",
    title: "Miami Aesthetic Care",
    tagline: "Luxury plastic surgery & medical aesthetics website",
    category: ["Web Development", "Healthcare Websites"],
    status: "live",
    featured: true,
    year: "2024",
    overview:
      "A premium healthcare website for a luxury plastic surgery and hair transplant clinic in Miami. Built to convert visitors into booked consultations through professional design, clear procedure pages, and trust-building content.",
    problem:
      "Medical aesthetics businesses often have outdated, slow, or generic websites that fail to build trust with high-value clients. The client needed a website that reflected the premium nature of their services and drove appointment bookings.",
    solution:
      "Built a high-performance Next.js website with luxury medical UI, procedure-specific landing pages, a before/after gallery, and multiple appointment CTAs. Focused on SEO for local medical keywords.",
    features: [
      "Premium medical website design", "Individual procedure landing pages", "Before & after gallery section", "WhatsApp and phone appointment CTAs", "SEO-optimized content for Miami medical keywords", "Mobile-first fully responsive layout",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "SEO", "Vercel"],
    results: [
      "High-converting appointment-focused landing pages", "Lighthouse performance score above 90", "Local SEO targeting Miami plastic surgery keywords", "Professional medical brand identity online",
    ],
    lessons: [
      "Medical websites require trust-first design decisions", "Performance optimization is critical for healthcare SEO", "WhatsApp CTAs significantly improve conversion in medical niches",
    ],
    image: "/projects/miami-aesthetic-care/cover.png",
    cover: "/projects/miami-aesthetic-care/cover.png",
    screenshots: [
      "/projects/miami-aesthetic-care/screenshot-1.png", "/projects/miami-aesthetic-care/screenshot-2.png", "/projects/miami-aesthetic-care/screenshot-3.png",
    ],
    liveUrl: "#",
  },
  {
    slug: "dr-zulqarnain",
    title: "Dr Zulqarnain Plastic Surgery",
    tagline: "Premium hair transplant & plastic surgery brand website",
    category: ["Web Development", "Healthcare Websites"],
    status: "live",
    featured: true,
    year: "2024",
    overview:
      "A premium plastic surgery and hair transplant website for Dr Zulqarnain, a specialist surgeon. Designed to establish a luxury medical brand identity and convert website visitors into booked procedures.",
    problem:
      "The surgeon had no professional online presence. Potential patients searching for hair transplants or plastic surgery could not find them online. The brand needed to communicate expertise, trust, and premium service quality.",
    solution:
      "Designed a luxury dark medical website with procedure pages, a before/after gallery, and a clear patient journey. Implemented animated UI elements, structured data for SEO, and WhatsApp contact integration.",
    features: [
      "Luxury medical UI with dark premium design", "Hair transplant dedicated landing page", "Plastic surgery procedure pages with dropdowns", "Before & after results gallery", "WhatsApp CTA integration", "Framer Motion animated sections",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "SEO"],
    results: [
      "Professional medical brand website launched", "Procedure pages driving organic search visibility", "Patient inquiry system via WhatsApp", "Luxury brand identity established online",
    ],
    lessons: [
      "Luxury medical brands need dark, premium design over bright clinical feels", "Procedure-specific pages outperform generic service pages in SEO", "Clear patient journey mapping improves consultation conversion",
    ],
    image: "/projects/dr-zulqarnain/cover.png",
    cover: "/projects/dr-zulqarnain/cover.png",
    screenshots: [
      "/projects/dr-zulqarnain/screenshot-1.png", "/projects/dr-zulqarnain/screenshot-2.png", "/projects/dr-zulqarnain/screenshot-3.png",
    ],
    liveUrl: "#",
  },
  {
    slug: "sales-data-dashboard",
    title: "Sales Data Dashboard",
    tagline: "Business intelligence dashboard for sales analytics",
    category: ["Data Science"],
    status: "completed",
    featured: false,
    year: "2023",
    overview:
      "A data analysis and visualization dashboard for business sales data. Provides KPI tracking, trend analysis, and business reporting through interactive charts and clean visual summaries.",
    problem:
      "Business stakeholders needed a clear view of sales performance across regions and time periods. Raw data in spreadsheets made it impossible to spot trends or make data-driven decisions quickly.",
    solution:
      "Built a dashboard using Python for data processing and Power BI / Streamlit for interactive visualization. Automated data cleaning and built KPI cards, trend charts, and comparative regional analysis.",
    features: [
      "Interactive KPI cards with period comparisons", "Sales trends by month, region, and product", "Revenue vs target analysis", "Data cleaning and preprocessing pipeline", "Export-ready reporting visuals",
    ],
    tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Power BI", "Streamlit"],
    results: [
      "Reduced manual reporting time by 80%", "Clear visual identification of top-performing regions", "Data-driven decision support for stakeholders",
    ],
    lessons: [
      "Data cleaning is 70% of the work in real business data projects", "Stakeholder-friendly visuals matter more than technical complexity",
    ],
    image: "/projects/sales-data-dashboard/cover.png",
    cover: "/projects/sales-data-dashboard/cover.png",
    screenshots: [
      "/projects/sales-data-dashboard/screenshot-1.png", "/projects/sales-data-dashboard/screenshot-2.png",
    ],
    githubUrl: "https://github.com/ateeqkhan9891",
  },
  {
    slug: "house-price-prediction",
    title: "House Price Prediction",
    tagline: "Machine learning regression model for real estate pricing",
    category: ["Machine Learning", "Data Science"],
    status: "completed",
    featured: false,
    year: "2023",
    overview:
      "A supervised machine learning project that predicts house prices based on property features like location, size, age, and amenities. Includes full data analysis, feature engineering, model training, and evaluation.",
    problem:
      "Real estate pricing is complex and subjective. Buyers and sellers need objective, data-driven price estimates based on comparable property features.",
    solution:
      "Applied regression techniques including Linear Regression, Random Forest, and XGBoost on a housing dataset. Conducted EDA, handled missing values, engineered features, and selected the best model based on RMSE and R² scores.",
    features: [
      "Exploratory Data Analysis (EDA) with visualizations", "Feature engineering and selection", "Multiple regression model comparison", "Hyperparameter tuning", "Model evaluation with RMSE, MAE, R²", "Prediction interface",
    ],
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "XGBoost", "Matplotlib", "Seaborn"],
    results: [
      "Best model achieved R² score of 0.89", "Outperformed baseline by 34%", "Clean reproducible ML pipeline",
    ],
    lessons: [
      "Feature engineering has more impact than model selection", "Cross-validation prevents overfitting in regression tasks",
    ],
    image: "/projects/house-price-prediction/cover.png",
    cover: "/projects/house-price-prediction/cover.png",
    screenshots: [
      "/projects/house-price-prediction/screenshot-1.png", "/projects/house-price-prediction/screenshot-2.png",
    ],
    githubUrl: "https://github.com/ateeqkhan9891",
  },
  {
    slug: "spam-email-classifier",
    title: "Spam Email Classifier",
    tagline: "NLP-powered email classification with high accuracy",
    category: ["Machine Learning", "AI / SaaS"],
    status: "completed",
    featured: false,
    year: "2023",
    overview:
      "An NLP machine learning project that classifies emails as spam or not spam using text preprocessing and classification algorithms. Trained on the Enron email dataset with multiple model comparisons.",
    problem:
      "Email spam is a persistent problem that wastes time and reduces productivity. Manual filtering is inefficient. Organizations need automated, accurate classification systems.",
    solution:
      "Built a text classification pipeline with tokenization, stopword removal, TF-IDF vectorization, and multiple classifier comparison. Achieved high accuracy with Naive Bayes and SVM models.",
    features: [
      "Text preprocessing pipeline (tokenization, stopwords, stemming)", "TF-IDF feature extraction", "Multiple classifier comparison (NB, SVM, Logistic Regression)", "Confusion matrix and classification report", "Accuracy, precision, recall, F1 evaluation",
    ],
    tech: ["Python", "Scikit-learn", "NLTK", "Pandas", "NumPy", "Matplotlib"],
    results: [
      "Achieved 97.8% accuracy with SVM classifier", "Low false positive rate (legitimate emails kept safe)", "Reusable text classification pipeline",
    ],
    lessons: [
      "NLP preprocessing quality directly impacts classification accuracy", "SVM outperforms Naive Bayes on larger text datasets",
    ],
    image: "/projects/spam-email-classifier/cover.png",
    cover: "/projects/spam-email-classifier/cover.png",
    screenshots: [
      "/projects/spam-email-classifier/screenshot-1.png", "/projects/spam-email-classifier/screenshot-2.png",
    ],
    githubUrl: "https://github.com/ateeqkhan9891",
  },
  {
    slug: "fastapi-backend",
    title: "FastAPI Backend System",
    tagline: "Production-ready REST API with auth, CRUD, and documentation",
    category: ["Backend APIs"],
    status: "completed",
    featured: false,
    year: "2023",
    overview:
      "A backend API system built with FastAPI, featuring JWT authentication, full CRUD operations, PostgreSQL database integration, and auto-generated API documentation. Designed to serve as a production-ready backend for web applications.",
    problem:
      "Modern web applications need fast, reliable, and well-documented backend APIs. Building these from scratch without a solid architecture leads to maintainability issues.",
    solution:
      "Built a structured FastAPI application with SQLAlchemy ORM, Pydantic schema validation, JWT authentication, and organized router structure. Includes automated tests and Docker configuration.",
    features: [
      "JWT authentication with refresh tokens", "Full CRUD REST API endpoints", "PostgreSQL with SQLAlchemy ORM", "Pydantic input/output validation", "Auto-generated Swagger API documentation", "Docker containerization",
    ],
    tech: ["FastAPI", "Python", "PostgreSQL", "SQLAlchemy", "Pydantic", "JWT", "Docker", "Alembic"],
    results: [
      "Sub-50ms average API response time", "100% endpoint test coverage", "Production-ready with Docker deployment",
    ],
    lessons: [
      "FastAPI's type system makes API development significantly faster", "Database migration management with Alembic is essential for production",
    ],
    image: "/projects/fastapi-backend/cover.png",
    cover: "/projects/fastapi-backend/cover.png",
    screenshots: [
      "/projects/fastapi-backend/screenshot-1.png", "/projects/fastapi-backend/screenshot-2.png",
    ],
    githubUrl: "https://github.com/ateeqkhan9891",
  },
  {
    slug: "wordpress-websites",
    title: "WordPress Business Websites",
    tagline: "Business websites and CMS solutions for small businesses",
    category: ["WordPress / CMS"],
    status: "completed",
    featured: false,
    year: "2022",
    overview:
      "A series of business websites built with WordPress for small businesses and service providers. Includes custom theme configuration, contact forms, SEO basics, and CMS training for clients.",
    problem:
      "Small businesses needed professional online presence without large development budgets. They also needed to manage their own content after launch.",
    solution:
      "Delivered multiple WordPress websites with custom themes, Elementor page builder, WooCommerce where needed, contact forms, and basic SEO setup. Trained clients on content management.",
    features: [
      "Custom WordPress theme setup", "Elementor page builder", "Contact and inquiry forms", "Basic on-page SEO", "Mobile-responsive layouts", "Client CMS training",
    ],
    tech: ["WordPress", "PHP", "Elementor", "WooCommerce", "cPanel", "SEO"],
    results: [
      "5+ business websites delivered", "Clients able to manage own content post-launch", "Improved local search visibility for clients",
    ],
    lessons: [
      "WordPress is excellent for budget-conscious clients needing content control", "Proper theme selection saves hours of customization",
    ],
    image: "/projects/wordpress-websites/cover.png",
    cover: "/projects/wordpress-websites/cover.png",
    screenshots: [
      "/projects/wordpress-websites/screenshot-1.png", "/projects/wordpress-websites/screenshot-2.png",
    ],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const getCategoryProjects = (category: string) =>
  projects.filter((p) => p.category.includes(category));
export const getProjectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug);
