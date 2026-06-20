import type { Metadata } from "next";
import { getSiteConfig } from "./content";
import { getSiteUrl } from "./structured-data";

export function createMetadata({
  title,
  description,
  path = "",
  imagePath = "/opengraph-image",
}: {
  title?: string;
  description?: string;
  path?: string;
  imagePath?: string;
}): Metadata {
  const site = getSiteConfig();
  const pageTitle = title ? `${title} | ${site.name}` : site.seo.title;
  const pageDescription = description ?? site.seo.description;
  const url = getSiteUrl(path);
  const imageUrl = getSiteUrl(imagePath);

  return {
    title: pageTitle,
    description: pageDescription,
    metadataBase: new URL(getSiteUrl()),
    authors: [{ name: site.name }],
    creator: site.name,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url,
      siteName: site.name,
      type: "website",
      locale: "en_US",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: pageTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [imageUrl],
    },
    alternates: {
      canonical: url,
    },
  };
}
