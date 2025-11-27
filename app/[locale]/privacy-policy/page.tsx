import { useTranslations } from 'next-intl';
import Header from '../components/Header';

export default function PrivacyPolicy() {
  const t = useTranslations();

  return (
    <div className="min-h-screen bg-black text-zinc-50">
      <div className="relative z-50">
        <Header />
      </div>

      <main className="relative z-10 mx-auto max-w-4xl px-4 pt-24 pb-16">
        <div className="rounded-2xl border-2 border-white/10 bg-blue-950/20 p-8 shadow-sm sm:p-12">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-8 text-white">Politika privatnosti</h1>
          
          <div className="space-y-6 text-zinc-300">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">1. Uvod</h2>
              <p>
                iCode Marketing posvećena je zaštiti vaše privatnosti. Ova politika privatnosti objašnjava koje lične podatke prikupljamo, kako ih koristimo, štitimo i koja su vaša prava u vezi sa podacima.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">2. Koji podaci se prikupljaju</h2>
              <p className="mb-4">
                Prikupljamo sljedeće vrste ličnih podataka:
              </p>
              
              <h3 className="text-xl font-semibold mb-3 text-blue-300">2.1. Podaci koje nam pružate direktno</h3>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li>Ime i prezime</li>
                <li>Email adresa</li>
                <li>Telefonski broj</li>
                <li>Naziv kompanije (ako je primjenjivo)</li>
                <li>Poruke i upiti kroz kontakt formu</li>
                <li>Podaci potrebni za izvršenje usluga</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-blue-300">2.2. Automatski prikupljeni podaci</h3>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li>IP adresa</li>
                <li>Geografska lokacija (približna)</li>
                <li>Tip i verzija pretraživača</li>
                <li>Operativni sistem</li>
                <li>Vreme posjete i trajanje sesije</li>
                <li>Posećene stranice</li>
                <li>Izvor sa kojeg ste došli na sajt</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-blue-300">2.3. Cookies podaci</h3>
              <p>
                Koristimo cookies da poboljšamo vaše iskustvo na sajtu, analiziramo promet i personalizujemo sadržaj.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">3. Kako koristimo vaše podatke</h2>
              <p className="mb-4">
                Vaše lične podatke koristimo za sljedeće svrhe:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Pružanje naših usluga i komunikacija sa klijentima</li>
                <li>Odgovaranje na upite i zahtjeve kroz kontakt formu</li>
                <li>Slanje informacija o našim uslugama i ponudama</li>
                <li>Analitika i poboljšanje naših web stranica</li>
                <li>Marketing i promocija naših usluga</li>
                <li>Ispunjavañje zakonskih obaveza</li>
                <li>Zaštita naših prava i interesa</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">4. Kako štitimo vaše podatke</h2>
              <p className="mb-4">
                Primjenjujemo sljedeće mjere zaštite:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>SSL enkripcija za sve podatke prenesene preko interneta</li>
                <li>Sigurnosni protokoli i firewall zaštita</li>
                <li>Redovno ažuriranje sistema i softvera</li>
                <li>Ograničen pristup podacima samo ovlašćenom osoblju</li>
                <li>Obuka zaposlenih o zaštiti podataka</li>
                <li>Redovna sigurnosna testiranja</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">5. Vaša prava</h2>
              <p className="mb-4">
                U skladu sa GDPR-om, imate sljedeća prava:
              </p>
              
              <h3 className="text-xl font-semibold mb-3 text-blue-300">5.1. Pravo na pristup</h3>
              <p className="mb-4">
                Imate pravo da zatražite kopiju svih vaših ličnih podataka koje čuvamo.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-blue-300">5.2. Pravo na ispravak</h3>
              <p className="mb-4">
                Možete zatražiti ispravak netočnih ili nepotpunih podataka.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-blue-300">5.3. Pravo na brisanje</h3>
              <p className="mb-4">
                Možete zatražiti brisanje vaših podataka, osim ako smo zakonski obavezni da ih čuvamo.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-blue-300">5.4. Pravo na ograničenje obrade</h3>
              <p className="mb-4">
                Možete zatražiti ograničenje obrade vaših podataka u određenim okolnostima.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-blue-300">5.5. Pravo na prenosivost podataka</h3>
              <p className="mb-4">
                Imate pravo da zatražite prenos vaših podataka u strukturiranom formatu.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-blue-300">5.6. Pravo na prigovor</h3>
              <p className="mb-4">
                Možete se usprotiviti obradi vaših podataka za određene svrhe.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">6. Cookies politika</h2>
              <p className="mb-4">
                Naš sajt koristi sljedeće vrste cookies-a:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li><strong>Necesarni cookies:</strong> Neophodni za funkcionisanje sajta</li>
                <li><strong>Analitički cookies:</strong> Pomažu nam da razumijemo kako posjetioci koriste sajt</li>
                <li><strong>Marketing cookies:</strong> Koriste se za personalizaciju reklama</li>
                <li><strong>Funkcionalni cookies:</strong> Pamte vaše postavke i preferencije</li>
              </ul>
              <p>
                Možete kontrolisati cookies kroz postavke vašeg pretraživača.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">7. Treće strane i partneri</h2>
              <p className="mb-4">
                Možemo dijeliti vaše podatke sa sljedećim trećim stranama:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li>Google Analytics (analitika sajta)</li>
                <li>Web3Forms (obrada kontakt formi)</li>
                <li>Hosting provajderi (čuvanje podataka)</li>
                <li>Platne gateway (obrada plaćanja)</li>
                <li>Email marketing platforme (slanje newslettera)</li>
              </ul>
              <p>
                Svi naši partneri su pažljivo odabrani i obavezni da poštuju standarde zaštite podataka.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">8. Čuvanje podataka</h2>
              <p className="mb-4">
                Vaši podaci se čuvaju samo onoliko dugo koliko je neophodno za:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li>Izvršenje ugovorenih usluga</li>
                <li>Ispunjavañje zakonskih obaveza</li>
                <li>Rješavanje sporova</li>
                <li>Zaštitu naših prava</li>
              </ul>
              <p>
                Nakon isteka perioda čuvanja, podaci se sigurno brišu ili anonimizuju.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">9. Međunarodni transfer podataka</h2>
              <p>
                Vaši podaci se mogu prenositi u zemlje izvan EU/EEA samo uz adekvatnu zaštitu, u skladu sa GDPR zahtevima.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">10. Kontakt za GDPR zahtjeve</h2>
              <p className="mb-4">
                Za sve zahtjeve u vezi sa vašim ličnim podacima, možete nas kontaktirati:
              </p>
              <p>
                Email: privacy@icode-marketing.com<br />
                Tel: +49 163 9071541<br />
                Adresa: Gornja Dolina 29, 78400 Gradiška, Bosna i Hercegovina
              </p>
              <p className="mt-4">
                Odgovorićemo na vaš zahtjev u roku od 30 dana.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">11. Izmjene politike</h2>
              <p>
                Možemo ažurirati ovu politiku privatnosti. Sve izmjene će biti objavljene na sajtu i stupaju na snagu danom objavljivanja.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">12. Pitanja i prigovori</h2>
              <p>
                Ako smatrate da smo prekršili vaša prava na privatnost, možete se obratiti nadležnom organu za zaštitu podataka.
              </p>
            </section>

            <section className="mt-8 pt-6 border-t border-white/20">
              <p className="text-sm text-zinc-400">
                Ova politika privatnosti je poslednji put ažurirana: {new Date().toLocaleDateString('sr-RS')}
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
