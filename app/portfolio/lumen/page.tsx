import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { SiteFrame } from "@/components/layout/site-frame";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Lumen Case Study",
  description:
    "A SwiftUI smart-home platform focused on interoperability, local control, and reducing the friction of managing fragmented home ecosystems.",
  alternates: {
    canonical: "/portfolio/lumen"
  }
};

const metadata_items = [
  { label: "Role", value: "Product design, interface design, iOS development" },
  { label: "Stack", value: "SwiftUI · Observation · NavigationStack · Xcode" },
  { label: "Timeline", value: "2026 - present" },
  { label: "Status", value: "In development" }
];

const hierarchy = [
  { num: "01", name: "Rooms", desc: "The app starts with spaces people recognize, not a manufacturer-by-manufacturer list of hardware." },
  { num: "02", name: "Scenes", desc: "Common actions should be saved once and triggered quickly, instead of rebuilt every time from separate apps." },
  { num: "03", name: "Presence", desc: "A useful smart home should understand context, occupancy, and routine instead of waiting for constant manual input." },
  { num: "04", name: "Automation", desc: "Automations need to be predictable. If the user cannot understand why something happened, the system is not doing its job." },
];

const protocols = [
  { name: "Native control", via: "Primary" },
  { name: "Lighting scenes", via: "Core" },
  { name: "Presence logic", via: "Exploring" },
  { name: "Local control", via: "Priority" },
];

