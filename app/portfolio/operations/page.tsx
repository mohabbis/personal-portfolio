import type { Metadata } from "next";
import Link from "next/link";

import { SiteFrame } from "@/components/layout/site-frame";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Fraternal Operations Case Study",
  description:
    "A systems and operations case study on rebuilding chapter infrastructure: finance, housing coordination, alumni data, public communications, and private CRM design."
};

const metadata_items = [
  { label: "Role", value: "Vice President of Finance; operations and infrastructure lead" },
  { label: "Timeline", value: "2025 - present" },
  { label: "Organization", value: "Alpha Sigma Phi Theta, University of Michigan" }
];

const operating_pillars = [
  {
    label: "Financial Clarity",
    text: "Reconcile accounts, identify obligations, separate recurring costs from one-off issues, and make leadership decisions from a reliable financial picture instead of scattered assumptions."
  },
  {
    label: "Housing Operations",
    text: "Coordinate maintenance, vendor conversations, lease questions, and property-management communication so the chapter has a clearer record of what was requested, decided, and completed."
  },
  {
    label: "Alumni Infrastructure",
    text: "Turn fragmented alumni records into a usable relationship system that can support updates, mentorship, events, outreach, and long-term institutional continuity."
  },
  {
    label: "Public / Private Separation",
    text: "Design a public-facing chapter site for credibility and contact intake while keeping sensitive strategy, member data, donor information, and internal notes inside restricted systems."
  }
];

const deliverables = [
  {
    label: "Public Website",
    text: "A controlled public layer for chapter credibility, officer visibility, alumni updates, recruitment context, philanthropy, and contact pathways."
  },
  {
    label: "Private CRM Direction",
    text: "A Supabase-backed internal structure for alumni records, contact quality, interactions, events, attendance, and restricted notes."
  },
  {
    label: "Alumni Dataset",
    text: "A substantially expanded alumni base of roughly 1,400 records, built through cleanup, cross-referencing, and manual research."
  },
  {
    label: "Operational Playbook",
    text: "A clearer process for documenting finances, vendor issues, housing requests, officer responsibilities, and alumni-facing communication."
  }
];

const lessons = [
  {
    label: "Infrastructure is leadership",
    text: "Most organizational problems are not fixed by a single decision. They are fixed by better records, cleaner processes, and systems that make the next decision easier."
  },
  {
    label: "Public legitimacy requires restraint",
    text: "A public site should show institution, continuity, and access points. It should not expose private disputes, personal data, internal strategy, or sensitive financial context."
  },
  {
    label: "Data quality determines execution quality",
    text: "Outreach, mentorship, fundraising, and events all depend on whether the underlying records are accurate enough to act on. Bad data makes serious strategy impossible."
  },
  {
    label: "Systems have to survive turnover",
    text: "Student organizations reset constantly. The work only matters if it can be handed forward to future officers without relying on one person remembering everything."
  }
];

