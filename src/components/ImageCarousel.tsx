"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export interface CarouselImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

function Lightbox({
  images,
  index,
  onClose,
  onPrev,
  onNext,
  maxWidth,
}: {
  images: CarouselImage[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  maxWidth: string;
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

  const img = images[index];

  return createPortal(
    <div
      style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, zIndex: 9999 }}
      className="bg-black/90 flex items-center justify-center"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 bg-black/70 rounded-full p-2 text-white/80 hover:text-white transition-colors"
        aria-label="Close"
      >
        <X size={24} />
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 md:left-8 text-white/50 hover:text-white transition-colors z-10"
        aria-label="Previous"
      >
        <ChevronLeft size={36} />
      </button>
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative bg-black rounded-sm"
        style={{ maxWidth, maxHeight: "85vh" }}
      >
        <Image
          src={img.src}
          alt={img.alt}
          width={img.width}
          height={img.height}
          sizes={maxWidth.replace("min(", "").split(",")[0]}
          className="w-full h-auto max-h-[85vh] object-contain rounded-sm"
          priority
        />
      </div>
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

interface ImageCarouselProps {
  images: CarouselImage[];
  aspect?: string;
  lightboxMaxWidth?: string;
  hintText?: string;
}

export default function ImageCarousel({
  images,
  aspect = "aspect-[3/4]",
  lightboxMaxWidth = "min(420px, 85vw)",
  hintText = "Swipe to explore",
}: ImageCarouselProps) {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [hasInteracted, setHasInteracted] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useRef(false);

  const close = useCallback(() => setLightbox(null), []);
  const prev = useCallback(() => setLightbox((p) => (p !== null ? (p - 1 + images.length) % images.length : null)), [images.length]);
  const next = useCallback(() => setLightbox((p) => (p !== null ? (p + 1) % images.length : null)), [images.length]);

  useEffect(() => {
    reducedMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container || reducedMotion.current) return;

    const cards = container.querySelectorAll<HTMLElement>("[data-card]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            const ratio = entry.intersectionRatio;
            const opacity = 0.4 + 0.6 * ratio;
            const scale = 0.92 + 0.08 * ratio;
            el.style.opacity = String(opacity);
            el.style.transform = `scale(${scale})`;
          } else {
            el.style.opacity = "0.4";
            el.style.transform = "scale(0.92)";
          }
        });
      },
      {
        root: container,
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, [images]);

  const scroll = useCallback((direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.querySelector("[data-card]");
    if (!card) return;
    const cardWidth = card.clientWidth;
    const gap = 16;
    const visible = Math.max(1, Math.round(el.clientWidth / (cardWidth + gap)));
    const distance = (cardWidth + gap) * visible;
    el.scrollBy({
      left: direction === "right" ? distance : -distance,
      behavior: reducedMotion.current ? "instant" : "smooth",
    });
  }, []);

  const handleInteraction = useCallback(() => {
    if (!hasInteracted) setHasInteracted(true);
  }, [hasInteracted]);

  return (
    <>
      <div className="relative group">
        <button
          onClick={() => { scroll("left"); handleInteraction(); }}
          className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 items-center justify-center rounded-full border border-white/20 bg-primary/80 backdrop-blur-sm text-white/60 hover:border-accent hover:text-accent transition-colors duration-200 ease-out"
          aria-label="Scroll left"
        >
          <ChevronLeft size={20} />
        </button>

        <button
          onClick={() => { scroll("right"); handleInteraction(); }}
          className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 items-center justify-center rounded-full border border-white/20 bg-primary/80 backdrop-blur-sm text-white/60 hover:border-accent hover:text-accent transition-colors duration-200 ease-out"
          aria-label="Scroll right"
        >
          <ChevronRight size={20} />
        </button>

        <div
          ref={scrollRef}
          onScroll={handleInteraction}
          onTouchStart={handleInteraction}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth motion-reduce:scroll-auto"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {images.map((img, i) => (
            <button
              key={img.src}
              data-card=""
              onClick={() => setLightbox(i)}
              className="shrink-0 snap-center cursor-pointer
                w-[65%] sm:w-[45%] md:w-[calc(25%-12px)]
                motion-reduce:!opacity-100 motion-reduce:!scale-100"
              style={{
                transition: "opacity 0.3s ease-out, transform 0.3s ease-out",
              }}
            >
              <div className={`relative ${aspect} overflow-hidden rounded-sm`}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 65vw, (max-width: 768px) 45vw, 25vw"
                  className="object-cover hover:scale-105 transition-transform duration-500 ease-out motion-reduce:hover:scale-100"
                />
              </div>
            </button>
          ))}
        </div>

        <div
          className={`flex items-center justify-center gap-2 mt-4 transition-opacity duration-500 ease-out ${
            hasInteracted ? "opacity-0 pointer-events-none" : "opacity-60"
          }`}
        >
          <ChevronLeft size={14} className="text-white/50" />
          <p className="font-body text-xs text-white/50 tracking-wide">
            {hintText}
          </p>
          <ChevronRight size={14} className="text-white/50" />
        </div>
      </div>

      {lightbox !== null && (
        <Lightbox
          images={images}
          index={lightbox}
          onClose={close}
          onPrev={prev}
          onNext={next}
          maxWidth={lightboxMaxWidth}
        />
      )}
    </>
  );
}
