import Link from "next/link";

interface TierCardProps {
  tier: number;
  name: string;
  price: string;
  features: string[];
  perfectFor: string;
  showLink?: boolean;
}

export default function TierCard({
  tier,
  name,
  price,
  features,
  perfectFor,
  showLink = false,
}: TierCardProps) {
  return (
    <div className="bg-surface border-l-4 border-sage rounded-lg p-8 md:p-10">
      <div className="flex items-center gap-4 mb-6">
        <span className="text-xs tracking-[0.25em] uppercase text-sage font-body">
          Tier {tier}
        </span>
        <span className="h-px flex-1 bg-sand" />
      </div>

      <h3 className="font-heading text-3xl md:text-4xl text-text mb-2">
        {name}
      </h3>
      <p className="text-terracotta text-lg font-body font-medium mb-8">{price}</p>

      <ul className="space-y-3 mb-8">
        {features.map((feature, i) => (
          <li
            key={i}
            className="text-text-muted text-sm font-body flex items-start gap-3"
          >
            <span className="text-sage mt-1 shrink-0">—</span>
            {feature}
          </li>
        ))}
      </ul>

      <div className="border-t border-sand pt-6">
        <p className="text-text-muted text-sm italic font-body">
          Perfect for: {perfectFor}
        </p>
      </div>

      {showLink && (
        <Link
          href="/services"
          className="inline-block mt-6 text-terracotta text-sm tracking-[0.15em] uppercase font-body hover:text-hover transition-colors"
        >
          See Full Details →
        </Link>
      )}
    </div>
  );
}
