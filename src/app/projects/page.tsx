import type { Metadata } from "next";
import { ProjectsClient } from "./ProjectsClient";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Projects by Pouya Alavi Naeini — full-stack web platforms, Flutter mobile apps, and applied AI/ML research.",
  openGraph: {
    title: "Projects | Pouya Alavi Naeini",
    description:
      "Projects by Pouya Alavi Naeini — full-stack web platforms, Flutter mobile apps, and applied AI/ML research.",
  },
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}

