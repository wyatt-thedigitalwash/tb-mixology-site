{/* TODO: V2 — integrate Instagram Basic Display API or Elfsight/SnapWidget for real IG posts */}

import Image from "next/image";

const posts = [
  { src: "/images/espresso-martini-pour-closeup-thumb.webp", alt: "Espresso martini being poured into a martini glass", width: 254, height: 400 },
  { src: "/images/cocktails-highrise-marina-ocean-view-thumb.webp", alt: "Cocktails with a marina and ocean view", width: 400, height: 267 },
  { src: "/images/halloween-themed-red-martini-skull-decor-thumb.webp", alt: "Halloween themed cocktail with skull decor", width: 400, height: 267 },
  { src: "/images/bartender-shaking-cocktail-mobile-bar-setup-thumb.webp", alt: "Bartender shaking a cocktail at a mobile bar", width: 400, height: 267 },
  { src: "/images/cocktail-class-group-espresso-martinis-thumb.webp", alt: "Group at a cocktail class holding espresso martinis", width: 400, height: 267 },
  { src: "/images/pink-cocktail-lineup-lime-garnish-bar-thumb.webp", alt: "Pink cocktail lineup with lime garnishes", width: 400, height: 267 },
];

export default function InstagramFeed() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
      {posts.map((post) => (
        <div key={post.src} className="overflow-hidden rounded-sm aspect-square relative">
          <Image
            src={post.src}
            alt={post.alt}
            width={post.width}
            height={post.height}
            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 ease-out"
          />
        </div>
      ))}
    </div>
  );
}
