import { Target, Briefcase, Globe, Code } from "lucide-react";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/data/site";

const GOAL_ICONS = [
  <Briefcase key="briefcase" className="h-5 w-5 text-accent" />,
  <Target key="target" className="h-5 w-5 text-accent" />,
  <Globe key="globe" className="h-5 w-5 text-accent" />,
  <Code key="code" className="h-5 w-5 text-accent" />
];

export function HomeInternshipGoalsSection() {
  return (
    <section id="internship-goals" className="scroll-mt-28 py-16 sm:py-20">
      <Container>
        <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Goals</p>
        <h2 className="mt-4 font-display text-4xl text-foreground">{siteConfig.internshipGoals.title}</h2>
        <p className="mt-4 max-w-prose text-sm leading-7 text-muted-foreground">Internship targets.</p>

        <div className="mt-10 space-y-6">
          {siteConfig.internshipGoals.bullets.map((bullet, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-background/60 flex-shrink-0">
                {GOAL_ICONS[index] || <Target className="h-5 w-5 text-accent" />}
              </div>
              <p className="text-sm leading-6 text-muted-foreground">{bullet}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
