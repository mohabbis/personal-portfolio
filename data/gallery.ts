import type { StaticImageData } from "next/image";

import img2372 from "@/public/images/gallery/IMG_2372.jpg";
import hp from "@/public/images/gallery/hp.jpg";
import img0058 from "@/public/images/gallery/IMG_0058.jpg";
import img0449 from "@/public/images/gallery/IMG_0449.jpg";
import oxford from "@/public/images/gallery/oxford.jpg";
import img1495 from "@/public/images/gallery/IMG_1495.jpg";
import img1592 from "@/public/images/gallery/IMG_1592.jpg";
import img2809 from "@/public/images/gallery/IMG_2809.jpg";
import img3231 from "@/public/images/gallery/IMG_3231.jpg";
import img4615 from "@/public/images/gallery/IMG_4615.jpg";
import img4633 from "@/public/images/gallery/IMG_4633.jpg";
import img8075 from "@/public/images/gallery/IMG_8075.jpg";
import rrDigitalCamera from "@/public/images/gallery/rr-digital-camera.jpg";
import porsche from "@/public/images/gallery/porsche.jpg";
import img1700 from "@/public/images/gallery/IMG_1700.jpg";
import img4082 from "@/public/images/gallery/IMG_4082.jpg";
import fb from "@/public/images/gallery/fb.jpg";
import vic from "@/public/images/gallery/vic.jpg";
import endwiththisone from "@/public/images/gallery/endwiththisone.jpg";

export type GalleryPhoto = {
  image: StaticImageData;
  alt: string;
  objectPosition?: string;
  span?: "hero" | "wide" | "tall";
};

// Curated as an editorial sequence rather than a full camera-roll dump.
// Keep the gallery restrained: anchor frames, quieter transitions, then a clear closer.
export const gallery: GalleryPhoto[] = [
  { image: img2372, alt: "Morning light through window blinds", span: "hero" },
  { image: img0449, alt: "Abstract shadows on textured wall", span: "tall" },
  { image: hp, alt: "Studio portrait with soft natural light" },
  { image: porsche, alt: "Classic car detail in garage", span: "wide" },
  { image: img1700, alt: "Urban architecture reflection" },
  { image: rrDigitalCamera, alt: "Vintage digital camera on wooden surface" },
  { image: img4633, alt: "Industrial pipe against concrete", span: "tall" },
  { image: fb, alt: "Friend in studio with film camera" },
  { image: img0058, alt: "Street light through tree branches", span: "wide" },
  { image: img4082, alt: "Coffee cup and notebook on wooden table" },
  { image: img4615, alt: "Close-up of textured fabric" },
  { image: img1592, alt: "Minimalist desk setup with plants", span: "tall" },
  { image: img1495, alt: "City skyline at dusk from rooftop" },
  { image: img2809, alt: "Abstract geometric shapes in shadows", span: "wide" },
  { image: img3231, alt: "Old books and vintage typewriter" },
  { image: img8075, alt: "Morning coffee and newspaper" },
  { image: oxford, alt: "Oxford comma stacking stones arrangement", span: "wide" },
  { image: vic, alt: "Victoria Island landscape from window" },
  { image: endwiththisone, alt: "Final frame: soft focus on hands holding film", span: "hero" },
];
