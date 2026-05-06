import type { ProjectItem } from "@/lib/types";
export const projects: ProjectItem[] = [
  {
    slug: "muhome",
    title: "MuHome",
    category: "Smart Home App Concept",
    summary:
      "A smart-home app concept focused on clearer device status, routines, and manual controls.",
    impact:
      "Turned a broad product problem into a focused app direction with user flows, interface priorities, and a clear product story.",
    tags: ["Next.js", "Smart Home", "Product UX"],
    image: "/images/projects/project-placeholder-1.svg",
    featured: true,
    href: "/portfolio/muhome"
  },
  {
    slug: "personal-portfolio",
    title: "Muhammad Rafiq Portfolio",
    category: "Website",
    summary:
      "A professional portfolio built in Next.js to present projects, experience, and contact information clearly.",
    impact:
      "Built the structure, content, and visual system so the site is easy to scan and appropriate for recruiting.",
    tags: ["React", "Next.js", "Design"],
    image: "/images/projects/project-placeholder-2.svg",
    featured: true
  }
];
