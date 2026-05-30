import type { ProjectItem } from "@/lib/types";

export const projects: ProjectItem[] = [
  {
    slug: "lumen",
    title: "Lumen",
    eyebrow: "Featured product",
    subtitle: "A polished SwiftUI smart-home app for rooms, lights, scenes, and routines.",
    relationshipLabel: "Interface + architecture",
    systemRole: "interface",
    category: "Product · Smart Home · Creative Technology",
    summary:
      "A consumer-facing smart-home experience paired with the underlying Muhome architecture: room logic, scenes, device management, motion behavior, and infrastructure planning folded into one unified product.",
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
    category: "CRM · Operations · Web Systems",
    summary:
      "A Supabase-backed CRM and public web platform designed to replace disconnected spreadsheets with structured alumni operations, relationship management, communications workflows, and institutional knowledge.",
    tags: ["Supabase", "PostgreSQL", "SQL", "CRM", "Operations", "Web Systems"],
    href: "https://asig-725.vercel.app/",
    image: "/images/projects/alumni-operations-system.svg",
    darkImage: "/images/projects/alumni-operations-system.svg",
    featured: true
  },
  {
    slug: "fancy-car-wash",
    title: "Fancy Car Wash",
    eyebrow: "Active client work",
    subtitle: "Modern branding for local businesses.",
    relationshipLabel: "Active client work",
    category: "Branding · Web · Local Business",
    summary:
      "Active local-business modernization work across visual identity, website development, marketing structure, and operational polish.",
    tags: ["Branding", "Web Design", "Marketing Systems", "Local Business"],
    href: "https://fancycarwash.com",
    image: "/images/projects/fancy-car-wash-logo.svg",
    darkImage: "/images/projects/fancy-car-wash-logo-dark.svg",
    featured: true
  },
  {
    slug: "car-wash-guys",
    title: "Car Wash Guys",
    eyebrow: "Active client work",
    subtitle: "Modern branding for local businesses.",
    relationshipLabel: "Active client work",
    category: "Branding · Web · Local Business",
    summary:
      "Active local-business modernization work focused on a sharper web presence, brand system, and service-business infrastructure.",
    tags: ["Branding", "Web Design", "Client Work", "Operations"],
    image: "/images/projects/car-wash-guys-logo.svg",
    darkImage: "/images/projects/car-wash-guys-logo-dark.svg",
    featured: true
  }
];
