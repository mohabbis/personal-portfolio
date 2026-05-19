import type { ProjectItem } from "@/lib/types";

export const projects: ProjectItem[] = [
  {
    slug: "fancy-car-wash",
    title: "Fancy Car Wash",
    category: "Brand Strategy · Web",
    summary: "A warm, premium site for a Milwaukee car wash that needed to feel clearer and more distinctive than the local default.",
    impact: "Differentiated brand strategy and site in progress — separating the brand from low-cost competitors in the Milwaukee market.",
    tags: ["Brand Strategy", "Positioning", "Web", "Coming Soon"],
    image: "/images/projects/fancy-car-wash-thumbnail.svg",
    darkImage: "/images/projects/fancy-car-wash-thumbnail-dark.svg",
    featured: true
  },
  {
    slug: "smart-home",
    title: "MuHome",
    category: "Systems · Creative Technology",
    summary: "A smart-home interface shaped around clearer status, simpler routines, and less friction.",
    impact: "Currently a live demo — iOS app coming soon.",
    tags: ["Systems", "UX", "Creative Technology", "iOS"],
    href: "https://muhome-muharafiq.vercel.app",
    image: "/images/projects/muhome-thumbnail.svg",
    darkImage: "/images/projects/muhome-thumbnail-dark.svg",
    featured: true
  },
  {
    slug: "portfolio",
    title: "Personal Portfolio",
    category: "Editorial Portfolio · Web",
    summary: "A personal site designed to read more like a magazine spread than a résumé, with a tighter point of view and less noise.",
    impact: "A self-authored portfolio with a calmer structure, warmer tone, and more room for the work.",
    tags: ["Editorial Design", "Writing", "Web", "Next.js"],
    href: "https://muharafiq.com",
    image: "/images/projects/portfolio-thumbnail.svg",
    darkImage: "/images/projects/portfolio-thumbnail-dark.svg",
    featured: true
  }
];
