

import Image from "next/image";
import ContactForm from "./components/ContactForm";
import Header from "./components/Header";
import { PhoneIcon } from '@heroicons/react/24/solid';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-zinc-50">
      <div className="relative z-50">
        <Header />
      </div>

      <main className="relative z-10 mx-auto max-w-7xl px-4 pt-24">
        {/* Hero Section */}
        <section id="hero" className="relative pt-16 pb-16 sm:py-20 overflow-hidden rounded-3xl">
          {/* Background gradient */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-950/50 via-black to-purple-950/50"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.15)_0,transparent_70%)]"></div>
          </div>
          
          {/* Content */}
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex flex-col items-center gap-8">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 pb-1">
                Marketinška agencija i izrada web sajtova koja donosi rast
              </h1>
              <p className="text-xl text-zinc-300 max-w-3xl">
                Strategija brenda, moderni sajtovi, SEO i performans marketing. Brze iteracije, jasna komunikacija i mjerljivi rezultati.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
                <a 
                  href="tel:+491639071541" 
                  className="flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-base font-medium text-white transition-all hover:bg-blue-700 hover:scale-105 transform"
                >
                  <PhoneIcon className="h-5 w-5" />
                  <span>Pozovi odmah</span>
                </a>
                <a 
                  href="#services" 
                  className="rounded-full border-2 border-blue-400 px-8 py-4 text-base font-medium text-blue-400 hover:bg-blue-950/50 hover:border-blue-300 hover:text-blue-300 transition-all"
                >
                  Pogledaj usluge
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="scroll-mt-20 py-16 sm:scroll-mt-24">
          <div className="rounded-2xl border border-white/10 bg-blue-950/20 p-8 text-center sm:text-left shadow-sm sm:p-12">
  <h2 className="text-3xl font-semibold tracking-tight">Naše usluge</h2>
  <p className="mt-3 text-center text-base sm:text-left sm:max-w-2xl">
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
      <div key={index} className="mx-auto w-full max-w-md rounded-xl border border-white/15 p-6 text-center transition hover:shadow-md hover:shadow-zinc-800/50 sm:mx-0 sm:max-w-none sm:text-left">
        <h3 className="text-lg font-semibold">{service.title}</h3>
        <p className="mt-2 text-sm ">{service.desc}</p>
        <div className="mt-4 flex justify-center sm:justify-start">
          <a href="#contact" className="inline-block rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">Zatraži ponudu</a>
        </div>
      </div>
    ))}
  </div>
</div>
        </section>

        {/* Coverage Section */}
        <section id="coverage" className="scroll-mt-20 py-16 sm:scroll-mt-24">
          <div className="rounded-2xl border border-white/10 bg-blue-950/20 p-8 shadow-sm sm:p-12">
            <h2 className="text-3xl font-semibold tracking-tight">Brendovi s kojima radimo</h2>
            <p className="mt-3 max-w-2xl text-base text-zinc-300">
              Od startupa do etabliranih brendova — B2B i B2C.
            </p>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { name: 'EUROexpress brza pošta', logo: '/euroexpreslogo.png', url: 'https://www.euroexpress.ba/' },
                { name: 'Centar Trade', logo: '/Centrumlogo.png', url: 'https://centrumshop.ba/' },
                { name: 'DM', logo: '/Logo_of_dm-drogerie_markt-Photoroom.png', url: 'https://www.dm-drogeriemarkt.ba/' },
                { name: 'Sinsay', logo: '/sinsay-logo.png', url: 'https://www.sinsay.com/ba/bs/?srsltid=AfmBOoqWpH8lXSVfbrgmZBrBteDiDr03h9Q5_S9eSWAiqJ06FRluxrQH' },
                { name: 'LC Waikiki', logo: '/LcWaiCropped.png', url: 'https://www.lcwaikiki.rs/sr-RS/RS' },
                { name: 'Deichmann', logo: '/deichmann-logoCroped.png', url: 'https://www.deichmann.com/bs-ba/' }
              ].map((company, index) => (
                <a 
                  key={index} 
                  href={company.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center rounded-xl border border-white/15 bg-blue-950/20 p-6 transition-all hover:bg-blue-950/40 hover:shadow-lg"
                >
                  <img 
                    src={company.logo} 
                    alt={company.name} 
                    className="h-16 object-contain"
                    style={{ maxWidth: '200px' }}
                  />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="scroll-mt-20 py-16 sm:scroll-mt-24">
          <div className="rounded-2xl border border-white/10 bg-blue-950/20 p-8 shadow-sm sm:p-12">
            <h2 className="text-3xl font-semibold tracking-tight">Kontakt</h2>
            <p className="mt-3 max-w-2xl text-base text-zinc-300">
              Pišite nam o svom projektu. Odgovaramo najčešće istog dana.
            </p>
            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              {/* Contact Form */}
              <ContactForm />
              
              {/* Contact Information */}
              <div className="rounded-xl border border-white/15 p-6">
                <div className="space-y-6">
                  <div>
                    <div className="text-lg font-semibold">Telefon</div>
                    <a href="tel:+491639071541" className="mt-2 inline-flex items-center gap-2 rounded-full border-2 border-blue-400 px-4 py-2 text-blue-400 hover:bg-blue-950">
                      <PhoneIcon className="h-4 w-4" />
                      <span>+49 163 907 1541</span>
                    </a>
                  </div>
                  <div>
                    <div className="text-lg font-semibold">Email</div>
                    <a href="mailto:info@icode-marketing.com" className="mt-2 inline-block rounded-full border-2 border-blue-400 px-4 py-2 text-blue-400 hover:bg-blue-950">info@icode-marketing.com</a>
                  </div>
                  <div>
                    <div className="text-lg font-semibold">WhatsApp</div>
                    <a href="https://wa.me/491639071541" target="_blank" rel="noopener noreferrer" className="mt-2 inline-block rounded-full border-2 border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-emerald-300 hover:bg-emerald-500/20">WhatsApp poruka</a>
                  </div>
                  <div>
                    <div className="text-lg font-semibold">Društvene mreže</div>
                    <div className="mt-2 flex flex-wrap gap-3">
                      <a className="inline-block rounded-full border-2 border-blue-400 px-4 py-2 text-blue-400 hover:bg-blue-950" href="https://www.instagram.com/icode.marketing" target="_blank" rel="noopener noreferrer">Instagram</a>
                      <a className="inline-block rounded-full border-2 border-blue-400 px-4 py-2 text-blue-400 hover:bg-blue-950" href="https://www.facebook.com/share/1A65FdQSPv/" target="_blank" rel="noopener noreferrer">Facebook</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-12 text-center text-sm text-zinc-500">
        &copy; {new Date().getFullYear()} iCode Marketing. Sva prava zadržana.
      </footer>
    </div>
  );
}