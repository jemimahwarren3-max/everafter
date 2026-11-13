import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { ImageReveal } from "@/components/ImageReveal";
import { ParallaxImage } from "@/components/ParallaxImage";
import { Philosophy } from "@/components/Philosophy";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "About Us | EVERAFTER",
  description:
    "EVERAFTER is a bespoke wedding and events studio planning luxury celebrations across Zimbabwe and beyond.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="The studio behind every detail."
        image={images.editorialCouple}
        imageAlt="A couple walking together beneath palm trees at dusk"
      />

      <section className="mx-auto max-w-7xl px-6 py-24 sm:px-10 sm:py-32">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-7">
            <ImageReveal className="aspect-[4/3]">
              <ParallaxImage
                src={images.tablescape}
                alt="A beautifully styled wedding tablescape"
                className="h-full"
                sizes="(min-width: 1024px) 55vw, 100vw"
              />
            </ImageReveal>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-5">
            <p className="font-body text-xs tracking-label uppercase text-sage">
              Our Story
            </p>
            <h2 className="mt-5 font-heading text-4xl leading-tight text-ink sm:text-5xl">
              Built around one idea: your day should feel like yours.
            </h2>
            <p className="mt-6 font-body text-base leading-relaxed text-ink/70">
              EVERAFTER began as a response to a simple frustration: too many
              luxury weddings started to look the same. We wanted to build a
              studio that treats every celebration as its own creative brief
              &mdash; shaped by the couple, the place, and the story they are
              telling.
            </p>
            <p className="mt-4 font-body text-base leading-relaxed text-ink/70">
              Today we are a small, close-knit team of planners, designers
              and coordinators working on a deliberately limited number of
              weddings each season, so that every one receives the same
              level of attention from first call to last dance.
            </p>
          </Reveal>
        </div>
      </section>

      <Philosophy />

      <section className="mx-auto max-w-4xl px-6 py-24 text-center sm:px-10 sm:py-32">
        <Reveal>
          <p className="font-accent text-2xl text-taupe sm:text-3xl">
            Our approach
          </p>
          <h2 className="mt-5 font-heading text-3xl leading-snug text-ink sm:text-4xl">
            We plan a limited number of weddings each year &mdash; not
            because we have to, but because every detail deserves our full
            attention.
          </h2>
        </Reveal>
      </section>

      <ConsultationCTA />
    </>
  );
}
