import type { Metadata } from "next";
import { ProjectsClient } from "./ProjectsClient";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A collection of projects built by Pouya Alavi Naeini — from full-stack platforms to development tools.",
  openGraph: {
    title: "Projects | Pouya Alavi Naeini",
    description:
      "A collection of projects built by Pouya Alavi Naeini — from full-stack platforms to development tools.",
  },
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}

