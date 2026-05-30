import type { ContactItem, FeatureItem, SocialLink } from "@/lib/types";

export const siteConfig = {
  name: "MUHA",
  title: "MUHA",
  description:
    "MUHA is a warm editorial portfolio for systems, design, technology, branding, and photography.",
  location: "Ann Arbor · Chicago",
  email: "muharafi@umich.edu",
  linkedIn: "https://www.linkedin.com/in/muharafiq",
  github: "https://github.com/mohabbis",
  portfolio: "https://muharafiq.com",
  availability: "Strategy, product, and creative technology.",
  hero: {
    eyebrow: "〽️UHA",
    headline: "Leaving every room a little brighter.",
    subheadline: "Strategy, product, and creative technology through a restrained editorial lens.",
    primaryCta: {
      label: "View Projects",
      href: "/portfolio"
    },
    secondaryCta: {
      label: "Gallery",
      href: "/gallery"
    }
  },
  about: {
    intro: "I enjoy building systems that feel thoughtful, useful, and well crafted.",
    paragraphs: [
      "The work sits across product, interiors, smart-home infrastructure, visual systems, web design, and photography, tied together by restraint, clarity, and execution."
    ],
    strengths: []
  },
  focusAreas: {
    title: "Selected practice",
    bullets: [
      "Systems that make complex environments feel clear.",
      "Visual identities with warmer, more deliberate first impressions.",
      "Interfaces that prioritize taste, structure, and usability.",
      "Photography treated as atmosphere, not explanation."
    ]
  }
};

export const highlights: FeatureItem[] = [
  {
    title: "Frame",
    description: "Clarify the structure before shaping the surface."
  },
  {
    title: "Build",
    description: "Turn ideas into usable systems and polished interfaces."
  },
  {
    title: "Polish",
    description: "Refine until the work feels quiet, useful, and resolved."
  }
];

export const workingPrinciples: FeatureItem[] = [
  {
    title: "Taste",
    description: "Keep the work restrained, intentional, and visually resolved."
  },
  {
    title: "Systems",
    description: "Build structures that make the next decision easier."
  },
  {
    title: "Execution",
    description: "Move from concept to production without losing the detail."
  }
];

export const contactItems: ContactItem[] = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    note: "Projects, collaborations, and thoughtful work."
  },
  {
    label: "LinkedIn",
    value: "LinkedIn",
    href: siteConfig.linkedIn,
    note: "Selected work and updates."
  },
  {
    label: "Portfolio",
    value: "muharafiq.com",
    href: siteConfig.portfolio,
    note: "Main site and selected project archive."
  }
];

export const socialLinks: SocialLink[] = [
  {
    label: "LinkedIn",
    href: siteConfig.linkedIn
  },
  {
    label: "Email",
    href: `mailto:${siteConfig.email}`
  },
  {
    label: "Portfolio",
    href: siteConfig.portfolio
  }
];