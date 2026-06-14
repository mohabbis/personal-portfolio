import type { ReactNode } from "react";

export default function CarWashCaseStudyLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            section:has([aria-label="Interactive 3D model of the Car Wash Guys property concept with orthogonal customer traffic flow"])
              .max-w-xl.text-sm.font-light.leading-6.text-white\\/50 {
              display: none !important;
            }
          `
        }}
      />
    </>
  );
}
