import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Magnetic } from "@/components/Magnetic";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Packages | EVERAFTER",
  description:
    "Indicative EVERAFTER wedding planning packages — Essential, Signature and Bespoke.",
};

const packages = [
  {
    name: "Essential",
    tagline: "Month-of coordination",
    price: "From $1,800",
    features: [
      "Coordination from 6 weeks out",
      "Timeline & vendor confirmation",
      "Full day-of management",
      "One planning walkthrough",
    ],
  },
  {
    name: "Signature",
    tagline: "Partial planning & design",
    price: "From $4,500",
    highlighted: true,
    features: [
      "Everything in Essential",
      "Vendor curation & negotiation",
      "Design direction & styling",
      "Budget management",
      "Unlimited planning calls",
    ],
  },
  {
    name: "Bespoke",
    tagline: "Full planning & design",
    price: "By consultation",
    features: [
      "Everything in Signature",
      "Venue sourcing from scratch",
      "Guest experience & logistics",
      "Multi-day celebration planning",
      "Dedicated lead planner",
    ],
  },
];

export default function PackagesPage() {
  return (
    <>
      <PageHero
        eyebrow="Packages"
        title="Three ways to begin."
        image={images.tablescape}
        imageAlt="An elegantly styled wedding table setting"
      />

      <section className="mx-auto max-w-7xl px-6 py-24 sm:px-10 sm:py-32">
        <Reveal className="max-w-2xl">
          <p className="font-body text-xs tracking-label uppercase text-sage">
            Indicative Pricing
          </p>
          <h2 className="mt-5 font-heading text-4xl leading-tight text-ink sm:text-5xl">
            Every wedding is quoted individually.
          </h2>
          <p className="mt-6 font-body text-base leading-relaxed text-ink/70">
            These packages are a starting point for the conversation, not a
            fixed menu. Final pricing depends on guest count, venue, season
            and scope — we&rsquo;ll confirm everything in your consultation.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {packages.map((pkg, i) => (
            <Reveal key={pkg.name} delay={i * 0.1}>
              <div
                className={`flex h-full flex-col border p-8 ${
                  pkg.highlighted
                    ? "border-taupe bg-champagne/40"
                    : "border-ink/10"
                }`}
              >
                <p className="font-body text-xs tracking-label uppercase text-sage">
                  {pkg.tagline}
                </p>
                <h3 className="mt-3 font-heading text-3xl text-ink">
                  {pkg.name}
                </h3>
                <p className="mt-2 font-heading text-2xl text-taupe">
                  {pkg.price}
                </p>
                <ul className="mt-6 flex-1 space-y-3">
                  {pkg.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 font-body text-sm text-ink/70"
                    >
                      <Check size={16} className="mt-0.5 shrink-0 text-sage" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Magnetic className="mt-8 inline-block">
                  <Link
                    href="/consultation"
                    className="inline-block border border-ink px-6 py-3 font-body text-xs tracking-label uppercase text-ink transition-colors hover:bg-ink hover:text-ivory"
                  >
                    Enquire
                  </Link>
                </Magnetic>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-10 text-center font-body text-[11px] uppercase tracking-label text-ink/40">
          Demo pricing for illustration
        </p>
      </section>

      <ConsultationCTA />
    </>
  );
}
