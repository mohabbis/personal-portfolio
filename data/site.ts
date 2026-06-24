import type { ContactItem, FeatureItem, SocialLink } from "@/lib/types";

export const siteConfig = {
  name: "Muhammad Rafiq",
  title: "Muhammad Rafiq | CGI, design, strategy",
  description:
    "Muhammad Rafiq is a University of Michigan student focused on economics, strategy, finance, risk management & design, with work across CGI, graphic design, web systems, and brand storytelling.",
  location: "Ann Arbor · Chicago",
  email: "Muharafi@umich.edu",
  linkedIn: "https://www.linkedin.com/in/muharafiq",
  github: "https://github.com/mohabbis",
  portfolio: "https://www.muharafiq.com",
  availability: "Open to consulting, finance, risk, strategy, design, and creative technology roles.",
  projectLinks: {
    lumen: "https://lumen.muharafiq.com",
    asig: "https://alphasigmaphitheta.com",
    carWashGuys: "https://carwashguys.us"
  },
  hero: {
    headline: "CGI, design, and strategy with a sharper eye.",
    subheadline:
      "I build polished visual systems across CGI, graphic design, websites, and brand storytelling, grounded in business thinking and clean execution.",
    primaryCta: {
      label: "View Work",
      href: "/work"
    },
    secondaryCta: {
      label: "About",
      href: "/about"
    }
  },
  profileLine: "University of Michigan student focused on economics, strategy, finance, risk management & design.",
  about: {
    intro: "Strategy, design, and creative technology: finding the structure in ambiguous problems and turning it into visual systems, decisions, and shipped work.",
    paragraphs: [
      "I'm drawn to how capital flows, how organizations make trade-offs under constraints, and how decisions made today shape what becomes possible tomorrow. Patterns repeat, and the interesting part is finding where the leverage points are.",
      "Based between Chicago and Ann Arbor, I work across business strategy, risk, visual systems, web design, and creative technology. The common thread is structure: what matters, where the friction is, and what would make the next decision easier."
    ],
    strengths: []
  },
  focusAreas: {
    title: "What I do",
    bullets: [
      "CGI and graphic design: visual studies, campaign assets, spatial concepts, and polished brand materials.",
      "Strategy and finance: positioning, market analysis, risk framing, and decision frameworks.",
      "Web design: editorial interfaces, case-study systems, and conversion-aware project pages.",
      "Execution: turning analysis into briefs, visuals, models, and products that ship."
    ]
  }
};

export const highlights: FeatureItem[] = [
  {
    title: "CGI & visual systems",
    description: "Spatial concepts, product scenes, graphics, and polished presentation assets."
  },
  {
    title: "Strategy & finance",
    description: "Positioning, market analysis, risk framing, and decision logic."
  },
  {
    title: "Web & brand",
    description: "Editorial websites, brand systems, and project storytelling."
  }
];

export const workingPrinciples: FeatureItem[] = [
  {
    title: "Structure first",
    description: "Find what actually matters before touching the details."
  },
  {
    title: "Taste with proof",
    description: "Make the work look sharp and make the logic hold up."
  },
  {
    title: "Execution",
    description: "Turn analysis into something people can see, use, and act on."
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
    label: "Photography",
    href: "/photography"
  }
];
