import type { ProjectItem } from "@/lib/types";

export const projects: ProjectItem[] = [
  {
    slug: "fancy-car-wash",
    title: "Modern Branding for Local Businesses",
    category: "Branding • Identity • Web",
    summary: "A broader case study on sharpening local service businesses through identity, web presence, and clearer digital first impressions.",
    tags: ["Brand Systems", "Local Business", "Web Design"],
    image: "/images/projects/fancy-car-wash-logo.svg",
    darkImage: "/images/projects/fancy-car-wash-logo-dark.svg",
    featured: true
  },
  {
    slug: "smart-home",
    title: "MuHome",
    category: "Product Strategy • Systems Design • iOS",
    summary: "A calmer smart-home interface concept built around routines, rooms, and atmosphere instead of device lists.",
    tags: ["Product Strategy", "Systems Design", "Smart Home", "iOS"],
    href: "https://muhome-muharafiq.vercel.app",
    image: "/images/projects/muhome-thumbnail.svg",
    darkImage: "/images/projects/muhome-thumbnail-dark.svg",
    featured: true
  },
  {
    slug: "portfolio",
    title: "Personal Website System",
    category: "Product Design • Next.js • Editorial",
    summary: "A living portfolio, design system, and editorial identity for selected work, images, and experiments.",
    tags: ["Product Design", "Next.js", "Design Systems"],
    href: "https://muharafiq.com",
    image: "/images/projects/portfolio-thumbnail.svg",
    darkImage: "/images/projects/portfolio-thumbnail-dark.svg",
    featured: true
  }
];
