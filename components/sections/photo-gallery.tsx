"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, X, Aperture } from "lucide-react";

import { gallery } from "@/data/gallery";

export function PhotoGallery() {
  const [selected, setSelected] = useState<number | null>(null);
  const [helmetCam, setHelmetCam] = useState(false);

  const close = useCallback(() => setSelected(null), []);
  const prev = useCallback(() =>
    setSelected((i) => (i === null ? null : (i - 1 + gallery.length) % gallery.length)), []);
  const next = useCallback(() =>
    setSelected((i) => (i === null ? null : (i + 1) % gallery.length)), []);

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

  useEffect(() => { if (selected === null) setHelmetCam(false); }, [selected]);

  useEffect(() => {
    if (selected === null) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
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
    if (Math.abs(dy) > 80 && Math.abs(dy) > Math.abs(dx)) { close(); return; }
    if (Math.abs(dx) > 50) { dx < 0 ? next() : prev(); }
  };

  return (
    <>
      <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {gallery.map((item, index) => (
          <figure
            key={index}
            data-cursor="Photo →"
            onClick={() => setSelected(index)}
            className="group cursor-pointer overflow-hidden rounded-[1.5rem] border border-white/10 bg-card/72 shadow-[0_16px_64px_hsl(var(--background)/0.5)] transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-white/[0.24] hover:shadow-[0_32px_80px_hsl(var(--background)/0.6)]"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src={item.image}
                alt=""
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                style={{ objectPosition: item.objectPosition ?? "center" }}
                priority={index < 6}
              />
            </div>
          </figure>
        ))}
      </div>

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
              background: "rgba(0,0,0,0.88)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Prev */}
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              aria-label="Previous photo"
              style={{
                position: "absolute",
                left: 16,
                top: "50%",
                transform: "translateY(-50%)",
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.16)",
                borderRadius: "50%",
                width: 44,
                height: 44,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                cursor: "pointer",
                zIndex: 51,
              }}
            >
              <ChevronLeft size={20} />
            </button>

            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              aria-label="Next photo"
              style={{
                position: "absolute",
                right: 16,
                top: "50%",
                transform: "translateY(-50%)",
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.16)",
                borderRadius: "50%",
                width: 44,
                height: 44,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                cursor: "pointer",
                zIndex: 51,
              }}
            >
              <ChevronRight size={20} />
            </button>

            {/* Helmet cam toggle */}
            <button
              onClick={(e) => { e.stopPropagation(); setHelmetCam((h) => !h); }}
              aria-label="Toggle helmet cam view"
              title="Helmet cam"
              style={{
                position: "absolute",
                top: 16,
                right: 72,
                background: helmetCam ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.08)",
                border: `1px solid ${helmetCam ? "rgba(255,255,255,0.35)" : "rgba(255,255,255,0.16)"}`,
                borderRadius: "50%",
                width: 44,
                height: 44,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: helmetCam ? "#fff" : "rgba(255,255,255,0.6)",
                cursor: "pointer",
                zIndex: 51,
                transition: "background 0.2s, border-color 0.2s, color 0.2s",
              }}
            >
              <Aperture size={16} />
            </button>

            {/* Close */}
            <button
              onClick={(e) => { e.stopPropagation(); close(); }}
              aria-label="Close lightbox"
              style={{
                position: "absolute",
                top: 16,
                right: 16,
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.16)",
                borderRadius: "50%",
                width: 44,
                height: 44,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                cursor: "pointer",
                zIndex: 51,
              }}
            >
              <X size={18} />
            </button>

            <AnimatePresence mode="wait">
              <motion.div
                key={selected}
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.94, opacity: 0 }}
                transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                onClick={(e) => e.stopPropagation()}
                style={{
                  position: "relative",
                  display: "inline-block",
                  filter: helmetCam ? "brightness(0.88) contrast(1.12) saturate(0.85)" : undefined,
                  transition: "filter 0.35s ease",
                }}
              >
                {helmetCam && (
                  <div
                    aria-hidden={true}
                    style={{
                      position: "absolute",
                      inset: 0,
                      borderRadius: 12,
                      background: "radial-gradient(ellipse at 50% 50%, transparent 42%, rgba(0,0,0,0.78) 100%)",
                      zIndex: 10,
                      pointerEvents: "none",
                    }}
                  />
                )}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={gallery[selected].image.src}
                  alt=""
                  style={{
                    maxWidth: "90vw",
                    maxHeight: "84vh",
                    width: "auto",
                    height: "auto",
                    borderRadius: 12,
                    display: "block",
                  }}
                />
              </motion.div>
            </AnimatePresence>

            {/* Photo counter */}
            <p
              style={{
                position: "absolute",
                bottom: 18,
                left: "50%",
                transform: "translateX(-50%)",
                fontSize: 11,
                fontFamily: "monospace",
                letterSpacing: "0.12em",
                color: "rgba(255,255,255,0.4)",
                pointerEvents: "none",
                userSelect: "none",
              }}
            >
              {selected + 1} / {gallery.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
