'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { PhoneIcon, ChevronDownIcon } from '@heroicons/react/24/solid';
import { useTranslations, useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { Link } from '@/i18n';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMobileLangOpen, setIsMobileLangOpen] = useState(false);
  const t = useTranslations();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const langDropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
    setIsMobileLangOpen(false);
  };

  const changeLanguage = (newLocale: string) => {
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
    setIsLangOpen(false);
    setIsMobileLangOpen(false);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Close desktop language dropdown
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
      
      // Close mobile menu when clicking outside (but not when clicking the toggle button)
      const target = event.target as Element;
      const isToggleButton = target.closest('button[aria-label="Toggle menu"]');
      
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(target) && !isToggleButton) {
        setIsMenuOpen(false);
        setIsMobileLangOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const isServicesPage = pathname.includes('/services');
  const isLegalPage = pathname.includes('/terms-and-conditions') || pathname.includes('/privacy-policy') || pathname.includes('/disclaimer');

  return (
    <header className="fixed left-0 right-0 top-0 z-40 border-b border-white/10 backdrop-blur-md bg-gray-900/80">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <div className="flex items-center gap-3">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <Image 
              src="/iCodeLogoCroped.png" 
              alt="iCode Marketing logo" 
              width={48} 
              height={48} 
              className="h-12 w-12" 
            />
          </Link>
          
        </div>

        {/* Mobile Menu Button */}
        <button 
          type="button"
          className="sm:hidden rounded-lg p-2 hover:bg-gray-800 relative z-[60]"
          aria-label="Toggle menu"
          onClick={toggleMenu}
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
            />
          </svg>
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="sm:hidden absolute left-0 right-0 top-16 z-40 bg-gray-900 shadow-lg" ref={mobileMenuRef}>
            <div className="flex flex-col space-y-2 p-4">
              {/* Mobile Language Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsMobileLangOpen(v => !v)}
                  className="flex w-full items-center justify-center gap-2 rounded-lg border-2 border-blue-400 px-4 py-2 text-blue-400 hover:bg-blue-950 cursor-pointer"
                >
                  {t('navigation.language')}
                  <ChevronDownIcon className={`h-4 w-4 transition-transform ${isMobileLangOpen ? 'rotate-180' : ''}`} />
                </button>

                {isMobileLangOpen && (
                  <div className="absolute left-0 right-0 top-full mt-2 rounded-lg border-2 border-white/10 bg-gray-900/95 shadow-lg">
                    <div className="p-2">
                      <div className="px-3 py-2 text-xs font-semibold text-zinc-400 uppercase tracking-wider text-center">
                        {t('navigation.language')}
                      </div>
                      <div className="mt-1 space-y-1">
                        <button
                          onClick={() => { changeLanguage('sr'); toggleMenu(); }}
                          className={`block w-full px-3 py-2 text-center hover:bg-gray-800 rounded-lg text-sm cursor-pointer ${locale === 'sr' ? 'bg-blue-600 text-white' : ''}`}
                        >
                          {t('navigation.languages.sr')}
                        </button>

                        <button
                          onClick={() => { changeLanguage('en'); toggleMenu(); }}
                          className={`block w-full px-3 py-2 text-center hover:bg-gray-800 rounded-lg text-sm cursor-pointer ${locale === 'en' ? 'bg-blue-600 text-white' : ''}`}
                        >
                          {t('navigation.languages.en')}
                        </button>

                        <button
                          onClick={() => { changeLanguage('de'); toggleMenu(); }}
                          className={`block w-full px-3 py-2 text-center hover:bg-gray-800 rounded-lg text-sm cursor-pointer ${locale === 'de' ? 'bg-blue-600 text-white' : ''}`}
                        >
                          {t('navigation.languages.de')}
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Show Home button on services and legal pages */}
              {(isServicesPage || isLegalPage) && (
                <Link 
                  href="/" 
                  className="block rounded-lg border-2 border-blue-400 px-4 py-2 text-center font-medium text-blue-400 hover:bg-blue-950"
                  onClick={toggleMenu}
                >
                  {t('navigation.home')}
                </Link>
              )}

              {/* Hide services and coverage on services and legal pages */}
              {!(isServicesPage || isLegalPage) && (
                <>
                  <Link 
                    href="/services" 
                    className="block rounded-lg border-2 border-blue-400 px-4 py-2 text-center font-medium text-blue-400 hover:bg-blue-950"
                    onClick={toggleMenu}
                  >
                    {t('navigation.services')}
                  </Link>
                  <Link 
                    href="#coverage" 
                    className="block rounded-lg border-2 border-blue-400 px-4 py-2 text-center font-medium text-blue-400 hover:bg-blue-950"
                    onClick={toggleMenu}
                  >
                    {t('navigation.references')}
                  </Link>
                </>
              )}

              {/* Show services on legal pages */}
              {isLegalPage && (
                <Link 
                  href="/services" 
                  className="block rounded-lg border-2 border-blue-400 px-4 py-2 text-center font-medium text-blue-400 hover:bg-blue-950"
                  onClick={toggleMenu}
                >
                  {t('navigation.services')}
                </Link>
              )}
              
              {/* Hide contact on legal pages */}
              {!isLegalPage && (
                <Link 
                  href="#contact" 
                  className="block rounded-lg border-2 border-blue-400 px-4 py-2 text-center font-medium text-blue-400 hover:bg-blue-950"
                  onClick={(isServicesPage || isLegalPage) ? (e) => {
                    e.preventDefault();
                    const element = document.getElementById('contact');
                    if (element) {
                      element.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                      });
                    }
                    toggleMenu();
                  } : toggleMenu}
                >
                  {t('navigation.contact')}
                </Link>
              )}
              <a 
                href="tel:+491639071541" 
                className="flex items-center justify-center gap-2 rounded-lg border-2 border-blue-500 bg-blue-500 px-4 py-2 text-center font-medium text-white hover:bg-blue-600"
                onClick={toggleMenu}
              >
                <PhoneIcon className="h-5 w-5" />
                <span>+49 163 9071541</span>
              </a>
            </div>
          </div>
        )}

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-4 text-sm font-medium sm:flex">
          <div className="relative" ref={langDropdownRef}>
            <button
              onClick={() => setIsLangOpen(v => !v)}
              className="flex items-center gap-2 rounded-full border-2 border-blue-400 px-4 py-2 text-blue-400 hover:bg-blue-950 cursor-pointer"
            >
              {t('navigation.language')}
              <ChevronDownIcon className={`h-4 w-4 transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
            </button>

            {isLangOpen && (
              <div className="absolute right-0 mt-2 w-48 rounded-lg border-2 border-white/10 bg-gray-900/95 shadow-lg">
                <div className="p-2">
                  <div className="px-3 py-2 text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                    {t('navigation.language')}
                  </div>
                  <div className="mt-1 space-y-1">
                    <button
                      onClick={() => { changeLanguage('sr'); setIsLangOpen(false); }}
                      className={`block w-full px-3 py-2 text-left hover:bg-gray-800 rounded-lg text-sm cursor-pointer ${locale === 'sr' ? 'bg-blue-600 text-white' : ''}`}
                    >
                      {t('navigation.languages.sr')}
                    </button>

                    <button
                      onClick={() => { changeLanguage('en'); setIsLangOpen(false); }}
                      className={`block w-full px-3 py-2 text-left hover:bg-gray-800 rounded-lg text-sm cursor-pointer ${locale === 'en' ? 'bg-blue-600 text-white' : ''}`}
                    >
                      {t('navigation.languages.en')}
                    </button>

                    <button
                      onClick={() => { changeLanguage('de'); setIsLangOpen(false); }}
                      className={`block w-full px-3 py-2 text-left hover:bg-gray-800 rounded-lg text-sm cursor-pointer ${locale === 'de' ? 'bg-blue-600 text-white' : ''}`}
                    >
                      {t('navigation.languages.de')}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Show Home button on services and legal pages */}
          {(isServicesPage || isLegalPage) && (
            <Link href="/" className="rounded-full border-2 border-blue-400 px-4 py-2 text-blue-400 transition hover:bg-blue-950">{t('navigation.home')}</Link>
          )}

          {/* Hide services and coverage on services and legal pages */}
          {!(isServicesPage || isLegalPage) && (
            <>
              <Link href="/services" className="rounded-full border-2 border-blue-400 px-4 py-2 text-blue-400 transition hover:bg-blue-950">{t('navigation.services')}</Link>
              <Link href="#coverage" className="rounded-full border-2 border-blue-400 px-4 py-2 text-blue-400 transition hover:bg-blue-950">{t('navigation.references')}</Link>
            </>
          )}
          
          {/* Show services on legal pages */}
          {isLegalPage && (
            <Link href="/services" className="rounded-full border-2 border-blue-400 px-4 py-2 text-blue-400 transition hover:bg-blue-950">{t('navigation.services')}</Link>
          )}
          
          {/* Hide contact on legal pages */}
          {!isLegalPage && (
            <Link 
              href={(isServicesPage || isLegalPage) ? "#contact" : "#contact"} 
              className="rounded-full border-2 border-blue-400 px-4 py-2 text-blue-400 transition hover:bg-blue-950"
              onClick={(isServicesPage || isLegalPage) ? (e) => {
                e.preventDefault();
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }
              } : undefined}
            >
              {t('navigation.contact')}
            </Link>
          )}
          <a href="tel:+491639071541" className="flex items-center gap-2 rounded-full bg-blue-500 px-4 py-2 text-white transition hover:bg-blue-600">
            <PhoneIcon className="h-5 w-5" />
            <span>+49 163 9071541</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
