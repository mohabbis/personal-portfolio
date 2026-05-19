import type { ExperienceItem } from "@/lib/types";

export const experiences: ExperienceItem[] = [
  {
    title: "Brand and Web",
    organization: "Fancy Car Wash",
    location: "Milwaukee, Wisconsin",
    period: "2024",
    logoLabel: "FCW",
    summary:
      "Led the brand and site for a Milwaukee car wash that wanted to feel clearer and more premium than the local default.",
    bullets: [
      "Built the brand system around trust, cleanliness, and a more premium feel.",
      "Shaped the messaging and information structure before writing code.",
      "Delivered a live marketing site with pricing, location details, and a calmer visual presence."
    ],
    tags: ["Brand Strategy", "Positioning", "Client Delivery", "Web"]
  },
  {
    title: "MuHome",
    organization: "MuHome",
    location: "Self-Directed",
    period: "In Progress",
    logoLabel: "MuHome",
    summary:
      "Shaping a smart-home interface around clearer status, simpler routines, and less friction.",
    bullets: [
      "Mapped where existing apps get noisy: unclear device status, buried controls, and unreliable automation feedback.",
      "Scoped the problem before touching interface work.",
      "Built a prototype centered on real routines instead of feature checklists."
    ],
    tags: ["Systems", "UX", "Creative Technology", "Prototyping"]
  },
  {
    title: "Personal Portfolio",
    organization: "muharafiq.com",
    location: "Self-Directed",
    period: "Ongoing",
    logoLabel: "MR",
    summary:
      "Designed a personal portfolio that feels more like an editorial object than a résumé.",
    bullets: [
      "Kept the point of view tight: strategy, design, systems, photography, and real projects.",
      "Wrote the site to feel direct and calm instead of over-explained.",
      "Built the site from scratch in Next.js with an editorial visual standard."
    ],
    tags: ["Editorial", "Positioning", "Writing", "Next.js"]
  },
  {
    title: "Ann Arbor",
    organization: "University of Michigan",
    location: "Ann Arbor, Michigan",
    period: "Current",
    logoLabel: "UMich",
    logoImage: "/images/logos/michigan-wolverines.png",
    summary:
      "Ann Arbor shaped how I work: curious, exacting, and comfortable moving between people, systems, and image.",
    bullets: [
      "Built habits around clear thinking, good writing, and working across different kinds of people.",
      "Stayed close to campus projects, student leadership, and practical problem solving.",
      "Learned to move from ideas to finished work without losing taste or pace."
    ],
    tags: ["Ann Arbor", "Leadership", "Writing", "Systems"]
  }
];
