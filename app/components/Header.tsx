'use client';

import { useState } from 'react';
import Image from 'next/image';
import { PhoneIcon } from '@heroicons/react/24/solid';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleTranslate = () => {
    const url = `https://translate.google.com/translate?sl=auto&tl=en&u=${encodeURIComponent(window.location.href)}`;
    window.location.href = url;
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-40 border-b border-white/10 backdrop-blur-md bg-gray-900/80">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <div className="flex items-center gap-3">
          <Image 
            src="/iCodeLogoCroped.png" 
            alt="iCode Marketing logo" 
            width={48} 
            height={48} 
            className="h-12 w-12" 
          />
          
        </div>

        {/* Mobile Menu Button */}
        <button 
          type="button"
          className="sm:hidden rounded-lg p-2 hover:bg-gray-800"
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
          <div className="sm:hidden absolute left-0 right-0 top-16 z-50 bg-gray-900 shadow-lg">
            <div className="flex flex-col space-y-2 p-4">
              <button
                onClick={() => {
                  handleTranslate();
                  toggleMenu();
                }}
                className="block rounded-lg px-4 py-2 text-center font-medium hover:bg-gray-800"
              >
                EN • Translate
              </button>
              <a 
                href="#services" 
                className="block rounded-lg px-4 py-2 text-center font-medium hover:bg-gray-800"
                onClick={toggleMenu}
              >
                Usluge
              </a>
              <a 
                href="#coverage" 
                className="block rounded-lg px-4 py-2 text-center font-medium hover:bg-gray-800"
                onClick={toggleMenu}
              >
                Reference
              </a>
              <a 
                href="#contact" 
                className="block rounded-lg px-4 py-2 text-center font-medium hover:bg-gray-800"
                onClick={toggleMenu}
              >
                Kontakt
              </a>
              <a 
                href="tel:+491639071541" 
                className="flex items-center justify-center gap-2 rounded-lg bg-blue-500 px-4 py-2 text-center font-medium text-white hover:bg-blue-600"
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
          <button onClick={handleTranslate} className="rounded-full border-2 border-blue-400 px-4 py-2 text-blue-400 transition hover:bg-blue-950">EN</button>
          <a href="#services" className="rounded-full border-2 border-blue-400 px-4 py-2 text-blue-400 transition hover:bg-blue-950">Usluge</a>
          <a href="#coverage" className="rounded-full border-2 border-blue-400 px-4 py-2 text-blue-400 transition hover:bg-blue-950">Reference</a>
          <a href="#contact" className="rounded-full border-2 border-blue-400 px-4 py-2 text-blue-400 transition hover:bg-blue-950">Kontakt</a>
          <a href="tel:+491639071541" className="flex items-center gap-2 rounded-full bg-blue-500 px-4 py-2 text-white transition hover:bg-blue-600">
            <PhoneIcon className="h-5 w-5" />
            <span>+49 163 9071541</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
