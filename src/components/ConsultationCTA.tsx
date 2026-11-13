import Link from "next/link";
import { Reveal } from "./Reveal";
import { KenBurnsImage } from "./KenBurnsImage";
import { Magnetic } from "./Magnetic";
import { images } from "@/lib/images";

export function ConsultationCTA() {
  return (
    <section className="relative flex min-h-[60vh] items-center overflow-hidden">
      <KenBurnsImage
        src={images.bouquetDetail}
        alt="A bridal bouquet held in warm evening light"
      />
      <div className="absolute inset-0 bg-ink/65" />

      <div className="relative z-10 mx-auto w-full max-w-3xl px-6 py-24 text-center sm:px-10">
        <Reveal>
          <p className="font-accent text-2xl text-ivory sm:text-3xl">
            Let&rsquo;s make it unforgettable.
          </p>
          <h2 className="mt-5 font-heading text-4xl leading-tight text-ivory sm:text-5xl">
            Your story deserves a beautiful beginning.
          </h2>
          <Magnetic className="mt-10 inline-block">
            <Link
              href="/consultation"
              className="inline-block bg-ivory px-8 py-3 font-body text-xs tracking-label uppercase text-ink transition-opacity hover:opacity-90"
            >
              Book a Consultation ↗
            </Link>
          </Magnetic>
        </Reveal>
      </div>
    </section>
  );
}
