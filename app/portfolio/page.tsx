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
    "Case studies demonstrating strategic problem framing, solution design, and measurable business impact."
};

export default function PortfolioPage() {
  const lumen = projects.find((project) => project.slug === "lumen");
  const muhome = projects.find((project) => project.slug === "muhome");
  const selectedWork = projects.filter((project) => !["lumen", "muhome"].includes(project.slug));

  return (
    <SiteFrame currentPath="/portfolio">
      <PageIntro
        eyebrow="Portfolio"
        title="Case studies in strategy and execution."
        description="Selected work demonstrating how structured thinking translates into tangible outcomes."
        actions={
          <ButtonLink href="https://fancy-car-wash.vercel.app" target="_blank" rel="noreferrer" variant="secondary">
            View Fancy Car Wash
          </ButtonLink>
        }
      />

      <section className="py-20 sm:py-28">
        <Container className="space-y-20 sm:space-y-24">
          <div className="space-y-8">
            <div>
              <p className="text-sm font-light tracking-[0.01em] text-foreground/45">Featured ecosystem</p>
              <h2 className="mt-5 font-display text-5xl leading-none text-foreground sm:text-7xl">Lumen</h2>
              <p className="mt-5 max-w-2xl text-base font-light leading-8 text-muted-foreground sm:text-lg">
                A polished smart-home interface built from the Muhome automation architecture.
              </p>
            </div>
            {lumen && <ProjectCard {...lumen} />}
          </div>

          {muhome && (
            <div className="space-y-8 border-t border-foreground/[0.08] pt-14 sm:pt-16">
              <div className="mx-auto max-w-3xl text-center">
                <p className="text-sm font-light tracking-[0.01em] text-foreground/45">Powered by Muhome</p>
                <div className="mx-auto mt-6 h-12 w-px bg-foreground/15" />
              </div>

              <div className="grid gap-8 lg:grid-cols-[0.7fr_1fr] lg:items-start">
                <div>
                  <p className="text-sm font-light tracking-[0.01em] text-foreground/45">System layer</p>
                  <h2 className="mt-4 font-display text-3xl text-foreground sm:text-4xl">Muhome</h2>
                  <p className="mt-4 max-w-xl text-sm font-light leading-7 text-muted-foreground">
                    The automation architecture behind Lumen: device mapping, room logic, lighting behavior, and infrastructure planning.
                  </p>
                </div>

                <div className="lg:opacity-90">
                  <ProjectCard {...muhome} />
                </div>
              </div>
            </div>
          )}

          <div className="space-y-7 border-t border-foreground/[0.08] pt-14 sm:pt-16">
            <div>
              <p className="text-sm font-light tracking-[0.01em] text-foreground/45">Selected work</p>
              <h2 className="mt-4 font-display text-3xl text-foreground sm:text-4xl">Other case studies</h2>
            </div>
            <div className="grid gap-5 lg:grid-cols-2">
              {selectedWork.map((project) => (
                <ProjectCard key={project.slug} {...project} />
              ))}
            </div>
          </div>
        </Container>
      </section>
    </SiteFrame>
  );
}
