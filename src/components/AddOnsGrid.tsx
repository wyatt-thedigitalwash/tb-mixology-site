import FadeIn from "@/components/FadeIn";
import PricingCard from "@/components/PricingCard";
import {
  barSetupAddOns,
  serviceEnhancements,
  barExtras,
} from "@/lib/data/services";

const addOnCategories = [
  { title: "Bar Set Up & Essentials", items: barSetupAddOns },
  { title: "Service Enhancements", items: serviceEnhancements },
  { title: "Bar Extras", items: barExtras },
];

export default function AddOnsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {addOnCategories.map((category) => (
        <FadeIn key={category.title}>
          <div>
            <h3 className="font-body text-xs text-warm-gray uppercase tracking-wider mb-4">
              {category.title}
            </h3>
            <div className="space-y-2">
              {category.items.map((addon) => (
                <PricingCard key={addon.name} name={addon.name} price={addon.price} />
              ))}
            </div>
          </div>
        </FadeIn>
      ))}
    </div>
  );
}
