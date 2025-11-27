import { useTranslations } from 'next-intl';
import Header from '../components/Header';

export default function TermsAndConditions() {
  const t = useTranslations();

  return (
    <div className="min-h-screen bg-black text-zinc-50">
      <div className="relative z-50">
        <Header />
      </div>

      <main className="relative z-10 mx-auto max-w-4xl px-4 pt-24 pb-16">
        <div className="rounded-2xl border-2 border-white/10 bg-blue-950/20 p-8 shadow-sm sm:p-12">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-8 text-white">Uslovi korišćenja</h1>
          
          <div className="space-y-6 text-zinc-300">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">1. Opšte odredbe</h2>
              <p className="mb-4">
                Dobrodošli na web sajt iCode Marketing. Ovi uslovi korišćenja regulišu pristup i korišćenje naših web stranica i usluga. Korišćenjem ovog sajta, slažete se da ćete se pridržavati ovih uslova.
              </p>
              <p>
                iCode Marketing je marketinška agencija registrovana u Bosni i Hercegovini, koja pruža digitalne marketinške usluge klijentima širom sveta.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">2. Usluge</h2>
              <p className="mb-4">
                iCode Marketing pruža sledeće usluge:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Grafički dizajn i brendiranje</li>
                <li>Web razvoj i programiranje</li>
                <li>SEO optimizacija</li>
                <li>Content marketing</li>
                <li>Social media marketing</li>
                <li>Google Ads i PPC kampanje</li>
                <li>Konzultantske usluge</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">3. Obaveze klijenta</h2>
              <p className="mb-4">
                Klijent se obavezuje da:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Pruži tačne i potpune informacije neophodne za izvršenje usluga</li>
                <li>Vremeno dostavi sve materijale i sadržaj neophodan za projekat</li>
                <li>Izvrši plaćanje u skladu sa dogovorenim uslovima</li>
                <li>Saraduje u procesu realizacije projekta</li>
                <li>Poštuje rokove dogovorene u ugovoru</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">4. Obaveze iCode Marketing</h2>
              <p className="mb-4">
                iCode Marketing se obavezuje da:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Izvrši usluge u skladu sa najvišim profesionalnim standardima</li>
                <li>Poštuje dogovorene rokove i specifikacije</li>
                <li>Pruži redovne izveštaje o napretku projekta</li>
                <li>Zaštiti povjerljive informacije klijenta</li>
                <li>Pruži tehničku podršku nakon završetka projekta</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">5. Cena i plaćanje</h2>
              <p className="mb-4">
                Cene usluga se definisu individualno za svaki projekat i zavise od obima, složenosti i specifičnih zahteva klijenta.
              </p>
              <p className="mb-4">
                Uslovi plaćanja:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>40% akontacija pri početku rada</li>
                <li>40% nakon prihvata preliminarnih rešenja</li>
                <li>20% nakon finalne isporuke projekta</li>
              </ul>
              <p>
                Svi računi se izdaju u valuti BAM (konvertibilna marka) ili EUR prema dogovoru.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">6. Vlasništvo i autorska prava</h2>
              <p className="mb-4">
                Sva autorska prava na kreirane materijale (dizajn, kod, tekst, slike) prelaze na klijenta nakon potpunog izmirivanja obaveza.
              </p>
              <p>
                iCode Marketing zadržava pravo da korišći dovršene projekte u svojoj portfolio prezentaciji, osim ako klijent izričito ne zatraži suprotno.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">7. Tajnost podataka</h2>
              <p>
                Obje strane se obavezuju na čuvanje povjerljivosti svih informacija dobijenih u toku saradnje. Ova obaveza ostaje na snazi i nakon prestanka saradnje.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">8. Ograničenje odgovornosti</h2>
              <p>
                iCode Marketing ne odgovara za direktne ili indirektne štete koje mogu nastati kao rezultat korišćenja naših usluga, osim u slučajevima jasno definisanih zakonom.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">9. Raskid ugovora</h2>
              <p className="mb-4">
                Ugovor se može raskinuti:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Po dogovoru obe strane</li>
                <li>Ako jedna strana ne ispunjava obaveze iz ugovora</li>
                <li>U slučaju vanrednih okolnosti</li>
              </ul>
              <p>
                U slučaju raskida ugovora, klijent je dužan da plati izvršeni deo posla prema važećem cenovniku.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">10. Primenjivo pravo</h2>
              <p>
                Za sva pitanja koja nisu regulisana ovim uslovima, primenjuju se zakoni Bosne i Hercegovine. Sve sporove rešava nadležni sud u Gradišci.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">11. Izmjene uslova</h2>
              <p>
                iCode Marketing zadržava pravo da izmijeni ove uslove korišćenja. Sve izmjene će biti objavljene na ovom sajtu i stupaju na snagu danom objavljivanja.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">12. Kontakt informacije</h2>
              <p className="mb-2">
                Za sva pitanja u vezi sa ovim uslovima korišćenja, možete nas kontaktirati:
              </p>
              <p>
                iCode Marketing<br />
                Gornja Dolina 29<br />
                78400 Gradiška<br />
                Bosna i Hercegovina<br />
                Email: info@icode-marketing.com<br />
                Tel: +49 163 9071541
              </p>
            </section>

            <section className="mt-8 pt-6 border-t border-white/20">
              <p className="text-sm text-zinc-400">
                Ovi uslovi korišćenja su poslednji put ažurirani: {new Date().toLocaleDateString('sr-RS')}
              </p>
            </section>
          </div>
        </div>
      </main>

      <footer className="border-t border-white/10 py-10 text-center text-sm text-zinc-500">
        <p>&copy; {new Date().getFullYear()} iCode Marketing. Sva prava zadržana.</p>
      </footer>
    </div>
  );
}
