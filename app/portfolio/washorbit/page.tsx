import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { SiteFrame } from "@/components/layout/site-frame";
import {
  WashOrbitApprovalsMock,
  WashOrbitCaseMock,
  WashOrbitDashboardMock
} from "@/components/portfolio/washorbit-app-mock";
import { Container } from "@/components/ui/container";
import { pageMetadata } from "@/lib/metadata";

const logoLight = "/images/logos/washorbit-logo-light.svg";

export const metadata: Metadata = pageMetadata({
  title: "WashOrbit — Operational CRM for Car Washes | muharafiq",
  description:
    "WashOrbit is an operational CRM I'm building for car washes: it takes a complaint from first report to verified resolution — linking the incident that caused it, who owns it, the recovery offered, and what it cost.",
  path: "/portfolio/washorbit"
});

const pillars = [
  ["Incident", "The operational root cause — a clogged applicator, a torn mitter — owned once."],
  ["Case", "The customer's complaint, matched to their DRB visit and vehicle, with a clear owner."],
  ["Recovery", "A make-good offer that needs leadership approval before it ever reaches the customer."],
  ["Resolution", "Closed only when the fix and the customer outcome are both verified — and costed."]
] as const;

const invariants = [
  {
    title: "Verified resolution before closure",
    body: "A case can't be closed until the operational correction and the customer outcome are both verified, with no approval still pending. No quietly-dropped complaints."
  },
  {
    title: "Approvals gate the money",
    body: "Recovery offers and claim payouts require a leadership decision before delivery — and every decision is recorded."
  },
  {
    title: "One incident, many cases",
    body: "Complaints that share a cause link to a single incident instead of spawning one per person, so a real equipment problem is seen for what it is."
  },
  {
    title: "History can't drift from state",
    body: "Every important change appends an immutable audit row in the same transaction, so the record always matches what actually happened."
  },
  {
    title: "DRB stays the source of truth",
    body: "Customer identity, memberships, visits, and payments are mirrored read-only from DRB. WashOrbit never stores card data or an editable copy of billing truth."
  },
  {
    title: "Tenant isolation, proven",
    body: "Multi-tenant with six roles; every query is scoped to the organization and the test suite proves one org can't read another's cases, customers, or files."
  }
] as const;

function MetadataGrid({ items }: { items: Array<{ label: string; value: string }> }) {
  return (
    <div className="mt-8 grid gap-5 border-t border-border pt-6 sm:grid-cols-3">
      {items.map((item) => (
        <div key={item.label}>
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-accent">{item.label}</p>
          <p className="mt-1.5 font-mono text-sm leading-6 text-muted-foreground">{item.value}</p>
        </div>
      ))}
    </div>
  );
}

function DemoBlock({
  eyebrow,
  title,
  body,
  children
}: {
  eyebrow: string;
  title: string;
  body: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-6">
      <div className="max-w-2xl">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-400">{eyebrow}</p>
        <h3 className="mt-3 font-display text-2xl font-light tracking-[-0.03em] text-white sm:text-3xl">
          {title}
        </h3>
        <p className="mt-3 text-base font-light leading-8 text-slate-300">{body}</p>
      </div>
      {children}
    </div>
  );
}

