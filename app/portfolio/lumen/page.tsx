import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { SiteFrame } from "@/components/layout/site-frame";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Lumen Case Study",
  description:
    "A SwiftUI smart-home platform focused on interoperability, local control, ambient lighting, and reducing the friction of managing fragmented home ecosystems.",
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
  { num: "03", name: "Ambient lighting", desc: "Lighting states are treated as part of the interface. Brightness, color temperature, fade timing, and scene previews all help the user understand what will happen before a room changes." },
  { num: "04", name: "Presence", desc: "A useful smart home should understand context, occupancy, and routine instead of waiting for constant manual input." },
  { num: "05", name: "Automation", desc: "Automations need to be predictable. If the user cannot understand why something happened, the system is not doing its job." },
];

const protocols = [
  { name: "HomeKit", via: "Native" },
  { name: "Govee", via: "Supported" },
  { name: "GE Cync", via: "Planned" },
  { name: "Local control", via: "Priority" },
];

export default function LumenCaseStudyPage() {
  return (
    <SiteFrame currentPath="/portfolio">
      <article>
        <section className="border-b border-foreground/[0.06] py-14 sm:py-20">
          <Container className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-foreground/45">Case Study · Lumen</p>
              <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[0.96] tracking-[-0.05em] text-foreground sm:text-6xl lg:text-7xl">
                Building a smarter home without adding more complexity.
              </h1>
              <p className="mt-6 max-w-2xl text-lg font-light leading-8 text-foreground/68">
                Lumen is a SwiftUI smart-home platform built around a simple problem: modern smart homes are powerful, but they are fragmented. Different apps, ecosystems, and automation layers rarely work together in a way that feels cohesive. Lumen is designed to bring lighting, presence, and environmental controls into one interface, with fewer dead ends and less friction for the person actually using the space.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="https://lumen.muharafiq.com" target="_blank" rel="noreferrer" className="rounded-full bg-accent px-5 py-3 text-sm font-light text-white transition hover:opacity-90">
                  Preview app
                </a>
                <Link href="/portfolio" className="rounded-full border border-foreground/[0.14] px-5 py-3 text-sm font-light transition hover:border-foreground/30">
                  Back to work
                </Link>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-foreground/[0.08] bg-card shadow-soft">
              <Image src="/images/projects/lumen-thumbnail.svg" alt="Lumen smart-home interface" fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" priority />
            </div>
          </Container>
        </section>

        <section className="border-b border-foreground/[0.06] py-14 sm:py-20">
          <Container className="grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
            {metadata_items.map((item) => (
              <div key={item.label}>
                <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-foreground/40">{item.label}</p>
                <p className="mt-3 text-sm font-light leading-6 text-foreground/72">{item.value}</p>
              </div>
            ))}
          </Container>
        </section>

        <section className="border-b border-foreground/[0.06] py-14 sm:py-20">
          <Container>
            <h2 className="max-w-2xl font-display text-3xl tracking-[-0.04em] text-foreground sm:text-4xl">
              Built around how people actually use a space.
            </h2>
            <p className="mt-4 max-w-2xl text-base font-light leading-7 text-foreground/64">
              Most smart-home apps start with the device. Lumen starts with the room, the routine, and the action the user is trying to take. The goal is not to show every possible control. The goal is to make the useful ones easier to reach and easier to trust.
            </p>
            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {hierarchy.map((item) => (
                <article key={item.name} className="rounded-[1.35rem] border border-foreground/[0.08] bg-card/70 p-6 shadow-soft">
                  <div className="flex items-baseline gap-3">
                    <span className="font-display text-sm text-accent">{item.num}</span>
                    <h3 className="font-display text-2xl tracking-[-0.04em] text-foreground">{item.name}</h3>
                  </div>
                  <p className="mt-4 text-sm font-light leading-7 text-foreground/68">{item.desc}</p>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-14 sm:py-20">
          <Container>
            <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-foreground/40">Interoperability</p>
            <p className="mt-3 max-w-xl text-sm font-light leading-7 text-foreground/56">
              Smart homes only become useful when different ecosystems can coexist. Lumen is designed around interoperability instead of vendor lock-in, with local control treated as a priority wherever the hardware allows it. The integration layer matters because reliability matters. A system that depends on five separate apps and a cloud round trip for every basic action is not really smart. It is just fragile with better branding.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {protocols.map((item) => (
                <span
                  key={item.name}
                  className="rounded-full border border-foreground/[0.12] bg-card/50 px-3 py-1.5 text-xs font-light text-foreground/68"
                >
                  {item.name} · <span className="text-foreground/45">{item.via}</span>
                </span>
              ))}
            </div>
          </Container>
        </section>
      </article>
    </SiteFrame>
  );
}
