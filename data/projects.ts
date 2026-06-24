import type { ProjectItem } from "@/lib/types";

export const projects: ProjectItem[] = [
  {
    slug: "lumen",
    title: "Lumen",
    eyebrow: "Product Strategy · Positioning",
    subtitle: "A calm home companion for iOS, made for people who get overwhelmed by busy, overstimulating spaces.",
    relationshipLabel: "In development",
    systemRole: "interface",
    category: "Product · Strategy",
    summary:
      "A calm home companion for iOS. I started from who it's for and how it should feel, then began building it to see if the idea holds up. Still in development.",
    tags: ["Product", "Strategy", "Research"],
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
    eyebrow: "Brand · Strategy",
    subtitle: "Helping local car wash businesses stand out: easier arrival, clearer trust signals, and a better customer experience.",
    relationshipLabel: "In development",
    category: "Brand · Strategy",
    summary:
      "Brand and positioning work for local car wash businesses, grounded in where the market falls short: clearer entry, visible quality, more curbside confidence, and a better finish from tunnel to vacuum.",
    tags: ["Brand", "Strategy", "Customer Experience", "Go-to-Market"],
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
    eyebrow: "Operations",
    subtitle: "The systems an organization runs on: alumni engagement, records, communication, and continuity through leadership turnover.",
    relationshipLabel: "Active project",
    category: "Operations",
    summary:
      "The behind-the-scenes systems an organization runs on: alumni engagement, records, communication, and the kind of continuity that survives leadership turnover. Sensitive details left out on purpose.",
    tags: ["Operations", "Process", "Records"],
    href: "/portfolio/operations",
    ctaLabel: "View case study",
    image: "/images/projects/alumni-operations-system.svg",
    darkImage: "/images/projects/alumni-operations-system.svg",
    imageFit: "cover",
    featured: true
  }
];
