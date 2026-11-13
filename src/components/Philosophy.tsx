import { Reveal } from "./Reveal";

const pillars = [
  {
    number: "01",
    title: "Thoughtful Planning",
    copy: "Every celebration begins with a conversation. We take the time to understand your story, your families and your vision before a single detail is decided.",
  },
  {
    number: "02",
    title: "Bespoke Design",
    copy: "No two weddings we plan look alike. Florals, stationery, lighting and tablescapes are designed from scratch around your palette and your venue.",
  },
  {
    number: "03",
    title: "Flawless Execution",
    copy: "On the day itself, our team manages every moving part so you and your families can be fully present in the moment.",
  },
];

export function Philosophy() {
  return (
    <section className="bg-champagne/60 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <Reveal className="max-w-xl">
          <p className="font-body text-xs tracking-label uppercase text-sage">
            Our Planning Philosophy
          </p>
          <h2 className="mt-5 font-heading text-4xl leading-tight text-ink sm:text-5xl">
            Considered from the first sketch to the last dance.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-3 sm:gap-10">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.number} delay={i * 0.12}>
              <span className="font-heading text-5xl text-taupe">
                {pillar.number}
              </span>
              <h3 className="mt-4 font-heading text-2xl text-ink">
                {pillar.title}
              </h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-ink/70">
                {pillar.copy}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
