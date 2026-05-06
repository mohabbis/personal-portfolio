import { SiteFrame } from "@/components/layout/site-frame";
import { PageIntro } from "@/components/sections/page-intro";
import { Container } from "@/components/ui/container";
import { ProfileImage } from "@/components/ui/profile-image";
import { Tag } from "@/components/ui/tag";
import { highlights, siteConfig, workingPrinciples } from "@/data/site";

export default function AboutPage() {
  return (
    <SiteFrame currentPath="/about">
      <PageIntro
        eyebrow="About"
        title="I bring consulting-style structure to product and software problems."
        description="How I frame ambiguous problems, communicate clearly with stakeholders, and execute with high standards."
      />

      <section className="py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(280px,0.7fr)]">
          <div className="space-y-6">
            {siteConfig.about.paragraphs.map((paragraph) => (
              <p key={paragraph} className="max-w-prose text-base leading-8 text-muted-foreground sm:text-lg">
                {paragraph}
              </p>
            ))}

            <div className="rounded-[1.75rem] border border-border bg-card/80 p-6 shadow-soft">
              <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">Where I work best</p>
              <p className="mt-4 max-w-prose text-base leading-7 text-foreground/85">
                Projects where problem structuring, stakeholder alignment, and technical execution all matter at the
                same time. I aim for work that is usable, measurable, and easy to understand on a first read.
              </p>
            </div>
          </div>

          <aside className="rounded-[1.75rem] border border-border bg-card p-6 shadow-soft sm:p-8">
            <div className="flex justify-center">
              <ProfileImage className="relative h-40 w-40" variant="smiling" />
            </div>

            <p className="mt-6 text-sm uppercase tracking-[0.18em] text-muted-foreground">Strengths</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {siteConfig.about.strengths.map((strength) => (
                <Tag key={strength}>{strength}</Tag>
              ))}
            </div>

            <div className="mt-8 space-y-4 text-sm leading-7 text-muted-foreground">
              <p>{siteConfig.availability}</p>
              <p>Based in {siteConfig.location}, with work spanning product software, connected systems, and visual direction.</p>
            </div>
          </aside>
        </Container>
      </section>

      <section className="border-y border-border/70 bg-card/40 py-16 sm:py-20">
        <Container className="space-y-10">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">What the work emphasizes</p>
            <h2 className="font-display text-4xl text-foreground">The recurring themes behind my work.</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {highlights.map((item) => (
              <article key={item.title} className="rounded-[1.75rem] border border-border bg-background p-6 shadow-soft">
                <h3 className="font-display text-2xl text-foreground">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">{item.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="space-y-10">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">Working principles</p>
            <h2 className="font-display text-4xl text-foreground">How I work when stakes are high.</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {workingPrinciples.map((principle) => (
              <article key={principle.title} className="rounded-[1.75rem] border border-border bg-card p-6 shadow-soft">
                <h3 className="font-display text-2xl text-foreground">{principle.title}</h3>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">{principle.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </SiteFrame>
  );
}
