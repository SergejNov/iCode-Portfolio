import {routing} from '@/i18n';
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning className="dark" data-scroll-behavior="smooth">
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}
