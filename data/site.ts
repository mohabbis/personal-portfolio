import type { ContactItem, FeatureItem, SocialLink } from "@/lib/types";

export const siteConfig = {
  name: "MUHA",
  title: "Thoughtful systems, environments, and digital experiences.",
  description:
    "MUHA — a restrained editorial portfolio exploring branding, environments, systems, and digital experiences.",
  location: "Chicago, Illinois",
  email: "muharafi@umich.edu",
  linkedIn: "https://www.linkedin.com/in/muharafiq",
  availability: "Living portfolio.",
  hero: {
    eyebrow: "Chicago ↔ Ann Arbor",
    headline: "Leaving every room a little brighter.",
    subheadline: "Thoughtful systems, environments, and digital experiences.",
    primaryCta: {
      label: "Selected Work",
      href: "/portfolio"
    },
    secondaryCta: {
      label: "Archive",
      href: "/photography"
    }
  },
  about: {
    intro:
      "Based between Chicago and Ann Arbor, I’m interested in how thoughtful systems, environments, and technology shape everyday experiences.",
    paragraphs: [
      "My work spans branding, digital experiences, operational systems, and environmental technology — with an emphasis on clarity, atmosphere, and intentional design."
    ],
    strengths: []
  },
  focusAreas: {
    title: "Selected practice",
    bullets: [
      "Brand systems and identity refinement.",
      "Digital experiences and editorial interfaces.",
      "Environmental systems and ambient computing.",
      "Photography, materials, and visual composition."
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
