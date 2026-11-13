import { Reveal } from "./Reveal";

export function Testimonial() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-24 text-center sm:px-10 sm:py-32">
      <Reveal>
        <p className="font-accent text-xs tracking-label uppercase text-sage">
          Demo Testimonial
        </p>
        <p className="mt-8 font-heading text-3xl leading-snug text-ink sm:text-4xl">
          &ldquo;From our first call to the last toast of the evening, every
          detail felt considered. EVERAFTER gave us a wedding that was
          entirely, unmistakably ours.&rdquo;
        </p>
        <p className="mt-6 font-body text-sm tracking-label uppercase text-ink/60">
          Tendai &amp; Rufaro &middot; Victoria Falls
        </p>
      </Reveal>
    </section>
  );
}
