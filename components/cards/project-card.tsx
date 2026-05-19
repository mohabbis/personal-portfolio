"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

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
  impact,
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
      className="group overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-card/72 shadow-[0_18px_56px_hsl(var(--background)/0.38)] transition-all duration-500 ease-out hover:-translate-y-1 hover:border-white/[0.16] hover:shadow-[0_28px_70px_hsl(var(--background)/0.52)]"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <div className="absolute inset-x-0 bottom-0 z-10 h-20 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
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
        <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{category}</p>
        <h3 className="mt-2 font-display text-[1.55rem] leading-tight text-foreground">{title}</h3>
        <p className="mt-2 text-sm leading-7 text-muted-foreground">{summary}</p>

        {impact && (
          <p className="mt-2 text-sm leading-7 text-foreground/80">{impact}</p>
        )}

        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}
