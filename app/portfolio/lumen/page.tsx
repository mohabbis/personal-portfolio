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

const appIcons = [
  {
    label: "Room glow",
    src: "/images/projects/lumen-app-icon-room.svg",
    alt: "Lumen app icon with a room glow and centered light mark"
  },
  {
    label: "Scene control",
    src: "/images/projects/lumen-app-icon-scene.svg",
    alt: "Lumen app icon with concentric scene control rings"
  },
  {
    label: "Shield mark",
    src: "/images/projects/lumen-app-icon-mark.svg",
    alt: "Lumen app icon with the shield-shaped light control mark"
  }
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
      <div className="relative bg-[#06070f]">
        {/* Page-level ambient — purple bloom top-center, blue wash bottom-left */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-0 h-[70vh] w-full max-w-3xl -translate-x-1/2 rounded-[50%] bg-[#7c3aed] opacity-[0.08] blur-[180px]" />
          <div className="absolute bottom-0 left-0 h-[40vh] w-[60vw] rounded-[50%] bg-[#2563eb] opacity-[0.05] blur-[160px]" />
        </div>

        <article className="relative">

          {/* Header */}
          <section className="relative overflow-hidden pb-16 pt-16 sm:pt-24">
            {/* Hero ambient glows */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -left-24 -top-24 h-[520px] w-[640px] rounded-full bg-[#6d28d9] opacity-[0.11] blur-[130px]" />
              <div className="absolute right-0 top-8 h-[300px] w-[420px] rounded-full bg-[#3b82f6] opacity-[0.06] blur-[100px]" />
            </div>
            <Container>
              <div className="flex items-center gap-3">
                <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#a78bfa]">☀ Lumen</span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.12] bg-white/[0.05] px-3 py-1 text-[10px] uppercase tracking-widest text-white/40">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-green-400" />
                  Beta · Xcode
                </span>
              </div>

              <h1 className="mt-5 font-serif text-5xl font-light leading-[1.06] tracking-[-0.02em] text-white/90 sm:text-7xl">
                Smart-home control,<br />
                <em className="text-white/50">understood.</em>
              </h1>

              <p className="mt-7 max-w-lg text-lg font-light leading-8 text-white/65">
                Built around how people actually think about their space, not how devices are organized.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {["🏠 HomeKit · Matter", "📱 iOS Native", "🔒 Private by design"].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full border border-white/[0.10] bg-white/[0.04] px-4 py-1.5 text-xs font-light text-white/68"
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
                  className="inline-flex items-center gap-2 rounded-full bg-[#6d28d9] px-7 py-3.5 text-sm font-medium text-white shadow-[0_0_36px_rgba(109,40,217,0.45)] transition-all hover:bg-[#7c3aed] hover:shadow-[0_0_52px_rgba(124,58,237,0.55)]"
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
          <section className="bg-[#07080f]">
            <div className="relative mx-auto aspect-[16/9] max-w-[1400px] overflow-hidden">
              <Image
                src="/images/projects/lumen-iot-interface.svg"
                alt="Lumen interface"
                fill
                sizes="100vw"
                className="object-cover object-center"
                priority
              />
              {/* Cinematic top + bottom vignette */}
              <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#06070f]/55 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-t from-[#06070f] to-transparent" />
            </div>
          </section>

          {/* App icons */}
          <section className="border-t border-white/[0.06] bg-[#05060d] py-12 sm:py-16">
            <Container>
              <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#a78bfa]">App icon system</p>
                  <h2 className="mt-4 font-serif text-3xl font-light tracking-[-0.02em] text-white/85 sm:text-4xl">The mark on the home screen.</h2>
                  <p className="mt-4 max-w-xl text-sm font-light leading-7 text-white/62">
                    The Lumen icon set keeps the interface language tactile and quiet: soft room light, graphite edges, and a centered control mark that feels closer to a dimmer than a generic smart-home symbol.
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-3 sm:gap-4">
                  {appIcons.map((icon) => (
                    <figure
                      key={icon.label}
                      className="group rounded-[1.5rem] border border-white/[0.08] bg-gradient-to-b from-white/[0.08] to-white/[0.03] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_22px_50px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-1 hover:border-[#a78bfa]/25 hover:shadow-[0_0_36px_rgba(167,139,250,0.13)]"
                    >
                      <div className="relative aspect-square overflow-hidden rounded-[1.15rem] bg-white/[0.03]">
                        <Image
                          src={icon.src}
                          alt={icon.alt}
                          fill
                          sizes="(min-width: 1024px) 180px, 30vw"
                          className="object-cover"
                        />
                      </div>
                      <figcaption className="mt-3 text-center text-[10px] font-medium uppercase tracking-[0.14em] text-white/38 transition-colors group-hover:text-[#a78bfa]/70">
                        {icon.label}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            </Container>
          </section>

          {/* Feature grid */}
          <section id="build" className="border-t border-white/[0.06] py-12 sm:py-16">
            <Container>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {features.map((f) => (
                  <div
                    key={f.title}
                    className="rounded-[1.5rem] border border-white/[0.08] bg-gradient-to-br from-white/[0.08] to-white/[0.03] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition-all duration-300 hover:border-[#a78bfa]/20 hover:shadow-[0_0_32px_rgba(167,139,250,0.12)]"
                  >
                    <span className="text-2xl">{f.icon}</span>
                    <p className="mt-4 text-base font-medium text-white/75">{f.title}</p>
                    <p className="mt-1.5 text-sm font-light leading-6 text-white/65">{f.desc}</p>
                  </div>
                ))}
              </div>
            </Container>
          </section>

          {/* The Problem */}
          <section className="border-t border-white/[0.06] py-12 sm:py-16">
            <Container className="max-w-3xl">
              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#a78bfa]">The problem</p>
              <h2 className="mt-4 font-serif text-3xl font-light tracking-[-0.02em] text-white/85 sm:text-4xl">
                Fragmented by design.
              </h2>
              <p className="mt-6 text-base font-light leading-8 text-white/68">
                Smart home control is fragmented by design. Each vendor ships an app. Users end up managing devices when they want to manage their home. A light is not meaningful. A room at a particular brightness and color temperature is. Lumen is built around that distinction.
              </p>
            </Container>
          </section>

          {/* Information Model */}
          <section className="border-t border-white/[0.06] py-12 sm:py-16">
            <Container>
              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#a78bfa]">Information model</p>
              <h2 className="mt-4 font-serif text-3xl font-light tracking-[-0.02em] text-white/85 sm:text-4xl">Four layers.</h2>
              <p className="mt-3 max-w-xl text-sm font-light leading-7 text-white/65">
                Every interface decision, backend structure, and automation rule derives from this hierarchy.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {hierarchy.map((level) => (
                  <div key={level.name} className="rounded-[1.5rem] border border-white/[0.08] bg-gradient-to-b from-white/[0.07] to-white/[0.03] p-5">
                    <p className="text-[10px] font-medium tracking-[0.18em] text-[#a78bfa]">{level.num}</p>
                    <p className="mt-4 text-lg font-medium text-white/75">{level.name}</p>
                    <p className="mt-2 text-sm font-light leading-6 text-white/65">{level.desc}</p>
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
                  <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#a78bfa]">System layer</p>
                  <h2 className="mt-4 font-serif text-3xl font-light tracking-[-0.02em] text-white/85 sm:text-4xl">
                    Intent, not commands.
                  </h2>
                  <p className="mt-6 text-base font-light leading-8 text-white/68">
                    The frontend sends intent. The system layer figures out which protocol, which device address, which command format. State synchronization, automation execution, and device discovery all live here — independent of the UI.
                  </p>
                  <div className="mt-6 rounded-[1.25rem] border border-[#a78bfa]/[0.12] bg-[#a78bfa]/[0.04] p-5">
                    <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-[#a78bfa]/65">Principle</p>
                    <p className="mt-2 text-sm font-light leading-7 text-white/65">
                      The system layer is responsible for reliability. The interface is responsible for clarity. Neither layer conflates the other&apos;s concerns.
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#a78bfa]">Protocols</p>
                  <h2 className="mt-4 font-serif text-3xl font-light tracking-[-0.02em] text-white/85 sm:text-4xl">
                    One model, four bridges.
                  </h2>
                  <div className="mt-8 space-y-2">
                    {protocols.map((p) => (
                      <div
                        key={p.name}
                        className="group flex items-center justify-between overflow-hidden rounded-[1rem] border border-white/[0.07] bg-white/[0.04] py-4 pl-0 pr-5 transition-all duration-200 hover:border-[#a78bfa]/20 hover:bg-white/[0.06]"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-[3px] self-stretch rounded-r-full bg-gradient-to-b from-[#a78bfa]/60 to-[#a78bfa]/10" />
                          <span className="pl-3 text-base text-[#a78bfa]/60">{p.icon}</span>
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
          <section className="border-t border-white/[0.06] bg-[#04050c] py-12 sm:py-16">
            <Container>
              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#a78bfa]">Architecture</p>
              <h2 className="mt-4 font-serif text-3xl font-light tracking-[-0.02em] text-white/85 sm:text-4xl">The stack.</h2>
              <div className="mt-8 grid gap-3">
                <div className="rounded-[1.5rem] border border-[#a78bfa]/[0.12] bg-gradient-to-b from-[#a78bfa]/[0.06] to-white/[0.03] p-6">
                  <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#a78bfa]">iOS App</p>
                  <div className="mt-4 grid grid-cols-3 gap-3">
                    {["Rooms · Scenes", "State (Observable)", "Controls"].map((l) => (
                      <div
                        key={l}
                        className="rounded-xl border border-[#a78bfa]/[0.10] bg-[#a78bfa]/[0.04] px-4 py-3 text-center text-xs font-light text-white/68"
                      >
                        {l}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex justify-center py-1">
                  <div className="flex flex-col items-center gap-1">
                    <div className="h-5 w-px bg-gradient-to-b from-transparent via-[#a78bfa]/40 to-[#a78bfa]/20" />
                    <p className="text-[10px] tracking-widest text-[#a78bfa]/45">WebSocket / HTTP</p>
                    <div className="h-5 w-px bg-gradient-to-b from-[#a78bfa]/20 to-transparent" />
                  </div>
                </div>
                <div className="rounded-[1.5rem] border border-[#3b82f6]/[0.12] bg-gradient-to-b from-[#3b82f6]/[0.06] to-white/[0.03] p-6">
                  <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#93c5fd]">System Layer</p>
                  <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {["Protocol Adapters", "State Manager", "Automation Engine", "Device Registry"].map((l) => (
                      <div
                        key={l}
                        className="rounded-xl border border-[#3b82f6]/[0.10] bg-[#3b82f6]/[0.04] px-4 py-3 text-center text-xs font-light text-white/68"
                      >
                        {l}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex justify-center py-1">
                  <div className="h-5 w-px bg-gradient-to-b from-[#3b82f6]/20 to-transparent" />
                </div>
                <div className="grid grid-cols-4 gap-3">
                  {protocols.map((p) => (
                    <div
                      key={p.name}
                      className="rounded-[1rem] border border-white/[0.06] bg-gradient-to-b from-white/[0.05] to-white/[0.02] px-3 py-3 text-center"
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
              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#a78bfa]">Learnings</p>
              <h2 className="mt-4 font-serif text-3xl font-light tracking-[-0.02em] text-white/85 sm:text-4xl">What compounded.</h2>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {learnings.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[1.5rem] border border-white/[0.08] bg-gradient-to-b from-white/[0.07] to-white/[0.03] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_1px_24px_rgba(0,0,0,0.24)]"
                  >
                    <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-[#a78bfa]/85">{item.label}</p>
                    <p className="mt-3 text-sm font-light leading-7 text-white/68">{item.text}</p>
                  </div>
                ))}
              </div>
            </Container>
          </section>

          {/* Footer */}
          <section className="border-t border-white/[0.06] py-14 sm:py-20">
            <Container>
              <p className="font-serif text-2xl font-light italic text-white/58 sm:text-3xl">See it in action.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 rounded-full border border-white/[0.10] bg-white/[0.05] px-6 py-3 text-sm font-light text-white/55 transition-all duration-200 hover:border-white/[0.18] hover:bg-white/[0.09] hover:text-white/75"
                >
                  View other projects
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-[#a78bfa]/25 bg-[#a78bfa]/[0.07] px-6 py-3 text-sm font-light text-[#a78bfa]/70 transition-all duration-200 hover:border-[#a78bfa]/45 hover:bg-[#a78bfa]/[0.14] hover:text-[#a78bfa]"
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
