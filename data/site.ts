import type { ContactItem, FeatureItem, SocialLink } from "@/lib/types";

export const siteConfig = {
  name: "MUHA",
  title: "Strategy, product, and creative technology.",
  description:
    "MUHA — a luxury-editorial portfolio for brand work, interfaces, photography, spaces, and connected systems.",
  location: "Chicago, Illinois",
  email: "muharafi@umich.edu",
  linkedIn: "https://www.linkedin.com/in/muharafiq",
  availability: "This is a living portfolio I designed, built, and keep refining.",
  hero: {
    eyebrow: "Interfaces • Brands • Spaces • Images",
    headline: "Leaving every room a little brighter.",
    subheadline: "Design-minded work across brands, interfaces, spaces, and systems.",
    primaryCta: {
      label: "View the work",
      href: "/portfolio"
    },
    secondaryCta: {
      label: "Get in touch",
      href: "/contact"
    }
  },
  about: {
    intro:
      "I’m Muha — a builder, designer, and systems thinker based between Michigan and Chicago.",
    paragraphs: [
      "I work across brand, web, photography, interiors, and connected-home concepts, with a focus on making digital and physical environments feel intentional.",
      "Most of my projects start with structure, move through taste, and end with polish.",
      "The thread is simple: make things clearer, warmer, and more finished than they were before."
    ],
    strengths: [
      "Interfaces",
      "Brands",
      "Spaces",
      "Images"
    ]
  },
  focusAreas: {
    title: "Creative practice",
    bullets: [
      "Interfaces: websites, app concepts, smart-home systems, and digital products.",
      "Brands: identity, positioning, visual systems, and local business presence.",
      "Spaces: interiors, smart-home infrastructure, object placement, and atmosphere.",
      "Images: photography, editing, composition, color, and texture."
    ]
  }
};

export const highlights: FeatureItem[] = [
  {
    title: "Frame",
    description: "Start with the structure: what needs to be clearer, sharper, or easier to use."
  },
  {
    title: "Build",
    description: "Turn the direction into working pages, systems, visuals, and details."
  },
  {
    title: "Polish",
    description: "Refine until the work feels intentional, restrained, and finished."
  }
];

export const workingPrinciples: FeatureItem[] = [
  {
    title: "Clarity first",
    description: "The best work makes the next step obvious without over-explaining itself."
  },
  {
    title: "Finish well",
    description: "Spacing, copy, image choice, and interaction details decide whether something feels real."
  },
  {
    title: "Taste counts",
    description: "A strong point of view matters. The work should feel considered before it feels loud."
  }
];

export const contactItems: ContactItem[] = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    note: "Reach out for projects, roles, collaborations, or design-minded work."
  },
  {
    label: "LinkedIn",
    value: "Connect professionally",
    href: siteConfig.linkedIn,
    note: "Background, selected work, and professional updates."
  },
  {
    label: "Work",
    value: "Explore selected projects",
    href: "/portfolio",
    note: "Brand, web, product, and systems projects."
  },
  {
    label: "Gallery",
    value: "View the archive",
    href: "/photography",
    note: "Cars, sky, interiors, details, and visual studies."
  }
];

export const socialLinks: SocialLink[] = [
  {
    label: "LinkedIn",
    href: siteConfig.linkedIn
  },
  {
    label: "Work",
    href: "/portfolio"
  },
  {
    label: "Gallery",
    href: "/photography"
  },
  {
    label: "Email",
    href: `mailto:${siteConfig.email}`
  }
];
