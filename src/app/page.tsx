import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import ReviewCard from "@/components/ReviewCard";
import PlaceholderImage from "@/components/PlaceholderImage";
import InstagramFeed from "@/components/InstagramFeed";
import { services, addOnServices, packages, homeReviews, highlights } from "@/lib/data/home";

export const metadata: Metadata = {
  title: "TB Mixology | Tampa Bay Event Bartending",
  description:
    "Woman-owned mobile bartending serving St. Pete, Tampa, Clearwater & Sarasota. Fresh ingredients, custom cocktail menus, and unforgettable bar experiences for every event.",
  openGraph: {
    title: "TB Mixology | Tampa Bay Event Bartending",
    description:
      "Woman-owned mobile bartending serving St. Pete, Tampa, Clearwater & Sarasota. Fresh ingredients, custom cocktail menus, and unforgettable bar experiences.",
    url: "https://tb-mixology-site.vercel.app",
    siteName: "TB Mixology",
    locale: "en_US",
    type: "website",
  },
};

export default function Home() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center justify-center bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <PlaceholderImage label="Hero background photo" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 px-6 max-w-4xl mx-auto text-center">
          <FadeIn>
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-secondary leading-tight mb-6">
              Fresh Ingredients.
              <br />
              Unforgettable Events.
            </h1>
          </FadeIn>
          <FadeIn delay="delay-100">
            <p className="font-body text-white/70 text-base md:text-xl mb-10 max-w-2xl mx-auto">
              Woman-owned &amp; operated mobile bartending &mdash; St. Pete, Tampa, Clearwater, Sarasota
            </p>
          </FadeIn>
          <FadeIn delay="delay-200">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#services"
                className="border border-secondary text-secondary px-8 py-4 text-sm tracking-[0.15em] uppercase font-body rounded-sm hover:bg-secondary hover:text-primary transition-colors duration-200 ease-out"
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

      {/* ── Services Overview ── */}
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

      {/* ── Bartending Packages ── */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn>
            <SectionHeading label="Pricing" title="Bartending Packages" subtitle="Pricing based on a 4-hour event. Built to ensure fast, seamless service." />
          </FadeIn>
          <FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {packages.map((pkg) => (
                <div
                  key={pkg.guests}
                  className="border border-warm-gray/30 p-6 rounded-sm hover:border-accent/50 transition-colors duration-200 ease-out"
                >
                  <h3 className="font-heading text-xl text-primary mb-1">{pkg.guests}</h3>
                  <p className="font-body text-sm text-warm-gray mb-3">{pkg.bartenders}</p>
                  <p className="font-body text-sm text-primary mb-1">{pkg.rate}</p>
                  <p className="font-accent text-lg text-accent">{pkg.starting}</p>
                </div>
              ))}
            </div>
          </FadeIn>
          <FadeIn delay="delay-100">
            <div className="text-center mt-8">
              <Link
                href="/services/bartending"
                className="font-body text-sm text-primary hover:text-accent transition-colors duration-200 ease-out tracking-wide"
              >
                See Full Details &rarr;
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Differentiator ── */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn>
            <SectionHeading title="Not Your Average Mobile Bar" light />
          </FadeIn>
          <FadeIn delay="delay-100">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-5">
              {highlights.map((h) => (
                <li
                  key={h}
                  className="flex items-start gap-3 font-body text-white/80 text-sm md:text-base"
                >
                  <span className="text-accent mt-0.5 shrink-0">&#10003;</span>
                  {h}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      {/* ── Reviews ── */}
      {/* TODO: integrate Google Places Reviews API */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <SectionHeading label="Testimonials" title="What Our Clients Say" />
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {homeReviews.map((r, i) => (
              <FadeIn key={r.name} delay={i === 1 ? "delay-100" : i === 2 ? "delay-200" : ""}>
                <ReviewCard {...r} />
              </FadeIn>
            ))}
          </div>
          <FadeIn delay="delay-200">
            <div className="text-center mt-10">
              <Link
                href="/reviews"
                className="font-body text-sm text-primary hover:text-accent transition-colors duration-200 ease-out tracking-wide"
              >
                Read More Reviews &rarr;
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Instagram Feed ── */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <SectionHeading label="@tbmixology" title="Follow the Pour" />
          </FadeIn>
          <FadeIn delay="delay-100">
            <InstagramFeed />
          </FadeIn>
          <FadeIn delay="delay-200">
            <div className="text-center mt-10">
              <a
                href="https://instagram.com/tbmixology"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm text-primary hover:text-accent transition-colors duration-200 ease-out tracking-wide"
              >
                Follow Us on Instagram &rarr;
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="font-heading text-3xl md:text-5xl text-primary mb-8">
              Your event deserves a great bar.
            </h2>
            <Link
              href="/contact"
              className="inline-block bg-accent text-primary px-10 py-4 text-sm tracking-[0.15em] uppercase font-body rounded-sm hover:bg-accent/90 transition-colors duration-200 ease-out"
            >
              Tell Us About Your Event
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ── LocalBusiness JSON-LD ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "TB Mixology",
            description:
              "Woman-owned mobile bartending serving Tampa Bay. Custom cocktails, private event bartending, cocktail classes, and batch cocktails.",
            url: "https://tb-mixology-site.vercel.app",
            telephone: "",
            areaServed: [
              { "@type": "City", name: "Tampa" },
              { "@type": "City", name: "St. Petersburg" },
              { "@type": "City", name: "Clearwater" },
              { "@type": "City", name: "Sarasota" },
            ],
            priceRange: "$$",
            image: "",
            sameAs: [
              "https://instagram.com/tbmixology",
              "https://www.facebook.com/p/TB-Mixology-100093284260144/",
              "https://www.tiktok.com/@tbmixology",
            ],
          }),
        }}
      />
    </main>
  );
}
