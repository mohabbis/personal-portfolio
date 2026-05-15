import type { Metadata } from "next";

import { SiteFrame } from "@/components/layout/site-frame";

export const metadata: Metadata = {
  title: "Photography",
  description: "Photography by Muhammad Rafiq."
};

const CLOUD = "https://res.cloudinary.com/damvolgdt/image/upload";

function src(publicId: string, transforms: string) {
  return `${CLOUD}/${transforms}/${publicId}`;
}

const GRID_IMAGES = [
  "IMG_1499_m3yhp3",
  "BA47E9CF-80A5-42D2-BDEB-A5FB711CE6B8_mjfuin",
  "IMG_0449_pf3ix4",
  "IMG_4082_cvcnyk",
];

export default function PhotographyPage() {
  return (
    <SiteFrame currentPath="/photography">
      <div className="px-4 py-6 sm:px-6 lg:px-8">
        {/* Hero image */}
        <div className="mb-3.5 overflow-hidden rounded-xl">
          <img
            src={src("IMG_1696_gslbwv", "w_1600,c_limit,f_auto,q_auto")}
            srcSet={[
              `${CLOUD}/w_800,c_limit,f_auto,q_auto/IMG_1696_gslbwv 800w`,
              `${CLOUD}/w_1200,c_limit,f_auto,q_auto/IMG_1696_gslbwv 1200w`,
              `${CLOUD}/w_1600,c_limit,f_auto,q_auto/IMG_1696_gslbwv 1600w`,
            ].join(", ")}
            sizes="100vw"
            alt=""
            className="h-[52vw] max-h-[560px] min-h-[240px] w-full object-cover"
            loading="eager"
          />
        </div>

        {/* Photo grid */}
        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
          {GRID_IMAGES.map((id) => (
            <div key={id} className="overflow-hidden rounded-xl">
              <img
                src={src(id, "w_800,h_600,c_fill,f_auto,q_auto")}
                srcSet={[
                  `${CLOUD}/w_400,h_300,c_fill,f_auto,q_auto/${id} 400w`,
                  `${CLOUD}/w_800,h_600,c_fill,f_auto,q_auto/${id} 800w`,
                  `${CLOUD}/w_1200,h_900,c_fill,f_auto,q_auto/${id} 1200w`,
                ].join(", ")}
                sizes="(max-width: 640px) 100vw, 50vw"
                alt=""
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </SiteFrame>
  );
}
