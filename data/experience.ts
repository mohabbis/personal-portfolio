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
      "Reframed positioning from 'cheap wash' to 'premium experience' in $200M Milwaukee market.",
      "Built brand system (identity, messaging, visual language) validated through 25+ customer interviews.",
      "Delivered full-stack marketing site with booking flow, driving 30% increase in online reservations."
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
      "Identified 3 key friction points in existing smart-home apps through 150+ user interactions analyzed.",
      "Scoped MVP around 5 core routines vs. feature checklist approach—reducing complexity by 60%.",
      "Prototyped and tested with early adopters; 40% faster routine completion vs. baseline apps."
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
      "Reframed personal brand around business outcomes vs. just design work — clarity increased conversion.",
      "Built Next.js site from scratch: 100% faster first-contentful-paint vs. previous version.",
      "3x longer average session duration and 50% more portfolio inquiries post-launch."
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
      "Led cross-functional student initiatives with 50+ participants; increased engagement by 40%.",
      "Built frameworks for clear communication: writing, presentations, and stakeholder alignment.",
      "Translated complex ideas into actionable plans across 15+ projects and competitions."
    ],
    tags: ["Leadership", "Strategic Thinking", "Writing", "Problem Solving"]
  }
];
