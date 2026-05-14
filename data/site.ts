import type { ContactItem, FeatureItem, SocialLink } from "@/lib/types";

export const siteConfig = {
  name: "Muhammad Rafiq",
  title: "Creative portfolio for strategy, design, and polished builds.",
  description:
    "A luxury-editorial portfolio for Muhammad Rafiq: project storytelling, design taste, web work, smart-home systems, branding, photography, and selected builds.",
  location: "Chicago, Illinois, United States",
  email: "muharafi@umich.edu",
  linkedIn: "https://www.linkedin.com/in/muharafiq",
  availability:
    "Open to consulting, strategy, finance, operations, product, and design-forward project work.",
  hero: {
    eyebrow: "Strategy • Design • Systems • Story",
    headline: "Leaving every room a little brighter.",
    subheadline:
      "I shape sharp ideas into polished web, brand, smart-home, and operations projects with a studio-level eye for detail.",
    description:
      "This portfolio is less resume drawer, more working gallery: selected builds, visual systems, and project stories that show how I think, make, and refine.",
    primaryCta: {
      label: "View the work",
      href: "/portfolio"
    },
    secondaryCta: {
      label: "Start a conversation",
      href: "/contact"
    }
  },
  about: {
    intro:
      "I like work that feels considered: useful enough to solve the problem, beautiful enough to be remembered.",
    paragraphs: [
      "My projects sit where strategy, design, and execution overlap. I care about the business case, the user flow, the visual rhythm, and whether the final thing earns attention without begging for it.",
      "The work here spans web design, local-business branding, smart-home technology, photography instincts, and operational problem solving. The through-line is simple: make the messy parts legible, then make the result feel finished.",
      "I am drawn to polished environments, clear systems, and small details that change how something is perceived. That applies equally to a landing page, a smart-home dashboard, a vendor process, or a visual identity."
    ],
    strengths: [
      "Project storytelling",
      "Visual direction",
      "Frontend execution",
      "Operational clarity"
    ]
  },
  consultingReady: {
    title: "Where I fit",
    bullets: [
      "Strategy and consulting: framing ambiguous problems, building structured recommendations, and making the answer easy to understand.",
      "Finance and operations: budgeting, vendor coordination, process cleanup, and practical decision support.",
      "Design and web: editorial visual systems, landing pages, branding, photography direction, and portfolio-quality presentation.",
      "Technology projects: Next.js, TypeScript, smart-home systems, HomeKit/Home Assistant concepts, and rapid prototypes."
    ]
  }
};

export const highlights: FeatureItem[] = [
  {
    title: "Frame",
    description: "Turn the vague brief into a clean point of view before the build begins."
  },
  {
    title: "Make",
    description: "Move quickly from tasteboard to working version, then sharpen the edges."
  },
  {
    title: "Present",
    description: "Package the work so the story lands before anyone has to squint."
  }
];

export const workingPrinciples: FeatureItem[] = [
  {
    title: "Clarity first",
    description: "A page, pitch, or system should make its logic visible. Pretty confusion is still confusion."
  },
  {
    title: "Taste is a tool",
    description: "Visual judgment is not decoration. It changes trust, momentum, and how seriously the work is taken."
  },
  {
    title: "Finish the finish",
    description: "Spacing, copy, states, handoff, and small polish marks are where a project stops feeling temporary."
  }
];

export const contactItems: ContactItem[] = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    note: "Best way to reach me about roles, collaborations, or a portfolio walkthrough."
  },
  {
    label: "LinkedIn",
    value: "Connect professionally",
    href: siteConfig.linkedIn,
    note: "Background, work updates, and professional context."
  },
  {
    label: "Projects",
    value: "View selected work",
    href: "/#projects",
    note: "Case studies, builds, and project notes."
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
