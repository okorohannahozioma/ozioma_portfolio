import type { Metadata } from "next";
import { Newsreader, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hannah O. Okoro — Narrative & Ghostwriting",
  description: "Executive ghostwriting, AI UGC creative studio, and digital products.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${plusJakartaSans.variable}`}
    >
      <body className="bg-[#0b0416] text-[#F4EEFB] font-sans antialiased selection:bg-[#A855F7]/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}