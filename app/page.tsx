import type { Metadata } from "next";

import { SiteFrame } from "@/components/layout/site-frame";
import { HomeHero } from "@/components/sections/home-hero";
import { HomeFeaturedWorkSection } from "@/components/sections/home/home-featured-work";
import { HomeAboutSection } from "@/components/sections/home/home-about";
import { HomeContactSection } from "@/components/sections/home/home-contact";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description
};

const profilePageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  dateCreated: "2026-06-03T00:00:00.000Z",
  mainEntity: {
    "@type": "Person",
    "@id": "https://www.muharafiq.com/#person",
    name: "Muhammad Rafiq",
    description: siteConfig.description,
    url: "https://www.muharafiq.com",
    sameAs: [siteConfig.linkedIn, siteConfig.github]
  }
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
      />
      <SiteFrame currentPath="/">
        <HomeHero />
        <HomeFeaturedWorkSection />
        <HomeAboutSection />
        <HomeContactSection />
      </SiteFrame>
    </>
  );
}
