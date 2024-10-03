import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "JellyFishMC Shop",
  description: "Questo è lo shop di JellyFishMC, quì puoi trovare tutti i ranks/vantaggi disponibili sul server per ciascuna modalità!",
  openGraph: {
    title: "JellyFishMC Shop",
    description: "Questo è lo shop di JellyFishMC, quì puoi trovare tutti i ranks/vantaggi disponibili sul server per ciascuna modalità!",
    siteName: "JellyFishMC Shop",
    url: "https://jellyfish-shop.vercel.app",
    images: [
      {
        url: "https://jellyfish-shop.vercel.app/api/og",
        width: "1200",
        height: "630",
        alt: "Lo shop di JellyFishMC ti aspetta!",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
