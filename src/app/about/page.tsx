import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import SectionHeading from "@/components/SectionHeading";
import Image from "next/image";
import { values } from "@/lib/data/about";
import { LocalBusinessJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "About | TB Mixology — Tampa Bay Event Bartending",
  description:
    "Meet the team behind TB Mixology — a woman-owned mobile bartending company based in St. Pete, FL serving Tampa Bay with custom cocktails and unforgettable bar experiences.",
  openGraph: {
    title: "About | TB Mixology — Tampa Bay Event Bartending",
    description:
      "Meet the team behind TB Mixology — a woman-owned mobile bartending company based in St. Pete, FL serving Tampa Bay with custom cocktails and unforgettable bar experiences.",
    images: [{ url: "/og-image.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About | TB Mixology — Tampa Bay Event Bartending",
    description:
      "Meet the team behind TB Mixology — woman-owned mobile bartending in St. Pete, FL.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://tbmixology.com/about",
  },
};

export default function AboutPage() {
  return (
    <main className="bg-secondary">
      {/* Hero */}
      <section className="py-24 md:py-32 text-center px-6">
        <FadeIn>
          <p className="text-accent font-accent text-lg tracking-wide mb-3">
            Woman-owned &amp; operated, St.&nbsp;Pete-based
          </p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary">
            Meet TB Mixology
          </h1>
        </FadeIn>
      </section>

      {/* Our Story */}
      <section className="max-w-6xl mx-auto px-6 pb-20 md:pb-28">
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
              <Image
                src="/images/about-us/emma-brooke-together.webp"
                alt="Emma Nichter and Brooke Krimmel, founders of TB Mixology"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div>
              <SectionHeading label="Our Story" title="How It Started" />
              <div className="space-y-4 text-warm-gray font-body leading-relaxed">
                <p>
                  TB Mixology was founded with a simple belief: every event
                  deserves a thoughtfully crafted bar experience — not a
                  last-minute afterthought.
                </p>
                <p>
                  What began as a passion for creative cocktails and memorable
                  gatherings quickly grew into a full-service bartending company
                  serving Tampa Bay and beyond.
                </p>
                <p>
                  We bring fresh ingredients, custom menus, and genuine
                  hospitality to every event we touch — from intimate backyard
                  celebrations to large-scale weddings.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* The Team */}
      <section className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <FadeIn>
            <SectionHeading title="The Team" />
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-2xl mx-auto">
            {/* Brooke */}
            <FadeIn>
              <div className="text-center">
                <div className="relative aspect-[3/4] rounded-sm overflow-hidden mb-4">
                  <Image
                    src="/images/about-us/brooke-krimmel-headshot.webp"
                    alt="Brooke Krimmel, Founder of TB Mixology"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="font-heading text-xl text-primary">
                  Brooke Krimmel
                </h3>
                <p className="text-warm-gray font-body text-sm mt-1">
                  Founder
                </p>
              </div>
            </FadeIn>

            {/* Emma */}
            <FadeIn delay="delay-100">
              <div className="text-center">
                <div className="relative aspect-[3/4] rounded-sm overflow-hidden mb-4">
                  <Image
                    src="/images/about-us/emma-nichter-headshot.webp"
                    alt="Emma Nichter, Director of Operations at TB Mixology"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="font-heading text-xl text-primary">
                  Emma Nichter
                </h3>
                <p className="text-warm-gray font-body text-sm mt-1">
                  Director of Operations
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <FadeIn>
          <SectionHeading title="What Sets Us Apart" centered />
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {values.map((v, i) => (
            <FadeIn key={v.title} delay={i === 1 ? "delay-100" : i === 2 ? "delay-200" : i === 3 ? "delay-300" : ""}>
              <div className="text-center">
                <h3 className="font-heading text-lg text-primary mb-2">
                  {v.title}
                </h3>
                <p className="text-warm-gray font-body text-sm leading-relaxed">
                  {v.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <LocalBusinessJsonLd />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
        ]}
      />
    </main>
  );
}
