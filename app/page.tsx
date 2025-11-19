import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-zinc-50">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur dark:border-white/10 dark:bg-black/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <Image src="/iCodeLogo.png" alt="iCode Marketing logo" width={32} height={32} className="h-8 w-8 rounded" />
            <span className="text-sm font-semibold tracking-tight">iCode Marketing</span>
          </div>
          <nav className="hidden items-center gap-3 text-sm font-medium sm:flex">
            <a href="#services" className="rounded-full border border-blue-600 px-4 py-2 text-blue-700 transition hover:bg-blue-50 dark:border-blue-400 dark:text-blue-300 dark:hover:bg-blue-400/10">Usluge</a>
            <a href="#coverage" className="rounded-full border border-blue-600 px-4 py-2 text-blue-700 transition hover:bg-blue-50 dark:border-blue-400 dark:text-blue-300 dark:hover:bg-blue-400/10">Industrije</a>
            <a href="#contact" className="rounded-full border border-blue-600 px-4 py-2 text-blue-700 transition hover:bg-blue-50 dark:border-blue-400 dark:text-blue-300 dark:hover:bg-blue-400/10">Kontakt</a>
            <a href="tel:+491639071541" className="rounded-full bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700">Pozovi</a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4">
        <section id="hero" className="flex min-h-[90svh] flex-col items-start justify-center gap-6 pt-24 sm:pt-28">
          <h1 className="max-w-3xl text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Marketinška agencija i izrada web sajtova koja donosi rast
          </h1>
          <p className="max-w-2xl text-pretty text-base leading-7 text-zinc-600 dark:text-zinc-300">
            Strategija brenda, moderni sajtovi, SEO i performans marketing. Brze iteracije, jasna komunikacija i mjerljivi rezultati.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a href="tel:+491639071541" className="rounded-full bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700">Pozovi odmah</a>
            <a href="#services" className="rounded-full border border-blue-600 px-5 py-3 text-sm font-medium text-blue-700 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-300 dark:hover:bg-blue-400/10">Pogledaj usluge</a>
            <a href="https://wa.me/491639071541" target="_blank" rel="noopener noreferrer" className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-5 py-3 text-sm font-medium text-emerald-700 hover:bg-emerald-500/20 dark:text-emerald-300">WhatsApp</a>
          </div>
        </section>

        <section id="services" className="scroll-mt-24 py-16">
          <h2 className="text-2xl font-semibold tracking-tight">Naše usluge</h2>
          <p className="mt-2 max-w-2xl text-sm text-zinc-600 dark:text-zinc-300">
            Od strategije i dizajna do razvoja i rasta — isporuka od početka do kraja.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-black/10 p-5 dark:border-white/15">
              <h3 className="text-base font-semibold">Brend i strategija</h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">Pozicioniranje, poruke, vizuelni identitet, sadržaj.</p>
              <div className="mt-4">
                <a href="#contact" className="inline-block rounded-full bg-blue-600 px-4 py-2 text-xs font-medium text-white hover:bg-blue-700">Zatraži ponudu</a>
              </div>
            </div>
            <div className="rounded-lg border border-black/10 p-5 dark:border-white/15">
              <h3 className="text-base font-semibold">Web sajtovi i aplikacije</h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">Next.js, React, headless CMS, e‑commerce, brzina i performanse.</p>
              <div className="mt-4">
                <a href="#contact" className="inline-block rounded-full bg-blue-600 px-4 py-2 text-xs font-medium text-white hover:bg-blue-700">Zatraži ponudu</a>
              </div>
            </div>
            <div className="rounded-lg border border-black/10 p-5 dark:border-white/15">
              <h3 className="text-base font-semibold">SEO i rast</h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">Tehnički SEO, analitika, oglašavanje, optimizacija konverzija.</p>
              <div className="mt-4">
                <a href="#contact" className="inline-block rounded-full bg-blue-600 px-4 py-2 text-xs font-medium text-white hover:bg-blue-700">Zatraži ponudu</a>
              </div>
            </div>
            <div className="rounded-lg border border-black/10 p-5 dark:border-white/15">
              <h3 className="text-base font-semibold">Sadržaj i društvene mreže</h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">Planovi sadržaja, kreativna produkcija i distribucija.</p>
              <div className="mt-4">
                <a href="#contact" className="inline-block rounded-full bg-blue-600 px-4 py-2 text-xs font-medium text-white hover:bg-blue-700">Zatraži ponudu</a>
              </div>
            </div>
            <div className="rounded-lg border border-black/10 p-5 dark:border-white/15">
              <h3 className="text-base font-semibold">Automatizacija</h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">CRM, email tokovi, chatbotovi, kvalifikacija leadova.</p>
              <div className="mt-4">
                <a href="#contact" className="inline-block rounded-full bg-blue-600 px-4 py-2 text-xs font-medium text-white hover:bg-blue-700">Zatraži ponudu</a>
              </div>
            </div>
            <div className="rounded-lg border border-black/10 p-5 dark:border-white/15">
              <h3 className="text-base font-semibold">Podrška i održavanje</h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">Brz helpdesk, SLA i stalna poboljšanja.</p>
              <div className="mt-4">
                <a href="#contact" className="inline-block rounded-full bg-blue-600 px-4 py-2 text-xs font-medium text-white hover:bg-blue-700">Zatraži ponudu</a>
              </div>
            </div>
          </div>
        </section>

        <section id="coverage" className="scroll-mt-24 py-16">
          <h2 className="text-2xl font-semibold tracking-tight">Industrije s kojima radimo</h2>
          <p className="mt-2 max-w-2xl text-sm text-zinc-600 dark:text-zinc-300">
            Od startupa do etabliranih brendova — B2B i B2C.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-black/10 p-5 dark:border-white/15">SaaS</div>
            <div className="rounded-lg border border-black/10 p-5 dark:border-white/15">e‑commerce</div>
            <div className="rounded-lg border border-black/10 p-5 dark:border-white/15">Lokalne usluge</div>
            <div className="rounded-lg border border-black/10 p-5 dark:border-white/15">Zdravstvo</div>
            <div className="rounded-lg border border-black/10 p-5 dark:border-white/15">Obrazovanje</div>
            <div className="rounded-lg border border-black/10 p-5 dark:border-white/15">Finansije</div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 py-16">
          <h2 className="text-2xl font-semibold tracking-tight">Kontakt</h2>
          <p className="mt-2 max-w-2xl text-sm text-zinc-600 dark:text-zinc-300">
            Pišite nam o svom projektu. Odgovaramo najčešće istog dana.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <form className="rounded-lg border border-black/10 p-5 dark:border-white/15">
              <div className="grid gap-3">
                <input className="rounded-md border border-black/10 bg-white px-3 py-2 text-sm outline-none placeholder:text-zinc-400 focus:border-blue-500 dark:border-white/20 dark:bg-black" placeholder="Vaše ime" />
                <input className="rounded-md border border-black/10 bg-white px-3 py-2 text-sm outline-none placeholder:text-zinc-400 focus:border-blue-500 dark:border-white/20 dark:bg-black" placeholder="Email" type="email" />
                <textarea className="min-h-28 rounded-md border border-black/10 bg-white px-3 py-2 text-sm outline-none placeholder:text-zinc-400 focus:border-blue-500 dark:border-white/20 dark:bg-black" placeholder="Detalji projekta" />
                <button type="button" className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">Pošalji</button>
              </div>
            </form>
            <div className="rounded-lg border border-black/10 p-5 text-sm dark:border-white/15">
              <div className="space-y-3">
                <div>
                  <div className="font-semibold">Telefon</div>
                  <a href="tel:+491639071541" className="inline-block rounded-full border border-blue-600 px-3 py-1 text-blue-700 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-300 dark:hover:bg-blue-400/10">+49 163 907 1541</a>
                </div>
                <div>
                  <div className="font-semibold">Email</div>
                  <a href="mailto:info@icode-marketing.com" className="inline-block rounded-full border border-blue-600 px-3 py-1 text-blue-700 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-300 dark:hover:bg-blue-400/10">info@icode-marketing.com</a>
                </div>
                <div>
                  <div className="font-semibold">WhatsApp</div>
                  <a href="https://wa.me/491639071541" target="_blank" rel="noopener noreferrer" className="inline-block rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-emerald-700 hover:bg-emerald-500/20 dark:text-emerald-300">Napišite poruku na WhatsApp</a>
                </div>
                <div>
                  <div className="font-semibold">Društvene mreže</div>
                  <div className="flex flex-wrap gap-3">
                    <a className="inline-block rounded-full border border-blue-600 px-3 py-1 text-blue-700 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-300 dark:hover:bg-blue-400/10" href="https://www.instagram.com/icode.marketing?igsh=MWVpMjZpY2tobmxnYQ==" target="_blank" rel="noopener noreferrer">Instagram</a>
                    <a className="inline-block rounded-full border border-blue-600 px-3 py-1 text-blue-700 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-300 dark:hover:bg-blue-400/10" href="https://www.facebook.com/share/1A65FdQSPv/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a className="inline-block rounded-full border border-blue-600 px-3 py-1 text-blue-700 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-300 dark:hover:bg-blue-400/10" href="#" target="_blank" rel="noopener noreferrer">Messenger</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/5 py-8 text-center text-xs text-zinc-500 dark:border-white/10">
        © {new Date().getFullYear()} iCode Marketing. Sva prava zadržana.
      </footer>
    </div>
  );
}
