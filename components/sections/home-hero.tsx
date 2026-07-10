import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Layers, UserRound } from "lucide-react";

import { projects } from "@/data/projects";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/ui/container";

const homeCards = [
  {
    label: "Explore",
    href: "/portfolio",
    title: "View the work",
    icon: Layers
  },
  {
    label: "Profile",
    href: "/about",
    title: "How I work",
    icon: UserRound
  }
];

export function HomeHero() {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(99,61,42,0.12),transparent_34%),radial-gradient(circle_at_78%_18%,rgba(31,23,18,0.08),transparent_32%)]" />
      <div className="pointer-events-none absolute inset-x-6 top-8 h-px bg-gradient-to-r from-transparent via-foreground/12 to-transparent" />

      <Container className="relative grid gap-8 py-12 sm:py-16 lg:grid-cols-[minmax(0,0.92fr)_minmax(320px,0.62fr)] lg:items-center lg:py-14">
        <div className="max-w-2xl space-y-6">
          <div className="space-y-4 animate-hero-2">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-accent/80">
                Muhammad Rafiq
              </p>
              <span className="text-foreground/20" aria-hidden="true">
                /
              </span>
              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-accent/80">
                Design · Strategy · Technology
              </p>
            </div>
            <h1 className="max-w-3xl font-display text-[clamp(2.6rem,6.2vw,5.8rem)] leading-[0.94] tracking-[-0.05em] text-foreground">
              {siteConfig.hero.headline}
            </h1>
            <p className="max-w-[30rem] text-sm font-light leading-7 text-muted-foreground sm:text-base">
              {siteConfig.hero.subheadline}
            </p>
          </div>

          <div className="grid gap-3 animate-hero-3 sm:grid-cols-2">
            {homeCards.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="focus-ring group rounded-[1.2rem] border border-foreground/10 bg-card/55 p-4 shadow-soft backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-accent/30 hover:bg-card/80 hover:shadow-card"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="inline-flex items-center gap-2">
                    <card.icon className="h-4 w-4 text-accent" strokeWidth={1.5} aria-hidden />
                    <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-accent/80">
                      {card.label}
                    </p>
                  </span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-foreground/40 transition group-hover:text-foreground" />
                </div>
                <p className="mt-3 font-display text-xl tracking-[-0.04em] text-foreground">
                  {card.title}
                </p>
              </Link>
            ))}
          </div>
        </div>

        <div className="relative animate-hero-2 lg:justify-self-end">
          <div className="absolute -inset-8 rounded-[3rem] bg-accent/12 blur-2xl" />
          <figure className="relative mx-auto w-full max-w-[21rem] overflow-hidden rounded-[1.8rem] border border-white/20 bg-white/[0.08] p-2 shadow-lift backdrop-blur-2xl lg:max-w-[24rem]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.35rem] bg-card">
              <Image
                src="/images/profile/headshot.jpg"
                alt="Editorial portrait of Muhammad Rafiq against a warm neutral background"
                fill
                priority
                sizes="(min-width: 1280px) 384px, (min-width: 1024px) 30vw, 92vw"
                className="object-cover object-[50%_16%]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/28" />
            </div>
            <figcaption className="flex items-center justify-center gap-2 px-3 py-3 text-[10px] tracking-[0.08em] text-foreground/55">
              <span>Ann Arbor</span>
              <span aria-hidden="true">·</span>
              <span>Chicago</span>
            </figcaption>
          </figure>
        </div>
      </Container>

      <section className="relative border-t border-foreground/[0.045] bg-background/45 py-10 sm:py-12">
        <Container>
          <div className="mb-6 flex items-center justify-between">
            <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-accent/80">Selected work</p>
            <Link href="/portfolio" className="focus-ring rounded-sm text-xs font-light text-muted-foreground transition hover:text-foreground">
              View all
            </Link>
          </div>

          <div className="grid gap-3 lg:grid-cols-3">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={project.href ?? "/portfolio"}
                className="focus-ring group rounded-[1.2rem] border border-foreground/10 bg-card/55 p-4 shadow-soft backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-accent/30 hover:bg-card/80 hover:shadow-card"
              >
                <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-accent/80">
                  {project.eyebrow}
                </p>
                <h3 className="mt-3 font-display text-xl tracking-[-0.04em] text-foreground">
                  {project.title}
                </h3>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </section>
  );
}
