import { SectionHeading } from "@/components/sections/section-heading";
import { Container } from "@/components/ui/container";
import { ExperienceCard } from "@/components/cards/experience-card";
import { FadeIn } from "@/components/ui/fade-in";
import { experiences } from "@/data/experience";

export function HomeExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-28 py-20 sm:py-24">
      <Container className="space-y-12">
        <FadeIn>
          <SectionHeading
            eyebrow="Background"
            title="Selected background"
            description="Projects, habits, and contexts that shaped the portfolio."
          />
        </FadeIn>

        <div className="grid gap-6 lg:grid-cols-2">
          {experiences.map((experience, i) => (
            <FadeIn key={`${experience.organization}-${experience.title}`} delay={i * 100}>
              <ExperienceCard {...experience} />
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
