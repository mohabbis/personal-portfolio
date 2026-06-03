import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { SiteFrame } from "@/components/layout/site-frame";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Lumen Case Study",
  description:
    "A calm home companion for iOS — rooms, scenes, and ambient control that works the way your home does. Built natively in SwiftUI with HomeKit at its core. Currently in TestFlight beta."
};

const metadata_items = [
  { label: "Role", value: "Product design, system architecture, iOS development" },
  { label: "Stack", value: "SwiftUI · HomeKit · URLSession · Xcode" },
  { label: "Timeline", value: "2026 - present" },
  { label: "Status", value: "TestFlight beta" }
];

const hierarchy = [
  { num: "01", name: "Rooms", desc: "Physical spaces. The natural unit of the home — where people actually are." },
  { num: "02", name: "Devices", desc: "Hardware inside rooms. Present when needed, invisible otherwise." },
  { num: "03", name: "Scenes", desc: "Named moments — Reading, Movie Night, Evening Wind Down. The home's primary vocabulary." },
  { num: "04", name: "Automations", desc: "Rules that anticipate what you need. Motion, time, sensors — the home responds before you reach for your phone." },
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
  { icon: "⌂", name: "HomeKit", via: "HKHomeManager" },
  { icon: "◈", name: "Matter", via: "MatterSupport" },
  { icon: "☁", name: "Govee", via: "HTTP API" },
  { icon: "◎", name: "GE Cync", via: "Cloud" },
];

const swiftuiPatterns = [
  { label: "@Observable", desc: "HomeStore is an @Observable class — all views derive state from a single source of truth. No manual publishers." },
  { label: "NavigationStack", desc: "Room list → Scene list → Device control. Each level is a pushed view, not a modal." },
  { label: "HKHomeManager", desc: "Delegate-based HomeKit events drive local state updates. Accessory changes propagate without polling." },
  { label: "Custom controls", desc: "Brightness sliders and color temperature pickers built on DragGesture — no UIKit dependencies." },
];

const learnings = [
  { label: "Architecture enables simplicity", text: "The system layer absorbs complexity so the interface does not have to. Good architecture is invisible to users." },
  { label: "Information models compound", text: "The rooms-first decision cascaded through every layer — UI structure, data models, automations, and onboarding all followed from it." },
  { label: "User models beat system models", text: "Users think in rooms and scenes, not devices and protocols. The interface reflects that even if the backend does not." },
];

