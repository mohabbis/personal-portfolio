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
    title: "Visible state before clever automation",
    description:
      "The interface starts by showing what the home is doing right now, so the user does not have to infer status from scattered icons or room labels."
  },
  {
    title: "Routine-aware control",
    description:
      "Common moments like winding down at night or leaving the house are treated as real product flows, not as afterthoughts buried behind device lists."
  },
  {
    title: "Fast recovery when the system needs help",
    description:
      "Manual control stays close to automation logic so the user can override, inspect, or correct the system without losing confidence."
  }
];

const interfaceAreas = [
  "A status-first dashboard that makes current conditions readable at a glance.",
  "Scenes and routines framed as decisions the user can understand, edit, and trust.",
  "Low-noise lighting and media controls that avoid turning the home into a wall of toggles.",
  "Automation feedback that explains what changed instead of pretending the system is infallible."
];

const proofPoints = [
  "Translates a vague smart-home idea into a product argument with clear priorities.",
  "Shows interface judgment around state, hierarchy, and action sequencing.",
  "Connects product thinking to presentation quality so the concept feels easier to evaluate."
];

export const metadata: Metadata = {
  title: "MuHome",
  description:
    "A smart-home product case study focused on visible device state, routine-aware control, and calmer interface design."
};

export default function MuHomePage() {
  return (
    <SiteFrame currentPath="/portfolio">
      <PageIntro
        eyebrow="MuHome"
        title="A smart-home concept built around trust, visibility, and calmer routine control."
        description="MuHome is the strongest product case study in the portfolio because it turns a broad connected-device space into a clear argument: users need better visibility into state, better timing for actions, and less ambiguity when automation takes over."
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
                ["Role", "Product concept, interface framing, and presentation direction"],
                ["Focus", "Smart-home trust, routine flow, and readable device state"],
                ["Status", "Case study concept with room to expand into higher-fidelity screens"]
              ].map(([label, value]) => (
                <article key={label} className="rounded-[1.5rem] border border-border bg-card p-5 shadow-soft">
                  <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{label}</p>
                  <p className="mt-3 text-sm leading-6 text-foreground/85">{value}</p>
                </article>
              ))}
            </div>
          </div>

          <aside className="rounded-[2rem] border border-border bg-card p-6 shadow-soft sm:p-8">
            <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">Why this concept matters</p>
            <h2 className="mt-4 font-display text-3xl text-foreground">The problem is not access to controls. It is confidence in what the system is doing.</h2>
            <div className="mt-5 space-y-4 text-sm leading-7 text-muted-foreground">
              <p>
                Many smart-home interfaces expose device lists, scenes, and automations without helping the user build
                a clear mental model. MuHome starts with that gap.
              </p>
              <p>
                The concept asks a sharper question: what would a home interface look like if its main job were to
                make connected systems easier to trust, inspect, and adjust in real time?
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
            title="The concept is organized around three product decisions."
            description="These principles keep the project grounded in real user confidence rather than turning it into a generic dashboard of controls."
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
              title="What the experience is trying to make feel easy."
              description="MuHome is still a concept, but the interface direction is specific enough to evaluate the product judgment behind it."
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
                If something looks wrong, manual control stays close. The experience does not force the user to trust
                hidden logic more than they should.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-border/70 bg-card/40 py-16 sm:py-20">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="What It Proves"
            title="Why this project belongs at the center of the portfolio."
            description="MuHome is useful because it shows how Muhammad thinks through product problems, not because it claims to be a finished startup."
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
            title="Want to go deeper into the systems side of the portfolio?"
            description="The Connected Device Playground shows the more experimental side of the same interests: hardware-adjacent workflows, automation concepts, and smaller interface experiments."
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
