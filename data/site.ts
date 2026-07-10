import type { ContactItem, FeatureItem, SocialLink } from "@/lib/types";

export const siteConfig = {
  name: "Muhammad Rafiq",
  title: "Muhammad Rafiq | design, UI/UX & more",
  description:
    "Muhammad Rafiq is a design-focused student, sharpest in UI and UX, and broadly curious about strategy, operations, and technology.",
  location: "Ann Arbor · Chicago",
  email: "Muharafi@umich.edu",
  linkedIn: "https://www.linkedin.com/in/muharafiq",
  github: "https://github.com/mohabbis",
  portfolio: "https://www.muharafiq.com",
  availability: "Open to roles, projects, and conversations across design, strategy, and technology.",
  profileLine:
    "A designer at heart, sharpest in UI and UX, and broadly curious about everything around it, strategy, operations, and technology.",
  projectLinks: {
    lumen: "https://lumen.muharafiq.com",
    asig: "https://alphasigmaphitheta.com",
    carWashGuys: "https://carwashguys.us"
  },
  hero: {
    headline: "I like the gap between a good idea and a working one.",
    subheadline:
      "Design is the craft I trust most. Around it, I stay broadly curious: strategy, operations, and the technology that ties them together.",
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
    intro: "How I work.",
    paragraphs: [
      "Design is what I do best, UI, UX, and the details that decide how something feels. Around it I'm broadly curious: strategy, the operations underneath, and the technology, AI included, that ties it all together.",
      "Most of what's here started with a problem worth solving. I figured out how it should work, designed it, then built it far enough to prove the idea holds."
    ],
    strengths: []
  },
  focusAreas: {
    title: "Where I do my best work",
    bullets: [
      "Design & UI/UX: the interfaces and details that decide how something feels, the craft I trust most.",
      "Strategy: the positioning and the trade-offs most people skip past.",
      "Technology: using software and AI where they genuinely move the work forward, not for their own sake."
    ]
  }
};

export const highlights: FeatureItem[] = [
  {
    title: "Design & UI/UX",
    description: "The interfaces and details that decide how something feels. The craft I trust most."
  },
  {
    title: "Strategy",
    description: "The positioning and the trade-offs most people skip past."
  },
  {
    title: "Technology & AI",
    description: "Software and AI put to work where they genuinely move things forward."
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
    label: "GitHub",
    href: siteConfig.github
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
