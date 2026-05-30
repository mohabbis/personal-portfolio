import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { SiteFrame } from "@/components/layout/site-frame";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Lumen Case Study",
  description:
    "A smart-home ecosystem designed around human intent. The interface organizes control around rooms and scenes; the system layer synchronizes state across heterogeneous devices and protocols."
};

const metadata_items = [
  { label: "Role", value: "Product design, system architecture, iOS development" },
  { label: "Timeline", value: "2026 - present" },
  { label: "Scope", value: "Consumer iOS app, backend infrastructure, device protocol abstraction" },
  { label: "Status", value: "Beta testing in Xcode" }
];

const stats = [
  { value: "4", unit: "protocols", label: "HomeKit · Matter · Govee · GE Cync" },
  { value: "<5", unit: "min", label: "Onboarding target" },
  { value: "4", unit: "layers", label: "Rooms · Devices · Scenes · Automations" },
];

const hierarchy = [
  { num: "01", name: "Rooms", desc: "Physical spaces. The primary lens users organize their home around." },
  { num: "02", name: "Devices", desc: "Hardware living inside rooms. Accessible but not the primary interface." },
  { num: "03", name: "Scenes", desc: "Named room states. Reading mode, movie mode, evening scene." },
  { num: "04", name: "Automations", desc: "Rules that trigger scenes. Motion, time, sensors." },
];

const protocols = [
  { name: "HomeKit", via: "Apple Home framework" },
  { name: "Matter", via: "matter.js" },
  { name: "Govee", via: "HTTP API" },
  { name: "GE Cync", via: "Cloud" },
];

const learnings = [
  { label: "Architecture enables simplicity", text: "The system layer absorbs complexity so the interface does not have to. Good architecture is invisible to users." },
  { label: "Information models compound", text: "Organizing around rooms and scenes cascaded through every layer: UI, backend, automations, onboarding." },
  { label: "User models beat system models", text: "Users think in rooms and scenes, not devices and protocols. The interface reflects that, even if the backend does not." },
  { label: "Separation of concerns scales", text: "Frontend and backend evolved independently. New protocols added without frontend changes. Interface refined without touching core logic." },
];

