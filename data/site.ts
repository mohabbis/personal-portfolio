import type { ContactItem, FeatureItem, SocialLink } from "@/lib/types";

export const siteConfig = {
  name: "Muhammad Rafiq",
  title: "Muhammad Rafiq — Strategy, operations, and polished execution.",
  description:
    "Muhammad Rafiq — Strategy-minded operator focused on structured problem solving, stakeholder coordination, and polished execution.",
  location: "Chicago, Illinois",
  email: "muharafi@umich.edu",
  linkedIn: "https://www.linkedin.com/in/muharafiq",
  availability: "Available for consulting, strategy, operations, and business analyst roles.",
  hero: {
    eyebrow: "Strategy · Operations · Storytelling",
    headline: "Leaving every room a little brighter.",
    subheadline:
      "I turn ambiguous problems into structured plans, clear recommendations, and polished client-facing work.",
    description:
      "A portfolio of strategy-led projects, operating systems, brand positioning, and visual storytelling.",
    primaryCta: {
      label: "View the work",
      href: "/portfolio"
    },
    secondaryCta: {
      label: "Get in touch",
      href: "/contact"
    }
  },
  about: {
    intro:
      "I care about work that is analytically grounded, clearly structured, and polished enough to earn trust.",
    paragraphs: [
      "My experience sits across strategy, operations, branding, and organizational leadership. I like taking messy situations, defining the real problem, aligning stakeholders, and carrying the work through to a finished outcome."
    ],
    strengths: [
      "Structured Problem Solving",
      "Stakeholder Communication",
      "Operational Execution",
      "Executive-Ready Storytelling"
    ]
  },
  whatIBring: {
    title: "What I bring",
    bullets: [
      "Strategy & analysis: problem framing, hypothesis-driven thinking, and clear recommendations.",
      "Operations & execution: process improvement, vendor coordination, and practical systems thinking.",
      "Stakeholder leadership: communication across competing priorities, constraints, and decision-makers.",
      "Brand & presentation: crisp narratives, polished visuals, and client-ready deliverables."
    ]
  }
};

export const highlights: FeatureItem[] = [
  {
    title: "Frame",
    description: "Define the right problem first. Clear framing creates better decisions, cleaner tradeoffs, and stronger recommendations."
  },
  {
    title: "Align",
    description: "Bring stakeholders, constraints, and resources into the same operating picture before moving into execution."
  },
  {
    title: "Deliver",
    description: "Translate strategy into polished outputs, from operating plans and brand systems to client-facing digital experiences."
  }
];

export const workingPrinciples: FeatureItem[] = [
  {
    title: "Structure creates clarity",
    description: "Strong ideas become more useful when they are organized clearly, communicated directly, and easy to act on."
  },
  {
    title: "Execution proves the thinking",
    description: "Good strategy has to survive implementation. Details, reliability, and follow-through matter."
  },
  {
    title: "Presentation changes outcomes",
    description: "The phrasing, sequence, visual system, and final polish shape whether work is merely complete or genuinely persuasive."
  }
];

export const contactItems: ContactItem[] = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    note: "Best for consulting, strategy, operations, or analyst opportunities."
  },
  {
    label: "LinkedIn",
    value: "Connect professionally",
    href: siteConfig.linkedIn,
    note: "My background and selected work."
  },
  {
    label: "Portfolio",
    value: "Explore selected work",
    href: "/portfolio",
    note: "Case studies across strategy, operations, systems, and brand positioning."
  },
  {
    label: "Photography",
    value: "View the gallery",
    href: "/photography",
    note: "Urban moments from Chicago and Ann Arbor."
  }
];

export const socialLinks: SocialLink[] = [
  {
    label: "LinkedIn",
    href: siteConfig.linkedIn
  },
  {
    label: "Portfolio",
    href: "/portfolio"
  },
  {
    label: "Photography",
    href: "/photography"
  },
  {
    label: "Email",
    href: `mailto:${siteConfig.email}`
  }
];
