

import Image from "next/image";
import ContactForm from "./ContactForm";
export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-zinc-50">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur dark:border-white/10 dark:bg-black/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <Image 
              src="/iCodeLogo.png" 
              alt="iCode Marketing logo" 
              width={48} 
              height={48} 
              className="h-12 w-12" 
            />
            <span className="text-lg font-semibold tracking-tight">iCode Marketing</span>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            type="button"
            className="sm:hidden rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-4 text-sm font-medium sm:flex">
            <a href="#services" className="rounded-full border border-blue-600 px-4 py-2 text-blue-600 transition hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-950">Usluge</a>
            <a href="#coverage" className="rounded-full border border-blue-600 px-4 py-2 text-blue-600 transition hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-950">Industrije</a>
            <a href="#contact" className="rounded-full border border-blue-600 px-4 py-2 text-blue-600 transition hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-950">Kontakt</a>
            <a href="tel:+491639071541" className="rounded-full bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">Pozovi</a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 pt-20">
        {/* Hero Section with Side Image */}
        <section id="hero" className="py-8 sm:py-12">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
            {/* Text Content */}
            <div className="flex flex-col items-start gap-6">
              <h1 className="max-w-2xl text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Marketinška agencija i izrada web sajtova koja donosi rast
              </h1>
              <p className="max-w-xl text-pretty text-lg leading-8 text-zinc-700 dark:text-zinc-300">
                Strategija brenda, moderni sajtovi, SEO i performans marketing. Brze iteracije, jasna komunikacija i mjerljivi rezultati.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a href="tel:+491639071541" className="rounded-full bg-blue-600 px-6 py-3 text-base font-medium text-white transition hover:bg-blue-700">Pozovi odmah</a>
                <a href="#services" className="rounded-full border border-blue-600 px-6 py-3 text-base font-medium text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-950">Pogledaj usluge</a>
                <a href="https://wa.me/491639071541" target="_blank" rel="noopener noreferrer" className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-6 py-3 text-base font-medium text-emerald-700 hover:bg-emerald-500/20 dark:text-emerald-300">WhatsApp</a>
              </div>
            </div>

            {/* Large Logo/Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 opacity-20 blur-lg"></div>
                <Image 
                  src="/iCodeLogo.png" 
                  alt="iCode Marketing" 
                  width={400}
                  height={400}
                  className="relative rounded-2xl object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="scroll-mt-20 py-16 sm:scroll-mt-24">
          <div className="rounded-2xl border border-black/5 bg-blue-50 p-8 shadow-sm dark:border-white/10 dark:bg-blue-950/20 sm:p-12">
            <h2 className="text-3xl font-semibold tracking-tight">Naše usluge</h2>
            <p className="mt-3 max-w-2xl text-base text-zinc-700 dark:text-zinc-300">
              Od strategije i dizajna do razvoja i rasta — isporuka od početka do kraja.
            </p>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "Brend i strategija", desc: "Pozicioniranje, poruke, vizuelni identitet, sadržaj." },
                { title: "Web sajtovi i aplikacije", desc: "Next.js, React, headless CMS, e‑commerce, brzina i performanse." },
                { title: "SEO i rast", desc: "Tehnički SEO, analitika, oglašavanje, optimizacija konverzija." },
                { title: "Sadržaj i društvene mreže", desc: "Planovi sadržaja, kreativna produkcija i distribucija." },
                { title: "Automatizacija", desc: "CRM, email tokovi, chatbotovi, kvalifikacija leadova." },
                { title: "Podrška i održavanje", desc: "Brz helpdesk, SLA i stalna poboljšanja." }
              ].map((service, index) => (
                <div key={index} className="rounded-xl border border-black/10 p-6 transition hover:shadow-md dark:border-white/15 dark:hover:shadow-zinc-800/50">
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">{service.desc}</p>
                  <div className="mt-4">
                    <a href="#contact" className="inline-block rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">Zatraži ponudu</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Coverage Section */}
        <section id="coverage" className="scroll-mt-20 py-16 sm:scroll-mt-24">
          <div className="rounded-2xl border border-black/5 bg-blue-50 p-8 shadow-sm dark:border-white/10 dark:bg-blue-950/20 sm:p-12">
            <h2 className="text-3xl font-semibold tracking-tight">Industrije s kojima radimo</h2>
            <p className="mt-3 max-w-2xl text-base text-zinc-700 dark:text-zinc-300">
              Od startupa do etabliranih brendova — B2B i B2C.
            </p>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {['SaaS', 'e‑commerce', 'Lokalne usluge', 'Zdravstvo', 'Obrazovanje', 'Finansije'].map((industry, index) => (
                <div key={index} className="rounded-xl border border-black/5 bg-blue-50 p-6 text-center text-lg font-medium dark:border-white/15 dark:bg-blue-950/20">
                  {industry}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="scroll-mt-20 py-16 sm:scroll-mt-24">
          <div className="rounded-2xl border border-black/5 bg-blue-50 p-8 shadow-sm dark:border-white/10 dark:bg-blue-950/20 sm:p-12">
            <h2 className="text-3xl font-semibold tracking-tight">Kontakt</h2>
            <p className="mt-3 max-w-2xl text-base text-zinc-700 dark:text-zinc-300">
              Pišite nam o svom projektu. Odgovaramo najčešće istog dana.
            </p>
            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              <div className="rounded-xl border border-black/10 p-6 dark:border-white/15">
                <div className="space-y-6">
                  <div>
                    <div className="text-lg font-semibold">Telefon</div>
                    <a href="tel:+491639071541" className="mt-2 inline-block rounded-full border border-blue-600 px-4 py-2 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-950">+49 163 907 1541</a>
                  </div>
                  <div>
                    <div className="text-lg font-semibold">Email</div>
                    <a href="mailto:info@icode-marketing.com" className="mt-2 inline-block rounded-full border border-blue-600 px-4 py-2 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-950">info@icode-marketing.com</a>
                  </div>
                  <div>
                    <div className="text-lg font-semibold">WhatsApp</div>
                    <a href="https://wa.me/491639071541" target="_blank" rel="noopener noreferrer" className="mt-2 inline-block rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-emerald-700 hover:bg-emerald-500/20 dark:text-emerald-300">Napišite poruku na WhatsApp</a>
                  </div>
                  <div>
                    <div className="text-lg font-semibold">Društvene mreže</div>
                    <div className="mt-2 flex flex-wrap gap-3">
                      <a className="inline-block rounded-full border border-blue-600 px-4 py-2 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-950" href="https://www.instagram.com/icode.marketing" target="_blank" rel="noopener noreferrer">Instagram</a>
                      <a className="inline-block rounded-full border border-blue-600 px-4 py-2 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-950" href="https://www.facebook.com/share/1A65FdQSPv/" target="_blank" rel="noopener noreferrer">Facebook</a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contact Form Placeholder */}
              <div className="rounded-xl border border-black/10 p-6 dark:border-white/15">
                <p className="text-lg font-semibold">Pošaljite nam poruku</p>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
                  Kontaktirajte nas direktno putem telefona, emaila ili društvenih mreža za brži odgovor.
                </p>
                <div className="mt-6 space-y-4">
                  <div className="h-10 rounded-md bg-zinc-100 dark:bg-zinc-800"></div>
                  <div className="h-10 rounded-md bg-zinc-100 dark:bg-zinc-800"></div>
                  <div className="h-24 rounded-md bg-zinc-100 dark:bg-zinc-800"></div>
                  <div className="h-10 rounded-md bg-blue-600"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/5 py-12 text-center text-sm text-zinc-500 dark:border-white/10">
        &copy; {new Date().getFullYear()} iCode Marketing. Sva prava zadržana.
      </footer>
    </div>
  );
}