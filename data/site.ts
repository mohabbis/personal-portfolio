import type { ContactItem, FeatureItem, SocialLink } from "@/lib/types";

export const siteConfig = {
  name: "Muhammad Rafiq",
  title: "Software engineering and product work, built to ship.",
  description:
    "Muhammad Rafiq — software engineer and product thinker based in Chicago. Full-stack development, product consulting, and client work.",
  location: "Chicago, Illinois",
  email: "muharafi@umich.edu",
  linkedIn: "https://www.linkedin.com/in/muharafiq",
  availability:
    "Available for freelance web development, product consulting, and full-time roles in software or product. Based in Chicago, open to remote.",
  hero: {
    eyebrow: "Software Engineer · Chicago",
    headline: "I turn ideas into software that ships.",
    subheadline:
      "Full-stack development with product thinking built in. I scope the problem, build the solution, and present it clearly — whether the audience is technical or not.",
    description:
      "Available for freelance projects, consulting engagements, and full-time roles in software or product.",
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
      "Most projects break down at the handoff: good idea, weak execution, or built but never understood. I work at the intersection of engineering, product thinking, and communication — which means I can own a project end to end and make sure it actually lands.",
      "MuHome is the main project here. Smart home apps know what your devices are doing — the problem is they make it confusing to see. MuHome is a dashboard built around that single insight: status should be obvious."
    ],
    strengths: [
      "Full-stack development",
      "Product scoping",
      "Client communication",
      "Design sensibility"
    ]
  },
  consultingReady: {
    title: "What I bring to an engagement",
    bullets: [
      "End-to-end ownership: I can scope, build, and deliver without needing a separate PM or designer.",
      "Cross-audience communication: I explain technical decisions to non-technical stakeholders and vice versa.",
      "Stack: TypeScript, Next.js, React, Tauri, Python, SQL, Figma — plus whatever the project actually needs.",
      "Open to: freelance web projects, product consulting, technical strategy, and full-time software or product roles."
    ]
  }
};

export const highlights: FeatureItem[] = [
  {
    title: "Think",
    description: "Break down the messy part first so the work has a real direction."
  },
  {
    title: "Build",
    description: "Move from idea to working version instead of staying stuck in planning."
  },
  {
    title: "Explain",
    description: "Show the work in a way that makes the point quickly."
  }
];

export const workingPrinciples: FeatureItem[] = [
  {
    title: "Keep it clear",
    description: "If someone has to work too hard to understand the page, flow, or argument, it needs another pass."
  },
  {
    title: "Prototype early",
    description: "A rough working version usually tells me more than a long plan."
  },
  {
    title: "Make it look finished",
    description: "The details matter because people judge the idea through the way it is presented."
  }
];

export const contactItems: ContactItem[] = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    note: "Best way to reach me about roles, projects, or a portfolio walkthrough."
  },
  {
    label: "LinkedIn",
    value: "Connect professionally",
    href: siteConfig.linkedIn,
    note: "Background, school, and work updates."
  },
  {
    label: "Projects",
    value: "View projects",
    href: "/#projects",
    note: "Selected work and project writeups."
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
