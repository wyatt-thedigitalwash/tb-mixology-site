"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { menuExamples } from "@/lib/data/events";

export default function MenuExamples() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((p) => (p !== null ? (p + 1) % menuExamples.length : null));
      if (e.key === "ArrowLeft") setLightbox((p) => (p !== null ? (p - 1 + menuExamples.length) % menuExamples.length : null));
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightbox]);

  return (
    <>
      {/* Scrollable row on mobile, 4-across grid on desktop */}
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

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 md:p-8"
          onClick={() => setLightbox(null)}
        >
          {/* Modal container */}
          <div
            className="relative bg-black rounded-sm overflow-hidden"
            style={{ maxWidth: "min(500px, 90vw)", maxHeight: "90vh" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-3 right-3 z-10 bg-black/70 rounded-full p-2 text-white/80 hover:text-white transition-colors"
              aria-label="Close lightbox"
            >
              <X size={22} />
            </button>

            <div className="overflow-y-auto" style={{ maxHeight: "90vh" }}>
              <Image
                src={menuExamples[lightbox].src}
                alt={menuExamples[lightbox].alt}
                width={menuExamples[lightbox].width}
                height={menuExamples[lightbox].height}
                sizes="500px"
                className="w-full h-auto block"
                priority
              />
            </div>
          </div>

          {/* Prev */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((lightbox - 1 + menuExamples.length) % menuExamples.length);
            }}
            className="absolute left-4 md:left-8 text-white/50 hover:text-white transition-colors"
            aria-label="Previous menu"
          >
            <ChevronLeft size={36} />
          </button>

          {/* Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((lightbox + 1) % menuExamples.length);
            }}
            className="absolute right-4 md:right-8 text-white/50 hover:text-white transition-colors"
            aria-label="Next menu"
          >
            <ChevronRight size={36} />
          </button>
        </div>
      )}
    </>
  );
}
