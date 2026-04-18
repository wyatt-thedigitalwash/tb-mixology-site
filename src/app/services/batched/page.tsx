import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import SectionHeading from "@/components/SectionHeading";
import DrinkMenu from "@/components/DrinkMenu";
import PricingCard from "@/components/PricingCard";
import SmoothScrollLink from "@/components/SmoothScrollLink";
import Image from "next/image";
import { LocalBusinessJsonLd, BreadcrumbJsonLd, ServiceJsonLd } from "@/components/JsonLd";
import { details } from "@/lib/data/batched";

export const metadata: Metadata = {
  title: "Batched Cocktails | TB Mixology — Tampa Bay Event Bartending",
  description:
    "Handcrafted batched cocktails mixed, prepped, and delivered to your door in Tampa & St. Pete. Each batch makes 26\u201330 drinks.",
  openGraph: {
    title: "Batched Cocktails | TB Mixology — Tampa Bay Event Bartending",
    description:
      "Handcrafted batched cocktails mixed, prepped, and delivered to your door in Tampa & St. Pete. Each batch makes 26\u201330 drinks.",
    images: [{ url: "/og-image.png" }],
  },
  alternates: {
    canonical: "https://tbmixology.com/services/batched",
  },
  twitter: {
    card: "summary_large_image",
    title: "Batched Cocktails | TB Mixology \u2014 Tampa Bay Event Bartending",
    description:
      "Handcrafted batched cocktails mixed, prepped, and delivered to your door in Tampa & St. Pete. Each batch makes 26\u201330 drinks.",
  },
};

export default function BatchedPage() {
  return (
    <main className="bg-secondary">
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-6">
        <SectionHeading
          as="h1"
          label="Services"
          title="Batched Cocktails"
          subtitle="Pre-mixed, ready-to-pour cocktails made with fresh, high-quality ingredients. Ideal for hosting with ease while still offering a polished, consistent drink experience."
        />
        <div className="text-center mt-8">
          <Link
            href="/contact?service=batch"
            className="inline-block bg-accent text-primary px-8 py-4 text-sm tracking-[0.15em] uppercase font-body rounded-sm hover:bg-accent/90 transition-colors duration-200 ease-out"
          >
            Place an Order
          </Link>
        </div>
      </section>

      {/* Details + Image */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <p className="text-xs tracking-[0.25em] uppercase font-body mb-3 text-accent">
                What&apos;s Included
              </p>
              <h2 className="font-heading text-3xl md:text-4xl text-secondary mb-6">
                Everything You Need
              </h2>
              <ul className="space-y-3 mb-8">
                {details.map((detail) => (
                  <li
                    key={detail}
                    className="text-secondary/70 font-body text-sm flex items-start gap-3"
                  >
                    <span className="text-accent mt-0.5 shrink-0">&#8226;</span>
                    {detail}
                  </li>
                ))}
              </ul>
              <SmoothScrollLink
                href="#flavors"
                className="inline-block text-accent font-body text-sm tracking-wide hover:text-accent/80 transition-colors duration-200 ease-out"
              >
                See Flavor Menu &darr;
              </SmoothScrollLink>
            </FadeIn>
            <FadeIn delay="delay-100">
              <div className="relative aspect-video rounded-sm overflow-hidden">
                <Image
                  src="/images/mimosa-bloody-mary-bar-setup.webp"
                  alt="Batch cocktail bar setup with fresh juices, bottles, and garnishes ready to serve"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <SectionHeading
              label="Pricing"
              title="Simple, Transparent Pricing"
            />
          </FadeIn>
          <FadeIn>
            <div className="max-w-2xl mx-auto space-y-2">
              <PricingCard name="1 batch (~26–30 drinks)" price="$120–$150" />
              <PricingCard name="2+ batches (each)" price="$110–$130" />
              <PricingCard
                name="Half batch"
                price="$70–$85"
                note="Available as an add-on to orders with 1+ full batch"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Batch Cocktail Flavors */}
      <section id="flavors" className="py-20 md:py-28 bg-secondary">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn>
            <SectionHeading
              label="Flavors"
              title="Batch Cocktail Menu"
              subtitle="Choose from our full menu of batch cocktail flavors — all made with fresh, high-quality ingredients. Many of these flavors can also be incorporated into your bartending service menu."
            />
          </FadeIn>
          <DrinkMenu />
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <SectionHeading label="Gallery" title="Batch Cocktails in Action" />
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { src: "/images/batch-cocktails/batch-dispensers-menus-garnishes-setup.webp", alt: "Batch cocktail dispensers with printed menus and fresh garnishes" },
              { src: "/images/batch-cocktails/holiday-cocktail-tower-coupe-glasses.webp", alt: "Holiday batch cocktails displayed on a tower of coupe glasses with green bows" },
              { src: "/images/batch-cocktails/cocktail-menus-citrus-garnishes-closeup.webp", alt: "Custom cocktail menus with fresh citrus garnishes and dehydrated fruit" },
              { src: "/images/batch-cocktails/baby-shower-batch-bar-setup.webp", alt: "Batch cocktail bar setup for a baby shower celebration" },
            ].map((img, i) => (
              <FadeIn key={img.src} delay={i % 2 === 1 ? "delay-100" : ""}>
                <div className="relative aspect-[3/4] rounded-sm overflow-hidden">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-primary">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-secondary mb-4 leading-tight">
              Order Batch Cocktails
            </h2>
            <p className="font-accent text-lg md:text-xl text-white/70 mb-10">
              Tell us how many guests and we&rsquo;ll recommend the perfect flavors.
            </p>
            <Link
              href="/contact?service=batch"
              className="inline-block bg-accent text-primary px-12 py-5 text-sm tracking-[0.2em] uppercase font-body font-medium rounded-sm hover:bg-white hover:text-primary transition-colors duration-300 ease-out"
            >
              Place an Order
            </Link>
          </FadeIn>
        </div>
      </section>

      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: "Batched Cocktails", href: "/services/batched" },
        ]}
      />
      <ServiceJsonLd
        name="Batched Cocktails"
        description="Handcrafted batched cocktails mixed, prepped, and delivered for events in Tampa Bay. Each batch makes 26-30 drinks."
      />
    </main>
  );
}
