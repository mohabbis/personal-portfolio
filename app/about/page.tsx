import type { Metadata } from "next";
import Link from "next/link";

import { SiteFrame } from "@/components/layout/site-frame";
import { PageIntro } from "@/components/sections/page-intro";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "About",
  description:
    "A brief note about Muhammad Rafiq and the work behind the portfolio.",
  alternates: {
    canonical: "/about"
  }
};

export default function AboutPage() {
  return (
    <SiteFrame currentPath="/perspectives">
      <PageIntro
        eyebrow="About"
        title="Built around useful systems."
        description="I work across strategy, product, design, and operations, shaping ideas into things people can actually use."
      />

      <section className="border-t border-foreground/[0.045] py-14 sm:py-20">
        <Container className="max-w-3xl">
          <div className="space-y-6 text-lg font-light leading-8 text-foreground/70">
            <p>
              Based between Chicago and Ann Arbor, I build polished digital systems, brand work, and project infrastructure.
            </p>
            <p>
              My work usually starts with structure: what matters, where the friction is, and what would make the next decision easier.
            </p>
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
