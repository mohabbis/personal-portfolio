import type { StaticImageData } from "next/image";

import img2372 from "@/public/images/gallery/IMG_2372.jpg";
import img0449 from "@/public/images/gallery/IMG_0449.jpg";
import firePhoto from "@/public/images/gallery/fire-photo.jpg";
import img4082 from "@/public/images/gallery/IMG_4082.jpg";
import oxford from "@/public/images/gallery/oxford.jpg";
import img3231 from "@/public/images/gallery/IMG_3231.jpg";
import img2809 from "@/public/images/gallery/IMG_2809.jpg";

export type GalleryPhoto = {
  image: StaticImageData | string;
  alt: string;
  objectPosition?: string;
  span?: "hero" | "wide" | "tall";
};

// Curated as an editorial archive rather than a camera-roll dump.
// Keep only atmospheric, architectural, material, light, and quiet-detail frames.
export const gallery: GalleryPhoto[] = [
  { image: img2372, alt: "Rooftop terrace at sunset, snow on the furniture", span: "hero" },
  { image: img0449, alt: "Campus walkway at golden hour, dramatic sky", span: "tall" },
  { image: firePhoto, alt: "Black car at night along the lakefront, Chicago skyline reflected in the water", span: "wide" },
  { image: img4082, alt: "Upscale restaurant interior at night, pendant lights and city view", objectPosition: "center top" },
  { image: oxford, alt: "Craftsman house framed by spring trees", span: "wide" },
  { image: img3231, alt: "City intersection at dusk, golden traffic lights", span: "tall" },
  { image: img2809, alt: "Open highway at dawn, winter light and empty road", span: "wide" },
];
