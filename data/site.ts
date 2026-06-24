import type { ContactItem, FeatureItem, SocialLink } from "@/lib/types";

export const siteConfig = {
  name: "Muhammad Rafiq",
  title: "Muhammad Rafiq | business systems and decision design",
  description:
    "Muhammad Rafiq builds business-facing work across decision framing, operating systems, and visual presentation.",
  location: "Ann Arbor · Chicago",
  email: "Muharafi@umich.edu",
  linkedIn: "https://www.linkedin.com/in/muharafiq",
  github: "https://github.com/mohabbis",
  portfolio: "https://www.muharafiq.com",
  availability: "Open to roles and projects involving decision framing, operating systems, and visual presentation.",
  profileLine:
    "Business-facing work across decision framing, operating systems & visual presentation.",
  projectLinks: {
    lumen: "https://lumen.muharafiq.com",
    asig: "https://alphasigmaphitheta.com",
    carWashGuys: "https://carwashguys.us"
  },
  hero: {
    headline: "Diagnose the issue. Build the system. Present the decision.",
    subheadline:
      "I turn scattered information into structured choices, working tools, and polished outputs people can act on.",
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
    intro: "A practice built around diagnosis, systems, and decision-ready presentation.",
    paragraphs: [
      "My work has three lanes: diagnose the issue, build the system, and present the decision.",
      "That means finding what actually matters, organizing the moving pieces, and turning the result into something clear enough to use."
    ],
    strengths: []
  },
  focusAreas: {
    title: "How the work breaks down",
    bullets: [
      "Diagnose: define the issue, the constraint, and the decision that needs to be made.",
      "Build: organize workflows, records, models, pages, and operating systems.",
      "Present: shape the final output so it is clear, credible, and easy to act on."
    ]
  }
};

export const highlights: FeatureItem[] = [
  {
    title: "Diagnose",
    description: "Define the issue, the constraint, and the decision that needs to be made."
  },
  {
    title: "Build",
    description: "Organize workflows, records, models, pages, and operating systems."
  },
  {
    title: "Present",
    description: "Shape the final output so it is clear, credible, and easy to act on."
  }
];

export const workingPrinciples: FeatureItem[] = [
  {
    title: "Start with the decision",
    description: "Work backward from the choice the output needs to support."
  },
  {
    title: "Separate the lanes",
    description: "Keep analysis, systems, and presentation distinct so the work stays clean."
  },
  {
    title: "Make the next step obvious",
    description: "Finish with an output someone can understand, use, or hand off."
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
