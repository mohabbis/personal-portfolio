import { SectionHeading } from "@/components/sections/section-heading";
import { Container } from "@/components/ui/container";
import { ExperienceCard } from "@/components/cards/experience-card";
import { experiences } from "@/data/experience";

export function HomeExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-28 py-16 sm:py-20">
      <Container className="space-y-10">
        <SectionHeading
          eyebrow="Experience"
          title="What I’m building and practicing right now."
          description="A compact view of the work behind the site: frontend, MuHome, photography, and device experiments."
        />

        <div className="grid gap-5 lg:grid-cols-2">
          {experiences.map((experience) => (
            <ExperienceCard
              key={`${experience.organization}-${experience.title}`}
              {...experience}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

