import type { Metadata } from "next";

import { ProjectCard } from "@/components/cards/project-card";
import { SiteFrame } from "@/components/layout/site-frame";
import { PageIntro } from "@/components/sections/page-intro";
import { Container } from "@/components/ui/container";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected work presented as concise case studies."
};

export default function PortfolioPage() {
  return (
    <SiteFrame currentPath="/portfolio">
      <PageIntro
        eyebrow="Portfolio"
        title="Selected work."
        description="A restrained project index built around Lumen, systems, and client-branding work."
      />

      <section className="border-t border-foreground/[0.07] py-12 sm:py-16">
        <Container>
          <div className="mb-16 flex flex-col gap-4 border-b border-foreground/[0.07] pb-8 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-md text-sm leading-7 text-foreground/58">
              A quieter editorial view of the work.
            </p>
            <p className="text-[0.68rem] tracking-[0.16em] text-foreground/38 uppercase">
              {projects.length} selected studies
            </p>
          </div>

          <div className="grid gap-x-8 gap-y-16 lg:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.slug} {...project} />
            ))}
          </div>
        </Container>
      </section>
    </SiteFrame>
  );
}
