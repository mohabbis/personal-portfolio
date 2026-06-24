import type { ContactItem, FeatureItem, SocialLink } from "@/lib/types";

export const siteConfig = {
  name: "Muhammad Rafiq",
  title: "Muhammad Rafiq | business, finance, strategy, and design",
  description:
    "Muhammad Rafiq is a University of Michigan student focused on economics, strategy, finance, risk management, and design.",
  location: "Ann Arbor · Chicago",
  email: "Muharafi@umich.edu",
  linkedIn: "https://www.linkedin.com/in/muharafiq",
  github: "https://github.com/mohabbis",
  portfolio: "https://www.muharafiq.com",
  availability: "Open to consulting, finance, research, design, and business development.",
  profileLine:
    "University of Michigan student focused on economics, strategy, finance, risk management & design.",
  projectLinks: {
    lumen: "https://lumen.muharafiq.com",
    asig: "https://alphasigmaphitheta.com",
    carWashGuys: "https://carwashguys.us"
  },
  hero: {
    headline: "Curious how things work.",
    subheadline:
      "I build polished visual systems across brand, interface, and storytelling with a business lens behind the work.",
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
    intro: "Strategy, research, operations, and design through structured problem solving and visual execution.",
    paragraphs: [
      "I'm drawn to how capital flows, how organizations make trade-offs under constraints, and how design makes complicated ideas easier to understand.",
      "Based between Chicago and Ann Arbor, I start every problem with structure: what actually matters, where the friction is, and what would make the next decision easier. Then I work backward from the outcome and execute."
    ],
    strengths: []
  },
  focusAreas: {
    title: "What I do",
    bullets: [
      "Strategy: positioning, market analysis, and decision frameworks for ambiguous problems.",
      "Research: market and competitive analysis, feasibility studies, and the case behind a recommendation.",
      "Design: visual systems, layouts, websites, and brand storytelling.",
      "Execution: turning analysis into briefs, models, visuals, and products that ship."
    ]
  }
};

export const highlights: FeatureItem[] = [
  {
    title: "Strategy",
    description: "Positioning, market analysis, and decision frameworks."
  },
  {
    title: "Design",
    description: "Visual systems, layouts, websites, and brand storytelling."
  },
  {
    title: "Execution",
    description: "Turning analysis into briefs, models, visuals, and products."
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
