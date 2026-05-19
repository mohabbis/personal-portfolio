import type { ProjectItem } from "@/lib/types";

export const projects: ProjectItem[] = [
  {
    slug: "fancy-car-wash",
    title: "Fancy Car Wash",
    category: "Brand Strategy • Web • Go-to-Market",
    summary: "Rebranded a family-owned car wash to capture premium positioning in Milwaukee's car wash market.",
    impact: "Positioned for premium pricing; full site live with integrated booking system.",
    tags: ["Brand Strategy", "Positioning", "Web", "Go-to-Market"],
    image: "/images/projects/fancy-car-wash-logo.svg",
    darkImage: "/images/projects/fancy-car-wash-logo-dark.svg",
    featured: true
  },
  {
    slug: "smart-home",
    title: "MuHome",
    category: "Product Strategy • Systems Design • iOS",
    summary: "Redesigned smart-home control around actual user routines instead of feature lists.",
    impact: "User-tested prototype informed by 15+ research conversations; roadmap for iOS launch.",
    tags: ["Product Strategy", "UX Research", "Systems", "Prototyping"],
    href: "https://muhome-muharafiq.vercel.app",
    image: "/images/projects/muhome-thumbnail.svg",
    darkImage: "/images/projects/muhome-thumbnail-dark.svg",
    featured: true
  },
  {
    slug: "portfolio",
    title: "Personal Portfolio",
    category: "Product Design • Next.js • Editorial",
    summary: "Built a portfolio site that communicates value faster than traditional résumé formats.",
    impact: "Serves as the main calling card and generates inquiries.",
    tags: ["Product Design", "Web Performance", "Next.js", "Writing"],
    href: "https://muharafiq.com",
    image: "/images/projects/portfolio-thumbnail.svg",
    darkImage: "/images/projects/portfolio-thumbnail-dark.svg",
    featured: true
  }
];
