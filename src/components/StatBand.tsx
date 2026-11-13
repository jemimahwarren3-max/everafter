import { Reveal } from "./Reveal";
import { Counter } from "./Counter";

const stats = [
  { value: 120, suffix: "+", label: "Celebrations Planned" },
  { value: 9, suffix: "", label: "Years in Practice" },
  { value: 14, suffix: "", label: "Preferred Venues" },
  { value: 100, suffix: "%", label: "Bespoke, Never Templated" },
];

export function StatBand() {
  return (
    <section className="border-y border-ink/10 bg-champagne/40 py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-6 sm:grid-cols-4 sm:px-10">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.08} className="text-center">
            <p className="font-heading text-5xl text-ink sm:text-6xl">
              <Counter value={stat.value} suffix={stat.suffix} />
            </p>
            <p className="mt-2 font-body text-xs tracking-label uppercase text-ink/60">
              {stat.label}
            </p>
          </Reveal>
        ))}
      </div>
      <p className="mt-10 text-center font-body text-[11px] uppercase tracking-label text-ink/40">
        Demo figures for illustration
      </p>
    </section>
  );
}
