import type { Metadata } from "next";
import ContactContent from "@/components/sections/ContactContent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Ateeq Rehman Wazir for AI development, data science projects, backend APIs, or business website development.",
  openGraph: {
    title: "Contact — Ateeq Rehman Wazir",
    description:
      "Hire Ateeq Rehman Wazir for AI development, data science, backend APIs, or full stack web projects.",
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
