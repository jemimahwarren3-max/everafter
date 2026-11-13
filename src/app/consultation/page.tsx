import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { ConsultationForm } from "@/components/ConsultationForm";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Book a Consultation | EVERAFTER",
  description: "Book a complimentary consultation with EVERAFTER.",
};

export default function ConsultationPage() {
  return (
    <>
      <PageHero
        eyebrow="Book a Consultation"
        title="Your story deserves a beautiful beginning."
        image={images.ceremonyKiss}
        imageAlt="A couple celebrating at their wedding ceremony"
      />

      <section className="mx-auto max-w-3xl px-6 py-24 sm:px-10 sm:py-32">
        <Reveal>
          <p className="font-body text-xs tracking-label uppercase text-sage">
            Complimentary Consultation
          </p>
          <h2 className="mt-5 font-heading text-4xl leading-tight text-ink">
            Choose a date and time that suits you.
          </h2>
          <p className="mt-6 font-body text-base leading-relaxed text-ink/70">
            Consultations run for around 45 minutes, in person in Harare or
            over a video call for destination clients. We&rsquo;ll confirm
            your slot by email once it&rsquo;s secured.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          <ConsultationForm />
        </Reveal>
      </section>
    </>
  );
}
