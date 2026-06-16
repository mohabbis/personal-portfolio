import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { projects } from "@/data/projects";
import { siteConfig, highlights } from "@/data/site";
import { Container } from "@/components/ui/container";

const homeCards = [
  {
    label: "Work",
    href: "/portfolio",
    title: "Selected work",
    description: "Product, brand, web, and systems work in one focused index."
  },
  {
    label: "Photography",
    href: "/photography",
    title: "Visual archive",
    description: "Light, space, details, and the less spreadsheet-shaped parts of life."
  },
  {
    label: "Contact",
    href: "/contact",
    title: "Start a conversation",
    description: "For roles, projects, collaborations, and useful introductions."
  }
];

export function HomeHero() {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(99,61,42,0.12),transparent_34%),radial-gradient(circle_at_78%_18%,rgba(31,23,18,0.08),transparent_32%)]" />
      <div className="pointer-events-none absolute inset-x-6 top-8 h-px bg-gradient-to-r from-transparent via-foreground/12 to-transparent" />

      <Container className="relative grid gap-10 py-14 sm:py-20 lg:grid-cols-[minmax(0,0.92fr)_minmax(340px,0.68fr)] lg:items-center lg:py-16">
        <div className="max-w-3xl space-y-8">
          <div className="space-y-5 animate-hero-2">
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-accent/80">
              Muha · Portfolio
            </p>
            <h1 className="max-w-4xl font-display text-[clamp(3.2rem,8vw,7.6rem)] leading-[0.9] tracking-[-0.055em] text-foreground">
              Leaving every room a little brighter.
            </h1>
            <p className="max-w-[34rem] text-base font-light leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              {siteConfig.hero.subheadline}
            </p>
          </div>

          <div className="grid gap-3 animate-hero-3 sm:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.1rem] border border-foreground/10 bg-card/45 p-4 shadow-soft backdrop-blur-xl"
              >
                <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-accent/80">
                  {item.title}
                </p>
                <p className="mt-3 text-sm font-light leading-6 text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="grid gap-3 animate-hero-3 sm:grid-cols-3">
            {homeCards.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="group rounded-[1.35rem] border border-foreground/10 bg-card/55 p-4 shadow-soft backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-accent/30 hover:bg-card/80 hover:shadow-card"
              >
                <div className="flex items-center justify-between gap-4">
                  <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-accent/80">
                    {card.label}
                  </p>
                  <ArrowUpRight className="h-3.5 w-3.5 text-foreground/40 transition group-hover:text-foreground" />
                </div>
                <p className="mt-5 font-display text-2xl tracking-[-0.045em] text-foreground">
                  {card.title}
                </p>
                <p className="mt-2 text-sm font-light leading-6 text-muted-foreground">
                  {card.description}
                </p>
              </Link>
            ))}
          </div>
        </div>

        <div className="relative animate-hero-2 lg:justify-self-end">
          <div className="absolute -inset-8 rounded-[3rem] bg-accent/12 blur-2xl" />
          <figure className="relative mx-auto w-full max-w-[24rem] overflow-hidden rounded-[2.1rem] border border-white/20 bg-white/[0.08] p-2 shadow-lift backdrop-blur-2xl lg:max-w-[27rem]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem] bg-card">
              <Image
                src="/images/profile/headshot.jpg"
                alt="Editorial portrait of Muhammad Rafiq against a warm neutral background"
                fill
                priority
                sizes="(min-width: 1280px) 432px, (min-width: 1024px) 34vw, 92vw"
                className="object-cover object-[50%_16%]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/28" />
            </div>
            <figcaption className="flex items-center justify-center gap-2 px-3 py-3 text-[11px] tracking-[0.08em] text-foreground/55">
              <span>Ann Arbor</span>
              <span aria-hidden="true">·</span>
              <span>Chicago</span>
            </figcaption>
          </figure>
        </div>
      </Container>

      <section className="relative border-t border-foreground/[0.045] bg-background/45 py-12 sm:py-16">
        <Container>
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-accent/80">Selected work</p>
              <h2 className="mt-3 font-display text-3xl tracking-[-0.045em] text-foreground sm:text-4xl">
                Proof before the museum puzzle.
              </h2>
            </div>
            <Link href="/portfolio" className="text-sm font-light text-muted-foreground transition hover:text-foreground">
              View all work →
            </Link>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={project.href ?? "/portfolio"}
                className="group rounded-[1.35rem] border border-foreground/10 bg-card/55 p-5 shadow-soft backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-accent/30 hover:bg-card/80 hover:shadow-card"
              >
                <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-accent/80">
                  {project.eyebrow}
                </p>
                <h3 className="mt-4 font-display text-2xl tracking-[-0.045em] text-foreground">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm font-light leading-7 text-muted-foreground">
                  {project.subtitle}
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </section>
  );
}
