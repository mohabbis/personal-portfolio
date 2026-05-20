import type { ContactItem, FeatureItem, SocialLink } from "@/lib/types";

export const siteConfig = {
  name: "Muhammad Rafiq",
  title: "Strategy, design, systems, and image-making.",
  description:
    "Muhammad Rafiq — strategy frameworks, digital products, and creative systems. Translating complex business challenges into scalable digital solutions.",
  location: "Chicago, Illinois",
  email: "muharafi@umich.edu",
  linkedIn: "https://www.linkedin.com/in/muharafiq",
  availability: "This is a living portfolio I designed, built, and keep refining.",
  hero: {
    eyebrow: "Strategy • Design • Systems",
    headline: "Leaving every room a little brighter.",
    subheadline:
      "I translate ambiguous business problems into clear strategic frameworks, then build digital solutions that drive measurable outcomes.",
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
      "Strategic Problem Solving",
      "Stakeholder Alignment",
      "Systems Design",
      "Execution Excellence"
    ]
  },
  focusAreas: {
    title: "What keeps recurring",
    bullets: [
      "Strategic problem-solving: reframing challenges, finding leverage, and making decisions that hold up under scrutiny.",
      "Systems thinking: websites, workflows, and interfaces that reduce friction and drive adoption.",
      "Execution excellence: building products and experiences that move from concept to impact.",
      "Clear communication: translating complex ideas into actionable plans and compelling narratives."
    ]
  }
};

export const highlights: FeatureItem[] = [
  {
    title: "Frame",
    description: "Define the problem space and identify strategic leverage points before diving into solutions."
  },
  {
    title: "Build",
    description: "Translate strategy into working systems—moving from insight to implementation with purpose."
  },
  {
    title: "Refine",
    description: "Iterate with intention until every element serves the broader business objective."
  }
];

export const workingPrinciples: FeatureItem[] = [
  {
    title: "Clarity first",
    description: "Complex challenges demand simple, defensible frameworks that stakeholders can rally behind."
  },
  {
    title: "Finish well",
    description: "The final details determine whether deliverables drive adoption or gather dust."
  },
  {
    title: "Taste counts",
    description: "Strategic rigor and aesthetic discipline are not optional—they signal credibility."
  }
];

export const contactItems: ContactItem[] = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    note: "Reach out for consulting opportunities, full-time roles, or strategic collaborations."
  },
  {
    label: "LinkedIn",
    value: "Connect professionally",
    href: siteConfig.linkedIn,
    note: "Professional background, recommendations, and selected case studies."
  },
  {
    label: "Portfolio",
    value: "Explore selected work",
    href: "/portfolio",
    note: "Case studies demonstrating problem framing, solution design, and measurable impact."
  },
  {
    label: "Photography",
    value: "View the gallery",
    href: "/photography",
    note: "Visual storytelling—urban landscapes, candid moments, and compositional studies."
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
