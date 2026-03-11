export default function CocktailPattern() {
  return (
    <div
      className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-[0.03] md:opacity-[0.05]"
      aria-hidden="true"
    >
      <svg
        width="100%"
        height="100%"
        className="block w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="cocktail-pattern"
            x="0"
            y="0"
            width="300"
            height="300"
            patternUnits="userSpaceOnUse"
          >
            {/* Wine glass — top-left area */}
            <g transform="translate(30, 25) rotate(-8)" stroke="#2d3a28" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <ellipse cx="18" cy="5" rx="12" ry="7" />
              <line x1="18" y1="12" x2="18" y2="32" />
              <line x1="10" y1="38" x2="26" y2="38" />
              <line x1="18" y1="32" x2="18" y2="38" />
            </g>

            {/* Champagne flute — upper-center-right */}
            <g transform="translate(195, 18) rotate(6)" stroke="#2d3a28" strokeWidth="1.1" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 0 Q12 18 8 28 L8 42" />
              <path d="M20 0 Q20 18 24 28 L24 42" />
              <line x1="4" y1="42" x2="28" y2="42" />
              <line x1="12" y1="0" x2="20" y2="0" />
            </g>

            {/* Martini glass with olive pick — center-left */}
            <g transform="translate(55, 120) rotate(5)" stroke="#2d3a28" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M0 0 L20 20 L40 0" />
              <line x1="20" y1="20" x2="20" y2="40" />
              <line x1="12" y1="40" x2="28" y2="40" />
              {/* olive pick */}
              <line x1="10" y1="12" x2="30" y2="12" />
              <circle cx="28" cy="12" r="3" />
            </g>

            {/* Collins/highball glass with straw — right side */}
            <g transform="translate(230, 95) rotate(-5)" stroke="#2d3a28" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M0 0 L3 45 L33 45 L36 0 Z" />
              {/* straw */}
              <path d="M28 0 L26 30 L30 -8" />
            </g>

            {/* Rocks/old fashioned glass — center */}
            <g transform="translate(140, 140) rotate(-10)" stroke="#2d3a28" strokeWidth="1.3" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M0 0 L2 28 L38 28 L40 0 Z" />
              {/* ice cube suggestion */}
              <rect x="12" y="10" width="10" height="10" rx="2" />
            </g>

            {/* Cocktail shaker — lower-left */}
            <g transform="translate(20, 210) rotate(12)" stroke="#2d3a28" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10 0 L8 8 L4 40 L32 40 L28 8 L26 0 Z" />
              <line x1="8" y1="8" x2="28" y2="8" />
              {/* cap */}
              <path d="M14 0 L16 -8 L20 -8 L22 0" />
            </g>

            {/* Bottle — lower-center-right */}
            <g transform="translate(200, 200) rotate(-7)" stroke="#2d3a28" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 0 L14 8 L8 16 L8 48 L30 48 L30 16 L24 8 L24 0 Z" />
              <line x1="14" y1="0" x2="24" y2="0" />
              <line x1="8" y1="16" x2="30" y2="16" />
            </g>

            {/* Citrus slice — upper-right */}
            <g transform="translate(270, 55) rotate(15)" stroke="#2d3a28" strokeWidth="1.1" fill="none">
              <circle cx="0" cy="0" r="18" />
              <circle cx="0" cy="0" r="13" />
              <line x1="0" y1="-13" x2="0" y2="13" />
              <line x1="-13" y1="0" x2="13" y2="0" />
              <line x1="-9" y1="-9" x2="9" y2="9" />
              <line x1="9" y1="-9" x2="-9" y2="9" />
            </g>

            {/* Cocktail umbrella — lower-center */}
            <g transform="translate(120, 240) rotate(-12)" stroke="#2d3a28" strokeWidth="1.1" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M0 12 Q16 -6 32 12" />
              <line x1="16" y1="-2" x2="16" y2="35" />
              {/* scalloped edge */}
              <path d="M0 12 Q8 6 16 12 Q24 6 32 12" />
            </g>

            {/* Cocktail pick with olive — far right mid */}
            <g transform="translate(265, 180) rotate(10)" stroke="#2d3a28" strokeWidth="1.1" fill="none" strokeLinecap="round">
              <line x1="6" y1="0" x2="6" y2="40" />
              <circle cx="6" cy="14" r="5" />
              <circle cx="6" cy="28" r="5" />
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#cocktail-pattern)" />
      </svg>
    </div>
  );
}
