import type { ProjectItem } from "@/lib/types";
export const projects: ProjectItem[] = [
  {
    slug: "muhome",
    title: "MuHome",
    category: "Smart Home App Concept",
    summary:
      "A smart-home app idea focused on making device status, routines, and manual controls easier to understand.",
    impact:
      "Turned a broad smart-home problem into a clearer product direction, UI flows, and a prototype-level interface.",
    tags: ["Next.js", "Smart Home", "Product UX"],
    image: "/images/projects/project-placeholder-1.svg",
    featured: true,
    href: "/portfolio/muhome"
  },
  {
    slug: "personal-portfolio",
    title: "Muhammad Rafiq Portfolio",
    category: "Website",
    summary:
      "This portfolio site, built in Next.js, to bring my projects, writing, and visuals into one place.",
    impact:
      "Built the pages, cards, content structure, and styling so the site feels like my work instead of a generic resume template.",
    tags: ["React", "Next.js", "Design"],
    image: "/contact-showcase/photos/chicago-skyline-light.jpeg",
    featured: true
  },
  {
    slug: "automotive-media-system",
    title: "Automotive Media System",
    category: "Photography + Video",
    summary:
      "A set of Range Rover and Porsche photos, plus short clips, used to give the site a stronger visual identity.",
    impact:
      "Edited and sequenced the media so it feels intentional, not like random photos dropped into a project page.",
    tags: ["Photography", "Video", "Media"],
    image: "/images/gallery/range-rover-front.jpeg",
    featured: true
  },
  {
    slug: "connected-device-playground",
    title: "Connected Device Playground",
    category: "Hardware Experiments",
    summary:
      "A sandbox for hardware-adjacent ideas, smart-home controls, NFC experiments, and small device workflows.",
    impact:
      "Used small prototypes to see what is actually useful before turning the idea into a bigger product direction.",
    tags: ["Hardware", "Embedded C", "Automation", "Prototyping"],
    image: "/nfc/flipper-image.jpeg",
    featured: true,
    href: "/portfolio/connected-device-playground"
  }
];
