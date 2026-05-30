import type { ProjectItem } from "@/lib/types";

export const projects: ProjectItem[] = [
  {
    slug: "lumen",
    title: "Lumen",
    eyebrow: "Featured Project",
    subtitle: "Smart-home control designed around human intent rather than device complexity.",
    relationshipLabel: "Featured project",
    systemRole: "interface",
    category: "Product · Smart Home · Interface",
    summary:
      "A polished smart-home interface built from the Muhome automation architecture.",
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
    title: "Fancy Car Wash",
    eyebrow: "Client work · In progress",
    subtitle: "Automatic wash experience",
    relationshipLabel: "In development",
    category: "Brand Strategy · Web Design · Identity",
    summary:
      "Brand identity and web direction for local car wash businesses.",
    tags: ["Brand Strategy", "Web Design", "Identity", "Local Business"],
    href: "/portfolio/car-wash",
    ctaLabel: "View case study",
    image: "/images/projects/fancy-car-wash-card.svg",
    darkImage: "/images/projects/fancy-car-wash-card.svg",
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
