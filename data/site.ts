import type { ContactItem, FeatureItem, SocialLink } from "@/lib/types";

export const siteConfig = {
  name: "Muhammad Rafiq",
  title: "Creative technology, design systems, and polished digital work.",
  description:
    "Muhammad Rafiq — a creative portfolio of web, design, photography, branding, smart-home experiments, and systems-minded digital work.",
  location: "Chicago, Illinois",
  email: "muharafi@umich.edu",
  linkedIn: "https://www.linkedin.com/in/muharafiq",
  availability:
    "Exploring roles across strategy, product, and creative technology. This site is a live project I designed, built, and shipped in Next.js.",
  hero: {
    eyebrow: "Creative Technology · Design · Systems",
    headline: "Leaving every room a little brighter.",
    subheadline:
      "I build polished digital experiences that blend taste, structure, and practical problem-solving.",
    description:
      "A studio-style portfolio for the things I make: web projects, brand systems, photography, smart-home experiments, and small details finished with care.",
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
      "I care about work that feels considered: visually sharp, technically sound, and clear enough to make the complicated feel calm.",
    paragraphs: [
      "My projects sit between creative direction, digital systems, and hands-on execution. I like building the thing, shaping how it feels, and making sure the final experience has a point of view.",
      "I'm drawn to projects where taste and structure have to meet: a brand refresh, a web experience, a smart-home interface, a photo set, or a product idea that needs a cleaner frame.",
      "Whether I'm designing a site, wiring up a home system, shooting visuals, or shaping a brand, the through-line is simple: useful ideas, refined details, and a finish that feels intentional."
    ],
    strengths: [
      "Creative Direction",
      "Digital Product Thinking",
      "Brand & Visual Systems",
      "Polished Execution"
    ]
  },
  consultingReady: {
    title: "Where I fit",
    bullets: [
      "Strategy: clear framing, practical recommendations, and decisions shaped by good taste and sound logic.",
      "Product: digital experiences, interface thinking, user flows, and systems that feel easy to use.",
      "Creative technology: Next.js, TypeScript, smart-home experimentation, and interactive builds.",
      "Design & brand: editorial web systems, photography, identity work, and polished visual storytelling."
    ]
  }
};

export const highlights: FeatureItem[] = [
  {
    title: "Frame",
    description: "Find the cleanest angle before building. The right frame turns a loose idea into something legible."
  },
  {
    title: "Build",
    description: "Turn concepts into working systems, from websites and interfaces to smart-home experiments."
  },
  {
    title: "Polish",
    description: "Refine the margin, motion, image, and phrase until the work feels deliberate without explaining itself."
  }
];

export const workingPrinciples: FeatureItem[] = [
  {
    title: "Taste has structure",
    description: "Strong visuals still need a spine. Layout, rhythm, and hierarchy make the work feel calm instead of loud."
  },
  {
    title: "Build the feeling",
    description: "A project is not just what it does. It is how it moves, sounds, reads, and settles in the user's hand."
  },
  {
    title: "Finish to a standard",
    description: "The spacing, the phrasing, the final interaction: small details decide whether work feels ordinary or considered."
  }
];

export const contactItems: ContactItem[] = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    note: "Best way to reach me about projects, roles, or a portfolio walkthrough."
  },
  {
    label: "LinkedIn",
    value: "Connect professionally",
    href: siteConfig.linkedIn,
    note: "Background, selected work, and professional context."
  },
  {
    label: "Portfolio",
    value: "Explore selected work",
    href: "/portfolio",
    note: "Project write-ups across web, design, brand, photography, and creative technology."
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
    label: "Email",
    href: `mailto:${siteConfig.email}`
  }
];
