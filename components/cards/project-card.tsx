"use client";

import { motion } from "motion/react";
import Image from "next/image";

import type { ProjectItem } from "@/lib/types";
import { Tag } from "@/components/ui/tag";

const spring = { type: "spring" as const, stiffness: 350, damping: 26 };
const sharedClass = "group overflow-hidden rounded-[1.5rem] border border-white/[0.13] bg-card/72 shadow-[0_16px_64px_hsl(var(--background)/0.5)] transition-[border-color,box-shadow] duration-500 hover:border-white/[0.24] hover:shadow-[0_32px_80px_hsl(var(--background)/0.6)]";

export function ProjectCard({
  title,
  category,
  summary,
  impact,
  tags,
  href,
  image
}: ProjectItem) {
  const inner = (
    <>
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <div className="absolute inset-x-0 bottom-0 z-10 h-20 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
      </div>

      <div className="p-5 sm:p-6">
        <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{category}</p>
        <h3 className="mt-2 font-display text-2xl text-foreground">{title}</h3>
        <p className="mt-3 text-sm leading-7 text-muted-foreground">{summary}</p>

        {impact && (
          <p className="mt-3 text-sm leading-7 text-foreground/80">
            <span className="font-medium">Impact: </span>{impact}
          </p>
        )}

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </div>
    </>
  );

  if (href) {
    return (
      <motion.a href={href} target="_blank" rel="noreferrer" className={sharedClass} whileHover={{ y: -6 }} transition={spring}>
        {inner}
      </motion.a>
    );
  }

  return (
    <motion.article className={sharedClass} whileHover={{ y: -6 }} transition={spring}>
      {inner}
    </motion.article>
  );
}
