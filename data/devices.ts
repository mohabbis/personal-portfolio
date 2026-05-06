import type { DeviceItem } from "@/lib/types";

export const devices: DeviceItem[] = [
  {
    name: "Front-End Engineering",
    category: "Software",
    status: "Active",
    detail: "Builds responsive, typed React and Next.js interfaces with careful layout, motion, and content structure.",
    note: "This portfolio is the live example: the pages, cards, media, and content all had to work together.",
    tags: ["React", "Next.js", "TypeScript"]
  },
  {
    name: "Product Systems",
    category: "Strategy",
    status: "Active",
    detail: "Turns vague workflows into screens and states that feel usable instead of overbuilt.",
    note: "MuHome shows that direction: device state first, automation second, clarity throughout.",
    tags: ["UX", "Systems", "Workflow"]
  },
  {
    name: "Connected Devices",
    category: "Hardware",
    status: "Building",
    detail: "Explores smart-home controls, accessory workflows, and practical automation around real devices.",
    note: "The goal is useful integration: visible state, predictable routines, and fewer unnecessary taps.",
    tags: ["Smart home", "Automation", "IoT"]
  },
  {
    name: "Visual Direction",
    category: "Creative",
    status: "Active",
    detail: "Pairs technical work with strong image selection, automotive composition, and cinematic pacing.",
    note: "The photography section is there because the site should have a real visual identity.",
    tags: ["Photography", "Video", "Brand"]
  },
  {
    name: "Execution Habits",
    category: "Process",
    status: "Current",
    detail: "Works from concrete requirements, checks the real app, and keeps changes tied to visible outcomes.",
    note: "The goal is simple: the result should look good, run cleanly, and explain itself.",
    tags: ["Debugging", "Iteration", "Quality"]
  }
];
