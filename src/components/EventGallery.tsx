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

function Img({ img, sizes, className, style }: { img: EventImage; sizes: string; className?: string; style?: React.CSSProperties }) {
  return (
    <div className={`overflow-hidden rounded-sm relative ${className || ""}`} style={style}>
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
    /* ── Wedding: 9 images ──
       8-col grid, 3 rows
       Row 1: bride(P) | girlfriends(P) | guests(P) | bride-groom(P) — four portraits
       Row 2: bar-menu(L) | bar-setup(L)
       Row 3: toast(L) | bride-at-bar(L) | martini(P, same height)
    */
    case "wedding":
      return (
        <>
          <MobileStack images={imgs} />
          <div
            className="hidden md:grid gap-3"
            style={{
              gridTemplateColumns: "repeat(8, 1fr)",
              gridTemplateRows: "auto auto auto",
            }}
          >
            <Img img={imgs[0]} sizes="25vw" style={{ gridColumn: "1 / 3", gridRow: "1", aspectRatio: "3/4" }} />
            <Img img={imgs[1]} sizes="25vw" style={{ gridColumn: "3 / 5", gridRow: "1", aspectRatio: "3/4" }} />
            <Img img={imgs[2]} sizes="25vw" style={{ gridColumn: "5 / 7", gridRow: "1", aspectRatio: "3/4" }} />
            <Img img={imgs[3]} sizes="25vw" style={{ gridColumn: "7 / 9", gridRow: "1", aspectRatio: "3/4" }} />
            <Img img={imgs[4]} sizes="50vw" style={{ gridColumn: "1 / 5", gridRow: "2", aspectRatio: "3/2" }} />
            <Img img={imgs[5]} sizes="50vw" style={{ gridColumn: "5 / 9", gridRow: "2", aspectRatio: "3/2" }} />
            <Img img={imgs[6]} sizes="33vw" style={{ gridColumn: "1 / 4", gridRow: "3", aspectRatio: "3/2" }} />
            <Img img={imgs[7]} sizes="33vw" style={{ gridColumn: "4 / 7", gridRow: "3", aspectRatio: "3/2" }} />
            <Img img={imgs[8]} sizes="25vw" style={{ gridColumn: "7 / 9", gridRow: "3" }} />
          </div>
        </>
      );

    /* ── Christmas: 10 images ──
       12-col grid, 4 rows
       Row 1: menu | sparkle | feather boa — three equal landscapes
       Row 2: group toast | ice sphere crafting — two equal landscapes
       Row 3: smoked cranberry hero (9col) | ice sphere (P, 3col 2row)
       Row 4: laughing cheers | fireside | bartender(P) | ice sphere continues
    */
    case "christmas":
      return (
        <>
          <MobileStack images={imgs} />
          <div
            className="hidden md:grid gap-3"
            style={{
              gridTemplateColumns: "repeat(12, 1fr)",
              gridTemplateRows: "auto auto auto auto",
            }}
          >
            <Img img={imgs[0]} sizes="33vw" style={{ gridColumn: "1 / 5", gridRow: "1", aspectRatio: "3/2" }} />
            <Img img={imgs[1]} sizes="33vw" style={{ gridColumn: "5 / 9", gridRow: "1", aspectRatio: "3/2" }} />
            <Img img={imgs[2]} sizes="33vw" style={{ gridColumn: "9 / 13", gridRow: "1", aspectRatio: "3/2" }} />
            <Img img={imgs[3]} sizes="50vw" style={{ gridColumn: "1 / 7", gridRow: "2", aspectRatio: "3/2" }} />
            <Img img={imgs[4]} sizes="50vw" style={{ gridColumn: "7 / 13", gridRow: "2", aspectRatio: "3/2" }} />
            <Img img={imgs[5]} sizes="75vw" style={{ gridColumn: "1 / 10", gridRow: "3", aspectRatio: "21/9" }} />
            <Img img={imgs[6]} sizes="25vw" style={{ gridColumn: "10 / 13", gridRow: "3 / 5", aspectRatio: "3/5" }} />
            <Img img={imgs[7]} sizes="25vw" style={{ gridColumn: "1 / 4", gridRow: "4", aspectRatio: "3/2" }} />
            <Img img={imgs[8]} sizes="25vw" style={{ gridColumn: "4 / 7", gridRow: "4", aspectRatio: "3/2" }} />
            <Img img={imgs[9]} sizes="25vw" style={{ gridColumn: "7 / 10", gridRow: "4", aspectRatio: "3/4" }} />
          </div>
        </>
      );

    /* ── Birthday: 5 images (all landscape) ──
       3-col grid, 2 rows
       Row 1: friends cheers hero (2col) | bartenders (1col)
       Row 2: group shots | charcuterie | rooftop
    */
    case "birthday":
      return (
        <>
          <MobileStack images={imgs} />
          <div
            className="hidden md:grid gap-3"
            style={{
              gridTemplateColumns: "repeat(3, 1fr)",
              gridTemplateRows: "auto auto",
            }}
          >
            <Img img={imgs[0]} sizes="66vw" style={{ gridColumn: "1 / 3", gridRow: "1", aspectRatio: "2/1" }} />
            <Img img={imgs[1]} sizes="33vw" style={{ gridColumn: "3", gridRow: "1", aspectRatio: "1/1" }} />
            <Img img={imgs[2]} sizes="33vw" style={{ gridColumn: "1", gridRow: "2", aspectRatio: "3/2" }} />
            <Img img={imgs[3]} sizes="33vw" style={{ gridColumn: "2", gridRow: "2", aspectRatio: "3/2" }} />
            <Img img={imgs[4]} sizes="33vw" style={{ gridColumn: "3", gridRow: "2", aspectRatio: "3/2" }} />
          </div>
        </>
      );

    /* ── Grand Prix: 7 images (5L + 2P) ──
       6-col grid, 4 rows
       Row 1: couple penthouse (4col) | couple dress (P, 2col rows 1-2)
       Row 2: cheers closeup (4col) | dress continues
       Row 3: marina aerial hero (4col) | bartender pour (P, 2col rows 3-4)
       Row 4: racing outfits (2col) | balcony friends (2col) | pour continues
    */
    case "grand-prix":
      return (
        <>
          <MobileStack images={imgs} />
          <div
            className="hidden md:grid gap-3"
            style={{
              gridTemplateColumns: "repeat(6, 1fr)",
              gridTemplateRows: "auto auto auto auto",
            }}
          >
            <Img img={imgs[0]} sizes="66vw" style={{ gridColumn: "1 / 5", gridRow: "1", aspectRatio: "21/9" }} />
            <Img img={imgs[1]} sizes="33vw" style={{ gridColumn: "5 / 7", gridRow: "1 / 3" }} />
            <Img img={imgs[2]} sizes="66vw" style={{ gridColumn: "1 / 5", gridRow: "2", aspectRatio: "21/9" }} />
            <Img img={imgs[3]} sizes="66vw" style={{ gridColumn: "1 / 5", gridRow: "3", aspectRatio: "16/9" }} />
            <Img img={imgs[4]} sizes="33vw" style={{ gridColumn: "5 / 7", gridRow: "3 / 5", aspectRatio: "3/4" }} />
            <Img img={imgs[5]} sizes="33vw" style={{ gridColumn: "1 / 3", gridRow: "4", aspectRatio: "3/2" }} />
            <Img img={imgs[6]} sizes="33vw" style={{ gridColumn: "3 / 5", gridRow: "4", aspectRatio: "3/2" }} />
          </div>
        </>
      );

    /* ── Gasparilla: 3 portraits ── */
    case "three-portrait":
      return (
        <>
          <MobileStack images={imgs} />
          <div className="hidden md:grid grid-cols-3 gap-3">
            {imgs.map((img) => (
              <Img key={img.src} img={img} sizes="33vw" className="aspect-[2/3]" />
            ))}
          </div>
        </>
      );

    /* ── Halloween: 3 images (all landscape) ──
       Hero full-width top, two equal below
    */
    case "halloween":
      return (
        <>
          <MobileStack images={imgs} />
          <div className="hidden md:grid grid-cols-2 gap-3">
            <Img img={imgs[0]} sizes="100vw" style={{ gridColumn: "1 / 3", aspectRatio: "21/9" }} />
            <Img img={imgs[1]} sizes="50vw" className="aspect-[3/2]" />
            <Img img={imgs[2]} sizes="50vw" className="aspect-[3/2]" />
          </div>
        </>
      );

    /* ── Rays: 7 images (all landscape) ──
       4-col grid, 3 rows
       Row 1: instructor hero (2col) | cocktails lineup hero (2col)
       Row 2: bartenders cheers | team mixing | spritz cheers (3 equal, but spanning 4 cols with fractional)
       Row 3: jigger (2col) | two women (2col)
       Actually simpler: use a mix approach
    */
    case "rays":
      return (
        <>
          <MobileStack images={imgs} />
          <div
            className="hidden md:grid gap-3"
            style={{
              gridTemplateColumns: "repeat(6, 1fr)",
              gridTemplateRows: "auto auto auto",
            }}
          >
            <Img img={imgs[0]} sizes="50vw" style={{ gridColumn: "1 / 4", gridRow: "1", aspectRatio: "3/2" }} />
            <Img img={imgs[1]} sizes="50vw" style={{ gridColumn: "4 / 7", gridRow: "1", aspectRatio: "3/2" }} />
            <Img img={imgs[2]} sizes="33vw" style={{ gridColumn: "1 / 3", gridRow: "2", aspectRatio: "3/2" }} />
            <Img img={imgs[3]} sizes="33vw" style={{ gridColumn: "3 / 5", gridRow: "2", aspectRatio: "3/2" }} />
            <Img img={imgs[4]} sizes="33vw" style={{ gridColumn: "5 / 7", gridRow: "2", aspectRatio: "3/2" }} />
            <Img img={imgs[5]} sizes="50vw" style={{ gridColumn: "1 / 4", gridRow: "3", aspectRatio: "3/2" }} />
            <Img img={imgs[6]} sizes="50vw" style={{ gridColumn: "4 / 7", gridRow: "3", aspectRatio: "3/2" }} />
          </div>
        </>
      );

    /* ── Mocktail: 10 images (4L + 6P) ──
       4-col grid, 3 rows
       Row 1: mural(P) | trio rustic(L, 2col) | purple industrial(P)
       Row 2: garnished pair(L, 2col) | duo(P) | pineapple(P)
       Row 3: corporate trio(L) | group photo(P) | overhead cheers(P) | tropical trio(L)
    */
    case "mocktail":
      return (
        <>
          <MobileStack images={imgs} />
          <div
            className="hidden md:grid gap-3"
            style={{
              gridTemplateColumns: "repeat(4, 1fr)",
              gridTemplateRows: "auto auto auto",
            }}
          >
            <Img img={imgs[0]} sizes="25vw" style={{ gridColumn: "1", gridRow: "1", aspectRatio: "3/4" }} />
            <Img img={imgs[1]} sizes="50vw" style={{ gridColumn: "2 / 4", gridRow: "1", aspectRatio: "3/2" }} />
            <Img img={imgs[2]} sizes="25vw" style={{ gridColumn: "4", gridRow: "1", aspectRatio: "3/4" }} />
            <Img img={imgs[3]} sizes="50vw" style={{ gridColumn: "1 / 3", gridRow: "2", aspectRatio: "3/2" }} />
            <Img img={imgs[4]} sizes="25vw" style={{ gridColumn: "3", gridRow: "2" }} />
            <Img img={imgs[5]} sizes="25vw" style={{ gridColumn: "4", gridRow: "2" }} />
            <Img img={imgs[6]} sizes="25vw" style={{ gridColumn: "1", gridRow: "3", aspectRatio: "3/2" }} />
            <Img img={imgs[7]} sizes="25vw" style={{ gridColumn: "2", gridRow: "3" }} />
            <Img img={imgs[8]} sizes="25vw" style={{ gridColumn: "3", gridRow: "3" }} />
            <Img img={imgs[9]} sizes="25vw" style={{ gridColumn: "4", gridRow: "3", aspectRatio: "3/2" }} />
          </div>
        </>
      );

    /* ── Kawha: 3 images (all landscape) ──
       Hero cheers full-width top, two equal below
    */
    case "kawha":
      return (
        <>
          <MobileStack images={imgs} />
          <div className="hidden md:grid grid-cols-2 gap-3">
            <Img img={imgs[0]} sizes="100vw" style={{ gridColumn: "1 / 3", aspectRatio: "21/9" }} />
            <Img img={imgs[1]} sizes="50vw" className="aspect-[3/2]" />
            <Img img={imgs[2]} sizes="50vw" className="aspect-[3/2]" />
          </div>
        </>
      );

    /* ── Med Spa: 5 images (3P + 2L) ──
       4-col grid, 2 rows
       Row 1: caviar prep (P) | caviar guest (L, 2col) | champagne server (P)
       Row 2: water dispensers (P) | bartender shaking (L, spanning remaining)
    */
    case "med-spa":
      return (
        <>
          <MobileStack images={imgs} />
          <div
            className="hidden md:grid gap-3"
            style={{
              gridTemplateColumns: "repeat(4, 1fr)",
              gridTemplateRows: "auto auto",
            }}
          >
            <Img img={imgs[0]} sizes="25vw" style={{ gridColumn: "1", gridRow: "1", aspectRatio: "3/4" }} />
            <Img img={imgs[1]} sizes="50vw" style={{ gridColumn: "2 / 4", gridRow: "1", aspectRatio: "3/2" }} />
            <Img img={imgs[2]} sizes="25vw" style={{ gridColumn: "4", gridRow: "1", aspectRatio: "3/4" }} />
            <Img img={imgs[3]} sizes="25vw" style={{ gridColumn: "1", gridRow: "2", aspectRatio: "3/4" }} />
            <Img img={imgs[4]} sizes="75vw" style={{ gridColumn: "2 / 5", gridRow: "2" }} />
          </div>
        </>
      );

    /* ── Fallback: equal grid ── */
    case "three-equal":
    default:
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
