import Image from "next/image";
import type { StaticImageData } from "next/image";

import img1754 from "@/public/images/IMG_1754.jpeg";
import img1755 from "@/public/images/IMG_1755.jpeg";
import img1776 from "@/public/images/IMG_1776.jpeg";
import img1777 from "@/public/images/IMG_1777.jpeg";
import firePhoto from "@/public/images/gallery/fire-photo.jpg";
import porsche from "@/public/images/gallery/porsche.jpg";
import img1700 from "@/public/images/gallery/IMG_1700.jpg";
import rrDigitalCamera from "@/public/images/gallery/rr-digital-camera.jpg";
import img1499 from "@/public/images/gallery/IMG_1499.jpg";
import img2372 from "@/public/images/gallery/IMG_2372.jpg";
import img4633 from "@/public/images/gallery/IMG_4633.jpg";
import img4082 from "@/public/images/gallery/IMG_4082.jpg";
import img4615 from "@/public/images/gallery/IMG_4615.jpg";

const BANNER_PHOTOS: StaticImageData[] = [
  img1754,
  img1755,
  firePhoto,
  img1776,
  porsche,
  img2372,
  img1700,
  img1777,
  rrDigitalCamera,
  img1499,
  img4633,
  img4082,
  img4615,
];

export function PhotoBanner() {
  return (
    <div
      aria-hidden={true}
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
        {[0, 1].flatMap((copy) =>
          BANNER_PHOTOS.map((photo) => (
            <div key={`${copy}-${photo.src}`} className="relative h-full flex-shrink-0" style={{ aspectRatio: "3/2" }}>
              <Image
                src={photo}
                alt=""
                fill
                className="object-cover"
                sizes="300px"
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
}
