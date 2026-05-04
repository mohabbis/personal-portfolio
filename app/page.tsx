import type { Metadata } from "next";

import { ProjectCard } from "@/components/cards/project-card";
import { SiteFrame } from "@/components/layout/site-frame";
import { HomeHero } from "@/components/sections/home-hero";
import { MuHomeAiBrief } from "@/components/sections/muhome-ai-brief";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { projects } from "@/data/projects";
import { siteConfig, stats, workingPrinciples } from "@/data/site";

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description
};

export default function HomePage() {
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 3);

  return (
    <SiteFrame currentPath="/">
      <HomeHero />

      <section className="border-b border-border/70 bg-card/45 py-16 sm:py-20">
        <Container className="grid gap-6 lg:grid-cols-3">
          {stats.map((stat) => (
            <article key={stat.label} className="rounded-[1.75rem] border border-border bg-background p-6 shadow-soft">
              <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">{stat.label}</p>
              <h2 className="mt-4 font-display text-3xl text-foreground">{stat.value}</h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">{stat.detail}</p>
            </article>
          ))}
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="space-y-10">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl space-y-3">
              <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">Featured Work</p>
              <h2 className="font-display text-4xl text-foreground sm:text-5xl">
                A portfolio built around product judgment, not just uploaded projects.
              </h2>
              <p className="text-base leading-8 text-muted-foreground">
                MuHome anchors the site because it connects interface execution, connected-device thinking, and a clear
                product argument. The surrounding work shows how that same framing carries into web systems and media.
              </p>
            </div>

            <ButtonLink href="/portfolio" variant="secondary" className="w-fit">
              View all projects
            </ButtonLink>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} {...project} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-border/70 bg-background py-16 sm:py-20">
        <Container>
          <MuHomeAiBrief />
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.1fr)] lg:items-start">
          <div className="space-y-5">
            <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">Working Style</p>
            <h2 className="font-display text-4xl text-foreground sm:text-5xl">
              The site is ready to move toward a custom domain without being tied to one yet.
            </h2>
            <p className="text-base leading-8 text-muted-foreground">
              Domain setup can stay external until you purchase the name. The portfolio itself is structured around
              reusable content, route-level pages, and deployable Next.js conventions so publishing later is clean.
            </p>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href="/contact">Contact Muhammad</ButtonLink>
              <ButtonLink href="/about" variant="secondary">
                Read about the approach
              </ButtonLink>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {workingPrinciples.map((principle) => (
              <article key={principle.title} className="rounded-[1.5rem] border border-border bg-card p-6 shadow-soft">
                <h3 className="font-display text-2xl text-foreground">{principle.title}</h3>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">{principle.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </SiteFrame>
  );
}
