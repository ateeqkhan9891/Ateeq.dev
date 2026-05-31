import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmartFeedbackTrigger from "@/components/reviews/SmartTrigger";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://ateeqrehman.dev"),
  title: {
    default: "Ateeq Rehman Wazir | AI Engineer & Full Stack Developer",
    template: "%s | Ateeq Rehman Wazir",
  },
  description:
    "Portfolio of Ateeq Rehman Wazir, an AI Engineer, Data Scientist and Full Stack Developer building AI-powered web apps, machine learning projects, backend APIs, and high-converting business websites.",
  keywords: [
    "AI Engineer", "Data Scientist", "Full Stack Developer", "AI Developer", "Machine Learning", "Next.js Developer", "FastAPI", "Python", "Ateeq Rehman Wazir",
  ],
  authors: [{ name: "Ateeq Rehman Wazir" }],
  creator: "Ateeq Rehman Wazir",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/favicon.svg",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ateeqrehman.dev",
    title: "Ateeq Rehman Wazir | AI Engineer & Full Stack Developer",
    description:
      "Building AI-powered web apps, ML models, backend APIs, and high-converting business websites.",
    siteName: "Ateeq Rehman Wazir",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ateeq Rehman Wazir | AI Engineer & Full Stack Developer",
    description:
      "Building AI-powered web apps, ML models, backend APIs, and high-converting business websites.",
    creator: "@ateeqrehman",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org", "@type": "Person",
    name: "Ateeq Rehman Wazir",
    jobTitle: "Data Scientist & Full Stack Developer",
    url: "https://ateeqrehman.dev",
    sameAs: [
      "https://www.linkedin.com/in/ateeq-rehman-a7698b26b/", "https://github.com/ateeqkhan9891",
    ],
    knowsAbout: [
      "Data Science", "Machine Learning", "Next.js", "FastAPI", "Python", "AI Development",
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.className} text-slate-100 antialiased`}
        style={{ background: "#060912" }}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
        <SmartFeedbackTrigger />
      </body>
    </html>
  );
}
