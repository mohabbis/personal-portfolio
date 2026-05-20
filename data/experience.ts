import type { ExperienceItem } from "@/lib/types";

export const experiences: ExperienceItem[] = [
  {
    title: "Brand & Digital Strategy",
    organization: "Fancy Car Wash",
    location: "Milwaukee, Wisconsin",
    period: "2024",
    logoLabel: "FCW",
    summary:
      "Leading end-to-end brand transformation and digital platform development to capture premium market positioning in Milwaukee's fragmented local car wash industry.",
    bullets: [
      "Reframing market positioning from commodity service to premium experience, enabling price premium in target market.",
      "Developing comprehensive brand system including SVG logo identity, visual language, and messaging framework.",
      "Building website prototype informed by feasibility studies analyzing market demand and competitive dynamics; social media launch planned upon validation."
    ],
    tags: ["Brand Strategy", "Go-to-Market", "Market Research", "Web Development"]
  },
  {
    title: "Product Strategy & Design",
    organization: "MuHome",
    location: "Self-Directed",
    period: "2024 — Present",
    logoLabel: "MuHome",
    summary:
      "Architecting and building a production-ready iOS smart-home application with spatial modeling, intent-based automation, and full iCloud synchronization—designed to work seamlessly with or without connected devices.",
    bullets: [
      "Designed comprehensive spatial data model supporting homes, rooms, zones, and device planning with 3D positioning and media attachments.",
      "Implemented intent-based control system with predefined routines (Study, Sleep, Movie, Away, Morning) and custom scheduling capabilities.",
      "Built robust device lifecycle management tracking devices from discovery through connection to controllable state, with stale/bridge detection.",
      "Engineered scenes and universal remote systems enabling complex automations with conditional logic and multi-device actions.",
      "Integrated CloudKit for iCloud sync, CoreData for local persistence with background processing, and Keychain for secure token storage.",
      "Created complete UI framework including home dashboard, device management, intent controls, and settings—all functional with zero smart devices connected."
    ],
    tags: ["Product Strategy", "iOS Development", "Systems Architecture", "CloudKit", "CoreData", "SwiftUI"]
  },
  {
    title: "Portfolio & Editorial Design",
    organization: "muharafiq.com",
    location: "Self-Directed",
    period: "2024 — Present",
    logoLabel: "MR",
    summary:
      "Designed and engineered a high-performance portfolio platform that communicates strategic value proposition more effectively than traditional résumé formats.",
    bullets: [
      "Reframed personal brand narrative around business outcomes and problem-solving capabilities versus tactical deliverables.",
      "Architected and built Next.js platform from scratch with focus on performance, accessibility, and editorial clarity.",
      "Platform generates qualified inbound inquiries and serves as primary credential for consulting and career opportunities."
    ],
    tags: ["Product Design", "Web Performance", "Strategic Communication", "Next.js"]
  },
  {
    title: "Strategic Thinking & Leadership",
    organization: "University of Michigan",
    location: "Ann Arbor, Michigan",
    period: "2024 — Present / Expected 2028",
    logoLabel: "UMich",
    logoImage: "/images/logos/michigan-wolverines.png",
    summary:
      "Developing structured problem-solving methodology and leadership capabilities through rigorous academics, cross-functional projects, and campus initiatives.",
    bullets: [
      "Spearheaded cross-functional student initiatives, aligning diverse teams toward common strategic objectives.",
      "Developed structured communication frameworks to drive stakeholder alignment and executive decision-making.",
      "Translated complex analytical concepts into actionable plans across academic projects and competitive case competitions."
    ],
    tags: ["Leadership", "Strategic Thinking", "Communication", "Problem Solving"]
  }
];
