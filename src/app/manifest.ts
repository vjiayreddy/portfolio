import type { MetadataRoute } from "next";
import { getSiteConfig } from "@/lib/content";

export default function manifest(): MetadataRoute.Manifest {
  const site = getSiteConfig();

  return {
    name: site.seo.title,
    short_name: site.name,
    description: site.seo.description,
    start_url: "/",
    display: "standalone",
    background_color: "#fafafa",
    theme_color: "#2563eb",
    icons: [
      {
        src: "/icon",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
