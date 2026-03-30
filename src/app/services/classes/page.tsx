import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import SectionHeading from "@/components/SectionHeading";
import Image from "next/image";
import PlaceholderImage from "@/components/PlaceholderImage";
import { perfectFor } from "@/lib/data/classes";

export const metadata: Metadata = {
  title: "Cocktail Classes | TB Mixology — Tampa Bay Event Bartending",
  description:
    "Interactive, hands-on cocktail classes for bachelorette parties, team events, brand activations, and private parties in Tampa Bay.",
  openGraph: {
    title: "Cocktail Classes | TB Mixology — Tampa Bay Event Bartending",
    description:
      "Interactive, hands-on cocktail classes for bachelorette parties, team events, brand activations, and private parties in Tampa Bay.",
  },
};

export default function ClassesPage() {
  return (
    <main className="bg-secondary">
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-6">
        <SectionHeading
          label="Services"
          title="Cocktail Classes"
          subtitle="Interactive, hands-on cocktail classes in a guided social setting. Equal parts fun and elevated."
        />
        <div className="text-center mt-8">
          <Link
            href="/contact"
            className="inline-block bg-accent text-primary px-8 py-4 text-sm tracking-[0.15em] uppercase font-body rounded-sm hover:bg-accent/90 transition-colors duration-200 ease-out"
          >
            Book a Class
          </Link>
        </div>
      </section>

      {/* Image + Description */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div className="relative aspect-video rounded-sm overflow-hidden">
                <Image
                  src="/images/cocktail-class-group-espresso-martinis.webp"
                  alt="Group of women at a TB Mixology cocktail class holding espresso martinis"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </FadeIn>
            <FadeIn delay="delay-100">
              <p className="text-xs tracking-[0.25em] uppercase font-body mb-3 text-accent">
                The Experience
              </p>
              <h2 className="font-heading text-3xl md:text-4xl text-secondary mb-6">
                Learn, Shake, Sip
              </h2>
              <p className="font-body text-secondary/70 leading-relaxed mb-6">
                Our cocktail classes are designed to be a fun, social experience
                where your group learns to craft handcrafted cocktails guided by
                a professional bartender. Everyone gets hands-on time with
                shakers, jiggers, and fresh ingredients while learning techniques
                and cocktail history along the way.
              </p>
              <p className="font-body text-secondary/70 leading-relaxed">
                Whether you want a laid-back evening with friends or an energetic
                team-building activity, we tailor the class to your vibe.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Perfect For */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <SectionHeading
              label="Ideal For"
              title="Perfect For"
              subtitle="Cocktail classes make a memorable addition to any kind of gathering."
            />
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {perfectFor.map((item, i) => (
              <FadeIn key={item} delay={i === 1 ? "delay-100" : i === 2 ? "delay-200" : i === 3 ? "delay-300" : ""}>
                <div className="border border-warm-gray/30 rounded-sm p-6 text-center hover:border-accent/50 transition-colors duration-200 ease-out">
                  <h3 className="font-heading text-lg text-primary">{item}</h3>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Placeholder */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <SectionHeading label="Gallery" title="Class Moments" />
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["Shaking cocktails", "Group learning", "Final presentation"].map(
              (label, i) => (
                <FadeIn key={label} delay={i === 1 ? "delay-100" : i === 2 ? "delay-200" : ""}>
                  <PlaceholderImage
                    label={`Photo — ${label}`}
                    className="rounded-sm"
                    aspect="square"
                  />
                </FadeIn>
              )
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-primary">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-secondary mb-4 leading-tight">
              Book a Cocktail Class
            </h2>
            <p className="font-accent text-lg md:text-xl text-white/70 mb-10">
              Tell us about your group and we&rsquo;ll tailor the perfect experience.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-accent text-primary px-12 py-5 text-sm tracking-[0.2em] uppercase font-body font-medium rounded-sm hover:bg-white hover:text-primary transition-colors duration-300 ease-out"
            >
              Book a Class
            </Link>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
