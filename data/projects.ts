import type { ProjectItem } from "@/lib/types";

export const projects: ProjectItem[] = [
  {
    slug: "lumen",
    title: "Lumen",
    eyebrow: "Featured smart-home ecosystem",
    subtitle: "A polished smart-home interface built from the Muhome automation architecture.",
    relationshipLabel: "Powered by Muhome",
    systemRole: "interface",
    category: "Product • Smart Home • Interface",
    summary:
      "A polished SwiftUI smart-home experience designed around clarity, warmth, and control. Built on the Muhome architecture: a connected automation framework linking HomeKit, Govee, Cync, motion sensing, and room-level control logic.",
    tags: ["Product", "Smart Home", "SwiftUI", "HomeKit", "Automation"],
    href: "https://lumen-idpz.vercel.app",
    image: "/images/projects/lumen-thumbnail.svg",
    darkImage: "/images/projects/lumen-thumbnail-dark.svg",
    featured: true
  },
  {
    slug: "muhome",
    title: "Muhome",
    eyebrow: "System layer",
    subtitle: "The architecture behind the Lumen interface.",
    relationshipLabel: "Architecture behind Lumen",
    systemRole: "foundation",
    category: "Architecture • Automation • Infrastructure",
    summary:
      "The underlying smart-home system behind Lumen: device mapping, automation logic, lighting scenes, motion behavior, and infrastructure planning.",
    tags: ["Architecture", "Automation", "HomeKit", "Govee", "Cync"],
    href: "https://muhome-muharafiq.vercel.app",
    image: "/images/projects/lumen-thumbnail.svg",
    darkImage: "/images/projects/lumen-thumbnail-dark.svg",
    featured: true
  },
  {
    slug: "modern-branding-local-businesses",
    title: "Modern Branding for Local Businesses",
    category: "Branding • Identity • Web",
    summary:
      "A broader branding and web-design case study for local service businesses, with Fancy Car Wash as one example inside the system.",
    tags: ["Brand Systems", "Web Design", "Local Business"],
    href: "https://fancy-car-wash.vercel.app",
    image: "/images/projects/fancy-car-wash-logo.svg",
    darkImage: "/images/projects/fancy-car-wash-logo-dark.svg",
    featured: true
  },
  {
    slug: "personal-portfolio",
    title: "Personal Portfolio",
    category: "Design System • Development • Brand",
    summary:
      "A living case study in editorial identity, design-system decisions, development structure, and visual evolution.",
    tags: ["Design System", "Next.js", "Editorial"],
    image: "/images/projects/portfolio-thumbnail.svg",
    darkImage: "/images/projects/portfolio-thumbnail-dark.svg",
    featured: true
  }
];