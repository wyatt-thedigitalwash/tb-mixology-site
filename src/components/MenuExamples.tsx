"use client";

import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { menuExamples } from "@/lib/data/events";

function Lightbox({
  index,
  onClose,
  onPrev,
  onNext,
}: {
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose, onNext, onPrev]);

  const menu = menuExamples[index];

  return createPortal(
    <div
      style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, zIndex: 9999 }}
      className="bg-black/90 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 bg-black/70 rounded-full p-2 text-white/80 hover:text-white transition-colors"
        aria-label="Close"
      >
        <X size={24} />
      </button>

      {/* Prev */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 md:left-8 text-white/50 hover:text-white transition-colors z-10"
        aria-label="Previous"
      >
        <ChevronLeft size={36} />
      </button>

      {/* Image */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative bg-black rounded-sm"
        style={{ maxWidth: "min(420px, 85vw)", maxHeight: "85vh" }}
      >
        <Image
          src={menu.src}
          alt={menu.alt}
          width={menu.width}
          height={menu.height}
          sizes="420px"
          className="w-full h-auto max-h-[85vh] object-contain rounded-sm"
          priority
        />
      </div>

      {/* Next */}
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 md:right-8 text-white/50 hover:text-white transition-colors z-10"
        aria-label="Next"
      >
        <ChevronRight size={36} />
      </button>
    </div>,
    document.body
  );
}

export default function MenuExamples() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const close = useCallback(() => setLightbox(null), []);
  const prev = useCallback(() => setLightbox((p) => (p !== null ? (p - 1 + menuExamples.length) % menuExamples.length : null)), []);
  const next = useCallback(() => setLightbox((p) => (p !== null ? (p + 1) % menuExamples.length : null)), []);

  return (
    <>
      <div className="flex md:grid md:grid-cols-4 gap-4 overflow-x-auto pb-4 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0 snap-x snap-mandatory md:snap-none">
        {menuExamples.map((menu, i) => (
          <button
            key={menu.src}
            onClick={() => setLightbox(i)}
            className="shrink-0 w-48 md:w-auto overflow-hidden rounded-sm snap-start group cursor-pointer"
          >
            <Image
              src={menu.src}
              alt={menu.alt}
              width={menu.width}
              height={menu.height}
              sizes="(max-width: 768px) 192px, 25vw"
              className="w-full h-auto group-hover:scale-105 transition-transform duration-500 ease-out"
            />
          </button>
        ))}
      </div>

      {lightbox !== null && (
        <Lightbox index={lightbox} onClose={close} onPrev={prev} onNext={next} />
      )}
    </>
  );
}
