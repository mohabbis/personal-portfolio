import type { ContactItem, FeatureItem, SocialLink } from "@/lib/types";

export const siteConfig = {
  name: "muharafiq",
  title: "muharafiq",
  description:
    "Portfolio of Muhammad Rafiq: product, brand, operations, and smart-home systems.",
  location: "Ann Arbor · Chicago",
  email: "Muharafi@umich.edu",
  linkedIn: "https://www.linkedin.com/in/muharafiq",
  github: "https://github.com/mohabbis",
  portfolio: "https://muharafiq.com",
  availability: "Strategy, design, systems, and creative technology conversations.",
  hero: {
    headline: "Leaving every room a little brighter.",
    subheadline:
      "A working studio for product, brand, systems, and atmosphere.",
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
    intro: "Building digital systems, brand work, and environments that make everyday experiences clearer.",
    paragraphs: [
      "Based between Chicago and Ann Arbor, I build across branding, digital experiences, operations, and smart-home systems.",
      "My work starts with structure: what needs to happen, where the friction is, and what would make the next decision easier. From there, I shape the interface, workflow, or visual system around the outcome.",
      "I move between strategy, design, and implementation because the strongest work usually needs all three. The goal is not just to make something look finished, but to make it useful, coherent, and easier to run."
    ],
    strengths: []
  },
  focusAreas: {
    title: "Core interests",
    bullets: [
      "Consulting and strategy: identifying bottlenecks and designing operational or product changes that improve the system.",
      "Operations and finance: building budgets, processes, and workflows that scale without unnecessary overhead.",
      "Product design: interfaces that make complex systems easier to understand and use.",
      "Technology and automation: smart home, web infrastructure, and automation logic that removes repeated friction."
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
    description: "Keep the work restrained, useful, and visually resolved."
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
    note: "Projects, collaborations, and useful introductions."
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/muharafiq",
    href: siteConfig.linkedIn,
    note: "Selected work and updates."
  },
  {
    label: "GitHub",
    value: "github.com/mohabbis",
    href: siteConfig.github,
    note: "Code and project infrastructure."
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
