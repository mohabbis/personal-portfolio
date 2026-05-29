import { ArrowUpRight } from "lucide-react";

import { projects } from "@/data/projects";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { FallbackImage } from "@/components/ui/fallback-image";

const selectedWorkSlugs = ["modern-branding-local-businesses", "personal-portfolio", "photography"];

const lumenControls = [
  { label: "Living room", value: "72%", detail: "Warm scene active" },
  { label: "Motion", value: "On", detail: "Hallway logic armed" },
  { label: "Evening", value: "8:42", detail: "Soft transition queued" }
];

const systemNodes = ["HomeKit", "Govee", "Cync", "Motion", "Scenes", "Lumen"];

const galleryStudies = [
  { title: "Materials", detail: "Warm surfaces, quiet contrast" },
  { title: "Interfaces", detail: "Controls that recede until needed" },
  { title: "Environments", detail: "Rooms built around useful atmosphere" }
];

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
            <div className="grid gap-10 border-t border-foreground/10 pt-10 lg:grid-cols-[0.74fr_1.26fr] lg:gap-16">
              <div className="self-center">
                <p className="text-sm font-light tracking-[0.08em] text-muted-foreground">Flagship project</p>
                <h2 className="mt-5 font-display text-6xl leading-none tracking-[-0.055em] text-foreground sm:text-7xl lg:text-8xl">
                  {lumen.title}
                </h2>
                <p className="mt-6 max-w-xl text-base font-light leading-8 text-muted-foreground sm:text-lg">
                  A polished smart-home interface built from the Muhome automation architecture.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-2 text-[11px] tracking-[0.12em] text-foreground/55">
                  {lumen.tags.slice(0, 4).map((tag) => (
                    <span key={tag} className="rounded-full border border-foreground/10 bg-card/50 px-3 py-1.5 backdrop-blur-xl">
                      {tag}
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
                <div className="relative grid gap-4 lg:grid-cols-[minmax(0,1fr)_15rem]">
                  <div className="relative min-h-[420px] overflow-hidden rounded-[1.75rem] border border-foreground/10 bg-[#f6efe4] p-5 sm:min-h-[520px]">
                    <div className="absolute inset-5 rounded-[1.3rem] border border-white/60" />
                    <div className="absolute left-8 top-8 h-28 w-28 rounded-full bg-amber-200/60 blur-3xl" />
                    <div className="absolute bottom-10 right-12 h-36 w-36 rounded-full bg-stone-900/10 blur-3xl" />
                    <div className="relative flex h-full items-center justify-center">
                      <div className="relative aspect-[9/18] w-full max-w-[285px] rounded-[2.5rem] border border-foreground/12 bg-foreground/90 p-2 shadow-lift">
                        <div className="relative h-full overflow-hidden rounded-[2rem] bg-background">
                          <FallbackImage
                            src={lumen.image}
                            alt="Lumen app interface"
                            fill
                            sizes="(min-width: 1024px) 285px, 72vw"
                            fallbackLabel="Lumen"
                            className="bg-background"
                            imageClassName="object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-4">
                    {lumenControls.map((control) => (
                      <div key={control.label} className="rounded-[1.35rem] border border-white/20 bg-background/60 p-4 shadow-card backdrop-blur-2xl">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <p className="text-sm font-medium text-foreground">{control.label}</p>
                            <p className="mt-2 text-xs leading-5 text-muted-foreground">{control.detail}</p>
                          </div>
                          <span className="rounded-full bg-foreground px-2.5 py-1 text-xs text-background">{control.value}</span>
                        </div>
                        <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-foreground/10">
                          <div className="h-full w-3/4 rounded-full bg-accent" />
                        </div>
                      </div>
                    ))}
                    <div className="rounded-[1.35rem] border border-foreground/10 bg-card/50 p-4">
                      <p className="text-xs tracking-[0.12em] text-muted-foreground">System view</p>
                      <div className="mt-4 grid grid-cols-2 gap-2">
                        {systemNodes.map((node) => (
                          <span key={node} className="rounded-full border border-foreground/10 px-3 py-2 text-center text-xs text-foreground/70">
                            {node}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        )}

        <FadeIn delay={120}>
          <div className="mx-auto my-20 flex max-w-xs flex-col items-center text-center sm:my-28">
            <p className="text-sm font-light tracking-[0.08em] text-muted-foreground">Powered by Muhome</p>
            <div className="mt-6 h-20 w-px bg-foreground/15" />
          </div>
        </FadeIn>

        {muhome && (
          <FadeIn delay={180}>
            <div className="grid gap-10 border-y border-foreground/10 py-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
              <div>
                <p className="text-sm font-light tracking-[0.08em] text-muted-foreground">System layer</p>
                <h2 className="mt-5 font-display text-5xl leading-none tracking-[-0.045em] text-foreground sm:text-6xl">
                  {muhome.title}
                </h2>
                <p className="mt-6 max-w-xl text-base font-light leading-8 text-muted-foreground">
                  The automation architecture behind Lumen: device mapping, room logic, scenes, and infrastructure planning for a calmer smart-home experience.
                </p>
                <div className="mt-8 grid gap-3 text-sm text-foreground/60 sm:grid-cols-2">
                  <span>Infrastructure</span>
                  <span>Automation</span>
                  <span>Architecture</span>
                  <span>Framework</span>
                </div>
              </div>

              <div className="relative min-h-[330px] overflow-hidden rounded-[1.75rem] border border-white/20 bg-white/[0.08] p-5 shadow-lift backdrop-blur-2xl">
                <div className="absolute inset-0 bg-gradient-to-b from-accent/10 to-transparent" />
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
                <p className="text-sm font-light tracking-[0.08em] text-muted-foreground">Selected work</p>
                <h2 className="mt-4 font-display text-5xl leading-none tracking-[-0.045em] text-foreground sm:text-6xl">Archive</h2>
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
                  <h3 className="font-display text-3xl leading-tight tracking-[-0.025em] text-foreground sm:text-4xl">{project.title}</h3>
                  <p className="max-w-2xl text-sm font-light leading-7 text-muted-foreground">{project.summary}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-light text-foreground/70">
                    View <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={260}>
          <div className="pt-20 sm:pt-28">
            <div className="grid gap-4 sm:grid-cols-3">
              {galleryStudies.map((study) => (
                <a
                  key={study.title}
                  href="/gallery"
                  className="group relative min-h-[260px] overflow-hidden rounded-[1.75rem] border border-white/20 bg-white/[0.08] p-5 shadow-card backdrop-blur-2xl transition-transform duration-300 ease-gentle hover:-translate-y-1"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-foreground/5" />
                  <div className="absolute inset-x-5 top-5 h-px bg-foreground/15" />
                  <div className="relative flex h-full flex-col justify-end">
                    <p className="font-display text-3xl tracking-[-0.035em] text-foreground">{study.title}</p>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">{study.detail}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
