import type { ProjectItem } from "@/lib/types";

export const projects: ProjectItem[] = [
  {
    slug: "lumen",
    title: "Lumen",
    eyebrow: "Main project",
    subtitle: "A polished smart-home interface built on the Muhome architecture.",
    relationshipLabel: "Main project",
    systemRole: "interface",
    category: "Product · Smart Home · Architecture",
    summary:
      "Lumen is the production-facing smart-home experience. Muhome remains the supporting architecture for rooms, devices, scenes, sensors, routines, and infrastructure planning.",
    tags: ["Product", "Smart Home", "Design", "Architecture"],
    image: "/images/projects/lumen-iot-interface.svg",
    darkImage: "/images/projects/lumen-iot-interface.svg",
    featured: true
  },
  {
    slug: "modern-branding-local-businesses",
    title: "Modern Branding for Local Businesses",
    eyebrow: "Active study",
    subtitle: "Visual identity and web systems for local service businesses.",
    relationshipLabel: "Active client study",
    category: "Branding · Web · Local Business",
    summary:
      "An active study across Fancy Car Wash and Car Wash Guys: identity, web presence, marketing structure, service clarity, and operational polish for local service businesses.",
    tags: ["Branding", "Web Design", "Marketing", "Local Business"],
    image: "/images/projects/fancy-car-wash-logo.svg",
    darkImage: "/images/projects/fancy-car-wash-logo-dark.svg",
    featured: true
  }
];
