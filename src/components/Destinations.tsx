import { Reveal } from "./Reveal";
import { ParallaxImage } from "./ParallaxImage";
import { ImageReveal } from "./ImageReveal";
import { images } from "@/lib/images";

const destinations = [
  {
    name: "Harare",
    copy: "Private gardens, historic estates and city venues for an elegant celebration close to home.",
    src: images.floralArbor,
  },
  {
    name: "Victoria Falls",
    copy: "The thunder of the Falls and the gold of the Zambezi sunset, for couples dreaming of a destination wedding.",
    src: images.lakeChairs,
  },
  {
    name: "Lake Kariba & Hwange",
    copy: "Safari lodges and lakeside retreats in the bushveld, for an intimate gathering under an endless sky.",
    src: images.ceremonyKiss,
  },
];

export function Destinations() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-ivory sm:py-32">
      <p
        aria-hidden
        className="pointer-events-none absolute -top-6 left-1/2 w-full -translate-x-1/2 select-none text-center font-heading text-[22vw] leading-none text-ivory/5 sm:text-[16vw]"
      >
        everafter
      </p>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10">
        <Reveal className="max-w-xl">
          <p className="font-body text-xs tracking-label uppercase text-taupe">
            Our Destinations
          </p>
          <h2 className="mt-5 font-heading text-4xl leading-tight sm:text-5xl">
            Celebrations across our favourite destinations.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-3">
          {destinations.map((d, i) => (
            <Reveal key={d.name} delay={i * 0.12}>
              <ImageReveal className="aspect-[3/4]" delay={i * 0.1}>
                <ParallaxImage
                  src={d.src}
                  alt={d.name}
                  className="h-full"
                  sizes="(min-width: 640px) 33vw, 100vw"
                />
              </ImageReveal>
              <h3 className="mt-5 font-heading text-2xl">{d.name}</h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-ivory/70">
                {d.copy}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
