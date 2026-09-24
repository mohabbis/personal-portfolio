import type { ProjectItem } from "@/lib/types";

export const projects: ProjectItem[] = [
  {
    slug: "clipstack",
    title: "Clipstack",
    eyebrow: "macOS · Product design",
    subtitle: "A clipboard history for macOS that lives in the menu bar and never leaves your Mac.",
    relationshipLabel: "Open source",
    systemRole: "interface",
    category: "macOS · Product design",
    summary:
      "I wanted to get back the thing I copied ten minutes ago without handing my clipboard to a server. So I designed it keyboard-first and kept it local.",
    tags: ["macOS", "Swift", "Privacy", "UI"],
    href: "/portfolio/clipstack",
    ctaLabel: "Read case study",
    image: "/images/projects/clipstack-cover.svg",
    imageFit: "cover",
    featured: true
  },
  {
    slug: "fader",
    title: "Fader",
    eyebrow: "macOS · Audio",
    subtitle: "A menu-bar mixer that gives every app its own volume, mute, and output device.",
    relationshipLabel: "Open source",
    systemRole: "interface",
    category: "macOS · Audio",
    summary:
      "Spotify on my headphones, the browser on the speakers. macOS couldn't split them, so I built a small mixer that does.",
    tags: ["macOS", "Swift", "Core Audio", "UI"],
    href: "/portfolio/fader",
    ctaLabel: "Read case study",
    image: "/images/projects/fader-cover.svg",
    imageFit: "cover",
    featured: true
  }
];
