import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import SectionHeading from "@/components/SectionHeading";
import Image from "next/image";
import { values } from "@/lib/data/about";

export const metadata: Metadata = {
  title: "About | TB Mixology — Tampa Bay Event Bartending",
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
                src="/images/tb-mixology-founders-outdoor-bar.webp"
                alt="TB Mixology founders working behind a portable bar at an outdoor event"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div>
              <SectionHeading label="Our Story" title="How It Started" />
              {/* REPLACE: Emma to fill in personal story */}
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
    </main>
  );
}
