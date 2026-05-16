import type { Metadata } from "next";

import { ExperienceCard } from "@/components/cards/experience-card";
import { SiteFrame } from "@/components/layout/site-frame";
import { Container } from "@/components/ui/container";
import { PixelHeadphones } from "@/components/ui/pixel-headphones";
import { experiences } from "@/data/experience";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Muhammad Rafiq — work history across product, operations, strategy, and creative technology."
};

export default function ExperiencePage() {
  return (
    <SiteFrame currentPath="/experience">
      <section className="py-16 sm:py-20">
        <Container>
          <div className="mb-12 flex items-center gap-5 sm:mb-14">
            <PixelHeadphones className="h-16 w-auto flex-shrink-0 sm:h-20" />
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Experience</p>
              <h1 className="mt-1 font-display text-3xl text-foreground sm:text-4xl">The full run.</h1>
            </div>
          </div>

          <div className="space-y-6">
            {experiences.map((experience) => (
              <ExperienceCard key={`${experience.organization}-${experience.title}`} {...experience} />
            ))}
          </div>
        </Container>
      </section>
    </SiteFrame>
  );
}
