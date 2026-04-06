import type { Metadata } from "next";
import { AboutClient } from "./AboutClient";

export const metadata: Metadata = {
  title: "About",
  description:
    "Full-Stack Developer specialising in React, Next.js, TypeScript, and Supabase. Final-year IT student at Macquarie University based in Sydney, NSW.",
  openGraph: {
    title: "About | Pouya Alavi Naeini",
    description:
      "Full-Stack Developer specialising in React, Next.js, TypeScript, and Supabase.",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}

