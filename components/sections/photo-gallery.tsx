"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import { gallery } from "@/data/gallery";

const spanStyles: Record<string, string> = {
  hero: "md:col-span-2 md:row-span-2",
  wide: "md:col-span-2",
  tall: "md:row-span-2",
};

const aspectStyles: Record<string, string> = {
  hero: "aspect-[4/5] md:aspect-[16/10]",
  wide: "aspect-[16/10]",
  tall: "aspect-[4/5] h-full",
  default: "aspect-[4/5] md:aspect-[4/3]",
};

const photoSrc = (image: (typeof gallery)[number]["image"]) =>
  typeof image === "string" ? image : image.src;

const canBlur = (image: (typeof gallery)[number]["image"]) => typeof image !== "string";

export function PhotoGallery() {
  const [selected, setSelected] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const close = useCallback(() => setSelected(null), []);

  const prev = useCallback(
    () => setSelected((i) => (i === null ? null : (i - 1 + gallery.length) % gallery.length)),
    []
  );

  const next = useCallback(
    () => setSelected((i) => (i === null ? null : (i + 1) % gallery.length)),
    []
  );

  useEffect(() => {
    if (selected === null) return;

    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [selected, close, prev, next]);

  useEffect(() => {
    if (selected === null) return;

    const scrollY = window.scrollY;

    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";

    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo(0, scrollY);
    };
  }, [selected]);

  const touchStart = useRef<{ x: number; y: number } | null>(null);

  const onTouchStart = (e: React.TouchEvent) => {
    const t = e.touches[0];
    touchStart.current = { x: t.clientX, y: t.clientY };
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart.current) return;

    const t = e.changedTouches[0];
    const dx = t.clientX - touchStart.current.x;
    const dy = t.clientY - touchStart.current.y;

    touchStart.current = null;

    if (Math.abs(dy) > 80 && Math.abs(dy) > Math.abs(dx)) {
      close();
      return;
    }

    if (Math.abs(dx) > 50) {
      dx < 0 ? next() : prev();
    }
  };

  return (
    <>
      <div className="grid auto-rows-[220px] gap-5 sm:gap-8 md:grid-cols-2 xl:grid-cols-3">
        {gallery.map((item, index) => {
          const span = item.span ?? "default";

          return (
            <figure
              key={index}
              data-cursor="Open"
              onClick={() => setSelected(index)}
              className={`group relative cursor-pointer overflow-hidden rounded-[1.5rem] transition-all duration-500 ease-out ${spanStyles[span] ?? ""}`}
            >
              <div className={`relative w-full overflow-hidden bg-muted/20 ${aspectStyles[span] ?? aspectStyles.default}`}>
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.015]"
                  style={{ objectPosition: item.objectPosition ?? "center" }}
                  placeholder={canBlur(item.image) ? "blur" : "empty"}
                  priority={index < 4}
                  unoptimized={typeof item.image === "string"}
                />
              </div>
            </figure>
          );
        })}
      </div>

      {mounted &&
        createPortal(
          <AnimatePresence>
            {selected !== null && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={close}
                onTouchStart={onTouchStart}
                onTouchEnd={onTouchEnd}
                style={{
                  position: "fixed",
                  inset: 0,
                  zIndex: 50,
                  background: "rgba(0,0,0,0.94)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  touchAction: "none",
                }}
              >
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prev();
                  }}
                  aria-label="Previous photo"
                  style={{
                    position: "absolute",
                    left: 20,
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "999px",
                    width: 42,
                    height: 42,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    cursor: "pointer",
                  }}
                >
                  <ChevronLeft size={18} />
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    next();
                  }}
                  aria-label="Next photo"
                  style={{
                    position: "absolute",
                    right: 20,
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "999px",
                    width: 42,
                    height: 42,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    cursor: "pointer",
                  }}
                >
                  <ChevronRight size={18} />
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    close();
                  }}
                  aria-label="Close lightbox"
                  style={{
                    position: "absolute",
                    top: 20,
                    right: 20,
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "999px",
                    width: 42,
                    height: 42,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    cursor: "pointer",
                  }}
                >
                  <X size={18} />
                </button>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={selected}
                    initial={{ scale: 0.98, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.98, opacity: 0 }}
                    transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <img
                      src={photoSrc(gallery[selected].image)}
                      alt={gallery[selected].alt}
                      style={{
                        maxWidth: "90vw",
                        maxHeight: "86vh",
                        width: "auto",
                        height: "auto",
                        borderRadius: 14,
                        display: "block",
                      }}
                    />
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
}
