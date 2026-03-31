{/* TODO: V2 — integrate Instagram Basic Display API or Elfsight/SnapWidget for real IG posts */}

import Image from "next/image";

const posts = [
  { src: "/images/espresso-martini-pour-closeup.webp", alt: "Espresso martini being poured into a martini glass", width: 699, height: 1103 },
  { src: "/images/cocktails-highrise-marina-ocean-view.webp", alt: "Cocktails with a marina and ocean view", width: 1145, height: 763 },
  { src: "/images/halloween-red-martini-skull-decor.webp", alt: "Halloween themed cocktail with skull decor", width: 1359, height: 906 },
  { src: "/images/bartender-shaking-cocktail-mobile-bar.webp", alt: "Bartender shaking a cocktail at a mobile bar", width: 1000, height: 667 },
  { src: "/images/cocktail-class-group-espresso-martinis.webp", alt: "Group at a cocktail class holding espresso martinis", width: 951, height: 634 },
  { src: "/images/pink-cocktail-lineup-lime-garnish.webp", alt: "Pink cocktail lineup with lime garnishes", width: 1032, height: 688 },
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
