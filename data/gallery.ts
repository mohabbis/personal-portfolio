import type { StaticImageData } from "next/image";

import img2372 from "@/public/images/gallery/IMG_2372.jpg";
import img0449 from "@/public/images/gallery/IMG_0449.jpg";
import michiganStadiumMarchingBand from "@/public/images/gallery/michigan-stadium-marching-band.jpeg";
import chicagoRiverMarinaCity from "@/public/images/gallery/chicago-river-marina-city.jpeg";
import oxford from "@/public/images/gallery/oxford.jpg";
import img1777 from "@/public/images/gallery/IMG_1777.jpeg";
import img3043 from "@/public/images/gallery/IMG_3043.jpg";
import img1079 from "@/public/images/gallery/IMG_1079.jpg";

export type GalleryPhoto = {
  image: StaticImageData | string;
  alt: string;
  objectPosition?: string;
  span?: "hero" | "wide" | "tall";
};

export const gallery: GalleryPhoto[] = [
  { image: img2372, alt: "Rooftop terrace at sunset", span: "hero" },
  { image: img0449, alt: "Campus walkway at golden hour", span: "tall" },
  { image: img3043, alt: "Range Rover parked at sunset", span: "wide" },
  { image: chicagoRiverMarinaCity, alt: "Chicago River framed by Marina City and downtown towers", span: "tall" },
  { image: michiganStadiumMarchingBand, alt: "Michigan Stadium marching band performing on the field" },
  { image: img1079, alt: "Gothic university law quadrangle under a clear spring sky", span: "tall" },
  { image: oxford, alt: "Craftsman house framed by spring trees", span: "wide" },
  { image: img1777, alt: "Quiet architectural detail" },
];
