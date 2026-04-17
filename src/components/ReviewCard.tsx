import { Star } from "lucide-react";

interface ReviewCardProps {
  quote: string;
  name: string;
  eventType: string;
  stars?: number;
  light?: boolean;
}

export default function ReviewCard({
  quote,
  name,
  eventType,
  stars = 5,
  light,
}: ReviewCardProps) {
  return (
    <div className={`border ${light ? "border-white/10" : "border-warm-gray/20"} p-6 md:p-8 rounded-sm h-full flex flex-col`}>
      <div className="flex gap-1 mb-4">
        {Array.from({ length: stars }).map((_, i) => (
          <Star key={i} size={16} className="fill-accent text-accent" />
        ))}
      </div>
      <p className={`font-accent text-lg leading-relaxed mb-5 italic flex-1 ${light ? "text-secondary" : "text-primary"}`}>
        &ldquo;{quote}&rdquo;
      </p>
      <div>
        <p className={`font-body text-sm font-medium ${light ? "text-secondary" : "text-primary"}`}>{name}</p>
        <p className={`font-body text-xs ${light ? "text-white/50" : "text-warm-gray"}`}>{eventType}</p>
      </div>
    </div>
  );
}
