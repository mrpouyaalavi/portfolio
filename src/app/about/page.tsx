import type { Metadata } from "next";
import { AboutClient } from "./AboutClient";

export const metadata: Metadata = {
  title: "About",
  description:
    "Graduate full-stack developer and final-year IT student at Macquarie University, building modern web apps with Next.js, React, TypeScript, and Supabase, with practical AI features in Python and PyTorch. Based in Sydney, Australia.",
  openGraph: {
    title: "About | Pouya Alavi Naeini",
    description:
      "Graduate full-stack developer focused on Next.js, React, TypeScript, and Supabase, with practical AI features in Python and PyTorch.",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}

