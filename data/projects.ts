import type { ProjectItem } from "@/lib/types";

export const projects: ProjectItem[] = [
  {
    slug: "lumen",
    title: "Lumen",
    eyebrow: "Main project",
    subtitle: "A polished smart-home interface with the architecture documented inside the same ecosystem.",
    relationshipLabel: "Main project",
    systemRole: "interface",
    category: "Product · Smart Home · Architecture",
    summary:
      "Lumen is the production-facing smart-home experience for rooms, lights, scenes, sensors, and routines. The underlying architecture sits inside Lumen as a technical layer rather than as a separately branded project.",
    tags: ["Product", "Smart Home", "Design", "Architecture"],
    href: "https://lumen.muharafiq.com",
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
      "An active branding and web study across local car wash businesses, including Fancy Car Wash and Car Wash Guys: identity, web presence, marketing structure, service clarity, and operational polish.",
    tags: ["Branding", "Web Design", "Marketing", "Local Business"],
    href: "https://fancycarwash.com",
    image: "/images/projects/fancy-car-wash-logo.svg",
    darkImage: "/images/projects/fancy-car-wash-logo-dark.svg",
    featured: true
  },
  {
    slug: "alumni-infrastructure",
    title: "Alumni Infrastructure & Data Systems",
    eyebrow: "Backend infrastructure",
    subtitle: "Supabase, SQL, and operational systems for continuity, records, and alumni workflows.",
    relationshipLabel: "Infrastructure build",
    category: "Backend · CRM · DevOps",
    summary:
      "A private backend and data-operations build focused on structured alumni records, intake workflows, restricted notes, role-based access, and continuity tooling. The public ASIG-725 site remains the controlled front-facing layer; the portfolio framing emphasizes the database, DevOps, IT integration, and CRM architecture behind it.",
    tags: ["Supabase", "PostgreSQL", "CRM", "DevOps"],
    href: "https://asig-725.vercel.app/",
    image: "/images/projects/lumen-thumbnail.svg",
    darkImage: "/images/projects/lumen-thumbnail-dark.svg",
    featured: true
  }
];
