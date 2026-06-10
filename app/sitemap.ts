import type { MetadataRoute } from "next";

const siteUrl = "https://www.muharafiq.com";
const lastModified = new Date("2026-06-10T00:00:00.000Z");

const routes = [
  "",
  "/about",
  "/portfolio",
  "/portfolio/lumen",
  "/portfolio/car-wash",
  "/portfolio/operations",
  "/contact",
  "/auth.md",
  "/.well-known/mcp/server-card.json",
  "/.well-known/agent-skills/index.json"
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/portfolio") ? 0.8 : 0.6
  }));
}
