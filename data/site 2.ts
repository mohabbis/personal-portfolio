import type { ContactItem, FeatureItem, SocialLink } from "@/lib/types";

export const siteConfig = {
  name: "Muhammad Rafiq",
  title: "Product-minded problem solving with technical depth.",
  description:
    "A portfolio of case-study style product work: structured problem solving, stakeholder-ready communication, and polished technical execution.",
  location: "Chicago, Illinois, United States",
  email: "muharafi@umich.edu",
  linkedIn: "https://www.linkedin.com/in/muharafiq",
  availability:
    "Open to full-time roles in consulting, product strategy, and software-driven problem solving.",
  hero: {
    eyebrow: "Structured Problem Solving • Product + Tech • Communication",
    headline: "I turn ambiguous problems into clear, measurable work.",
    subheadline:
      "I combine analytical rigor, stakeholder-ready storytelling, and engineering execution to deliver outcomes—not just artifacts.",
    description:
      "These case studies highlight how I frame problems, design solutions, and communicate decisions—across product software, connected systems, and visual direction.",
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
      "I build like a consultant: define the problem, align stakeholders, and deliver with discipline.",
    paragraphs: [
      "My work sits at the intersection of product, engineering, and communication. I enjoy taking messy inputs, building a structured plan, and translating it into something people can use and trust.",
      "MuHome is my primary product case study. It’s a smart-home concept that emphasizes reliable device state, clear routines, and low-friction control—designed and communicated the way a real product proposal should be.",
      "Alongside software, I use visual storytelling to make work easier to understand quickly. I treat presentation as part of the deliverable, not a final coat of paint."
    ],
    strengths: [
      "Structured thinking",
      "Stakeholder communication",
      "Product strategy",
      "Technical execution"
    ]
  },
  consultingReady: {
    title: "Consulting-ready",
    bullets: [
      "Industries: consumer tech, connected devices / IoT, mobility (automotive).",
      "Strengths: problem structuring, hypothesis-driven analysis, clear communication, high standards for delivery.",
      "Tools: Excel/Sheets modeling, SQL basics, Python/TypeScript, Figma, Next.js.",
      "Roles sought: strategy consulting / associate-level, product strategy & analytics, tech-enabled transformation."
    ]
  }
};

export const highlights: FeatureItem[] = [
  {
    title: "Structure",
    description: "Turn ambiguous goals into clear problem statements, hypotheses, and next steps."
  },
  {
    title: "Deliver",
    description: "Ship polished work with strong execution, QA, and a crisp narrative."
  },
  {
    title: "Communicate",
    description: "Make decisions legible to stakeholders through concise, visual-first writing."
  }
];

export const workingPrinciples: FeatureItem[] = [
  {
    title: "Clarity over cleverness",
    description: "Make the right choice obvious—whether it’s a UI flow, a model, or a recommendation."
  },
  {
    title: "Evidence-driven",
    description: "Prefer measurable outcomes, tight assumptions, and prototypes that validate the idea."
  },
  {
    title: "Executive-ready storytelling",
    description: "Good presentation is leverage: it helps stakeholders decide faster and with confidence."
  }
];

export const contactItems: ContactItem[] = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    note: "Best for recruiting conversations and opportunities."
  },
  {
    label: "LinkedIn",
    value: "Connect professionally",
    href: siteConfig.linkedIn,
    note: "Professional background and updates."
  },
  {
    label: "Visual work",
    value: "View storytelling work",
    href: "/#photography",
    note: "Automotive stills, motion, and visual direction that support the portfolio narrative."
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
