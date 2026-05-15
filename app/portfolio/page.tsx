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
    "Projects scoped, built, and shipped — web, desktop, and IoT."
};

export default function PortfolioPage() {
  return (
    <SiteFrame currentPath="/portfolio">
      <PageIntro
        eyebrow="Portfolio"
        title="Work that shipped."
        description="Three production projects — a local business site, a smart home dashboard, and this portfolio."
        actions={
          <ButtonLink href="https://muhome-muharafiq.vercel.app" target="_blank" rel="noreferrer" variant="secondary">
            View MuHome
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
