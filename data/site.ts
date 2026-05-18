import type { ContactItem, FeatureItem, SocialLink } from "@/lib/types";

export const siteConfig = {
  name: "Muhammad Rafiq",
  title: "Muhammad Rafiq — Strategy, systems, and creative technology.",
  description:
    "Muhammad Rafiq is a University of Michigan student building work across strategy, operations, digital design, and creative technology.",
  location: "Chicago, Illinois",
  email: "muharafi@umich.edu",
  linkedIn: "https://www.linkedin.com/in/muharafiq",
  availability: "Open to strategy, consulting, operations, product, and analyst roles.",
  hero: {
    eyebrow: "Strategy · Systems · Creative Technology",
    headline: "Leaving every room a little brighter.",
    subheadline:
      "I build websites, brands, systems, and operating ideas with a bias toward taste, structure, and clarity.",
    description:
      "Selected work across client projects, product strategy, digital design, and systems thinking.",
    primaryCta: {
      label: "View selected work",
      href: "/portfolio"
    },
    secondaryCta: {
      label: "Get in touch",
      href: "/contact"
    }
  },
  about: {
    intro:
      "I like making things more intentional.",
    paragraphs: [
      "I am a student at the University of Michigan interested in strategy, operations, and creative technology. Most of my work sits between business thinking, design, systems, and execution.",
      "I care about framing the problem clearly, building the right structure around it, and presenting the answer in a way people can actually use."
    ],
    strengths: [
      "Structured Problem Solving",
      "Operational Thinking",
      "Design Judgment",
      "Polished Execution"
    ]
  },
  whatIBring: {
    title: "What I bring",
    bullets: [
      "Turning ambiguous problems into clear questions, options, and next steps.",
      "Building the analytical case without losing sight of the human experience around it.",
      "Communicating tradeoffs plainly so decisions can move forward.",
      "Delivering polished work across research, strategy, brand, product, and execution."
    ]
  }
};

export const highlights: FeatureItem[] = [
  {
    title: "Frame",
    description: "Define the real problem first. Good structure makes the answer sharper and the tradeoffs easier to see."
  },
  {
    title: "Design",
    description: "Translate ideas into interfaces, identities, and systems that feel intentional rather than generic."
  },
  {
    title: "Deliver",
    description: "Move from analysis to execution: polished outputs, clean communication, and work that holds up in front of people."
  }
];

export const workingPrinciples: FeatureItem[] = [
  {
    title: "Think clearly",
    description: "Break problems into the right parts before rushing toward answers."
  },
  {
    title: "Design matters",
    description: "People trust things that feel intentional and well considered."
  },
  {
    title: "Finish properly",
    description: "Details, sequencing, and execution are what make ideas real."
  }
];

export const contactItems: ContactItem[] = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    note: "Best for strategy, consulting, product, and operations opportunities."
  },
  {
    label: "LinkedIn",
    value: "Connect professionally",
    href: siteConfig.linkedIn,
    note: "Background, experience, and selected work."
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
    note: "No captions. Just things I thought looked right."
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
