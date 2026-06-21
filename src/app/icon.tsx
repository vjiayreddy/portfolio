import { ImageResponse } from "next/og";

export const size = { width: 512, height: 512 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #06b6d4, #0891b2)",
          color: "white",
          fontSize: 220,
          fontWeight: 700,
        }}
      >
        P
      </div>
    ),
    { ...size }
  );
}
