import type { ExperienceItem } from "@/lib/types";

export const experiences: ExperienceItem[] = [
  {
    title: "Frontend Builder",
    organization: "Independent Portfolio Work",
    location: "Michigan",
    period: "Current",
    logoLabel: "Portfolio",
    summary:
      "Building polished web experiences with React, Next.js, TypeScript, and Tailwind.",
    bullets: [
      "Focused on UI quality, responsive layout, and strong visual presentation."
    ],
    tags: ["React", "Next.js", "TypeScript"]
  },
  {
    title: "Smart-Home Concept",
    organization: "MuHome",
    location: "Personal Project",
    period: "In Progress",
    logoLabel: "MuHome",
    summary:
      "Designing MuHome as a smart-home interface for routines, device state, and quick control.",
    bullets: [
      "Exploring how connected-device software can feel calmer and more readable."
    ],
    tags: ["Smart Home", "UX", "Automation"]
  },
  {
    title: "Automotive Visual Work",
    organization: "Photography and Cinematics",
    location: "Portfolio Media",
    period: "Ongoing",
    logoLabel: "Photo",
    summary:
      "Shooting and curating automotive photos and short clips for the portfolio.",
    bullets: [
      "Focused on composition, night scenes, cars, and atmosphere."
    ],
    tags: ["Photography", "Video", "Direction"]
  },
  {
    title: "Device Experiments",
    organization: "Device and Tooling Lab",
    location: "Personal Systems",
    period: "Exploring",
    logoLabel: "Lab",
    summary:
      "Testing hardware-adjacent ideas, local tools, and automation workflows.",
    bullets: [
      "Working with Flipper, smart lighting, and small control-surface ideas."
    ],
    tags: ["Hardware", "Tools", "Prototyping"]
  }
];
