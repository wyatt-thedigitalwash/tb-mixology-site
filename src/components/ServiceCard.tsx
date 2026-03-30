import Link from "next/link";
import PlaceholderImage from "./PlaceholderImage";

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  imageLabel: string;
}

export default function ServiceCard({
  title,
  description,
  href,
  imageLabel,
}: ServiceCardProps) {
  return (
    <Link href={href} className="group block">
      <div className="overflow-hidden rounded-sm">
        {/* REPLACE: service photo */}
        <PlaceholderImage
          label={imageLabel}
          className="group-hover:scale-105 transition-transform duration-500 ease-out"
        />
      </div>
      <h3 className="font-heading text-xl md:text-2xl text-primary mt-5 mb-2 group-hover:text-accent transition-colors duration-200 ease-out">
        {title}
      </h3>
      <p className="text-warm-gray font-body text-sm leading-relaxed">
        {description}
      </p>
    </Link>
  );
}
