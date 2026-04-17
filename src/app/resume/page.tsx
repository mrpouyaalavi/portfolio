import type { Metadata } from "next";
import { ResumeClient } from "./ResumeClient";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Resume of Pouya Alavi Naeini — graduate full-stack developer focused on Next.js, React, TypeScript, and Supabase, with practical AI features in Python and PyTorch. Based in Sydney, Australia.",
  openGraph: {
    title: "Resume | Pouya Alavi Naeini",
    description:
      "Graduate full-stack developer focused on Next.js, React, TypeScript, and Supabase. Practical AI features with Python and PyTorch.",
  },
};

export default function ResumePage() {
  return <ResumeClient />;
}

