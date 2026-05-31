import type { Metadata } from "next";
import AboutContent from "@/components/sections/AboutContent";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Ateeq Rehman Wazir, an AI Engineer, Data Scientist and Full Stack Developer specializing in AI, machine learning, backend APIs, and business web development.",
  openGraph: {
    title: "About — Ateeq Rehman Wazir",
    description:
      "Learn about Ateeq Rehman Wazir, an AI Engineer and Full Stack Developer specializing in AI, machine learning, and backend development.",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
