import type { ProjectItem } from "@/lib/types";

export const projects: ProjectItem[] = [
  {
    slug: "lumen",
    title: "Lumen",
    eyebrow: "The interface",
    subtitle: "A polished smart-home product with a dedicated case study.",
    systemRole: "interface",
    category: "Product · Smart Home · Interface",
    summary:
      "A SwiftUI smart-home experience for room-level control, lighting scenes, device relationships, and calmer automation.",
    tags: ["Product", "Smart home", "SwiftUI", "HomeKit", "Automation"],
    href: "/portfolio/lumen",
    image: "/images/projects/lumen-thumbnail.svg",
    darkImage: "/images/projects/lumen-thumbnail-dark.svg",
    featured: true
  },
  {
    slug: "modern-branding-local-businesses",
    title: "Modern Branding for Local Businesses",
    category: "Branding · Identity · Web",
    summary:
      "A broader case study in brand identity, web presence, and digital systems for local service businesses, beginning with Fancy Car Wash.",
    tags: ["Brand systems", "Web design", "Local business"],
    href: "https://fancy-car-wash.vercel.app",
    image: "/images/projects/fancy-car-wash-logo.svg",
    darkImage: "/images/projects/fancy-car-wash-logo-dark.svg",
    featured: true
  },
  {
    slug: "asig-alumni-infrastructure",
    title: "ASIG Alumni Infrastructure",
    category: "Systems · Data · Operations",
    summary:
      "A two-layer alumni system for public credibility, private relationship management, and long-term chapter operations.",
    tags: ["Infrastructure", "CRM", "Operations"],
    href: "https://asig-725.vercel.app/",
    image: "/images/projects/portfolio-thumbnail.svg",
    darkImage: "/images/projects/portfolio-thumbnail-dark.svg",
    featured: true
  },
  {
    slug: "design-systems",
    title: "Design Systems",
    category: "Identity · Interface · Standards",
    summary:
      "Reusable visual language, components, typography, and interaction rules for making digital work feel unified and deliberate.",
    tags: ["Design system", "Interface", "Brand"],
    image: "/images/projects/portfolio-thumbnail.svg",
    darkImage: "/images/projects/portfolio-thumbnail-dark.svg",
    featured: true
  },
  {
    slug: "personal-portfolio",
    title: "MUHA Archive",
    category: "Editorial · Development · Brand",
    summary:
      "A living editorial system for presenting design, photography, product work, technical systems, and visual fragments.",
    tags: ["Editorial", "Next.js", "Archive"],
    image: "/images/projects/portfolio-thumbnail.svg",
    darkImage: "/images/projects/portfolio-thumbnail-dark.svg",
    featured: true
  },
  {
    slug: "photography",
    title: "Photography",
    category: "Photography · Editorial · Atmosphere",
    summary:
      "A gallery of environments, objects, light, and quiet moments, presented with minimal explanation.",
    tags: ["Photography", "Editorial", "Atmosphere"],
    href: "/photography",
    image: "/images/projects/portfolio-thumbnail.svg",
    darkImage: "/images/projects/portfolio-thumbnail-dark.svg",
    featured: true
  }
];
