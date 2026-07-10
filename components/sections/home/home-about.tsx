import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { siteConfig } from "@/data/site";

export function HomeAboutSection() {
  return (
    <section id="about" className="border-t border-foreground/[0.07] bg-card/40 py-12 sm:py-16">
      <Container>
        <FadeIn>
          <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-center lg:gap-12">
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-accent/80">
              Profile
            </p>
            <div className="space-y-5">
              <p className="max-w-3xl text-base font-light leading-8 text-muted-foreground sm:text-lg">
                {siteConfig.profileLine}
              </p>
              <Link
                href="/about"
                className="focus-ring inline-flex items-center gap-2 rounded-sm border-b border-foreground/30 pb-1 text-sm font-light text-foreground transition-colors hover:text-muted-foreground"
              >
                Read full bio <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
