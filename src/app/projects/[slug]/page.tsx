import { notFound } from "next/navigation";
import { projects } from "@/lib/data";
import { ProjectDetailClient } from "./ProjectDetailClient";
import type { Metadata } from "next";

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects[slug];
  if (!project) return { title: "Project Not Found" };

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} | Pouya Alavi Naeini`,
      description: project.description,
    },
  };
}

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }));
}

export default async function ProjectPage({ params }: { params: Params }) {
  const { slug } = await params;
  const project = projects[slug];

  if (!project) notFound();

  return <ProjectDetailClient project={project} />;
}

