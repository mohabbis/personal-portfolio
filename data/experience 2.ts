import type { ExperienceItem } from "@/lib/types";

export const experiences: ExperienceItem[] = [
  {
    title: "Product + Software Builder",
    organization: "Independent Case Studies",
    location: "Chicago / Michigan",
    period: "Current",
    logoLabel: "Portfolio",
    summary:
      "Building case-study style work that blends structured problem solving, stakeholder communication, and high-quality execution.",
    bullets: [
      "Translate vague goals into a scoped plan, clear assumptions, and a deliverable narrative (problem → approach → result).",
      "Ship polished web experiences with React/Next.js/TypeScript; focus on readability, accessibility, and performance basics.",
      "Create artifacts that help decision-making: one-pagers, structured write-ups, and demo-ready prototypes."
    ],
    tags: ["Problem Structuring", "Next.js", "TypeScript"]
  },
  {
    title: "Smart-Home Product Case Study",
    organization: "MuHome",
    location: "Personal Project",
    period: "In Progress",
    logoLabel: "MuHome",
    summary:
      "Designing a smart-home interface that reduces “state confusion” and improves trust in routines and device control.",
    bullets: [
      "Define success metrics and KPIs (placeholders, e.g., routine completion time reduced by X% — placeholder) to guide design decisions.",
      "Map user journeys and failure modes (offline devices, conflicting automations, unclear permissions) to inform the interface hierarchy.",
      "Prototype flows that prioritize fast scanning, error recovery, and clear system status."
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
      "Using visual direction to communicate product work more clearly: sequencing, editing, and consistent brand tone.",
    bullets: [
      "Curate visuals to support comprehension (establish context quickly, reduce distraction, and reinforce key themes).",
      "Maintain consistent standards for color, contrast, and pacing across stills and clips."
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
      "Testing hardware-adjacent ideas and automation workflows to understand system constraints and user trade-offs.",
    bullets: [
      "Prototype small tools and control-surface concepts; document what scales vs. what breaks in real environments.",
      "Explore device ecosystems (smart lighting, NFC tooling) to inform practical product design decisions."
    ],
    tags: ["Hardware", "Tools", "Prototyping"]
  }
];
