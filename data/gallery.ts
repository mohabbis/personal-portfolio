import type { StaticImageData } from "next/image";

import img0449 from "@/public/images/gallery/IMG_0449.jpg";
import img0450 from "@/public/images/gallery/IMG_0450.jpg";
import img0590 from "@/public/images/gallery/IMG_0590.jpg";
import img1683 from "@/public/images/gallery/img_1683.jpg";
import img1700 from "@/public/images/gallery/IMG_1700.jpg";
import img2372 from "@/public/images/gallery/IMG_2372.jpg";
import img4082 from "@/public/images/gallery/IMG_4082.jpg";

export const gallery: { image: StaticImageData; objectPosition?: string }[] = [
{ image: img0449 },
  { image: img2372 },
  { image: img0590 },
  { image: img4082 },
  { image: img0450 },
  { image: img1700 },
  { image: img1683, objectPosition: "center 40%" },
];
