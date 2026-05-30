import type { ProjectItem } from "@/lib/types";

export const projects: ProjectItem[] = [
  {
    slug: "lumen",
    title: "Lumen",
    eyebrow: "Flagship product",
    subtitle: "A polished smart-home interface built on a connected automation architecture.",
    relationshipLabel: "Interface + architecture",
    systemRole: "interface",
    category: "Product • Smart Home • Automation",
    summary:
      "A polished SwiftUI smart-home experience paired with the underlying automation architecture: HomeKit, Govee, Cync, motion sensing, room-level logic, scenes, and infrastructure planning for calmer control.",
    tags: ["Product", "Smart Home", "SwiftUI", "HomeKit", "Automation"],
    href: "https://lumen.muharafiq.com",
    image: "/images/projects/lumen-iot-interface.svg",
    darkImage: "/images/projects/muhome-iot-system.svg",
    featured: true
  },
  {
    slug: "modern-branding-local-businesses",
    title: "Modern Branding for Local Businesses",
    category: "Branding • Identity • Web",
    summary:
      "Brand identity and web systems for local service businesses, with Fancy Car Wash as one example inside a broader operating system for modern local brands.",
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
      "A living editorial system for presenting product, design, photography, and technical work with a restrained visual language.",
    tags: ["Design System", "Next.js", "Editorial"],
    image: "/images/projects/portfolio-thumbnail.svg",
    darkImage: "/images/projects/portfolio-thumbnail-dark.svg",
    featured: true
  },
  {
    slug: "photography",
    title: "Photography",
    category: "Photography • Editorial • Atmosphere",
    summary:
      "Selected visual studies of environments, objects, light, and quiet moments, arranged like an editorial photography archive.",
    tags: ["Photography", "Editorial", "Atmosphere"],
    image: "/images/projects/portfolio-thumbnail.svg",
    darkImage: "/images/projects/portfolio-thumbnail-dark.svg",
    featured: true
  }
];
