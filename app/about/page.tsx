import type { Metadata } from "next";
import Link from "next/link";

import { SiteFrame } from "@/components/layout/site-frame";
import { PageIntro } from "@/components/sections/page-intro";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Muhammad Rafiq and the systems-oriented work behind the portfolio.",
  alternates: {
    canonical: "/about"
  }
};

const sections = [
  {
    title: "How I work",
    text: "I start by understanding the real workflow, then shape the structure, interface, and communication around it."
  },
  {
    title: "What I’m building",
    text: "Lumen, local business web systems, operational infrastructure, and visual studies across light, space, and atmosphere."
  },
  {
    title: "What I’m looking for",
    text: "Roles, collaborations, and projects across strategy, product, creative technology, and systems-oriented design."
  }
];

const timeline = [
  "University of Michigan",
  "Lumen",
  "Local business web and brand systems",
  "Fraternal operations infrastructure"
];

export default function AboutPage() {
  return (
    <SiteFrame currentPath="/about">
      <PageIntro
        eyebrow="About"
        title="Built around useful systems."
        description="I work across strategy, product, design, and operations, building systems that make messy work clearer."
      />

      <section className="border-t border-foreground/[0.045] py-14 sm:py-20">
        <Container className="max-w-4xl">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_0.75fr]">
            <div className="space-y-6 text-lg font-light leading-8 text-foreground/70">
              <p>
                Based between Chicago and Ann Arbor, I build polished digital systems, brand work, and project infrastructure.
              </p>
              <p>
                My work usually starts with structure: what matters, where the friction is, and what would make the next decision easier.
              </p>
              <p>
                The common thread is systems: product interfaces, brand/web platforms, operational infrastructure, and the visual judgment that makes them easier to trust.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-foreground/[0.08] bg-card/60 p-6 shadow-soft">
              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-accent/80">Current arc</p>
              <div className="mt-5 space-y-3">
                {timeline.map((item) => (
                  <p key={item} className="rounded-full border border-foreground/[0.08] bg-background/65 px-4 py-2 text-sm font-light text-muted-foreground">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {sections.map((section) => (
              <article key={section.title} className="rounded-[1.25rem] border border-foreground/[0.08] bg-card/55 p-5 shadow-soft">
                <h2 className="font-display text-2xl tracking-[-0.04em] text-foreground">{section.title}</h2>
                <p className="mt-3 text-sm font-light leading-7 text-muted-foreground">{section.text}</p>
              </article>
            ))}
          </div>

          <Link
            href="/perspectives"
            className="mt-10 inline-flex rounded-full border border-foreground/[0.14] px-5 py-3 text-sm font-light transition hover:border-foreground/30"
          >
            Read perspectives
          </Link>
        </Container>
      </section>
    </SiteFrame>
  );
}
