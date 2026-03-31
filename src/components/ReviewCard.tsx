import { Star } from "lucide-react";

interface ReviewCardProps {
  quote: string;
  name: string;
  eventType: string;
  stars?: number;
}

export default function ReviewCard({
  quote,
  name,
  eventType,
  stars = 5,
}: ReviewCardProps) {
  return (
    <div className="border border-warm-gray/20 p-6 md:p-8 rounded-sm h-full flex flex-col">
      <div className="flex gap-1 mb-4">
        {Array.from({ length: stars }).map((_, i) => (
          <Star key={i} size={16} className="fill-accent text-accent" />
        ))}
      </div>
      <p className="font-accent text-lg text-primary leading-relaxed mb-5 italic flex-1">
        &ldquo;{quote}&rdquo;
      </p>
      <div>
        <p className="font-body text-sm font-medium text-primary">{name}</p>
        <p className="font-body text-xs text-warm-gray">{eventType}</p>
      </div>
    </div>
  );
}
