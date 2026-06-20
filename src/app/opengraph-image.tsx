import { ImageResponse } from "next/og";
import { getSiteConfig } from "@/lib/content";

export const alt = "Portfolio Open Graph Image";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  const site = getSiteConfig();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #5b21b6 100%)",
          color: "white",
        }}
      >
        <div
          style={{
            fontSize: 28,
            fontWeight: 600,
            opacity: 0.85,
            marginBottom: 16,
          }}
        >
          Portfolio
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            lineHeight: 1.1,
            marginBottom: 24,
            maxWidth: 900,
          }}
        >
          {site.name}
        </div>
        <div
          style={{
            fontSize: 32,
            opacity: 0.9,
            marginBottom: 16,
          }}
        >
          {site.title}
        </div>
        <div
          style={{
            fontSize: 24,
            opacity: 0.75,
            maxWidth: 800,
            lineHeight: 1.4,
          }}
        >
          {site.tagline}
        </div>
      </div>
    ),
    { ...size }
  );
}
