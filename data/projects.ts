import type { ProjectItem } from "@/lib/types";

export const projects: ProjectItem[] = [
  {
    slug: "fancy-car-wash",
    title: "Modern Branding for Local Businesses",
    category: "Branding • Identity • Web",
    summary: "A broader case study on sharpening local service businesses through identity systems, web presence, and clearer digital first impressions.",
    tags: ["Brand Systems", "Operations", "Web Design"],
    image: "/images/projects/fancy-car-wash-logo.svg",
    darkImage: "/images/projects/fancy-car-wash-logo-dark.svg",
    featured: true
  },
  {
    slug: "lumen",
    title: "Lumen",
    category: "Systems Design • Product Strategy • Smart Home",
    summary: "A smart home system focused on automation, infrastructure, and intentional digital environments, built on the underlying Muhome framework.",
    tags: ["Systems Design", "Smart Home", "Product Strategy", "Infrastructure"],
    href: "https://muhome-muharafiq.vercel.app",
    image: "/images/projects/muhome-thumbnail.svg",
    darkImage: "/images/projects/muhome-thumbnail-dark.svg",
    featured: true
  },
  {
    slug: "systems-operations",
    title: "Systems & Operations",
    category: "Workflow Design • Documentation • Operations",
    summary: "Ongoing work focused on organization, workflow optimization, documentation systems, and cleaner operational environments across digital and physical spaces.",
    tags: ["Operations", "Documentation", "Workflow Systems"],
    image: "/images/projects/portfolio-thumbnail.svg",
    darkImage: "/images/projects/portfolio-thumbnail-dark.svg",
    featured: true
  }
];
