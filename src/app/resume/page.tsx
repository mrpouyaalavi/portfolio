import type { Metadata } from "next";
import { ResumeClient } from "./ResumeClient";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Resume of Pouya Alavi Naeini - software engineer and final-year IT student focused on JavaScript, TypeScript, Python, React, Next.js, SQL-based systems, and applied AI/ML.",
  openGraph: {
    title: "Resume | Pouya Alavi Naeini",
    description:
      "Software engineer focused on JavaScript, TypeScript, Python, React, Next.js, SQL-based systems, and applied AI/ML.",
  },
};

export default function ResumePage() {
  return <ResumeClient />;
}
