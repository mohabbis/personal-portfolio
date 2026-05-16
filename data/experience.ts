import type { ExperienceItem } from "@/lib/types";

export const experiences: ExperienceItem[] = [
  {
    title: "Brand Strategy & Digital Execution",
    organization: "Fancy Car Wash",
    location: "Milwaukee, Wisconsin",
    period: "2026 — Ongoing",
    logoLabel: "FCW",
    summary:
      "Led end-to-end strategy and execution for a local service business repositioning in a competitive market, from problem definition to live product.",
    bullets: [
      "Identified a positioning gap against commodity competitors; built a brand system around trust, cleanliness, and premium experience.",
      "Delivered a live marketing site with a differentiated visual identity, service pricing, and location details."
    ],
    tags: ["Brand Strategy", "Positioning", "Client Delivery", "Web"]
  },
  {
    title: "Product Strategy & Systems Design",
    organization: "MuHome",
    location: "Self-Directed",
    period: "In Progress",
    logoLabel: "MuHome",
    summary:
      "Applied structured product thinking to a smart-home system: mapping user pain points and writing a design brief before building anything.",
    bullets: [
      "Scoped the product problem and defined success criteria before any interface work began.",
      "Built a functional prototype grounded in real user needs, with clear rationale for each interaction decision."
    ],
    tags: ["Product Strategy", "User Research", "Systems Design", "Prototyping"]
  },
  {
    title: "Personal Brand & Portfolio Strategy",
    organization: "muharafiq.com",
    location: "Self-Directed",
    period: "Ongoing",
    logoLabel: "MR",
    summary:
      "Developed a positioning strategy and portfolio communications system designed to work across audiences, not just developers.",
    bullets: [
      "Defined a positioning spanning strategy, operations, design, and technology without diluting any of them.",
      "Structured case studies to communicate problem, approach, and outcome clearly for a non-technical audience."
    ],
    tags: ["Brand Strategy", "Positioning", "Communications", "Next.js"]
  },
  {
    title: "Analytical & Quantitative Foundations",
    organization: "University of Michigan",
    location: "Ann Arbor, Michigan",
    period: "Current",
    logoLabel: "UMich",
    summary:
      "Building rigorous analytical skills across quantitative methods, case-based problem solving, and business data tools.",
    bullets: [
      "Analytical problem solving: structured decomposition, hypothesis-driven thinking, and quantitative framework application.",
      "Coursework spanning economics, statistics, operations management, and organizational strategy."
    ],
    tags: ["Analytics", "Python", "SQL", "Economics", "Strategy"]
  }
];
