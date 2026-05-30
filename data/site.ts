import type { ContactItem, FeatureItem, SocialLink } from "@/lib/types";

export const siteConfig = {
  name: "muharafiq",
  title: "muharafiq",
  description:
    "Portfolio of Muhammad Rafiq: product, strategy, and operations work across smart home, brand, and organizational systems.",
  location: "Ann Arbor · Chicago",
  email: "Muharafi@umich.edu",
  linkedIn: "https://www.linkedin.com/in/muharafiq",
  github: "https://github.com/mohabbis",
  portfolio: "https://muharafiq.com",
  availability: "Consulting, product strategy, operations, and design roles.",
  hero: {
    headline: "Leaving every room a little brighter.",
    subheadline:
      "Building products, designing systems, and solving operational problems across smart home, strategy, and design. I work at the intersection of product thinking, financial operations, and strategic clarity.",
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
    intro: "Building products and operations that make systems easier to understand and use.",
    paragraphs: [
      "I study financial operations and management at the University of Michigan, focused on how capital flows, how organizations make trade-offs under constraints, and how decisions made today shape what becomes possible tomorrow. History teaches that patterns repeat; financial management shows where the leverage points are.",
      "This combination informs how I approach product and operations work. I look for the underlying structure in problems. Why do users make the decisions they make? Where are the constraints? What information or tools would change the math? Then I work backward from outcomes to build the system that makes the right outcome easier to reach.",
      "In practice, this means I move across roles naturally. I design products because good design is applied operations. I do strategy and planning because that is financial operations at the organizational level. I write code because the most durable solutions are ones that scale without human overhead."
    ],
    strengths: []
  },
  focusAreas: {
    title: "Core interests",
    bullets: [
      "Consulting and strategy: helping organizations understand their bottlenecks and design operational or product changes that unlock growth or efficiency.",
      "Operations and finance: building systems, budgets, and processes that scale the work without proportional increases in overhead.",
      "Product design: interfaces and systems that make complexity accessible without oversimplifying.",
      "Technology and automation: smart home, web infrastructure, and automation logic that removes friction from repeated work."
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
    value: "linkedin.com/in/muharafiq",
    href: siteConfig.linkedIn,
    note: "Selected work and updates."
  },
  {
    label: "GitHub",
    value: "github.com/mohabbis",
    href: siteConfig.github,
    note: "Code and open-source projects."
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