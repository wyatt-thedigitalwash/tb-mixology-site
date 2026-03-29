{/* TODO: V2 — integrate Instagram Basic Display API or Elfsight/SnapWidget for real IG posts */}

import PlaceholderImage from "./PlaceholderImage";

export default function InstagramFeed() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
      {Array.from({ length: 6 }).map((_, i) => (
        /* REPLACE: real Instagram embed */
        <PlaceholderImage key={i} label="IG post — replace" aspect="square" />
      ))}
    </div>
  );
}
