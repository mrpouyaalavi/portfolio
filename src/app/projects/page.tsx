import type { Metadata } from "next";
import { ProjectsClient } from "./ProjectsClient";

export const metadata: Metadata = {
  title: "Projects",
  description:
"Full-stack web, Flutter mobile and applied AI projects by Sydney-based graduate software engineer Pouya Alavi Naeini.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Projects | Pouya Alavi Naeini",
    description:
      "Full-stack web, Flutter mobile and applied AI projects by Sydney-based graduate software engineer Pouya Alavi Naeini.",
  },
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}

