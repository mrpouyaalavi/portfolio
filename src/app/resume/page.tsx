import type { Metadata } from "next";
import { ResumeClient } from "./ResumeClient";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Resume of Pouya Alavi Naeini — full-stack developer focused on Next.js, React, TypeScript, and Supabase, with applied AI/ML in Python and PyTorch.",
  openGraph: {
    title: "Resume | Pouya Alavi Naeini",
    description:
      "Full-stack developer focused on Next.js, React, TypeScript, and Supabase. Applied AI/ML with Python and PyTorch.",
  },
};

export default function ResumePage() {
  return <ResumeClient />;
}

