{/* TODO: V2 — integrate Instagram Basic Display API or Elfsight/SnapWidget for real IG posts */}

import Image from "next/image";

const posts = [
  { src: "/images/tb-mixology-team-selfie-outdoor-bar.webp", alt: "TB Mixology team selfie behind the outdoor bar setup", width: 1377, height: 774 },
  { src: "/images/three-women-cheers-martinis-outdoor-event.webp", alt: "Three women cheersing martinis at an outdoor event", width: 1333, height: 888 },
  { src: "/images/bartender-shaking-cocktail-mobile-bar.webp", alt: "Bartender shaking a cocktail at a mobile bar", width: 1311, height: 874 },
];

export default function InstagramFeed() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
      {posts.map((post) => (
        <div key={post.src} className="overflow-hidden rounded-sm relative aspect-[3/2]">
          <Image
            src={post.src}
            alt={post.alt}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover hover:scale-105 transition-transform duration-500 ease-out"
          />
        </div>
      ))}
    </div>
  );
}
