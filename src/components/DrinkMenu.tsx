"use client";

import { useState } from "react";
import FadeIn from "@/components/FadeIn";
import { TABS, spiritDrinks, buildYourOwn, type Tab } from "@/lib/data/drinks";

function FlavorChip({ label }: { label: string }) {
  return (
    <span className="bg-primary/5 text-primary text-xs px-3 py-1 rounded-full">
      {label}
    </span>
  );
}

export default function DrinkMenu() {
  const [active, setActive] = useState<Tab>("Vodka");

  return (
    <div>
      {/* Tabs */}
      <div className="flex overflow-x-auto gap-6 border-b border-warm-gray/20 mb-12 -mx-6 px-6 scrollbar-hide">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`whitespace-nowrap pb-3 text-sm tracking-[0.1em] uppercase font-body transition-colors duration-200 ease-out ${
              active === tab
                ? "border-b-2 border-accent text-primary"
                : "text-warm-gray hover:text-primary"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Spirit tabs */}
      {active !== "Build Your Own" &&
        spiritDrinks[active].map((drink) => (
          <FadeIn key={drink.name}>
            <div className="border-b border-warm-gray/15 pb-6 mb-6 last:border-0">
              <h3 className="font-heading text-2xl text-primary mb-1">
                {drink.name}
              </h3>
              <p className="font-accent italic text-warm-gray mb-4">
                {drink.base}
              </p>
              <div className="flex flex-wrap gap-2">
                {drink.flavors.map((f) => (
                  <FlavorChip key={f} label={f} />
                ))}
              </div>
            </div>
          </FadeIn>
        ))}

      {/* Build Your Own tab */}
      {active === "Build Your Own" &&
        buildYourOwn.map((item) => (
          <FadeIn key={item.name}>
            <div className="border-b border-warm-gray/15 pb-6 mb-6 last:border-0">
              <h3 className="font-heading text-2xl text-primary mb-1">
                {item.name}
              </h3>
              <p className="font-accent italic text-warm-gray mb-4">
                {item.base}
              </p>

              {item.sections.map((section) => (
                <div key={section.label} className="mb-4">
                  <p className="font-body text-xs tracking-[0.15em] uppercase text-warm-gray mb-2">
                    {section.label}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {section.items.map((i) => (
                      <FlavorChip key={i} label={i} />
                    ))}
                  </div>
                </div>
              ))}

              <p className="font-accent text-sm text-accent mt-2">
                {item.note}
              </p>
            </div>
          </FadeIn>
        ))}

      {/* Mocktail note */}
      <FadeIn>
        <div className="mt-12 text-center border border-warm-gray/20 rounded-sm p-8">
          <p className="font-heading text-lg text-primary mb-2">
            Mocktails Available
          </p>
          <p className="font-accent text-warm-gray">
            We always accommodate non-drinkers with crafted mocktail versions of
            any cocktail on our menu.
          </p>
        </div>
      </FadeIn>
    </div>
  );
}
