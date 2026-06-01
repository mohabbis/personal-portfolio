import type { StaticImageData } from "next/image";

import img2372 from "@/public/images/gallery/IMG_2372.jpg";
import img0449 from "@/public/images/gallery/IMG_0449.jpg";
import img4082 from "@/public/images/gallery/IMG_4082.jpg";
import oxford from "@/public/images/gallery/oxford.jpg";
import img1777 from "@/public/images/gallery/IMG_1777.jpeg";

export type GalleryPhoto = {
  image: StaticImageData | string;
  alt: string;
  objectPosition?: string;
  span?: "hero" | "wide" | "tall";
};

// Curated as an editorial archive rather than a camera-roll dump.
// Keep only high-quality atmospheric, architectural, material, light, and quiet-detail frames.
// Avoid car-interior, dashboard, windshield, screenshot, and filler images.
export const gallery: GalleryPhoto[] = [
  { image: img2372, alt: "Rooftop terrace at sunset", span: "hero" },
  { image: img0449, alt: "Campus walkway at golden hour", span: "tall" },
  { image: img4082, alt: "Restaurant interior at night", objectPosition: "center top" },
  { image: oxford, alt: "Craftsman house framed by spring trees", span: "wide" },
  { image: img1777, alt: "Quiet architectural detail" },
];
