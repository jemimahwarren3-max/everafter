import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

const columns = [
  {
    title: "Studio",
    links: [
      { href: "/about", label: "About Us" },
      { href: "/services", label: "Wedding Planning" },
      { href: "/packages", label: "Packages" },
      { href: "/journal", label: "Journal" },
    ],
  },
  {
    title: "Celebrations",
    links: [
      { href: "/portfolio", label: "Portfolio" },
      { href: "/venues", label: "Venues" },
      { href: "/vendors", label: "Preferred Vendors" },
      { href: "/consultation", label: "Book a Consultation" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-ink text-ivory">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-4">
          <div className="sm:col-span-2">
            <p className="font-heading text-3xl">everafter</p>
            <p className="mt-4 max-w-xs font-body text-sm leading-relaxed text-ivory/70">
              Luxury weddings and bespoke celebrations, thoughtfully planned
              for every destination.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="font-body text-xs tracking-label uppercase text-taupe">
                {col.title}
              </p>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-body text-sm text-ivory/80 transition-colors hover:text-ivory"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-ivory/15 pt-8 text-sm text-ivory/70 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-2 sm:flex-row sm:gap-8">
            <span className="flex items-center gap-2">
              <Mail size={16} /> hello@everafter.co.zw
            </span>
            <span className="flex items-center gap-2">
              <Phone size={16} /> +263 77 000 0000
            </span>
            <span className="flex items-center gap-2">
              <MapPin size={16} /> Harare
            </span>
          </div>
          <p>&copy; 2026 EVERAFTER. Demo content for development purposes.</p>
        </div>
      </div>
    </footer>
  );
}
