import type { Metadata } from "next";
import { ResumeClient } from "./ResumeClient";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Resume of Pouya Alavi Naeini — Full-Stack Developer specialising in React, Next.js, TypeScript, and Supabase.",
  openGraph: {
    title: "Resume | Pouya Alavi Naeini",
    description:
      "Full-Stack Developer specialising in React, Next.js, TypeScript, and Supabase.",
  },
};

export default function ResumePage() {
  return <ResumeClient />;
}

