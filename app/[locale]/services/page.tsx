import Header from "../components/Header";
import Footer from "../components/Footer";
import { 
  PhoneIcon,
  PaintBrushIcon,
  CodeBracketIcon,
  ArrowTrendingUpIcon,
  ShareIcon,
  ChatBubbleLeftRightIcon,
  MegaphoneIcon,
  CheckCircleIcon,
  ChartBarIcon,
  GlobeAltIcon,
  LightBulbIcon,
  RocketLaunchIcon,
  MagnifyingGlassIcon,
  CursorArrowRaysIcon,
  HandRaisedIcon,
  SparklesIcon
} from '@heroicons/react/24/solid';
import {useTranslations} from 'next-intl';

export default function Services() {
  const t = useTranslations();

  // Smooth scroll function
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  
  return (
    <div className="min-h-screen bg-black text-zinc-50 scroll-smooth">
      <div className="relative z-50">
        <Header />
      </div>

      <main className="relative z-10 mx-auto max-w-7xl px-4 pt-24 pb-16">
        {/* Page Header */}
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 pb-1 mb-6">
            {t('services.title')}
          </h1>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </section>

        {/* Graphic Design Section */}
        <section id="graphic-design" className="scroll-mt-20 mb-20">
          <div className="rounded-2xl border-2 border-white/10 bg-blue-950/20 p-8 shadow-sm sm:p-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-900/50">
                <PaintBrushIcon className="h-8 w-8 text-blue-400" />
              </div>
              <h2 className="text-3xl font-semibold tracking-tight text-white">{t('services.items.graphicDesign.title')}</h2>
            </div>
            
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <p className="text-lg text-white mb-6">
                  {t('services.items.graphicDesign.description')}
                </p>
                <p className="text-zinc-300 mb-6">
                  Naš tim kreativnih dizajnera specijalizovan je za kreiranje vizuelnog identiteta koji će vaš brend učiniti prepoznatljivim i memorable. Od logo dizajna do kompletnih brend priručnika, mi osiguravamo da svaki vizuelni element komunicira vašu poruku na efikasan način.
                </p>
                
                <h3 className="text-xl font-semibold mb-4 text-blue-400">Šta nudimo:</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white">Logo dizajn i vizuelni identitet</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white">Brend priručnici i smernice</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white">Dizajn marketing materijala</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white">Packaging dizajn</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white">Dizajn za print i digital medije</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-blue-950/20 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <LightBulbIcon className="h-6 w-6 text-blue-400" />
                  <h3 className="text-lg font-semibold text-blue-400">Naš pristup</h3>
                </div>
                <p className="text-zinc-300 mb-4">
                  Svaki projekat započinjemo detaljnom analizom vašeg brenda, ciljne publike i konkurencije. Kreiramo dizajn koji nije samo lepo, već i strateški efikasan.
                </p>
                <div className="bg-blue-900/20 rounded-lg p-4 border border-blue-700/30">
                  <p className="text-sm text-blue-300">
                    "Dobar dizajn je vidljiv, odličan dizajn je transparentan." - Joe Sparano
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Web Development Section */}
        <section id="web-development" className="scroll-mt-20 mb-20">
          <div className="rounded-2xl border-2 border-white/10 bg-blue-950/20 p-8 shadow-sm sm:p-12">
            <div className="flex items-center gap-4 mb-6 sm:items-center sm:gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-900/50 flex-shrink-0">
                <CodeBracketIcon className="h-8 w-8 text-blue-400" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">{t('services.items.webDevelopment.title')}</h2>
            </div>
            
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <p className="text-lg text-white mb-6">
                  {t('services.items.webDevelopment.description')}
                </p>
                <p className="text-zinc-300 mb-6">
                  Razvijamo moderne, brze i responsive web aplikacije korišćenjem najnovijih tehnologija. Naši developeri specijalizovani su za Next.js, React, i druge cutting-edge frameworkove koji osiguravaju optimalne performanse i korisničko iskustvo.
                </p>
                
                <h3 className="text-xl font-semibold mb-4 text-blue-400">Tehnologije koje koristimo:</h3>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="bg-blue-900/20 rounded-lg p-3 text-center hover:bg-blue-800/20 transition-all hover:scale-105 transform">
                    <span className="text-white">Next.js</span>
                  </div>
                  <div className="bg-blue-900/20 rounded-lg p-3 text-center hover:bg-blue-800/20 transition-all hover:scale-105 transform">
                    <span className="text-white">React</span>
                  </div>
                  <div className="bg-blue-900/20 rounded-lg p-3 text-center hover:bg-blue-800/20 transition-all hover:scale-105 transform">
                    <span className="text-white">TypeScript</span>
                  </div>
                  <div className="bg-blue-900/20 rounded-lg p-3 text-center hover:bg-blue-800/20 transition-all hover:scale-105 transform">
                    <span className="text-white">Tailwind CSS</span>
                  </div>
                  <div className="bg-blue-900/20 rounded-lg p-3 text-center hover:bg-blue-800/20 transition-all hover:scale-105 transform">
                    <span className="text-white">Node.js</span>
                  </div>
                  <div className="bg-blue-900/20 rounded-lg p-3 text-center hover:bg-blue-800/20 transition-all hover:scale-105 transform">
                    <span className="text-white">MongoDB</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-4 text-blue-400">Vrste projekata:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <RocketLaunchIcon className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white">Corporate web sajtovi</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <RocketLaunchIcon className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white">E-commerce platforme</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <RocketLaunchIcon className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white">Web aplikacije</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <RocketLaunchIcon className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white">Custom CMS sistemi</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-blue-950/20 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <GlobeAltIcon className="h-6 w-6 text-blue-400" />
                  <h3 className="text-lg font-semibold text-blue-400">Performanse i SEO</h3>
                </div>
                <p className="text-zinc-300 mb-4">
                  Svi naši sajtovi optimizovani su za brzinu, SEO prilagođenost i mobilne uređaje. Koristimo moderne tehnike kao što su lazy loading, code splitting i image optimization.
                </p>
                <div className="space-y-3">
                  <div className="sm:hidden grid grid-cols-2 gap-3 text-center">
                    <div className="bg-blue-900/20 rounded-lg p-2 border border-blue-700/30 hover:bg-blue-800/20 transition-all hover:scale-105 transform">
                      <div className="text-xl font-bold text-blue-400">95+</div>
                      <div className="text-xs text-zinc-300">PageSpeed</div>
                    </div>
                    <div className="bg-blue-900/20 rounded-lg p-2 border border-blue-700/30 hover:bg-blue-800/20 transition-all hover:scale-105 transform">
                      <div className="text-xl font-bold text-blue-400">100%</div>
                      <div className="text-xs text-zinc-300">Responsive</div>
                    </div>
                  </div>
                  <div className="hidden sm:block text-center">
                    <div className="bg-blue-900/20 rounded-lg p-3 border border-blue-700/30 mb-3 hover:bg-blue-800/20 transition-all hover:scale-105 transform">
                      <div className="text-xl font-bold text-blue-400">95+</div>
                      <div className="text-xs text-zinc-300">PageSpeed</div>
                    </div>
                    <div className="bg-blue-900/20 rounded-lg p-3 border border-blue-700/30 mb-3 hover:bg-blue-800/20 transition-all hover:scale-105 transform">
                      <div className="text-xl font-bold text-blue-400">100%</div>
                      <div className="text-xs text-zinc-300">Responsive</div>
                    </div>
                    <div className="bg-blue-900/20 rounded-lg p-3 border border-blue-700/30 hover:bg-blue-800/20 transition-all hover:scale-105 transform">
                      <div className="text-xl font-bold text-blue-400">A+</div>
                      <div className="text-xs text-zinc-300">SEO Score</div>
                    </div>
                  </div>
                  <div className="sm:hidden flex justify-center">
                    <div className="bg-blue-900/20 rounded-lg p-2 border border-blue-700/30 w-32 text-center hover:bg-blue-800/20 transition-all hover:scale-105 transform">
                      <div className="text-xl font-bold text-blue-400">A+</div>
                      <div className="text-xs text-zinc-300">SEO Score</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Section */}
        <section id="seo" className="scroll-mt-20 mb-20">
          <div className="rounded-2xl border-2 border-white/10 bg-blue-950/20 p-8 shadow-sm sm:p-12">
            <div className="flex items-center gap-4 mb-6 sm:items-center sm:gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-900/50 flex-shrink-0">
                <ArrowTrendingUpIcon className="h-8 w-8 text-blue-400" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">{t('services.items.seo.title')}</h2>
            </div>
            
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <p className="text-lg text-white mb-6">
                  {t('services.items.seo.description')}
                </p>
                <p className="text-zinc-300 mb-6">
                  SEO je ključni element za online vidljivost i rast poslovanja. Naš tim SEO eksperata koristi belo-hat tehnike i najnovije alate da poboljša vaš rang na pretraživačima i poveća organski saobraćaj.
                </p>
                
                <h3 className="text-xl font-semibold mb-4 text-blue-400">SEO usluge:</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <MagnifyingGlassIcon className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white">Tehnička SEO optimizacija</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MagnifyingGlassIcon className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white">Keyword research i analiza</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MagnifyingGlassIcon className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white">On-page optimizacija</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MagnifyingGlassIcon className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white">Link building strategije</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MagnifyingGlassIcon className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white">Local SEO optimizacija</span>
                  </li>
                </ul>
                
                <h3 className="text-xl font-semibold mb-4 text-blue-400">Alati i analitika:</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-blue-900/20 rounded-lg p-3 text-center hover:bg-blue-800/20 transition-all hover:scale-105 transform">
                    <span className="text-white">Google Analytics</span>
                  </div>
                  <div className="bg-blue-900/20 rounded-lg p-3 text-center hover:bg-blue-800/20 transition-all hover:scale-105 transform">
                    <span className="text-white">Search Console</span>
                  </div>
                  <div className="bg-blue-900/20 rounded-lg p-3 text-center hover:bg-blue-800/20 transition-all hover:scale-105 transform">
                    <span className="text-white">SEMrush</span>
                  </div>
                  <div className="bg-blue-900/20 rounded-lg p-3 text-center hover:bg-blue-800/20 transition-all hover:scale-105 transform">
                    <span className="text-white">Ahrefs</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-950/20 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <ChartBarIcon className="h-6 w-6 text-blue-400" />
                  <h3 className="text-lg font-semibold text-blue-400">Mjerenje uspešnosti</h3>
                </div>
                <p className="text-zinc-300 mb-4">
                  Pratimo ključne metrike i pružamo detaljne izveštaje o napretku. Naši klijenti vide konkretne rezultate kroz povećanje saobraćaja, bolji rang i više konverzija.
                </p>
                <div className="space-y-3">
                  <div className="flex justify-between items-center bg-blue-900/20 rounded-lg p-3 hover:bg-blue-800/20 transition-all hover:scale-105 transform">
                    <span className="text-white">Organski saobraćaj</span>
                    <span className="text-blue-400 font-semibold">+150%</span>
                  </div>
                  <div className="flex justify-between items-center bg-blue-900/20 rounded-lg p-3 hover:bg-blue-800/20 transition-all hover:scale-105 transform">
                    <span className="text-white">Keywords na prvoj strani</span>
                    <span className="text-blue-400 font-semibold">+85%</span>
                  </div>
                  <div className="flex justify-between items-center bg-blue-900/20 rounded-lg p-3 hover:bg-blue-800/20 transition-all hover:scale-105 transform">
                    <span className="text-white">Konverzije</span>
                    <span className="text-blue-400 font-semibold">+200%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Marketing Section */}
        <section id="content" className="scroll-mt-20 mb-20">
          <div className="rounded-2xl border-2 border-white/10 bg-blue-950/20 p-8 shadow-sm sm:p-12">
            <div className="flex items-center gap-4 mb-6 sm:items-center sm:gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-900/50 flex-shrink-0">
                <ShareIcon className="h-8 w-8 text-blue-400" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">{t('services.items.content.title')}</h2>
            </div>
            
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <p className="text-lg text-white mb-6">
                  {t('services.items.content.description')}
                </p>
                <p className="text-zinc-300 mb-6">
                  Kreiramo visokokvalitetan sadržaj koji privlači, angažuje i konvertuje vašu ciljnu publiku. Naš tim content stratega i copywritera razume važnost relevantnog i vrednog sadržaja za izgradnju brenda i poverenja.
                </p>
                
                <h3 className="text-xl font-semibold mb-4 text-blue-400">Vrste sadržaja:</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <SparklesIcon className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white">Blog članci i guest posting</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <SparklesIcon className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white">Video sadržaj i skriptovi</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <SparklesIcon className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white">Infografike i vizuelni sadržaj</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <SparklesIcon className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white">Email marketing kampanje</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <SparklesIcon className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white">Case studije i whitepaperi</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-blue-950/20 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <CursorArrowRaysIcon className="h-6 w-6 text-blue-400" />
                  <h3 className="text-lg font-semibold text-blue-400">Content strategija</h3>
                </div>
                <p className="text-zinc-300 mb-4">
                  Razvijamo personalizovane content strategije bazirane na analizi vaše publike, industrije i ciljeva. Svaki sadržaj je optimizovan za SEO i dizajniran da generiše rezultate.
                </p>
                <div className="bg-blue-900/20 rounded-lg p-4 border border-blue-700/30">
                  <h4 className="font-semibold text-blue-400 mb-2">Naš proces:</h4>
                  <ol className="space-y-2 text-sm text-white">
                    <li>1. Analiza i research</li>
                    <li>2. Kreiranje content kalendara</li>
                    <li>3. Produkcija i optimizacija</li>
                    <li>4. Distribucija i promocija</li>
                    <li>5. Analiza i iteracija</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Media Marketing Section */}
        <section id="social-media" className="scroll-mt-20 mb-20">
          <div className="rounded-2xl border-2 border-white/10 bg-blue-950/20 p-8 shadow-sm sm:p-12">
            <div className="flex items-center gap-4 mb-6 sm:items-center sm:gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-900/50 flex-shrink-0">
                <ChatBubbleLeftRightIcon className="h-8 w-8 text-blue-400" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">{t('services.items.socialMedia.title')}</h2>
            </div>
            
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <p className="text-lg text-white mb-6">
                  {t('services.items.socialMedia.description')}
                </p>
                <p className="text-zinc-300 mb-6">
                  Upravljamo vašim prisustvom na društvenim mrežama i kreiramo kampanje koje grade zajednicu, povećavaju angažovanje i voze poslovanje. Specijalizovani smo za sve relevantne platforme.
                </p>
                
                <h3 className="text-xl font-semibold mb-4 text-blue-400">Platforme koje pokrivamo:</h3>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="bg-blue-900/20 rounded-lg p-3 text-center hover:bg-blue-800/20 transition-all hover:scale-105 transform">
                    <span className="text-white font-semibold">Instagram</span>
                  </div>
                  <div className="bg-blue-900/20 rounded-lg p-3 text-center hover:bg-blue-800/20 transition-all hover:scale-105 transform">
                    <span className="text-white font-semibold">Facebook</span>
                  </div>
                  <div className="bg-blue-900/20 rounded-lg p-3 text-center hover:bg-blue-800/20 transition-all hover:scale-105 transform">
                    <span className="text-white font-semibold">LinkedIn</span>
                  </div>
                  <div className="bg-blue-900/20 rounded-lg p-3 text-center hover:bg-blue-800/20 transition-all hover:scale-105 transform">
                    <span className="text-white font-semibold">YouTube</span>
                  </div>
                  <div className="bg-blue-900/20 rounded-lg p-3 text-center hover:bg-blue-800/20 transition-all hover:scale-105 transform">
                    <span className="text-white font-semibold">X (Twitter)</span>
                  </div>
                  <div className="bg-blue-900/20 rounded-lg p-3 text-center hover:bg-blue-800/20 transition-all hover:scale-105 transform">
                    <span className="text-white font-semibold">TikTok</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-4 text-blue-400">Usluge:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <HandRaisedIcon className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white">Social media strategija</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <HandRaisedIcon className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white">Content kreacija i scheduling</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <HandRaisedIcon className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white">Community management</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <HandRaisedIcon className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white">Plasirane reklamne kampanje</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-blue-950/20 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <ChartBarIcon className="h-6 w-6 text-blue-400" />
                  <h3 className="text-lg font-semibold text-blue-400">Analitika i reporting</h3>
                </div>
                <p className="text-zinc-300 mb-4">
                  Pratimo ključne metrike kao što su engagement rate, reach, impressions i konverzije. Pružamo nedeljne i mesečne izveštaje sa detaljnom analizom performansi.
                </p>
                <div className="space-y-3">
                  <div className="bg-blue-900/20 rounded-lg p-3 border border-blue-700/30 hover:bg-blue-800/20 transition-all hover:scale-105 transform">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white">Engagement Rate</span>
                      <span className="text-blue-400 font-semibold">4.8%</span>
                    </div>
                    <div className="w-full bg-zinc-700 rounded-full h-2">
                      <div className="bg-blue-400 h-2 rounded-full" style={{width: '75%'}}></div>
                    </div>
                  </div>
                  <div className="bg-blue-900/20 rounded-lg p-3 border border-blue-700/30 hover:bg-blue-800/20 transition-all hover:scale-105 transform">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white">Follower Growth</span>
                      <span className="text-blue-400 font-semibold">+25%</span>
                    </div>
                    <div className="w-full bg-zinc-700 rounded-full h-2">
                      <div className="bg-blue-400 h-2 rounded-full" style={{width: '85%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Google Ads Section */}
        <section id="google-ads" className="scroll-mt-20 mb-20">
          <div className="rounded-2xl border-2 border-white/10 bg-blue-950/20 p-8 shadow-sm sm:p-12">
            <div className="flex items-center gap-4 mb-6 sm:items-center sm:gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-900/50 flex-shrink-0">
                <MegaphoneIcon className="h-8 w-8 text-blue-400" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">{t('services.items.googleAds.title')}</h2>
            </div>
            
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <p className="text-lg text-white mb-6">
                  {t('services.items.googleAds.description')}
                </p>
                <p className="text-zinc-300 mb-6">
                  Kao Google Partner certificirana agencija, kreiramo i optimizujemo PPC kampanje koje dostavljaju maksimalan ROI. Koristimo napredne tehnike targetiranja i optimizacije da osiguramo najbolje rezultate.
                </p>
                
                <h3 className="text-xl font-semibold mb-4 text-blue-400">Google Ads usluge:</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <MegaphoneIcon className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white">Search kampanje (Google Search)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MegaphoneIcon className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white">Display kampanje (Google Display Network)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MegaphoneIcon className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white">Shopping kampanje</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MegaphoneIcon className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white">Video kampanje (YouTube)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MegaphoneIcon className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white">Performance Max kampanje</span>
                  </li>
                </ul>
                
                <h3 className="text-xl font-semibold mb-4 text-blue-400">Certifikacije:</h3>
                <div className="flex gap-3">
                  <div className="bg-blue-900/20 rounded-lg p-3 border border-blue-700/30 hover:bg-blue-800/20 transition-all hover:scale-105 transform">
                    <span className="text-blue-400 font-semibold text-sm">Google Ads Certified</span>
                  </div>
                  <div className="bg-blue-900/20 rounded-lg p-3 border border-blue-700/30 hover:bg-blue-800/20 transition-all hover:scale-105 transform">
                    <span className="text-blue-400 font-semibold text-sm">Analytics Certified</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-950/20 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <ChartBarIcon className="h-6 w-6 text-blue-400" />
                  <h3 className="text-lg font-semibold text-blue-400">ROI optimizacija</h3>
                </div>
                <p className="text-zinc-300 mb-4">
                  Fokusiramo se na merljive rezultate i pozitivan ROI. Koristimo A/B testing, optimizaciju CPC-a i napredno targetiranje da maksimiziramo vašu investiciju.
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-blue-900/20 rounded-lg p-3 border border-blue-700/30 hover:bg-blue-800/20 transition-all hover:scale-105 transform">
                    <div className="text-2xl font-bold text-blue-400">3.5x</div>
                    <div className="text-xs text-zinc-300">Avg. ROAS</div>
                  </div>
                  <div className="bg-blue-900/20 rounded-lg p-3 border border-blue-700/30 hover:bg-blue-800/20 transition-all hover:scale-105 transform">
                    <div className="text-2xl font-bold text-blue-400">-40%</div>
                    <div className="text-xs text-zinc-300">CPC Reduction</div>
                  </div>
                  <div className="bg-blue-900/20 rounded-lg p-3 border border-blue-700/30 hover:bg-blue-800/20 transition-all hover:scale-105 transform">
                    <div className="text-2xl font-bold text-blue-400">85%</div>
                    <div className="text-xs text-zinc-300">Quality Score</div>
                  </div>
                  <div className="bg-blue-900/20 rounded-lg p-3 border border-blue-700/30 hover:bg-blue-800/20 transition-all hover:scale-105 transform">
                    <div className="text-2xl font-bold text-blue-400">12%</div>
                    <div className="text-xs text-zinc-300">CTR</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="scroll-mt-20 mt-16">
          <div className="rounded-2xl border-2 border-white/10 bg-blue-950/20 p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold tracking-tight mb-4 text-white">Spremni za saradnju?</h2>
              <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
                Kontaktirajte nas danas za besplatnu konsultaciju i saznajte kako možemo pomoći vašem brendu da dostigne nove visine.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a 
                href="tel:+491639071541" 
                className="flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-base font-medium text-white transition-all hover:bg-blue-700 hover:scale-105 transform flex-shrink-0"
              >
                <PhoneIcon className="h-5 w-5" />
                <span>+49 163 9071541</span>
              </a>
              <a 
                href="mailto:info@icode-marketing.com" 
                className="flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-base font-medium text-white transition-all hover:bg-blue-700 hover:scale-105 transform flex-shrink-0"
              >
                <span>info@icode-marketing.com</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
