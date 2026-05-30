import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";

import { ProjectCard } from "@/components/cards/project-card";
import { SiteFrame } from "@/components/layout/site-frame";
import { PageIntro } from "@/components/sections/page-intro";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { FallbackImage } from "@/components/ui/fallback-image";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Selected product, brand, systems, and visual work presented as concise case studies."
};

const projectPageArchiveSlugs = ["modernizing-alumni-operations", "modern-branding-local-businesses", "car-wash-guys"];
const lumenSignals = ["Interface", "Automation", "Room logic", "Infrastructure"];

export default function PortfolioPage() {
  const lumen = projects.find((project) => project.slug === "lumen");
  const selectedWork = projectPageArchiveSlugs
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter(Boolean);

  return (
    <SiteFrame currentPath="/portfolio">
      <PageIntro
        eyebrow="Projects"
        title="Systems, product, operations, and creative technology."
        description="A focused archive of real-world work: smart-home product development, institutional infrastructure, local business branding, and client web systems."
        actions={
          <ButtonLink href="https://lumen.muharafiq.com" target="_blank" rel="noreferrer" variant="secondary">
            View Lumen
          </ButtonLink>
        }
      />

      <section className="py-16 sm:py-24">
        <Container className="space-y-20 sm:space-y-24">
          {lumen && (
            <div className="overflow-hidden rounded-[2.25rem] border border-white/[0.10] bg-card/70 shadow-lift backdrop-blur-2xl">
              <div className="grid gap-0 lg:grid-cols-[0.82fr_1.18fr]">
                <div className="flex flex-col justify-between border-b border-foreground/[0.08] p-6 sm:p-8 lg:border-b-0 lg:border-r">
                  <div>
                    <p className="text-sm font-light tracking-[0.01em] text-foreground/45">Featured product</p>
                    <h2 className="mt-5 font-display text-6xl leading-none tracking-[-0.055em] text-foreground sm:text-7xl">
                      Lumen
                    </h2>
                    <p className="mt-6 max-w-xl text-base font-light leading-8 text-muted-foreground sm:text-lg">
                      A thoughtful smart-home experience built around clarity, warmth, and everyday usability.
                    </p>
                  </div>

                  <div className="mt-10 space-y-6">
                    <div className="grid grid-cols-2 gap-2">
                      {lumenSignals.map((signal) => (
                        <span
                          key={signal}
                          className="rounded-full border border-foreground/10 bg-background/45 px-3 py-2 text-center text-xs tracking-[0.12em] text-foreground/60"
                        >
                          {signal}
                        </span>
                      ))}
                    </div>
                    <a
                      href={lumen.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 border-b border-foreground/30 pb-1 text-sm font-light text-foreground transition-colors hover:text-muted-foreground"
                    >
                      Open project <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>

                <div className="relative min-h-[560px] overflow-hidden bg-[#f6efe4] p-4 sm:p-6 lg:min-h-[660px]">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-foreground/5" />
                  <div className="relative grid h-full gap-4 md:grid-cols-[0.86fr_1.14fr]">
                    <div className="relative min-h-[360px] overflow-hidden rounded-[1.75rem] border border-foreground/10 bg-background/70 shadow-card md:min-h-full">
                      <FallbackImage
                        src={lumen.image}
                        alt="Lumen interface preview"
                        fill
                        sizes="(min-width: 1024px) 35vw, 100vw"
                        fallbackLabel="Lumen"
                        imageClassName="object-cover object-center"
                      />
                    </div>
                    <div className="relative min-h-[360px] overflow-hidden rounded-[1.75rem] border border-foreground/10 bg-background/70 shadow-card md:min-h-full">
                      <FallbackImage
                        src={lumen.darkImage ?? lumen.image}
                        alt="Lumen automation architecture preview"
                        fill
                        sizes="(min-width: 1024px) 45vw, 100vw"
                        fallbackLabel="Architecture"
                        imageClassName="object-cover object-center"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="space-y-7 border-t border-foreground/[0.08] pt-14 sm:pt-16">
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <div>
                <p className="text-sm font-light tracking-[0.01em] text-foreground/45">Selected work</p>
                <h2 className="mt-4 font-display text-4xl leading-none tracking-[-0.04em] text-foreground sm:text-5xl">
                  Other case studies
                </h2>
              </div>
              <p className="max-w-md text-sm font-light leading-7 text-muted-foreground">
                Operations, branding, and local-business systems kept intentionally concise.
              </p>
            </div>
            <div className="grid gap-5 lg:grid-cols-2">
              {selectedWork.map((project) => project && (
                <ProjectCard key={project.slug} {...project} />
              ))}
            </div>
          </div>
        </Container>
      </section>
    </SiteFrame>
  );
}
