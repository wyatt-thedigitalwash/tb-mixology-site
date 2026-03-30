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
}

export default function ServiceCard({
  title,
  description,
  href,
  imageLabel,
  imageSrc,
  imageAlt,
}: ServiceCardProps) {
  return (
    <Link href={href} className="group block">
      <div className="overflow-hidden rounded-sm aspect-[3/2] relative">
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
      <h3 className="font-heading text-xl md:text-2xl text-primary mt-5 mb-2 group-hover:text-accent transition-colors duration-200 ease-out">
        {title}
      </h3>
      <p className="text-warm-gray font-body text-sm leading-relaxed">
        {description}
      </p>
    </Link>
  );
}
