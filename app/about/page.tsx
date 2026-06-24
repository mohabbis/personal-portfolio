import type { Metadata } from "next";
import { AppWindow, Compass, Database, Mail, MapPin, Network, Scale, Search, Sparkles } from "lucide-react";

import { SiteFrame } from "@/components/layout/site-frame";
import { AmbientLattice } from "@/components/portfolio/ambient-lattice";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Muhammad Rafiq: strategy, research, and operations for consulting, finance, and business development. How I work, how I think, and how to get in touch.",
  alternates: {
    canonical: "/about"
  }
};

const emailHref = `mailto:${siteConfig.email}?subject=Project%20%2F%20Role%20%2F%20Collaboration%20Inquiry`;

const doing = [
  { icon: Compass, label: "Strategy", text: "Positioning, market analysis, decision frameworks." },
  { icon: Search, label: "Research", text: "Market and competitive analysis, feasibility studies." },
  { icon: Network, label: "Operations", text: "Workflows, records, and continuity." },
  { icon: AppWindow, label: "Execution", text: "Turning analysis into briefs, models, and products." }
];

const thinking = [
  { icon: Search, label: "Understand the workflow first", text: "See how it actually works before changing it." },
  { icon: Scale, label: "Systems still need judgment", text: "Automation helps; it can't tell when to step in." },
  { icon: Database, label: "Fix the source, not symptoms", text: "Clean the inputs before dressing up the output." },
  { icon: Sparkles, label: "Design to keep using", text: "If it feels careless, people stop reaching for it." }
];

const bestFor = ["Consulting & finance", "Strategy & research", "Operations & process", "Collaborations"];

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.muharafiq.com" },
    { "@type": "ListItem", position: 2, name: "About", item: "https://www.muharafiq.com/about" }
  ]
};

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <SiteFrame currentPath="/about">
        <section className="border-b border-foreground/[0.06] py-16 sm:py-24">
          <Container>
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-accent/80">About</p>
            <h1 className="mt-5 max-w-3xl font-display text-5xl leading-[0.98] tracking-[-0.04em] text-foreground sm:text-6xl">
              Structure first, then execution.
            </h1>
            <p className="mt-6 max-w-xl text-lg font-light leading-8 text-muted-foreground">
              I work across strategy, research, and operations — finding the structure in ambiguous problems and turning it into decisions teams can act on. Based between Ann Arbor and Chicago.
            </p>
          </Container>
        </section>

        <section className="border-b border-foreground/[0.06] py-14 sm:py-20">
          <Container>
            <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-accent/80">What I do</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {doing.map(({ icon: Icon, label, text }) => (
                <article key={label} className="rounded-[1.35rem] border border-foreground/[0.08] bg-card/60 p-6 shadow-soft transition hover:-translate-y-0.5 hover:border-accent/25 hover:shadow-card">
                  <Icon className="h-6 w-6 text-accent" strokeWidth={1.5} aria-hidden />
                  <h2 className="mt-4 font-display text-xl tracking-[-0.03em] text-foreground">{label}</h2>
                  <p className="mt-2 text-sm font-light leading-6 text-muted-foreground">{text}</p>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section className="border-b border-foreground/[0.06] py-14 sm:py-20">
          <Container className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-start">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-accent/80">How I think</p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {thinking.map(({ icon: Icon, label, text }) => (
                  <article key={label} className="rounded-[1.35rem] border border-foreground/[0.08] bg-card/60 p-6 shadow-soft">
                    <Icon className="h-6 w-6 text-accent" strokeWidth={1.5} aria-hidden />
                    <h3 className="mt-4 font-display text-lg leading-tight tracking-[-0.03em] text-foreground">{label}</h3>
                    <p className="mt-2 text-sm font-light leading-6 text-muted-foreground">{text}</p>
                  </article>
                ))}
              </div>
            </div>
            <div className="lg:pt-9">
              <AmbientLattice />
              <p className="mt-4 text-center text-xs font-light text-muted-foreground">Messy inputs, resolved into a system.</p>
            </div>
          </Container>
        </section>

        <section id="contact" className="py-14 sm:py-20">
          <Container>
            <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-accent/80">Contact</p>
            <h2 className="mt-4 max-w-2xl font-display text-3xl tracking-[-0.04em] text-foreground sm:text-4xl">
              Feel free to reach out.
            </h2>
            <div className="mt-8 flex items-center gap-3">
              <a
                href={emailHref}
                aria-label="Email"
                className="flex h-14 w-14 items-center justify-center rounded-full border border-foreground/[0.10] bg-card/60 text-accent shadow-soft transition hover:-translate-y-0.5 hover:border-accent/30 hover:bg-card/80 hover:shadow-card"
              >
                <Mail className="h-5 w-5" strokeWidth={1.5} aria-hidden />
              </a>
              <a
                href={siteConfig.linkedIn}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-14 w-14 items-center justify-center rounded-full border border-foreground/[0.10] bg-card/60 text-accent shadow-soft transition hover:-translate-y-0.5 hover:border-accent/30 hover:bg-card/80 hover:shadow-card"
              >
                <LinkedInIcon className="h-5 w-5" />
              </a>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-2">
              <span className="mr-2 inline-flex items-center gap-1.5 text-sm font-light text-muted-foreground">
                <MapPin className="h-4 w-4 text-accent" strokeWidth={1.5} aria-hidden />
                {siteConfig.location}
              </span>
              {bestFor.map((chip) => (
                <span key={chip} className="rounded-full border border-foreground/[0.08] bg-card/50 px-3 py-1.5 text-xs font-light text-muted-foreground">
                  {chip}
                </span>
              ))}
            </div>
          </Container>
        </section>
      </SiteFrame>
    </>
  );
}
