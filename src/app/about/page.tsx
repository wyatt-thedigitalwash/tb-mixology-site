import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import SectionHeading from "@/components/SectionHeading";
import PlaceholderImage from "@/components/PlaceholderImage";

export const metadata: Metadata = {
  title: "About | TB Mixology — Tampa Bay Event Bartending",
};

const team = [
  { name: "Emma Nichter", role: "Director of Operations", img: "Headshot — replace" },
  { name: "Brooke", role: "Lead Bartender", img: "Headshot — replace" },
  { name: "Your Bartender", role: "Growing Team", img: "Headshot — replace" },
];

const values = [
  {
    title: "Fully Custom Everything",
    description: "Every cocktail menu is created from scratch for your event.",
  },
  {
    title: "Fresh Ingredients Always",
    description:
      "No cheap mixes or shortcuts — real fruit, real herbs, real flavor.",
  },
  {
    title: "Woman-Owned & Operated",
    description: "Built by women who care deeply about the details.",
  },
  {
    title: "Fully Insured",
    description: "Covered up to $2,000,000 for your peace of mind.",
  },
];

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
            <PlaceholderImage
              label="Team photo — replace"
              aspect="portrait"
              className="rounded-lg"
            />
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

      {/* Team */}
      <section className="bg-primary py-20 md:py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <SectionHeading title="The Team" centered light />
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mt-12">
            {team.map((member, i) => (
              <FadeIn key={member.name} delay={i === 1 ? "delay-100" : i === 2 ? "delay-200" : ""}>
                <div className="text-center">
                  <PlaceholderImage
                    label={member.img}
                    aspect="square"
                    className="rounded-lg mb-4"
                  />
                  <h3 className="font-heading text-xl text-secondary">
                    {member.name}
                  </h3>
                  <p className="text-warm-gray font-body text-sm mt-1">
                    {member.role}
                  </p>
                </div>
              </FadeIn>
            ))}
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
    </main>
  );
}
