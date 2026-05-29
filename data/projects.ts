import type { ProjectItem } from "@/lib/types";

export const projects: ProjectItem[] = [
  {
    slug: "lumen",
    title: "Lumen",
    eyebrow: "Flagship product",
    subtitle: "A polished smart-home interface built from the Muhome automation architecture.",
    relationshipLabel: "Powered by Muhome",
    systemRole: "interface",
    category: "Product • Smart Home • Interface",
    summary:
      "A polished SwiftUI smart-home experience designed around clarity, warmth, and control. Built on the Muhome architecture: a connected automation framework linking HomeKit, Govee, Cync, motion sensing, and room-level control logic.",
    tags: ["Product", "Smart Home", "SwiftUI", "HomeKit", "Automation"],
    href: "https://lumen-idpz.vercel.app",
    image: "/images/projects/lumen-iot-interface.svg",
    darkImage: "/images/projects/lumen-iot-interface.svg",
    featured: true
  },
  {
    slug: "muhome",
    title: "Muhome",
    eyebrow: "System layer",
    subtitle: "The automation architecture behind Lumen.",
    relationshipLabel: "Architecture behind Lumen",
    systemRole: "foundation",
    category: "Architecture • Automation • Infrastructure",
    summary:
      "The automation architecture behind Lumen: device mapping, room-level logic, lighting scenes, motion behavior, and infrastructure planning for a calmer smart-home experience.",
    tags: ["Architecture", "Automation", "HomeKit", "Govee", "Cync"],
    href: "https://muhome-muharafiq.vercel.app",
    image: "/images/projects/muhome-iot-system.svg",
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
    href: "/gallery",
    image: "/images/projects/portfolio-thumbnail.svg",
    darkImage: "/images/projects/portfolio-thumbnail-dark.svg",
    featured: true
  }
];
