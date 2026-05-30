import type { ProjectItem } from "@/lib/types";

export const projects: ProjectItem[] = [
  {
    slug: "muhome",
    title: "Muhome",
    eyebrow: "System architecture",
    subtitle: "The underlying smart-home framework behind Lumen.",
    relationshipLabel: "Foundation",
    systemRole: "foundation",
    category: "Smart Home · Architecture · Automation",
    summary:
      "A home-automation architecture for rooms, devices, scenes, sensors, routines, and infrastructure planning. Muhome is the technical foundation; Lumen is the polished interface built from it.",
    tags: ["Smart Home", "Architecture", "Automation", "Systems"],
    href: "https://muhome.muharafiq.com",
    image: "/images/projects/muhome-iot-system.svg",
    darkImage: "/images/projects/muhome-iot-system.svg",
    featured: true
  },
  {
    slug: "lumen",
    title: "Lumen",
    eyebrow: "Product interface",
    subtitle: "A polished SwiftUI smart-home app for rooms, lights, scenes, and routines.",
    relationshipLabel: "Interface",
    systemRole: "interface",
    category: "Product · Smart Home · Creative Technology",
    summary:
      "A consumer-facing smart-home experience shaped around warmth, clarity, and calm control. Designed as the interface layer for the broader Muhome system.",
    tags: ["Product", "Smart Home", "Design", "HomeKit"],
    href: "https://lumen.muharafiq.com",
    image: "/images/projects/lumen-iot-interface.svg",
    darkImage: "/images/projects/lumen-iot-interface.svg",
    featured: true
  },
  {
    slug: "modern-branding-local-businesses",
    title: "Modern Branding for Local Businesses",
    eyebrow: "Client work",
    subtitle: "Visual identity and web systems for service businesses.",
    relationshipLabel: "Client work",
    category: "Branding · Web · Local Business",
    summary:
      "A growing body of local-business modernization work across identity, web presence, marketing structure, and operational polish.",
    tags: ["Branding", "Web Design", "Marketing", "Local Business"],
    href: "https://fancycarwash.com",
    image: "/images/projects/fancy-car-wash-logo.svg",
    darkImage: "/images/projects/fancy-car-wash-logo-dark.svg",
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
    tags: ["Supabase", "PostgreSQL", "CRM", "Operations"],
    href: "https://asig-725.vercel.app/",
    image: "/images/projects/alumni-operations-system.svg",
    darkImage: "/images/projects/alumni-operations-system.svg",
    featured: true
  },
  {
    slug: "car-wash-guys",
    title: "Car Wash Guys",
    eyebrow: "Client work",
    subtitle: "A sharper service-business web presence.",
    relationshipLabel: "Client work",
    category: "Branding · Web · Local Business",
    summary:
      "Local-business modernization work focused on a cleaner web presence, clearer service structure, and stronger brand system.",
    tags: ["Branding", "Web Design", "Client Work", "Operations"],
    image: "/images/projects/car-wash-guys-logo.svg",
    darkImage: "/images/projects/car-wash-guys-logo-dark.svg",
    featured: true
  }
];
