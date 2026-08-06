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
    href: "https://lumen.muharafiq.com",
    ctaLabel: "Open live demo",
    image: "/images/projects/lumen-cover.svg",
    imageFit: "cover",
    featured: true
  },
  {
    slug: "washorbit",
    title: "WashOrbit",
    eyebrow: "Product · Operating layer",
    subtitle: "The operating layer for car washes, on top of the point-of-sale — members, machines, and moments.",
    relationshipLabel: "In development",
    systemRole: "interface",
    category: "Product · Operating layer",
    summary:
      "A platform I'm building for car wash owners: it runs the business around the wash — keeping members from churning, machines from going down, and making every bad wash right — starting with the complaint-to-verified-fix loop that's live today.",
    tags: ["Product", "Design", "Full-stack"],
    href: "/portfolio/washorbit",
    ctaLabel: "View case study",
    image: "/images/projects/washorbit-cover.svg",
    imageFit: "cover",
    featured: true
  }
];
