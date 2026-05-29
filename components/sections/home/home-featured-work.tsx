import { ArrowUpRight } from "lucide-react";

import { projects } from "@/data/projects";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { FallbackImage } from "@/components/ui/fallback-image";

const selectedWorkSlugs = ["modern-branding-local-businesses", "personal-portfolio", "photography"];

export function HomeFeaturedWorkSection() {
  const lumen = projects.find((project) => project.slug === "lumen");
  const muhome = projects.find((project) => project.slug === "muhome");
  const selectedWork = selectedWorkSlugs
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter(Boolean);

  return (
    <section id="projects" className="scroll-mt-28 py-20 sm:py-28">
      <Container>
        {lumen && (
          <FadeIn>
            <div className="grid gap-10 border-t border-foreground/10 pt-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
              <div className="self-center">
                <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Flagship Product</p>
                <h2 className="mt-5 font-display text-6xl leading-none text-foreground sm:text-7xl lg:text-8xl">
                  {lumen.title}
                </h2>
                <p className="mt-6 max-w-xl text-base font-light leading-8 text-muted-foreground sm:text-lg">
                  A polished smart-home interface built from the Muhome automation architecture.
                </p>
                <div className="mt-8 flex items-center gap-4 text-xs uppercase tracking-[0.18em] text-foreground/60">
                  <span>Product</span>
                  <span className="h-px w-8 bg-foreground/20" />
                  <span>Interface</span>
                  <span className="h-px w-8 bg-foreground/20" />
                  <span>Experience</span>
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

              <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] border border-foreground/10 bg-[#F5F0E7] p-8 shadow-[0_28px_80px_hsl(var(--foreground)/0.08)] sm:min-h-[540px] sm:p-12">
                <div className="absolute inset-8 rounded-[1.5rem] border border-white/60" />
                <div className="absolute left-1/2 top-1/2 h-[72%] w-[54%] -translate-x-1/2 -translate-y-1/2 rounded-[3rem] bg-white/55 blur-3xl" />
                <div className="relative mx-auto flex h-full max-w-[360px] items-center justify-center">
                  <div className="relative aspect-[9/18] w-full max-w-[300px] rounded-[2.5rem] border border-foreground/12 bg-foreground/90 p-2 shadow-[0_34px_80px_hsl(var(--foreground)/0.18)]">
                    <div className="relative h-full overflow-hidden rounded-[2rem] bg-background">
                      <FallbackImage
                        src={lumen.image}
                        alt="Lumen app interface"
                        fill
                        sizes="(min-width: 1024px) 360px, 75vw"
                        fallbackLabel="Lumen"
                        className="bg-background"
                        imageClassName="object-cover object-center"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        )}

        <FadeIn delay={120}>
          <div className="mx-auto my-20 flex max-w-xs flex-col items-center text-center sm:my-28">
            <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Powered by Muhome</p>
            <div className="mt-6 h-20 w-px bg-foreground/15" />
          </div>
        </FadeIn>

        {muhome && (
          <FadeIn delay={180}>
            <div className="grid gap-10 border-y border-foreground/10 py-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">System Layer</p>
                <h2 className="mt-5 font-display text-5xl leading-none text-foreground sm:text-6xl">
                  {muhome.title}
                </h2>
                <p className="mt-6 max-w-xl text-base font-light leading-8 text-muted-foreground">
                  The automation architecture behind Lumen.
                </p>
                <div className="mt-8 grid gap-3 text-xs uppercase tracking-[0.18em] text-foreground/55 sm:grid-cols-2">
                  <span>Infrastructure</span>
                  <span>Automation</span>
                  <span>Architecture</span>
                  <span>Framework</span>
                </div>
              </div>

              <div className="relative min-h-[300px] overflow-hidden rounded-[1.5rem] border border-foreground/10 bg-card/40 p-5">
                <FallbackImage
                  src={muhome.image}
                  alt="Muhome architecture diagram"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  fallbackLabel="Muhome Architecture"
                  imageClassName="object-contain p-8"
                />
              </div>
            </div>
          </FadeIn>
        )}

        <FadeIn delay={220}>
          <div className="pt-20 sm:pt-28">
            <div className="mb-10 flex items-end justify-between gap-6 border-b border-foreground/10 pb-6">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Archive</p>
                <h2 className="mt-4 font-display text-5xl leading-none text-foreground sm:text-6xl">Selected Work</h2>
              </div>
            </div>

            <div className="divide-y divide-foreground/10">
              {selectedWork.map((project) => project && (
                <a
                  key={project.slug}
                  href={project.href ?? `/projects/${project.slug}`}
                  target={project.href ? "_blank" : undefined}
                  rel={project.href ? "noreferrer" : undefined}
                  className="group grid gap-4 py-8 transition-colors hover:text-muted-foreground sm:grid-cols-[0.85fr_1.15fr_auto] sm:items-center"
                >
                  <h3 className="font-display text-3xl leading-tight text-foreground sm:text-4xl">{project.title}</h3>
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
