import { Eye, Zap, Sparkles, GraduationCap } from "lucide-react";
import { Tag } from "@/components/ui/tag";
import { Container } from "@/components/ui/container";
import { ProfileImage } from "@/components/ui/profile-image";
import { siteConfig, workingPrinciples } from "@/data/site";

const PRINCIPLE_ICONS: Record<string, React.ReactNode> = {
  "Keep it clear": <Eye className="h-5 w-5 text-accent" />,
  "Prototype early": <Zap className="h-5 w-5 text-accent" />,
  "Make it look finished": <Sparkles className="h-5 w-5 text-accent" />,
};

export function HomeAboutSection() {
  return (
    <section id="about" className="scroll-mt-28 border-y border-white/10 bg-card/38 py-16 sm:py-20">
      <Container className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.1fr)] lg:items-start">
        <div className="space-y-5">
          <div className="flex items-end gap-5">
            <ProfileImage className="h-24 w-24 flex-shrink-0" priority />
            <p className="mb-1 text-sm uppercase tracking-[0.18em] text-muted-foreground">About</p>
          </div>

          <h2 className="font-display text-4xl text-foreground sm:text-5xl">{siteConfig.about.intro}</h2>

          {siteConfig.about.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-base leading-8 text-muted-foreground">
              {paragraph}
            </p>
          ))}

          <div className="flex flex-wrap gap-3 mb-6">
            {siteConfig.about.strengths.map((strength) => (
              <Tag key={strength}>{strength}</Tag>
            ))}
          </div>

          <div className="space-y-4">
            <p className="mb-1 text-sm uppercase tracking-[0.18em] text-muted-foreground">Education</p>
            <div className="space-y-3">
              <div className="flex items-start gap-4">
                <GraduationCap className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <p className="font-display text-xl text-foreground">{siteConfig.education.institution}</p>
                  <p className="text-sm text-muted-foreground">UMich</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {workingPrinciples.map((principle) => (
            <article
              key={principle.title}
              className="rounded-[1.5rem] border border-white/10 bg-background/72 p-6 shadow-soft"
            >
              <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-card/60">
                {PRINCIPLE_ICONS[principle.title]}
              </div>
              <h3 className="font-display text-2xl text-foreground">{principle.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{principle.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
