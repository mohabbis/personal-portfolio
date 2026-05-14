import type { ContactItem, FeatureItem, SocialLink } from "@/lib/types";

export const siteConfig = {
  name: "Muhammad Rafiq",
  title: "CS Student @ Michigan",
  description:
    "CS student at Michigan. Building web projects and applying for internships.",
  location: "Ann Arbor, MI / Chicago, IL",
  email: "muharafi@umich.edu",
  linkedIn: "https://www.linkedin.com/in/muharafiq",
  availability:
    "Seeking SWE internships for Summer 2026. Open to full-time after April 2027.",
  hero: {
    eyebrow: "CS • SWE • Product",
    headline: "Hi, I'm Muhammad Rafiq.",
    subheadline:
      "UMich CS student building web apps, smart-home tools, and product work.",
    description: "Projects, experience, and notes.",
    primaryCta: {
      label: "Projects",
      href: "/portfolio"
    },
    secondaryCta: {
      label: "Resume",
      href: "/resume.pdf"
    }
  },
  about: {
    intro: "CS student at Michigan.",
    paragraphs: [
      "I build useful web apps.",
      "MuHome is my main project.",
      "I care about clear UI and shipping."
    ],
    strengths: [
      "Frontend",
      "Product",
      "Full-stack",
      "Problem solving",
      "Communication",
      "UI/UX"
    ]
  },
  education: {
    institution: "University of Michigan",
    location: "Ann Arbor, MI",
    degree: "Bachelor of Science in Computer Science",
    graduation: "April 2027",
    gpa: "3.8/4.0",
    relevantCoursework: [
      "EECS 280",
      "EECS 281",
      "EECS 381",
      "EECS 485",
      "EECS 484",
      "EECS 492",
      "EECS 370",
      "EECS 498"
    ],
    achievements: [
      "Dean's List",
      "Engineering Scholar",
      "Michigan Hackers"
    ]
  },
  internshipGoals: {
    title: "Looking For",
    bullets: [
      "Frontend or full-stack internships.",
      "Teams that ship and review well.",
      "Clean code and clear design.",
      "TypeScript, React, Next.js."
    ]
  }
};

export const highlights: FeatureItem[] = [
  {
    title: "Think",
    description: "Break it down first."
  },
  {
    title: "Build",
    description: "Get to a working version."
  },
  {
    title: "Explain",
    description: "Keep it easy to read."
  }
];

export const workingPrinciples: FeatureItem[] = [
  {
    title: "Clear",
    description: "Easy to scan."
  },
  {
    title: "Fast",
    description: "Prototype early."
  },
  {
    title: "Finished",
    description: "Details matter."
  }
];

export const contactItems: ContactItem[] = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    note: "Fastest."
  },
  {
    label: "LinkedIn",
    value: "Connect professionally",
    href: siteConfig.linkedIn,
    note: "Background."
  },
  {
    label: "Resume",
    value: "Download PDF",
    href: "/resume.pdf",
    note: "One page."
  },
  {
    label: "Projects",
    value: "View projects",
    href: "/#projects",
    note: "Selected work."
  }
];

export const socialLinks: SocialLink[] = [
  {
    label: "LinkedIn",
    href: siteConfig.linkedIn
  },
  {
    label: "GitHub",
    href: "https://github.com/mohabbis"
  },
  {
    label: "Email",
    href: `mailto:${siteConfig.email}`
  }
];
