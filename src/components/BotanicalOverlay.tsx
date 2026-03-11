export default function BotanicalOverlay() {
  return (
    <div
      className="absolute inset-0 pointer-events-none opacity-[0.05] md:opacity-[0.08]"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1200 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* ── Citrus slice — top left ── */}
        <g transform="translate(80, 70) rotate(-12)">
          <circle cx="0" cy="0" r="38" stroke="#2d3a28" strokeWidth="1.2" />
          <circle cx="0" cy="0" r="30" stroke="#2d3a28" strokeWidth="0.8" />
          <line x1="0" y1="-30" x2="0" y2="30" stroke="#2d3a28" strokeWidth="0.7" />
          <line x1="-30" y1="0" x2="30" y2="0" stroke="#2d3a28" strokeWidth="0.7" />
          <line x1="-21" y1="-21" x2="21" y2="21" stroke="#2d3a28" strokeWidth="0.7" />
          <line x1="21" y1="-21" x2="-21" y2="21" stroke="#2d3a28" strokeWidth="0.7" />
        </g>

        {/* ── Herb sprig — top center-right ── */}
        <g transform="translate(820, 110) rotate(15)">
          <path d="M0 60 Q10 30 0 0" stroke="#2d3a28" strokeWidth="1" />
          <ellipse cx="-8" cy="15" rx="6" ry="12" transform="rotate(-30 -8 15)" stroke="#2d3a28" strokeWidth="0.8" fill="none" />
          <ellipse cx="9" cy="28" rx="6" ry="11" transform="rotate(25 9 28)" stroke="#2d3a28" strokeWidth="0.8" fill="none" />
          <ellipse cx="-7" cy="42" rx="5" ry="10" transform="rotate(-20 -7 42)" stroke="#2d3a28" strokeWidth="0.8" fill="none" />
        </g>

        {/* ── Small leaf — upper-right ── */}
        <g transform="translate(1050, 180) rotate(40)">
          <path d="M0 0 Q12 -20 0 -40 Q-12 -20 0 0Z" stroke="#2d3a28" strokeWidth="0.8" fill="none" />
          <line x1="0" y1="0" x2="0" y2="-40" stroke="#2d3a28" strokeWidth="0.6" />
        </g>

        {/* ── Citrus half — center-left ── */}
        <g transform="translate(150, 420) rotate(22)">
          <path d="M-32 0 A32 32 0 0 1 32 0Z" stroke="#2d3a28" strokeWidth="1" fill="none" />
          <line x1="-28" y1="0" x2="28" y2="0" stroke="#2d3a28" strokeWidth="0.6" />
          <line x1="0" y1="0" x2="0" y2="-28" stroke="#2d3a28" strokeWidth="0.6" />
          <line x1="-20" y1="0" x2="-10" y2="-24" stroke="#2d3a28" strokeWidth="0.6" />
          <line x1="20" y1="0" x2="10" y2="-24" stroke="#2d3a28" strokeWidth="0.6" />
        </g>

        {/* ── Long trailing sprig — mid-right ── */}
        <g transform="translate(1000, 380) rotate(-8)">
          <path d="M0 0 Q-15 25 -5 55 Q5 85 -10 110" stroke="#2d3a28" strokeWidth="1" />
          <ellipse cx="8" cy="20" rx="5" ry="10" transform="rotate(30 8 20)" stroke="#2d3a28" strokeWidth="0.7" fill="none" />
          <ellipse cx="-12" cy="50" rx="5" ry="9" transform="rotate(-25 -12 50)" stroke="#2d3a28" strokeWidth="0.7" fill="none" />
          <ellipse cx="6" cy="80" rx="4" ry="9" transform="rotate(20 6 80)" stroke="#2d3a28" strokeWidth="0.7" fill="none" />
          <ellipse cx="-10" cy="100" rx="4" ry="8" transform="rotate(-15 -10 100)" stroke="#2d3a28" strokeWidth="0.7" fill="none" />
        </g>

        {/* ── Small flower — center ── */}
        <g transform="translate(580, 330) rotate(10)">
          <circle cx="0" cy="0" r="3" stroke="#2d3a28" strokeWidth="0.8" fill="none" />
          <ellipse cx="0" cy="-10" rx="3.5" ry="7" stroke="#2d3a28" strokeWidth="0.6" fill="none" />
          <ellipse cx="9.5" cy="-3" rx="3.5" ry="7" transform="rotate(72 9.5 -3)" stroke="#2d3a28" strokeWidth="0.6" fill="none" />
          <ellipse cx="5.9" cy="8.1" rx="3.5" ry="7" transform="rotate(144 5.9 8.1)" stroke="#2d3a28" strokeWidth="0.6" fill="none" />
          <ellipse cx="-5.9" cy="8.1" rx="3.5" ry="7" transform="rotate(216 -5.9 8.1)" stroke="#2d3a28" strokeWidth="0.6" fill="none" />
          <ellipse cx="-9.5" cy="-3" rx="3.5" ry="7" transform="rotate(288 -9.5 -3)" stroke="#2d3a28" strokeWidth="0.6" fill="none" />
        </g>

        {/* ── Citrus slice — lower-right ── */}
        <g transform="translate(1080, 650) rotate(-25)">
          <circle cx="0" cy="0" r="42" stroke="#2d3a28" strokeWidth="1.2" />
          <circle cx="0" cy="0" r="34" stroke="#2d3a28" strokeWidth="0.7" />
          <line x1="0" y1="-34" x2="0" y2="34" stroke="#2d3a28" strokeWidth="0.7" />
          <line x1="-34" y1="0" x2="34" y2="0" stroke="#2d3a28" strokeWidth="0.7" />
          <line x1="-24" y1="-24" x2="24" y2="24" stroke="#2d3a28" strokeWidth="0.7" />
          <line x1="24" y1="-24" x2="-24" y2="24" stroke="#2d3a28" strokeWidth="0.7" />
        </g>

        {/* ── Branching sprig — lower-left ── */}
        <g transform="translate(200, 700) rotate(5)">
          <path d="M0 80 Q15 50 5 25 Q-5 0 10 -20" stroke="#2d3a28" strokeWidth="1" />
          <ellipse cx="18" cy="55" rx="5" ry="11" transform="rotate(35 18 55)" stroke="#2d3a28" strokeWidth="0.7" fill="none" />
          <ellipse cx="-10" cy="35" rx="5" ry="10" transform="rotate(-30 -10 35)" stroke="#2d3a28" strokeWidth="0.7" fill="none" />
          <ellipse cx="15" cy="10" rx="4" ry="9" transform="rotate(25 15 10)" stroke="#2d3a28" strokeWidth="0.7" fill="none" />
        </g>

        {/* ── Small leaves cluster — bottom center ── */}
        <g transform="translate(620, 760) rotate(-5)">
          <path d="M0 0 Q8 -15 0 -30 Q-8 -15 0 0Z" stroke="#2d3a28" strokeWidth="0.7" fill="none" />
          <path d="M15 5 Q23 -10 15 -25 Q7 -10 15 5Z" stroke="#2d3a28" strokeWidth="0.7" fill="none" />
          <path d="M-14 8 Q-6 -7 -14 -22 Q-22 -7 -14 8Z" stroke="#2d3a28" strokeWidth="0.7" fill="none" />
        </g>

        {/* ── Tiny citrus — mid-left ── */}
        <g transform="translate(60, 550) rotate(18)">
          <circle cx="0" cy="0" r="22" stroke="#2d3a28" strokeWidth="0.9" />
          <circle cx="0" cy="0" r="17" stroke="#2d3a28" strokeWidth="0.6" />
          <line x1="0" y1="-17" x2="0" y2="17" stroke="#2d3a28" strokeWidth="0.5" />
          <line x1="-17" y1="0" x2="17" y2="0" stroke="#2d3a28" strokeWidth="0.5" />
        </g>

        {/* ── Rosemary sprig — top-center ── */}
        <g transform="translate(460, 60) rotate(-10)">
          <path d="M0 0 Q5 20 0 45 Q-5 70 2 90" stroke="#2d3a28" strokeWidth="0.9" />
          <ellipse cx="6" cy="12" rx="3" ry="7" transform="rotate(30 6 12)" stroke="#2d3a28" strokeWidth="0.6" fill="none" />
          <ellipse cx="-5" cy="25" rx="3" ry="7" transform="rotate(-25 -5 25)" stroke="#2d3a28" strokeWidth="0.6" fill="none" />
          <ellipse cx="6" cy="38" rx="3" ry="6" transform="rotate(20 6 38)" stroke="#2d3a28" strokeWidth="0.6" fill="none" />
          <ellipse cx="-5" cy="52" rx="3" ry="6" transform="rotate(-20 -5 52)" stroke="#2d3a28" strokeWidth="0.6" fill="none" />
          <ellipse cx="5" cy="65" rx="2.5" ry="5.5" transform="rotate(18 5 65)" stroke="#2d3a28" strokeWidth="0.6" fill="none" />
          <ellipse cx="-4" cy="78" rx="2.5" ry="5" transform="rotate(-15 -4 78)" stroke="#2d3a28" strokeWidth="0.6" fill="none" />
        </g>

        {/* ── Flower accent — right edge ── */}
        <g transform="translate(1140, 440) rotate(30)">
          <circle cx="0" cy="0" r="2.5" stroke="#2d3a28" strokeWidth="0.7" fill="none" />
          <ellipse cx="0" cy="-8" rx="3" ry="6" stroke="#2d3a28" strokeWidth="0.5" fill="none" />
          <ellipse cx="7.6" cy="-2.5" rx="3" ry="6" transform="rotate(72 7.6 -2.5)" stroke="#2d3a28" strokeWidth="0.5" fill="none" />
          <ellipse cx="4.7" cy="6.5" rx="3" ry="6" transform="rotate(144 4.7 6.5)" stroke="#2d3a28" strokeWidth="0.5" fill="none" />
          <ellipse cx="-4.7" cy="6.5" rx="3" ry="6" transform="rotate(216 -4.7 6.5)" stroke="#2d3a28" strokeWidth="0.5" fill="none" />
          <ellipse cx="-7.6" cy="-2.5" rx="3" ry="6" transform="rotate(288 -7.6 -2.5)" stroke="#2d3a28" strokeWidth="0.5" fill="none" />
        </g>

        {/* ── Single leaf — lower mid-right ── */}
        <g transform="translate(880, 740) rotate(-35)">
          <path d="M0 0 Q14 -22 0 -48 Q-14 -22 0 0Z" stroke="#2d3a28" strokeWidth="0.8" fill="none" />
          <line x1="0" y1="0" x2="0" y2="-48" stroke="#2d3a28" strokeWidth="0.5" />
        </g>

        {/* ── Tiny sprig — upper mid-left ── */}
        <g transform="translate(300, 220) rotate(25)">
          <path d="M0 40 Q8 20 0 0" stroke="#2d3a28" strokeWidth="0.8" />
          <ellipse cx="-6" cy="10" rx="4" ry="8" transform="rotate(-25 -6 10)" stroke="#2d3a28" strokeWidth="0.6" fill="none" />
          <ellipse cx="7" cy="25" rx="4" ry="8" transform="rotate(20 7 25)" stroke="#2d3a28" strokeWidth="0.6" fill="none" />
        </g>

        {/* ── Citrus wedge — bottom-right ── */}
        <g transform="translate(940, 830) rotate(50)">
          <path d="M-26 0 A26 26 0 0 1 26 0Z" stroke="#2d3a28" strokeWidth="0.9" fill="none" />
          <line x1="0" y1="0" x2="0" y2="-22" stroke="#2d3a28" strokeWidth="0.5" />
          <line x1="-15" y1="0" x2="-8" y2="-19" stroke="#2d3a28" strokeWidth="0.5" />
          <line x1="15" y1="0" x2="8" y2="-19" stroke="#2d3a28" strokeWidth="0.5" />
        </g>

        {/* ── Mint leaves — center-right upper ── */}
        <g transform="translate(750, 200) rotate(-15)">
          <path d="M0 0 Q10 -14 0 -28 Q-10 -14 0 0Z" stroke="#2d3a28" strokeWidth="0.7" fill="none" />
          <path d="M12 4 Q20 -8 12 -20 Q4 -8 12 4Z" stroke="#2d3a28" strokeWidth="0.7" fill="none" />
        </g>

        {/* ── Loose leaf — far left mid ── */}
        <g transform="translate(30, 340) rotate(55)">
          <path d="M0 0 Q10 -18 0 -36 Q-10 -18 0 0Z" stroke="#2d3a28" strokeWidth="0.7" fill="none" />
          <line x1="0" y1="0" x2="0" y2="-36" stroke="#2d3a28" strokeWidth="0.5" />
        </g>
      </svg>
    </div>
  );
}
