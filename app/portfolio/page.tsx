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

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.muharafiq.com" },
    { "@type": "ListItem", position: 2, name: "Work", item: "https://www.muharafiq.com/portfolio" }
  ]
};

export default function PortfolioPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <SiteFrame currentPath="/portfolio">
        <PageIntro
          eyebrow="Work"
          title="Selected projects."
          description="Product, brand strategy, operations, and system architecture work across smart home, local business, and organizational management."
        />

        <section className="border-t border-foreground/[0.045] bg-background/35 py-10 sm:py-14">
          <Container>
            <div className="mb-10 flex flex-col gap-3 border-b border-foreground/[0.045] pb-6 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
              <p className="max-w-xl text-[0.95rem] font-light leading-7 text-foreground/70">
                Case studies across product, brand strategy, systems, and operations, edited for faster scanning and clearer reading.
              </p>
              <p className="text-xs font-light tracking-[0.08em] text-foreground/45">
                3 case studies
              </p>
            </div>

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
