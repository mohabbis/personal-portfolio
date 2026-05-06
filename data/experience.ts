import type { ExperienceItem } from "@/lib/types";

export const experiences: ExperienceItem[] = [
  {
    title: "Software + Product Projects",
    organization: "Independent Work",
    location: "Chicago / Michigan",
    period: "Current",
    logoLabel: "Portfolio",
    summary:
      "Building projects that combine product thinking, frontend development, and clear presentation.",
    bullets: [
      "Take loose ideas and turn them into scoped pages, flows, and prototypes.",
      "Build with React, Next.js, and TypeScript, with a focus on clean UI and easy-to-read code.",
      "Write the project story clearly so someone can understand what I built and why."
    ],
    tags: ["Product", "Next.js", "TypeScript"]
  },
  {
    title: "Smart-Home Product Case Study",
    organization: "MuHome",
    location: "Personal Project",
    period: "In Progress",
    logoLabel: "MuHome",
    summary:
      "Designing a smart-home interface around clearer device status, routines, and manual controls.",
    bullets: [
      "Map the moments where smart-home apps feel confusing, like offline devices or unclear automations.",
      "Prototype flows that make status easy to scan and controls easy to reach.",
      "Keep the idea grounded in what a real user would need before adding extra features."
    ],
    tags: ["Smart Home", "UX", "Automation"]
  },
  {
    title: "Portfolio Development",
    organization: "Personal Website",
    location: "Next.js",
    period: "Ongoing",
    logoLabel: "Web",
    summary:
      "Designing and building a professional portfolio that presents projects and experience clearly.",
    bullets: [
      "Refine copy, structure, and layout so the site works for recruiting and project review.",
      "Keep the design focused on readability, navigation, and a professional first impression."
    ],
    tags: ["Next.js", "Content", "Design"]
  },
  {
    title: "Technical Problem Solving",
    organization: "Learning + Practice",
    location: "Coursework and Projects",
    period: "Current",
    logoLabel: "Tech",
    summary:
      "Building a stronger foundation across software tools, systems thinking, and practical analysis.",
    bullets: [
      "Use TypeScript, Python, SQL basics, and spreadsheet work depending on what the project needs.",
      "Focus on clean assumptions, clear outputs, and work that can be explained without overcomplication."
    ],
    tags: ["Python", "SQL", "Analysis"]
  }
];
