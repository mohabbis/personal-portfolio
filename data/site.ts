import type { ContactItem, FeatureItem, SocialLink } from "@/lib/types";

export const siteConfig = {
  name: "Muhammad Rafiq",
  title: "Muhammad Rafiq | Strategy, Product, and Creative Technology",
  description:
    "Muhammad Rafiq builds systems that make messy work clearer: product interfaces, brand/web platforms, operational infrastructure, and visual studies.",
  location: "Ann Arbor · Chicago",
  email: "Muharafi@umich.edu",
  linkedIn: "https://www.linkedin.com/in/muharafiq",
  github: "https://github.com/mohabbis",
  portfolio: "https://www.muharafiq.com",
  availability: "Open to useful conversations across strategy, product, creative technology, and systems-oriented design.",
  projectLinks: {
    lumen: "https://lumen.muharafiq.com",
    asig: "https://alphasigmaphitheta.com",
    carWashGuys: "https://carwashguys.us"
  },
  hero: {
    headline: "Made until it's right.",
    subheadline:
      "Systems work across strategy, product, brand, and operations.",
    primaryCta: {
      label: "View Work",
      href: "/portfolio"
    },
    secondaryCta: {
      label: "Contact",
      href: "/about#contact"
    }
  },
  about: {
    intro: "Building digital systems, brand work, and environments that make everyday experiences clearer.",
    paragraphs: [
      "Based between Chicago and Ann Arbor, I work across strategy, product, design, and operations, building systems that make messy work clearer.",
      "My work starts with structure: what matters, where the friction is, and what would make the next decision easier."
    ],
    strengths: []
  },
  focusAreas: {
    title: "What I do",
    bullets: [
      "Strategy: positioning, operations, and decision systems that clarify messy work.",
      "Product: interfaces, automation, and smart-home systems designed around actual use.",
      "Brand/Web: editorial websites, local business marketing, and visual systems.",
      "Infrastructure: public/private systems, records, workflows, and operational continuity."
    ]
  }
};

export const highlights: FeatureItem[] = [
  {
    title: "Strategy",
    description: "Positioning, operations, and decision systems."
  },
  {
    title: "Product",
    description: "Interfaces, automation, and smart-home systems."
  },
  {
    title: "Brand/Web",
    description: "Editorial websites, local business marketing, and visual systems."
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
    href: `mailto:${siteConfig.email}?subject=Project%20%2F%20Role%20%2F%20Collaboration%20Inquiry`,
    note: "Projects, roles, collaborations, and useful introductions."
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
    href: `mailto:${siteConfig.email}?subject=Project%20%2F%20Role%20%2F%20Collaboration%20Inquiry`
  },
  {
    label: "Portfolio",
    href: siteConfig.portfolio
  }
];
