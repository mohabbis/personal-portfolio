import type { ProjectItem } from "@/lib/types";
export const projects: ProjectItem[] = [
  {
    slug: "muhome",
    title: "MuHome",
    category: "Product Case Study • Smart Home",
    summary:
      "A smart-home app concept focused on trustworthy device state, faster routine execution, and low-friction manual control.",
    impact:
      "Framed an ambiguous UX problem (smart-home “state confusion”) into a product brief with success metrics (placeholders), user flows, and a prototype-level UI system.",
    tags: ["Next.js", "Smart Home", "Product UX"],
    image: "/images/projects/project-placeholder-1.svg",
    featured: true,
    href: "/portfolio/muhome"
  },
  {
    slug: "personal-portfolio",
    title: "Muhammad Rafiq Portfolio",
    category: "Case Study • Communication + Systems",
    summary:
      "A Next.js App Router portfolio designed to communicate work like a consultant: clear story, fast scanning, and crisp evidence.",
    impact:
      "Built a reusable section/card system, tightened messaging for recruiting, and optimized information architecture to reduce cognitive load for a first-time reader.",
    tags: ["React", "Next.js", "Design"],
    image: "/contact-showcase/photos/chicago-skyline-light.jpeg",
    featured: true
  },
  {
    slug: "automotive-media-system",
    title: "Automotive Media System",
    category: "Visual Storytelling",
    summary:
      "A curated set of stills and short motion studies used to strengthen narrative, pacing, and brand consistency across the portfolio.",
    impact:
      "Applied consistent creative direction (editing, sequencing, tone) so visual work supports the message instead of distracting from it.",
    tags: ["Photography", "Video", "Media"],
    image: "/images/gallery/range-rover-front.jpeg",
    featured: true
  },
  {
    slug: "connected-device-playground",
    title: "Connected Device Playground",
    category: "Technical Experimentation • IoT",
    summary:
      "A sandbox for hardware-adjacent concepts: smart-home control surfaces, automation workflows, and rapid prototyping.",
    impact:
      "Used lightweight prototypes to de-risk ideas before investing in full product design; documented learnings and next steps like a mini engagement (metrics placeholders where relevant).",
    tags: ["Hardware", "Embedded C", "Automation", "Prototyping"],
    image: "/nfc/flipper-image.jpeg",
    featured: true,
    href: "/portfolio/connected-device-playground"
  }
];
