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