import type { ProjectItem } from "@/lib/types";

export const projects: ProjectItem[] = [
  {
    slug: "fancy-car-wash",
    title: "Fancy Car Wash",
    category: "Web · Local Business",
    summary: "Marketing site for a Milwaukee car wash — wash packages, pricing, and location details. Built and shipped to production.",
    impact: "Live at fancycarwash.com.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    href: "https://fancy-car-wash.vercel.app",
    image: "/images/projects/fancy-car-wash-thumbnail.svg",
    featured: true
  },
  {
    slug: "smart-home",
    title: "MuHome",
    category: "Desktop · IoT",
    summary: "Local-first desktop app that centralizes smart home control across Hue, Govee, Kasa, and Home Assistant. Built around a single insight: device status should be obvious at a glance.",
    impact: "Running in production at home.",
    tags: ["Tauri", "React", "TypeScript", "Home Assistant"],
    href: "https://muhome-muharafiq.vercel.app",
    image: "/images/projects/muhome-thumbnail.svg",
    featured: true
  },
  {
    slug: "portfolio",
    title: "This Site",
    category: "Web",
    summary: "Designed and built from scratch — minimal, fast, and written to work for both technical and non-technical readers.",
    impact: "Live at muharafiq.com.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    href: "https://muharafiq.com",
    image: "/images/projects/portfolio-thumbnail.svg",
    featured: true
  },
];
