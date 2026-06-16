import type { Metadata } from "next";
import Link from "next/link";

import { SiteFrame } from "@/components/layout/site-frame";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Fraternal Operations Case Study",
  description:
    "A systems and operations case study on public/private infrastructure, alumni records, governance continuity, and organizational communication.",
  alternates: {
    canonical: "/portfolio/operations"
  }
};

const metadata_items = [
  { label: "Role", value: "Operations and infrastructure lead" },
  { label: "Timeline", value: "2025 - present" },
  { label: "Status", value: "Active infrastructure project" }
];

const operating_pillars = [
  {
    label: "Financial Reconciliation",
    text: "Clarify accounts, obligations, recurring costs, and decision records so leadership can work from a reliable operating picture."
  },
  {
    label: "Housing Operations",
    text: "Coordinate maintenance, vendor conversations, lease questions, and property-management communication with better records and clearer follow-through."
  },
  {
    label: "Alumni Infrastructure",
    text: "Turn fragmented alumni records into a usable relationship system for updates, mentorship, events, outreach, and institutional continuity."
  },
  {
    label: "Public / Private Separation",
    text: "Use the public site for credibility and contact intake while keeping sensitive records, donor information, and internal notes inside restricted systems."
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
    text: "A substantially expanded alumni base, built through cleanup, cross-referencing, and manual research."
  },
  {
    label: "Operational Playbook",
    text: "A clearer process for documenting finances, vendor issues, housing requests, officer responsibilities, and alumni-facing communication."
  }
];

const lessons = [
  {
    label: "Infrastructure is leadership",
    text: "Most organizational problems are not fixed by a single heroic decision. They are fixed by better records, cleaner processes, and systems that make the next decision easier."
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
    text: "Student organizations reset constantly. The work only matters if it can be handed forward without relying on one person remembering everything."
  }
];

const diagram = [
  "Public website",
  "Update / contact forms",
  "Manual review",
  "Private CRM",
  "Restricted notes",
  "Alumni engagement + officer workflows"
];

