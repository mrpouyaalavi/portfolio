import type { Metadata } from "next";
import { ResumeClient } from "./ResumeClient";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Resume for Pouya Alavi Naeini — graduate software engineer focused on full-stack web, mobile and applied AI/ML. Includes projects, skills, experience and PDF download.",
  openGraph: {
    title: "Resume | Pouya Alavi Naeini",
    description:
      "Graduate software engineer resume with projects, skills, experience and PDF download.",
  },
};

export default function ResumePage() {
  return <ResumeClient />;
}
