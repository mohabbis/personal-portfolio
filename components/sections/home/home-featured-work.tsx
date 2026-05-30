import { ArrowUpRight } from "lucide-react";

import { projects } from "@/data/projects";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { FallbackImage } from "@/components/ui/fallback-image";

const selectedWorkSlugs = [
  "modernizing-alumni-operations",
  "fancy-car-wash",
  "car-wash-guys"
];

const lumenSignals = ["Interface", "Automation", "Room logic", "Infrastructure"];

export function HomeFeaturedWorkSection() {
  const lumen = projects.find((project) => project.slug === "lumen");
  const selectedWork = selectedWorkSlugs
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter(Boolean);

  return (
    <section id="projects" className="scroll-mt-28 py-20 sm:py-28">
      <Container className="space-y-20 sm:space-y-24">
        {lumen && (
          <FadeIn>
            <div className="grid gap-10 border-t border-foreground/10 pt-10 lg:grid-cols-[0.74fr_1.26fr] lg:gap-16">
              <div className="self-center">
                <p className="text-sm font-light tracking-[0.01em] text-muted-foreground">Featured ecosystem</p>
                <h2 className="mt-5 font-display text-6xl leading-none tracking-[-0.055em] text-foreground sm:text-7xl lg:text-8xl">
                  {lumen.title}
                </h2>
                <p className="mt-6 max-w-xl text-base font-light leading-8 text-muted-foreground sm:text-lg">
                  A polished smart-home app for rooms, lights, scenes, and routines, powered by the Muhome architecture underneath.
                </p>
                <div className="mt-8 grid max-w-md grid-cols-2 gap-2 text-[11px] tracking-[0.12em] text-foreground/55">
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
                    View Lumen <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>

              <div className="relative overflow-hidden rounded-[2.25rem] border border-white/20 bg-white/[0.10] p-4 shadow-lift backdrop-blur-2xl sm:p-6">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-foreground/5" />
                <div className="relative grid gap-4 md:grid-cols-[0.88fr_1.12fr]">
                  <div className="relative min-h-[460px] overflow-hidden rounded-[1.75rem] border border-foreground/10 bg-[#f6efe4] shadow-card">
                    <FallbackImage
                      src={lumen.image}
                      alt="Lumen interface preview"
                      fill
                      sizes="(min-width: 1024px) 36vw, 92vw"
                      fallbackLabel="Lumen"
                      imageClassName="object-cover object-center"
                    />
                  </div>
                  <div className="relative min-h-[460px] overflow-hidden rounded-[1.75rem] border border-foreground/10 bg-[#f6efe4] shadow-card">
                    <FallbackImage
                      src={lumen.darkImage ?? lumen.image}
                      alt="Muhome automation architecture preview"
                      fill
                      sizes="(min-width: 1024px) 44vw, 92vw"
                      fallbackLabel="Muhome"
                      imageClassName="object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        )}

        <FadeIn delay={160}>
          <div className="space-y-7 border-t border-foreground/10 pt-14 sm:pt-16">
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <div>
                <p className="text-sm font-light tracking-[0.01em] text-muted-foreground">Selected work</p>
                <h2 className="mt-4 font-display text-5xl leading-none tracking-[-0.045em] text-foreground sm:text-6xl">Projects</h2>
              </div>
              <p className="max-w-md text-sm font-light leading-7 text-muted-foreground">
                Systems, operations, product development, and local-business work presented through a restrained editorial lens.
              </p>
            </div>

            <div className="divide-y divide-foreground/10">
              {selectedWork.map((project) => project && (
                <a
                  key={project.slug}
                  href={project.href ?? `/projects/${project.slug}`}
                  target={project.href ? "_blank" : undefined}
                  rel={project.href ? "noreferrer" : undefined}
                  className="group grid gap-4 py-8 transition-colors hover:text-muted-foreground sm:grid-cols-[0.62fr_1fr_auto] sm:items-center"
                >
                  <div>
                    {project.eyebrow && <p className="mb-2 text-xs tracking-[0.12em] text-foreground/42">{project.eyebrow}</p>}
                    <h3 className="font-display text-3xl leading-tight tracking-[-0.025em] text-foreground sm:text-4xl">{project.title}</h3>
                  </div>
                  <p className="max-w-2xl text-sm font-light leading-7 text-muted-foreground">{project.summary}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-light text-foreground/70">
                    View <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
