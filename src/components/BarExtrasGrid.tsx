import FadeIn from "@/components/FadeIn";
import { barExtras } from "@/lib/data/services";

export default function BarExtrasGrid() {
  return (
    <>
      <FadeIn>
        <p className="text-xs tracking-[0.2em] uppercase text-warm-gray font-body mt-10 mb-4 sm:text-center">
          Bar Extras
        </p>
      </FadeIn>

      {/* Mobile: full-width rows like PricingCard */}
      <div className="flex flex-col gap-2 sm:hidden">
        {barExtras.map((item) => (
          <FadeIn key={item.name}>
            <div className="border border-warm-gray/30 rounded-sm px-4 py-3 flex justify-between items-start gap-4">
              <span className="font-body text-sm text-primary">{item.name}</span>
              <span className="font-body text-sm font-semibold text-primary whitespace-nowrap">
                {item.price}
              </span>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Tablet+: compact centered cards */}
      <div className="hidden sm:grid sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {barExtras.map((item) => (
          <FadeIn key={item.name}>
            <div className="border border-warm-gray/20 rounded-sm px-3 py-2 text-center">
              <p className="font-body text-xs font-semibold text-primary">{item.name}</p>
              <p className="font-body text-xs text-warm-gray mt-0.5">{item.price}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </>
  );
}
