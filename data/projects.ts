import type { ProjectItem } from "@/lib/types";

export const projects: ProjectItem[] = [
  {
    slug: "lumen",
    title: "Lumen",
    eyebrow: "Product · Smart Home · Interface",
    subtitle: "A native smart-home companion designed around rooms, scenes, and sensory calm instead of device chaos.",
    relationshipLabel: "In development",
    systemRole: "interface",
    category: "Product Design · iOS · Systems Architecture",
    summary:
      "A native smart-home companion designed around rooms, scenes, and sensory calm instead of device chaos. Role: product design, system architecture, SwiftUI. Status: in development.",
    tags: ["Product Design", "iOS", "SwiftUI", "Systems Architecture"],
    href: "/portfolio/lumen",
    ctaLabel: "View case study",
    image: "/images/projects/lumen-iot-interface.svg",
    darkImage: "/images/projects/lumen-iot-interface.svg",
    imageFit: "cover",
    featured: true
  },
  {
    slug: "car-wash",
    title: "Modern Branding for Local Businesses",
    eyebrow: "Brand/Web · Local Business · In development",
    subtitle: "Brand, web, and membership systems for local car wash businesses, built around conversion and operational readiness.",
    relationshipLabel: "Prototype / in development",
    category: "Brand Direction · Web Systems · Conversion UX",
    summary:
      "Brand, web, and membership systems for local car wash businesses, built around conversion, clarity, and future operational integration. Pricing and signup flows are treated as prototype/in-development unless launched.",
    tags: ["Brand/Web", "Conversion UX", "Local Business", "DRB-Ready Planning"],
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
