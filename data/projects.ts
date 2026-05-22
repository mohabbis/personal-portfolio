import type { ProjectItem } from "@/lib/types";

export const projects: ProjectItem[] = [
  {
    slug: "fancy-car-wash",
    title: "Fancy Car Wash",
    category: "Branding • Identity • Web",
    summary: "Modern rebrand for a family-owned car wash — new visual identity and web presence.",
    tags: ["Rebranding", "Visual Identity", "Web Design"],
    image: "/images/projects/fancy-car-wash-logo.svg",
    darkImage: "/images/projects/fancy-car-wash-logo-dark.svg",
    featured: true
  },
  {
    slug: "smart-home",
    title: "MuHome",
    category: "Product Strategy • Systems Design • iOS",
    summary: "A calmer smart-home operating system built around routines, not device lists.",
    tags: ["Product Strategy", "Systems Design", "iOS", "CloudKit"],
    href: "https://muhome-muharafiq.vercel.app",
    image: "/images/projects/muhome-thumbnail.svg",
    darkImage: "/images/projects/muhome-thumbnail-dark.svg",
    featured: true
  },
  {
    slug: "portfolio",
    title: "Personal Portfolio",
    category: "Product Design • Next.js • Editorial",
    summary: "Editorial portfolio system for strategic work and visual storytelling.",
    tags: ["Product Design", "Next.js", "Design Systems"],
    href: "https://muharafiq.com",
    image: "/images/projects/portfolio-thumbnail.svg",
    darkImage: "/images/projects/portfolio-thumbnail-dark.svg",
    featured: true
  }
];
