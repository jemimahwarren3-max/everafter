import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, Italiana } from "next/font/google";
import { Chrome } from "@/components/Chrome";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const italiana = Italiana({
  variable: "--font-accent",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "EVERAFTER | Luxury Weddings & Bespoke Celebrations",
  description:
    "EVERAFTER designs and plans extraordinary luxury weddings and bespoke celebrations. Some moments deserve to be extraordinary.",
  openGraph: {
    title: "EVERAFTER | Luxury Weddings & Bespoke Celebrations",
    description:
      "Thoughtfully curated celebrations, beautifully brought to life.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} ${italiana.variable}`}
    >
      <body className="min-h-full flex flex-col bg-ivory text-ink font-body antialiased">
        <Chrome>
          <SiteNav />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </Chrome>
      </body>
    </html>
  );
}
