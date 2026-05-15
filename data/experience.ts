import type { ExperienceItem } from "@/lib/types";

export const experiences: ExperienceItem[] = [
  {
    title: "Independent Projects",
    organization: "Self-directed",
    location: "Chicago / Michigan",
    period: "Current",
    logoLabel: "Projects",
    summary:
      "Scoped, built, and shipped three production projects across web, desktop, and IoT.",
    bullets: [
      "Built Fancy Car Wash — live marketing site for a Milwaukee car wash business, handling design through deployment.",
      "Built MuHome — local-first desktop app unifying smart home control across Hue, Govee, Kasa, and Home Assistant.",
      "Built this portfolio — designed and coded from scratch, written to work for both technical and non-technical readers."
    ],
    tags: ["Next.js", "Tauri", "TypeScript", "React"]
  },
  {
    title: "MuHome — Smart Home Dashboard",
    organization: "MuHome",
    location: "Personal Project",
    period: "In Progress",
    logoLabel: "MuHome",
    summary:
      "Built a desktop app that makes smart home device status clear at a glance.",
    bullets: [
      "Identified the core problem: smart home apps show data but make it hard to understand what's actually happening.",
      "Built a unified dashboard for Hue, Govee, Kasa, and Home Assistant with clear device status and manual controls.",
      "Shipped a working local-first version with Tauri and React; expanding toward whole-home automation."
    ],
    tags: ["Tauri", "React", "TypeScript", "Home Assistant"]
  },
  {
    title: "Personal Portfolio",
    organization: "muharafiq.com",
    location: "Next.js",
    period: "Ongoing",
    logoLabel: "Web",
    summary:
      "Designed and built a portfolio site that works for both technical reviewers and non-technical clients.",
    bullets: [
      "Designed the visual system, typography, and layout from scratch.",
      "Built with Next.js, TypeScript, and Tailwind CSS — live at muharafiq.com.",
      "Written so the work is clear without needing a technical background to follow."
    ],
    tags: ["Next.js", "TypeScript", "Tailwind CSS"]
  },
  {
    title: "Technical Foundations",
    organization: "University of Michigan",
    location: "Ann Arbor, MI",
    period: "Current",
    logoLabel: "UMich",
    summary:
      "Applied software tools across coursework and project work.",
    bullets: [
      "Working across TypeScript, Python, and SQL depending on what the project needs.",
      "Focus on clean assumptions, clear outputs, and work that can be explained without overcomplication."
    ],
    tags: ["Python", "SQL", "TypeScript"]
  }
];
