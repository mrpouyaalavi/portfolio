import type { Metadata } from "next";
import { AboutClient } from "./AboutClient";

export const metadata: Metadata = {
  title: "About",
  description:
    "Software engineer and final-year IT student at Macquarie University, focused on full-stack web development with a secondary interest in applied AI/ML.",
  openGraph: {
    title: "About | Pouya Alavi Naeini",
    description:
      "Software engineer focused on full-stack web development, applied AI/ML, and graduate software roles in Sydney.",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
