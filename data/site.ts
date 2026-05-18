import type { ContactItem, FeatureItem, SocialLink } from "@/lib/types";

export const siteConfig = {
  name: "Muhammad Rafiq",
  title: "Muhammad Rafiq — Strategy, analysis, and structured execution.",
  description:
    "Muhammad Rafiq — strategy-minded builder focused on structured problem-solving, clear communication, and polished execution.",
  location: "Chicago, Illinois",
  email: "muharafi@umich.edu",
  linkedIn: "https://www.linkedin.com/in/muharafiq",
  availability: "Open to strategy, product, operations, and analyst roles.",
  hero: {
    eyebrow: "Strategy · Analysis · Execution",
    headline: "Structure first. Then the solution.",
    subheadline:
      "I break down hard problems, build the analytical case, and deliver recommendations that hold up in the room.",
    description:
      "A portfolio of strategy engagements, structured analyses, and client-facing work.",
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
      "I care about getting to the right answer — not just a polished one.",
    paragraphs: [
      "My work sits at the intersection of structured problem-solving and clear execution. I define the real problem first, form a hypothesis, pressure-test it with evidence, and communicate the answer in a way that moves decisions forward."
    ],
    strengths: [
      "Structured Problem Solving",
      "Hypothesis-Driven Analysis",
      "Stakeholder Communication",
      "Executive-Ready Deliverables"
    ]
  },
  whatIBring: {
    title: "What I bring",
    bullets: [
      "Structured problem solving: decomposing ambiguous problems into components, forming hypotheses, and stress-testing conclusions with evidence.",
      "Quantitative analysis: applying economic and statistical frameworks to build a rigorous case.",
      "Stakeholder communication: synthesizing complex tradeoffs into clear, executive-ready recommendations.",
      "Client delivery: polished outputs — decks, memos, digital — that move decisions forward."
    ]
  }
};

export const highlights: FeatureItem[] = [
  {
    title: "Frame",
    description: "Define the right problem first. Clear framing creates better decisions, cleaner tradeoffs, and stronger recommendations."
  },
  {
    title: "Align",
    description: "Bring stakeholders, constraints, and resources into the same operating picture before moving into execution."
  },
  {
    title: "Deliver",
    description: "Translate strategy into polished outputs — from structured analyses and operating plans to client-facing digital experiences."
  }
];

export const workingPrinciples: FeatureItem[] = [
  {
    title: "Structure creates clarity",
    description: "Ambiguous problems become tractable when they're properly decomposed. The right structure surfaces the real question and the viable options."
  },
  {
    title: "Execution proves the thinking",
    description: "A recommendation is only as strong as its follow-through. Details, sequencing, and reliability are where strategy survives contact with reality."
  },
  {
    title: "Presentation changes outcomes",
    description: "The sequencing, framing, and precision of how an answer is communicated determines whether it gets acted on."
  }
];

export const contactItems: ContactItem[] = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    note: "Best for consulting and strategy opportunities."
  },
  {
    label: "LinkedIn",
    value: "Connect professionally",
    href: siteConfig.linkedIn,
    note: "My background and selected work."
  },
  {
    label: "Portfolio",
    value: "Explore selected work",
    href: "/portfolio",
    note: "Case studies across strategy, operations, systems, and brand positioning."
  },
  {
    label: "Photography",
    value: "View the gallery",
    href: "/photography",
    note: "Urban moments from Chicago and Ann Arbor."
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
