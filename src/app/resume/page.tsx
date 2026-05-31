import type { Metadata } from "next";
import ResumeContent from "@/components/sections/ResumeContent";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Professional resume and CV of Ateeq Rehman Wazir — AI Engineer, Data Scientist & Full Stack Developer.",
  openGraph: {
    title: "Resume — Ateeq Rehman Wazir",
    description:
      "Experience, skills, education, and certifications of Ateeq Rehman Wazir, AI Engineer and Full Stack Developer.",
  },
};

export default function ResumePage() {
  return <ResumeContent />;
}
