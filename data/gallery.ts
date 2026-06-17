import type { StaticImageData } from "next/image";

import img2372 from "@/public/images/gallery/IMG_2372.jpg";
import img0449 from "@/public/images/gallery/IMG_0449.jpg";
import michiganStadiumMarchingBand from "@/public/images/gallery/michigan-stadium-marching-band.jpeg";
import chicagoRiverMarinaCity from "@/public/images/gallery/chicago-river-marina-city.jpeg";
import oxford from "@/public/images/gallery/oxford.jpg";
import img1777 from "@/public/images/gallery/IMG_1777.jpeg";
import img3043 from "@/public/images/gallery/IMG_3043.jpg";
import img1079 from "@/public/images/gallery/IMG_1079.jpg";
import img0684 from "@/public/images/gallery/IMG_0684.jpg";
import xoaa from "@/public/images/gallery/xoaa.jpg";
import chicagoPanorama from "@/public/images/gallery/chicago-panorama.jpg";

export type GalleryPhoto = {
  image: StaticImageData | string;
  alt: string;
};

// The first entry is the full-width panorama lead banner; the rest flow
// into the masonry collage beneath it, interleaving landscape and portrait
// frames across tones — warm sunsets, daytime blues, then dusk — so the
// whole page reads cohesively rather than as a random pile.
export const gallery: GalleryPhoto[] = [
  { image: chicagoPanorama, alt: "Panorama of the Chicago skyline and a red arched bridge" },
  { image: xoaa, alt: "Empty lot under a soft pastel dusk sky" },
  { image: img0449, alt: "Campus walkway under a fiery sunset" },
  { image: img1777, alt: "Chicago skyline under a soft pastel sky" },
  { image: img2372, alt: "Rooftop terrace at sunset" },
  { image: oxford, alt: "Craftsman house framed by spring trees" },
  { image: chicagoRiverMarinaCity, alt: "Chicago River framed by Marina City and downtown towers" },
  { image: img3043, alt: "Range Rover parked at dusk" },
  { image: img1079, alt: "Gothic university law quadrangle under a clear spring sky" },
  { image: img0684, alt: "Dusk road and treeline seen through a car window" },
  { image: michiganStadiumMarchingBand, alt: "Michigan Stadium marching band performing on the field" },
];
