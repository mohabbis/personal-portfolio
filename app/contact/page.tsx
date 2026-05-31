import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

import contactPhoto from "@/public/images/gallery/IMG_2372.jpg";
import { SiteFrame } from "@/components/layout/site-frame";
import { PageIntro } from "@/components/sections/page-intro";
import { Container } from "@/components/ui/container";
import { contactItems, siteConfig } from "@/data/site";

const contactLinks = contactItems.map((item) => ({
  label: item.label,
  value: item.value,
  href: item.href,
  external: item.href.startsWith("http")
}));

export default function ContactPage() {
  return (
    <SiteFrame currentPath="/contact">
      <PageIntro
        eyebrow="Contact"
        title="Start a useful conversation."
        description="Email, LinkedIn, and GitHub in one place. No extra friction."
      />

      <section className="py-12 sm:py-16">
        <Container className="grid gap-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(340px,0.58fr)] lg:items-start">
          <div className="rounded-[2rem] border border-border bg-card/70 p-4 shadow-soft sm:p-5">
            <div className="grid gap-3 sm:grid-cols-3">
              {contactLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noreferrer" : undefined}
                  aria-label={`${item.label}: ${item.value}`}
                  className="group rounded-[1.25rem] border border-foreground/[0.08] bg-background/70 p-5 transition-all duration-200 ease-gentle hover:-translate-y-0.5 hover:border-foreground/20 hover:bg-background"
                >
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-sm font-light text-foreground">{item.label}</p>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                  </div>
                  <p className="mt-3 truncate text-xs font-light text-muted-foreground sm:text-sm">
                    {item.value}
                  </p>
                </a>
              ))}
            </div>

            <div className="mt-4 rounded-[1.5rem] border border-foreground/[0.08] bg-background/60 p-5 sm:p-6">
              <p className="max-w-2xl text-base font-light leading-8 text-muted-foreground">
                Best for project work, strategy/product conversations, design systems, operations problems, and useful introductions.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-foreground/[0.08] bg-card/70 p-2 shadow-soft">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.55rem] bg-muted/20">
              <Image
                src={contactPhoto}
                alt="Atmospheric portfolio image"
                fill
                priority
                sizes="(min-width: 1024px) 420px, 92vw"
                className="object-cover"
                placeholder="blur"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/18 via-transparent to-transparent" />
            </div>
          </div>
        </Container>

        <Container className="pt-8">
          <p className="text-sm leading-7 text-muted-foreground">
            Based in {siteConfig.location}.
          </p>
        </Container>
      </section>
    </SiteFrame>
  );
}
