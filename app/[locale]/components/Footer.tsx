import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const t = useTranslations();

  return (
    <footer className="border-t border-white/10 bg-blue-950/30 py-6">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          
          {/* Company Info */}
          <div className="text-center md:text-left">
            <p 
              className="text-zinc-300 text-sm"
              dangerouslySetInnerHTML={{ __html: t('footer.companyInfo') }}
            />
            <p className="text-zinc-300 text-sm mt-1">
              <a href={`tel:${t('footer.phone')}`} className="hover:text-blue-400 transition-colors">
                {t('footer.phone')}
              </a>
            </p>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap gap-3 text-sm justify-center md:justify-start md:flex-row md:space-x-4">
            <Link href="/terms-and-conditions" className="text-zinc-300 hover:text-blue-400 transition-colors">
              {t('footer.legalLinks.terms')}
            </Link>
            <Link href="/privacy-policy" className="text-zinc-300 hover:text-blue-400 transition-colors">
              {t('footer.legalLinks.privacy')}
            </Link>
            <Link href="/disclaimer" className="text-zinc-300 hover:text-blue-400 transition-colors">
              {t('footer.legalLinks.disclaimer')}
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-4 pt-4 border-t border-white/10">
          <p className="text-zinc-400 text-xs">
            {t('footer.copyright', { year: currentYear })}
          </p>
        </div>
      </div>
    </footer>
  );
}
