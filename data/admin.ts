import type { GalleryItem } from "@/lib/types";

export type AdminSection = {
  title: string;
  eyebrow: string;
  summary: string;
  note: string;
};

export type AdminLink = {
  label: string;
  href: string;
  description: string;
};

export type AdminChecklistItem = {
  title: string;
  detail: string;
};

export const portraitStrategy: AdminSection[] = [
  {
    eyebrow: "Avatar",
    title: "Avatar image",
    summary: "Hero and small cards.",
    note: "/images/profile/headshot-styled.png"
  },
  {
    eyebrow: "Real",
    title: "Real portrait",
    summary: "Contact and admin.",
    note: "/images/profile/Mrafiqheadshot.JPG"
  },
  {
    eyebrow: "Checkered",
    title: "Checkered motif",
    summary: "Background texture.",
    note: "Keep it light."
  }
];

export const privateDraftLinks: AdminLink[] = [
  {
    label: "Photography review",
    href: "/photography",
    description: "Gallery order."
  },
  {
    label: "Portfolio review",
    href: "/portfolio",
    description: "Project order."
  },
  {
    label: "Contact page",
    href: "/contact",
    description: "Portrait and CTA."
  }
];

export const editorialChecklist: AdminChecklistItem[] = [
  {
    title: "Lock the hero avatar",
    detail: "Keep the avatar in the hero."
  },
  {
    title: "Use the real headshot sparingly",
    detail: "Use the real portrait on contact."
  },
  {
    title: "Finish the visual system",
    detail: "Use the checkered texture lightly."
  }
];

export const draftPhotos: GalleryItem[] = [
  {
    title: "Portrait study",
    location: "Private draft",
    description: "Real portrait.",
    image: "/images/profile/Mrafiqheadshot.JPG",
    orientation: "portrait"
  },
  {
    title: "Avatar study",
    location: "Private draft",
    description: "Avatar image.",
    image: "/images/profile/headshot-styled.png",
    orientation: "portrait"
  }
];
