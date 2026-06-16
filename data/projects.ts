import type { ProjectItem } from "@/lib/types";

export const projects: ProjectItem[] = [
  {
    slug: "lumen",
    title: "Lumen",
    eyebrow: "Featured Project",
    subtitle: "A calm iOS companion that uses light and slow scenes to reduce sensory stress and help you come back down.",
    relationshipLabel: "Featured project",
    systemRole: "interface",
    category: "Product · Smart Home · Interface",
    summary:
      "A native iOS companion that makes the home feel right at any hour. Calm scenes, quiet automations, and HomeKit control that stays out of the way.",
    tags: ["Product", "Smart Home", "SwiftUI", "Systems"],
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
    eyebrow: "Client work · In progress",
    subtitle: "Web development, marketing, and DRB-ready technology for local car wash operators.",
    relationshipLabel: "In development",
    category: "Web Development · Marketing · Systems Integration",
    summary:
      "Digital strategy for local car wash businesses, from conversion-focused websites and marketing funnels to planned DRB Car Wash system membership integrations.",
    tags: ["Web Development", "Marketing", "DRB Integration", "Local Business"],
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
    eyebrow: "Operations · Alpha Sigma Phi",
    subtitle: "Navigating inherited debt, nationals relationships, housing disputes, and building alumni infrastructure from scratch.",
    relationshipLabel: "Operations leadership",
    category: "Operations · Strategy · Finance",
    summary:
      "Chapter operations, financial planning, alumni infrastructure, and governance work under real constraints.",
    tags: ["Operations", "Strategy", "Finance", "Governance"],
    href: "/portfolio/operations",
    ctaLabel: "View case study",
    image: "/images/projects/alumni-operations-system.svg",
    darkImage: "/images/projects/alumni-operations-system.svg",
    imageFit: "cover",
    featured: true
  }
];
