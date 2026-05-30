import type { ProjectItem } from "@/lib/types";

export const projects: ProjectItem[] = [
  {
    slug: "lumen",
    title: "Lumen",
    eyebrow: "Featured product",
    subtitle: "A thoughtful smart-home experience built around clarity, warmth, and everyday usability.",
    relationshipLabel: "Interface + architecture",
    systemRole: "interface",
    category: "Product • Smart Home • Creative Technology",
    summary:
      "A consumer-facing smart-home experience paired with the underlying automation architecture: room logic, scenes, device management, motion behavior, and infrastructure planning folded into one unified product.",
    tags: ["Product", "Smart Home", "Design", "HomeKit", "Automation"],
    href: "https://lumen.muharafiq.com",
    image: "/images/projects/lumen-iot-interface.svg",
    darkImage: "/images/projects/muhome-iot-system.svg",
    featured: true
  },
  {
    slug: "modernizing-alumni-operations",
    title: "Modernizing Alumni Operations",
    eyebrow: "Institutional infrastructure",
    subtitle: "CRM and web systems for institutional continuity.",
    relationshipLabel: "Operations system",
    category: "CRM • Operations • Web Systems",
    summary:
      "A Supabase-backed CRM and public web platform designed to replace disconnected spreadsheets with structured alumni operations, relationship management, communications workflows, and institutional knowledge.",
    tags: ["Supabase", "PostgreSQL", "SQL", "CRM", "Operations", "Web Systems"],
    href: "https://asig-725.vercel.app/",
    image: "/images/projects/alumni-operations-system.svg",
    darkImage: "/images/projects/alumni-operations-system.svg",
    featured: true
  },
  {
    slug: "modern-branding-local-businesses",
    title: "Modern Branding for Local Businesses",
    eyebrow: "Active client work",
    subtitle: "Branding, web development, and marketing systems for local businesses.",
    relationshipLabel: "Ongoing project",
    category: "Branding • Web • Local Business",
    summary:
      "An ongoing local-business modernization project using Fancy Car Wash as the active rebrand: visual identity, website development, marketing structure, and operational polish before public launch.",
    tags: ["Branding", "Web Design", "Marketing Systems", "Local Business"],
    href: "https://fancy-car-wash.vercel.app",
    image: "/images/projects/fancy-car-wash-logo.svg",
    darkImage: "/images/projects/fancy-car-wash-logo-dark.svg",
    featured: true
  },
  {
    slug: "car-wash-guys",
    title: "Car Wash Guys",
    eyebrow: "Active client work",
    subtitle: "Web development, branding, and local business systems.",
    relationshipLabel: "Client system",
    category: "Web Development • Branding • Operations",
    summary:
      "An active client project focused on building a sharper web presence, brand system, and local-business infrastructure for service operations.",
    tags: ["Web Development", "Branding", "Client Work", "Operations"],
    image: "/images/projects/car-wash-guys-system.svg",
    darkImage: "/images/projects/car-wash-guys-system.svg",
    featured: true
  }
];
