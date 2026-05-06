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
        title="Evidence of structured thinking and disciplined delivery."
        description="A concise record of product and software work, framed around problem solving, stakeholder-ready communication, and execution quality."
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