export default function LumenCaseStudyPage() {
  return (
    <SiteFrame currentPath="/portfolio">
      <article className="relative overflow-hidden">
        <div className="pointer-events-none absolute left-[-12rem] top-24 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(180,91,54,0.16),rgba(180,91,54,0.06)_42%,transparent_72%)] blur-3xl" />
        <div className="pointer-events-none absolute right-[-10rem] top-[28rem] h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle,rgba(222,151,65,0.18),rgba(222,151,65,0.07)_44%,transparent_74%)] blur-3xl" />
        <section className="relative border-b border-foreground/[0.06] py-14 sm:py-20">
          <Container className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-[#b8753c]">Case Study · Lumen</p>
              <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[0.96] tracking-[-0.05em] text-foreground sm:text-6xl lg:text-7xl">
                Building a smarter home without adding more complexity.
              </h1>
              <p className="mt-6 max-w-2xl text-lg font-light leading-8 text-foreground/68">
                Lumen is a SwiftUI smart-home platform built around a simple problem: modern smart homes are powerful, but they are fragmented. Different apps, ecosystems, and automation layers rarely work together in a way that feels cohesive. Lumen is designed to bring lighting, presence, and environmental controls into one interface, with fewer dead ends and less friction for the person actually using the space.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="https://lumen.muharafiq.com" target="_blank" rel="noreferrer" className="rounded-full bg-[linear-gradient(135deg,#b86a34,#d89b4f,#f0c778)] px-5 py-3 text-sm font-light text-[#17110a] shadow-[0_18px_50px_rgba(216,155,79,0.28)] transition hover:scale-[1.02] hover:shadow-[0_22px_70px_rgba(216,155,79,0.36)]">
                  Preview app
                </a>
                <Link href="/portfolio" className="rounded-full border border-[#d89b4f]/30 bg-[#d89b4f]/[0.06] px-5 py-3 text-sm font-light text-foreground transition hover:border-[#d89b4f]/50 hover:bg-[#d89b4f]/[0.1]">
                  Back to work
                </Link>
              </div>
            </div>
            <div className="group relative isolate overflow-visible rounded-[2rem]">
              <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[38rem] w-[38rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(222,151,65,0.42),rgba(184,106,52,0.18)_42%,transparent_70%)] blur-3xl transition duration-700 group-hover:scale-105 group-hover:opacity-95 motion-safe:animate-[ambientGlow_12s_ease-in-out_infinite]" />
              <div className="pointer-events-none absolute -right-10 top-6 -z-10 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(245,199,120,0.38),rgba(245,199,120,0.14)_45%,transparent_72%)] blur-3xl transition duration-700 group-hover:scale-110" />
              <div className="pointer-events-none absolute -bottom-12 left-10 -z-10 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(137,55,38,0.22),rgba(137,55,38,0.1)_45%,transparent_72%)] blur-3xl" />
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-[#d89b4f]/20 bg-card shadow-[0_30px_100px_rgba(128,72,35,0.26)] ring-1 ring-[#f0c778]/20">
                <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle_at_20%_15%,rgba(255,210,128,0.16),transparent_35%),radial-gradient(circle_at_86%_70%,rgba(176,80,52,0.14),transparent_42%)]" />
                <Image src="/images/projects/lumen-thumbnail.svg" alt="Lumen smart-home interface" fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" priority />
              </div>
            </div>
          </Container>
        </section>

        <section className="relative border-b border-foreground/[0.06] bg-[linear-gradient(90deg,rgba(184,106,52,0.08),rgba(222,151,65,0.06),rgba(245,199,120,0.05))] py-14 sm:py-20">
          <Container className="grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
            {metadata_items.map((item) => (
              <div key={item.label} className="rounded-[1.2rem] border border-[#d89b4f]/15 bg-card/45 p-5 shadow-[0_18px_60px_rgba(128,72,35,0.08)]">
                <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#b8753c]">{item.label}</p>
                <p className="mt-3 text-sm font-light leading-6 text-foreground/72">{item.value}</p>
              </div>
            ))}
          </Container>
        </section>

        <section className="relative border-b border-foreground/[0.06] py-14 sm:py-20">
          <Container>
            <h2 className="max-w-2xl font-display text-3xl tracking-[-0.04em] text-foreground sm:text-4xl">
              Built around how people actually use a space.
            </h2>
            <p className="mt-4 max-w-2xl text-base font-light leading-7 text-foreground/64">
              Most smart-home apps start with the device. Lumen starts with the room, the routine, and the action the user is trying to take. The goal is not to show every possible control. The goal is to make the useful ones easier to reach and easier to trust.
            </p>
            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {hierarchy.map((item) => (
                <article key={item.name} className="rounded-[1.35rem] border border-[#d89b4f]/16 bg-[linear-gradient(135deg,rgba(255,244,226,0.055),rgba(216,155,79,0.045),rgba(120,52,35,0.035))] p-6 shadow-[0_20px_70px_rgba(128,72,35,0.1)]">
                  <div className="flex items-baseline gap-3">
                    <span className="font-display text-sm text-[#d89b4f]">{item.num}</span>
                    <h3 className="font-display text-2xl tracking-[-0.04em] text-foreground">{item.name}</h3>
                  </div>
                  <p className="mt-4 text-sm font-light leading-7 text-foreground/68">{item.desc}</p>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section className="relative py-14 sm:py-20">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(216,155,79,0.36),transparent)]" />
          <Container>
            <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#b8753c]">Interoperability</p>
            <p className="mt-3 max-w-xl text-sm font-light leading-7 text-foreground/56">
              Smart homes only become useful when different ecosystems can coexist. Lumen is designed around interoperability instead of vendor lock-in, with local control treated as a priority wherever the hardware allows it. The integration layer matters because reliability matters. A system that depends on five separate apps and a cloud round trip for every basic action is not really smart. It is just fragile with better branding.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {protocols.map((item) => (
                <span
                  key={item.name}
                  className="rounded-full border border-[#d89b4f]/24 bg-[#d89b4f]/[0.08] px-3 py-1.5 text-xs font-light text-foreground/72 shadow-[0_10px_30px_rgba(216,155,79,0.08)]"
                >
                  {item.name} · <span className="text-[#b8753c]">{item.via}</span>
                </span>
              ))}
            </div>
          </Container>
        </section>
      </article>
    </SiteFrame>
  );
}
