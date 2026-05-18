import type { ProjectItem } from "@/lib/types";

import fancyCarWashImg from "@/public/images/projects/fancy-car-wash-thumbnail.svg";
import muhomeImg from "@/public/images/projects/muhome-thumbnail.svg";
import portfolioImg from "@/public/images/projects/portfolio-thumbnail.svg";

export const projects: ProjectItem[] = [
  {
    slug: "fancy-car-wash",
    title: "Fancy Car Wash",
    category: "Brand Strategy · Digital Presence",
    summary: "Full brand strategy and digital execution for a Milwaukee car wash repositioning against commodity competitors. Started with a positioning brief, ended with a live production site.",
    impact: "Delivered a differentiated digital identity and marketing site that clearly separates the brand from local competitors, live in production.",
    tags: ["Brand Strategy", "Positioning", "Client Delivery", "Next.js"],
    href: "https://fancy-car-wash.vercel.app",
    image: fancyCarWashImg,
    featured: true,
    wip: true
  },
  {
    slug: "smart-home",
    title: "MuHome: Product Strategy",
    category: "Product Strategy · Systems Design",
    summary: "Applied structured product thinking to a smart-home system: mapping user pain points, defining the product problem, and building a prototype grounded in real user needs.",
    impact: "A functional prototype with a clear design brief, feature rationale, and interaction design built around real user routines, not feature checklists.",
    tags: ["Product Strategy", "UX Research", "Systems Design", "Prototyping"],
    href: "https://muhome-muharafiq.vercel.app",
    image: muhomeImg,
    featured: true
  },
  {
    slug: "portfolio",
    title: "Portfolio & Communications Strategy",
    category: "Brand Strategy · Editorial Design",
    summary: "Designed and built a personal portfolio from scratch, defining a positioning strategy, structuring case studies for non-technical audiences, and building a site that earns attention without asking for it.",
    impact: "A live, self-authored portfolio with a consistent editorial voice, professional visual standard, and a sharp positioning narrative.",
    tags: ["Positioning", "Brand Strategy", "Editorial Design", "Next.js"],
    href: "https://muharafiq.com",
    image: portfolioImg,
    featured: true
  }
];
