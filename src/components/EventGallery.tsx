"use client";

import { useState } from "react";
import PlaceholderImage from "@/components/PlaceholderImage";
import FadeIn from "@/components/FadeIn";

const categories = [
  "All",
  "Weddings",
  "Corporate",
  "Private Parties",
  "Brand Collaborations",
] as const;

type Category = (typeof categories)[number];

interface EventData {
  title: string;
  category: Exclude<Category, "All">;
  images: string[];
}

const events: EventData[] = [
  {
    title: "Yacht Party",
    category: "Private Parties",
    images: [
      "Yacht party photo 1 — replace",
      "Yacht party photo 2 — replace",
      "Yacht party photo 3 — replace",
      "Yacht party photo 4 — replace",
    ],
  },
  {
    title: "Halloween Soirée",
    category: "Private Parties",
    images: [
      "Halloween soirée photo 1 — replace",
      "Halloween soirée photo 2 — replace",
      "Halloween soirée photo 3 — replace",
    ],
  },
  {
    title: "Corporate Event",
    category: "Corporate",
    images: [
      "Corporate event photo 1 — replace",
      "Corporate event photo 2 — replace",
      "Corporate event photo 3 — replace",
    ],
  },
  {
    title: "Wedding Reception",
    category: "Weddings",
    images: [
      "Wedding reception photo 1 — replace",
      "Wedding reception photo 2 — replace",
      "Wedding reception photo 3 — replace",
      "Wedding reception photo 4 — replace",
    ],
  },
  {
    title: "Bachelorette Party",
    category: "Private Parties",
    images: [
      "Bachelorette party photo 1 — replace",
      "Bachelorette party photo 2 — replace",
      "Bachelorette party photo 3 — replace",
    ],
  },
  {
    title: "Kawha Coffee Collaboration",
    category: "Brand Collaborations",
    images: [
      "Kawha Coffee collab photo 1 — replace",
      "Kawha Coffee collab photo 2 — replace",
      "Kawha Coffee collab photo 3 — replace",
    ],
  },
  {
    title: "Tampa Bay Rays Event",
    category: "Brand Collaborations",
    images: [
      "Tampa Bay Rays event photo 1 — replace",
      "Tampa Bay Rays event photo 2 — replace",
      "Tampa Bay Rays event photo 3 — replace",
    ],
  },
];

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
            className={`px-5 py-2 text-sm font-body tracking-wide transition-colors rounded-sm ${
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
