import type { Metadata } from "next";

import { SiteFrame } from "@/components/layout/site-frame";
import { HomeHero } from "@/components/sections/home-hero";
import { HomeFeaturedWorkSection } from "@/components/sections/home/home-featured-work";
import { HomeExperienceSection } from "@/components/sections/home/home-experience";
import { HomeInternshipGoalsSection } from "@/components/sections/home/home-internship-goals";
import { HomeAboutSection } from "@/components/sections/home/home-about";
import { HomeContactSection } from "@/components/sections/home/home-contact";
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
      <HomeInternshipGoalsSection />
      <HomeAboutSection />
      <HomeContactSection />
    </SiteFrame>
  );
}
