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
    "Selected case studies: product problem solving, connected systems, and clear stakeholder communication."
};

export default function PortfolioPage() {
  return (
    <SiteFrame currentPath="/portfolio">
      <PageIntro
        eyebrow="Portfolio"
        title="Case studies that show how I structure, analyze, and deliver."
        description="MuHome leads because it demonstrates end-to-end problem framing, solution design, and communication. The supporting work reinforces execution quality and systems thinking."
        actions={
          <ButtonLink href="/portfolio/muhome" variant="secondary">
            Start with MuHome
          </ButtonLink>
        }
      />

      <section className="py-16 sm:py-20">
        <Container className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} {...project} />
          ))}
        </Container>
      </section>
    </SiteFrame>
  );
}
