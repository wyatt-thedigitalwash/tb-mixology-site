import Link from "next/link";
import Image from "next/image";
import PlaceholderImage from "./PlaceholderImage";

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  imageLabel: string;
  imageSrc?: string;
  imageAlt?: string;
  light?: boolean;
}

export default function ServiceCard({
  title,
  description,
  href,
  imageLabel,
  imageSrc,
  imageAlt,
  light = false,
}: ServiceCardProps) {
  return (
    <Link href={href} className="group block">
      <div className="overflow-hidden rounded-sm aspect-[4/5] relative">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt || title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          />
        ) : (
          <PlaceholderImage
            label={imageLabel}
            className="group-hover:scale-105 transition-transform duration-500 ease-out"
          />
        )}
      </div>
      <h3 className={`font-heading text-xl md:text-2xl mt-5 mb-2 group-hover:text-accent transition-colors duration-200 ease-out ${light ? "text-secondary" : "text-primary"}`}>
        {title}
      </h3>
      <p className={`font-body text-sm leading-relaxed ${light ? "text-white/60" : "text-warm-gray"}`}>
        {description}
      </p>
    </Link>
  );
}
