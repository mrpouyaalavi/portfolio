import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { projects } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes = ["", "/about", "/projects", "/resume", "/contact"].map(
    (path) => ({
      url: `${SITE_URL}${path}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
    }),
  );

  const projectRoutes = Object.keys(projects).map((slug) => ({
    url: `${SITE_URL}/projects/${slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...projectRoutes];
}
