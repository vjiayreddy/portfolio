import type { MetadataRoute } from "next";
import { getAllProjects } from "@/lib/content";
import { getSiteUrl } from "@/lib/structured-data";

const staticRoutes = [
  { path: "", priority: 1, changeFrequency: "weekly" as const },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/projects", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/skills", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/experience", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/resume", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/contact", priority: 0.7, changeFrequency: "yearly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const projects = getAllProjects();
  const lastModified = new Date();

  const staticEntries = staticRoutes.map((route) => ({
    url: getSiteUrl(route.path),
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const projectEntries = projects.map((project) => ({
    url: getSiteUrl(`/projects/${project.slug}`),
    lastModified: new Date(project.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticEntries, ...projectEntries];
}
