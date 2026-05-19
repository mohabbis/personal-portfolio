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
    "Selected projects across brand, systems, photography, and editorial web work."
};

export default function PortfolioPage() {
  return (
    <SiteFrame currentPath="/portfolio">
      <PageIntro
        eyebrow="Portfolio"
        title="Three projects that define the site."
        description="Fancy Car Wash, MuHome, and the portfolio itself."
        actions={
          <ButtonLink href="https://fancy-car-wash.vercel.app" target="_blank" rel="noreferrer" variant="secondary">
            View Fancy Car Wash
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
