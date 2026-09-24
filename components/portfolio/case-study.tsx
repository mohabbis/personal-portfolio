import Image from "next/image";
import Link from "next/link";

import { SiteFrame } from "@/components/layout/site-frame";
import { Container } from "@/components/ui/container";

type CaseStudyProps = {
  name: string;
  headline: string;
  intro: string;
  image: string;
  imageAlt: string;
  repoUrl: string;
  facts: { label: string; value: string }[];
  problemTitle: string;
  problem: string;
  decisions: { name: string; desc: string }[];
};

export function CaseStudy({
  name,
  headline,
  intro,
  image,
  imageAlt,
  repoUrl,
  facts,
  problemTitle,
  problem,
  decisions
}: CaseStudyProps) {
  return (
    <SiteFrame currentPath="/portfolio">
      <div className="relative bg-[#100b05]">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-0 h-[70vh] w-full max-w-3xl -translate-x-1/2 rounded-[50%] bg-[#4a2c08] opacity-[0.45] blur-[180px]" />
          <div className="absolute bottom-0 right-0 h-[44vh] w-[58vw] rounded-[50%] bg-[#d99a3a] opacity-[0.07] blur-[170px]" />
        </div>

        <article className="relative">
          <section className="relative overflow-hidden border-b border-white/[0.06] pb-16 pt-16 sm:pt-24">
            <Container className="relative grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.32em] text-[#e0b27a]">Case Study · {name}</p>
                <h1 className="mt-4 max-w-3xl font-display text-5xl font-normal leading-[0.96] tracking-[-0.05em] text-white/92 sm:text-6xl lg:text-7xl">
                  {headline}
                </h1>
                <p className="mt-6 max-w-2xl text-lg font-light leading-8 text-white/62">{intro}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-[linear-gradient(135deg,#e8c089,#d99a3a)] px-5 py-3 text-sm font-medium text-[#1a0e04] shadow-[0_18px_60px_rgba(217,154,58,0.32)] transition hover:scale-[1.02] hover:shadow-[0_22px_80px_rgba(217,154,58,0.44)]"
                  >
                    View on GitHub
                  </a>
                  <Link
                    href="/portfolio"
                    className="rounded-full border border-white/[0.12] bg-white/[0.04] px-5 py-3 text-sm font-light text-white/72 transition hover:border-[#e0b27a]/40 hover:bg-white/[0.08]"
                  >
                    Back to work
                  </Link>
                </div>
              </div>
              <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] border border-[#8a6030]/40 bg-[#1a120a] shadow-[0_30px_110px_rgba(8,4,0,0.6)] ring-1 ring-[#e0b27a]/20">
                <Image src={image} alt={imageAlt} fill priority unoptimized sizes="(min-width: 1024px) 54vw, 92vw" className="object-cover" />
              </div>
            </Container>
          </section>

          <section className="relative border-b border-white/[0.06] bg-[#0d0905] py-14 sm:py-20">
            <Container className="grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
              {facts.map((item) => (
                <div key={item.label} className="rounded-[1.2rem] border border-white/[0.07] bg-white/[0.03] p-5 shadow-[0_18px_60px_rgba(8,4,0,0.4)]">
                  <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#e0b27a]">{item.label}</p>
                  <p className="mt-3 font-mono text-sm leading-6 text-white/65">{item.value}</p>
                </div>
              ))}
            </Container>
          </section>

          <section className="relative py-14 sm:py-20">
            <Container>
              <h2 className="max-w-2xl font-display text-3xl font-normal tracking-[-0.04em] text-white/90 sm:text-4xl">
                {problemTitle}
              </h2>
              <p className="mt-4 max-w-2xl text-base font-light leading-7 text-white/58">{problem}</p>
              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                {decisions.map((item, index) => (
                  <article
                    key={item.name}
                    className="rounded-[1.35rem] border border-white/[0.07] bg-[linear-gradient(135deg,rgba(80,48,12,0.32),rgba(40,24,6,0.22))] p-6 shadow-[0_20px_70px_rgba(8,4,0,0.4)] transition hover:border-[#e0b27a]/30 hover:shadow-[0_24px_90px_rgba(217,154,58,0.12)]"
                  >
                    <div className="flex items-baseline gap-3">
                      <span className="font-display text-sm text-[#e0b27a]">{String(index + 1).padStart(2, "0")}</span>
                      <h3 className="font-display text-2xl tracking-[-0.04em] text-white/90">{item.name}</h3>
                    </div>
                    <p className="mt-4 text-sm font-light leading-7 text-white/65">{item.desc}</p>
                  </article>
                ))}
              </div>
            </Container>
          </section>
        </article>
      </div>
    </SiteFrame>
  );
}
