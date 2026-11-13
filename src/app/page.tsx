import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { EditorialIntro } from "@/components/EditorialIntro";
import { StatBand } from "@/components/StatBand";
import { Philosophy } from "@/components/Philosophy";
import { FeaturedWork } from "@/components/FeaturedWork";
import { Destinations } from "@/components/Destinations";
import { Testimonial } from "@/components/Testimonial";
import { ConsultationCTA } from "@/components/ConsultationCTA";

const marqueeWords = [
  "ROMANTIC",
  "REFINED",
  "INTIMATE",
  "TIMELESS",
  "EXCLUSIVE",
];

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee
        words={marqueeWords}
        className="border-y border-ink/10 bg-ivory py-6 text-ink/20"
      />
      <EditorialIntro />
      <StatBand />
      <Philosophy />
      <FeaturedWork />
      <Destinations />
      <Testimonial />
      <ConsultationCTA />
    </>
  );
}
