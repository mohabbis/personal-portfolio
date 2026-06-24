import type { ContactItem, FeatureItem, SocialLink } from "@/lib/types";

export const siteConfig = {
  name: "Muhammad Rafiq",
  title: "Muhammad Rafiq | strategy, finance, operations, and design",
  description:
    "Muhammad Rafiq works across economics, strategy, finance, operations, systems, communication, and design.",
  location: "Ann Arbor · Chicago",
  email: "Muharafi@umich.edu",
  linkedIn: "https://www.linkedin.com/in/muharafiq",
  github: "https://github.com/mohabbis",
  portfolio: "https://www.muharafiq.com",
  availability: "Open to finance, strategy, operations, systems, communication, and design-oriented roles.",
  profileLine:
    "Focused on economics, strategy, finance, operations, systems, communication & design.",
  projectLinks: {
    lumen: "https://lumen.muharafiq.com",
    asig: "https://alphasigmaphitheta.com",
    carWashGuys: "https://carwashguys.us"
  },
  hero: {
    headline: "Strategy, finance, operations, and design.",
    subheadline:
      "Structured analysis, clear communication, and polished presentation for complex problems.",
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
    intro: "Finance, strategy, operations, systems, and design through structured problem solving.",
    paragraphs: [
      "Focused on economics, strategy, finance, operations, systems, communication, and design.",
      "I build clear, practical outputs across strategy, operations, brand positioning, systems, and digital presentation."
    ],
    strengths: []
  },
  focusAreas: {
    title: "Core focus areas",
    bullets: [
      "Strategy: positioning, market analysis, and decision frameworks.",
      "Finance: economics, trade-offs, and evidence-backed recommendations.",
      "Communication: writing, stakeholder alignment, and presentation.",
      "Design: visual systems, websites, and brand presentation."
    ]
  }
};

export const highlights: FeatureItem[] = [
  {
    title: "Strategy",
    description: "Positioning, market analysis, and decision frameworks."
  },
  {
    title: "Finance",
    description: "Economics, trade-offs, and evidence-backed recommendations."
  },
  {
    title: "Communication",
    description: "Writing, stakeholder alignment, and polished presentation."
  }
];

export const workingPrinciples: FeatureItem[] = [
  {
    title: "Structure first",
    description: "Clarify the problem, constraints, and decision criteria."
  },
  {
    title: "Evidence-led judgment",
    description: "Use research and analysis to support practical recommendations."
  },
  {
    title: "Polished delivery",
    description: "Turn analysis into clear, credible outputs."
  }
];

export const contactItems: ContactItem[] = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}?subject=Role%20%2F%20Project%20%2F%20Research%20Inquiry`,
    note: "Roles, projects, research, and introductions."
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/muharafiq",
    href: siteConfig.linkedIn,
    note: "Background, experience, and updates."
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
