interface PricingCardProps {
  name: string;
  price: string;
  note?: string;
}

export default function PricingCard({ name, price, note }: PricingCardProps) {
  return (
    <div className="border border-warm-gray/30 rounded-sm px-4 py-3 flex justify-between items-start gap-4">
      <div>
        <span className="font-body text-sm text-primary">{name}</span>
        {note && (
          <span className="block font-body text-xs text-warm-gray mt-1">{note}</span>
        )}
      </div>
      <span className="font-body text-sm font-semibold text-primary whitespace-nowrap">
        {price}
      </span>
    </div>
  );
}
