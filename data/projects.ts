import type { ProjectItem } from "@/lib/types";

export const projects: ProjectItem[] = [
  {
    slug: "lumen",
    title: "Lumen",
    eyebrow: "Product · Strategy",
    subtitle: "A calm iOS home companion for people overwhelmed by busy, overstimulating spaces.",
    relationshipLabel: "In development",
    systemRole: "interface",
    category: "Product · Strategy",
    summary:
      "I started with who it's for and how it should feel, then built enough to test whether the idea holds.",
    tags: ["Product", "Strategy", "Research"],
    href: "/portfolio/lumen",
    ctaLabel: "View case study",
    image: "/images/projects/lumen-cover.svg",
    imageFit: "cover",
    featured: true
  },
  {
    slug: "washorbit",
    title: "WashOrbit",
    eyebrow: "Product · Operational CRM",
    subtitle: "An operational CRM for car washes that owns every complaint through to a verified fix.",
    relationshipLabel: "In development",
    systemRole: "interface",
    category: "Product · Operational CRM",
    summary:
      "A platform I'm building for car wash owners: turn a complaint into an owned case, trace it to the operational cause, and don't let it close until the machine and the customer are both made right.",
    tags: ["Product", "Design", "Full-stack"],
    href: "/portfolio/washorbit",
    ctaLabel: "View case study",
    image: "/images/projects/washorbit-cover.svg",
    imageFit: "cover",
    featured: true
  },
  {
    slug: "operations",
    title: "Fraternal Operations",
    eyebrow: "Operations",
    subtitle: "The systems an organization runs on: engagement, records, and continuity.",
    relationshipLabel: "Active project",
    category: "Operations",
    summary:
      "The systems behind an organization: alumni engagement, records, and continuity that survives leadership turnover.",
    tags: ["Operations", "Process", "Records"],
    href: "/portfolio/operations",
    ctaLabel: "View case study",
    image: "/images/projects/operations-cover.svg",
    imageFit: "cover",
    featured: true
  }
];
