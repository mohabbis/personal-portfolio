import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { projects } from "@/data/projects";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { FallbackImage } from "@/components/ui/fallback-image";

const lumenSignals = ["Interface", "Room control", "Device model", "Muhome architecture"];

export function HomeFeaturedWorkSection() {
  const lumen = projects.find((project) => project.slug === "lumen");
  const supportingProjects = projects.filter((project) => project.slug !== "lumen");

  return (
    <section id="projects" className="scroll-mt-28 py-16 sm:py-24">
      <Container className="space-y-12 sm:space-y-14">
        {lumen && (
          <FadeIn>
            <div className="grid gap-10 border-t border-foreground/10 pt-10 lg:grid-cols-[0.74fr_1.26fr] lg:gap-16">
              <div className="self-center">
                <p className="text-sm font-light tracking-[0.01em] text-muted-foreground">Featured ecosystem</p>
                <h2 className="mt-5 font-display text-6xl leading-none tracking-[-0.055em] text-foreground sm:text-7xl lg:text-8xl">
                  {lumen.title}
                </h2>
                <p className="mt-6 max-w-xl text-base font-light leading-8 text-muted-foreground sm:text-lg">
                  A polished SwiftUI smart-home app for rooms, lights, scenes, and routines, shaped by the Muhome architecture underneath it.
                </p>
                <div className="mt-8 grid max-w-md grid-cols-2 gap-2 text-[11px] tracking-[0.08em] text-foreground/55">
                  {lumenSignals.map((signal) => (
                    <span key={signal} className="rounded-full border border-foreground/10 bg-card/50 px-3 py-2 text-center backdrop-blur-xl">
                      {signal}
                    </span>
                  ))}
                </div>
                {lumen.href && (
                  <a
                    href={lumen.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-10 inline-flex items-center gap-2 border-b border-foreground/30 pb-1 text-sm font-light text-foreground transition-colors hover:text-muted-foreground"
                  >
                    {lumen.ctaLabel ?? "View Lumen"} <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>

              <div className="relative overflow-hidden rounded-[2.25rem] border border-white/20 bg-white/[0.10] p-4 shadow-lift backdrop-blur-2xl sm:p-6">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-foreground/5" />
                <div className="relative grid gap-4 md:grid-cols-[0.88fr_1.12fr]">
                  <div className="relative min-h-[360px] overflow-hidden rounded-[1.75rem] border border-foreground/10 bg-[#f6efe4] shadow-card sm:min-h-[460px]">
                    <FallbackImage
                      src={lumen.image}
                      alt="Lumen room-control interface preview"
                      fill
                      sizes="(min-width: 1024px) 36vw, 92vw"
                      fallbackLabel="Lumen"
                      imageClassName="object-cover object-center"
                    />
                  </div>
                  <div className="relative min-h-[360px] overflow-hidden rounded-[1.75rem] border border-foreground/10 bg-[#f6efe4] shadow-card sm:min-h-[460px]">
                    <FallbackImage
                      src={lumen.darkImage ?? lumen.image}
                      alt="Muhome device-relationship and automation system diagram"
                      fill
                      sizes="(min-width: 1024px) 44vw, 92vw"
                      fallbackLabel="Architecture"
                      imageClassName="object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        )}

        <FadeIn delay={120}>
          <div className="border-t border-foreground/10 pt-8">
            <div className="grid gap-0 divide-y divide-foreground/10 border-y border-foreground/10">
              {supportingProjects.map((project, index) => {
                const isExternal = project.href?.startsWith("http");
                const title = (
                  <>
                    <span className="text-xs text-foreground/35">0{index + 2}</span>
                    <span>{project.title}</span>
                  </>
                );
                const content = (
                  <>
                    <div className="flex flex-col gap-3 sm:gap-4 lg:grid lg:grid-cols-[0.34fr_0.42fr_0.24fr] lg:items-center">
                      <p className="flex items-center gap-4 font-display text-2xl tracking-[-0.045em] text-foreground sm:text-3xl">
                        {title}
                      </p>
                      <div>
                        <p className="text-xs font-light tracking-[0.04em] text-foreground/50">{project.category}</p>
                        <p className="mt-2 max-w-xl text-sm font-light leading-7 text-muted-foreground">{project.subtitle}</p>
                      </div>
                      <span className="inline-flex items-center gap-2 text-sm font-light text-foreground/72 transition-colors group-hover:text-foreground lg:justify-self-end">
                        {project.ctaLabel ?? "View project"} <ArrowUpRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </>
                );

                return project.href ? (
                  isExternal ? (
                    <a
                      key={project.slug}
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group block py-5 transition-colors hover:bg-card/30 sm:py-6"
                    >
                      {content}
                    </a>
                  ) : (
                    <Link
                      key={project.slug}
                      href={project.href}
                      className="group block py-5 transition-colors hover:bg-card/30 sm:py-6"
                    >
                      {content}
                    </Link>
                  )
                ) : (
                  <article key={project.slug} className="py-5 sm:py-6">
                    {content}
                  </article>
                );
              })}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={160}>
          <div className="flex flex-col justify-between gap-6 border-t border-foreground/10 pt-10 sm:flex-row sm:items-center">
            <p className="max-w-xl text-sm font-light leading-7 text-muted-foreground">
              Selected product, identity, operations, and image-making work gathered as a small editorial index.
            </p>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 border-b border-foreground/30 pb-1 text-sm font-light text-foreground transition-colors hover:text-muted-foreground"
            >
              View all projects <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
