interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? "text-center" : ""}`}>
      {label && (
        <p
          className={`text-xs tracking-[0.25em] uppercase font-body mb-3 ${
            light ? "text-white/60" : "text-warm-gray"
          }`}
        >
          {label}
        </p>
      )}
      <h2
        className={`font-heading text-3xl md:text-5xl ${
          light ? "text-white" : "text-primary"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`font-accent text-lg md:text-xl mt-4 max-w-2xl ${
            centered ? "mx-auto" : ""
          } ${light ? "text-white/70" : "text-warm-gray"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
