import type { ContactItem, FeatureItem, SocialLink } from "@/lib/types";

export const siteConfig = {
  name: "Muhammad Rafiq",
  title: "Strategy, design, systems, and photography.",
  description:
    "Muhammad Rafiq — a luxury-editorial portfolio for strategy-led projects, design systems, photography, and creative technology.",
  location: "Chicago, Illinois",
  email: "muharafi@umich.edu",
  linkedIn: "https://www.linkedin.com/in/muharafiq",
  availability:
    "Open to strategy, design, systems, and creative technology conversations. This is a living portfolio I designed, built, and keep refining.",
  hero: {
    eyebrow: "Strategy · Design · Systems",
    headline: "Leaving every room a little brighter.",
    subheadline:
      "I make calm, polished digital work across web, systems, and image-making.",
    description:
      "Selected work from Fancy Car Wash, MuHome, and this portfolio itself.",
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
      "I like work that feels clear, warm, and finished.",
    paragraphs: [
      "Most of my projects start with a sharp point of view and end with a cleaner system, a better story, or a more usable result.",
      "I move between strategy, design, photography, and the practical details that make work feel real.",
      "The thread is taste: structure when it helps, restraint when it matters, and enough polish that the result can stand on its own."
    ],
    strengths: [
      "Strategy",
      "Design",
      "Systems",
      "Photography"
    ]
  },
  focusAreas: {
    title: "What keeps recurring",
    bullets: [
      "Strategy and positioning: clear framing, simple language, and decisions that hold up.",
      "Design and systems: sites, workflows, and interfaces that feel calm and useful.",
      "Creative technology: Next.js, TypeScript, smart-home ideas, and practical experimentation.",
      "Image and atmosphere: photography, composition, and editorial presentation."
    ]
  }
};

export const highlights: FeatureItem[] = [
  {
    title: "Frame",
    description: "Start with the shape of the thing before the details take over."
  },
  {
    title: "Build",
    description: "Move ideas into working systems instead of endless planning."
  },
  {
    title: "Refine",
    description: "Edit until the work feels intentional in both text and form."
  }
];

export const workingPrinciples: FeatureItem[] = [
  {
    title: "Clarity first",
    description: "A good project is easier to trust when the framing is simple."
  },
  {
    title: "Finish well",
    description: "The last ten percent shapes whether work feels complete or just shipped."
  },
  {
    title: "Taste counts",
    description: "Spacing, phrasing, and composition should all point in the same direction."
  }
];

export const contactItems: ContactItem[] = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    note: "Best way to reach me about projects, collaborations, or a good idea."
  },
  {
    label: "LinkedIn",
    value: "Connect professionally",
    href: siteConfig.linkedIn,
    note: "A quick professional snapshot and selected context."
  },
  {
    label: "Portfolio",
    value: "Explore selected work",
    href: "/portfolio",
    note: "Fancy Car Wash, MuHome, and the portfolio itself."
  },
  {
    label: "Photography",
    value: "View the gallery",
    href: "/photography",
    note: "Quiet scenes, city light, and the occasional detour."
  }
];

export const socialLinks: SocialLink[] = [
  {
    label: "LinkedIn",
    href: siteConfig.linkedIn
  },
  {
    label: "Portfolio",
    href: "/portfolio"
  },
  {
    label: "Photography",
    href: "/photography"
  },
  {
    label: "Email",
    href: `mailto:${siteConfig.email}`
  }
];