export default function OperationsCaseStudyPage() {
  return (
    <SiteFrame currentPath="/portfolio">
      <article>
        {/* Header */}
        <section className="border-b border-foreground/[0.07] pb-12 pt-16 sm:pt-20">
          <Container>
            <p className="text-[11px] font-normal uppercase tracking-[0.08em] text-muted-foreground">
              Operations &amp; Strategy
            </p>
            <h1 className="mt-4 font-display text-5xl leading-[1.05] tracking-[-0.055em] text-foreground sm:text-7xl">
              Fraternal Operations
            </h1>
            <p className="mt-6 max-w-2xl text-lg font-light leading-8 text-muted-foreground">
              Rebuilding the operating layer behind a student organization: finance, housing coordination, alumni data, public communications, and private infrastructure. The work sits between leadership, systems design, and institutional repair.
            </p>
          </Container>
        </section>

        {/* Metadata */}
        <section className="border-b border-foreground/[0.07] py-8">
          <Container>
            <div className="grid gap-6 sm:grid-cols-3">
              {metadata_items.map((item) => (
                <div key={item.label}>
                  <p className="text-[11px] font-normal uppercase tracking-[0.08em] text-muted-foreground">
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-foreground">{item.value}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Overview */}
        <section className="py-12 sm:py-16">
          <Container className="max-w-3xl">
            <h2 className="font-display text-3xl tracking-[-0.04em] text-foreground sm:text-4xl">The Operating Problem</h2>
            <div className="mt-6 space-y-5 text-base font-light leading-8 text-muted-foreground">
              <p>
                Student organizations often look simple from the outside: officers, events, dues, a house, and a few recurring responsibilities. In practice, the operating system underneath is usually messy. Financial records are incomplete, housing issues are handled informally, alumni data is scattered, and institutional memory leaves whenever officers graduate.
              </p>
              <p>
                My role began with finance, but the actual work expanded into the structure around finance: how information is stored, how decisions are documented, how alumni can be reached, and how a chapter presents itself publicly without exposing private operational details.
              </p>
              <p>
                The goal is not just to solve the issue directly in front of the chapter. The goal is to build an infrastructure layer that makes the organization easier to run, easier to understand, and easier to hand forward.
              </p>
            </div>
          </Container>
        </section>

        {/* Operating Pillars */}
        <section className="border-t border-foreground/[0.07] bg-card/40 py-12 sm:py-16">
          <Container>
            <h2 className="font-display text-3xl tracking-[-0.04em] text-foreground sm:text-4xl">Operating Pillars</h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {operating_pillars.map((item) => (
                <div key={item.label} className="rounded-[1.25rem] border border-foreground/[0.07] bg-background/72 p-5 shadow-soft">
                  <p className="text-[11px] font-normal uppercase tracking-[0.08em] text-muted-foreground">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm font-light leading-7 text-muted-foreground">{item.text}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Approach */}
        <section className="border-t border-foreground/[0.07] py-12 sm:py-16">
          <Container className="max-w-3xl">
            <h2 className="font-display text-3xl tracking-[-0.04em] text-foreground sm:text-4xl">Approach</h2>

            <h3 className="mt-8 text-xl font-medium text-foreground">Start with the record</h3>
            <p className="mt-4 text-base font-light leading-8 text-muted-foreground">
              Before strategy, the chapter needed a clearer record of what existed: balances, obligations, alumni contacts, vendor conversations, officer responsibilities, and open operational issues. The first layer of work was making the situation legible.
            </p>

            <h3 className="mt-8 text-xl font-medium text-foreground">Separate public credibility from private operations</h3>
            <p className="mt-4 text-base font-light leading-8 text-muted-foreground">
              The public site should communicate legitimacy, continuity, and access. It should make the chapter easier to find, contact, and understand. The private CRM should handle the sensitive work: contact records, outreach status, internal notes, event attendance, and restricted strategy.
            </p>

            <h3 className="mt-8 text-xl font-medium text-foreground">Design for officer turnover</h3>
            <p className="mt-4 text-base font-light leading-8 text-muted-foreground">
              A system that only works while one officer is around is not infrastructure. The structure has to be understandable by future leadership: clear tables, clear fields, simple intake flows, and enough documentation that the next team does not start from zero.
            </p>

            <h3 className="mt-8 text-xl font-medium text-foreground">Build the institution in layers</h3>
            <p className="mt-4 text-base font-light leading-8 text-muted-foreground">
              The work is intentionally split into layers: public website, intake forms, private database, internal notes, events, and eventual alumni engagement. Each layer has a different audience and a different risk profile, so each layer needs different permissions and a different tone.
            </p>
          </Container>
        </section>

        {/* Website and CRM */}
        <section className="border-t border-foreground/[0.07] bg-card/40 py-12 sm:py-16">
          <Container className="max-w-3xl">
            <p className="text-[11px] font-normal uppercase tracking-[0.08em] text-muted-foreground">
              Current Work
            </p>
            <h2 className="mt-3 font-display text-3xl tracking-[-0.04em] text-foreground sm:text-4xl">Public Site + Alumni CRM</h2>
            <div className="mt-6 space-y-5 text-base font-light leading-8 text-muted-foreground">
              <p>
                The most visible output is the public chapter website: a controlled front door for alumni, parents, potential members, and institutional contacts. It is designed to show enough structure to be credible without turning the website into an archive of internal chapter issues.
              </p>
              <p>
                Underneath that public layer is the alumni infrastructure: a cleaned and expanded dataset, intake paths for updates, and a private CRM direction built around Supabase. The CRM is where relationship data belongs. The website is where the institution presents itself.
              </p>
              <p>
                That distinction matters. Alumni systems can easily become messy, risky, or performative if public pages and private records blur together. The architecture keeps public trust and private operations separate.
              </p>
            </div>

            <div className="mt-8 rounded-[1.25rem] border border-foreground/[0.08] bg-background/72 p-5 shadow-soft">
              <p className="text-[11px] font-normal uppercase tracking-[0.08em] text-muted-foreground">
                Temporary public preview
              </p>
              <h3 className="mt-2 text-xl font-medium tracking-[-0.025em] text-foreground">
                Alpha Sigma Phi Theta
              </h3>
              <p className="mt-3 text-sm font-light leading-7 text-muted-foreground">
                A temporary public-facing preview for alumni updates, officer visibility, recruitment context, philanthropy, and controlled contact intake while the permanent domain is finalized.
              </p>
              <a
                href="https://asig-725.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-lg border border-foreground/20 bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-foreground/40"
              >
                Open public preview
              </a>
            </div>
          </Container>
        </section>

        {/* Deliverables */}
        <section className="border-t border-foreground/[0.07] py-12 sm:py-16">
          <Container>
            <h2 className="font-display text-3xl tracking-[-0.04em] text-foreground sm:text-4xl">Deliverables</h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {deliverables.map((item) => (
                <div key={item.label} className="rounded-[1.25rem] border border-foreground/[0.07] bg-card/40 p-5">
                  <p className="text-[11px] font-normal uppercase tracking-[0.08em] text-muted-foreground">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm font-light leading-7 text-muted-foreground">{item.text}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Lessons */}
        <section className="border-t border-foreground/[0.07] bg-card/40 py-12 sm:py-16">
          <Container>
            <h2 className="font-display text-3xl tracking-[-0.04em] text-foreground sm:text-4xl">What This Taught Me</h2>
            <div className="mt-8 space-y-4">
              {lessons.map((item) => (
                <div key={item.label} className="border-l-2 border-foreground/30 py-2 pl-5">
                  <p className="text-[11px] font-normal uppercase tracking-[0.08em] text-muted-foreground">
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm font-light leading-7 text-muted-foreground">{item.text}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Footer */}
        <section className="border-t border-foreground/[0.07] py-12 sm:py-16">
          <Container>
            <p className="text-sm font-light leading-7 text-muted-foreground">
              This work is ongoing. The value is not just the website or the database, but the operating system they create together: public legitimacy, private structure, and a cleaner handoff for the next group of officers.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 rounded-lg bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-foreground/80"
              >
                View other projects
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg border border-foreground/20 bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-foreground/40"
              >
                Get in touch
              </Link>
            </div>
          </Container>
        </section>
      </article>
    </SiteFrame>
  );
}
