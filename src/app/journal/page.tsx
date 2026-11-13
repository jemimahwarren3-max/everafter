import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Journal | EVERAFTER",
  description: "Notes on luxury wedding planning, design and destinations.",
};

const posts = [
  {
    title: "How to Choose a Destination Wedding Venue",
    excerpt:
      "What to weigh up before committing to a destination — logistics, guest travel, and finding a venue that matches your story.",
    src: images.lakeChairs,
    tag: "Planning",
  },
  {
    title: "Building a Wedding Palette That Lasts",
    excerpt:
      "Why the best wedding colour palettes are built around the venue and the season, not the latest trend.",
    src: images.tablescape,
    tag: "Design",
  },
  {
    title: "A Season of Celebrations in the Bushveld",
    excerpt:
      "Notes from a year of planning safari-lodge weddings — timing, weather, and working with the landscape.",
    src: images.savannaSunset,
    tag: "Destinations",
  },
];

export default function JournalPage() {
  return (
    <>
      <PageHero
        eyebrow="Journal"
        title="Notes on planning and design."
        image={images.tablescape}
        imageAlt="A styled wedding table setting"
      />

      <section className="mx-auto max-w-7xl px-6 py-24 sm:px-10 sm:py-32">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <Reveal key={post.title} delay={i * 0.1}>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={post.src}
                  alt={post.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <p className="mt-5 font-body text-xs tracking-label uppercase text-sage">
                {post.tag}
              </p>
              <h3 className="mt-2 font-heading text-2xl leading-snug text-ink">
                {post.title}
              </h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-ink/70">
                {post.excerpt}
              </p>
            </Reveal>
          ))}
        </div>

        <p className="mt-16 text-center font-body text-[11px] uppercase tracking-label text-ink/40">
          Demo articles for illustration
        </p>
      </section>

      <ConsultationCTA />
    </>
  );
}