export default function LumenCaseStudyPage() {
  return (
    <SiteFrame currentPath="/portfolio">
      <div className="relative bg-[#06070f]">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-0 h-[70vh] w-full max-w-3xl -translate-x-1/2 rounded-[50%] bg-[#7c3aed] opacity-[0.08] blur-[180px]" />
          <div className="absolute bottom-0 left-0 h-[40vh] w-[60vw] rounded-[50%] bg-[#2563eb] opacity-[0.05] blur-[160px]" />
        </div>

        <article className="relative">

          {/* Header */}
          <section className="relative overflow-hidden pb-16 pt-16 sm:pt-24">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -left-24 -top-24 h-[520px] w-[640px] rounded-full bg-[#6d28d9] opacity-[0.11] blur-[130px]" />
              <div className="absolute right-0 top-8 h-[300px] w-[420px] rounded-full bg-[#3b82f6] opacity-[0.06] blur-[100px]" />
            </div>
            <Container>
              <div className="flex items-center gap-3">
                <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#a78bfa]">☀ Lumen</span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.12] bg-white/[0.05] px-3 py-1 text-[10px] uppercase tracking-widest text-white/40">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-green-400" />
                  TestFlight Beta
                </span>
              </div>

              <h1 className="mt-5 font-serif text-5xl font-light leading-[1.06] tracking-[-0.02em] text-white/90 sm:text-7xl">
                Your home,<br />
                <em className="text-white/50">in rhythm.</em>
              </h1>

              <p className="mt-7 max-w-lg text-lg font-light leading-8 text-white/40">
                A calm iOS companion that helps your home feel right at any hour — ambient scenes, gentle automations, and native HomeKit control that stays out of the way.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {["🌙 Calm by design", "🏠 HomeKit · Matter", "📱 SwiftUI · native"].map((tag) => (
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
                <a href="#phase-01" className="text-sm font-light text-white/30 transition-colors hover:text-white/55">
                  Read the build ↓
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
                    Soft room light, graphite edges, a centered control mark that feels closer to a dimmer than a generic smart-home symbol.
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

          {/* The Problem */}
          <section className="border-t border-white/[0.06] py-14 sm:py-20">
            <Container className="max-w-3xl">
              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#a78bfa]">The problem</p>
              <h2 className="mt-4 font-serif text-3xl font-light tracking-[-0.02em] text-white/85 sm:text-4xl">
                Home shouldn&apos;t feel like work.
              </h2>
              <p className="mt-6 text-base font-light leading-8 text-white/42">
                Your home is where the day starts, where you wind down, where you sleep. It should feel like a place — not a dashboard. The trouble is that most smart home apps organize around devices, because that&apos;s how manufacturers think. Govee has a Govee app. GE has a GE app. By the time you&apos;ve set the mood for an evening, you&apos;ve opened four apps and thought about hardware. Lumen dissolves that — users think in spaces and moments, not device IDs.
              </p>
            </Container>
          </section>

          {/* PHASE 01 — Information Model */}
          <section id="phase-01" className="border-t border-white/[0.06] py-14 sm:py-20">
            <Container>
              <div className="flex items-center gap-3">
                <span className="rounded-full border border-[#c9a97e]/30 bg-[#c9a97e]/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-[#c9a97e]">Phase 01</span>
                <span className="text-[10px] uppercase tracking-[0.14em] text-white/20">Information Architecture</span>
              </div>
              <h2 className="mt-5 font-serif text-3xl font-light tracking-[-0.02em] text-white/85 sm:text-4xl">
                Define the model first.
              </h2>
              <p className="mt-5 max-w-2xl text-base font-light leading-8 text-white/42">
                The model needed to mirror how people actually inhabit a home, not how manufacturers ship products. Everything — data structures, UI hierarchy, automation rules, onboarding — would derive from it. Four layers, each with a clear owner.
              </p>
              <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
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

          {/* PHASE 02 — System Architecture */}
          <section className="border-t border-white/[0.06] bg-[#080604] py-14 sm:py-20">
            <Container>
              <div className="flex items-center gap-3">
                <span className="rounded-full border border-[#c9a97e]/30 bg-[#c9a97e]/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-[#c9a97e]">Phase 02</span>
                <span className="text-[10px] uppercase tracking-[0.14em] text-white/20">System Architecture</span>
              </div>
              <h2 className="mt-5 font-serif text-3xl font-light tracking-[-0.02em] text-white/85 sm:text-4xl">
                Intent, not commands.
              </h2>
              <p className="mt-5 max-w-2xl text-base font-light leading-8 text-white/42">
                The app sends intent — &ldquo;Evening Wind Down, Living Room.&rdquo; A system layer resolves that into protocol-specific commands. The UI never touches a protocol directly. Complexity lives in the system layer; calm lives at the surface. New protocols can be wired in without touching any views, and the interface can be iterated without touching any protocol logic.
              </p>

              <div className="mt-10 grid gap-3">
                <div className="rounded-[1.5rem] border border-[#a78bfa]/[0.12] bg-gradient-to-b from-[#a78bfa]/[0.06] to-white/[0.03] p-6">
                  <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#a78bfa]">iOS App — SwiftUI</p>
                  <div className="mt-4 grid grid-cols-3 gap-3">
                    {["Rooms · Scenes", "HomeStore (@Observable)", "Controls + Sliders"].map((l) => (
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
                    <div className="h-5 w-px bg-[#c9a97e]/20" />
                    <p className="text-[10px] tracking-widest text-[#c9a97e]/30">Intent → Commands</p>
                    <div className="h-5 w-px bg-[#c9a97e]/20" />
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
                      <p className="mt-1 text-[10px] text-white/25">{p.via}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Container>
          </section>

          {/* PHASE 03 — Design */}
          <section className="border-t border-white/[0.06] py-14 sm:py-20">
            <Container>
              <div className="flex items-center gap-3">
                <span className="rounded-full border border-[#c9a97e]/30 bg-[#c9a97e]/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-[#c9a97e]">Phase 03</span>
                <span className="text-[10px] uppercase tracking-[0.14em] text-white/20">Design System</span>
              </div>
              <h2 className="mt-5 font-serif text-3xl font-light tracking-[-0.02em] text-white/85 sm:text-4xl">
                Warm, dark, and spatial.
              </h2>
              <p className="mt-5 max-w-2xl text-base font-light leading-8 text-white/42">
                The design question wasn&apos;t &ldquo;how do we show control?&rdquo; — it was &ldquo;how do we make the home feel present?&rdquo; An interface that recedes when you&apos;re not using it and surfaces what matters when you are. Large type, deep backgrounds, warm amber accents — the palette matches what a warm room actually looks like.
              </p>

              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                <div className="rounded-[1.5rem] border border-white/[0.08] bg-white/[0.05] p-6">
                  <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-[#c9a97e]/75">Rooms</p>
                  <p className="mt-3 text-sm font-light leading-6 text-white/40">Each room card shows where the home is right now — active scene, quiet or lit. No status grids. Just the name and the current mood.</p>
                </div>
                <div className="rounded-[1.5rem] border border-white/[0.08] bg-white/[0.05] p-6">
                  <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-[#c9a97e]/75">Scenes</p>
                  <p className="mt-3 text-sm font-light leading-6 text-white/40">The active moment shown large at top. Scene list below: emoji, name, device summary. One tap to shift the whole room&apos;s atmosphere.</p>
                </div>
                <div className="rounded-[1.5rem] border border-white/[0.08] bg-white/[0.05] p-6">
                  <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-[#c9a97e]/75">Fine control</p>
                  <p className="mt-3 text-sm font-light leading-6 text-white/40">Brightness and color temperature when you want precision. Mode presets — Reading, Relax, Focus, Night — when you don&apos;t. Hardware stays behind the curtain unless you reach for it.</p>
                </div>
              </div>
            </Container>
          </section>

          {/* PHASE 04 — SwiftUI Build */}
          <section className="border-t border-white/[0.06] py-14 sm:py-20">
            <Container>
              <div className="flex items-center gap-3">
                <span className="rounded-full border border-[#c9a97e]/30 bg-[#c9a97e]/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-[#c9a97e]">Phase 04</span>
                <span className="text-[10px] uppercase tracking-[0.14em] text-white/20">SwiftUI Development</span>
              </div>
              <h2 className="mt-5 font-serif text-3xl font-light tracking-[-0.02em] text-white/85 sm:text-4xl">
                Building in Xcode.
              </h2>
              <p className="mt-5 max-w-2xl text-base font-light leading-8 text-white/42">
                Native SwiftUI targeting iOS 17+. Going native was as much a feel decision as a technical one — HomeKit integration, haptic feedback, and the quiet animation fidelity the design called for all need direct access to Apple&apos;s frameworks.
              </p>

              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                {swiftuiPatterns.map((p) => (
                  <div key={p.label} className="rounded-[1.5rem] border border-white/[0.08] bg-white/[0.05] p-6">
                    <p className="font-mono text-xs font-medium text-[#c9a97e]/80">{p.label}</p>
                    <p className="mt-3 text-sm font-light leading-6 text-white/40">{p.desc}</p>
                  </div>
                ))}
              </div>
            </Container>
          </section>

          {/* Learnings */}
          <section className="border-t border-white/[0.06] bg-[#080604] py-14 sm:py-20">
            <Container>
              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#a78bfa]">Learnings</p>
              <h2 className="mt-4 font-serif text-3xl font-light tracking-[-0.02em] text-white/85 sm:text-4xl">What compounded.</h2>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
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
