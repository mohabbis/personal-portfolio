import type { ContactItem, FeatureItem, SocialLink } from "@/lib/types";

export const siteConfig = {
  name: "Muhammad Rafiq",
  title: "Muhammad Rafiq | CGI, graphic design, and strategy",
  description:
    "Muhammad Rafiq is a University of Michigan student focused on economics, strategy, finance, risk management, and design, with work across CGI, graphic design, websites, and brand systems.",
  location: "Ann Arbor · Chicago",
  email: "Muharafi@umich.edu",
  linkedIn: "https://www.linkedin.com/in/muharafiq",
  github: "https://github.com/mohabbis",
  portfolio: "https://www.muharafiq.com",
  availability: "Open to consulting, finance, risk, strategy, design, and creative technology work.",
  projectLinks: {
    lumen: "https://lumen.muharafiq.com",
    asig: "https://alphasigmaphitheta.com",
    carWashGuys: "https://carwashguys.us"
  },
  hero: {
    headline: "CGI, design, and strategy with a sharper eye.",
    subheadline:
      "I build polished visual systems across CGI, graphic design, websites, and brand storytelling. The work blends business strategy with editorial design, because apparently taste and structure can coexist.",
    primaryCta: {
      label: "View Work",
      href: "/work"
    },
    secondaryCta: {
      label: "About",
      href: "/about"
    }
  },
  about: {
    intro: "Strategy, design, and creative technology: finding the structure in ambiguous problems and turning it into work people can understand, use, and remember.",
    paragraphs: [
      "I'm drawn to how capital flows, how organizations make trade-offs under constraints, and how visual systems shape what people trust.",
      "Based between Chicago and Ann Arbor, I move between business thinking and visual execution: brand systems, web experiences, CGI concepts, and project plans with a clear point of view."
    ],
    strengths: []
  },
  focusAreas: {
    title: "What I do",
    bullets: [
      "CGI and visual systems: product scenes, spatial concepts, and image-led storytelling.",
      "Graphic design: identity systems, layouts, posters, and campaign visuals.",
      "Strategy: positioning, market analysis, and decision frameworks for ambiguous problems.",
      "Risk and finance: understanding trade-offs, downside cases, and how decisions hold up under pressure."
    ]
  }
};

export const highlights: FeatureItem[] = [
  {
    title: "CGI",
    description: "Product scenes, spatial concepts, and visual studies."
  },
  {
    title: "Graphic Design",
    description: "Posters, layouts, identity systems, and campaign visuals."
  },
  {
    title: "Strategy",
    description: "Positioning, market analysis, risk framing, and decision logic."
  }
];

export const workingPrinciples: FeatureItem[] = [
  {
    title: "Visual first",
    description: "Lead with the work before drowning people in credentials. Radical concept."
  },
  {
    title: "Structure",
    description: "Find what actually matters before touching the details."
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
