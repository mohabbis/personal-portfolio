import type { ContactItem, FeatureItem, SocialLink } from "@/lib/types";

export const siteConfig = {
  name: "MUHA",
  title: "Strategy, systems, and creative technology.",
  description:
    "MUHA — a restrained editorial portfolio exploring systems, operations, branding, and digital experiences.",
  location: "Chicago, Illinois",
  email: "muharafi@umich.edu",
  linkedIn: "https://www.linkedin.com/in/muharafiq",
  availability: "Living portfolio.",
  hero: {
    eyebrow: "Chicago ↔ Ann Arbor",
    headline: "Leaving every room a little brighter.",
    subheadline:
      "Building structured digital experiences through design, operations, and technical execution.",
    primaryCta: {
      label: "Selected Work",
      href: "/portfolio"
    },
    secondaryCta: null
  },
  about: {
    intro:
      "I work on projects where strategy, operations, design, and technology overlap.",
    paragraphs: [
      "My experience includes budgeting and vendor coordination, student organization leadership, web design, branding, photography, smart home technology projects, and documenting systems and workflows.",
      "I value organization, precision, and continuous improvement. Whether physical or digital, I believe clean systems, thoughtful design, and structured environments create better outcomes and stronger long-term growth.",
      "I’m drawn to work that requires creativity, problem solving, attention to detail, and execution. I enjoy building workflows, brands, systems, and digital experiences that feel intentional, refined, and useful — where the final result reflects both function and craft."
    ],
    strengths: []
  },
  focusAreas: {
    title: "Selected practice",
    bullets: [
      "Systems design and workflow organization.",
      "Brand systems and digital identity refinement.",
      "Operational thinking and structured execution.",
      "Connected environments and smart home infrastructure."
    ]
  }
};

export const highlights: FeatureItem[] = [
  {
    title: "Frame",
    description: "Structure before decoration."
  },
  {
    title: "Build",
    description: "Systems that feel clear and intentional."
  },
  {
    title: "Polish",
    description: "Refine until the work feels inevitable."
  }
];

export const workingPrinciples: FeatureItem[] = [
  {
    title: "Clarity first",
    description: "The best work explains itself quietly."
  },
  {
    title: "Finish well",
    description: "Small details determine whether something feels complete."
  },
  {
    title: "Taste counts",
    description: "Restraint is usually stronger than noise."
  }
];

export const contactItems: ContactItem[] = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    note: "Projects, collaborations, and thoughtful work."
  },
  {
    label: "LinkedIn",
    value: "Professional background",
    href: siteConfig.linkedIn,
    note: "Selected work and updates."
  }
];

export const socialLinks: SocialLink[] = [
  {
    label: "LinkedIn",
    href: siteConfig.linkedIn
  },
  {
    label: "Email",
    href: `mailto:${siteConfig.email}`
  }
];
