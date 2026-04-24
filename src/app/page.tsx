import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import SectionHeading from "@/components/SectionHeading";
import Image from "next/image";
import ServiceCard from "@/components/ServiceCard";
import ReviewCard from "@/components/ReviewCard";
import InstagramFeed from "@/components/InstagramFeed";
import ExpandableHighlight from "@/components/ExpandableHighlight";
import PricingCard from "@/components/PricingCard";
import AddOnsGrid from "@/components/AddOnsGrid";
import { LocalBusinessJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";
import {
  services,
  addOnServices,
  packages,
  homeReviews,
  highlights,
} from "@/lib/data/home";

const highlightIconNames = ["Palette", "Leaf", "Sparkles", "Tag", "Heart", "ShieldCheck"] as const;

export const metadata: Metadata = {
  title: "TB Mixology | Tampa Bay Event Bartending",
  description:
    "Woman-owned mobile bartending serving St. Pete, Tampa, Clearwater & Sarasota. Fresh ingredients, custom cocktail menus, and unforgettable bar experiences for every event.",
  openGraph: {
    title: "TB Mixology | Tampa Bay Event Bartending",
    description:
      "Woman-owned mobile bartending serving St. Pete, Tampa, Clearwater & Sarasota. Fresh ingredients, custom cocktail menus, and unforgettable bar experiences.",
    url: "https://tbmixology.com",
    siteName: "TB Mixology",
    locale: "en_US",
    type: "website",
    images: [{ url: "/og-image.png" }],
  },
  alternates: { canonical: "https://tbmixology.com" },
  twitter: {
    card: "summary_large_image",
    title: "TB Mixology | Tampa Bay Event Bartending",
    description: "Woman-owned mobile bartending serving St. Pete, Tampa, Clearwater & Sarasota.",
    images: ["/og-image.png"],
  },
};

export default function Home() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center justify-center bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          {/* Desktop hero */}
          <Image
            src="/images/espresso-martinis-pair-bar-ambiance.webp"
            alt="Two espresso martinis with warm ambient bar lighting"
            fill
            sizes="100vw"
            className="object-cover hidden md:block"
            priority
          />
          {/* Mobile hero */}
          <Image
            src="/images/espresso-martini-pour-closeup.webp"
            alt="Bartender pouring an espresso martini"
            fill
            sizes="100vw"
            className="object-cover md:hidden"
            priority
          />
        </div>
        <div className="relative z-10 px-6 max-w-4xl mx-auto text-center">
          <FadeIn>
            {/* TODO: Swap logo when client provides updated version without T|B in glass */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/tb-mixology-logo-transparent.svg"
              alt="TB Mixology logo"
              width={384}
              height={120}
              className="mx-auto w-64 md:w-80 lg:w-96 h-auto mb-6"
            />
            <h1 className="sr-only">TB Mixology — Tampa Bay Event Bartending</h1>
          </FadeIn>
          <FadeIn delay="delay-100">
            <p className="font-body text-white text-base md:text-xl mb-10 max-w-2xl mx-auto">
              A St. Pete-based mobile bartending company specializing in fresh, seasonal cocktails made with natural ingredients, tailored to each event
            </p>
          </FadeIn>
          <FadeIn delay="delay-200">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#services"
                className="border border-white text-white px-8 py-4 text-sm tracking-[0.15em] uppercase font-body rounded-sm hover:bg-white hover:text-primary transition-colors duration-200 ease-out"
              >
                View Our Services
              </a>
              <Link
                href="/contact"
                className="bg-accent text-primary px-8 py-4 text-sm tracking-[0.15em] uppercase font-body rounded-sm hover:bg-accent/90 transition-colors duration-200 ease-out text-center"
              >
                Tell Us About Your Event
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Services Overview ── (light) */}
      <section id="services" className="py-20 md:py-28 bg-secondary">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <SectionHeading label="What We Do" title="Our Services" />
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {services.map((s, i) => (
              <FadeIn key={s.title} delay={i === 1 ? "delay-100" : i === 2 ? "delay-200" : ""}>
                <ServiceCard {...s} />
              </FadeIn>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 max-w-3xl mx-auto">
            {addOnServices.map((s, i) => (
              <FadeIn key={s.title} delay={i === 1 ? "delay-100" : ""}>
                <ServiceCard {...s} />
              </FadeIn>
            ))}
          </div>

        </div>
      </section>

      {/* ── Differentiator ── (dark) */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="max-w-5xl mx-auto px-6">
          <FadeIn>
            <SectionHeading title="Not Your Average Mobile Bar" light />
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((h, i) => (
              <FadeIn key={h.title} delay={i % 3 === 1 ? "delay-100" : i % 3 === 2 ? "delay-200" : ""}>
                <ExpandableHighlight
                  iconName={highlightIconNames[i]}
                  title={h.title}
                  description={h.description}
                  detail={h.detail}
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing Preview ── (light) */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="max-w-5xl mx-auto px-6">
          <FadeIn>
            <SectionHeading label="Pricing" title="Bartending Packages" subtitle="Pricing based on a 4-hour event. Built to ensure fast, seamless service." />
          </FadeIn>

          <FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {packages.map((pkg) => (
                <PricingCard
                  key={pkg.guests}
                  name={pkg.guests}
                  price={pkg.starting}
                  note={`${pkg.bartenders} · ${pkg.rate}`}
                />
              ))}
            </div>
          </FadeIn>

          <div className="mt-16">
            <AddOnsGrid />
          </div>

          <FadeIn>
            <div className="text-center mt-10">
              <Link
                href="/services/bartending"
                className="font-body text-sm text-primary hover:text-accent transition-colors duration-200 ease-out tracking-wide"
              >
                See Full Bartending Details &rarr;
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Reviews ── (dark) */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <SectionHeading label="Testimonials" title="What Our Clients Say" light />
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {homeReviews.map((r, i) => (
              <FadeIn key={r.name} delay={i === 1 ? "delay-100" : i === 2 ? "delay-200" : ""}>
                <ReviewCard {...r} light />
              </FadeIn>
            ))}
          </div>
          <FadeIn delay="delay-200">
            <div className="text-center mt-10">
              <Link
                href="/reviews"
                className="font-body text-sm text-secondary hover:text-accent transition-colors duration-200 ease-out tracking-wide"
              >
                Read More Reviews &rarr;
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Instagram Feed ── (light) */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <SectionHeading label="@tbmixology" title="Follow Along with TB Mixology" />
          </FadeIn>
          <FadeIn delay="delay-100">
            <InstagramFeed />
          </FadeIn>
          <FadeIn delay="delay-200">
            <div className="flex justify-center gap-8 mt-10">
              <a
                href="https://instagram.com/tbmixology"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TB Mixology on Instagram (opens in a new tab)"
                className="font-body text-sm text-primary hover:text-accent transition-colors duration-200 ease-out tracking-wide"
              >
                Instagram &rarr;
              </a>
              <a
                href="https://www.tiktok.com/@tbmixology"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TB Mixology on TikTok (opens in a new tab)"
                className="font-body text-sm text-primary hover:text-accent transition-colors duration-200 ease-out tracking-wide"
              >
                TikTok &rarr;
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── CTA Section ── (dark) */}
      <section className="py-24 md:py-32 bg-primary">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-secondary mb-4 leading-tight">
              Your Event Deserves a Great Bar
            </h2>
            <p className="font-body text-base text-white/70 mb-10">
              Let&rsquo;s build something unforgettable together.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-accent text-primary px-12 py-5 text-sm tracking-[0.2em] uppercase font-body font-medium rounded-sm hover:bg-white hover:text-primary transition-colors duration-300 ease-out"
            >
              Tell Us About Your Event
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ── Structured Data ── */}
      <LocalBusinessJsonLd />
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }]} />
    </main>
  );
}
