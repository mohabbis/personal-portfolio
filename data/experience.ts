import type { ExperienceItem } from "@/lib/types";

export const experiences: ExperienceItem[] = [
  {
    title: "Product-Minded Front-End Builder",
    organization: "Independent Portfolio Work",
    location: "Michigan",
    period: "Current",
    summary:
      "Builds polished web experiences that combine clear information architecture, reusable components, and responsive visual systems.",
    bullets: [
      "Uses React, Next.js, TypeScript, and Tailwind to move from rough concept to usable interface quickly.",
      "Focuses on the details that make a portfolio credible: copy hierarchy, image treatment, spacing, and route-level consistency.",
      "Keeps the app grounded in real content instead of generic placeholder sections."
    ],
    tags: ["React", "Next.js", "TypeScript"]
  },
  {
    title: "Smart-Home Product Exploration",
    organization: "MuHome",
    location: "Personal Project",
    period: "In Progress",
    summary:
      "Designs MuHome as a smart-home app that treats device state, routine flow, and manual actions as first-class product problems.",
    bullets: [
      "Frames smart bulbs, media devices, phone focus modes, and accessories as readable status instead of vague automation promises.",
      "Prioritizes low-noise controls that make sense for real home routines.",
      "Uses the project to explore how connected-device software can feel calmer and more trustworthy."
    ],
    tags: ["Smart Home", "UX", "Automation"]
  },
  {
    title: "Automotive Visual Work",
    organization: "Photography and Cinematics",
    location: "Portfolio Media",
    period: "Ongoing",
    summary:
      "Creates and curates automotive stills and short motion studies that make the portfolio feel more distinctive and visually complete.",
    bullets: [
      "Builds galleries around composition, pacing, and location variety rather than dumping raw assets onto the page.",
      "Uses video sections to show movement and atmosphere without overwhelming the main portfolio flow.",
      "Treats media presentation as part of the product experience."
    ],
    tags: ["Photography", "Video", "Direction"]
  },
  {
    title: "Hands-On Technical Experimentation",
    organization: "Device and Tooling Lab",
    location: "Personal Systems",
    period: "Exploring",
    summary:
      "Tests ideas across hardware-adjacent tools, local apps, and workflow automation so project concepts stay connected to real constraints.",
    bullets: [
      "Works with connected-device concepts including Flipper workflows, smart lighting, and local control surfaces.",
      "Looks for small product opportunities where a simple interface removes repeat manual effort.",
      "Keeps experiments pointed toward demos that can be shown, tested, and improved."
    ],
    tags: ["Hardware", "Tools", "Prototyping"]
  }
];
