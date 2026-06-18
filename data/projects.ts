import type { ProjectItem } from "@/lib/types";

export const projects: ProjectItem[] = [
  {
    slug: "lumen",
    title: "Lumen",
    eyebrow: "Product · iOS · Interface",
    subtitle: "A native iOS home companion that makes rooms feel warm, welcoming, and quietly responsive the moment you enter.",
    relationshipLabel: "In development",
    systemRole: "interface",
    category: "Product Design · iOS · Systems Architecture",
    summary:
      "A presence-aware home companion for light, warmth, and slow scenes. Role: product design, system architecture, SwiftUI. Status: in development.",
    tags: ["Product Design", "iOS", "SwiftUI", "Systems Architecture"],
    href: "/portfolio/lumen",
    ctaLabel: "View case study",
    image: "/images/projects/A3440B3B-970E-4E64-9933-95A2B5FB8AA0.PNG",
    darkImage: "/images/projects/A3440B3B-970E-4E64-9933-95A2B5FB8AA0.PNG",
    imageFit: "cover",
    featured: true
  },
  {
    slug: "car-wash",
    title: "Modern Branding for Local Businesses",
    eyebrow: "Brand/Web · Customer Experience · Local Business",
    subtitle: "Brand, web, and site visualization for car wash projects, built around easier arrival, clearer trust signals, and a better clean-car experience.",
    relationshipLabel: "In development",
    category: "Brand Direction · Customer Experience · Web Systems",
    summary:
      "A local-business brand system for car wash projects, focused on positive customer experience: clear entry, visible quality, stronger curbside confidence, and a cleaner finish from tunnel to vacuum.",
    tags: ["Brand/Web", "Customer Experience", "Local Business", "Site Visualization"],
    href: "/portfolio/car-wash",
    ctaLabel: "View case study",
    image: "/images/projects/local-business-branding.svg",
    darkImage: "/images/projects/local-business-branding.svg",
    imageFit: "cover",
    featured: true
  },
  {
    slug: "operations",
    title: "Fraternal Operations",
    eyebrow: "Operations · Infrastructure · Governance",
    subtitle: "A public/private infrastructure system for alumni engagement, institutional records, communication, and operational continuity.",
    relationshipLabel: "Active infrastructure project",
    category: "Operations · Information Architecture · Governance",
    summary:
      "A public/private infrastructure system for alumni engagement, institutional records, communication, and operational continuity. Sensitive details are intentionally omitted.",
    tags: ["Operations", "Information Architecture", "Governance", "CRM"],
    href: "/portfolio/operations",
    ctaLabel: "View case study",
    image: "/images/projects/alumni-operations-system.svg",
    darkImage: "/images/projects/alumni-operations-system.svg",
    imageFit: "cover",
    featured: true
  }
];
