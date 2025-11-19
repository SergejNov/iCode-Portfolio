import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Marketinška agencija iCode Marketing — Marketing i izrada sajtova",
  description:
    "Kompletne usluge marketinga i izrade web sajtova. Brendiranje, web razvoj, SEO i podrška. Pozovite za brzu ponudu.",
  openGraph: {
    title: "iCode Marketing — Marketinška agencija i web razvoj",
    description:
      "Brendiranje, web sajtovi, SEO i podrška za vaš biznis. Kontaktirajte nas.",
    type: "website",
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
