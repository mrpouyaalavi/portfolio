import type { Metadata } from "next";
import { AboutClient } from "./AboutClient";

export const metadata: Metadata = {
  title: "About",
  description:
    "Software engineer and final-year IT student at Macquarie University, building software and full-stack web applications with JavaScript, TypeScript, Python, React, Next.js, and SQL-based systems.",
  openGraph: {
    title: "About | Pouya Alavi Naeini",
    description:
      "Software engineer focused on JavaScript, TypeScript, Python, React, Next.js, SQL-based systems, and applied AI/ML.",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
