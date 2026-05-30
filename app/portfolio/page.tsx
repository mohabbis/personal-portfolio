import type { Metadata } from "next";

import { ProjectCard } from "@/components/cards/project-card";
import { SiteFrame } from "@/components/layout/site-frame";
import { PageIntro } from "@/components/sections/page-intro";
import { Container } from "@/components/ui/container";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected product, brand, systems, and visual work presented as concise case studies."
};

export default function PortfolioPage() {
  return (
    <SiteFrame currentPath="/portfolio">
      <PageIntro
        eyebrow="Selected work"
        title="Products, systems, and visual worlds."
        description="A curated archive of smart-home software, operational infrastructure, branding systems, and web experiences. Focused on clarity, execution, and long-term utility."
      />

      <section className="border-t border-foreground/[0.08] py-10 sm:py-14">
        <Container>
          <div className="mb-12 flex flex-col gap-4 border-b border-foreground/[0.08] pb-8 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-xl text-sm leading-7 text-foreground/62">
              Selected projects across strategy, product, creative technology, and institutional systems.
            </p>
            <p className="text-xs tracking-[0.18em] text-foreground/42 uppercase">
              {projects.length} active case studies
            </p>
          </div>

          <div className="grid gap-x-8 gap-y-10 lg:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.slug} {...project} />
            ))}
          </div>
        </Container>
      </section>
    </SiteFrame>
  );
}
