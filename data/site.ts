import type { ContactItem, FeatureItem, SocialLink } from "@/lib/types";

export const siteConfig = {
  name: "Muhammad Rafiq",
  title: "Software engineering and product work, built to ship.",
  description:
    "Muhammad Rafiq — software engineer based in Chicago. Full-stack development, product thinking, and work that ships.",
  location: "Chicago, Illinois",
  email: "muharafi@umich.edu",
  linkedIn: "https://www.linkedin.com/in/muharafiq",
  availability:
    "Available for freelance web projects, product work, and full-time software roles. Based in Chicago, open to remote.",
  hero: {
    eyebrow: "Software Engineer · Chicago",
    headline: "I turn ideas into software that ships.",
    subheadline:
      "Full-stack development with product thinking built in. I scope the problem, build the solution, and present it clearly — whether the audience is technical or not.",
    description:
      "Available for freelance projects and full-time software roles.",
    primaryCta: {
      label: "See the work",
      href: "/portfolio"
    },
    secondaryCta: {
      label: "Get in touch",
      href: "/contact"
    }
  },
  about: {
    intro:
      "I build software that solves real problems — and I can explain it clearly to anyone in the room.",
    paragraphs: [
      "Most projects break down at the handoff: good idea, weak execution, or built but never understood. I work at the intersection of engineering, product thinking, and communication — which means I can own a project and make sure it actually lands.",
      "MuHome is the main project here. Smart home apps know what your devices are doing — the problem is they make it confusing to see. MuHome is a dashboard built around that single insight: status should be obvious."
    ],
    strengths: [
      "Full-stack development",
      "Product thinking",
      "Clear communication",
      "Design sensibility"
    ]
  },
  approach: {
    title: "What I bring to a project",
    bullets: [
      "Full ownership: I scope, build, and deliver without needing a separate PM or designer.",
      "Cross-audience communication: I explain technical decisions clearly to non-technical people and vice versa.",
      "Stack: TypeScript, Next.js, React, Tauri, Python, SQL, Figma — plus whatever the project actually needs.",
      "Open to: freelance web projects, product work, technical problem-solving, and full-time software roles."
    ]
  }
};

export const highlights: FeatureItem[] = [
  {
    title: "Define",
    description: "Frame the problem before writing a line of code. A clear brief saves more time than any framework."
  },
  {
    title: "Build",
    description: "Ship working software to production — not endless prototypes. Full ownership from first commit to deployment."
  },
  {
    title: "Present",
    description: "Explain the work to a technical team and a client in the same meeting. Clear writing and clean UI are the same skill."
  }
];

export const workingPrinciples: FeatureItem[] = [
  {
    title: "Scope before you build",
    description: "A clear problem statement saves more time than any tool. I define what done looks like before touching the code."
  },
  {
    title: "Ship something real",
    description: "A rough working version in production tells you more than a polished prototype in a deck. I move from spec to live."
  },
  {
    title: "Presentation is the product",
    description: "How you explain the work shapes how it's received. The UI, the copy, and the pitch are all part of the same job."
  }
];

export const contactItems: ContactItem[] = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    note: "Best for project briefs, role inquiries, or scheduling a portfolio walkthrough."
  },
  {
    label: "LinkedIn",
    value: "Connect professionally",
    href: siteConfig.linkedIn,
    note: "Work history, background, and professional updates."
  },
  {
    label: "Projects",
    value: "View projects",
    href: "/#projects",
    note: "Live work with context — what I built, why it matters, and what shipped."
  }
];

export const socialLinks: SocialLink[] = [
  {
    label: "LinkedIn",
    href: siteConfig.linkedIn
  },
  {
    label: "Projects",
    href: "/#projects"
  },
  {
    label: "Email",
    href: `mailto:${siteConfig.email}`
  }
];
