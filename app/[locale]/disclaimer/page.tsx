import { useTranslations } from 'next-intl';
import Header from '../components/Header';

export default function Disclaimer() {
  const t = useTranslations();

  return (
    <div className="min-h-screen bg-black text-zinc-50">
      <div className="relative z-50">
        <Header />
      </div>

      <main className="relative z-10 mx-auto max-w-4xl px-4 pt-24 pb-16">
        <div className="rounded-2xl border-2 border-white/10 bg-blue-950/20 p-8 shadow-sm sm:p-12">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-8 text-white">Disclaimer</h1>
          
          <div className="space-y-6 text-zinc-300">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">1. Opšte informacije</h2>
              <p className="mb-4">
                Ovaj disclaimer sadrži važne informacije o ograničenjima odgovornosti i uslovima korišćenja web stranica i usluga iCode Marketing.
              </p>
              <p>
                Korišćenjem ovog sajta i naših usluga, slažete se sa odredbama ovog disclaimer-a.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">2. Isključenje odgovornosti</h2>
              <p className="mb-4">
                iCode Marketing ne odgovara za:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li>Bilo kakve direktne ili indirektne štete nastale korišćenjem informacija sa ovog sajta</li>
                <li>Gubitak podataka ili profita kao rezultat korišćenja naših usluga</li>
                <li>Tehničke probleme, prekide rada sajta ili greške u softveru</li>
                <li>Štete nastale usled vanrednih okolnosti ili force majeure</li>
                <li>Štete nastale usled neovlašćenog pristupa trećih lica</li>
              </ul>
              <p>
                Sve informacije na ovom sajtu se pružaju "takve kakve su" bez ikakvih garancija.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">3. Tačnost informacija</h2>
              <p className="mb-4">
                Trudimo se da informacije na ovom sajtu budu tačne i ažurne, ali:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li>Ne garantujemo potpunu tačnost svih informacija</li>
                <li>Sadržaj se može promeniti bez prethodne najave</li>
                <li>Cene i uslovi usluga mogu se promeniti</li>
                <li>Nismo odgovorni za greške u informacijama</li>
              </ul>
              <p>
                Preduzimamo sve razumne mjere da osiguramo tačnost informacija, ali ne preuzimamo odgovornost za eventualne greške.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">4. Linkovi ka trećim stranama</h2>
              <p className="mb-4">
                Naš sajt može sadržavati linkove ka web stranicama trećih lica. Mi:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li>Nismo odgovorni za sadržaj eksternih sajtova</li>
                <li>Ne podržavamo nužno stavove izražene na tim sajtovima</li>
                <li>Nismo odgovorni za privatnost ili prakse eksternih sajtova</li>
                <li>Ne garantujemo dostupnost ili funkcionisanje eksternih linkova</li>
              </ul>
              <p>
                Preporučujemo da pročitate uslove korišćenja i politiku privatnosti svakog sajta koji posjetite.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">5. Intelektualno vlasništvo</h2>
              <p className="mb-4">
                Sav sadržaj na ovom sajtu, uključujući:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li>Tekstove, slike, grafike i dizajn</li>
                <li>Logo, brend ime i zaštitne znake</li>
                <li>Kod, softver i tehnologiju</li>
                <li>Video i audio materijale</li>
              </ul>
              <p className="mb-4">
                Zaštićeni su autorskim pravima i pripadaju iCode Marketing ili se koriste uz dozvolu.
              </p>
              <p>
                Neovlašćena upotreba, kopiranje ili distribucija sadržaja je strogo zabranjena.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">6. Usluge i rezultati</h2>
              <p className="mb-4">
                U vezi sa našim uslugama, važi sljedeće:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li>Ne garantujemo specifične rezultate ili uspeh</li>
                <li>Rezultati mogu varirati u zavisnosti od mnogih faktora</li>
                <li>Prošli uspesi ne garantuju buduće rezultate</li>
                <li>Vreme potrebno za postizanje rezultata može varirati</li>
              </ul>
              <p>
                Trudićemo se da pružimo najbolje moguće usluge, ali ne možemo garantovati specifične ishode.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">7. Tehnička ograničenja</h2>
              <p className="mb-4">
                Naš sajt i usluge mogu biti podložni:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li>Privremenim prekidima u radu</li>
                <li>Održavanju i ažuriranju sistema</li>
                <li>Bugovima ili tehničkim problemima</li>
                <li>Ograničenjima kapaciteta servera</li>
              </ul>
              <p>
                Ne odgovaramo za štete nastale usled tehničkih problema ili prekida rada.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">8. Zakonske odredbe</h2>
              <p className="mb-4">
                Ovaj disclaimer ne ograničava vaša zakonska prava koja ne mogu biti isključena ugovorom.
              </p>
              <p>
                U slučaju da se bilo koja odredba ovog disclaimer-a smatra nevažećom, ostale odredbe ostaju na snazi.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">9. Komunikacija</h2>
              <p className="mb-4">
                Sva komunikacija sa nama putem email-a, telefona ili kontakt forme:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li>Može biti zabeležena i arhivirana</li>
                <li>Koristi se za unapređenje naših usluga</li>
                <li>Može se koristiti za rješavanje sporova</li>
                <li>Podliježe našoj politici privatnosti</li>
              </ul>
              <p>
                Ne garantujemo trenutni odgovor na sve upite.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">10. Promjene uslova</h2>
              <p>
                iCode Marketing zadržava pravo da izmijeni ovaj disclaimer. Sve izmjene će biti objavljene na sajtu i stupaju na snagu danom objavljivanja.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">11. Kontakt informacije</h2>
              <p className="mb-2">
                Za sva pitanja u vezi sa ovim disclaimer-om, možete nas kontaktirati:
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
                Ovaj disclaimer je poslednji put ažuriran: {new Date().toLocaleDateString('sr-RS')}
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