export default function WashOrbitCaseStudyPage() {
  return (
    <SiteFrame currentPath="/portfolio">
      <div className="relative bg-background pb-24">
        <article className="relative">
          {/* Hero */}
          <section className="relative overflow-hidden border-b border-border pb-16 pt-16 sm:pt-24">
            <Container>
              <div className="max-w-4xl">
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-accent">
                  Product · Operational CRM
                </p>
                <h1 className="mt-5 font-display text-5xl font-normal leading-[1.05] tracking-[-0.04em] text-foreground sm:text-7xl">
                  WashOrbit
                </h1>
                <p className="mt-6 max-w-2xl text-lg font-light leading-8 text-muted-foreground">
                  An operational CRM I&apos;m building for car washes. It takes a complaint from the
                  first report all the way to a verified fix — tying together the incident that
                  caused it, who owns it, the make-good offered, and what it cost.
                </p>
                <MetadataGrid
                  items={[
                    { label: "Role", value: "Product, design, and build" },
                    { label: "Stack", value: "Next.js, TypeScript, Postgres, Prisma" },
                    { label: "Status", value: "In development" }
                  ]}
                />
              </div>
            </Container>
          </section>

          {/* Why / the wedge */}
          <section className="border-b border-border py-14 sm:py-20">
            <Container>
              <div className="max-w-2xl">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accent">
                  The gap I kept hitting
                </p>
                <h2 className="mt-4 font-display text-3xl font-light tracking-[-0.04em] text-foreground sm:text-4xl">
                  A complaint comes in — and nobody can say what really happened.
                </h2>
                <p className="mt-5 text-base font-light leading-8 text-muted-foreground">
                  Doing marketing for two local car washes, I kept watching the same thing: a
                  customer reports a bad wash, someone hands out a free one to smooth it over, and
                  the actual problem — a clogged applicator, a worn mitter — never gets traced or
                  fixed. So it happens again. WashOrbit is built around that one wedge, not generic
                  task management: turn a complaint into an owned case, link it to the operational
                  cause, and don&apos;t let it close until both the machine and the customer are
                  actually made right.
                </p>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {pillars.map(([title, body], i) => (
                  <div
                    key={title}
                    className="rounded-[1.15rem] border border-border bg-card p-5 shadow-soft"
                  >
                    <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-accent">
                      <span className="font-mono text-muted-foreground">{`0${i + 1}`}</span>
                      {title}
                    </div>
                    <p className="mt-2.5 text-sm font-light leading-6 text-muted-foreground">{body}</p>
                  </div>
                ))}
              </div>
            </Container>
          </section>

          {/* Product demo band (dark command-center) */}
          <section className="border-b border-border bg-[#0b1220] py-16 sm:py-24">
            <Container>
              <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                <div className="relative h-12 w-56">
                  <Image src={logoLight} alt="WashOrbit" fill sizes="224px" className="object-contain object-left" />
                </div>
                <p className="max-w-md text-sm font-light leading-7 text-slate-400">
                  A calm, dense command center. Warm branding lives on the marketing site; the
                  operator&apos;s tool is built to be legible under pressure.
                </p>
              </div>

              <div className="space-y-16">
                <DemoBlock
                  eyebrow="Dashboard"
                  title="The whole operation on one screen."
                  body="Open cases, overdue SLAs, approvals waiting on a decision, live incidents, and open claims — the queues a manager actually watches, each one clickable straight into the work."
                >
                  <WashOrbitDashboardMock />
                </DemoBlock>

                <DemoBlock
                  eyebrow="Case detail"
                  title="Everything about one complaint, in one place."
                  body="What happened, which customer and visit, who owns it, the incident that caused it, what was promised, the recovery that needed approval, whether the machine and the customer were both verified — and what it all cost."
                >
                  <WashOrbitCaseMock />
                </DemoBlock>

                <DemoBlock
                  eyebrow="Approvals"
                  title="No make-good goes out unapproved."
                  body="Recovery offers and claim payouts land in a leadership queue before they ever reach a customer. Every approve or deny is written to the audit log in the same transaction."
                >
                  <WashOrbitApprovalsMock />
                </DemoBlock>
              </div>
            </Container>
          </section>

          {/* Invariants / how it's built */}
          <section className="border-b border-border py-14 sm:py-20">
            <Container>
              <div className="max-w-2xl">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accent">
                  The rules underneath
                </p>
                <h2 className="mt-4 font-display text-3xl font-light tracking-[-0.04em] text-foreground sm:text-4xl">
                  Guarantees, not good intentions.
                </h2>
                <p className="mt-5 text-base font-light leading-8 text-muted-foreground">
                  The parts that matter aren&apos;t UI — they&apos;re invariants enforced in the
                  service layer and covered by tests, so the workflow can&apos;t be shortcut even by
                  a rushed operator.
                </p>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {invariants.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[1.15rem] border border-border bg-card p-6 shadow-soft"
                  >
                    <h3 className="font-display text-lg font-normal tracking-[-0.02em] text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2.5 text-sm font-light leading-6 text-muted-foreground">{item.body}</p>
                  </div>
                ))}
              </div>
            </Container>
          </section>

          {/* CTA */}
          <section className="py-14 sm:py-20">
            <Container>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-light text-muted-foreground transition-all duration-200 hover:border-foreground/20 hover:bg-muted hover:text-foreground"
                >
                  View other projects
                </Link>
                <Link
                  href="/about#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/[0.07] px-6 py-3 text-sm font-light text-accent transition-all duration-200 hover:border-accent/45 hover:bg-accent/[0.14]"
                >
                  Get in touch
                </Link>
              </div>
            </Container>
          </section>
        </article>
      </div>
    </SiteFrame>
  );
}
