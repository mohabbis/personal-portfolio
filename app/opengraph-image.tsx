import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ImageResponse } from "next/og";

import { siteConfig } from "@/data/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const fontsDir = join(process.cwd(), "public", "fonts");

export default async function OpengraphImage() {
  const [ralewayRegular, ralewaySemiBold, ralewayBold, headshot] = await Promise.all([
    readFile(join(fontsDir, "Raleway-Regular.ttf")),
    readFile(join(fontsDir, "Raleway-SemiBold.ttf")),
    readFile(join(fontsDir, "Raleway-Bold.ttf")),
    readFile(join(process.cwd(), "public", "images", "profile", "headshot.jpg"))
  ]);
  const headshotSrc = `data:image/jpeg;base64,${headshot.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          backgroundColor: "#100b05",
          backgroundImage:
            "radial-gradient(circle at 82% 18%, rgba(217,154,58,0.22), rgba(217,154,58,0) 55%)",
          fontFamily: "Raleway"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "76px 64px 64px 80px",
            width: 760
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16
            }}
          >
            <div
              style={{
                width: 14,
                height: 14,
                borderRadius: 7,
                backgroundColor: "#d99a3a"
              }}
            />
            <div
              style={{
                fontSize: 24,
                fontWeight: 600,
                letterSpacing: 5,
                textTransform: "uppercase",
                color: "#c2a57c"
              }}
            >
              Muhammad Rafiq
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
            <div
              style={{
                fontSize: 60,
                fontWeight: 700,
                color: "#f5efe4",
                lineHeight: 1.18
              }}
            >
              {siteConfig.hero.headline}
            </div>
            <div
              style={{
                fontSize: 27,
                fontWeight: 400,
                color: "#b7ac98",
                lineHeight: 1.4,
                maxWidth: 600
              }}
            >
              {siteConfig.hero.subheadline}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              gap: 10,
              fontSize: 20,
              fontWeight: 600,
              color: "#c2a57c"
            }}
          >
            <span>Design</span>
            <span style={{ color: "#d99a3a" }}>·</span>
            <span>Strategy</span>
            <span style={{ color: "#d99a3a" }}>·</span>
            <span>Technology</span>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 440,
            position: "relative"
          }}
        >
          <div
            style={{
              display: "flex",
              width: 340,
              height: 340,
              borderRadius: 170,
              padding: 10,
              backgroundColor: "#d99a3a"
            }}
          >
            <img
              src={headshotSrc}
              width={320}
              height={320}
              style={{
                borderRadius: 160,
                objectFit: "cover",
                objectPosition: "50% 24%"
              }}
            />
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Raleway", data: ralewayRegular, weight: 400, style: "normal" },
        { name: "Raleway", data: ralewaySemiBold, weight: 600, style: "normal" },
        { name: "Raleway", data: ralewayBold, weight: 700, style: "normal" }
      ]
    }
  );
}
