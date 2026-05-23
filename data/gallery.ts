import type { StaticImageData } from "next/image";

import img2372 from "@/public/images/gallery/IMG_2372.jpg";
import hp from "@/public/images/gallery/hp.jpg";
import img0058 from "@/public/images/gallery/IMG_0058.jpg";
import img0449 from "@/public/images/gallery/IMG_0449.jpg";
import oxford from "@/public/images/gallery/oxford.jpg";
import img1592 from "@/public/images/gallery/IMG_1592.jpg";
import img2809 from "@/public/images/gallery/IMG_2809.jpg";
import img3231 from "@/public/images/gallery/IMG_3231.jpg";
import img4615 from "@/public/images/gallery/IMG_4615.jpg";
import img4633 from "@/public/images/gallery/IMG_4633.jpg";
import img8075 from "@/public/images/gallery/IMG_8075.jpg";
import porsche from "@/public/images/gallery/porsche.jpg";
import img1700 from "@/public/images/gallery/IMG_1700.jpg";
import dsc00154 from "@/public/images/gallery/DSC00154.jpeg";
import dsc00158 from "@/public/images/gallery/DSC00158.jpeg";
import dsc00166 from "@/public/images/gallery/DSC00166.jpeg";
import dsc00168 from "@/public/images/gallery/DSC00168.jpeg";
import dsc00171 from "@/public/images/gallery/DSC00171.jpeg";
import dsc00173 from "@/public/images/gallery/DSC00173.jpeg";
import img4082 from "@/public/images/gallery/IMG_4082.jpg";
import fb from "@/public/images/gallery/fb.jpg";
import vic from "@/public/images/gallery/vic.jpg";
import endwiththisone from "@/public/images/gallery/endwiththisone.jpg";
import img2033 from "@/public/images/gallery/IMG_2033.jpeg";
import img2034 from "@/public/images/gallery/IMG_2034.jpeg";
import img2035 from "@/public/images/gallery/IMG_2035.jpeg";
import img2064 from "@/public/images/gallery/IMG_2064.jpeg";

export const latestFrame = "/images/gallery/DSC00047.jpeg";

export type GalleryPhoto = {
  image: StaticImageData | string;
  alt: string;
  objectPosition?: string;
  span?: "hero" | "wide" | "tall";
};

// Curated as an editorial sequence rather than a full camera-roll dump.
// Keep the gallery restrained: anchor frames, quieter transitions, then a clear closer.
export const gallery: GalleryPhoto[] = [
  { image: latestFrame, alt: "Backyard gathering outside a house with tents and streamers", span: "hero" },
  { image: img2372, alt: "Morning light through window blinds", span: "hero" },
  { image: img0449, alt: "Abstract shadows on textured wall", span: "tall" },
  { image: "/IMG_0888.jpeg", alt: "Fraternity composite portrait", span: "tall", objectPosition: "50% 14%" },
  { image: hp, alt: "Studio portrait with soft natural light" },
  { image: porsche, alt: "Classic car detail in garage", span: "wide" },
  { image: dsc00171, alt: "Dark green Range Rover profile outside urban building", span: "wide" },
  { image: img1700, alt: "Urban architecture reflection" },
  { image: dsc00154, alt: "Black Range Rover in a suburban driveway" },
  { image: img2033, alt: "Dark Range Rover SUV parked outside a suburban brick house", span: "tall" },
  { image: img2034, alt: "Side profile of dark Range Rover on a suburban street", span: "tall" },
  { image: img2035, alt: "Dark Range Rover and gray pickup truck parked on a suburban street", span: "wide" },
  { image: img2064, alt: "Urban night scene with city lights", span: "hero" },
  { image: img4633, alt: "Industrial pipe against concrete", span: "tall" },
  { image: fb, alt: "Friend in studio with film camera" },
  { image: img0058, alt: "Street light through tree branches", span: "wide" },
  { image: img4082, alt: "Coffee cup and notebook on wooden table" },
  { image: dsc00158, alt: "Blue BMW on a tree-lined residential street", span: "wide" },
  { image: dsc00166, alt: "Chicago skyline from the highway, billboard in foreground" },
  { image: dsc00168, alt: "Chicago interstate with exit signs and downtown skyline", span: "wide" },
  { image: img4615, alt: "Close-up of textured fabric" },
  { image: img1592, alt: "Minimalist desk setup with plants", span: "tall" },
  { image: img2809, alt: "Abstract geometric shapes in shadows", span: "wide" },
  { image: img3231, alt: "Old books and vintage typewriter" },
  { image: img8075, alt: "Morning coffee and newspaper" },
  { image: dsc00173, alt: "Chicago street scene with Pizzeria Due and skyscrapers", span: "tall" },
  { image: oxford, alt: "Oxford comma stacking stones arrangement", span: "wide" },
  { image: vic, alt: "Victoria Island landscape from window" },
  { image: endwiththisone, alt: "Final frame: soft focus on hands holding film", span: "hero" },
];
