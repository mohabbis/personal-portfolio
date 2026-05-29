import type { ProjectItem } from "@/lib/types";

export const projects: ProjectItem[] = [
  {
    slug: "lumen",
    title: "Lumen",
    eyebrow: "The interface",
    subtitle: "A polished smart-home interface built from the Muhome automation architecture.",
    relationshipLabel: "Built on Muhome",
    systemRole: "interface",
    category: "Product · Smart Home · Interface",
    summary:
      "A warm SwiftUI smart-home experience for room-level control, scenes, and automation.",
    tags: ["Product", "Smart home", "SwiftUI", "HomeKit", "Automation"],
    href: "https://lumen-idpz.vercel.app",
    image: "/images/projects/lumen-app-screenshot.png",
    darkImage: "/images/projects/lumen-app-screenshot.png",
    featured: true
  },
  {
    slug: "muhome",
    title: "Muhome",
    eyebrow: "The architecture",
    subtitle: "The automation architecture behind Lumen.",
    relationshipLabel: "Architecture behind Lumen",
    systemRole: "foundation",
    category: "Architecture · Automation · Infrastructure",
    summary:
      "Device mapping, room logic, lighting behavior, and infrastructure planning for a calmer smart-home system.",
    tags: ["Architecture", "Automation", "HomeKit", "Govee", "Cync"],
    href: "https://muhome-muharafiq.vercel.app",
    image: "/images/projects/muhome-architecture.png",
    darkImage: "/images/projects/muhome-architecture.png",
    featured: true
  },
  {
    slug: "modern-branding-local-businesses",
    title: "Modern Branding for Local Businesses",
    category: "Branding · Identity · Web",
    summary:
      "Brand identity and web systems for local service businesses, with Fancy Car Wash as the first public case study.",
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
      "A two-layer alumni infrastructure system for public credibility, private relationship management, and long-term chapter operations.",
    tags: ["Infrastructure", "CRM", "Operations"],
    href: "https://asig-725.vercel.app/",
    image: "/images/projects/portfolio-thumbnail.svg",
    darkImage: "/images/projects/portfolio-thumbnail-dark.svg",
    featured: true
  },
  {
    slug: "personal-portfolio",
    title: "Portfolio",
    category: "Design system · Development · Brand",
    summary:
      "A living editorial system for presenting design, photography, product work, and technical systems.",
    tags: ["Design system", "Next.js", "Editorial"],
    image: "/images/projects/portfolio-thumbnail.svg",
    darkImage: "/images/projects/portfolio-thumbnail-dark.svg",
    featured: true
  },
  {
    slug: "photography",
    title: "Photography",
    category: "Photography · Editorial · Atmosphere",
    summary:
      "Selected visual studies of environments, objects, light, and quiet moments.",
    tags: ["Photography", "Editorial", "Atmosphere"],
    href: "/photography",
    image: "/images/projects/portfolio-thumbnail.svg",
    darkImage: "/images/projects/portfolio-thumbnail-dark.svg",
    featured: true
  }
];