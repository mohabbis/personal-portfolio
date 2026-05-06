import type { ProjectItem } from "@/lib/types";
export const projects: ProjectItem[] = [
  {
    slug: "muhome",
    title: "MuHome",
    category: "Smart Home App",
    summary:
      "A smart-home app concept for clearer device state, routines, and manual control.",
    impact:
      "The goal is simple: make smart-home control feel less messy and more trustworthy.",
    tags: ["Next.js", "Smart Home", "Product UX"],
    image: "/images/projects/project-placeholder-1.svg",
    featured: true,
    href: "/portfolio/muhome"
  },
  {
    slug: "personal-portfolio",
    title: "Muhammad Rafiq Portfolio",
    category: "Web Experience",
    summary:
      "This site, built as a cleaner way to present my projects, photos, and experience.",
    impact:
      "Dark UI, reusable components, tighter copy, and a photo-led visual system.",
    tags: ["React", "Next.js", "Design"],
    image: "/contact-showcase/photos/chicago-skyline-light.jpeg",
    featured: true
  },
  {
    slug: "automotive-media-system",
    title: "Automotive Media System",
    category: "Creative Technology",
    summary:
      "Automotive stills and short motion studies used as the visual backbone of the site.",
    impact:
      "The photos make the portfolio feel more personal and less like a template.",
    tags: ["Photography", "Video", "Media"],
    image: "/images/gallery/range-rover-front.jpeg",
    featured: true
  },
  {
    slug: "connected-device-playground",
    title: "Connected Device Playground",
    category: "Systems Experiment",
    summary:
      "A small lab for hardware-adjacent ideas, smart-home controls, and automation workflows.",
    impact:
      "A place to test ideas before turning them into polished product screens.",
    tags: ["Hardware", "Embedded C", "Automation", "Prototyping"],
    image: "/nfc/flipper-image.jpeg",
    featured: true,
    href: "/portfolio/connected-device-playground"
  }
];
