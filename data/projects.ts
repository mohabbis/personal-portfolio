import type { ProjectItem } from "@/lib/types";

export const projects: ProjectItem[] = [
  {
    slug: "fancy-car-wash",
    title: "Fancy Car Wash",
    category: "Branding / Web / Local Business",
    summary: "A polished marketing site and digital identity system for a Milwaukee car wash, designed to feel cleaner, warmer, and more premium than the typical local-service template.",
    impact: "Live production site with service pricing, location details, and a visual direction built around trust and presentation.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Brand Direction"],
    href: "https://fancy-car-wash.vercel.app",
    image: "/images/projects/fancy-car-wash-thumbnail.svg",
    featured: true
  },
  {
    slug: "smart-home",
    title: "MuHome — Smart Home System",
    category: "Systems / Smart Home / UX",
    summary: "A design-forward smart-home ecosystem exploring how lighting, automation, sensors, and ambient controls can feel intuitive instead of technical.",
    impact: "Built around real devices and real routines using Home Assistant, Tauri, React, and local-first control concepts.",
    tags: ["Tauri", "React", "TypeScript", "IoT", "Home Assistant"],
    href: "https://muhome-muharafiq.vercel.app",
    image: "/images/projects/muhome-thumbnail.svg",
    featured: true
  },
  {
    slug: "portfolio",
    title: "Muhammad Rafiq Portfolio",
    category: "Editorial Web Design",
    summary: "A personal site designed more like a digital studio book than a traditional resume: warm neutrals, restrained typography, and project-first storytelling.",
    impact: "Created to present strategy, design, operations, and technical work through a more cinematic and editorial lens.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Creative Direction"],
    href: "https://muharafiq.com",
    image: "/images/projects/portfolio-thumbnail.svg",
    featured: true
  }
];
