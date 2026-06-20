import { getSiteConfig } from "./content";

export function getPersonSchema() {
  const site = getSiteConfig();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.title,
    email: site.email,
    url: siteUrl,
    sameAs: [site.social.github, site.social.linkedin],
  };
}

export function getWebSiteSchema() {
  const site = getSiteConfig();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.seo.title,
    url: siteUrl,
    description: site.seo.description,
  };
}
