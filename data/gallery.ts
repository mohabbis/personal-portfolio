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
import img5380 from "@/public/images/gallery/IMG_5380.jpg";
import img3935 from "@/public/images/gallery/IMG_3935.jpg";

export type GalleryPhoto = {
  image: StaticImageData | string;
  alt: string;
};

// Photography grid only. The Chicago panorama is reserved for the
// photography page header, not the lightbox gallery.
export const gallery: GalleryPhoto[] = [
  { image: michiganStadiumMarchingBand, alt: "Michigan Stadium marching band performing on the field" },
  { image: xoaa, alt: "Empty lot under a soft pastel dusk sky" },
  { image: img5380, alt: "Sunset campus walkway framed by trees" },
  { image: img0449, alt: "Campus walkway under a fiery sunset" },
  { image: chicagoRiverMarinaCity, alt: "Chicago River framed by Marina City and downtown towers" },
  { image: img3935, alt: "Street crossing and parked cars in bright daylight" },
  { image: oxford, alt: "Craftsman house framed by spring trees" },
  { image: img2372, alt: "Rooftop terrace at sunset" },
  { image: img1777, alt: "Chicago skyline under a soft pastel sky" },
  { image: img3043, alt: "Range Rover parked at dusk" },
  { image: img1079, alt: "Gothic university law quadrangle under a clear spring sky" },
  { image: img0684, alt: "Dusk road and treeline seen through a car window" },
];
