import type { Metadata } from "next";
import { AboutClient } from "./AboutClient";

export const metadata: Metadata = {
  title: "About",
  description:
"Australian citizen and final-year Bachelor of Information Technology student at Macquarie University, working across full-stack web, Flutter mobile and applied AI. Co-founder of the Syllabus Sync ecosystem, graduating November 2026.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About | Pouya Alavi Naeini",
    description:
      "Australian graduate software engineer in Sydney, working across full-stack web, Flutter mobile and applied AI. Co-founder of the Syllabus Sync ecosystem, graduating November 2026.",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
