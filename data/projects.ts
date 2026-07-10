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
    slug: "car-wash",
    title: "Modern Branding for Local Businesses",
    eyebrow: "Brand · Strategy",
    subtitle: "Helping local car washes stand out with easier arrival and clearer trust.",
    relationshipLabel: "In development",
    category: "Brand · Strategy",
    summary:
      "Brand and positioning work grounded in where the market falls short: clearer entry, visible quality, and a better finish.",
    tags: ["Brand", "Strategy", "Customer Experience"],
    href: "/portfolio/car-wash",
    ctaLabel: "View case study",
    image: "/images/projects/branding-cover.svg",
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
