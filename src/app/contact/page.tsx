import type { Metadata } from "next";
import { Mail, Phone, MapPin } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { EnquiryForm } from "@/components/EnquiryForm";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Contact | EVERAFTER",
  description: "Get in touch with EVERAFTER to start planning your celebration.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's start the conversation."
        image={images.bouquetDetail}
        imageAlt="A bridal bouquet held in warm evening light"
      />

      <section className="mx-auto max-w-7xl px-6 py-24 sm:px-10 sm:py-32">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="font-body text-xs tracking-label uppercase text-sage">
              Get In Touch
            </p>
            <h2 className="mt-5 font-heading text-4xl leading-tight text-ink">
              We&rsquo;d love to hear your story.
            </h2>
            <p className="mt-6 font-body text-base leading-relaxed text-ink/70">
              Tell us about your celebration and we&rsquo;ll be in touch to
              arrange a complimentary consultation.
            </p>

            <div className="mt-10 space-y-4 font-body text-sm text-ink/70">
              <p className="flex items-center gap-3">
                <Mail size={18} className="text-taupe" /> hello@everafter.co.zw
              </p>
              <p className="flex items-center gap-3">
                <Phone size={18} className="text-taupe" /> +263 77 000 0000
              </p>
              <p className="flex items-center gap-3">
                <MapPin size={18} className="text-taupe" /> Harare, by appointment
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-8">
            <EnquiryForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
