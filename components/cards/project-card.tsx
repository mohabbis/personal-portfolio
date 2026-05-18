"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import type { ProjectItem } from "@/lib/types";
import { Tag } from "@/components/ui/tag";

const liftSpring = { type: "spring" as const, stiffness: 350, damping: 26 };
const tiltSpring = { stiffness: 280, damping: 28 };
const sharedClass = "group overflow-hidden rounded-[1.5rem] border border-border bg-card/72 shadow-card transition-[border-color,box-shadow] duration-500 hover:border-border/60 hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-1 focus-visible:ring-offset-background";

function useTilt() {
  const xMV = useMotionValue(0);
  const yMV = useMotionValue(0);
  const rotateY = useSpring(xMV, tiltSpring);
  const rotateX = useSpring(yMV, tiltSpring);

  const onMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    xMV.set(((e.clientX - rect.left) / rect.width - 0.5) * 10);
    yMV.set(((e.clientY - rect.top) / rect.height - 0.5) * -6);
  };
  const onMouseLeave = () => { xMV.set(0); yMV.set(0); };

  return { rotateX, rotateY, onMouseMove, onMouseLeave };
}

export function ProjectCard({
  title,
  category,
  summary,
  impact,
  tags,
  href,
  image
}: ProjectItem) {
  const { rotateX, rotateY, onMouseMove, onMouseLeave } = useTilt();

  const inner = (
    <>
      <div className="project-thumbnail relative aspect-[16/10] w-full overflow-hidden">
        <div className="absolute inset-x-0 bottom-0 z-10 h-20 bg-gradient-to-t from-foreground/20 to-transparent pointer-events-none" />
        {href && (
          <div className="absolute inset-0 z-20 flex items-center justify-center bg-foreground/8 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 group-active:opacity-100 pointer-events-none">
            <div className="rounded-full bg-muted border border-border p-3 backdrop-blur-sm">
              <ArrowUpRight className="h-5 w-5 text-foreground" />
            </div>
          </div>
        )}
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="project-thumbnail-image object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
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

  const tiltStyle = { rotateX, rotateY, transformPerspective: 900 };

  if (href) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noreferrer"
        data-cursor="View →"
        className={sharedClass}
        style={tiltStyle}
        whileHover={{ y: -6 }}
        whileTap={{ scale: 0.98, y: 0 }}
        transition={liftSpring}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
      >
        {inner}
      </motion.a>
    );
  }

  return (
    <motion.article
      className={sharedClass}
      style={tiltStyle}
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.98, y: 0 }}
      transition={liftSpring}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {inner}
    </motion.article>
  );
}
