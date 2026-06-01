import type { Metadata } from "next";

import { ProjectCard } from "@/components/cards/project-card";
import { SiteFrame } from "@/components/layout/site-frame";
import { PageIntro } from "@/components/sections/page-intro";
import { Container } from "@/components/ui/container";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected work across product, brand strategy, systems, and operations."
};

export default function PortfolioPage() {
  return (
    <SiteFrame currentPath="/portfolio">
      <PageIntro
        eyebrow="Work"
        title="Selected projects."
        description="Product, brand strategy, operations, and system architecture work across smart home, local business, and organizational management."
      />

      <section className="border-t border-foreground/[0.07] py-12 sm:py-16">
        <Container>
          <div className="mb-16 flex flex-col gap-4 border-b border-foreground/[0.07] pb-8 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-md text-sm leading-7 text-foreground/58">
              Product, brand strategy, systems, and operations work presented as case studies.
            </p>
            <p className="text-xs tracking-[0.04em] text-foreground/38">
              3 case studies
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
