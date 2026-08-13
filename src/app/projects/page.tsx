import type { Metadata } from "next";
import { ProjectsClient } from "./ProjectsClient";

export const metadata: Metadata = {
  title: "Projects",
  description:
"Full-stack web, Flutter mobile and applied AI projects by Sydney-based graduate software engineer Leo Alavi.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Projects | Leo Alavi",
    description:
      "Full-stack web, Flutter mobile and applied AI projects by Sydney-based graduate software engineer Leo Alavi.",
  },
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}

