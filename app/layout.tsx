import type { Metadata } from "next";
import ToasterClient from '@/app/ToasterClient';
import { Providers } from './providers';
import "./globals.css";

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
    <html lang="sr" suppressHydrationWarning className="dark" >
      <body
        className="antialiased"
      >
        <Providers>
          {children}
        </Providers>
        <ToasterClient />
      </body>
    </html>
  );
}
