import type { ProjectItem } from "@/lib/types";

export const projects: ProjectItem[] = [
  {
    slug: "fancy-car-wash",
    title: "Fancy Car Wash",
    category: "Brand Strategy • Web • Go-to-Market",
    summary: "Repositioning a family-owned car wash to capture premium market share in Milwaukee's fragmented car wash industry through brand transformation and digital platform development.",
    impact: "Completed brand identity system (logo, visual language) and website prototype; conducting feasibility studies to validate market demand before full build and social media launch.",
    tags: ["Brand Strategy", "Market Positioning", "Web Development", "Go-to-Market"],
    image: "/images/projects/fancy-car-wash-logo.svg",
    darkImage: "/images/projects/fancy-car-wash-logo-dark.svg",
    featured: true
  },
  {
    slug: "smart-home",
    title: "MuHome",
    category: "Product Strategy • Systems Design • iOS",
    summary: "Architected a comprehensive smart-home iOS application centered on user routines rather than device features, with full offline capability and iCloud synchronization.",
    impact: "Built production-ready iOS app with spatial home modeling, intent-based automation, device lifecycle management, and scene/remote systems—validated through user research with clear roadmap for launch.",
    tags: ["Product Strategy", "UX Research", "Systems Design", "iOS Development", "CloudKit", "CoreData"],
    href: "https://muhome-muharafiq.vercel.app",
    image: "/images/projects/muhome-thumbnail.svg",
    darkImage: "/images/projects/muhome-thumbnail-dark.svg",
    featured: true
  },
  {
    slug: "portfolio",
    title: "Personal Portfolio",
    category: "Product Design • Next.js • Editorial",
    summary: "Designed and built a high-performance portfolio that communicates strategic value proposition faster than traditional résumé formats.",
    impact: "Generates qualified inbound inquiries; serves as primary credential for consulting and full-time opportunities.",
    tags: ["Product Design", "Web Performance", "Next.js", "Strategic Communication"],
    href: "https://muharafiq.com",
    image: "/images/projects/portfolio-thumbnail.svg",
    darkImage: "/images/projects/portfolio-thumbnail-dark.svg",
    featured: true
  }
];
