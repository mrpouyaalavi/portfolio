import type { Metadata } from "next";
import { AboutClient } from "./AboutClient";

export const metadata: Metadata = {
  title: "About",
  description:
    "Graduate software engineer and final-year IT student at Macquarie University, building full-stack web and mobile applications with React, Next.js, Flutter and TypeScript.",
  openGraph: {
    title: "About | Pouya Alavi Naeini",
    description:
      "Graduate software engineer focused on full-stack web, mobile development and applied AI/ML. Co-founder of the Syllabus Sync Ecosystem, accepted into the Macquarie University Incubator.",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
