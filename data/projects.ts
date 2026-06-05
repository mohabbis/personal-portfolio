import type { ProjectItem } from "@/lib/types";

export const projects: ProjectItem[] = [
  {
    slug: "lumen",
    title: "Lumen",
    eyebrow: "Featured Project",
    subtitle: "A calm iOS companion for your home — scenes, rhythms, and ambient control built on HomeKit.",
    relationshipLabel: "Featured project",
    systemRole: "interface",
    category: "Product · Smart Home · Interface",
    summary:
      "A native iOS companion that makes the home feel right at any hour. Calm scenes, quiet automations, and HomeKit control that stays out of the way.",
    problem: "Fragmented device control creates cognitive load and sensory stress. Most smart-home apps optimize for feature count, not human experience.",
    intervention: "Calm, intent-based HomeKit control organized around rooms and scenes — not switches and schedules. Everything runs on-device.",
    outcome: "An interface that acts with your approval, not around your attention. Launching 2026.",
    tags: ["Product", "Smart Home", "SwiftUI", "Systems"],
    href: "/portfolio/lumen",
    ctaLabel: "View case study",
    image: "/images/projects/lumen-iot-interface.svg",
    darkImage: "/images/projects/lumen-iot-interface.svg",
    imageFit: "cover",
    featured: true
  },
  {
    slug: "car-wash",
    title: "Modern Branding for Local Businesses",
    eyebrow: "Client work · In progress",
    subtitle: "Web development, marketing, and DRB-ready technology for local car wash operators.",
    relationshipLabel: "In development",
    category: "Web Development · Marketing · Systems Integration",
    summary:
      "Digital strategy for local car wash businesses, from conversion-focused websites and marketing funnels to planned DRB Car Wash system membership integrations.",
    problem: "Local operators run on referrals and foot traffic. No digital presence, no retention system, no membership infrastructure.",
    intervention: "Conversion-focused websites, marketing funnels, and DRB Car Wash system integration for membership and loyalty.",
    outcome: "A repeatable digital playbook for independent operators competing with national chains.",
    tags: ["Web Development", "Marketing", "DRB Integration", "Local Business"],
    href: "/portfolio/car-wash",
    ctaLabel: "View case study",
    image: "/images/projects/local-business-branding.svg",
    darkImage: "/images/projects/local-business-branding.svg",
    imageFit: "cover",
    featured: true
  },
  {
    slug: "operations",
    title: "Fraternal Operations",
    eyebrow: "Operations · Alpha Sigma Phi",
    subtitle: "Navigating inherited debt, nationals relationships, housing disputes, and building alumni infrastructure from scratch.",
    relationshipLabel: "Operations leadership",
    category: "Operations · Strategy · Finance",
    summary:
      "Chapter operations, financial planning, alumni infrastructure, and governance work under real constraints.",
    problem: "Inherited $40K+ in debt, no alumni network, no financial controls, and a nationals relationship under strain.",
    intervention: "Rebuilt financial operations, established alumni infrastructure, and navigated housing disputes through direct stakeholder management.",
    outcome: "Chapter stabilized, debt restructured, alumni giving pipeline established, and governance framework formalized.",
    tags: ["Operations", "Strategy", "Finance", "Governance"],
    href: "/portfolio/operations",
    ctaLabel: "View case study",
    image: "/images/projects/alumni-operations-system.svg",
    darkImage: "/images/projects/alumni-operations-system.svg",
    imageFit: "cover",
    featured: true
  }
];
