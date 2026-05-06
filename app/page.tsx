import type { Metadata } from "next";

import { SiteFrame } from "@/components/layout/site-frame";
import { HomeHero } from "@/components/sections/home-hero";
import { HomeAboutSection } from "@/components/sections/home/home-about";
import { HomeContactSection } from "@/components/sections/home/home-contact";
import { HomeExperienceSection } from "@/components/sections/home/home-experience";
import { HomeFeaturedWorkSection } from "@/components/sections/home/home-featured-work";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description
};

export default function HomePage() {
  return (
    <SiteFrame currentPath="/">
      <HomeHero />
      <HomeFeaturedWorkSection />
      <HomeExperienceSection />
      <HomeAboutSection />
      <HomeContactSection />
    </SiteFrame>
  );
}
