import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { ImageReveal } from "@/components/ImageReveal";
import { ParallaxImage } from "@/components/ParallaxImage";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Venues | EVERAFTER",
  description:
    "A curated selection of venues across Harare, Victoria Falls, Lake Kariba, Hwange and Nyanga.",
};

const venues = [
  {
    name: "Harare",
    copy: "Private gardens, historic estates and city venues for an elegant celebration close to home.",
    detail: "Capacity typically 50–300 guests, indoor and outdoor options.",
    src: images.floralArbor,
  },
  {
    name: "Victoria Falls",
    copy: "The thunder of the Falls and the gold of the Zambezi sunset, for couples dreaming of a destination wedding.",
    detail: "Lodge and riverside venues, ideal for 2–5 day celebrations.",
    src: images.lakeChairs,
  },
  {
    name: "Lake Kariba & Hwange",
    copy: "Safari lodges and lakeside retreats in the bushveld, for an intimate gathering under an endless sky.",
    detail: "Best suited to intimate celebrations of 20–80 guests.",
    src: images.ceremonyKiss,
  },
  {
    name: "Nyanga",
    copy: "Mist-covered mountains, pine forests and highland gardens for a cooler, more intimate atmosphere.",
    detail: "A quieter alternative for small, design-led weddings.",
    src: images.savannaSunset,
  },
];

export default function VenuesPage() {
  return (
    <>
      <PageHero
        eyebrow="Venues"
        title="Wherever you imagine saying yes."
        image={images.lakeChairs}
        imageAlt="Reception seating set up beside a calm lake"
      />

      <section className="mx-auto max-w-7xl px-6 py-24 sm:px-10 sm:py-32">
        <Reveal className="max-w-2xl">
          <p className="font-body text-xs tracking-label uppercase text-sage">
            Our Venues
          </p>
          <h2 className="mt-5 font-heading text-4xl leading-tight text-ink sm:text-5xl">
            A venue for every kind of celebration.
          </h2>
          <p className="mt-6 font-body text-base leading-relaxed text-ink/70">
            We work with a trusted network of venues and can also source new
            locations for couples with a specific place in mind. Below are a
            few of our favourites.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-16">
          {venues.map((venue, i) => (
            <Reveal key={venue.name} delay={i * 0.08}>
              <div
                className={`grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14 ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <ImageReveal className="aspect-[4/3] lg:col-span-7" delay={i * 0.05}>
                  <ParallaxImage
                    src={venue.src}
                    alt={venue.name}
                    className="h-full"
                    sizes="(min-width: 1024px) 58vw, 100vw"
                  />
                </ImageReveal>
                <div className="lg:col-span-5">
                  <h3 className="font-heading text-3xl text-ink sm:text-4xl">
                    {venue.name}
                  </h3>
                  <p className="mt-4 font-body text-base leading-relaxed text-ink/70">
                    {venue.copy}
                  </p>
                  <p className="mt-4 font-body text-xs tracking-label uppercase text-sage">
                    {venue.detail}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <ConsultationCTA />
    </>
  );
}
