import type { ContactItem, FeatureItem, SocialLink } from "@/lib/types";

export const siteConfig = {
  name: "Muhammad Rafiq",
  title: "Muhammad Rafiq | curious about business, finance & strategy",
  description:
    "Muhammad Rafiq — a student curious about business, finance, and strategy, building projects across product, operations, and design.",
  location: "Ann Arbor · Chicago",
  email: "Muharafi@umich.edu",
  linkedIn: "https://www.linkedin.com/in/muharafiq",
  github: "https://github.com/mohabbis",
  portfolio: "https://www.muharafiq.com",
  availability: "Open to roles, projects, and conversations across business, finance, and strategy.",
  profileLine:
    "A student curious about business, finance, and strategy — happiest turning a messy problem into something that actually works.",
  projectLinks: {
    lumen: "https://lumen.muharafiq.com",
    asig: "https://alphasigmaphitheta.com",
    carWashGuys: "https://carwashguys.us"
  },
  hero: {
    headline: "Curious how things work.",
    subheadline:
      "I'm a student who likes taking apart how businesses, products, and decisions actually work — then putting them back together a little clearer.",
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
    intro: "Less a resume, more how I think.",
    paragraphs: [
      "I'm a student drawn to business, finance, and strategy — less by the labels than by the question under all of them: why does this work the way it does, and could it work better?",
      "Most of what's here started with me trying to answer that for something I cared about, then building it out far enough to be useful."
    ],
    strengths: []
  },
  focusAreas: {
    title: "What I keep coming back to",
    bullets: [
      "Strategy: how something's positioned, and the trade-offs behind a decision.",
      "Research: digging into a market or an idea to see whether it actually holds up.",
      "Operations: the quiet workflows and records that keep things running."
    ]
  }
};

export const highlights: FeatureItem[] = [
  {
    title: "Strategy",
    description: "How something's positioned, and the trade-offs behind a decision."
  },
  {
    title: "Research",
    description: "Digging into a market or an idea to see whether it actually holds up."
  },
  {
    title: "Operations",
    description: "The quiet workflows and records that keep things running."
  }
];

export const workingPrinciples: FeatureItem[] = [
  {
    title: "Start with the question",
    description: "Figure out what's actually being decided before touching anything else."
  },
  {
    title: "Keep it honest",
    description: "I'm a student — I'd rather show the thinking than overstate the result."
  },
  {
    title: "Leave something usable",
    description: "Finish with something a real person can pick up, understand, and act on."
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
