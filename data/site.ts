import type { ContactItem, FeatureItem } from "@/lib/types";

export const siteConfig = {
  name: "Muhammad Rafiq",
  title: "Muhammad Rafiq | design, UI/UX & more",
  description:
    "Muhammad Rafiq is a design-focused student, sharpest in UI and UX, and curious about strategy, operations, technology, and AI.",
  location: "Ann Arbor · Chicago",
  email: "Muharafi@umich.edu",
  linkedIn: "https://www.linkedin.com/in/muharafiq",
  github: "https://github.com/mohabbis",
  portfolio: "https://www.muharafiq.com",
  availability: "Open to roles, projects, and conversations across design, strategy, and technology.",
  profileLine:
    "Design is what I do best: UI, UX, the feel of a thing. Strategy, operations, technology, and AI sit around it.",
  projectLinks: {
    lumen: "https://lumen.muharafiq.com",
    carWashGuys: "https://carwashguys.us"
  },
  hero: {
    headline: "I like the gap between a good idea and a working one.",
    subheadline:
      "Design is the craft I trust most. Strategy, operations, technology, and AI around it.",
    primaryCta: {
      label: "View Work",
      href: "/portfolio"
    },
    secondaryCta: {
      label: "About",
      href: "/about"
    }
  },
  about: {
    intro: "How I work.",
    paragraphs: [
      "Design is what I do best: UI, UX, and the details that decide how something feels. Around it I'm curious about strategy, operations, technology, and AI.",
      "Most of what's here started with a problem worth solving. I designed it, then built enough to prove the idea holds."
    ],
    strengths: []
  },
  focusAreas: {
    title: "Where I do my best work",
    bullets: [
      "Design & UI/UX: the details that decide how something feels.",
      "Strategy: the positioning and trade-offs most people skip past.",
      "Technology: software and AI where they genuinely move the work forward."
    ]
  }
};

export const highlights: FeatureItem[] = [
  {
    title: "Design & UI/UX",
    description: "The details that decide how something feels."
  },
  {
    title: "Strategy",
    description: "The positioning and trade-offs most people skip past."
  },
  {
    title: "Technology & AI",
    description: "Software and AI where they move things forward."
  }
];

export const workingPrinciples: FeatureItem[] = [
  {
    title: "Start with the question",
    description: "Nail what's being decided before anything else."
  },
  {
    title: "Keep it honest",
    description: "I'd rather show the work than oversell it."
  },
  {
    title: "Leave something usable",
    description: "Finish with something people can pick up and run with."
  }
];

export const contactItems: ContactItem[] = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}?subject=Role%20%2F%20Project%20%2F%20Research%20Inquiry`,
    note: "Roles, projects, research, and introductions."
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/muharafiq",
    href: siteConfig.linkedIn,
    note: "Background, experience, and updates."
  },
  {
    label: "GitHub",
    value: "github.com/mohabbis",
    href: siteConfig.github,
    note: "Code, projects, and what I'm building."
  }
];
