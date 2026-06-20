import type { Metadata } from "next";
import { getSiteConfig } from "./content";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export function createMetadata({
  title,
  description,
  path = "",
}: {
  title?: string;
  description?: string;
  path?: string;
}): Metadata {
  const site = getSiteConfig();
  const pageTitle = title ? `${title} | ${site.name}` : site.seo.title;
  const pageDescription = description ?? site.seo.description;
  const url = `${siteUrl}${path}`;

  return {
    title: pageTitle,
    description: pageDescription,
    metadataBase: new URL(siteUrl),
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url,
      siteName: site.name,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
    },
    alternates: {
      canonical: url,
    },
  };
}
