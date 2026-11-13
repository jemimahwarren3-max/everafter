import Image from "next/image";
import { SplitHeading } from "./SplitHeading";

export function PageHero({
  eyebrow,
  title,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <section className="relative flex h-[56vh] min-h-[380px] items-end overflow-hidden">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/30 to-ink/40" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-14 sm:px-10">
        <p className="font-body text-xs tracking-label uppercase text-ivory/80">
          {eyebrow}
        </p>
        <h1 className="mt-4 font-heading text-5xl leading-tight text-ivory sm:text-6xl">
          <SplitHeading text={title} />
        </h1>
      </div>
    </section>
  );
}
