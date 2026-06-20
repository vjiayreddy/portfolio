import type { Project } from "@/types";
import { getSiteConfig } from "./content";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export function getSiteUrl(path = "") {
  return `${siteUrl}${path}`;
}

export function getPersonSchema() {
  const site = getSiteConfig();

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.title,
    email: site.email,
    url: siteUrl,
    sameAs: [site.social.github, site.social.linkedin].filter(Boolean),
  };
}

export function getWebSiteSchema() {
  const site = getSiteConfig();

  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.seo.title,
    url: siteUrl,
    description: site.seo.description,
    author: {
      "@type": "Person",
      name: site.name,
    },
  };
}

export function getProjectSchema(project: Project) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.title,
    description: project.description,
    url: getSiteUrl(`/projects/${project.slug}`),
    applicationCategory: "WebApplication",
    operatingSystem: "Web",
    datePublished: project.publishedAt,
    author: {
      "@type": "Person",
      name: getSiteConfig().name,
    },
    keywords: project.technologies.join(", "),
  };
}

export function getBreadcrumbSchema(
  items: Array<{ name: string; path: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: getSiteUrl(item.path),
    })),
  };
}
