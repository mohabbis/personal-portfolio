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
  { label: "Status", value: "TestFlight beta" }
];

const features = [
  { icon: "🏠", title: "Rooms first", desc: "Organize your home by space, not a device list." },
  { icon: "✦", title: "Scene-based", desc: "Named lighting states that set an entire room at once." },
  { icon: "⚡", title: "Automations", desc: "Rules that trigger scenes — motion, time, sensors." },
  { icon: "🔗", title: "4 protocols", desc: "HomeKit · Matter · Govee · GE Cync behind one model." },
];

const hierarchy = [
  { num: "01", name: "Rooms", desc: "Physical spaces. The primary lens users organize their home around." },
  { num: "02", name: "Devices", desc: "Hardware living inside rooms. Accessible but not the primary interface." },
  { num: "03", name: "Scenes", desc: "Named room states. Reading mode, movie mode, evening scene." },
  { num: "04", name: "Automations", desc: "Rules that trigger scenes. Motion, time, sensors." },
];

const protocols = [
  { icon: "⌂", name: "HomeKit", via: "Apple Home framework" },
  { icon: "◈", name: "Matter", via: "matter.js" },
  { icon: "☁", name: "Govee", via: "HTTP API" },
  { icon: "◎", name: "GE Cync", via: "Cloud" },
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
      <div className="bg-[#0c0a07]">
        <article>

          {/* Header */}
          <section className="pb-16 pt-16 sm:pt-24">
            <Container>
              <div className="flex items-center gap-3">
                <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#c9a97e]">☀ Lumen</span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.12] bg-white/[0.05] px-3 py-1 text-[10px] uppercase tracking-widest text-white/40">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-green-400" />
                  TestFlight Beta
                </span>
              </div>

              <h1 className="mt-5 font-serif text-5xl font-light leading-[1.06] tracking-[-0.02em] text-white/90 sm:text-7xl">
                Smart-home control,<br />
                <em className="text-white/50">understood.</em>
              </h1>

              <p className="mt-7 max-w-lg text-lg font-light leading-8 text-white/40">
                Built around how people actually think about their space, not how devices are organized.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {["🏠 HomeKit · Matter", "📱 iOS Native", "🔒 Private by design"].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full border border-white/[0.10] bg-white/[0.04] px-4 py-1.5 text-xs font-light text-white/45"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-6">
                <a
                  href="https://lumen.muharafiq.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#d4b896] px-7 py-3.5 text-sm font-medium text-[#0c0a07] transition-opacity hover:opacity-85"
                >
                  Preview Lumen
                  <span aria-hidden="true">→</span>
                </a>
                <a href="#build" className="text-sm font-light text-white/30 transition-colors hover:text-white/55">
                  Explore the build ↓
                </a>
              </div>
            </Container>
          </section>

          {/* Metadata strip */}
          <section className="border-t border-white/[0.07] py-8">
            <Container>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {metadata_items.map((item) => (
                  <div key={item.label}>
                    <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-white/25">{item.label}</p>
                    <p className="mt-1.5 text-sm font-light leading-6 text-white/60">{item.value}</p>
                  </div>
                ))}
              </div>
            </Container>
          </section>

          {/* Hero image */}
          <section className="bg-[#0d0905]">
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

          {/* Feature grid */}
          <section id="build" className="border-t border-white/[0.06] py-12 sm:py-16">
            <Container>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {features.map((f) => (
                  <div key={f.title} className="rounded-[1.5rem] border border-white/[0.08] bg-white/[0.05] p-6">
                    <span className="text-2xl">{f.icon}</span>
                    <p className="mt-4 text-base font-medium text-white/75">{f.title}</p>
                    <p className="mt-1.5 text-sm font-light leading-6 text-white/38">{f.desc}</p>
                  </div>
                ))}
              </div>
            </Container>
          </section>

          {/* The Problem */}
          <section className="border-t border-white/[0.06] py-12 sm:py-16">
            <Container className="max-w-3xl">
              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#c9a97e]">The problem</p>
              <h2 className="mt-4 font-serif text-3xl font-light tracking-[-0.02em] text-white/85 sm:text-4xl">
                Fragmented by design.
              </h2>
              <p className="mt-6 text-base font-light leading-8 text-white/42">
                Smart home control is fragmented by design. Each vendor ships an app. Users end up managing devices when they want to manage their home. A light is not meaningful. A room at a particular brightness and color temperature is. Lumen is built around that distinction.
              </p>
            </Container>
          </section>

          {/* Information Model */}
          <section className="border-t border-white/[0.06] py-12 sm:py-16">
            <Container>
              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#c9a97e]">Information model</p>
              <h2 className="mt-4 font-serif text-3xl font-light tracking-[-0.02em] text-white/85 sm:text-4xl">Four layers.</h2>
              <p className="mt-3 max-w-xl text-sm font-light leading-7 text-white/38">
                Every interface decision, backend structure, and automation rule derives from this hierarchy.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {hierarchy.map((level) => (
                  <div key={level.name} className="rounded-[1.5rem] border border-white/[0.08] bg-white/[0.05] p-5">
                    <p className="text-[10px] font-medium tracking-[0.18em] text-[#c9a97e]">{level.num}</p>
                    <p className="mt-4 text-lg font-medium text-white/75">{level.name}</p>
                    <p className="mt-2 text-sm font-light leading-6 text-white/38">{level.desc}</p>
                  </div>
                ))}
              </div>
            </Container>
          </section>

          {/* System Layer + Protocols */}
          <section className="border-t border-white/[0.06] py-12 sm:py-16">
            <Container>
              <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#c9a97e]">System layer</p>
                  <h2 className="mt-4 font-serif text-3xl font-light tracking-[-0.02em] text-white/85 sm:text-4xl">
                    Intent, not commands.
                  </h2>
                  <p className="mt-6 text-base font-light leading-8 text-white/42">
                    The frontend sends intent. The system layer figures out which protocol, which device address, which command format. State synchronization, automation execution, and device discovery all live here — independent of the UI.
                  </p>
                  <div className="mt-6 rounded-[1.25rem] border border-white/[0.07] bg-white/[0.04] p-5">
                    <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-[#c9a97e]/65">Principle</p>
                    <p className="mt-2 text-sm font-light leading-7 text-white/38">
                      The system layer is responsible for reliability. The interface is responsible for clarity. Neither layer conflates the other&apos;s concerns.
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#c9a97e]">Protocols</p>
                  <h2 className="mt-4 font-serif text-3xl font-light tracking-[-0.02em] text-white/85 sm:text-4xl">
                    One model, four bridges.
                  </h2>
                  <div className="mt-8 space-y-2">
                    {protocols.map((p) => (
                      <div
                        key={p.name}
                        className="flex items-center justify-between rounded-[1rem] border border-white/[0.07] bg-white/[0.04] px-5 py-4"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-base text-[#c9a97e]/55">{p.icon}</span>
                          <p className="font-medium text-white/70">{p.name}</p>
                        </div>
                        <div className="flex items-center gap-2 text-white/25">
                          <p className="text-xs font-light">{p.via}</p>
                          <span className="text-xs">›</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Container>
          </section>

          {/* Architecture */}
          <section className="border-t border-white/[0.06] bg-[#080604] py-12 sm:py-16">
            <Container>
              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#c9a97e]">Architecture</p>
              <h2 className="mt-4 font-serif text-3xl font-light tracking-[-0.02em] text-white/85 sm:text-4xl">The stack.</h2>
              <div className="mt-8 grid gap-3">
                <div className="rounded-[1.5rem] border border-white/[0.08] bg-white/[0.05] p-6">
                  <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#c9a97e]">iOS App</p>
                  <div className="mt-4 grid grid-cols-3 gap-3">
                    {["Rooms · Scenes", "State (Observable)", "Controls"].map((l) => (
                      <div
                        key={l}
                        className="rounded-xl border border-white/[0.06] bg-white/[0.03] px-4 py-3 text-center text-xs font-light text-white/35"
                      >
                        {l}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex justify-center py-1">
                  <div className="flex flex-col items-center gap-1">
                    <div className="h-5 w-px bg-[#c9a97e]/20" />
                    <p className="text-[10px] tracking-widest text-[#c9a97e]/30">WebSocket / HTTP</p>
                    <div className="h-5 w-px bg-[#c9a97e]/20" />
                  </div>
                </div>
                <div className="rounded-[1.5rem] border border-white/[0.08] bg-white/[0.05] p-6">
                  <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#c9a97e]">System Layer</p>
                  <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {["Protocol Adapters", "State Manager", "Automation Engine", "Device Registry"].map((l) => (
                      <div
                        key={l}
                        className="rounded-xl border border-white/[0.06] bg-white/[0.03] px-4 py-3 text-center text-xs font-light text-white/35"
                      >
                        {l}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex justify-center py-1">
                  <div className="h-5 w-px bg-[#c9a97e]/20" />
                </div>
                <div className="grid grid-cols-4 gap-3">
                  {protocols.map((p) => (
                    <div
                      key={p.name}
                      className="rounded-[1rem] border border-white/[0.06] bg-white/[0.03] px-3 py-3 text-center"
                    >
                      <p className="text-xs font-medium text-white/55">{p.name}</p>
                      <p className="mt-1 text-[10px] text-white/22">{p.via}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Container>
          </section>

          {/* Learnings */}
          <section className="border-t border-white/[0.06] py-12 sm:py-16">
            <Container>
              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#c9a97e]">Learnings</p>
              <h2 className="mt-4 font-serif text-3xl font-light tracking-[-0.02em] text-white/85 sm:text-4xl">What compounded.</h2>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {learnings.map((item) => (
                  <div key={item.label} className="rounded-[1.5rem] border border-white/[0.08] bg-white/[0.05] p-6">
                    <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-[#c9a97e]/75">{item.label}</p>
                    <p className="mt-3 text-sm font-light leading-7 text-white/42">{item.text}</p>
                  </div>
                ))}
              </div>
            </Container>
          </section>

          {/* Footer */}
          <section className="border-t border-white/[0.06] py-14 sm:py-20">
            <Container>
              <p className="font-serif text-2xl font-light italic text-white/35 sm:text-3xl">See it in action.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 rounded-full border border-white/[0.10] bg-white/[0.05] px-6 py-3 text-sm font-light text-white/55 transition-colors hover:bg-white/[0.08]"
                >
                  View other projects
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-white/[0.10] bg-white/[0.05] px-6 py-3 text-sm font-light text-white/55 transition-colors hover:bg-white/[0.08]"
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
