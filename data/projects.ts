import type { ProjectItem } from "@/lib/types";

export const projects: ProjectItem[] = [
  {
    slug: "lumen",
    title: "Lumen",
    eyebrow: "Flagship project",
    subtitle: "Polished SwiftUI smart-home interface built on the Muhome architecture.",
    relationshipLabel: "Flagship project",
    systemRole: "interface",
    category: "Product · Smart Home · Interface",
    summary:
      "Lumen is the production-facing app for rooms, lights, scenes, sensors, and routines. Muhome remains the underlying smart-home architecture: the device relationships, automation logic, and system model that informed the product.",
    tags: ["Product", "Smart Home", "SwiftUI", "Systems"],
    href: "https://lumen.muharafiq.com",
    ctaLabel: "View Lumen",
    image: "/images/projects/lumen-iot-interface.svg",
    darkImage: "/images/projects/muhome-iot-system.svg",
    imageFit: "contain",
    featured: true
  },
  {
    slug: "modern-branding-local-businesses",
    title: "Modern Branding for Local Businesses",
    eyebrow: "Client work",
    subtitle: "Identity · Web · Local business systems",
    relationshipLabel: "Active client study",
    category: "Identity · Web · Local business systems",
    summary:
      "A local-business branding and web project spanning visual identity, launch pages, Google Business setup, and public-facing digital presence. Fancy Car Wash is the live reference point; Car Wash Guys is an in-development extension for the same ownership group.",
    tags: ["Identity", "Web", "Local Business", "Launch Support"],
    href: "https://fancycarwash.com",
    ctaLabel: "View Fancy Car Wash",
    image: "/images/projects/fancy-car-wash-rendering.jpg",
    darkImage: "/images/projects/fancy-car-wash-rendering.jpg",
    proofLogos: [
      {
        label: "Fancy Car Wash",
        status: "Live reference",
        image: "/images/projects/fancy-car-wash-logo.svg"
      },
      {
        label: "Car Wash Guys",
        status: "Brand extension in development",
        image: "/images/projects/car-wash-guys-logo.svg"
      }
    ],
    featured: true
  },
  {
    slug: "alumni-infrastructure",
    title: "ASIG Alumni Infrastructure",
    eyebrow: "Operations system",
    subtitle: "Systems, CRM, operations, and controlled public/private information architecture.",
    relationshipLabel: "Infrastructure build",
    category: "Systems · CRM · Operations",
    summary:
      "A public-safe alumni operations build focused on cleaner records, intake workflows, role-aware information access, and continuity tooling. The public ASIG-725 site remains the controlled front-facing layer while private records stay out of the portfolio narrative.",
    tags: ["Systems", "CRM", "Operations", "Information Architecture"],
    href: "https://asig-725.vercel.app/",
    ctaLabel: "View Public Site",
    image: "/images/projects/alumni-operations-system.svg",
    darkImage: "/images/projects/alumni-operations-system.svg",
    imageFit: "contain",
    featured: true
  },
  {
    slug: "gallery-design-systems-photography",
    title: "Gallery, Design Systems & Photography",
    eyebrow: "Studio archive",
    subtitle: "Photography, interface fragments, and the visual system behind MUHA.",
    relationshipLabel: "Creative archive",
    category: "Gallery · Design Systems · Photography",
    summary:
      "An evolving studio layer for image-making, interface details, and visual systems: the atmosphere around the project work rather than a separate resume category.",
    tags: ["Photography", "Design Systems", "Editorial", "MUHA"],
    href: "/gallery",
    ctaLabel: "View Gallery",
    image: "/images/gallery/IMG_2372.jpg",
    darkImage: "/images/gallery/IMG_2372.jpg",
    featured: true
  }
];
