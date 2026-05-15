import type { ContactItem, FeatureItem, SocialLink } from "@/lib/types";

export const siteConfig = {
  name: "Muhammad Rafiq",
  title: "Muhammad Rafiq — Strategy, creative technology, and execution.",
  description:
    "Muhammad Rafiq — I build thoughtful digital experiences that blend strategy, design, and clean execution.",
  location: "Chicago, Illinois",
  email: "muharafi@umich.edu",
  linkedIn: "https://www.linkedin.com/in/muharafiq",
  availability: "Available for consulting and product roles.",
  hero: {
    eyebrow: "Work · Writing · Photography",
    headline: "Leaving every room a little brighter.",
    subheadline:
      "I build structured, polished digital experiences that combine analytical thinking, clear communication, and practical execution.",
    description:
      "A portfolio of strategy-led projects, brand systems, product thinking, and photography.",
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
      "I care about work that feels considered: analytically grounded, visually sharp, and structured clearly.",
    paragraphs: [
      "My projects sit at the intersection of strategy, systems thinking, and execution. I like taking ambiguous ideas, structuring the problem, and carrying the work through to a polished final product."
    ],
    strengths: [
      "Structured Problem Solving",
      "Client Communication",
      "Digital Product Thinking",
      "Polished Execution"
    ]
  },
  consultingReady: {
    title: "What I bring",
    bullets: [
      "Strategy & consulting: hypothesis-driven thinking, structured recommendations, and clear communication.",
      "Operations & execution: process improvement and practical systems thinking.",
      "Product & technology: Next.js, TypeScript, and systems-oriented product development.",
      "Brand & communication: editorial web systems, visual storytelling, and presentation design."
    ]
  }
};

export const highlights: FeatureItem[] = [
  {
    title: "Frame",
    description: "Define the right problem first. Clear framing creates better decisions and cleaner execution."
  },
  {
    title: "Build",
    description: "Translate ideas into working systems, from digital products and operational workflows to polished client-facing experiences."
  },
  {
    title: "Polish",
    description: "Refine the communication, interaction, and presentation until the work feels intentional from end to end."
  }
];

export const workingPrinciples: FeatureItem[] = [
  {
    title: "Structure creates clarity",
    description: "Strong ideas become more useful when they are organized clearly, communicated directly, and easy to act on."
  },
  {
    title: "Execution matters",
    description: "Good thinking is only valuable if it survives implementation. Details, reliability, and follow-through matter."
  },
  {
    title: "Finish to a standard",
    description: "The spacing, phrasing, interaction, and final presentation shape whether work feels merely complete or genuinely considered."
  }
];

export const contactItems: ContactItem[] = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    note: "Best for consulting, strategy, or creative technology opportunities."
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
    note: "Case studies across strategy, systems, and digital products."
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
