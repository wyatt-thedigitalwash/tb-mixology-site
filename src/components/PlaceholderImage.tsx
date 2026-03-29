interface PlaceholderImageProps {
  label: string;
  className?: string;
  aspect?: "video" | "square" | "portrait";
}

export default function PlaceholderImage({
  label,
  className = "",
  aspect = "video",
}: PlaceholderImageProps) {
  const aspectClass =
    aspect === "square"
      ? "aspect-square"
      : aspect === "portrait"
        ? "aspect-[3/4]"
        : "aspect-video";

  return (
    <div
      className={`bg-[#3a3a3a] flex items-center justify-center ${aspectClass} ${className}`}
    >
      <span className="text-white/50 text-sm font-body text-center px-4">
        {label}
      </span>
    </div>
  );
}
