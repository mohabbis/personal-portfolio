import type { ContactItem, FeatureItem, SocialLink } from "@/lib/types";

export const siteConfig = {
  name: "Muhammad Rafiq",
  title: "Muhammad Rafiq | business, finance & strategy",
  description:
    "Muhammad Rafiq is a student into business, finance, and strategy, drawn to the messy middle where the real decisions get made.",
  location: "Ann Arbor · Chicago",
  email: "Muharafi@umich.edu",
  linkedIn: "https://www.linkedin.com/in/muharafiq",
  github: "https://github.com/mohabbis",
  portfolio: "https://www.muharafiq.com",
  availability: "Open to roles, projects, and conversations across business, finance, and strategy.",
  profileLine:
    "A student into business, finance, and strategy. I like the messy middle where the real decisions get made.",
  projectLinks: {
    lumen: "https://lumen.muharafiq.com",
    asig: "https://alphasigmaphitheta.com",
    carWashGuys: "https://carwashguys.us"
  },
  hero: {
    headline: "I like the hard part.",
    subheadline:
      "Business, finance, strategy. I'm drawn to the messy middle where the real decisions happen, and I build things that hold up there.",
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
    intro: "Not a resume. How I actually operate.",
    paragraphs: [
      "I'm a student into business, finance, and strategy, but what pulls me in is the hard part: the trade-off no one wants to call, the system that's quietly breaking, the decision buried under the noise.",
      "Most of what's here started right there. I found a problem worth solving, then built it out far enough to prove it works."
    ],
    strengths: []
  },
  focusAreas: {
    title: "Where I do my best work",
    bullets: [
      "Strategy: the positioning and the trade-offs most people skip past.",
      "Research: pressure-testing an idea until I know whether it holds.",
      "Operations: the unglamorous systems that decide whether anything runs."
    ]
  }
};

export const highlights: FeatureItem[] = [
  {
    title: "Strategy",
    description: "The positioning and the trade-offs most people skip past."
  },
  {
    title: "Research",
    description: "Pressure-testing an idea until I know whether it holds."
  },
  {
    title: "Operations",
    description: "The unglamorous systems that decide whether anything runs."
  }
];

export const workingPrinciples: FeatureItem[] = [
  {
    title: "Start with the question",
    description: "Nail what's actually being decided before touching anything else."
  },
  {
    title: "Keep it honest",
    description: "I'm a student, not a guru. I'd rather show the work than oversell it."
  },
  {
    title: "Leave something usable",
    description: "Finish with something real people can pick up and run with."
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
