import type { ExperienceItem } from "@/lib/types";

export const experiences: ExperienceItem[] = [
  {
    title: "Software + Product Projects",
    organization: "Independent Work",
    location: "Chicago / Michigan",
    period: "Current",
    logoLabel: "Portfolio",
    summary: "Projects, product, frontend.",
    bullets: [
      "Turn ideas into pages and flows.",
      "Build with React, Next.js, and TypeScript.",
      "Keep the story clear."
    ],
    tags: ["Product", "Next.js", "TypeScript"]
  },
  {
    title: "Smart-Home Product Case Study",
    organization: "MuHome",
    location: "Personal Project",
    period: "In Progress",
    logoLabel: "MuHome",
    summary: "Smart-home UI.",
    bullets: [
      "Show device status clearly.",
      "Prototype simple control flows.",
      "Keep the scope tight."
    ],
    tags: ["Smart Home", "UX", "Automation"]
  },
  {
    title: "Portfolio Development",
    organization: "Personal Website",
    location: "Next.js",
    period: "Ongoing",
    logoLabel: "Web",
    summary: "This portfolio.",
    bullets: [
      "Keep the layout readable.",
      "Make projects easy to scan."
    ],
    tags: ["Next.js", "Content", "Design"]
  },
  {
    title: "Technical Problem Solving",
    organization: "Learning + Practice",
    location: "Coursework and Projects",
    period: "Current",
    logoLabel: "Tech",
    summary: "Practice and tooling.",
    bullets: [
      "Use the right tool for the job.",
      "Keep assumptions and output clear."
    ],
    tags: ["Python", "SQL", "Analysis"]
  }
];
