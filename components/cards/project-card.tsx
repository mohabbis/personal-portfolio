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
        "group overflow-hidden rounded-[2rem] border border-black/[0.06] bg-card/78 backdrop-blur-xl shadow-[inset_0_1px_0_hsl(var(--foreground)/0.03),0_10px_24px_hsl(30_40%_40%/0.08),0_30px_80px_hsl(30_40%_40%/0.08)] transition-all duration-500 ease-out hover:-translate-y-1 hover:border-black/[0.1] hover:shadow-[inset_0_1px_0_hsl(var(--foreground)/0.04),0_14px_32px_hsl(28_48%_36%/0.12),0_36px_92px_hsl(28_48%_36%/0.12)]",
        isInterface && "lg:col-span-2",
        isFoundation && "bg-card/62 lg:mx-8 lg:-mt-2"
      )}
    >
      <div className={cn("relative w-full overflow-hidden", isInterface ? "aspect-[16/8]" : "aspect-[16/10]")}> 
        <div className="absolute inset-x-0 bottom-0 z-10 h-24 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
        <div className="absolute inset-0 z-10 bg-[linear-gradient(135deg,hsl(var(--accent)/0.06)_0%,transparent_48%)] pointer-events-none" />
        {relationshipLabel && (
          <div className="absolute left-4 top-4 z-20 rounded-full border border-black/[0.08] bg-background/80 px-3 py-1 text-[0.64rem] font-medium tracking-[0.16em] text-foreground/70 backdrop-blur-md">
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
            <FallbackImage src={src} alt={title} fill sizes={isInterface ? "100vw" : "(min-width: 1024px) 50vw, 100vw"} fallbackLabel={title} className="project-thumbnail" imageClassName="project-thumbnail-image object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]" />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className={cn("p-5 sm:p-6", isInterface && "sm:p-8")}> 
        {eyebrow && <p className="text-[0.68rem] tracking-[0.16em] text-foreground/42">{eyebrow}</p>}
        <p className="mt-3 text-[0.7rem] tracking-[0.18em] text-foreground/45">{category}</p>
        <h3 className={cn("mt-3 font-display leading-[0.95] text-foreground", isInterface ? "text-[2.25rem] sm:text-[3rem]" : "text-[1.7rem]")}>{title}</h3>
        {subtitle && <p className="mt-3 max-w-3xl text-sm font-light leading-7 text-foreground/72">{subtitle}</p>}
        <p className="mt-3 max-w-4xl text-sm leading-7 text-muted-foreground">{summary}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
        </div>
      </div>
    </Wrapper>
  );
}
