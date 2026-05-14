import type { ProjectItem } from "@/lib/types";

export const projects: ProjectItem[] = [
  {
    slug: "fancy-car-wash",
    title: "Fancy Car Wash",
    category: "Web / Local Business",
    summary: "A full marketing site for a real Milwaukee car wash at 7323 W Mill Road — built with Next.js, featuring wash package pricing and location details.",
    impact: "Live at fancycarwash.com. Production site for an active local business.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    href: "https://fancy-car-wash.vercel.app",
    image: "/images/projects/fancy-car-wash-rendering.jpg",
    featured: true
  },
  {
    slug: "smart-home",
    title: "MuHome — Smart Home Dashboard",
    category: "Systems / IoT",
    summary: "A local-first desktop and web app for controlling smart lights, sensors, and routines across Hue, Govee, Kasa, and Home Assistant — built with Tauri, React, and TypeScript.",
    impact: "Bedroom-first build expanding to whole-home automation.",
    tags: ["Tauri", "React", "TypeScript", "IoT", "Home Assistant"],
    href: "https://muhome-muharafiq.vercel.app",
    image: "/images/projects/muhome-thumbnail.svg",
    featured: true
  },
  {
    slug: "portfolio",
    title: "Personal Portfolio",
    category: "Web Development",
    summary: "Designed and built a personal portfolio site using Next.js, Tailwind CSS, and TypeScript to showcase work and experience.",
    impact: "Live at muharafiq.com with fast load times and a clean, minimal design.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    href: "https://muharafiq.com",
    image: "/images/projects/portfolio-thumbnail.svg",
    featured: true
  },
];
