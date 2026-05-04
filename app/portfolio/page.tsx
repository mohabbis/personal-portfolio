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
    "Selected projects spanning MuHome, portfolio systems, connected-device experiments, and visual media."
};

export default function PortfolioPage() {
  return (
    <SiteFrame currentPath="/portfolio">
      <PageIntro
        eyebrow="Portfolio"
        title="Selected work across product software, connected systems, and visual presentation."
        description="MuHome leads the portfolio because it shows the strongest product case. The rest of the work broadens that story through interface systems, experimentation, and media direction."
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