export default function OperationsCaseStudyPage() {
  return (
    <SiteFrame currentPath="/portfolio">
      <div className="relative bg-[#0d0608]">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-0 h-[70vh] w-full max-w-3xl -translate-x-1/2 rounded-[50%] bg-[#4a2c08] opacity-[0.35] blur-[180px]" />
          <div className="absolute bottom-0 right-0 h-[40vh] w-[60vw] rounded-[50%] bg-[#3a2206] opacity-[0.25] blur-[160px]" />
        </div>

        <article className="relative">
          <section className="relative overflow-hidden pb-16 pt-16 sm:pt-24">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -left-24 -top-24 h-[520px] w-[640px] rounded-full bg-[#3a2206] opacity-[0.45] blur-[130px]" />
              <div className="absolute right-0 top-8 h-[300px] w-[420px] rounded-full bg-[#d99a3a] opacity-[0.07] blur-[100px]" />
            </div>
            <Container>
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#e0b27a]">Operations &amp; Strategy</p>
              <h1 className="mt-5 font-display text-5xl font-normal leading-[1.05] tracking-[-0.04em] text-white/90 sm:text-7xl">
                Fraternal Operations
              </h1>
              <p className="mt-6 max-w-2xl text-lg font-light leading-8 text-white/65">
                A public/private infrastructure system for alumni engagement, institutional records, communication, and operational continuity. Sensitive details are intentionally omitted.
              </p>
            </Container>
          </section>

          <section className="border-t border-white/[0.07] py-12 sm:py-16">
            <Container>
              <div className="grid gap-6 sm:grid-cols-3">
                {metadata_items.map((item) => (
                  <div key={item.label}>
                    <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-white/25">{item.label}</p>
                    <p className="mt-1.5 font-mono text-sm leading-6 text-white/65">{item.value}</p>
                  </div>
                ))}
              </div>
            </Container>
          </section>

          <section className="border-t border-white/[0.06] py-12 sm:py-16">
            <Container className="max-w-3xl">
              <h2 className="font-display text-3xl font-light tracking-[-0.04em] text-white/85 sm:text-4xl">The Operating Problem</h2>
              <div className="mt-6 space-y-5 text-base font-light leading-8 text-white/68">
                <p>
                  From the outside, a student organization looks simple: officers, events, dues, a house. Underneath, the operating system is messier: incomplete financial records, informal housing operations, scattered alumni data, and institutional memory that leaves when officers graduate.
                </p>
                <p>
                  The goal is not just to fix the problem in front of the organization. It is to build an infrastructure layer that makes the whole thing easier to run, understand, and hand forward.
                </p>
              </div>
            </Container>
          </section>

          <section className="border-t border-white/[0.06] bg-[#0a0405] py-12 sm:py-16">
            <Container>
              <h2 className="font-display text-3xl font-light tracking-[-0.04em] text-white/85 sm:text-4xl">Operating Pillars</h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {operating_pillars.map((item) => (
                  <div key={item.label} className="rounded-[1.5rem] border border-white/[0.08] bg-gradient-to-br from-white/[0.07] to-white/[0.03] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition-all duration-300 hover:border-[#e0b27a]/20 hover:shadow-[0_0_32px_rgba(217,154,58,0.10)]">
                    <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-[#e0b27a]/85">{item.label}</p>
                    <p className="mt-3 text-sm font-light leading-7 text-white/65">{item.text}</p>
                  </div>
                ))}
              </div>
            </Container>
          </section>

          <section className="border-t border-white/[0.06] py-12 sm:py-16">
            <Container className="max-w-3xl">
              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#e0b27a]">Architecture</p>
              <h2 className="mt-4 font-display text-3xl font-light tracking-[-0.04em] text-white/85 sm:text-4xl">Public site to private operations.</h2>
              <div className="mt-8 space-y-3">
                {diagram.map((item, index) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#e0b27a]/25 bg-[#e0b27a]/[0.07] text-xs text-[#e0b27a]">{index + 1}</span>
                    <p className="flex-1 rounded-[1rem] border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-sm font-light text-white/65">{item}</p>
                  </div>
                ))}
              </div>
            </Container>
          </section>

          <section className="border-t border-white/[0.06] bg-[#0a0405] py-12 sm:py-16">
            <Container className="max-w-3xl">
              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#e0b27a]">Current Work</p>
              <h2 className="mt-4 font-display text-3xl font-light tracking-[-0.04em] text-white/85 sm:text-4xl">Public Site + Alumni CRM</h2>
              <div className="mt-6 text-base font-light leading-8 text-white/68">
                <p>
                  The public chapter website is the front door: credible, controlled, and not an archive of internal matters. Underneath, a private CRM holds the alumni records, intake paths, and relationship data — restricted access, clean structure.
                </p>
              </div>

              <div className="mt-8 rounded-[1.5rem] border border-[#e0b27a]/[0.15] bg-[#e0b27a]/[0.04] p-6">
                <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-[#e0b27a]/70">Public chapter site</p>
                <h3 className="mt-2 text-xl font-medium tracking-[-0.025em] text-white/85">Alpha Sigma Phi Theta</h3>
                <p className="mt-3 text-sm font-light leading-7 text-white/65">
                  A public-facing chapter website for alumni updates, officer visibility, recruitment context, philanthropy, and controlled contact intake.
                </p>
                <a href="https://alphasigmaphitheta.com/" target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#e0b27a]/25 bg-[#e0b27a]/[0.07] px-5 py-2.5 text-sm font-light text-[#e0b27a]/75 transition-all duration-200 hover:border-[#e0b27a]/45 hover:bg-[#e0b27a]/[0.13] hover:text-[#e0b27a]">
                  Visit public site →
                </a>
              </div>
            </Container>
          </section>

          <section className="border-t border-white/[0.06] py-12 sm:py-16">
            <Container>
              <h2 className="font-display text-3xl font-light tracking-[-0.04em] text-white/85 sm:text-4xl">Deliverables</h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {deliverables.map((item) => (
                  <div key={item.label} className="rounded-[1.5rem] border border-white/[0.08] bg-gradient-to-b from-white/[0.07] to-white/[0.03] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_1px_24px_rgba(0,0,0,0.22)]">
                    <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-[#e0b27a]/85">{item.label}</p>
                    <p className="mt-3 text-sm font-light leading-7 text-white/65">{item.text}</p>
                  </div>
                ))}
              </div>
            </Container>
          </section>

          <section className="border-t border-white/[0.06] bg-[#0a0405] py-12 sm:py-16">
            <Container>
              <h2 className="font-display text-3xl font-light tracking-[-0.04em] text-white/85 sm:text-4xl">What This Taught Me</h2>
              <div className="mt-8 space-y-4">
                {lessons.map((item) => (
                  <div key={item.label} className="border-l-2 border-[#e0b27a]/35 py-2 pl-5">
                    <p className="text-base font-medium text-white/85">{item.label}</p>
                    <p className="mt-2 text-sm font-light leading-7 text-white/65">{item.text}</p>
                  </div>
                ))}
              </div>
            </Container>
          </section>

          <section className="border-t border-white/[0.06] py-14 sm:py-20">
            <Container>
              <p className="font-serif text-2xl font-light italic text-white/35 sm:text-3xl">Public credibility. Private operations. Fewer loose ends.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/portfolio" className="inline-flex items-center gap-2 rounded-full border border-white/[0.10] bg-white/[0.05] px-6 py-3 text-sm font-light text-white/55 transition-all duration-200 hover:border-white/[0.18] hover:bg-white/[0.09] hover:text-white/75">
                  View other projects
                </Link>
                <Link href="/about#contact" className="inline-flex items-center gap-2 rounded-full border border-[#e0b27a]/25 bg-[#e0b27a]/[0.07] px-6 py-3 text-sm font-light text-[#e0b27a]/70 transition-all duration-200 hover:border-[#e0b27a]/45 hover:bg-[#e0b27a]/[0.14] hover:text-[#e0b27a]">
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
