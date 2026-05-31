import type { Metadata } from "next";
import ServicesContent from "@/components/sections/ServicesContent";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Services offered by Ateeq Rehman Wazir — AI SaaS development, data analysis dashboards, ML models, backend APIs, business websites, and SEO.",
  openGraph: {
    title: "Services — Ateeq Rehman Wazir",
    description:
      "AI SaaS development, data dashboards, ML models, backend APIs, and business websites by Ateeq Rehman Wazir.",
  },
};

export default function ServicesPage() {
  return <ServicesContent />;
}
