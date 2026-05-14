import type { ContactItem, FeatureItem, SocialLink } from "@/lib/types";

export const siteConfig = {
  name: "Muhammad Rafiq",
  title: "Strategy, analysis, and client-ready work.",
  description:
    "Muhammad Rafiq — structured problem-solving and client-ready work across strategy, operations, and design. Built for consulting recruiting.",
  location: "Chicago, Illinois",
  email: "muharafi@umich.edu",
  linkedIn: "https://www.linkedin.com/in/muharafiq",
  availability:
    "Actively recruiting for management consulting, strategy, and operations roles. Recruiting conversations, case prep walkthroughs, and portfolio reviews are welcome.",
  hero: {
    eyebrow: "Strategy · Analysis · Communication",
    headline: "Every complex problem has a cleaner answer.",
    subheadline:
      "I frame ambiguous challenges, structure evidence-based recommendations, and communicate them in ways that make decisions easier.",
    description:
      "This portfolio shows how I think — case studies, analytical projects, and builds that demonstrate structured problem-solving across strategy, operations, and design.",
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
      "I believe the best work happens when the thinking is visible: structured, clearly communicated, and easy to act on.",
    paragraphs: [
      "My projects live at the intersection of strategy, analysis, and execution. I care about the business case, the underlying logic, and whether the final output is something a decision-maker can actually use.",
      "I'm drawn to problems that look messy before they look solvable — the kind where framing the question correctly does half the work. That applies equally to a brand positioning brief, a product roadmap, a process redesign, or a client presentation.",
      "Whether I'm building a web product, developing a brand strategy, or structuring a recommendation, the through-line is always the same: clear structure, rigorous logic, and a finish that doesn't need an explanation."
    ],
    strengths: [
      "Structured Problem Framing",
      "Evidence-Based Analysis",
      "Executive Communication",
      "Cross-Functional Execution"
    ]
  },
  consultingReady: {
    title: "Where I fit",
    bullets: [
      "Management consulting: hypothesis-driven problem decomposition, structured recommendations, and presentation-ready deliverables.",
      "Strategy & operations: process improvement, vendor management, budgeting, and practical decision support.",
      "Digital & design: brand strategy, editorial web systems, and high-quality client-facing outputs.",
      "Technology: Next.js, TypeScript, data analysis in Python and SQL, and systems thinking for digital products."
    ]
  }
};

export const highlights: FeatureItem[] = [
  {
    title: "Frame",
    description: "Define the right problem before reaching for a solution. Ambiguity is a symptom, not the answer."
  },
  {
    title: "Analyze",
    description: "Structure the evidence, test the hypothesis, and build a recommendation that holds under scrutiny."
  },
  {
    title: "Communicate",
    description: "Package the answer so the insight lands before anyone has to ask what it means."
  }
];

export const workingPrinciples: FeatureItem[] = [
  {
    title: "Structure first",
    description: "A clear framework does more work than a clever solution. Get the logic right, then make it elegant."
  },
  {
    title: "Logic, then language",
    description: "If the reasoning is sound, communicating it is easy. If it isn't, no amount of polish will hide it."
  },
  {
    title: "Finish to a standard",
    description: "The margin, the phrasing, the final slide — the details that separate work that impresses from work that merely delivers."
  }
];

export const contactItems: ContactItem[] = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    note: "Best way to reach me about roles, recruiting timelines, or a portfolio walkthrough."
  },
  {
    label: "LinkedIn",
    value: "Connect professionally",
    href: siteConfig.linkedIn,
    note: "Background, recruiting updates, and professional context."
  },
  {
    label: "Case Studies",
    value: "View selected work",
    href: "/#projects",
    note: "Project write-ups showing structured thinking from problem to outcome."
  }
];

export const socialLinks: SocialLink[] = [
  {
    label: "LinkedIn",
    href: siteConfig.linkedIn
  },
  {
    label: "Case Studies",
    href: "/#projects"
  },
  {
    label: "Email",
    href: `mailto:${siteConfig.email}`
  }
];
