"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

import type { ProjectItem } from "@/lib/types";
import { FallbackImage } from "@/components/ui/fallback-image";
import { Tag } from "@/components/ui/tag";
import { cn } from "@/lib/utils";

function useNightMode() {
  const [isNight, setIsNight] = useState(false);
  useEffect(() => {
    const el = document.documentElement;
    const check = () => setIsNight(el.classList.contains("night-race"));
    check();
    const obs = new MutationObserver(check);
    obs.observe(el, { attributes: true, attributeFilter: ["class"] });
    return () => obs.disconnect();
  }, []);
  return isNight;
}

type ProjectCardBodyProps = ProjectItem & {
  imageSrc: string;
  imageClassName: string;
};

function ProjectCardBody({
  title,
  category,
  summary,
  subtitle,
  tags,
  relationshipLabel,
  href,
  ctaLabel,
  proofLogos,
  imageSrc,
  imageClassName
}: ProjectCardBodyProps) {
  return (
    <>
      <div className="relative aspect-[16/10.5] w-full overflow-hidden bg-card isolate">
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-14 bg-gradient-to-t from-black/14 to-transparent" />
        <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(135deg,hsl(var(--accent)/0.022)_0%,transparent_52%)]" />
        {href && (
          <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center bg-background/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="rounded-full border border-foreground/[0.08] bg-card/90 p-3 shadow-sm backdrop-blur-sm">
              <ArrowUpRight className="h-5 w-5 text-foreground/80" />
            </div>
          </div>
        )}
        <AnimatePresence initial={false}>
          <motion.div key={imageSrc} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4, ease: "easeInOut" }} className="absolute inset-0">
            <FallbackImage src={imageSrc} alt={title} fill sizes="(min-width: 1024px) 50vw, 100vw" fallbackLabel={title} className="project-thumbnail" imageClassName={imageClassName} />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="p-5 sm:p-7">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p className="font-mono text-[0.66rem] tracking-[0.04em] text-foreground/50">{category}</p>
          {relationshipLabel ? (
            <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-foreground/[0.08] bg-background/40 px-2.5 py-1 font-mono text-[0.6rem] uppercase tracking-[0.05em] text-foreground/55">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
              {relationshipLabel}
            </span>
          ) : null}
        </div>
        <h3 className="mt-3 font-display text-[1.2rem] leading-[1.1] text-foreground/92 sm:text-[1.38rem]">{title}</h3>
        {subtitle && <p className="mt-3 max-w-3xl text-[0.88rem] font-light leading-6 text-foreground/66">{subtitle}</p>}
        <p className="mt-3 max-w-4xl text-[0.86rem] font-light leading-6 text-muted-foreground/95">{summary}</p>

        {proofLogos && proofLogos.length > 0 ? (
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {proofLogos.map((logo) => (
              <div key={logo.label} className="rounded-[1rem] border border-foreground/[0.06] bg-background/38 p-3">
                <div className="relative flex h-20 items-center justify-center overflow-hidden rounded-[0.8rem] bg-white/48 p-4">
                  <FallbackImage
                    src={logo.image}
                    alt={`${logo.label} logo`}
                    fill
                    sizes="220px"
                    fallbackLabel={logo.label}
                    imageClassName="object-contain p-4"
                  />
                </div>
                <p className="mt-3 text-[0.82rem] font-medium text-foreground/88">{logo.label}</p>
                <p className="mt-1 text-[0.72rem] leading-5 text-muted-foreground/90">{logo.status}</p>
              </div>
            ))}
          </div>
        ) : null}

        <div className="mt-5 flex flex-wrap items-center gap-2">
          {tags.slice(0, 4).map((tag) => <Tag key={tag}>{tag}</Tag>)}
        </div>

        {href && ctaLabel ? (
          <span className="mt-6 inline-flex items-center gap-2 border-b border-foreground/18 pb-1 text-[0.82rem] font-light text-foreground/80 transition-colors group-hover:text-foreground">
            {ctaLabel} <ArrowUpRight className="h-3.5 w-3.5" />
          </span>
        ) : null}
      </div>
    </>
  );
}

export function ProjectCard(props: ProjectItem) {
  const { href, darkImage, image, imageFit = "cover", systemRole } = props;
  const isNight = useNightMode();
  const src = isNight && darkImage ? darkImage : image;
  const isFoundation = systemRole === "foundation";
  const isExternalHref = href?.startsWith("http");
  const imageClassName = cn(
    "project-thumbnail-image object-center transition-transform duration-700 ease-out group-hover:scale-[1.012]",
    imageFit === "contain" ? "object-contain p-5 sm:p-8" : "object-cover"
  );
  const className = cn(
    "block min-w-0 group overflow-hidden rounded-[1.35rem] border border-foreground/[0.055] bg-card/86 shadow-[inset_0_1px_0_hsl(var(--foreground)/0.018),0_10px_28px_hsl(30_30%_34%/0.045)] backdrop-blur-[1px] transition-all duration-500 ease-out hover:-translate-y-0.5 hover:border-foreground/[0.09] hover:bg-card hover:shadow-[inset_0_1px_0_hsl(var(--foreground)/0.025),0_16px_38px_hsl(28_32%_32%/0.07)]",
    isFoundation && "bg-card/72"
  );
  const body = <ProjectCardBody {...props} imageSrc={src} imageClassName={imageClassName} />;

  if (!href) {
    return <article className={className}>{body}</article>;
  }

  if (isExternalHref) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={className}>
        {body}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {body}
    </Link>
  );
}
