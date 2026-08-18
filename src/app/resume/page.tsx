import type { Metadata } from "next";
import { ResumeClient } from "./ResumeClient";

export const metadata: Metadata = {
  title: "Resume",
  description:
"Resume for Leo Alavi, a graduate software engineer working across full-stack web, Flutter mobile and applied AI. Final-year Bachelor of Information Technology student at Macquarie University, graduating November 2026.",
  alternates: {
    canonical: "/resume",
  },
  openGraph: {
    title: "Resume | Leo Alavi",
    description:
      "Graduate software engineering resume with projects, skills, experience, education and PDF download.",
  },
};

export default function ResumePage() {
  return <ResumeClient />;
}
