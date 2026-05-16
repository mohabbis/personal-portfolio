import type { StaticImageData } from "next/image";

import img2372 from "@/public/images/gallery/IMG_2372.jpg";
import frisbee from "@/public/images/gallery/frisbee.jpg";
import hp from "@/public/images/gallery/hp.jpg";
import oxford from "@/public/images/gallery/oxford.jpg";
import img1642 from "@/public/images/gallery/IMG_1642.jpg";
import rrDigitalCamera from "@/public/images/gallery/rr-digital-camera.jpg";
import porsche from "@/public/images/gallery/porsche.jpg";
import beach from "@/public/images/gallery/beach.jpg";
import img0449 from "@/public/images/gallery/IMG_0449.jpg";
import img4615 from "@/public/images/gallery/IMG_4615.jpg";
import img4082 from "@/public/images/gallery/IMG_4082.jpg";
import img0590 from "@/public/images/gallery/IMG_0590.jpg";
import fb from "@/public/images/gallery/fb.jpg";
import endwiththisone from "@/public/images/gallery/endwiththisone.jpg";

export const gallery: { image: StaticImageData; objectPosition?: string }[] = [
  { image: img2372 },
  { image: frisbee },
  { image: hp },
  { image: oxford },
  { image: img1642, objectPosition: "center 40%" },
  { image: rrDigitalCamera },
  { image: porsche },
  { image: beach },
  { image: img0449 },
  { image: img4615 },
  { image: img4082 },
  { image: img0590 },
  { image: fb },
  { image: endwiththisone },
];
