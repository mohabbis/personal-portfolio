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
      <div className="relative bg-[#0d0608]">
        {/* Page-level ambient — deep red bloom top-center, crimson wash bottom-right */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-0 h-[70vh] w-full max-w-3xl -translate-x-1/2 rounded-[50%] bg-[#dc2626] opacity-[0.07] blur-[180px]" />
          <div className="absolute bottom-0 right-0 h-[40vh] w-[60vw] rounded-[50%] bg-[#9f1239] opacity-[0.05] blur-[160px]" />
        </div>

        <article className="relative">

          {/* Header */}
          <section className="relative overflow-hidden pb-16 pt-16 sm:pt-24">
            {/* Hero ambient glows */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -left-24 -top-24 h-[520px] w-[640px] rounded-full bg-[#b91c1c] opacity-[0.10] blur-[130px]" />
              <div className="absolute right-0 top-8 h-[300px] w-[420px] rounded-full bg-[#9f1239] opacity-[0.06] blur-[100px]" />
            </div>
            <Container>
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#fca5a5]">
                Operations &amp; Strategy
              </p>
              <h1 className="mt-5 font-display text-5xl font-light leading-[1.05] tracking-[-0.04em] text-white/90 sm:text-7xl">
                Fraternal Operations
              </h1>
              <p className="mt-6 max-w-2xl text-lg font-light leading-8 text-white/65">
                Rebuilding the operating layer behind a student organization: finance, housing coordination, alumni data, public communications, and private infrastructure. The work sits between leadership, systems design, and institutional repair.
              </p>
            </Container>
          </section>

          {/* Metadata */}
          <section className="border-t border-white/[0.07] py-8">
            <Container>
              <div className="grid gap-6 sm:grid-cols-3">
                {metadata_items.map((item) => (
                  <div key={item.label}>
                    <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-white/25">{item.label}</p>
                    <p className="mt-1.5 text-sm font-light leading-6 text-white/65">{item.value}</p>
                  </div>
                ))}
              </div>
            </Container>
          </section>

          {/* Overview */}
          <section className="border-t border-white/[0.06] py-12 sm:py-16">
            <Container className="max-w-3xl">
              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#fca5a5]">The problem</p>
              <h2 className="mt-4 font-display text-3xl font-light tracking-[-0.04em] text-white/85 sm:text-4xl">The Operating Problem</h2>
              <div className="mt-6 space-y-5 text-base font-light leading-8 text-white/68">
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
          <section className="border-t border-white/[0.06] bg-[#0a0405] py-12 sm:py-16">
            <Container>
              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#fca5a5]">Focus areas</p>
              <h2 className="mt-4 font-display text-3xl font-light tracking-[-0.04em] text-white/85 sm:text-4xl">Operating Pillars</h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {operating_pillars.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[1.5rem] border border-white/[0.08] bg-gradient-to-br from-white/[0.07] to-white/[0.03] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition-all duration-300 hover:border-[#fca5a5]/20 hover:shadow-[0_0_32px_rgba(220,38,38,0.10)]"
                  >
                    <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-[#fca5a5]/85">{item.label}</p>
                    <p className="mt-3 text-sm font-light leading-7 text-white/65">{item.text}</p>
                  </div>
                ))}
              </div>
            </Container>
          </section>

          {/* Approach */}
          <section className="border-t border-white/[0.06] py-12 sm:py-16">
            <Container className="max-w-3xl">
              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#fca5a5]">Method</p>
              <h2 className="mt-4 font-display text-3xl font-light tracking-[-0.04em] text-white/85 sm:text-4xl">Approach</h2>

              <div className="mt-8 space-y-8">
                {[
                  {
                    title: "Start with the record",
                    text: "Before strategy, the chapter needed a clearer record of what existed: balances, obligations, alumni contacts, vendor conversations, officer responsibilities, and open operational issues. The first layer of work was making the situation legible."
                  },
                  {
                    title: "Separate public credibility from private operations",
                    text: "The public site should communicate legitimacy, continuity, and access. It should make the chapter easier to find, contact, and understand. The private CRM should handle the sensitive work: contact records, outreach status, internal notes, event attendance, and restricted strategy."
                  },
                  {
                    title: "Design for officer turnover",
                    text: "A system that only works while one officer is around is not infrastructure. The structure has to be understandable by future leadership: clear tables, clear fields, simple intake flows, and enough documentation that the next team does not start from zero."
                  },
                  {
                    title: "Build the institution in layers",
                    text: "The work is intentionally split into layers: public website, intake forms, private database, internal notes, events, and eventual alumni engagement. Each layer has a different audience and a different risk profile, so each layer needs different permissions and a different tone."
                  }
                ].map((step) => (
                  <div key={step.title} className="border-l-2 border-[#fca5a5]/30 pl-5">
                    <h3 className="text-base font-medium text-white/85">{step.title}</h3>
                    <p className="mt-2 text-base font-light leading-8 text-white/65">{step.text}</p>
                  </div>
                ))}
              </div>
            </Container>
          </section>

          {/* Website and CRM */}
          <section className="border-t border-white/[0.06] bg-[#0a0405] py-12 sm:py-16">
            <Container className="max-w-3xl">
              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#fca5a5]">Current Work</p>
              <h2 className="mt-4 font-display text-3xl font-light tracking-[-0.04em] text-white/85 sm:text-4xl">Public Site + Alumni CRM</h2>
              <div className="mt-6 space-y-5 text-base font-light leading-8 text-white/68">
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

              <div className="mt-8 rounded-[1.5rem] border border-[#fca5a5]/[0.15] bg-[#fca5a5]/[0.04] p-6">
                <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-[#fca5a5]/70">Public chapter site</p>
                <h3 className="mt-2 text-xl font-medium tracking-[-0.025em] text-white/85">
                  Alpha Sigma Phi Theta
                </h3>
                <p className="mt-3 text-sm font-light leading-7 text-white/65">
                  A public-facing chapter website for alumni updates, officer visibility, recruitment context, philanthropy, and controlled contact intake.
                </p>
                <a
                  href="https://alphasigmaphitheta.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#fca5a5]/25 bg-[#fca5a5]/[0.07] px-5 py-2.5 text-sm font-light text-[#fca5a5]/75 transition-all duration-200 hover:border-[#fca5a5]/45 hover:bg-[#fca5a5]/[0.13] hover:text-[#fca5a5]"
                >
                  Visit public site →
                </a>
              </div>
            </Container>
          </section>

          {/* Deliverables */}
          <section className="border-t border-white/[0.06] py-12 sm:py-16">
            <Container>
              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#fca5a5]">Output</p>
              <h2 className="mt-4 font-display text-3xl font-light tracking-[-0.04em] text-white/85 sm:text-4xl">Deliverables</h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {deliverables.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[1.5rem] border border-white/[0.08] bg-gradient-to-b from-white/[0.07] to-white/[0.03] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_1px_24px_rgba(0,0,0,0.22)]"
                  >
                    <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-[#fca5a5]/85">{item.label}</p>
                    <p className="mt-3 text-sm font-light leading-7 text-white/65">{item.text}</p>
                  </div>
                ))}
              </div>
            </Container>
          </section>

          {/* Lessons */}
          <section className="border-t border-white/[0.06] bg-[#0a0405] py-12 sm:py-16">
            <Container>
              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#fca5a5]">Learnings</p>
              <h2 className="mt-4 font-display text-3xl font-light tracking-[-0.04em] text-white/85 sm:text-4xl">What This Taught Me</h2>
              <div className="mt-8 space-y-4">
                {lessons.map((item) => (
                  <div key={item.label} className="border-l-2 border-[#fca5a5]/35 py-2 pl-5">
                    <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-[#fca5a5]/80">{item.label}</p>
                    <p className="mt-2 text-sm font-light leading-7 text-white/65">{item.text}</p>
                  </div>
                ))}
              </div>
            </Container>
          </section>

          {/* Footer */}
          <section className="border-t border-white/[0.06] py-14 sm:py-20">
            <Container>
              <p className="font-serif text-2xl font-light italic text-white/35 sm:text-3xl">Still in progress.</p>
              <p className="mt-4 max-w-xl text-sm font-light leading-7 text-white/55">
                The value is not just the website or the database, but the operating system they create together: public legitimacy, private structure, and a cleaner handoff for the next group of officers.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 rounded-full border border-white/[0.10] bg-white/[0.05] px-6 py-3 text-sm font-light text-white/55 transition-all duration-200 hover:border-white/[0.18] hover:bg-white/[0.09] hover:text-white/75"
                >
                  View other projects
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-[#fca5a5]/25 bg-[#fca5a5]/[0.07] px-6 py-3 text-sm font-light text-[#fca5a5]/70 transition-all duration-200 hover:border-[#fca5a5]/45 hover:bg-[#fca5a5]/[0.14] hover:text-[#fca5a5]"
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
