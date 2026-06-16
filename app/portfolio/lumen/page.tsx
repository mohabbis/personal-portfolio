import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { SiteFrame } from "@/components/layout/site-frame";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Lumen Case Study",
  description:
    "A calm home companion for iOS that uses light, atmosphere, and gentle scenes to take the edge off an overstimulating day. Built natively in SwiftUI and currently in TestFlight beta.",
  alternates: {
    canonical: "/portfolio/lumen"
  }
};

const metadata_items = [
  { label: "Role", value: "Product design, interface design, iOS development" },
  { label: "Stack", value: "SwiftUI · Observation · NavigationStack · Xcode" },
  { label: "Timeline", value: "2026 - present" },
  { label: "Status", value: "TestFlight beta" }
];

const hierarchy = [
  { num: "01", name: "Rooms", desc: "It opens in the space you're actually standing in, not a wall of switches." },
  { num: "02", name: "Scenes", desc: "Gentle presets like Reading, Wind Down, and Recover that soften a room in one tap." },
  { num: "03", name: "Quiet", desc: "Slow fades and muted defaults, so nothing flares up and demands your attention." },
  { num: "04", name: "Routines", desc: "Time and presence cues that ease the lights down without you having to think about it." },
];

const protocols = [
  { name: "HomeKit", via: "Native" },
  { name: "Matter", via: "Local-ready" },
  { name: "Govee", via: "Supported" },
  { name: "GE Cync", via: "Planned" },
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
                A home that helps you come down.
              </h1>
              <p className="mt-6 max-w-2xl text-lg font-light leading-8 text-foreground/68">
                Lumen is a native iOS companion that uses light, warmth, and slow scenes to take the edge off an overstimulating day. It's built for people who feel rooms loudly — including neurodivergent folks who get worn down by too much noise, glare, and clutter. The hardware it talks to matters less than how calm it leaves the room.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/portfolio" className="rounded-full border border-foreground/[0.14] px-5 py-3 text-sm font-light transition hover:border-foreground/30">
                  Back to work
                </Link>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-foreground/[0.08] bg-card shadow-soft">
              <Image src="/images/projects/lumen-iot-interface.svg" alt="Lumen app interface preview" fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" priority />
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
              How it's put together.
            </h2>
            <p className="mt-4 max-w-2xl text-base font-light leading-7 text-foreground/64">
              The whole app is shaped around lowering the temperature of a space, not loading it up with controls.
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
            <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-foreground/40">Works with</p>
            <p className="mt-3 max-w-xl text-sm font-light leading-7 text-foreground/56">
              Lumen meets your lights where they already are. The protocol underneath is plumbing — useful, but never the point.
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
