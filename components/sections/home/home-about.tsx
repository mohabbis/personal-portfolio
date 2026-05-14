import { Target, Brain, Sparkles } from "lucide-react";
import { Tag } from "@/components/ui/tag";
import { Container } from "@/components/ui/container";
import { ProfileImage } from "@/components/ui/profile-image";
import { FadeIn } from "@/components/ui/fade-in";
import { siteConfig, workingPrinciples } from "@/data/site";

const PRINCIPLE_ICONS: Record<string, React.ReactNode> = {
  "Structure first": <Target className="h-5 w-5 text-accent" />,
  "Logic, then language": <Brain className="h-5 w-5 text-accent" />,
  "Finish to a standard": <Sparkles className="h-5 w-5 text-accent" />,
};

export function HomeAboutSection() {
  return (
    <section id="about" className="scroll-mt-28 border-y border-white/10 bg-card/38 py-16 sm:py-20">
      <Container className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.1fr)] lg:items-start">
        <FadeIn>
          <div className="space-y-5">
            <div className="flex items-center gap-5">
              <ProfileImage className="h-24 w-24 flex-shrink-0 sm:h-28 sm:w-28" priority />
              <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">About</p>
            </div>

            <h2 className="font-display text-4xl text-foreground sm:text-5xl">{siteConfig.about.intro}</h2>

            {siteConfig.about.paragraphs.slice(0, 2).map((paragraph) => (
              <p key={paragraph} className="text-base leading-8 text-muted-foreground">
                {paragraph}
              </p>
            ))}

            <div className="flex flex-wrap gap-3">
              {siteConfig.about.strengths.map((strength) => (
                <Tag key={strength}>{strength}</Tag>
              ))}
            </div>
          </div>
        </FadeIn>

        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {workingPrinciples.map((principle, i) => (
            <FadeIn key={principle.title} delay={i * 100}>
              <article className="rounded-[1.5rem] border border-white/10 bg-background/72 p-6 shadow-soft">
                <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-card/60">
                  {PRINCIPLE_ICONS[principle.title]}
                </div>
                <h3 className="font-display text-2xl text-foreground">{principle.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{principle.description}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
