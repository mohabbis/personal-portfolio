import type { Metadata } from "next";

import { ProjectCard } from "@/components/cards/project-card";
import { SiteFrame } from "@/components/layout/site-frame";
import { PageIntro } from "@/components/sections/page-intro";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Selected product, brand, systems, and visual work presented as concise case studies."
};

const projectPageArchiveSlugs = ["modern-branding-local-businesses", "personal-portfolio", "photography"];

export default function PortfolioPage() {
  const lumen = projects.find((project) => project.slug === "lumen");
  const selectedWork = projectPageArchiveSlugs
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter(Boolean);

  return (
    <SiteFrame currentPath="/portfolio">
      <PageIntro
        eyebrow="Portfolio"
        title="Selected work across product, systems, and atmosphere."
        description="A focused archive of built work: smart-home interface design, automation architecture, local business branding, portfolio systems, and visual studies."
        actions={
          <ButtonLink href="https://lumen.muharafiq.com" target="_blank" rel="noreferrer" variant="secondary">
            View Lumen
          </ButtonLink>
        }
      />

      <section className="py-20 sm:py-28">
        <Container className="space-y-20 sm:space-y-24">
          <div className="space-y-8">
            <div>
              <p className="text-sm font-light tracking-[0.01em] text-foreground/45">Featured project</p>
              <h2 className="mt-5 font-display text-5xl leading-none text-foreground sm:text-7xl">Lumen</h2>
              <p className="mt-5 max-w-2xl text-base font-light leading-8 text-muted-foreground sm:text-lg">
                A single smart-home project combining the polished interface with the underlying automation architecture: rooms, scenes, devices, motion, and infrastructure.
              </p>
            </div>
            {lumen && <ProjectCard {...lumen} />}
          </div>

          <div className="space-y-7 border-t border-foreground/[0.08] pt-14 sm:pt-16">
            <div>
              <p className="text-sm font-light tracking-[0.01em] text-foreground/45">Selected work</p>
              <h2 className="mt-4 font-display text-3xl text-foreground sm:text-4xl">Other case studies</h2>
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
