import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { SiteFrame } from "@/components/layout/site-frame";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Lumen Case Study",
  description:
    "A native iOS home companion that uses light, warmth, and slow scenes to reduce sensory stress and cognitive fatigue, especially for people sensitive to overstimulation. Built in SwiftUI.",
  alternates: {
    canonical: "/portfolio/lumen"
  }
};

const metadata_items = [
  { label: "Role", value: "Product design, system architecture, SwiftUI" },
  { label: "Stack", value: "SwiftUI · Observation · NavigationStack · Xcode" },
  { label: "Timeline", value: "2026 - present" },
  { label: "Status", value: "In development" }
];

const hierarchy = [
  { num: "01", name: "Rooms", desc: "Opens in the space you are in, not a wall of device switches." },
  { num: "02", name: "Scenes", desc: "Gentle presets — Wind Down, Reading, Recover — that soften a room in one tap." },
  { num: "03", name: "Presence", desc: "Eases the lights with context, so you are not managing them by hand." },
  { num: "04", name: "Automation", desc: "Slow, predictable transitions. Nothing flares up or demands attention." }
];

const phases = [
  {
    title: "Problem",
    text: "Modern rooms are loud — glare, alerts, and clutter add up to low-grade sensory stress, and most home apps answer with more controls."
  },
  {
    title: "Information architecture",
    text: "Organized around rooms, scenes, and intent, so calming a space is one decision instead of ten."
  },
  {
    title: "System architecture",
    text: "A native, on-device-first iOS companion that works with the hardware people already own."
  },
  {
    title: "Design system",
    text: "Warm, quiet, and low-friction. Built for calm, not a command center."
  },
  {
    title: "SwiftUI development",
    text: "The prototype focuses on room control, scenes, and gentle automation."
  },
  {
    title: "Learning",
    text: "Good design here is not more controls. It is fewer decisions between you and a comfortable space."
  }
];

