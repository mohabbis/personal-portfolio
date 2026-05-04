import type { ContactItem, FeatureItem, SocialLink, StatItem } from "@/lib/types";

export const siteConfig = {
  name: "Muhammad Rafiq",
  shortName: "MR",
  title: "Muhammad Rafiq builds calm product experiences, connected-device concepts, and polished portfolio systems.",
  description:
    "A personal portfolio focused on MuHome, front-end execution, connected-device product thinking, and visual presentation that makes technical work easier to evaluate.",
  location: "Chicago, Illinois, United States",
  email: "muharafi@umich.edu",
  linkedIn: "https://www.linkedin.com/in/muharafiq",
  availability: "Available for thoughtful product, software, and creative collaborations.",
  hero: {
    eyebrow: "Product-Minded Engineer • Connected Systems • Visual Direction",
    headline: "Muhammad Rafiq designs software concepts and interfaces that make complex systems feel calm and readable",
    subheadline:
      "The work sits at the intersection of front-end execution, connected-device product thinking, and presentation quality strong enough to carry the idea.",
    description:
      "MuHome leads the portfolio because it shows the core approach clearly: identify the real product problem, shape the interface around trust and clarity, and present the concept in a way that feels specific instead of speculative.",
    primaryCta: {
      label: "Read the MuHome case study",
      href: "/portfolio/muhome"
    },
    secondaryCta: {
      label: "Browse the portfolio",
      href: "/portfolio"
    }
  },
  about: {
    intro:
      "I build product-facing software and interface systems that make technical ideas easier to trust, understand, and evaluate.",
    paragraphs: [
      "My best work starts with a messy system and turns it into something legible. I like finding the few interface decisions that make a product feel calmer, faster, and more self-explanatory.",
      "MuHome is the clearest example of that direction. It treats smart-home control as a trust problem first: visible state, routine-aware actions, and quick recovery when the system needs human input.",
      "I also treat presentation as part of the product. The portfolio uses photography, motion, and tighter copy structure because strong work should not need the audience to guess what matters."
    ],
    strengths: [
      "Product framing",
      "Front-end systems",
      "Connected-device UX",
      "Presentation quality"
    ]
  }
};

export const stats: StatItem[] = [
  {
    label: "Focus",
    value: "Interface + Product",
    detail: "Software concepts and front-end systems shaped around readable states, useful flows, and better product judgment."
  },
  {
    label: "Signature Project",
    value: "MuHome Case Study",
    detail: "A smart-home concept focused on trust, routine-aware control, and clearer visibility into what the home is doing."
  },
  {
    label: "Creative Edge",
    value: "Photo + Motion",
    detail: "Visual direction, photography, and pacing that make technical work feel presented rather than merely uploaded."
  }
];

export const highlights: FeatureItem[] = [
  {
    title: "Product Framing",
    description: "The work starts with the real user problem and narrows it into a product argument that can actually be evaluated."
  },
  {
    title: "Connected-System UX",
    description: "Connected-device ideas are grounded in state visibility, routine logic, and controls that users can trust quickly."
  },
  {
    title: "Presentation Discipline",
    description: "Copy hierarchy, motion, imagery, and layout all support the idea instead of competing with it."
  }
];

export const workingPrinciples: FeatureItem[] = [
  {
    title: "Clarity first",
    description: "The interface should explain the system quickly. Structure and sequence matter more than decorative complexity."
  },
  {
    title: "Real constraints",
    description: "Ideas stay tied to actual workflows, device states, and user decisions instead of drifting into vague feature language."
  },
  {
    title: "Presentation is part of the product",
    description: "Typography, motion, image selection, and pacing all change whether the work feels thoughtful, credible, and finished."
  }
];

export const contactItems: ContactItem[] = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    note: "Best channel for project discussions, product conversations, and direct follow-up on any case study in the portfolio."
  },
  {
    label: "LinkedIn",
    value: "Connect professionally",
    href: siteConfig.linkedIn,
    note: "Use LinkedIn for background, current activity, and the broader professional context behind the portfolio."
  },
  {
    label: "Photography",
    value: "View visual work",
    href: "/photography",
    note: "The stills and motion studies show how presentation quality supports the technical side of the portfolio."
  }
];

export const socialLinks: SocialLink[] = [
  {
    label: "LinkedIn",
    href: siteConfig.linkedIn
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
