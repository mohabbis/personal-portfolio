import type { ProjectItem } from "@/lib/types";

export const projects: ProjectItem[] = [
  {
    slug: "portfolio",
    title: "Personal Portfolio",
    category: "Web Development",
    summary: "Designed and built a personal portfolio site using Next.js, Tailwind CSS, and TypeScript to showcase work and experience.",
    impact: "Live at muharafiq.com with fast load times and a clean, minimal design.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    href: "https://muharafiq.com",
    image: "",
    featured: true
  },
  {
    slug: "smart-home",
    title: "Smart Home Automation",
    category: "Systems / IoT",
    summary: "Built a custom smart home system using Home Assistant, integrating lighting, climate, and security into a unified dashboard.",
    impact: "Reduced manual interactions and improved home efficiency through automation routines.",
    tags: ["Home Assistant", "IoT", "Automation"],
    image: "",
    featured: true
  }
];
