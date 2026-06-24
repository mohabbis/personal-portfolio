import type { ProjectItem } from "@/lib/types";

export const projects: ProjectItem[] = [
  {
    slug: "lumen",
    title: "Lumen",
    eyebrow: "Product Strategy · Interface Design",
    subtitle: "A calm smart-lighting interface for people who get overwhelmed by busy, overstimulating spaces.",
    relationshipLabel: "In development",
    systemRole: "interface",
    category: "Product · Strategy · Design",
    summary:
      "A calm home companion for iOS. I started from who it's for and how it should feel, then began building it to see if the idea holds up. Still in development.",
    tags: ["Product", "Strategy", "Interface"],
    href: "/portfolio/lumen",
    ctaLabel: "View case study",
    image: "/images/projects/D9288681-D6B5-4551-8663-D2600590E0CF.png",
    darkImage: "/images/projects/D9288681-D6B5-4551-8663-D2600590E0CF.png",
    imageFit: "cover",
    featured: true
  },
  {
    slug: "car-wash",
    title: "Modern Branding for Local Businesses",
    eyebrow: "Brand · Graphic Design · Strategy",
    subtitle: "Brand and visual systems for local car wash businesses, built around trust, clarity, and curbside presence.",
    relationshipLabel: "In development",
    category: "Brand · Graphic Design · Strategy",
    summary:
      "Brand and positioning work for local car wash businesses, grounded in clearer entry, visible quality, curbside confidence, and a better finish from tunnel to vacuum.",
    tags: ["Brand", "Graphic Design", "Customer Experience", "Go-to-Market"],
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
    eyebrow: "Operations · Risk · Systems",
    subtitle: "The systems an organization runs on: alumni engagement, records, communication, and continuity through leadership turnover.",
    relationshipLabel: "Active project",
    category: "Operations · Risk Management",
    summary:
      "The behind-the-scenes systems an organization runs on: alumni engagement, records, communication, and the continuity that survives leadership turnover. Sensitive details left out on purpose.",
    tags: ["Operations", "Risk", "Process", "Records"],
    href: "/portfolio/operations",
    ctaLabel: "View case study",
    image: "/images/projects/alumni-operations-system.svg",
    darkImage: "/images/projects/alumni-operations-system.svg",
    imageFit: "cover",
    featured: true
  }
];
