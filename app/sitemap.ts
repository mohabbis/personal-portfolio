import type { MetadataRoute } from "next";

const siteUrl = "https://www.muharafiq.com";
const lastModified = new Date("2026-06-12T00:00:00.000Z");

const routes = [
  { path: "", priority: 1, changeFrequency: "weekly" as const },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/portfolio", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/portfolio/lumen", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/portfolio/washorbit", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/portfolio/operations", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/photography", priority: 0.7, changeFrequency: "monthly" as const }
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${siteUrl}${path}`,
    lastModified,
    changeFrequency,
    priority
  }));
}
