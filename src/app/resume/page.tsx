import type { Metadata } from "next";
import { ResumeClient } from "./ResumeClient";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Resume snapshot for Pouya Alavi Naeini, a software engineer and final-year IT student focused on full-stack web development and applied AI/ML.",
  openGraph: {
    title: "Resume | Pouya Alavi Naeini",
    description:
      "Concise software engineering resume snapshot with projects, skills, education, and PDF download.",
  },
};

export default function ResumePage() {
  return <ResumeClient />;
}
