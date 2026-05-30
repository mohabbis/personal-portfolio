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
  summary,
  subtitle,
  systemRole,
  tags,
  href,
  image,
  darkImage
}: ProjectItem) {
  const isNight = useNightMode();

  const src = isNight && darkImage ? darkImage : image;
  const isFoundation = systemRole === "foundation";

  const Wrapper = href ? "a" : "article";
  const wrapperProps = href ? { href, target: "_blank", rel: "noreferrer" } : {};

  return (
    <Wrapper
      {...(wrapperProps as object)}
      className={cn(
        "group overflow-hidden rounded-[1.5rem] border border-black/[0.045] bg-card/72 backdrop-blur-xl shadow-[inset_0_1px_0_hsl(var(--foreground)/0.02),0_8px_20px_hsl(30_40%_40%/0.06),0_24px_64px_hsl(30_40%_40%/0.06)] transition-all duration-500 ease-out hover:-translate-y-0.5 hover:border-black/[0.075] hover:shadow-[inset_0_1px_0_hsl(var(--foreground)/0.03),0_12px_28px_hsl(28_48%_36%/0.09),0_30px_78px_hsl(28_48%_36%/0.09)]",
        isFoundation && "bg-card/58"
      )}
    >
      <div className="relative aspect-[16/11] w-full overflow-hidden"> 
        <div className="absolute inset-x-0 bottom-0 z-10 h-16 bg-gradient-to-t from-black/22 to-transparent pointer-events-none" />
        <div className="absolute inset-0 z-10 bg-[linear-gradient(135deg,hsl(var(--accent)/0.035)_0%,transparent_48%)] pointer-events-none" />
        {href && (
          <div className="absolute inset-0 z-20 flex items-center justify-center bg-foreground/7 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none">
            <div className="rounded-full bg-muted border border-border p-3">
              <ArrowUpRight className="h-5 w-5 text-foreground" />
            </div>
          </div>
        )}
        <AnimatePresence initial={false}>
          <motion.div key={src} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4, ease: "easeInOut" }} className="absolute inset-0">
            <FallbackImage src={src} alt={title} fill sizes="(min-width: 1024px) 50vw, 100vw" fallbackLabel={title} className="project-thumbnail" imageClassName="project-thumbnail-image object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.018]" />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="p-5 sm:p-6"> 
        <h3 className="font-display text-[1.35rem] leading-[1.02] text-foreground sm:text-[1.55rem]">{title}</h3>
        {subtitle && <p className="mt-3 max-w-3xl text-sm font-light leading-7 text-foreground/68">{subtitle}</p>}
        <p className="mt-3 max-w-4xl text-sm leading-7 text-muted-foreground">{summary}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {tags.slice(0, 4).map((tag) => <Tag key={tag}>{tag}</Tag>)}
        </div>
      </div>
    </Wrapper>
  );
}
