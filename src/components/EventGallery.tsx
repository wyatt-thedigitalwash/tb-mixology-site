"use client";

import { useState } from "react";
import PlaceholderImage from "@/components/PlaceholderImage";
import FadeIn from "@/components/FadeIn";
import { categories, events, type Category } from "@/lib/data/events";

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
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {event.images.map((label, i) => (
                <PlaceholderImage
                  key={i}
                  label={label}
                  aspect="square"
                />
              ))}
            </div>
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
