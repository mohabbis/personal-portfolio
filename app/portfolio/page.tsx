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
        eyebrow="Projects"
        title="Systems, product, operations, and creative technology."
        description="A focused index of real work across smart-home product development, institutional infrastructure, local-business branding, and client web systems."
      />

      <section className="border-t border-foreground/[0.08] py-12 sm:py-16">
        <Container>
          <div className="grid gap-x-8 gap-y-12 lg:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.slug} {...project} />
            ))}
          </div>
        </Container>
      </section>
    </SiteFrame>
  );
}
