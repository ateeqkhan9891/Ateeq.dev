import type { Metadata } from "next";
import ProjectsContent from "@/components/sections/ProjectsContent";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Portfolio of projects by Ateeq Rehman Wazir including AI SaaS, data science, machine learning, web development, and backend API projects.",
  openGraph: {
    title: "Projects — Ateeq Rehman Wazir",
    description:
      "AI SaaS, data science, machine learning, web development, and backend API projects by Ateeq Rehman Wazir.",
  },
};

export default function ProjectsPage() {
  return <ProjectsContent />;
}
