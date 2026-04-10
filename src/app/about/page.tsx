import type { Metadata } from "next";
import { AboutClient } from "./AboutClient";

export const metadata: Metadata = {
  title: "About",
  description:
    "Full-stack developer building web apps with Next.js, React, TypeScript, and Supabase, with applied AI/ML in Python and PyTorch. Final-year IT student at Macquarie University, based in Sydney, Australia.",
  openGraph: {
    title: "About | Pouya Alavi Naeini",
    description:
      "Full-stack developer focused on Next.js, React, TypeScript, and Supabase, with applied AI/ML in Python and PyTorch.",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}

