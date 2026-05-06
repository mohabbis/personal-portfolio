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
    title: "Visual Storytelling",
    organization: "Photography and Motion",
    location: "Portfolio Media",
    period: "Ongoing",
    logoLabel: "Photo",
    summary:
      "Using photography and short clips to give the portfolio a stronger visual style.",
    bullets: [
      "Edit and sequence car photos so the page feels intentional.",
      "Keep color, contrast, and pacing consistent across stills and clips."
    ],
    tags: ["Photography", "Video", "Direction"]
  },
  {
    title: "Connected Systems Lab",
    organization: "Device + Tooling Experiments",
    location: "Personal Systems",
    period: "Exploring",
    logoLabel: "Lab",
    summary:
      "Testing small hardware and automation ideas to see what is useful in practice.",
    bullets: [
      "Prototype small control-surface ideas and document what works.",
      "Explore smart lighting, NFC tooling, and device workflows to understand the real constraints."
    ],
    tags: ["Hardware", "Tools", "Prototyping"]
  }
];
