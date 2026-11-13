import { Reveal } from "./Reveal";
import { ParallaxImage } from "./ParallaxImage";
import { ImageReveal } from "./ImageReveal";
import { images } from "@/lib/images";

export function EditorialIntro() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 sm:px-10 sm:py-32">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <p className="font-body text-xs tracking-label uppercase text-sage">
            The Art of Celebration
          </p>
          <h2 className="mt-5 font-heading text-4xl leading-tight text-ink sm:text-5xl">
            Every detail tells a story.
          </h2>
          <p className="mt-6 max-w-md font-body text-base leading-relaxed text-ink/70">
            EVERAFTER is a bespoke wedding and events studio for couples who
            want their celebration to feel entirely their own. From an
            intimate garden ceremony to a destination wedding in the
            wilderness, we plan every detail with care, craftsmanship and an
            eye for the extraordinary.
          </p>
          <p className="mt-4 max-w-md font-accent text-xl text-taupe">
            Thoughtfully planned. Beautifully remembered.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="lg:col-span-7">
          <ImageReveal className="aspect-[4/5]">
            <ParallaxImage
              src={images.editorialCouple}
              alt="A couple walking together beneath palm trees at dusk"
              className="h-full"
              sizes="(min-width: 1024px) 60vw, 100vw"
            />
          </ImageReveal>
        </Reveal>
      </div>
    </section>
  );
}
