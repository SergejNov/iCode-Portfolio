import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-blue-950/30 py-12">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">iCode Marketing</h3>
            <p className="text-zinc-300 mb-2">
              Marketinška agencija
            </p>
            <address className="text-zinc-300 not-italic">
              <p>Gornja Dolina 29</p>
              <p>78400 Gradiška</p>
              <p>Bosna i Hercegovina</p>
            </address>
            <div className="mt-4 space-y-2">
              <p className="text-zinc-300">
                <a href="tel:+491639071541" className="hover:text-blue-400 transition-colors">
                  +49 163 9071541
                </a>
              </p>
              <p className="text-zinc-300">
                <a href="mailto:info@icode-marketing.com" className="hover:text-blue-400 transition-colors">
                  info@icode-marketing.com
                </a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Brzi linkovi</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-zinc-300 hover:text-blue-400 transition-colors">
                  Početna
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-zinc-300 hover:text-blue-400 transition-colors">
                  Usluge
                </Link>
              </li>
              <li>
                <Link href="#coverage" className="text-zinc-300 hover:text-blue-400 transition-colors">
                  Reference
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-zinc-300 hover:text-blue-400 transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Pravni dokumenti</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/terms-and-conditions" className="text-zinc-300 hover:text-blue-400 transition-colors">
                  Uslovi korišćenja
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-zinc-300 hover:text-blue-400 transition-colors">
                  Politika privatnosti
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-zinc-300 hover:text-blue-400 transition-colors">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-zinc-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} iCode Marketing. Sva prava zadržana.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/terms-and-conditions" className="text-zinc-400 hover:text-blue-400 transition-colors">
                Uslovi
              </Link>
              <span className="text-zinc-600">|</span>
              <Link href="/privacy-policy" className="text-zinc-400 hover:text-blue-400 transition-colors">
                Privatnost
              </Link>
              <span className="text-zinc-600">|</span>
              <Link href="/disclaimer" className="text-zinc-400 hover:text-blue-400 transition-colors">
                Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
