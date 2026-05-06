import type { ContactItem, FeatureItem, SocialLink } from "@/lib/types";

export const siteConfig = {
  name: "Muhammad Rafiq",
  title: "Software, product ideas, and projects I actually care about.",
  description:
    "A portfolio of the apps, product ideas, visuals, and experiments I have been building.",
  location: "Chicago, Illinois, United States",
  email: "muharafi@umich.edu",
  linkedIn: "https://www.linkedin.com/in/muharafiq",
  availability:
    "Open to full-time roles where I can work on software, product, strategy, or technical problem solving.",
  hero: {
    eyebrow: "Software • Product • Visuals • Systems",
    headline: "I build projects that make ideas easier to use and understand.",
    subheadline:
      "I like taking a rough idea, figuring out what actually matters, and turning it into something clear enough to show people.",
    description:
      "This site brings together my product work, coding projects, car photography, and hardware experiments in one place.",
    primaryCta: {
      label: "View case studies",
      href: "/portfolio"
    },
    secondaryCta: {
      label: "Get in touch",
      href: "/contact"
    }
  },
  about: {
    intro:
      "I like building things that are clear, useful, and polished enough to stand on their own.",
    paragraphs: [
      "I am interested in the space between software, product thinking, and presentation. I care about how something works, but I also care about whether someone can understand it quickly.",
      "MuHome is the main project here. It is a smart-home concept built around a simple problem: people should know what their devices are doing without digging through confusing controls.",
      "The car photos and visual work are part of the same idea. Good presentation makes the work easier to judge, and I do not like shipping something that feels unfinished."
    ],
    strengths: [
      "Product thinking",
      "Frontend development",
      "Clear writing",
      "Visual taste"
    ]
  },
  consultingReady: {
    title: "What I am looking for",
    bullets: [
      "Areas I like: consumer tech, smart-home products, mobility, and practical AI/software tools.",
      "How I work: define the problem, build the first version, test what feels weak, then clean it up.",
      "Tools: TypeScript, Next.js, Python, SQL basics, Figma, Excel/Sheets, and whatever else the project needs.",
      "Roles I am open to: product, strategy, software, consulting, and technical operations."
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
    label: "Visual work",
    value: "View storytelling work",
    href: "/#photography",
    note: "Car photos and short clips that show the visual side of the site."
  }
];

export const socialLinks: SocialLink[] = [
  {
    label: "LinkedIn",
    href: siteConfig.linkedIn
  },
  {
    label: "Visual work",
    href: "/#photography"
  },
  {
    label: "Email",
    href: `mailto:${siteConfig.email}`
  }
];
