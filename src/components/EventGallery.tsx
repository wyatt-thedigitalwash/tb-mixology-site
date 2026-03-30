"use client";

import { useState } from "react";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import {
  categories,
  events,
  type Category,
  type EventData,
  type EventImage,
} from "@/lib/data/events";

function GalleryImage({ img, className }: { img: EventImage; className?: string }) {
  return (
    <div className={`overflow-hidden rounded-sm relative ${className || ""}`}>
      <Image
        src={img.src}
        alt={img.alt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover hover:scale-105 transition-transform duration-500 ease-out"
      />
    </div>
  );
}

function EventGrid({ event }: { event: EventData }) {
  const imgs = event.images;

  switch (event.layout) {
    /* 4 landscape images in a 2x2 grid */
    case "grid-2x2":
      return (
        <div className="grid grid-cols-2 gap-3 aspect-[2/1]">
          {imgs.map((img) => (
            <GalleryImage key={img.src} img={img} />
          ))}
        </div>
      );

    /* Portrait left spanning 2 rows, 2 landscapes stacked right, 1 landscape full-width bottom */
    case "portrait-left-3":
      return (
        <div className="grid grid-cols-2 grid-rows-[1fr_1fr_auto] gap-3" style={{ aspectRatio: "3/2" }}>
          <div className="row-span-2 overflow-hidden rounded-sm relative">
            <Image src={imgs[0].src} alt={imgs[0].alt} fill sizes="50vw" className="object-cover hover:scale-105 transition-transform duration-500 ease-out" />
          </div>
          <div className="overflow-hidden rounded-sm relative">
            <Image src={imgs[1].src} alt={imgs[1].alt} fill sizes="50vw" className="object-cover hover:scale-105 transition-transform duration-500 ease-out" />
          </div>
          <div className="overflow-hidden rounded-sm relative">
            <Image src={imgs[2].src} alt={imgs[2].alt} fill sizes="50vw" className="object-cover hover:scale-105 transition-transform duration-500 ease-out" />
          </div>
          {imgs[3] && (
            <div className="col-span-2 overflow-hidden rounded-sm relative aspect-[3/1]">
              <Image src={imgs[3].src} alt={imgs[3].alt} fill sizes="100vw" className="object-cover hover:scale-105 transition-transform duration-500 ease-out" />
            </div>
          )}
        </div>
      );

    /* 2 landscapes stacked left, portrait right spanning 2 rows, 1 landscape full-width bottom */
    case "portrait-right-3":
      return (
        <div className="grid grid-cols-2 grid-rows-[1fr_1fr_auto] gap-3" style={{ aspectRatio: "3/2" }}>
          <div className="overflow-hidden rounded-sm relative">
            <Image src={imgs[0].src} alt={imgs[0].alt} fill sizes="50vw" className="object-cover hover:scale-105 transition-transform duration-500 ease-out" />
          </div>
          <div className="row-span-2 overflow-hidden rounded-sm relative">
            <Image src={imgs[2].src} alt={imgs[2].alt} fill sizes="50vw" className="object-cover hover:scale-105 transition-transform duration-500 ease-out" />
          </div>
          <div className="overflow-hidden rounded-sm relative">
            <Image src={imgs[1].src} alt={imgs[1].alt} fill sizes="50vw" className="object-cover hover:scale-105 transition-transform duration-500 ease-out" />
          </div>
          {imgs[3] && (
            <div className="col-span-2 overflow-hidden rounded-sm relative aspect-[3/1]">
              <Image src={imgs[3].src} alt={imgs[3].alt} fill sizes="100vw" className="object-cover hover:scale-105 transition-transform duration-500 ease-out" />
            </div>
          )}
        </div>
      );

    /* Portrait left, 2 landscapes stacked right */
    case "portrait-left-2":
      return (
        <div className="grid grid-cols-2 grid-rows-2 gap-3" style={{ aspectRatio: "2/1.2" }}>
          <div className="row-span-2 overflow-hidden rounded-sm relative">
            <Image src={imgs[0].src} alt={imgs[0].alt} fill sizes="50vw" className="object-cover hover:scale-105 transition-transform duration-500 ease-out" />
          </div>
          <div className="overflow-hidden rounded-sm relative">
            <Image src={imgs[1].src} alt={imgs[1].alt} fill sizes="50vw" className="object-cover hover:scale-105 transition-transform duration-500 ease-out" />
          </div>
          <div className="overflow-hidden rounded-sm relative">
            <Image src={imgs[2].src} alt={imgs[2].alt} fill sizes="50vw" className="object-cover hover:scale-105 transition-transform duration-500 ease-out" />
          </div>
        </div>
      );

    /* 2 portraits on the sides, 2 landscapes stacked in the middle */
    case "two-portrait-two-landscape":
      return (
        <div className="grid grid-cols-3 grid-rows-2 gap-3" style={{ aspectRatio: "3/1.6" }}>
          <div className="row-span-2 overflow-hidden rounded-sm relative">
            <Image src={imgs[0].src} alt={imgs[0].alt} fill sizes="33vw" className="object-cover hover:scale-105 transition-transform duration-500 ease-out" />
          </div>
          <div className="overflow-hidden rounded-sm relative">
            <Image src={imgs[1].src} alt={imgs[1].alt} fill sizes="33vw" className="object-cover hover:scale-105 transition-transform duration-500 ease-out" />
          </div>
          <div className="row-span-2 overflow-hidden rounded-sm relative">
            <Image src={imgs[3].src} alt={imgs[3].alt} fill sizes="33vw" className="object-cover hover:scale-105 transition-transform duration-500 ease-out" />
          </div>
          <div className="overflow-hidden rounded-sm relative">
            <Image src={imgs[2].src} alt={imgs[2].alt} fill sizes="33vw" className="object-cover hover:scale-105 transition-transform duration-500 ease-out" />
          </div>
        </div>
      );

    /* 1 landscape full-width hero top, 2 landscape half-width bottom */
    case "hero-top-2":
      return (
        <div className="grid grid-cols-2 gap-3">
          <div className="col-span-2 overflow-hidden rounded-sm relative aspect-[2.5/1]">
            <Image src={imgs[0].src} alt={imgs[0].alt} fill sizes="100vw" className="object-cover hover:scale-105 transition-transform duration-500 ease-out" />
          </div>
          <div className="overflow-hidden rounded-sm relative aspect-[3/2]">
            <Image src={imgs[1].src} alt={imgs[1].alt} fill sizes="50vw" className="object-cover hover:scale-105 transition-transform duration-500 ease-out" />
          </div>
          <div className="overflow-hidden rounded-sm relative aspect-[3/2]">
            <Image src={imgs[2].src} alt={imgs[2].alt} fill sizes="50vw" className="object-cover hover:scale-105 transition-transform duration-500 ease-out" />
          </div>
        </div>
      );

    /* 1 landscape full-width top, 2 portraits side by side bottom */
    case "landscape-top-2-portrait":
      return (
        <div className="grid grid-cols-2 gap-3">
          <div className="col-span-2 overflow-hidden rounded-sm relative aspect-[2.5/1]">
            <Image src={imgs[0].src} alt={imgs[0].alt} fill sizes="100vw" className="object-cover hover:scale-105 transition-transform duration-500 ease-out" />
          </div>
          <div className="overflow-hidden rounded-sm relative aspect-[3/4]">
            <Image src={imgs[1].src} alt={imgs[1].alt} fill sizes="50vw" className="object-cover hover:scale-105 transition-transform duration-500 ease-out" />
          </div>
          <div className="overflow-hidden rounded-sm relative aspect-[3/4]">
            <Image src={imgs[2].src} alt={imgs[2].alt} fill sizes="50vw" className="object-cover hover:scale-105 transition-transform duration-500 ease-out" />
          </div>
        </div>
      );

    default:
      return null;
  }
}

export default function EventGallery() {
  const [active, setActive] = useState<Category>("All");

  const filtered =
    active === "All"
      ? events
      : events.filter((e) => e.category === active);

  return (
    <div>
      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-16">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-5 py-2 text-sm font-body tracking-wide transition-colors duration-200 ease-out rounded-sm ${
              active === cat
                ? "bg-accent text-white"
                : "border border-warm-gray/30 text-warm-gray hover:border-accent hover:text-accent"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Event Sections */}
      <div className="space-y-20">
        {filtered.map((event) => (
          <FadeIn key={event.title}>
            <h3 className="font-heading text-2xl md:text-3xl text-primary mb-2">
              {event.title}
            </h3>
            <p className="font-body text-sm text-warm-gray mb-6">
              {event.category}
            </p>
            <EventGrid event={event} />
          </FadeIn>
        ))}
      </div>

      {/* Notable Collaborations Note */}
      <div className="mt-24 text-center">
        <p className="font-accent text-lg text-warm-gray italic">
          Notable collaborations include Kawha Coffee Roastery and the Tampa Bay
          Rays
        </p>
      </div>
    </div>
  );
}
