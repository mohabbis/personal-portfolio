import { ExperienceCard } from "@/components/cards/experience-card";
import { SiteFrame } from "@/components/layout/site-frame";
import { PageIntro } from "@/components/sections/page-intro";
import { Container } from "@/components/ui/container";
import { experiences } from "@/data/experience";

export default function ExperiencePage() {
  return (
    <SiteFrame currentPath="/experience">
      <PageIntro
        eyebrow="Experience"
        title="What I have delivered."
        description="Selected work across strategy, product, and digital execution."
      />

      <section className="py-16 sm:py-20">
        <Container className="space-y-6">
          {experiences.map((experience) => (
            <ExperienceCard key={`${experience.organization}-${experience.title}`} {...experience} />
          ))}
        </Container>
      </section>
    </SiteFrame>
  );
}
