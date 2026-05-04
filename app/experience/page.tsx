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
        title="A practical record of what Muhammad is building, learning, and presenting."
        description="These entries focus on current strengths: polished front-end work, smart-home product exploration, visual media, and hands-on technical experimentation."
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
