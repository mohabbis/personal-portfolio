import type { Metadata } from "next";

import { ProjectCard } from "@/components/cards/project-card";
import { SiteFrame } from "@/components/layout/site-frame";
import { PageIntro } from "@/components/sections/page-intro";
import { Container } from "@/components/ui/container";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected work across CGI, graphic design, web systems, strategy, and operations.",
  alternates: {
    canonical: "/work"
  }
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.muharafiq.com" },
    { "@type": "ListItem", position: 2, name: "Work", item: "https://www.muharafiq.com/work" }
  ]
};

export default function WorkPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <SiteFrame currentPath="/work">
        <PageIntro
          eyebrow="Work"
          title="Visual systems with business logic underneath."
          description="Projects across CGI, graphic design, web, brand systems, strategy, risk, and operations."
        />

        <section className="border-t border-foreground/[0.045] bg-background/35 py-10 sm:py-14">
          <Container>
            <div className="grid gap-x-7 gap-y-10 lg:grid-cols-2">
              {projects.map((project) => (
                <ProjectCard key={project.slug} {...project} />
              ))}
            </div>
          </Container>
        </section>
      </SiteFrame>
    </>
  );
}
