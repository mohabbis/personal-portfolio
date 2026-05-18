import type { ExperienceItem } from "@/lib/types";

export const experiences: ExperienceItem[] = [
  {
    title: "Strategy & Brand Consultant",
    organization: "Fancy Car Wash",
    location: "Milwaukee, Wisconsin",
    period: "2026 — Ongoing",
    logoLabel: "FCW",
    summary:
      "Led end-to-end strategy and execution for a local service business repositioning in a competitive market, from problem definition to live product.",
    bullets: [
      "Diagnosed a positioning gap versus commodity competitors; structured a brand strategy around trust, cleanliness, and premium service differentiation.",
      "Delivered a live marketing site and visual identity system that translates the positioning strategy into a client-facing product."
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
      "Defined the product problem and success criteria before any interface work — a structured problem-framing exercise before solution design.",
      "Built a functional prototype with documented user research and explicit rationale for each design decision."
    ],
    tags: ["Product Strategy", "User Research", "Systems Design", "Prototyping"]
  },
  {
    title: "Communications & Positioning Strategy",
    organization: "muharafiq.com",
    location: "Self-Directed",
    period: "Ongoing",
    logoLabel: "MR",
    summary:
      "Developed a positioning strategy and portfolio communications system designed to work across audiences, not just developers.",
    bullets: [
      "Developed a positioning strategy spanning strategy, operations, and product — differentiated and internally consistent across audiences.",
      "Structured case studies to communicate problem, approach, and outcome clearly for decision-maker audiences."
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
      "Building rigorous analytical skills across quantitative methods, strategic frameworks, and structured problem-solving.",
    bullets: [
      "Structured decomposition and hypothesis-driven thinking applied across economics, statistics, and organizational strategy coursework.",
      "Developing proficiency in quantitative modeling, competitive analysis, and evidence-based argumentation."
    ],
    tags: ["Analytics", "Python", "SQL", "Economics", "Strategy"]
  }
];