export default function LumenCaseStudyPage() {
  return (
    <SiteFrame currentPath="/portfolio">
      <article>

        {/* Header */}
        <section className="border-b border-foreground/[0.07] pb-12 pt-16 sm:pt-20">
          <Container>
            <p className="text-[11px] font-normal uppercase tracking-[0.08em] text-muted-foreground">
              Featured Project · Product &amp; System Architecture
            </p>
            <h1 className="mt-4 font-display text-5xl leading-[1.05] tracking-[-0.055em] text-foreground sm:text-7xl">
              Lumen
            </h1>
            <p className="mt-6 max-w-xl text-lg font-light leading-8 text-muted-foreground">
              Smart-home control built around how people actually think about their space, not how devices are organized.
            </p>
          </Container>
        </section>

        {/* Metadata */}
        <section className="border-b border-foreground/[0.07] py-8">
          <Container>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {metadata_items.map((item) => (
                <div key={item.label}>
                  <p className="text-[11px] font-normal uppercase tracking-[0.08em] text-muted-foreground">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-foreground">{item.value}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Hero image */}
        <section className="border-b border-foreground/[0.07] bg-[#1a0e06]">
          <div className="relative mx-auto aspect-[16/9] max-w-[1400px] overflow-hidden">
            <Image
              src="/images/projects/lumen-iot-interface.svg"
              alt="Lumen interface"
              fill
              sizes="100vw"
              className="object-cover object-center"
              priority
            />
          </div>
        </section>

        {/* Stats row */}
        <section className="border-b border-foreground/[0.07] bg-card/40 py-10">
          <Container>
            <div className="grid grid-cols-3 divide-x divide-foreground/[0.07]">
              {stats.map((s) => (
                <div key={s.label} className="px-6 first:pl-0 last:pr-0 sm:px-10">
                  <p className="font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                    {s.value}<span className="ml-1 text-xl font-light text-muted-foreground sm:text-2xl">{s.unit}</span>
                  </p>
                  <p className="mt-1 text-xs font-light text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Problem — tight */}
        <section className="py-12 sm:py-16">
          <Container className="max-w-3xl">
            <h2 className="font-display text-3xl tracking-[-0.04em] text-foreground sm:text-4xl">The Problem</h2>
            <p className="mt-6 text-base font-light leading-8 text-muted-foreground">
              Smart home control is fragmented by design. Each vendor ships an app. Users end up managing devices when they want to manage their home. A light is not meaningful. A room at a particular brightness and color temperature is. Lumen is built around that distinction.
            </p>
          </Container>
        </section>

        {/* Information model — visual */}
        <section className="border-t border-foreground/[0.07] bg-card/40 py-12 sm:py-16">
          <Container>
            <h2 className="font-display text-3xl tracking-[-0.04em] text-foreground sm:text-4xl">Information Model</h2>
            <p className="mt-4 max-w-xl text-sm font-light leading-7 text-muted-foreground">
              Four hierarchical levels. Every interface decision, backend structure, and automation rule derives from this.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {hierarchy.map((level) => (
                <div key={level.name} className="rounded-[1.25rem] border border-foreground/[0.07] bg-background p-5 shadow-soft">
                  <p className="text-[11px] font-medium tracking-[0.14em] text-muted-foreground/60">{level.num}</p>
                  <p className="mt-3 text-xl font-medium tracking-tight text-foreground">{level.name}</p>
                  <p className="mt-2 text-sm font-light leading-6 text-muted-foreground">{level.desc}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* System layer + protocols */}
        <section className="border-t border-foreground/[0.07] py-12 sm:py-16">
          <Container>
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <h2 className="font-display text-3xl tracking-[-0.04em] text-foreground sm:text-4xl">System Layer</h2>
                <p className="mt-6 text-base font-light leading-8 text-muted-foreground">
                  The frontend sends intent. The system layer figures out which protocol, which device address, which command format. State synchronization, automation execution, and device discovery all live here — independent of the UI.
                </p>
                <div className="mt-6 rounded-[1.25rem] border border-foreground/10 bg-card/60 p-5">
                  <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">Principle</p>
                  <p className="mt-2 text-sm font-light leading-7 text-muted-foreground">
                    The system layer is responsible for reliability. The interface is responsible for clarity. Neither layer conflates the other&apos;s concerns.
                  </p>
                </div>
              </div>
              <div>
                <h2 className="font-display text-3xl tracking-[-0.04em] text-foreground sm:text-4xl">Protocols</h2>
                <p className="mt-6 text-sm font-light leading-7 text-muted-foreground">Four heterogeneous protocols behind a single model.</p>
                <div className="mt-6 space-y-3">
                  {protocols.map((p) => (
                    <div key={p.name} className="flex items-center justify-between rounded-[0.875rem] border border-foreground/[0.07] bg-card/60 px-5 py-3.5">
                      <p className="font-medium text-foreground">{p.name}</p>
                      <p className="text-xs font-light text-muted-foreground">{p.via}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Architecture visual */}
        <section className="border-t border-foreground/[0.07] bg-[#100a04] py-12 sm:py-16">
          <Container>
            <h2 className="font-display text-3xl tracking-[-0.04em] text-foreground/90 sm:text-4xl">Architecture</h2>
            <div className="mt-8 grid gap-3">
              {/* iOS App block */}
              <div className="rounded-[1.25rem] border border-white/10 bg-white/[0.06] p-6">
                <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-amber-400/70">iOS App</p>
                <div className="mt-4 grid grid-cols-3 gap-3">
                  {["Rooms · Scenes", "State (Observable)", "Controls"].map((l) => (
                    <div key={l} className="rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-center text-xs font-light text-white/60">{l}</div>
                  ))}
                </div>
              </div>
              {/* Arrow */}
              <div className="flex justify-center py-1">
                <div className="flex flex-col items-center gap-1">
                  <div className="h-5 w-px bg-amber-400/30"/>
                  <p className="text-[10px] tracking-widest text-amber-400/40">WebSocket / HTTP</p>
                  <div className="h-5 w-px bg-amber-400/30"/>
                </div>
              </div>
              {/* System layer block */}
              <div className="rounded-[1.25rem] border border-white/10 bg-white/[0.06] p-6">
                <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-amber-400/70">System Layer</p>
                <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {["Protocol Adapters", "State Manager", "Automation Engine", "Device Registry"].map((l) => (
                    <div key={l} className="rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-center text-xs font-light text-white/60">{l}</div>
                  ))}
                </div>
              </div>
              {/* Arrow */}
              <div className="flex justify-center py-1">
                <div className="h-5 w-px bg-amber-400/30"/>
              </div>
              {/* Devices row */}
              <div className="grid grid-cols-4 gap-3">
                {protocols.map((p) => (
                  <div key={p.name} className="rounded-[1rem] border border-white/[0.08] bg-white/[0.03] px-3 py-3 text-center">
                    <p className="text-xs font-medium text-white/70">{p.name}</p>
                    <p className="mt-1 text-[10px] text-white/30">{p.via}</p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Learnings */}
        <section className="border-t border-foreground/[0.07] py-12 sm:py-16">
          <Container>
            <h2 className="font-display text-3xl tracking-[-0.04em] text-foreground sm:text-4xl">Learnings</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {learnings.map((item) => (
                <div key={item.label} className="rounded-[1.25rem] border border-foreground/[0.07] bg-card/60 p-5 shadow-soft">
                  <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-muted-foreground">{item.label}</p>
                  <p className="mt-2 text-sm font-light leading-7 text-muted-foreground">{item.text}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Footer */}
        <section className="border-t border-foreground/[0.07] py-12 sm:py-16">
          <Container>
            <p className="text-sm font-light text-muted-foreground">Currently in Xcode development and beta testing.</p>
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
