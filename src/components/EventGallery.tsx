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

function Img({ img, sizes, className }: { img: EventImage; sizes: string; className?: string }) {
  return (
    <div className={`overflow-hidden rounded-sm relative ${className || ""}`}>
      <Image
        src={img.src}
        alt={img.alt}
        fill
        sizes={sizes}
        className="object-cover hover:scale-105 transition-transform duration-500 ease-out"
      />
    </div>
  );
}

function MobileStack({ images }: { images: EventImage[] }) {
  return (
    <div className="flex flex-col gap-3 md:hidden">
      {images.map((img) => {
        const isPortrait = img.height > img.width;
        return (
          <div
            key={img.src}
            className={`overflow-hidden rounded-sm relative ${isPortrait ? "aspect-[3/4]" : "aspect-[3/2]"}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        );
      })}
    </div>
  );
}

function EventGrid({ event }: { event: EventData }) {
  const imgs = event.images;

  switch (event.layout) {
    case "grid-2x2":
      return (
        <>
          <MobileStack images={imgs} />
          <div className="hidden md:grid grid-cols-2 gap-3 aspect-[2/1]">
            {imgs.map((img) => (
              <Img key={img.src} img={img} sizes="50vw" />
            ))}
          </div>
        </>
      );

    case "portrait-left-3":
      return (
        <>
          <MobileStack images={imgs} />
          <div className="hidden md:grid grid-cols-2 grid-rows-[1fr_1fr_auto] gap-3" style={{ aspectRatio: "3/2" }}>
            <Img img={imgs[0]} sizes="50vw" className="row-span-2" />
            <Img img={imgs[1]} sizes="50vw" />
            <Img img={imgs[2]} sizes="50vw" />
            {imgs[3] && <Img img={imgs[3]} sizes="100vw" className="col-span-2 aspect-[3/1]" />}
          </div>
        </>
      );

    case "portrait-right-3":
      return (
        <>
          <MobileStack images={imgs} />
          <div className="hidden md:grid grid-cols-2 grid-rows-[1fr_1fr_auto] gap-3" style={{ aspectRatio: "3/2" }}>
            <Img img={imgs[0]} sizes="50vw" />
            <Img img={imgs[2]} sizes="50vw" className="row-span-2" />
            <Img img={imgs[1]} sizes="50vw" />
            {imgs[3] && <Img img={imgs[3]} sizes="100vw" className="col-span-2 aspect-[3/1]" />}
          </div>
        </>
      );

    case "portrait-left-2":
      return (
        <>
          <MobileStack images={imgs} />
          <div className="hidden md:grid grid-cols-2 grid-rows-2 gap-3" style={{ aspectRatio: "2/1.2" }}>
            <Img img={imgs[0]} sizes="50vw" className="row-span-2" />
            <Img img={imgs[1]} sizes="50vw" />
            <Img img={imgs[2]} sizes="50vw" />
          </div>
        </>
      );

    case "two-portrait-two-landscape":
      return (
        <>
          <MobileStack images={imgs} />
          <div className="hidden md:grid grid-cols-3 grid-rows-2 gap-3" style={{ aspectRatio: "3/1.6" }}>
            <Img img={imgs[0]} sizes="33vw" className="row-span-2" />
            <Img img={imgs[1]} sizes="33vw" />
            <Img img={imgs[3]} sizes="33vw" className="row-span-2" />
            <Img img={imgs[2]} sizes="33vw" />
          </div>
        </>
      );

    case "hero-top-2":
      return (
        <>
          <MobileStack images={imgs} />
          <div className="hidden md:grid grid-cols-2 gap-3">
            <Img img={imgs[0]} sizes="100vw" className="col-span-2 aspect-[2.5/1]" />
            <Img img={imgs[1]} sizes="50vw" className="aspect-[3/2]" />
            <Img img={imgs[2]} sizes="50vw" className="aspect-[3/2]" />
          </div>
        </>
      );

    case "landscape-top-2-portrait":
      return (
        <>
          <MobileStack images={imgs} />
          <div className="hidden md:grid grid-cols-2 gap-3">
            <Img img={imgs[0]} sizes="100vw" className="col-span-2 aspect-[2.5/1]" />
            <Img img={imgs[1]} sizes="50vw" className="aspect-[3/4]" />
            <Img img={imgs[2]} sizes="50vw" className="aspect-[3/4]" />
          </div>
        </>
      );

    case "three-equal":
      return (
        <>
          <MobileStack images={imgs} />
          <div className="hidden md:grid grid-cols-3 gap-3">
            {imgs.map((img) => (
              <Img key={img.src} img={img} sizes="33vw" className="aspect-[3/2]" />
            ))}
          </div>
        </>
      );

    case "three-top-portrait-bottom":
      return (
        <>
          <MobileStack images={imgs} />
          <div className="hidden md:flex md:flex-col gap-3">
            <div className="grid grid-cols-3 gap-3">
              {imgs.slice(0, 3).map((img) => (
                <Img key={img.src} img={img} sizes="33vw" className="aspect-[3/2]" />
              ))}
            </div>
            {imgs[3] && (
              <div className="flex justify-center">
                <div className="overflow-hidden rounded-sm relative w-1/3 aspect-[3/4]">
                  <Image
                    src={imgs[3].src}
                    alt={imgs[3].alt}
                    fill
                    sizes="33vw"
                    className="object-cover hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>
              </div>
            )}
          </div>
        </>
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
