import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./Reveal";
import { TiltCard } from "./TiltCard";
import { images } from "@/lib/images";

const featured = [
  {
    src: images.ceremonyKiss,
    title: "A Garden Vow",
    location: "Harare",
  },
  {
    src: images.tablescape,
    title: "An Intimate Supper",
    location: "Bulawayo",
  },
  {
    src: images.savannaSunset,
    title: "A Savanna Celebration",
    location: "Hwange",
  },
  {
    src: images.floralArbor,
    title: "A Floral Arch",
    location: "Nyanga",
  },
];

export function FeaturedWork() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <Reveal className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="font-body text-xs tracking-label uppercase text-sage">
              Featured Celebrations
            </p>
            <h2 className="mt-5 font-heading text-4xl leading-tight text-ink sm:text-5xl">
              A glimpse into our world.
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="font-body text-xs tracking-label uppercase text-ink underline underline-offset-4"
          >
            View Full Portfolio ↗
          </Link>
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <div
          data-cursor="Drag"
          className="no-scrollbar mt-14 flex gap-6 overflow-x-auto px-6 pb-4 sm:px-10"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {featured.map((item) => (
            <div
              key={item.title}
              className="w-[78vw] shrink-0 sm:w-[32vw] lg:w-[26vw]"
              style={{ scrollSnapAlign: "start" }}
            >
              <TiltCard>
                <Link
                  href="/portfolio"
                  data-cursor="View"
                  className="group relative block aspect-[3/4] overflow-hidden"
                >
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 26vw, (min-width: 640px) 32vw, 78vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="font-heading text-2xl text-ivory">
                      {item.title}
                    </h3>
                    <p className="mt-1 font-body text-xs tracking-label uppercase text-ivory/80">
                      {item.location}
                    </p>
                  </div>
                </Link>
              </TiltCard>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
