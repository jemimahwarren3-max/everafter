import type { Metadata } from "next";
import { CalendarCheck, Palette, Sparkles, Compass } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Wedding Planning Services | EVERAFTER",
  description:
    "Full planning, partial planning, month-of coordination and bespoke design services for luxury weddings.",
};

const services = [
  {
    icon: Compass,
    title: "Full Planning & Design",
    copy: "From the very first conversation to the last dance, we manage every detail: venue sourcing, vendor curation, budget management, design and full on-site coordination.",
  },
  {
    icon: CalendarCheck,
    title: "Partial Planning",
    copy: "For couples who have already begun planning but want expert guidance from the midpoint onward — vendor refinement, logistics and a clear plan for the final months.",
  },
  {
    icon: Sparkles,
    title: "Month-of Coordination",
    copy: "You've done the planning. We step in roughly a month out to confirm every detail, build the timeline, and manage the day itself so you don't have to.",
  },
  {
    icon: Palette,
    title: "Design & Styling",
    copy: "A dedicated design service for couples who want a distinctive look — florals, stationery, tablescapes and lighting, conceived around your palette and venue.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Wedding Planning Services"
        title="Support for every stage of your celebration."
        image={images.floralArbor}
        imageAlt="A floral arbor styled for a wedding ceremony"
      />

      <section className="mx-auto max-w-7xl px-6 py-24 sm:px-10 sm:py-32">
        <Reveal className="max-w-2xl">
          <p className="font-body text-xs tracking-label uppercase text-sage">
            How We Work
          </p>
          <h2 className="mt-5 font-heading text-4xl leading-tight text-ink sm:text-5xl">
            Four ways to work with us.
          </h2>
          <p className="mt-6 font-body text-base leading-relaxed text-ink/70">
            Every couple begins with a complimentary consultation, where we
            learn about your story and recommend the level of support that
            fits your celebration best.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.1}>
              <service.icon size={28} strokeWidth={1.25} className="text-taupe" />
              <h3 className="mt-5 font-heading text-2xl text-ink">
                {service.title}
              </h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-ink/70">
                {service.copy}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <ConsultationCTA />
    </>
  );
}
