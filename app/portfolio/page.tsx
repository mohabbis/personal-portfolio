import type { Metadata } from "next";

import { ProjectCard } from "@/components/cards/project-card";
import { SiteFrame } from "@/components/layout/site-frame";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Selected projects across software, product ideas, connected systems, and visual work."
};

export default function PortfolioPage() {
  return (
    <SiteFrame currentPath="/portfolio">
      <section className="py-16 sm:py-20">
        <Container>
          <div className="mb-12 sm:mb-14">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Portfolio</p>
              <h1 className="mt-1 font-display text-3xl text-foreground sm:text-4xl">Proof of work.</h1>
            </div>

            <p className="mt-6 max-w-xl text-sm leading-7 text-muted-foreground">
              MuHome is the main product idea, but the rest of the work matters too: the site itself, the car visuals, and the device experiments.
            </p>

            <div className="mt-5">
              <ButtonLink href="https://muhome.vercel.app" target="_blank" rel="noreferrer" variant="secondary">
                Start with MuHome
              </ButtonLink>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.slug} {...project} />
            ))}
          </div>
        </Container>
      </section>
    </SiteFrame>
  );
}
