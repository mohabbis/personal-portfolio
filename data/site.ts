import type { ContactItem, FeatureItem, SocialLink } from "@/lib/types";

export const siteConfig = {
  name: "MUHA",
  title: "Calm, clear, and considered systems.",
  description:
    "MUHA — a restrained editorial portfolio focused on refinement, flow, and intentional digital experiences.",
  location: "Chicago, Illinois",
  email: "muharafi@umich.edu",
  linkedIn: "https://www.linkedin.com/in/muharafiq",
  availability: "Living portfolio.",
  hero: {
    eyebrow: "Chicago ↔ Ann Arbor",
    headline: "Leaving every room a little brighter.",
    subheadline:
      "I like systems that feel calm, clear, and considered.",
    primaryCta: {
      label: "Selected Work",
      href: "/portfolio"
    },
    secondaryCta: null
  },
  about: {
    intro: "I like systems that feel calm, clear, and considered.",
    paragraphs: [
      "My work often revolves around refinement: simplifying complexity, improving flow, and making things feel more intentional."
    ],
    strengths: []
  },
  focusAreas: {
    title: "Selected practice",
    bullets: [
      "Simplifying complexity without flattening the feeling.",
      "Improving flow through structure, spacing, and restraint.",
      "Building systems that feel useful, durable, and intentional.",
      "Refining details until the final result feels resolved."
    ]
  }
};

export const highlights: FeatureItem[] = [
  {
    title: "Frame",
    description: "Structure before decoration."
  },
  {
    title: "Build",
    description: "Systems that feel clear and intentional."
  },
  {
    title: "Polish",
    description: "Refine until the work feels inevitable."
  }
];

export const workingPrinciples: FeatureItem[] = [
  {
    title: "Calm",
    description: "Reduce noise until the important parts have room."
  },
  {
    title: "Clear",
    description: "Make structure visible enough to guide without getting in the way."
  },
  {
    title: "Considered",
    description: "Let the final result reflect care, judgment, and restraint."
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
    value: "Professional background",
    href: siteConfig.linkedIn,
    note: "Selected work and updates."
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
  }
];
