import type { ContactItem, FeatureItem, SocialLink } from "@/lib/types";

export const siteConfig = {
  name: "Muhammad Rafiq",
  title: "Strategy, creative technology, and polished digital execution.",
  description:
    "Muhammad Rafiq — strategy-minded builder focused on digital products, operational thinking, brand systems, and client-ready execution.",
  location: "Chicago, Illinois",
  email: "muharafi@umich.edu",
  linkedIn: "https://www.linkedin.com/in/muharafiq",
  availability:
    "Exploring roles across consulting, strategy, product, and creative technology. This site is a live project I designed, structured, and shipped in Next.js.",
  hero: {
    eyebrow: "Strategy · Creative Technology · Systems",
    headline: "Leaving every room a little brighter.",
    subheadline:
      "I build structured, polished digital experiences that combine analytical thinking, clear communication, and practical execution.",
    description:
      "A portfolio of strategy-led web projects, brand systems, product thinking, photography, and operational problem-solving built with an editorial standard.",
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
      "I care about work that feels considered: analytically grounded, visually sharp, and structured clearly enough to make complex ideas easier to act on.",
    paragraphs: [
      "My projects sit at the intersection of strategy, systems thinking, and execution. I like taking ambiguous ideas, structuring the problem, and carrying the work through to a polished final product.",
      "That process has shown up across branding projects, digital products, smart-home experimentation, budgeting and operations work, and client-facing web experiences.",
      "Whether I am building a site, refining a process, shaping a recommendation, or designing a user experience, the through-line is consistent: practical thinking, clear structure, and attention to detail."
    ],
    strengths: [
      "Structured Problem Solving",
      "Client Communication",
      "Digital Product Thinking",
      "Polished Execution"
    ]
  },
  consultingReady: {
    title: "Where I fit",
    bullets: [
      "Consulting & strategy: hypothesis-driven thinking, structured recommendations, and client-ready communication.",
      "Operations & execution: budgeting, vendor coordination, process improvement, and practical systems thinking.",
      "Product & technology: Next.js, TypeScript, digital product workflows, and systems-oriented experimentation.",
      "Brand & communication: editorial web systems, positioning, visual storytelling, and presentation polish."
    ]
  }
};

export const highlights: FeatureItem[] = [
  {
    title: "Frame",
    description: "Define the right problem first. Clear framing creates better decisions and cleaner execution."
  },
  {
    title: "Build",
    description: "Translate ideas into working systems, from digital products and operational workflows to polished client-facing experiences."
  },
  {
    title: "Polish",
    description: "Refine the communication, interaction, and presentation until the work feels intentional from end to end."
  }
];

export const workingPrinciples: FeatureItem[] = [
  {
    title: "Structure creates clarity",
    description: "Strong ideas become more useful when they are organized clearly, communicated directly, and easy to act on."
  },
  {
    title: "Execution matters",
    description: "Good thinking is only valuable if it survives implementation. Details, reliability, and follow-through matter."
  },
  {
    title: "Finish to a standard",
    description: "The spacing, phrasing, interaction, and final presentation shape whether work feels merely complete or genuinely considered."
  }
];

export const contactItems: ContactItem[] = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    note: "Best way to reach me about consulting, strategy, product, or creative technology opportunities."
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
    note: "Case studies and projects across strategy, systems, digital products, and brand work."
  },
  {
    label: "Photography",
    value: "View the gallery",
    href: "/photography",
    note: "Urban landscapes and moments captured between Chicago and Ann Arbor."
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
