"use client";

import Image from "next/image";
import { useState } from "react";
import { Reveal } from "./Reveal";
import { images } from "@/lib/images";

const projects = [
  { title: "A Garden Vow", location: "Harare", src: images.ceremonyKiss, aspect: "aspect-[3/4]" },
  { title: "An Intimate Supper", location: "Bulawayo", src: images.tablescape, aspect: "aspect-[4/3]" },
  { title: "A Savanna Celebration", location: "Hwange", src: images.savannaSunset, aspect: "aspect-[4/3]" },
  { title: "A Floral Arch", location: "Nyanga", src: images.floralArbor, aspect: "aspect-[3/4]" },
  { title: "Golden Hour Vows", location: "Victoria Falls", src: images.lakeChairs, aspect: "aspect-[4/3]" },
  { title: "A Quiet Morning", location: "Harare", src: images.editorialCouple, aspect: "aspect-[3/4]" },
  { title: "The Bridal Details", location: "Bulawayo", src: images.bouquetDetail, aspect: "aspect-[4/3]" },
];

const filters = ["All", "Harare", "Bulawayo", "Victoria Falls", "Hwange", "Nyanga"];

export function PortfolioGrid() {
  const [active, setActive] = useState("All");
  const visible =
    active === "All" ? projects : projects.filter((p) => p.location === active);

  return (
    <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10 sm:py-32">
      <Reveal className="flex flex-wrap gap-3">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActive(filter)}
            className={`border px-4 py-2 font-body text-xs tracking-label uppercase transition-colors ${
              active === filter
                ? "border-ink bg-ink text-ivory"
                : "border-ink/20 text-ink/70 hover:border-ink/60"
            }`}
          >
            {filter}
          </button>
        ))}
      </Reveal>

      <div className="mt-12 columns-1 gap-6 sm:columns-2 lg:columns-3">
        {visible.map((project, i) => (
          <Reveal
            key={project.title}
            delay={(i % 3) * 0.08}
            className="mb-6 break-inside-avoid"
          >
            <div
              data-cursor="View"
              className={`group relative block ${project.aspect} overflow-hidden`}
            >
              <Image
                src={project.src}
                alt={project.title}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-5">
                <h3 className="font-heading text-xl text-ivory">
                  {project.title}
                </h3>
                <p className="mt-1 font-body text-xs tracking-label uppercase text-ivory/80">
                  {project.location}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
