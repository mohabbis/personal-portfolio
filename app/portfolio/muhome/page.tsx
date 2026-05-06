import type { Metadata } from "next";

import { SiteFrame } from "@/components/layout/site-frame";
import { PageIntro } from "@/components/sections/page-intro";
import { SectionHeading } from "@/components/sections/section-heading";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { FallbackImage } from "@/components/ui/fallback-image";
import { Tag } from "@/components/ui/tag";

const productPrinciples = [
  {
    title: "Show status first",
    description:
      "The app should show what the home is doing right now before asking the user to dig through rooms, icons, or automations."
  },
  {
    title: "Make routines obvious",
    description:
      "Moments like leaving the house or winding down at night should feel like clear flows, not hidden settings."
  },
  {
    title: "Keep manual control close",
    description:
      "If automation gets something wrong, the user should be able to fix it quickly without fighting the app."
  }
];

const interfaceAreas = [
  "A dashboard that makes the current home state easy to scan.",
  "Scenes and routines that feel editable instead of mysterious.",
  "Lighting and media controls that do not become a wall of toggles.",
  "Automation feedback that says what changed and why."
];

const proofPoints = [
  "Turns a broad smart-home idea into a clearer app direction.",
  "Shows how I think through status, hierarchy, and user actions.",
  "Presents the idea cleanly enough for someone else to judge it."
];

export const metadata: Metadata = {
  title: "MuHome",
  description:
    "A smart-home app concept focused on visible device status, routines, and simpler controls."
};

export default function MuHomePage() {
  return (
    <SiteFrame currentPath="/portfolio">
      <PageIntro
        eyebrow="MuHome"
        title="A smart-home app concept built around clearer status and easier routines."
        description="MuHome starts from a simple frustration: smart-home apps can show a lot of controls without making it clear what is actually happening."
        actions={
          <>
            <ButtonLink href="/#projects" variant="secondary">
              Back to projects
            </ButtonLink>
            <ButtonLink href="/contact">Discuss the project</ButtonLink>
          </>
        }
      />

      <section className="py-16 sm:py-20">
        <Container className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)]">
          <div className="space-y-6">
            <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] border border-border bg-muted/40 shadow-soft">
              <FallbackImage
                src="/images/projects/project-placeholder-1.svg"
                alt="MuHome project preview"
                fill
                fallbackLabel="MuHome preview"
                sizes="(min-width: 1024px) 58vw, 100vw"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                ["Role", "Product concept, UI direction, and presentation"],
                ["Focus", "Device status, routines, and simple controls"],
                ["Status", "Concept with room for higher-fidelity screens"]
              ].map(([label, value]) => (
                <article key={label} className="rounded-[1.5rem] border border-border bg-card p-5 shadow-soft">
                  <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{label}</p>
                  <p className="mt-3 text-sm leading-6 text-foreground/85">{value}</p>
                </article>
              ))}
            </div>
          </div>

          <aside className="rounded-[2rem] border border-border bg-card p-6 shadow-soft sm:p-8">
            <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">Why it matters</p>
            <h2 className="mt-4 font-display text-3xl text-foreground">The issue is not having controls. It is knowing what the system is doing.</h2>
            <div className="mt-5 space-y-4 text-sm leading-7 text-muted-foreground">
              <p>
                A lot of smart-home interfaces give users lists of devices, scenes, and automations without making the
                current state clear. MuHome starts with that gap.
              </p>
              <p>
                The question is: what would the app look like if its main job was to make the system easier to trust,
                check, and adjust in real time?
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {["Product Strategy", "Smart Home", "Interface Systems", "Connected Devices"].map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          </aside>
        </Container>
      </section>

      <section className="border-y border-border/70 bg-card/40 py-16 sm:py-20">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="Product Principles"
            title="The concept is organized around three decisions."
            description="These keep MuHome from turning into another generic dashboard full of controls."
          />

          <div className="grid gap-6 lg:grid-cols-3">
            {productPrinciples.map((principle) => (
              <article key={principle.title} className="rounded-[1.75rem] border border-border bg-background p-6 shadow-soft">
                <h3 className="font-display text-2xl text-foreground">{principle.title}</h3>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">{principle.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.9fr)]">
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Interface Direction"
              title="What the app is trying to make easier."
              description="MuHome is still a concept, but the direction is specific enough to show the product thinking behind it."
            />

            <div className="grid gap-4">
              {interfaceAreas.map((area) => (
                <article key={area} className="rounded-[1.5rem] border border-border bg-card p-5 shadow-soft">
                  <p className="text-sm leading-7 text-foreground/85">{area}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-border bg-background p-6 shadow-soft sm:p-8">
            <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">Example flow</p>
            <h2 className="mt-4 font-display text-3xl text-foreground">Evening wind-down</h2>
            <div className="mt-5 space-y-4 text-sm leading-7 text-muted-foreground">
              <p>
                The user sees the current room state first: which lights are still on, what media is active, and
                whether any scheduled routine is about to run.
              </p>
              <p>
                Instead of jumping between rooms and tabs, the interface offers the next sensible actions together:
                dim shared spaces, pause media, and trigger a preferred nighttime scene.
              </p>
              <p>
                If something looks wrong, manual control stays close. The app should not force the user to trust hidden
                logic more than they should.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-border/70 bg-card/40 py-16 sm:py-20">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="What It Proves"
            title="Why this is the main project."
            description="MuHome shows how I think through a product problem. It is not pretending to be a finished startup."
          />

          <div className="grid gap-4 lg:grid-cols-3">
            {proofPoints.map((point) => (
              <article key={point} className="rounded-[1.5rem] border border-border bg-background p-6 shadow-soft">
                <p className="text-sm leading-7 text-foreground/85">{point}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="rounded-[2rem] border border-border bg-card p-8 shadow-soft sm:p-10">
          <SectionHeading
            eyebrow="Next"
            title="Want to see the more experimental side?"
            description="The Connected Device Playground gets into hardware-adjacent workflows, automation concepts, and smaller interface experiments."
            actions={
              <>
                <ButtonLink href="/portfolio/connected-device-playground" variant="secondary">
                  Open the playground
                </ButtonLink>
                <ButtonLink href="/contact">Start a conversation</ButtonLink>
              </>
            }
          />
        </Container>
      </section>
    </SiteFrame>
  );
}
