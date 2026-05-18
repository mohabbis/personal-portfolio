import type { ContactItem, FeatureItem, SocialLink } from "@/lib/types";

export const siteConfig = {
  name: "Muhammad Rafiq",
  title: "Muhammad Rafiq — Strategy, analysis, and structured execution.",
  description:
    "Muhammad Rafiq — strategy-minded builder focused on structured problem-solving, clear communication, and polished execution.",
  location: "Chicago, Illinois",
  email: "muharafi@umich.edu",
  linkedIn: "https://www.linkedin.com/in/muharafiq",
  availability: "Open to strategy, product, operations, and analyst roles.",
  hero: {
    eyebrow: "Strategy · Analysis · Execution",
    headline: "Structure first. Then the solution.",
    subheadline:
      "I break down hard problems, build the case, and deliver work that holds up.",
    description:
      "Work across strategy, analysis, and execution.",
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
      "I care about getting it right.",
    paragraphs: [
      "I define the real problem first, pressure-test the answer with evidence, and communicate it in a way that moves decisions forward."
    ],
    strengths: [
      "Structured Problem Solving",
      "Analytical Thinking",
      "Clear Communication",
      "Polished Execution"
    ]
  },
  whatIBring: {
    title: "What I bring",
    bullets: [
      "Taking ambiguous problems apart and stress-testing the answer before presenting it.",
      "Building the quantitative and analytical case — not just the narrative.",
      "Communicating tradeoffs clearly to people who need to act on them.",
      "Delivering end-to-end: from research and analysis to the final polished output."
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
    description: "Translate strategy into polished outputs — from structured analyses and operating plans to client-facing digital experiences."
  }
];

export const workingPrinciples: FeatureItem[] = [
  {
    title: "Structure creates clarity",
    description: "Properly decomposing a problem surfaces the real question and the viable options."
  },
  {
    title: "Execution proves the thinking",
    description: "Details, sequencing, and reliability are where strategy survives contact with reality."
  },
  {
    title: "Presentation changes outcomes",
    description: "How an answer is framed and sequenced determines whether it gets acted on."
  }
];

export const contactItems: ContactItem[] = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    note: "Best for strategy, product, and operations opportunities."
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
