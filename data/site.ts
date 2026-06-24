import type { ContactItem, FeatureItem, SocialLink } from "@/lib/types";

export const siteConfig = {
  name: "Muhammad Rafiq",
  title: "Muhammad Rafiq | Strategy, Research & Operations",
  description:
    "Muhammad Rafiq — a University of Michigan student focused on strategy, research, and operations. I break down ambiguous business problems, find the leverage points, and turn analysis into decisions teams can act on.",
  location: "Ann Arbor · Chicago",
  email: "Muharafi@umich.edu",
  linkedIn: "https://www.linkedin.com/in/muharafiq",
  github: "https://github.com/mohabbis",
  portfolio: "https://www.muharafiq.com",
  availability: "Open to roles and projects in consulting, finance, research, strategy, and business development.",
  projectLinks: {
    lumen: "https://lumen.muharafiq.com",
    asig: "https://alphasigmaphitheta.com",
    carWashGuys: "https://carwashguys.us"
  },
  hero: {
    headline: "Clarity under constraints.",
    subheadline:
      "I work across strategy, research, and operations — breaking down ambiguous problems and turning analysis into decisions teams can act on.",
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
    intro: "Strategy, research, and operations — finding the structure in ambiguous problems and turning it into decisions teams can act on.",
    paragraphs: [
      "I'm drawn to how capital flows, how organizations make trade-offs under constraints, and how decisions made today shape what becomes possible tomorrow. Patterns repeat, and the interesting part is finding where the leverage points are.",
      "Based between Chicago and Ann Arbor, I start every problem with structure: what actually matters, where the friction is, and what would make the next decision easier. Then I work backward from the outcome and execute."
    ],
    strengths: []
  },
  focusAreas: {
    title: "What I do",
    bullets: [
      "Strategy: positioning, market analysis, and decision frameworks for ambiguous problems.",
      "Research: market and competitive analysis, feasibility studies, and the case behind a recommendation.",
      "Operations: workflows, records, and the systems that keep an organization running.",
      "Execution: turning analysis into briefs, models, and products that ship."
    ]
  }
};

export const highlights: FeatureItem[] = [
  {
    title: "Strategy",
    description: "Positioning, market analysis, and decision frameworks."
  },
  {
    title: "Research",
    description: "Market and competitive analysis, feasibility studies, and recommendations."
  },
  {
    title: "Operations",
    description: "Workflows, records, and the systems that keep teams running."
  }
];

export const workingPrinciples: FeatureItem[] = [
  {
    title: "Structure first",
    description: "Find what actually matters before touching the details."
  },
  {
    title: "Judgment",
    description: "Frameworks help; knowing when to deviate is the job."
  },
  {
    title: "Execution",
    description: "Turn analysis into something people can act on."
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
