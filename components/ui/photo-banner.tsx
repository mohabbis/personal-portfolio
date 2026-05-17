import Image from "next/image";
import type { StaticImageData } from "next/image";

import porsche from "@/public/images/gallery/porsche.jpg";
import rr640 from "@/public/images/gallery/rr-640.jpg";
import rrDigitalCamera from "@/public/images/gallery/rr-digital-camera.jpg";
import beach from "@/public/images/gallery/beach.jpg";
import oxford from "@/public/images/gallery/oxford.jpg";
import img2372 from "@/public/images/gallery/IMG_2372.jpg";
import img2809 from "@/public/images/gallery/IMG_2809.jpg";
import img3231 from "@/public/images/gallery/IMG_3231.jpg";
import img4615 from "@/public/images/gallery/IMG_4615.jpg";
import endwiththisone from "@/public/images/gallery/endwiththisone.jpg";

const BANNER_PHOTOS: StaticImageData[] = [
  porsche,
  rr640,
  beach,
  oxford,
  img2372,
  img2809,
  rrDigitalCamera,
  img3231,
  img4615,
  endwiththisone,
];

export function PhotoBanner() {
  return (
    <div
      aria-hidden
      className="relative overflow-hidden bg-background"
      style={{
        height: 176,
        maskImage:
          "linear-gradient(90deg, transparent, black 6%, black 94%, transparent)",
        WebkitMaskImage:
          "linear-gradient(90deg, transparent, black 6%, black 94%, transparent)",
      }}
    >
      <div className="banner-track flex h-full gap-2" style={{ width: "max-content" }}>
        {[...BANNER_PHOTOS, ...BANNER_PHOTOS].map((photo, i) => (
          <div key={i} className="relative h-full flex-shrink-0" style={{ aspectRatio: "3/2" }}>
            <Image
              src={photo}
              alt=""
              fill
              className="object-cover"
              sizes="300px"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
