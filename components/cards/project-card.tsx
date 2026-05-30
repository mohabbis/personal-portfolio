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
  href,
  ctaLabel,
  proofLogos,
  imageSrc,
  imageClassName
}: ProjectCardBodyProps) {
  return (
    <>
      <div className="relative aspect-[16/11] w-full overflow-hidden bg-card isolate">
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-16 bg-gradient-to-t from-black/22 to-transparent" />
        <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(135deg,hsl(var(--accent)/0.035)_0%,transparent_48%)]" />
        {href && (
          <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center bg-foreground/7 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="rounded-full border border-border bg-muted p-3">
              <ArrowUpRight className="h-5 w-5 text-foreground" />
            </div>
          </div>
        )}
        <AnimatePresence initial={false}>
          <motion.div key={imageSrc} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4, ease: "easeInOut" }} className="absolute inset-0">
            <FallbackImage src={imageSrc} alt={title} fill sizes="(min-width: 1024px) 50vw, 100vw" fallbackLabel={title} className="project-thumbnail" imageClassName={imageClassName} />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="p-5 sm:p-6">
        <p className="text-xs font-light tracking-[0.04em] text-foreground/54">{category}</p>
        <h3 className="mt-3 font-display text-[1.35rem] leading-[1.02] text-foreground sm:text-[1.55rem]">{title}</h3>
        {subtitle && <p className="mt-3 max-w-3xl text-sm font-light leading-7 text-foreground/68">{subtitle}</p>}
        <p className="mt-3 max-w-4xl text-sm leading-7 text-muted-foreground">{summary}</p>

        {proofLogos && proofLogos.length > 0 ? (
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {proofLogos.map((logo) => (
              <div key={logo.label} className="rounded-[1rem] border border-foreground/[0.08] bg-background/45 p-3">
                <div className="relative flex h-20 items-center justify-center overflow-hidden rounded-[0.8rem] bg-white/55 p-4">
                  <FallbackImage
                    src={logo.image}
                    alt={`${logo.label} logo`}
                    fill
                    sizes="220px"
                    fallbackLabel={logo.label}
                    imageClassName="object-contain p-4"
                  />
                </div>
                <p className="mt-3 text-sm font-medium text-foreground">{logo.label}</p>
                <p className="mt-1 text-xs leading-5 text-muted-foreground">{logo.status}</p>
              </div>
            ))}
          </div>
        ) : null}

        <div className="mt-5 flex flex-wrap gap-2">
          {tags.slice(0, 4).map((tag) => <Tag key={tag}>{tag}</Tag>)}
        </div>

        {href && ctaLabel ? (
          <span className="mt-6 inline-flex items-center gap-2 border-b border-foreground/30 pb-1 text-sm font-light text-foreground transition-colors group-hover:text-muted-foreground">
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
    "project-thumbnail-image object-center transition-transform duration-700 ease-out group-hover:scale-[1.018]",
    imageFit === "contain" ? "object-contain p-5 sm:p-8" : "object-cover"
  );
  const className = cn(
    "block min-w-0 group overflow-hidden rounded-[1.5rem] border border-black/[0.045] bg-card shadow-[inset_0_1px_0_hsl(var(--foreground)/0.02),0_8px_20px_hsl(30_40%_40%/0.06),0_24px_64px_hsl(30_40%_40%/0.06)] transition-all duration-500 ease-out hover:-translate-y-0.5 hover:border-black/[0.075] hover:shadow-[inset_0_1px_0_hsl(var(--foreground)/0.03),0_12px_28px_hsl(28_48%_36%/0.09),0_30px_78px_hsl(28_48%_36%/0.09)]",
    isFoundation && "bg-card/80"
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
