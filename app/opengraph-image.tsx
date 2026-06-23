import { ImageResponse } from "next/og";

import { siteConfig } from "@/data/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          backgroundColor: "#F6F2EB",
          backgroundImage:
            "radial-gradient(circle at 80% 15%, rgba(198,128,42,0.18), rgba(198,128,42,0) 55%)",
          fontFamily: "Georgia, serif"
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#C6802A"
          }}
        >
          Muhammad Rafiq
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 64, color: "#241D15", lineHeight: 1.15 }}>
            {siteConfig.hero.headline}
          </div>
          <div
            style={{
              fontSize: 30,
              color: "#5C5447",
              fontFamily: "Arial, sans-serif",
              maxWidth: 880
            }}
          >
            {siteConfig.hero.subheadline}
          </div>
        </div>
      </div>
    ),
    size
  );
}
