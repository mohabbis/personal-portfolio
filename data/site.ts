import type { ContactItem, FeatureItem, SocialLink } from "@/lib/types";

export const siteConfig = {
  name: "Muhammad Rafiq",
  title: "Muhammad Rafiq | strategy, systems, and design",
  description:
    "Muhammad Rafiq builds business-facing work across strategy, systems, finance, communication, and design.",
  location: "Ann Arbor · Chicago",
  email: "Muharafi@umich.edu",
  linkedIn: "https://www.linkedin.com/in/muharafiq",
  github: "https://github.com/mohabbis",
  portfolio: "https://www.muharafiq.com",
  availability: "Open to roles and projects involving strategy, systems, finance, communication, and design.",
  profileLine:
    "Business-facing work across strategy, systems, finance, communication & design.",
  projectLinks: {
    lumen: "https://lumen.muharafiq.com",
    asig: "https://alphasigmaphitheta.com",
    carWashGuys: "https://carwashguys.us"
  },
  hero: {
    headline: "Making complex work easier to understand.",
    subheadline:
      "I turn fragmented ideas, operations, and business problems into clear systems, useful interfaces, and polished presentation.",
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
    intro: "A business and design practice built around clarity, structure, and execution.",
    paragraphs: [
      "I work across strategy, systems, finance, communication, and design.",
      "The common thread is clarity: finding the real problem, organizing the moving pieces, and building outputs people can actually use."
    ],
    strengths: []
  },
  focusAreas: {
    title: "Core focus areas",
    bullets: [
      "Decision framing: turning ambiguous problems into clear options.",
      "Business analysis: economics, trade-offs, and evidence-backed recommendations.",
      "Systems: workflows, records, and operational structure.",
      "Presentation: websites, visual systems, and polished communication."
    ]
  }
};

export const highlights: FeatureItem[] = [
  {
    title: "Frame",
    description: "Clarify the problem, incentives, and decision criteria."
  },
  {
    title: "Build",
    description: "Turn messy inputs into systems, pages, models, and narratives."
  },
  {
    title: "Polish",
    description: "Make the final output clear, credible, and easy to move through."
  }
];

export const workingPrinciples: FeatureItem[] = [
  {
    title: "Start with the real constraint",
    description: "Separate what matters from what is merely loud."
  },
  {
    title: "Design the path",
    description: "Shape the next step so the work is easier to understand and use."
  },
  {
    title: "Finish cleanly",
    description: "Deliver work that feels considered from structure to presentation."
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
