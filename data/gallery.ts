import type { StaticImageData } from "next/image";

import img2372 from "@/public/images/gallery/IMG_2372.jpg";
import img0058 from "@/public/images/gallery/IMG_0058.jpg";
import img0449 from "@/public/images/gallery/IMG_0449.jpg";
import oxford from "@/public/images/gallery/oxford.jpg";
import img1592 from "@/public/images/gallery/IMG_1592.jpg";
import img2809 from "@/public/images/gallery/IMG_2809.jpg";
import img3231 from "@/public/images/gallery/IMG_3231.jpg";
import img4615 from "@/public/images/gallery/IMG_4615.jpg";
import img4633 from "@/public/images/gallery/IMG_4633.jpg";
import img8075 from "@/public/images/gallery/IMG_8075.jpg";
import img1700 from "@/public/images/gallery/IMG_1700.jpg";
import img4082 from "@/public/images/gallery/IMG_4082.jpg";
import vic from "@/public/images/gallery/vic.jpg";
import endwiththisone from "@/public/images/gallery/endwiththisone.jpg";
import img2111 from "@/public/images/gallery/IMG_2111.jpeg";
import img2112 from "@/public/images/gallery/IMG_2112.png";

export const latestFrame = "/images/gallery/DSC00047.jpeg";

export type GalleryPhoto = {
  image: StaticImageData | string;
  alt: string;
  objectPosition?: string;
  span?: "hero" | "wide" | "tall";
};

// Curated as an editorial archive rather than a camera-roll dump.
// Keep only atmospheric, architectural, material, light, and quiet-detail frames.
export const gallery: GalleryPhoto[] = [
  { image: img2372, alt: "Morning light passing through window blinds", span: "hero" },
  { image: img0449, alt: "Abstract shadows across a textured wall", span: "tall" },
  { image: img1700, alt: "Urban architecture reflected in glass", span: "wide" },
  { image: img4633, alt: "Industrial pipe against concrete", span: "tall" },
  { image: img0058, alt: "Street light filtered through tree branches", span: "wide" },
  { image: img4082, alt: "Coffee cup and notebook on a wooden table" },
  { image: img4615, alt: "Close-up of textured fabric" },
  { image: img1592, alt: "Minimal desk setup with plants", span: "tall" },
  { image: img2111, alt: "Warm candlelight reflected in glass", span: "wide" },
  { image: img2112, alt: "Close-up flame in deep shadow" },
  { image: img2809, alt: "Geometric shadows and abstract forms", span: "wide" },
  { image: img3231, alt: "Old books and a vintage typewriter" },
  { image: img8075, alt: "Morning coffee and newspaper" },
  { image: oxford, alt: "Stacked stones arranged in a quiet composition", span: "wide" },
  { image: vic, alt: "Landscape viewed through a window" },
  { image: latestFrame, alt: "Outdoor gathering framed by tents and streamers", span: "wide" },
  { image: endwiththisone, alt: "Soft-focus closing frame with hands and film", span: "hero" },
];
