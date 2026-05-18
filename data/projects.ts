import type { ProjectItem } from "@/lib/types";

import fancyCarWashImg from "@/public/images/projects/fancy-car-wash-thumbnail.svg";
import muhomeImg from "@/public/images/projects/muhome-thumbnail.svg";
import portfolioImg from "@/public/images/projects/portfolio-thumbnail.svg";

export const projects: ProjectItem[] = [
  {
    slug: "fancy-car-wash",
    title: "Fancy Car Wash",
    category: "Brand Strategy · Customer Experience · Web Design",
    summary: "Repositioned a local service business competing in a crowded market by building a clearer premium identity, refining the customer-facing experience, and delivering a live digital presence from strategy through deployment.",
    impact: "Delivered a differentiated digital identity and live marketing platform designed to separate the business from low-cost competitors in the Milwaukee market.",
    tags: ["Brand Strategy", "Positioning", "Customer Experience", "Client Delivery"],
    href: "https://fancy-car-wash.vercel.app",
    image: fancyCarWashImg,
    featured: true
  },
  {
    slug: "smart-home",
    title: "MuHome",
    category: "Systems Design · Product Strategy · Automation",
    summary: "An ongoing smart-home project exploring automation systems, environmental controls, lighting workflows, and interface design through a product and operations lens.",
    impact: "Built a working prototype environment integrating smart devices, automation logic, and user-centered control systems across multiple hardware ecosystems.",
    tags: ["Systems Design", "Automation", "Product Strategy", "Smart Home"],
    href: "https://muhome-muharafiq.vercel.app",
    image: muhomeImg,
    featured: true
  },
  {
    slug: "portfolio",
    title: "Personal Portfolio",
    category: "Communications · Editorial Design · Positioning",
    summary: "Designed and developed a portfolio platform balancing consulting-oriented clarity with a more editorial visual identity, focused on communicating work, judgment, and initiative without relying on traditional resume language.",
    impact: "Created a live personal platform with a consistent voice, structured project storytelling, and a more differentiated professional identity.",
    tags: ["Editorial Design", "Communications", "Positioning", "Next.js"],
    href: "https://muharafiq.com",
    image: portfolioImg,
    featured: true
  }
];
