"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

import type { ProjectItem } from "@/lib/types";
import { FallbackImage } from "@/components/ui/fallback-image";
import { Tag } from "@/components/ui/tag";

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

export function ProjectCard({
  title,
  category,
  summary,
  tags,
  href,
  image,
  darkImage
}: ProjectItem) {
  const isNight = useNightMode();
  const src = isNight && darkImage ? darkImage : image;

  const Wrapper = href ? "a" : "article";
  const wrapperProps = href
    ? { href, target: "_blank", rel: "noreferrer" }
    : {};

  return (
    <Wrapper
      {...(wrapperProps as object)}
      className="group overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-card/72 shadow-[inset_0_1px_0_hsl(var(--foreground)/0.04),0_4px_12px_hsl(var(--background)/0.4),0_18px_48px_hsl(var(--background)/0.42),0_36px_72px_hsl(var(--background)/0.24)] transition-all duration-500 ease-out hover:-translate-y-1 hover:border-white/[0.16] hover:shadow-[inset_0_1px_0_hsl(var(--foreground)/0.05),0_6px_18px_hsl(var(--background)/0.46),0_24px_60px_hsl(var(--background)/0.52),0_44px_84px_hsl(var(--background)/0.3)]"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <div className="absolute inset-x-0 bottom-0 z-10 h-20 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
        {/* Subtle gradient lighting across the thumbnail */}
        <div className="absolute inset-0 z-10 bg-[linear-gradient(135deg,hsl(var(--foreground)/0.025)_0%,transparent_48%)] pointer-events-none" />
        {href && (
          <div className="absolute inset-0 z-20 flex items-center justify-center bg-foreground/8 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none">
            <div className="rounded-full bg-muted border border-border p-3">
              <ArrowUpRight className="h-5 w-5 text-foreground" />
            </div>
          </div>
        )}
        <AnimatePresence initial={false}>
          <motion.div
            key={src}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <FallbackImage
              src={src}
              alt={title}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              fallbackLabel={title}
              className="project-thumbnail"
              imageClassName="project-thumbnail-image object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="p-4 sm:p-5">
        <p className="text-xs uppercase tracking-[0.18em] text-foreground/45">{category}</p>
        <h3 className="mt-2 font-display text-[1.55rem] leading-tight text-foreground">{title}</h3>
        <p className="mt-2 text-sm font-light leading-7 text-muted-foreground">{summary}</p>

        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}
