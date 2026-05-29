import type { ProjectItem } from "@/lib/types";

export const projects: ProjectItem[] = [
  {
    slug: "lumen",
    title: "Lumen",
    category: "Product • Smart Home • Interface",
    summary:
      "A smart-home experience designed around clarity, warmth, and control.",
    tags: ["Product", "Smart Home", "SwiftUI"],
    href: "https://lumen-idpz.vercel.app",
    image: "/images/projects/lumen-thumbnail.svg",
    darkImage: "/images/projects/lumen-thumbnail-dark.svg",
    featured: true
  },
  {
    slug: "muhome",
    title: "Muhome",
    category: "Architecture • Automation • Infrastructure",
    summary:
      "The infrastructure, automation, and device architecture powering Lumen.",
    tags: ["Architecture", "Automation", "Infrastructure"],
    href: "https://muhome-muharafiq.vercel.app",
    image: "/images/projects/lumen-thumbnail.svg",
    darkImage: "/images/projects/lumen-thumbnail-dark.svg",
    featured: true
  },
  {
    slug: "modern-branding-local-businesses",
    title: "Modern Branding for Local Businesses",
    category: "Branding • Identity • Web",
    summary:
      "A broader branding and web-design case study for local service businesses, with Fancy Car Wash as one example inside the system.",
    tags: ["Brand Systems", "Web Design", "Local Business"],
    href: "https://fancy-car-wash.vercel.app",
    image: "/images/projects/fancy-car-wash-logo.svg",
    darkImage: "/images/projects/fancy-car-wash-logo-dark.svg",
    featured: true
  },
  {
    slug: "personal-portfolio",
    title: "Personal Portfolio",
    category: "Design System • Development • Brand",
    summary:
      "A living case study in editorial identity, design-system decisions, development structure, and visual evolution.",
    tags: ["Design System", "Next.js", "Editorial"],
    image: "/images/projects/portfolio-thumbnail.svg",
    darkImage: "/images/projects/portfolio-thumbnail-dark.svg",
    featured: true
  }
];
