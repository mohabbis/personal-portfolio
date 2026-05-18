import type { ProjectItem } from "@/lib/types";

import fancyCarWashImg from "@/public/images/projects/fancy-car-wash-thumbnail.svg";
import muhomeImg from "@/public/images/projects/muhome-thumbnail.svg";
import portfolioImg from "@/public/images/projects/portfolio-thumbnail.svg";

export const projects: ProjectItem[] = [
  {
    slug: "fancy-car-wash",
    title: "Fancy Car Wash",
    category: "Market Strategy · Client Engagement",
    summary: "Diagnosed a local service business losing ground to commodity competitors. Defined the positioning problem, built a differentiated brand strategy around trust and premium experience, and delivered a live marketing site — from brief to production.",
    impact: "Client went live with a differentiated digital presence that separates the brand from low-cost competitors in the Milwaukee market.",
    tags: ["Market Strategy", "Positioning", "Client Delivery", "Brand Systems"],
    href: "https://fancy-car-wash.vercel.app",
    image: fancyCarWashImg,
    featured: true
  },
  {
    slug: "smart-home",
    title: "MuHome: Product Strategy",
    category: "Product Strategy · User Research",
    summary: "Structured a product problem from scratch: mapped user pain points across smart-home workflows, formed a clear problem statement, and built a prototype grounded in evidence rather than assumptions.",
    impact: "Delivered a functional prototype with explicit feature rationale, user research documentation, and a design brief — a full strategy-to-build chain.",
    tags: ["Product Strategy", "User Research", "Problem Framing", "Prototyping"],
    href: "https://muhome-muharafiq.vercel.app",
    image: muhomeImg,
    featured: true
  },
  {
    slug: "portfolio",
    title: "Portfolio & Communications Strategy",
    category: "Communications Strategy · Positioning",
    summary: "Developed a personal positioning strategy and built the communications system to carry it — structuring case studies for a non-technical audience and designing a site that earns credibility without explaining itself.",
    impact: "A live, self-authored portfolio with a consistent editorial voice, clear positioning narrative, and professional execution standard.",
    tags: ["Positioning", "Communications Strategy", "Editorial Design", "Brand Systems"],
    href: "https://muharafiq.com",
    image: portfolioImg,
    featured: true
  }
];
