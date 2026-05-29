"use client";

import { useEffect, useState } from "react";
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

export function ProjectCard({
  title,
  category,
  summary,
  eyebrow,
  subtitle,
  relationshipLabel,
  systemRole,
  tags,
  href,
  image,
  darkImage
}: ProjectItem) {
  const isNight = useNightMode();
  const src = isNight && darkImage ? darkImage : image;
  const isInterface = systemRole === "interface";
  const isFoundation = systemRole === "foundation";

  const Wrapper = href ? "a" : "article";
  const wrapperProps = href ? { href, target: "_blank", rel: "noreferrer" } : {};

  return (
    <Wrapper
      {...(wrapperProps as object)}
      className={cn(
        "group overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-card/72 shadow-[inset_0_1px_0_hsl(var(--foreground)/0.04),0_4px_12px_hsl(var(--background)/0.4),0_18px_48px_hsl(var(--background)/0.42),0_36px_72px_hsl(var(--background)/0.24)] transition-all duration-500 ease-out hover:-translate-y-1 hover:border-white/[0.16] hover:shadow-[inset_0_1px_0_hsl(var(--foreground)/0.05),0_6px_18px_hsl(var(--background)/0.46),0_24px_60px_hsl(var(--background)/0.52),0_44px_84px_hsl(var(--background)/0.3)]",
        isInterface && "lg:col-span-2 border-white/[0.16]",
        isFoundation && "bg-card/54 lg:mx-8 lg:-mt-3"
      )}
    >
      <div className={cn("relative w-full overflow-hidden", isInterface ? "aspect-[16/8]" : "aspect-[16/10]")}> 
        <div className="absolute inset-x-0 bottom-0 z-10 h-20 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
        <div className="absolute inset-0 z-10 bg-[linear-gradient(135deg,hsl(var(--foreground)/0.025)_0%,transparent_48%)] pointer-events-none" />
        {relationshipLabel && (
          <div className="absolute left-4 top-4 z-20 rounded-full border border-white/[0.16] bg-background/72 px-3 py-1 text-[0.64rem] font-medium uppercase tracking-[0.18em] text-foreground/76 backdrop-blur-md">
            {relationshipLabel}
          </div>
        )}
        {href && (
          <div className="absolute inset-0 z-20 flex items-center justify-center bg-foreground/8 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none">
            <div className="rounded-full bg-muted border border-border p-3">
              <ArrowUpRight className="h-5 w-5 text-foreground" />
            </div>
          </div>
        )}
        <AnimatePresence initial={false}>
          <motion.div key={src} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4, ease: "easeInOut" }} className="absolute inset-0">
            <FallbackImage src={src} alt={title} fill sizes={isInterface ? "100vw" : "(min-width: 1024px) 50vw, 100vw"} fallbackLabel={title} className="project-thumbnail" imageClassName="project-thumbnail-image object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]" />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className={cn("p-4 sm:p-5", isInterface && "sm:p-7")}> 
        {eyebrow && <p className="text-xs uppercase tracking-[0.2em] text-foreground/42">{eyebrow}</p>}
        <p className="mt-2 text-xs uppercase tracking-[0.18em] text-foreground/45">{category}</p>
        <h3 className={cn("mt-2 font-display leading-tight text-foreground", isInterface ? "text-[2rem] sm:text-[2.7rem]" : "text-[1.55rem]")}>{title}</h3>
        {subtitle && <p className="mt-2 max-w-3xl text-sm font-light leading-7 text-foreground/72">{subtitle}</p>}
        <p className="mt-2 max-w-4xl text-sm font-light leading-7 text-muted-foreground">{summary}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
        </div>
      </div>
    </Wrapper>
  );
}
