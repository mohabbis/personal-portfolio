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
  objectPosition?: string;
  span?: "hero" | "wide" | "tall";
};

// Curated as an editorial sequence rather than a full camera-roll dump.
// Keep the gallery restrained: anchor frames, quieter transitions, then a clear closer.
export const gallery: GalleryPhoto[] = [
  { image: img2372, span: "hero" },
  { image: img0449, span: "tall" },
  { image: hp },
  { image: porsche, span: "wide" },
  { image: img1700 },
  { image: rrDigitalCamera },
  { image: img4633, span: "tall" },
  { image: fb },
  { image: img0058, span: "wide" },
  { image: img4082 },
  { image: img4615 },
  { image: img1592, span: "tall" },
  { image: img1495 },
  { image: img2809, span: "wide" },
  { image: img3231 },
  { image: img8075 },
  { image: oxford, span: "wide" },
  { image: vic },
  { image: endwiththisone, span: "hero" },
];
