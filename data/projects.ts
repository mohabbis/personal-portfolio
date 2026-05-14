import type { ProjectItem } from "@/lib/types";

export const projects: ProjectItem[] = [
  {
    slug: "fancy-car-wash",
    title: "Fancy Car Wash",
    category: "Web / Local Business",
    summary: "Marketing site for a Milwaukee car wash.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    href: "https://fancycarwash.com",
    image: "/images/projects/fancy-car-wash-thumbnail.svg",
    featured: true
  },
  {
    slug: "smart-home",
    title: "MuHome — Smart Home Dashboard",
    category: "Systems / IoT",
    summary: "Local-first dashboard for lights, sensors, and routines.",
    tags: ["Tauri", "React", "TypeScript", "IoT", "Home Assistant"],
    href: "https://muhome-muharafiq.vercel.app",
    image: "/images/projects/muhome-thumbnail.svg",
    featured: true
  },
  {
    slug: "portfolio",
    title: "Personal Portfolio",
    category: "Web Development",
    summary: "This site.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    href: "https://muharafiq.com",
    image: "/images/projects/portfolio-thumbnail.svg",
    featured: true
  },
];
