import type { ContactItem, FeatureItem, SocialLink, StatItem } from "@/lib/types";

export const siteConfig = {
  name: "Muhammad Rafiq",
  title: "Muhammad Rafiq builds web interfaces, smart-home concepts, and visual work.",
  description:
    "A personal portfolio focused on front-end work, MuHome, connected-device ideas, and photography.",
  location: "Chicago, Illinois, United States",
  email: "muharafi@umich.edu",
  linkedIn: "https://www.linkedin.com/in/muharafiq",
  availability: "Open to internships, product work, software projects, and creative collaborations.",
  hero: {
    eyebrow: "Frontend • Product Ideas • Photography",
    headline: "I build clean interfaces, smart-home concepts, and photo-led web experiences.",
    subheadline:
      "I’m a 20-year-old builder focused on making technical ideas feel sharp, usable, and easy to look at.",
    description:
      "This site collects the work I’m proud of right now: MuHome, web UI, connected-device experiments, and automotive photography.",
    primaryCta: {
      label: "View MuHome",
      href: "/portfolio/muhome"
    },
    secondaryCta: {
      label: "View the work",
      href: "/#projects"
    }
  },
  about: {
    intro:
      "I like building things that look good, work clearly, and feel close to real use.",
    paragraphs: [
      "Most of my work sits between software, product thinking, and visuals. I care about the interface, but also about how the idea is presented.",
      "MuHome is my main product concept right now. The photography and car work give the site its visual direction.",
      "I’m still early, but I’m building in public and keeping the work specific."
    ],
    strengths: [
      "Frontend",
      "Product UI",
      "Smart home",
      "Photography"
    ]
  }
};

export const stats: StatItem[] = [
  {
    label: "Focus",
    value: "Frontend + Product",
    detail: "React, Next.js, and interface work shaped around clear flows."
  },
  {
    label: "Signature Project",
    value: "MuHome",
    detail: "A smart-home app concept focused on device state and routine control."
  },
  {
    label: "Creative Edge",
    value: "Photo + Motion",
    detail: "Automotive photos and motion work that give the site its visual identity."
  }
];

export const highlights: FeatureItem[] = [
  {
    title: "Build",
    description: "Frontend projects, product concepts, and small experiments."
  },
  {
    title: "Design",
    description: "Clean interfaces, strong spacing, and photo-led presentation."
  },
  {
    title: "Learn",
    description: "Hardware, automation, and connected-device ideas I’m still exploring."
  }
];

export const workingPrinciples: FeatureItem[] = [
  {
    title: "Clear UI",
    description: "Interfaces should be easy to scan and hard to misread."
  },
  {
    title: "Real demos",
    description: "I’d rather show working pieces than vague concept language."
  },
  {
    title: "Taste matters",
    description: "The way work is shown changes how seriously people take it."
  }
];

export const contactItems: ContactItem[] = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    note: "Best for opportunities, project ideas, or direct follow-up."
  },
  {
    label: "LinkedIn",
    value: "Connect professionally",
    href: siteConfig.linkedIn,
    note: "Professional background and updates."
  },
  {
    label: "Photography",
    value: "View visual work",
    href: "/#photography",
    note: "Automotive stills, motion, and visual direction."
  }
];

export const socialLinks: SocialLink[] = [
  {
    label: "LinkedIn",
    href: siteConfig.linkedIn
  },
  {
    label: "Photography",
    href: "/#photography"
  },
  {
    label: "Email",
    href: `mailto:${siteConfig.email}`
  }
];