export default function LumenCaseStudyPage() {
  return (
    <SiteFrame currentPath="/portfolio">
      <div className="relative bg-[#0b1626]">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-0 h-[70vh] w-full max-w-3xl -translate-x-1/2 rounded-[50%] bg-[#1e3a5f] opacity-[0.5] blur-[180px]" />
          <div className="absolute bottom-0 right-0 h-[44vh] w-[58vw] rounded-[50%] bg-[#d99a3a] opacity-[0.07] blur-[170px]" />
        </div>

        <article className="relative">
          <section className="relative overflow-hidden border-b border-white/[0.07] pb-16 pt-16 sm:pt-24">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -left-24 -top-24 h-[520px] w-[640px] rounded-full bg-[#1e3a5f] opacity-[0.45] blur-[130px]" />
              <div className="absolute right-0 top-8 h-[320px] w-[440px] rounded-full bg-[#d99a3a] opacity-[0.08] blur-[120px]" />
            </div>
            <Container className="relative grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.32em] text-[#e0b27a]">Case Study · Lumen</p>
                <h1 className="mt-4 max-w-3xl font-display text-5xl font-light leading-[0.96] tracking-[-0.05em] text-white/90 sm:text-6xl lg:text-7xl">
                  A home that helps you come down.
                </h1>
                <p className="mt-6 max-w-2xl text-lg font-light leading-8 text-white/65">
                  Lumen is a native iOS home companion that uses light, warmth, and slow scenes to take the edge off an overstimulating day. It is built for people who feel rooms loudly, including neurodivergent users worn down by noise, glare, and clutter.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href="https://lumen.muharafiq.com" target="_blank" rel="noreferrer" className="rounded-full bg-[linear-gradient(135deg,#e8c089,#d99a3a)] px-5 py-3 text-sm font-medium text-[#0b1626] shadow-[0_18px_60px_rgba(217,154,58,0.32)] transition hover:scale-[1.02] hover:shadow-[0_22px_80px_rgba(217,154,58,0.44)]">
                    Preview app
                  </a>
                  <Link href="/portfolio" className="rounded-full border border-white/[0.14] bg-white/[0.05] px-5 py-3 text-sm font-light text-white/75 transition hover:border-[#e0b27a]/40 hover:bg-white/[0.09]">
                    Back to work
                  </Link>
                </div>
              </div>
              <div className="group relative isolate overflow-visible rounded-[2rem]">
                <div className="pointer-events-none absolute left-[28%] top-[35%] -z-10 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(217,154,58,0.34),rgba(224,169,109,0.12)_42%,transparent_70%)] blur-3xl transition duration-700 group-hover:scale-105 group-hover:opacity-95 motion-safe:animate-[ambientGlow_12s_ease-in-out_infinite]" />
                <div className="pointer-events-none absolute right-[-8rem] top-[-2rem] -z-10 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(46,82,128,0.5),rgba(46,82,128,0.16)_45%,transparent_72%)] blur-3xl transition duration-700 group-hover:scale-110" />
                <div className="pointer-events-none absolute -bottom-16 left-16 -z-10 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(217,154,58,0.24),rgba(224,169,109,0.08)_45%,transparent_72%)] blur-3xl" />
                <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-[#2c4a6e]/50 bg-[#0e1c30] shadow-[0_30px_110px_rgba(8,18,33,0.6)] ring-1 ring-[#e0b27a]/20">
                  <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(217,154,58,0.18),transparent_40%),radial-gradient(circle_at_85%_75%,rgba(46,82,128,0.3),transparent_45%)]" />
                  <Image src="/images/projects/lumen-thumbnail.svg" alt="Annotated Lumen home companion interface showing room and scene controls" fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" priority />
                </div>
              </div>
            </Container>
          </section>

          <section className="relative border-b border-white/[0.07] bg-[#0a1322] py-14 sm:py-20">
            <Container className="grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
              {metadata_items.map((item) => (
                <div key={item.label} className="rounded-[1.2rem] border border-white/[0.08] bg-white/[0.03] p-5 shadow-[0_18px_60px_rgba(8,18,33,0.4)]">
                  <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#e0b27a]">{item.label}</p>
                  <p className="mt-3 text-sm font-light leading-6 text-white/68">{item.value}</p>
                </div>
              ))}
            </Container>
          </section>

          <section className="relative border-b border-white/[0.07] py-14 sm:py-20">
            <Container>
              <h2 className="max-w-2xl font-display text-3xl font-light tracking-[-0.04em] text-white/90 sm:text-4xl">
                Before: a room competing for your attention. After: a space that settles.
              </h2>
              <p className="mt-4 max-w-2xl text-base font-light leading-7 text-white/60">
                Most home apps start with the device. Lumen starts with the room and the feeling you want in it: fewer decisions, lower volume, a space that is easier to be in.
              </p>
              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                {hierarchy.map((item) => (
                  <article key={item.name} className="rounded-[1.35rem] border border-white/[0.08] bg-[linear-gradient(135deg,rgba(30,58,95,0.35),rgba(14,28,48,0.25))] p-6 shadow-[0_20px_70px_rgba(8,18,33,0.4)] transition hover:border-[#e0b27a]/30 hover:shadow-[0_24px_90px_rgba(217,154,58,0.12)]">
                    <div className="flex items-baseline gap-3">
                      <span className="font-display text-sm text-[#e0b27a]">{item.num}</span>
                      <h3 className="font-display text-2xl tracking-[-0.04em] text-white/90">{item.name}</h3>
                    </div>
                    <p className="mt-4 text-sm font-light leading-7 text-white/68">{item.desc}</p>
                  </article>
                ))}
              </div>
            </Container>
          </section>

          <section className="relative border-b border-white/[0.07] py-14 sm:py-20">
            <Container>
              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#e0b27a]">Case study structure</p>
              <h2 className="mt-4 max-w-2xl font-display text-3xl font-light tracking-[-0.04em] text-white/90 sm:text-4xl">
                From problem to system.
              </h2>
              <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {phases.map((phase) => (
                  <article key={phase.title} className="rounded-[1.35rem] border border-white/[0.08] bg-white/[0.03] p-6 shadow-[0_18px_60px_rgba(8,18,33,0.4)]">
                    <h3 className="font-display text-2xl tracking-[-0.04em] text-white/90">{phase.title}</h3>
                    <p className="mt-3 text-sm font-light leading-7 text-white/68">{phase.text}</p>
                  </article>
                ))}
              </div>
            </Container>
          </section>

          <section className="relative py-14 sm:py-20">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(217,154,58,0.3),rgba(46,82,128,0.34),transparent)]" />
            <div className="pointer-events-none absolute right-1/4 top-8 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(217,154,58,0.12),transparent_70%)] blur-3xl" />
            <Container>
              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#e0b27a]">Works with</p>
              <p className="mt-3 max-w-xl text-sm font-light leading-7 text-white/55">
                Lumen works with the lights and hardware people already own — HomeKit, Matter, and more — with local control wherever the hardware allows. The protocol underneath is plumbing. The point is the calm it leaves in the room, not the ecosystem it spans.
              </p>
            </Container>
          </section>
        </article>
      </div>
    </SiteFrame>
  );
}
