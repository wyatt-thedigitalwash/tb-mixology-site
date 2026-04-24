"use client";

import ImageCarousel from "@/components/ImageCarousel";
import { menuExamples } from "@/lib/data/events";

export default function MenuExamples() {
  return (
    <ImageCarousel
      images={menuExamples}
      aspect="aspect-[3/4]"
      lightboxMaxWidth="min(420px, 85vw)"
    />
  );
}
