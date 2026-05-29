import type { ProjectItem } from "@/lib/types";

export const projects: ProjectItem[] = [
  {
    slug: "lumen",
    title: "Lumen",
    category: "Systems Design • Smart Home • Infrastructure",
    summary:
      "A systems-driven smart home platform built around automation and environmental intelligence. Developed on Muhome, an internal framework for connected-environment experimentation.",
    tags: ["Systems Design", "Smart Home", "Infrastructure"],
    href: "https://muhome-muharafiq.vercel.app",
    image: "/images/projects/lumen-thumbnail.svg",
    darkImage: "/images/projects/lumen-thumbnail-dark.svg",
    featured: true
  },
  {
    slug: "fancy-car-wash",
    title: "Modern Branding for Local Businesses",
    category: "Branding • Identity • Web",
    summary:
      "Identity systems and web presence for local service businesses — sharper first impressions through considered design.",
    tags: ["Brand Systems", "Operations", "Web Design"],
    image: "/images/projects/fancy-car-wash-logo.svg",
    darkImage: "/images/projects/fancy-car-wash-logo-dark.svg",
    featured: true
  },
  {
    slug: "systems-operations",
    title: "Systems & Operations",
    category: "Workflow Design • Documentation • Operations",
    summary:
      "Ongoing work on workflow optimization, documentation systems, and cleaner operational environments across digital and physical spaces.",
    tags: ["Operations", "Documentation", "Workflow Systems"],
    image: "/images/projects/portfolio-thumbnail.svg",
    darkImage: "/images/projects/portfolio-thumbnail-dark.svg",
    featured: true
  }
];
