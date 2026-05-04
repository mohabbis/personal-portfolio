import type { ProjectItem } from "@/lib/types";

export const projects: ProjectItem[] = [
  {
    slug: "muhome",
    title: "MuHome",
    category: "Smart Home App",
    summary:
      "A smart-home product concept built around visible device state, calmer routine control, and interfaces that make automation easier to trust.",
    impact:
      "MuHome is the clearest expression of Muhammad's product thinking: reduce ambiguity, surface the right controls at the right time, and make connected systems feel inspectable instead of opaque.",
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
      "The portfolio itself, designed as an editorial system for presenting software concepts, experience, media, and stronger project framing.",
    impact:
      "The site demonstrates front-end judgment through content hierarchy, reusable components, responsive pacing, and a more deliberate personal narrative.",
    tags: ["React", "Next.js", "Design"],
    image: "/images/projects/project-placeholder-2.svg",
    featured: true
  },
  {
    slug: "automotive-media-system",
    title: "Automotive Media System",
    category: "Creative Technology",
    summary:
      "A photography and short-form motion system that gives the portfolio a stronger visual signature than screenshots alone could provide.",
    impact:
      "It reinforces that presentation quality is part of the work: composition, pacing, and asset selection all affect whether a technical portfolio feels convincing.",
    tags: ["Photography", "Video", "Media"],
    image: "/images/gallery/range-rover-front.jpeg",
    featured: true
  },
  {
    slug: "connected-device-playground",
    title: "Connected Device Playground",
    category: "Systems Experiment",
    summary:
      "An experimentation space for Flipper Zero ideas, smart-home controls, phone states, and accessory workflows that may later become product features.",
    impact:
      "The point is to keep experimentation close to usable outcomes: quick launch paths, device inventory, routine-aware alerts, and a small embedded interface that shows product thinking at a different scale.",
    tags: ["Hardware", "Embedded C", "Automation", "Prototyping"],
    image: "/images/projects/project-placeholder-4.svg",
    featured: true,
    href: "/portfolio/connected-device-playground"
  }
];
