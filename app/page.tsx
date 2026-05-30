import type { Metadata } from "next";

import { SiteFrame } from "@/components/layout/site-frame";
import { HomeHero } from "@/components/sections/home-hero";
import { HomeFeaturedWorkSection } from "@/components/sections/home/home-featured-work";
import { HomeAboutSection } from "@/components/sections/home/home-about";
import { HomeStudioIndexSection } from "@/components/sections/home/home-studio-index";
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
      <HomeStudioIndexSection />
      <HomeAboutSection />
    </SiteFrame>
  );
}
