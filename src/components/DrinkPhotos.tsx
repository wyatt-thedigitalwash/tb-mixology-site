"use client";

import ImageCarousel from "@/components/ImageCarousel";
import { cocktailPhotos } from "@/lib/data/events";

export default function DrinkPhotos() {
  return (
    <ImageCarousel
      images={cocktailPhotos}
      aspect="aspect-square"
      lightboxMaxWidth="min(600px, 85vw)"
    />
  );
}
