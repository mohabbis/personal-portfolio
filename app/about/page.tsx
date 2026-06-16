import type { Metadata } from "next";
import { AppWindow, ArrowUpRight, Briefcase, Compass, Database, GitBranch, Mail, MapPin, Network, PenTool, Scale, Search, Sparkles } from "lucide-react";

import { SiteFrame } from "@/components/layout/site-frame";
import { AmbientLattice } from "@/components/portfolio/ambient-lattice";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Muhammad Rafiq — strategy, product, creative technology, and systems-oriented design. How I work, how I think, and how to get in touch.",
  alternates: {
    canonical: "/about"
  }
};

const emailHref = `mailto:${siteConfig.email}?subject=Project%20%2F%20Role%20%2F%20Collaboration%20Inquiry`;

const doing = [
  { icon: Compass, label: "Strategy", text: "Positioning, operations, decision systems." },
  { icon: AppWindow, label: "Product", text: "Interfaces, automation, smart-home systems." },
  { icon: PenTool, label: "Brand / Web", text: "Editorial sites and visual systems." },
  { icon: Network, label: "Operations", text: "Records, workflows, and continuity." }
];

const thinking = [
  { icon: Search, label: "Understand the workflow first", text: "See how it actually works before changing it." },
  { icon: Scale, label: "Systems still need judgment", text: "Automation helps; it can't tell when to step in." },
  { icon: Database, label: "Fix the source, not symptoms", text: "Clean the inputs before dressing up the output." },
  { icon: Sparkles, label: "Design to keep using", text: "If it feels careless, people stop reaching for it." }
];

const channels = [
  { icon: Mail, label: "Email", value: siteConfig.email, href: emailHref, external: false },
  { icon: Briefcase, label: "LinkedIn", value: "in/muharafiq", href: siteConfig.linkedIn, external: true },
  { icon: GitBranch, label: "GitHub", value: "mohabbis", href: siteConfig.github, external: true }
];

const bestFor = ["Product & interface", "Brand / web systems", "Strategy & operations", "Useful introductions"];

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.muharafiq.com" },
    { "@type": "ListItem", position: 2, name: "About", item: "https://www.muharafiq.com/about" }
  ]
};

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <SiteFrame currentPath="/about">
        <section className="border-b border-foreground/[0.06] py-16 sm:py-24">
          <Container>
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-accent/80">About</p>
            <h1 className="mt-5 max-w-3xl font-display text-5xl leading-[0.98] tracking-[-0.04em] text-foreground sm:text-6xl">
              Built around useful systems.
            </h1>
            <p className="mt-6 max-w-xl text-lg font-light leading-8 text-muted-foreground">
              I work across strategy, product, design, and operations, making messy work clearer. Based between Ann Arbor and Chicago.
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
              Start a useful conversation.
            </h2>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {channels.map(({ icon: Icon, label, value, href, external }) => (
                <a
                  key={label}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noreferrer" : undefined}
                  className="group flex items-center gap-4 rounded-[1.35rem] border border-foreground/[0.08] bg-card/60 p-5 shadow-soft transition hover:-translate-y-0.5 hover:border-accent/25 hover:shadow-card"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-medium text-foreground">{label}</span>
                    <span className="block truncate text-xs font-light text-muted-foreground">{value}</span>
                  </span>
                  <ArrowUpRight className="ml-auto h-4 w-4 text-muted-foreground transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" aria-hidden />
                </a>
              ))}
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
