import Link from "next/link";

interface TierCardProps {
  tier: number;
  name: string;
  price: string;
  features: string[];
  perfectFor: string;
  showLink?: boolean;
  compact?: boolean;
}

export default function TierCard({
  tier,
  name,
  price,
  features,
  perfectFor,
  showLink = false,
  compact = false,
}: TierCardProps) {
  return (
    <div className="border border-warm-gray/30 p-6 md:p-8 rounded-sm hover:border-accent/50 transition-colors duration-200 ease-out">
      <div className="flex items-baseline gap-3 mb-1">
        <span className="text-xs tracking-[0.2em] uppercase text-warm-gray font-body">
          Tier {tier}
        </span>
      </div>
      <h3 className="font-heading text-2xl md:text-3xl text-primary mb-1">
        {name}
      </h3>
      <p className="font-accent text-lg text-accent mb-5">{price}</p>

      <ul className={`space-y-2 mb-5 ${compact ? "text-sm" : ""}`}>
        {features.map((f) => (
          <li key={f} className="text-warm-gray font-body text-sm flex items-start gap-2">
            <span className="text-accent mt-1 shrink-0">&#8226;</span>
            {f}
          </li>
        ))}
      </ul>

      <p className="text-sm font-accent italic text-warm-gray">
        Perfect for: {perfectFor}
      </p>

      {showLink && (
        <Link
          href="/services/bartending"
          className="inline-block mt-5 text-sm font-body text-primary hover:text-accent transition-colors duration-200 ease-out tracking-wide"
        >
          See Full Details &rarr;
        </Link>
      )}
    </div>
  );
}
