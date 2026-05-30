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
      "The consumer interface organizes control around rooms and scenes. The system layer synchronizes state across heterogeneous devices and protocols. The work demonstrates how architecture decisions enable interface simplicity.",
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
    title: "Car Wash Marketing",
    eyebrow: "Client work · In progress",
    subtitle: "Brand strategy and web design for two local car washes with contrasting market positions.",
    relationshipLabel: "In development",
    category: "Brand Strategy · Web Design · Identity",
    summary:
      "Fancy Car Wash and Car Wash Guys represent contrasting approaches to the same market: premium positioning versus community-focused membership strategy. Both brand systems and sites are currently under construction.",
    tags: ["Brand Strategy", "Web Design", "Identity", "Local Business"],
    href: "/portfolio/car-wash",
    ctaLabel: "View case study",
    image: "/images/projects/fancy-car-wash-thumbnail.svg",
    darkImage: "/images/projects/fancy-car-wash-thumbnail.svg",
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
      "When my class got elected to chapter leadership, we inherited a financial position, contracts, and a nationals relationship we had no part in creating. This is about making sound decisions under those conditions — and building the alumni database and operational infrastructure the chapter actually needed.",
    tags: ["Operations", "Strategy", "Finance", "Governance"],
    href: "/portfolio/operations",
    ctaLabel: "View case study",
    image: "/images/projects/alumni-operations-system.svg",
    darkImage: "/images/projects/alumni-operations-system.svg",
    imageFit: "cover",
    featured: true
  }
];
