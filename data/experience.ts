import type { ExperienceItem } from "@/lib/types";

export const experiences: ExperienceItem[] = [
  {
    title: "Brand & Digital Strategy",
    organization: "Fancy Car Wash",
    location: "Milwaukee, Wisconsin",
    period: "2024",
    logoLabel: "FCW",
    summary:
      "Led end-to-end brand transformation for family-owned car wash to capture premium market positioning.",
    bullets: [
      "Reframed positioning from 'cheap wash' to 'premium experience' in Milwaukee market.",
      "Built brand system (identity, messaging, visual language) validated through customer feedback.",
      "Delivered full-stack marketing site with booking flow."
    ],
    tags: ["Brand Strategy", "Go-to-Market", "Client Delivery", "Web"]
  },
  {
    title: "Product Strategy & Design",
    organization: "MuHome",
    location: "Self-Directed",
    period: "2024 — Present",
    logoLabel: "MuHome",
    summary:
      "Building smarter home interfaces by mapping pain points to systematic improvements.",
    bullets: [
      "Identified key friction points in existing smart-home apps through user interactions.",
      "Scoped MVP around core routines vs. feature checklist approach—reducing complexity.",
      "Prototyped and tested with early adopters."
    ],
    tags: ["Product Strategy", "UX Research", "Systems Thinking", "Prototyping"]
  },
  {
    title: "Portfolio & Editorial Design",
    organization: "muharafiq.com",
    location: "Self-Directed",
    period: "2024 — Present",
    logoLabel: "MR",
    summary:
      "Designed and built a portfolio that communicates value faster than traditional formats.",
    bullets: [
      "Reframed personal brand around business outcomes vs. just design work.",
      "Built Next.js site from scratch.",
      "Portfolio generates inquiries and serves as the main calling card."
    ],
    tags: ["Product Design", "Web Performance", "Writing", "Next.js"]
  },
  {
    title: "Strategic Thinking & Leadership",
    organization: "University of Michigan",
    location: "Ann Arbor, Michigan",
    period: "2022 — Present",
    logoLabel: "UMich",
    logoImage: "/images/logos/michigan-wolverines.png",
    summary:
      "Developed structured problem-solving approach through academics, projects, and campus leadership.",
    bullets: [
      "Led cross-functional student initiatives with participants.",
      "Built frameworks for clear communication: writing, presentations, and stakeholder alignment.",
      "Translated complex ideas into actionable plans across projects and competitions."
    ],
    tags: ["Leadership", "Strategic Thinking", "Writing", "Problem Solving"]
  }
];
