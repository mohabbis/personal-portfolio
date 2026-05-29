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

      <section className="py-16 sm:py-20">
        <Container className="space-y-14">
          <div className="space-y-5">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-foreground/42">Featured ecosystem</p>
              <h2 className="mt-3 font-display text-3xl text-foreground sm:text-4xl">Lumen</h2>
              <p className="mt-3 max-w-2xl text-sm font-light leading-7 text-muted-foreground">
                Lumen is the interface. Muhome is the infrastructure. Together they form one smart-home ecosystem.
              </p>
            </div>
            {lumen && <ProjectCard {...lumen} />}
          </div>

          {muhome && (
            <div className="space-y-5 border-t border-white/[0.08] pt-10">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-foreground/42">System layer</p>
                <h2 className="mt-3 font-display text-2xl text-foreground sm:text-3xl">Powered by Muhome</h2>
                <p className="mt-3 max-w-2xl text-sm font-light leading-7 text-muted-foreground">
                  The automation architecture behind the polished Lumen interface: device mapping, room logic, lighting behavior, and infrastructure planning.
                </p>
              </div>
              <div className="grid gap-6 lg:grid-cols-2">
                <ProjectCard {...muhome} />
              </div>
            </div>
          )}

          <div className="space-y-5 border-t border-white/[0.08] pt-10">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-foreground/42">Selected work</p>
              <h2 className="mt-3 font-display text-2xl text-foreground sm:text-3xl">Other case studies</h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
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
