import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { projects } from "@/data/projects";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { FallbackImage } from "@/components/ui/fallback-image";

export function HomeFeaturedWorkSection() {
  const lumen = projects.find((project) => project.slug === "lumen");
  const supportingProjects = projects.filter((project) => project.slug !== "lumen");

  return (
    <section id="projects" className="scroll-mt-28 border-t border-foreground/[0.07] py-16 sm:py-24">
      <Container className="space-y-12 sm:space-y-14">
        {lumen && (
          <FadeIn>
            <div className="grid gap-10 lg:grid-cols-[0.74fr_1.26fr] lg:gap-16">
              <div className="self-center">
                <p className="text-[11px] font-normal uppercase tracking-[0.08em] text-muted-foreground">
                  Featured Project
                </p>
                <h2 className="mt-5 font-display text-6xl leading-none tracking-[-0.055em] text-foreground sm:text-7xl lg:text-8xl">
                  {lumen.title}
                </h2>
                <p className="mt-6 max-w-xl text-base font-light leading-8 text-muted-foreground sm:text-lg">
                  Smart-home control designed around human intent rather than device complexity. The interface organizes control around rooms and scenes. The system layer synchronizes state across heterogeneous devices and protocols.
                </p>
                <Link
                  href="/portfolio/lumen"
                  className="mt-10 inline-flex items-center gap-2 border-b border-foreground/30 pb-1 text-sm font-light text-foreground transition-colors hover:text-muted-foreground"
                >
                  View case study <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              <div className="relative overflow-hidden rounded-[2.25rem] border border-white/20 bg-white/[0.10] p-4 shadow-lift backdrop-blur-2xl sm:p-6">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-foreground/5" />
                <div className="relative aspect-[16/11] overflow-hidden rounded-[1.75rem] border border-foreground/10 bg-[#f6efe4] shadow-card">
                  <FallbackImage
                    src={lumen.image}
                    alt="Lumen room-control interface preview"
                    fill
                    sizes="(min-width: 1024px) 56vw, 92vw"
                    fallbackLabel="Lumen"
                    imageClassName="object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </FadeIn>
        )}

        <FadeIn delay={120}>
          <div className="border-t border-foreground/10 pt-8">
            <p className="mb-6 text-[11px] font-normal uppercase tracking-[0.08em] text-muted-foreground">
              Other Work
            </p>
            <div className="grid gap-0 divide-y divide-foreground/10 border-y border-foreground/10">
              {supportingProjects.map((project, index) => {
                const isExternal = project.href?.startsWith("http");
                const content = (
                  <div className="flex flex-col gap-3 sm:gap-4 lg:grid lg:grid-cols-[0.34fr_0.42fr_0.24fr] lg:items-center">
                    <p className="flex items-center gap-4 font-display text-2xl tracking-[-0.045em] text-foreground sm:text-3xl">
                      <span className="text-xs text-foreground/35">0{index + 2}</span>
                      <span>{project.title}</span>
                    </p>
                    <div>
                      <p className="text-xs font-light tracking-[0.04em] text-foreground/50">{project.category}</p>
                      <p className="mt-2 max-w-xl text-sm font-light leading-7 text-muted-foreground">{project.subtitle}</p>
                    </div>
                    <span className="inline-flex items-center gap-2 text-sm font-light text-foreground/72 transition-colors group-hover:text-foreground lg:justify-self-end">
                      {project.ctaLabel ?? "View project"} <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                );

                if (!project.href) {
                  return (
                    <article key={project.slug} className="py-5 sm:py-6">
                      {content}
                    </article>
                  );
                }

                if (isExternal) {
                  return (
                    <a
                      key={project.slug}
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group block py-5 transition-colors hover:bg-card/30 sm:py-6"
                    >
                      {content}
                    </a>
                  );
                }

                return (
                  <Link
                    key={project.slug}
                    href={project.href}
                    className="group block py-5 transition-colors hover:bg-card/30 sm:py-6"
                  >
                    {content}
                  </Link>
                );
              })}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={160}>
          <div className="flex flex-col justify-between gap-6 border-t border-foreground/10 pt-10 sm:flex-row sm:items-center">
            <p className="max-w-xl text-sm font-light leading-7 text-muted-foreground">
              Product, brand strategy, operations, and system architecture work gathered as a focused project index.
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
