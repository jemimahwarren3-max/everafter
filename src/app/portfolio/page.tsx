import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { PortfolioGrid } from "@/components/PortfolioGrid";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Portfolio | EVERAFTER",
  description:
    "A selection of EVERAFTER weddings and celebrations across Harare, Bulawayo, Victoria Falls, Hwange and Nyanga.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="A glimpse into our world."
        image={images.ceremonyKiss}
        imageAlt="A couple celebrating at their wedding ceremony"
      />
      <PortfolioGrid />
      <ConsultationCTA />
    </>
  );
}
