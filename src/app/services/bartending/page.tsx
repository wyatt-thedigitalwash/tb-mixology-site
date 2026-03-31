import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import SectionHeading from "@/components/SectionHeading";
import { MessageSquare, BookOpen, User, Wrench, Snowflake, FileText } from "lucide-react";
import { packages, included, bartendingAddOns } from "@/lib/data/bartending";

const includedIcons = [MessageSquare, BookOpen, User, Wrench, Snowflake, FileText];

export const metadata: Metadata = {
  title: "Bartending Services | TB Mixology — Tampa Bay Event Bartending",
  description:
    "Professional mobile bartending for events of all sizes — custom cocktail menus, full bar setup, and seamless service. Serving Tampa, St. Pete, Clearwater, and Sarasota.",
  openGraph: {
    title: "Bartending Services | TB Mixology — Tampa Bay Event Bartending",
    description:
      "Professional mobile bartending for events of all sizes — custom cocktail menus, full bar setup, and seamless service. Serving Tampa, St. Pete, Clearwater, and Sarasota.",
  },
};

export default function BartendingPage() {
  return (
    <main className="bg-secondary">
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-6">
        <SectionHeading
          label="Services"
          title="Bartending Services"
          subtitle="Professional mobile bartending tailored to your event, your style, and your guest count. Every detail handled with care."
        />
        <div className="text-center mt-8">
          <Link
            href="/contact"
            className="inline-block bg-accent text-primary px-8 py-4 text-sm tracking-[0.15em] uppercase font-body rounded-sm hover:bg-accent/90 transition-colors duration-200 ease-out"
          >
            Book Your Bar
          </Link>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="max-w-5xl mx-auto px-6">
          <FadeIn>
            <SectionHeading
              label="The Experience"
              title="What&rsquo;s Included"
              light
            />
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {included.map((item, i) => {
              const Icon = includedIcons[i];
              return (
                <FadeIn key={item.title} delay={i % 3 === 1 ? "delay-100" : i % 3 === 2 ? "delay-200" : ""}>
                  <div className="border border-white/10 rounded-sm p-6 text-center hover:border-accent/30 transition-colors duration-200 ease-out">
                    <Icon size={28} className="text-accent mx-auto mb-4" strokeWidth={1.5} />
                    <h3 className="font-heading text-lg text-secondary mb-2">{item.title}</h3>
                    <p className="font-body text-sm text-white/60 leading-relaxed">{item.description}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn>
            <SectionHeading
              label="Pricing"
              title="Packages by Guest Count"
            />
          </FadeIn>
          <FadeIn>
            <div className="border border-warm-gray/30 rounded-sm overflow-hidden">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-warm-gray/30">
                    <th className="px-6 py-4 font-body text-xs text-warm-gray uppercase tracking-wider">
                      Guest Count
                    </th>
                    <th className="px-6 py-4 font-body text-xs text-warm-gray uppercase tracking-wider hidden sm:table-cell">
                      Staffing
                    </th>
                    <th className="px-6 py-4 font-body text-xs text-warm-gray uppercase tracking-wider hidden md:table-cell">
                      Rate
                    </th>
                    <th className="px-6 py-4 font-body text-xs text-warm-gray uppercase tracking-wider text-right">
                      Starting At
                    </th>
                  </tr>
                </thead>
                <tbody className="font-body text-base text-primary">
                  {packages.map((pkg, i) => (
                    <tr
                      key={pkg.guests}
                      className={i < packages.length - 1 ? "border-b border-warm-gray/15" : ""}
                    >
                      <td className="px-6 py-4 font-medium">{pkg.guests}</td>
                      <td className="px-6 py-4 text-warm-gray hidden sm:table-cell">{pkg.bartenders}</td>
                      <td className="px-6 py-4 text-warm-gray hidden md:table-cell">{pkg.rate}</td>
                      <td className="px-6 py-4 text-right font-accent text-accent text-lg font-medium">
                        {pkg.starting}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-center text-warm-gray font-body text-sm mt-4 italic">
              Based on a 4-hour event. Our pricing is built to ensure fast, seamless service.
            </p>
          </FadeIn>

          {/* Mobile card view */}
          <div className="sm:hidden mt-8 space-y-4">
            {packages.map((pkg) => (
              <FadeIn key={pkg.guests}>
                <div className="border border-warm-gray/30 p-5 rounded-sm">
                  <h3 className="font-heading text-lg text-primary mb-1">{pkg.guests}</h3>
                  <p className="font-body text-sm text-warm-gray mb-1">{pkg.bartenders}</p>
                  <p className="font-body text-sm text-warm-gray mb-2">{pkg.rate}</p>
                  <p className="font-accent text-lg text-accent">{pkg.starting}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Bartending Add-Ons */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn>
            <SectionHeading
              label="Extras"
              title="Available Add-Ons"
            />
          </FadeIn>
          <FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {bartendingAddOns.map((addon) => (
                <div
                  key={addon.name}
                  className="border border-warm-gray/30 rounded-sm p-4 flex justify-between items-start gap-4"
                >
                  <span className="font-body text-base text-primary">
                    {addon.name}
                  </span>
                  <span className="font-accent text-accent text-lg whitespace-nowrap">
                    {addon.price}
                  </span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-primary">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-secondary mb-4 leading-tight">
              Ready to Book Your Bar?
            </h2>
            <p className="font-accent text-lg md:text-xl text-white/70 mb-10">
              Tell us about your event and we&rsquo;ll recommend the perfect package.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-accent text-primary px-12 py-5 text-sm tracking-[0.2em] uppercase font-body font-medium rounded-sm hover:bg-white hover:text-primary transition-colors duration-300 ease-out"
            >
              Get in Touch
            </Link>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
