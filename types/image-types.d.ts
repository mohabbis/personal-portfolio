declare module "*.jpeg" {
  import { StaticImageData } from "next/image";
  const src: StaticImageData;
  export default src;
}

declare module "*.jpg" {
  import { StaticImageData } from "next/image";
  const src: StaticImageData;
  export default src;
}

declare module "*.png" {
  import { StaticImageData } from "next/image";
  const src: StaticImageData;
  export default src;
}

declare module "*.svg" {
  import { SVGProps } from "react";
  const SVGComponent: React.FC<SVGProps<SVGSVGElement>>;
  export default SVGComponent;
}

declare module "*.gif" {
  import { StaticImageData } from "next/image";
  const src: StaticImageData;
  export default src;
}

declare module "*.webp" {
  import { StaticImageData } from "next/image";
  const src: StaticImageData;
  export default src;
}

// Uppercase extension variants. Cameras/phones often save photos with
// uppercase extensions (e.g. IMG_0058.JPG); these declarations keep such
// imports type-safe on case-sensitive filesystems (Linux CI / Vercel).
// HEIC/HEIF are intentionally omitted so an accidental HEIC import fails
// at typecheck instead of silently shipping an image browsers can't render —
// convert those to JPEG first via scripts/convert-heic.js.
declare module "*.JPEG" {
  import { StaticImageData } from "next/image";
  const src: StaticImageData;
  export default src;
}

declare module "*.JPG" {
  import { StaticImageData } from "next/image";
  const src: StaticImageData;
  export default src;
}

declare module "*.PNG" {
  import { StaticImageData } from "next/image";
  const src: StaticImageData;
  export default src;
}

declare module "*.GIF" {
  import { StaticImageData } from "next/image";
  const src: StaticImageData;
  export default src;
}

declare module "*.WEBP" {
  import { StaticImageData } from "next/image";
  const src: StaticImageData;
  export default src;
}