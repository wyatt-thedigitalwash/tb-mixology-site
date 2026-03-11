import Link from "next/link";
import { GlassWater, Beaker, PartyPopper, Instagram, Facebook } from "lucide-react";
import SectionLabel from "@/components/SectionLabel";
import GoldDivider from "@/components/GoldDivider";
import TierCard from "@/components/TierCard";
import FadeIn from "@/components/FadeIn";
import BotanicalOverlay from "@/components/BotanicalOverlay";

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
      "Hosts who love to mix it up themselves — with expert-level recipes and guidance",
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
      "Events where you want the prep done by people who really care about flavor",
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
      "Hosts who want to enjoy the party without worrying about the bar",
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
      "The full experience — from first pour to last call, we handle everything",
  },
];

export default function Home() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center noise-overlay overflow-hidden">
        <BotanicalOverlay />

        <div className="relative z-10 px-6 max-w-4xl mx-auto flex flex-col items-center">
          <FadeIn className="text-center">
            <SectionLabel>Tampa Bay&apos;s Handcrafted Event Bartending</SectionLabel>
          </FadeIn>

          <FadeIn delay="delay-100" className="text-center">
            <h1 className="font-heading text-4xl md:text-6xl lg:text-8xl text-text leading-[1.05] mb-6">
              Fresh Ingredients.
              <br />
              <span className="text-terracotta">Unforgettable Events.</span>
            </h1>
          </FadeIn>

          <FadeIn delay="delay-200" className="text-center">
            <p className="text-text-muted font-body text-lg md:text-xl mb-10">
              Serving Tampa · St. Pete · Clearwater · Sarasota
            </p>
          </FadeIn>

          <FadeIn delay="delay-300" className="text-center w-full">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#services"
                className="w-full sm:w-auto border border-terracotta text-terracotta px-8 py-4 text-sm tracking-[0.15em] uppercase font-body rounded-md hover:bg-terracotta hover:text-bg transition-colors"
              >
                View Our Services
              </a>
              <Link
                href="/contact"
                className="w-full sm:w-auto text-center bg-terracotta text-bg px-8 py-4 text-sm tracking-[0.15em] uppercase font-body rounded-md hover:bg-hover transition-colors"
              >
                Tell Us About Your Event
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <GoldDivider />

      {/* ── What We Do ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <SectionLabel>What We Do</SectionLabel>
              <h2 className="font-heading text-3xl md:text-5xl text-text">
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
                  "Swap the plastic for real glassware — coupes, rocks glasses, highballs. It makes all the difference.",
              },
              {
                icon: Beaker,
                title: "Batch Cocktails",
                description:
                  "Handcrafted, perfectly balanced batch cocktails delivered to your door, ready to pour and enjoy.",
              },
              {
                icon: PartyPopper,
                title: "Cocktail Classes",
                description:
                  "Hands-on cocktail-making experiences for bachelorette parties, team events, and private gatherings.",
              },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i === 1 ? "delay-100" : i === 2 ? "delay-200" : ""}>
                <div className="bg-surface rounded-lg p-8 text-center">
                  <item.icon className="w-10 h-10 text-terracotta mx-auto mb-5" />
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
        </div>
      </section>

      <GoldDivider />

      {/* ── Services Overview ── */}
      <section id="services" className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <SectionLabel>Our Services</SectionLabel>
              <h2 className="font-heading text-3xl md:text-5xl text-text">
                Four Tiers, Tailored to You
              </h2>
              <p className="text-text-muted font-body mt-4 max-w-2xl mx-auto">
                Whether you want professional recipes to mix at home or a fully staffed bar
                with everything handled, there&apos;s a tier that fits your event perfectly.
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
        </div>
      </section>

      <GoldDivider />

      {/* ── Social Proof / Vibe ── */}
      <section className="py-20 md:py-28 noise-overlay bg-surface relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <FadeIn>
            <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl text-text leading-tight mb-8">
              From the first pour to the last call,
              <br />
              <span className="text-terracotta">every detail is handled with care.</span>
            </h2>
          </FadeIn>

          <FadeIn delay="delay-100">
            <p className="text-text-muted font-body text-lg mb-10">
              Follow along for seasonal cocktail ideas, fresh event setups,
              and behind-the-scenes moments from Tampa Bay&apos;s favorite mobile bar.
            </p>
          </FadeIn>

          <FadeIn delay="delay-200">
            <div className="flex justify-center gap-6">
              <a
                href="https://www.instagram.com/tbmixology/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-terracotta transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={28} />
              </a>
              <a
                href="https://www.facebook.com/p/TB-Mixology-100093284260144/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-terracotta transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={28} />
              </a>
              <a
                href="https://www.tiktok.com/@tbmixology"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-terracotta transition-colors"
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
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <FadeIn>
            <SectionLabel>Let&apos;s Plan Together</SectionLabel>
            <h2 className="font-heading text-3xl md:text-5xl text-text mb-8">
              Your event deserves a great bar.
            </h2>
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-block bg-terracotta text-bg px-10 py-4 text-sm tracking-[0.15em] uppercase font-body rounded-md hover:bg-hover transition-colors"
            >
              Tell Us About Your Event
            </Link>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
