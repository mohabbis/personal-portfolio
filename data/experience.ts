import type { ExperienceItem } from "@/lib/types";

export const experiences: ExperienceItem[] = [
  {
    title: "Brand Strategy & Digital Execution",
    organization: "Fancy Car Wash",
    location: "Milwaukee, Wisconsin",
    period: "2024",
    logoLabel: "FCW",
    summary:
      "Led end-to-end strategy and execution for a local service business repositioning in a competitive market — from problem definition to live product.",
    bullets: [
      "Identified a positioning gap: most local competitors presented as commodity services; built a brand system around trust, cleanliness, and premium experience.",
      "Developed visual identity, messaging hierarchy, and information architecture before writing a line of code.",
      "Delivered a live marketing site with service pricing, location details, and a differentiated visual presence."
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
      "Applied structured product thinking to a smart-home system — mapping user pain points and writing a design brief before building anything.",
    bullets: [
      "Mapped failure points in existing smart-home apps: unclear device status, buried controls, unreliable automation feedback.",
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
      "Developed a positioning strategy and portfolio communications system — designed to work across audiences.",
    bullets: [
      "Defined a positioning that spans strategy, operations, design, and technology without diluting any of them.",
      "Structured case studies to communicate problem, approach, and outcome clearly for any audience.",
      "Built the site from scratch in Next.js with an editorial visual standard."
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
      "Building rigorous analytical skills across quantitative methods and data tools.",
    bullets: [
      "Hypothesis-driven analysis and structured problem decomposition.",
      "Python for data analysis, SQL fundamentals, and Excel for business modeling.",
      "Coursework in economics, statistics, operations management, and strategy."
    ],
    tags: ["Python", "SQL", "Economics", "Statistics"]
  }
];
