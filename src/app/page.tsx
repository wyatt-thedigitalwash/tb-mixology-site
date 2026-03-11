import Link from "next/link";
import { GlassWater, Beaker, PartyPopper, Instagram, Facebook } from "lucide-react";
import SectionLabel from "@/components/SectionLabel";
import GoldDivider from "@/components/GoldDivider";
import TierCard from "@/components/TierCard";
import FadeIn from "@/components/FadeIn";

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.71a8.19 8.19 0 0 0 4.76 1.52V6.79a4.83 4.83 0 0 1-1-.1Z" />
    </svg>
  );
}

const tiers = [
  {
    tier: 1,
    name: "DIY Bartender",
    price: "Starting at $50",
    features: [
      "Virtual consult",
      "Custom cocktail menu",
      "Full instructions & shopping list",
      "Printable menus",
    ],
    perfectFor:
      "Hosts who want to run their own bar with professional recipes and style",
  },
  {
    tier: 2,
    name: "Batch & Drop",
    price: "Starting at $150",
    features: [
      "Everything in Tier 1",
      "Batches of cocktails delivered",
      "Bar tools & prepped garnishes",
      "Quick setup guide",
    ],
    perfectFor:
      "Events where you want the prep done by pros",
  },
  {
    tier: 3,
    name: "Full Service Bar",
    price: "Starting at $500",
    features: [
      "Everything in Tier 2",
      "Bartender service (1 or 2)",
      "Setup, breakdown & ice included",
      "Bar décor & glassware",
    ],
    perfectFor:
      "Hosts who want stress-free, high-quality bar service",
  },
  {
    tier: 4,
    name: "Luxury Open Bar",
    price: "Starting at $550 + alcohol",
    features: [
      "Everything in Tier 3",
      "All alcohol provided",
      "Full luxury experience",
      "Nothing to think about",
    ],
    perfectFor:
      "The full experience — everything taken care of",
  },
];

export default function Home() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center justify-center noise-overlay overflow-hidden">
        {/* Radial glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[800px] h-[800px] rounded-full bg-gold/[0.04] blur-[120px]" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <FadeIn>
            <SectionLabel>Tampa Bay&apos;s Premier Event Bartending</SectionLabel>
          </FadeIn>

          <FadeIn delay="delay-100">
            <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-text leading-[1.05] mb-6">
              Crafted Bars for
              <br />
              <span className="text-gold">Every Occasion</span>
            </h1>
          </FadeIn>

          <FadeIn delay="delay-200">
            <p className="text-text-muted font-body text-lg md:text-xl mb-10">
              Serving Tampa · St. Pete · Clearwater · Sarasota
            </p>
          </FadeIn>

          <FadeIn delay="delay-300">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#services"
                className="bg-transparent border border-gold text-gold px-8 py-4 text-sm tracking-[0.15em] uppercase font-body hover:bg-gold hover:text-bg transition-colors"
              >
                View Our Services
              </a>
              <Link
                href="/contact"
                className="bg-gold text-bg px-8 py-4 text-sm tracking-[0.15em] uppercase font-body hover:bg-champagne transition-colors"
              >
                Book Your Event
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <GoldDivider />

      {/* ── What We Do ── */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <FadeIn>
          <div className="text-center mb-16">
            <SectionLabel>What We Do</SectionLabel>
            <h2 className="font-heading text-4xl md:text-5xl text-text">
              More Than Just Drinks
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: GlassWater,
              title: "Glassware Rental",
              description:
                "Elevate your bar with curated glassware — from classic coupes to rocks glasses. No plastic in sight.",
            },
            {
              icon: Beaker,
              title: "Batch Cocktails",
              description:
                "Professionally crafted, perfectly balanced batch cocktails delivered ready to pour and impress your guests.",
            },
            {
              icon: PartyPopper,
              title: "Cocktail Classes",
              description:
                "Interactive cocktail-making experiences for bachelorette parties, team events, and private gatherings.",
            },
          ].map((item, i) => (
            <FadeIn key={item.title} delay={i === 1 ? "delay-100" : i === 2 ? "delay-200" : ""}>
              <div className="border border-border-gold bg-surface p-8 text-center noise-overlay">
                <item.icon className="w-10 h-10 text-gold mx-auto mb-5" />
                <h3 className="font-heading text-2xl text-text mb-3">
                  {item.title}
                </h3>
                <p className="text-text-muted text-sm font-body leading-relaxed">
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <GoldDivider />

      {/* ── Services Overview ── */}
      <section id="services" className="max-w-7xl mx-auto px-6 py-24">
        <FadeIn>
          <div className="text-center mb-16">
            <SectionLabel>Our Services</SectionLabel>
            <h2 className="font-heading text-4xl md:text-5xl text-text">
              Four Tiers, One Standard
            </h2>
            <p className="text-text-muted font-body mt-4 max-w-2xl mx-auto">
              Whether you&apos;re looking for professional recipes or a fully staffed luxury bar,
              we have a package tailored to your event.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tiers.map((tier, i) => (
            <FadeIn key={tier.tier} delay={i % 2 === 1 ? "delay-100" : ""}>
              <TierCard {...tier} showLink />
            </FadeIn>
          ))}
        </div>
      </section>

      <GoldDivider />

      {/* ── Social Proof / Vibe ── */}
      <section className="py-24 noise-overlay bg-surface">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-text leading-tight mb-8">
              We don&apos;t just pour drinks —
              <br />
              <span className="text-gold">we craft the experience.</span>
            </h2>
          </FadeIn>

          <FadeIn delay="delay-100">
            <p className="text-text-muted font-body text-lg mb-10">
              Follow along for cocktail inspiration, behind-the-scenes event setups,
              and Tampa Bay&apos;s best bar moments.
            </p>
          </FadeIn>

          <FadeIn delay="delay-200">
            <div className="flex justify-center gap-6">
              <a
                href="https://www.instagram.com/tbmixology/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={28} />
              </a>
              <a
                href="https://www.facebook.com/p/TB-Mixology-100093284260144/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={28} />
              </a>
              <a
                href="https://www.tiktok.com/@tbmixology"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-gold transition-colors"
                aria-label="TikTok"
              >
                <TikTokIcon className="w-7 h-7" />
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      <GoldDivider />

      {/* ── CTA Banner ── */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <SectionLabel>Let&apos;s Work Together</SectionLabel>
            <h2 className="font-heading text-4xl md:text-5xl text-text mb-8">
              Ready to elevate your event?
            </h2>
            <Link
              href="/contact"
              className="inline-block bg-gold text-bg px-10 py-4 text-sm tracking-[0.15em] uppercase font-body hover:bg-champagne transition-colors"
            >
              Get a Quote
            </Link>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
