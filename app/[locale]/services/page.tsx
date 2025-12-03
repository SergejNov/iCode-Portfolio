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
            {t('servicesPage.title')}
          </h1>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
            {t('servicesPage.subtitle')}
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
                  {t('servicesPage.sections.graphicDesign.approachDescription')}
                </p>
                
                <h3 className="text-xl font-semibold mb-4 text-blue-400">{t('servicesPage.sections.graphicDesign.whatWeOffer')}</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white">{t('servicesPage.sections.graphicDesign.items.logoDesign')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white">{t('servicesPage.sections.graphicDesign.items.brandGuidelines')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white">{t('servicesPage.sections.graphicDesign.items.marketingMaterials')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white">{t('servicesPage.sections.graphicDesign.items.packagingDesign')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white">{t('servicesPage.sections.graphicDesign.items.printDigital')}</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-blue-950/20 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <LightBulbIcon className="h-6 w-6 text-blue-400" />
                  <h3 className="text-lg font-semibold text-blue-400">{t('servicesPage.sections.graphicDesign.approachTitle')}</h3>
                </div>
                <p className="text-zinc-300 mb-4">
                  {t('servicesPage.sections.graphicDesign.approachDescription2')}
                </p>
                <div className="bg-blue-900/20 rounded-lg p-4 border border-blue-700/30">
                  <p className="text-sm text-blue-300">
                    {t('servicesPage.sections.graphicDesign.quote')}
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
                  {t('servicesPage.sections.webDevelopment.description')}
                </p>
                
                <h3 className="text-xl font-semibold mb-4 text-blue-400">{t('servicesPage.sections.webDevelopment.technologies')}</h3>
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
                
                <h3 className="text-xl font-semibold mb-4 text-blue-400">{t('servicesPage.sections.webDevelopment.projectTypes')}</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <RocketLaunchIcon className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white">{t('servicesPage.sections.webDevelopment.items.corporate')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <RocketLaunchIcon className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white">{t('servicesPage.sections.webDevelopment.items.ecommerce')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <RocketLaunchIcon className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white">{t('servicesPage.sections.webDevelopment.items.webApps')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <RocketLaunchIcon className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white">{t('servicesPage.sections.webDevelopment.items.customCms')}</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-blue-950/20 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <GlobeAltIcon className="h-6 w-6 text-blue-400" />
                  <h3 className="text-lg font-semibold text-blue-400">{t('servicesPage.sections.webDevelopment.performanceSeo.title')}</h3>
                </div>
                <p className="text-zinc-300 mb-4">
                  {t('servicesPage.sections.webDevelopment.performanceSeo.description')}
                </p>
                <div className="space-y-3">
                  <div className="sm:hidden grid grid-cols-2 gap-3 text-center">
                    <div className="bg-blue-900/20 rounded-lg p-2 border border-blue-700/30 hover:bg-blue-800/20 transition-all hover:scale-105 transform">
                      <div className="text-xl font-bold text-blue-400">95+</div>
                      <div className="text-xs text-zinc-300">{t('servicesPage.sections.webDevelopment.performanceSeo.pageSpeed')}</div>
                    </div>
                    <div className="bg-blue-900/20 rounded-lg p-2 border border-blue-700/30 hover:bg-blue-800/20 transition-all hover:scale-105 transform">
                      <div className="text-xl font-bold text-blue-400">100%</div>
                      <div className="text-xs text-zinc-300">{t('servicesPage.sections.webDevelopment.performanceSeo.responsive')}</div>
                    </div>
                  </div>
                  <div className="hidden sm:block text-center">
                    <div className="bg-blue-900/20 rounded-lg p-3 border border-blue-700/30 mb-3 hover:bg-blue-800/20 transition-all hover:scale-105 transform">
                      <div className="text-xl font-bold text-blue-400">95+</div>
                      <div className="text-xs text-zinc-300">{t('servicesPage.sections.webDevelopment.performanceSeo.pageSpeed')}</div>
                    </div>
                    <div className="bg-blue-900/20 rounded-lg p-3 border border-blue-700/30 mb-3 hover:bg-blue-800/20 transition-all hover:scale-105 transform">
                      <div className="text-xl font-bold text-blue-400">100%</div>
                      <div className="text-xs text-zinc-300">{t('servicesPage.sections.webDevelopment.performanceSeo.responsive')}</div>
                    </div>
                    <div className="bg-blue-900/20 rounded-lg p-3 border border-blue-700/30 hover:bg-blue-800/20 transition-all hover:scale-105 transform">
                      <div className="text-xl font-bold text-blue-400">A+</div>
                      <div className="text-xs text-zinc-300">{t('servicesPage.sections.webDevelopment.performanceSeo.seoScore')}</div>
                    </div>
                  </div>
                  <div className="sm:hidden flex justify-center">
                    <div className="bg-blue-900/20 rounded-lg p-2 border border-blue-700/30 w-32 text-center hover:bg-blue-800/20 transition-all hover:scale-105 transform">
                      <div className="text-xl font-bold text-blue-400">A+</div>
                      <div className="text-xs text-zinc-300">{t('servicesPage.sections.webDevelopment.performanceSeo.seoScore')}</div>
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
                  {t('servicesPage.sections.seo.description')}
                </p>
                
                <h3 className="text-xl font-semibold mb-4 text-blue-400">{t('servicesPage.sections.seo.servicesTitle')}</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <MagnifyingGlassIcon className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white">{t('servicesPage.sections.seo.items.technical')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MagnifyingGlassIcon className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white">{t('servicesPage.sections.seo.items.keyword')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MagnifyingGlassIcon className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white">{t('servicesPage.sections.seo.items.onpage')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MagnifyingGlassIcon className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white">{t('servicesPage.sections.seo.items.linkbuilding')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MagnifyingGlassIcon className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white">{t('servicesPage.sections.seo.items.local')}</span>
                  </li>
                </ul>
                
                <h3 className="text-xl font-semibold mb-4 text-blue-400">{t('servicesPage.sections.seo.toolsTitle')}</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-blue-900/20 rounded-lg p-3 text-center hover:bg-blue-800/20 transition-all hover:scale-105 transform">
                    <span className="text-white">{t('servicesPage.sections.seo.tools.analytics')}</span>
                  </div>
                  <div className="bg-blue-900/20 rounded-lg p-3 text-center hover:bg-blue-800/20 transition-all hover:scale-105 transform">
                    <span className="text-white">{t('servicesPage.sections.seo.tools.console')}</span>
                  </div>
                  <div className="bg-blue-900/20 rounded-lg p-3 text-center hover:bg-blue-800/20 transition-all hover:scale-105 transform">
                    <span className="text-white">{t('servicesPage.sections.seo.tools.semrush')}</span>
                  </div>
                  <div className="bg-blue-900/20 rounded-lg p-3 text-center hover:bg-blue-800/20 transition-all hover:scale-105 transform">
                    <span className="text-white">{t('servicesPage.sections.seo.tools.ahrefs')}</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-950/20 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <ChartBarIcon className="h-6 w-6 text-blue-400" />
                  <h3 className="text-lg font-semibold text-blue-400">{t('servicesPage.sections.seo.performanceTitle')}</h3>
                </div>
                <p className="text-zinc-300 mb-4">
                  {t('servicesPage.sections.seo.performanceDescription')}
                </p>
                <div className="space-y-3">
                  <div className="flex justify-between items-center bg-blue-900/20 rounded-lg p-3 hover:bg-blue-800/20 transition-all hover:scale-105 transform">
                    <span className="text-white">{t('servicesPage.sections.seo.metrics.organic')}</span>
                    <span className="text-blue-400 font-semibold">+150%</span>
                  </div>
                  <div className="flex justify-between items-center bg-blue-900/20 rounded-lg p-3 hover:bg-blue-800/20 transition-all hover:scale-105 transform">
                    <span className="text-white">{t('servicesPage.sections.seo.metrics.keywords')}</span>
                    <span className="text-blue-400 font-semibold">+85%</span>
                  </div>
                  <div className="flex justify-between items-center bg-blue-900/20 rounded-lg p-3 hover:bg-blue-800/20 transition-all hover:scale-105 transform">
                    <span className="text-white">{t('servicesPage.sections.seo.metrics.conversions')}</span>
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
                  {t('servicesPage.sections.content.description')}
                </p>
                
                <h3 className="text-xl font-semibold mb-4 text-blue-400">{t('servicesPage.sections.content.typesTitle')}</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <SparklesIcon className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white">{t('servicesPage.sections.content.items.blog')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <SparklesIcon className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white">{t('servicesPage.sections.content.items.video')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <SparklesIcon className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white">{t('servicesPage.sections.content.items.infographics')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <SparklesIcon className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white">{t('servicesPage.sections.content.items.email')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <SparklesIcon className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white">{t('servicesPage.sections.content.items.caseStudies')}</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-blue-950/20 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <CursorArrowRaysIcon className="h-6 w-6 text-blue-400" />
                  <h3 className="text-lg font-semibold text-blue-400">{t('servicesPage.sections.content.strategyTitle')}</h3>
                </div>
                <p className="text-zinc-300 mb-4">
                  {t('servicesPage.sections.content.strategyDescription')}
                </p>
                <div className="bg-blue-900/20 rounded-lg p-4 border border-blue-700/30">
                  <h4 className="font-semibold text-blue-400 mb-2">{t('servicesPage.sections.content.processTitle')}</h4>
                  <ol className="space-y-2 text-sm text-white">
                    <li>{t('servicesPage.sections.content.process.analysis')}</li>
                    <li>{t('servicesPage.sections.content.process.calendar')}</li>
                    <li>{t('servicesPage.sections.content.process.production')}</li>
                    <li>{t('servicesPage.sections.content.process.distribution')}</li>
                    <li>{t('servicesPage.sections.content.process.iteration')}</li>
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
                  {t('servicesPage.sections.socialMedia.description')}
                </p>
                
                <h3 className="text-xl font-semibold mb-4 text-blue-400">{t('servicesPage.sections.socialMedia.platformsTitle')}</h3>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="bg-blue-900/20 rounded-lg p-3 text-center hover:bg-blue-800/20 transition-all hover:scale-105 transform">
                    <span className="text-white font-semibold">{t('servicesPage.sections.socialMedia.platforms.instagram')}</span>
                  </div>
                  <div className="bg-blue-900/20 rounded-lg p-3 text-center hover:bg-blue-800/20 transition-all hover:scale-105 transform">
                    <span className="text-white font-semibold">{t('servicesPage.sections.socialMedia.platforms.facebook')}</span>
                  </div>
                  <div className="bg-blue-900/20 rounded-lg p-3 text-center hover:bg-blue-800/20 transition-all hover:scale-105 transform">
                    <span className="text-white font-semibold">{t('servicesPage.sections.socialMedia.platforms.linkedin')}</span>
                  </div>
                  <div className="bg-blue-900/20 rounded-lg p-3 text-center hover:bg-blue-800/20 transition-all hover:scale-105 transform">
                    <span className="text-white font-semibold">{t('servicesPage.sections.socialMedia.platforms.youtube')}</span>
                  </div>
                  <div className="bg-blue-900/20 rounded-lg p-3 text-center hover:bg-blue-800/20 transition-all hover:scale-105 transform">
                    <span className="text-white font-semibold">{t('servicesPage.sections.socialMedia.platforms.twitter')}</span>
                  </div>
                  <div className="bg-blue-900/20 rounded-lg p-3 text-center hover:bg-blue-800/20 transition-all hover:scale-105 transform">
                    <span className="text-white font-semibold">{t('servicesPage.sections.socialMedia.platforms.tiktok')}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-4 text-blue-400">{t('servicesPage.sections.socialMedia.servicesTitle')}</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <HandRaisedIcon className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white">{t('servicesPage.sections.socialMedia.items.strategy')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <HandRaisedIcon className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white">{t('servicesPage.sections.socialMedia.items.content')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <HandRaisedIcon className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white">{t('servicesPage.sections.socialMedia.items.community')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <HandRaisedIcon className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white">{t('servicesPage.sections.socialMedia.items.ads')}</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-blue-950/20 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <ChartBarIcon className="h-6 w-6 text-blue-400" />
                  <h3 className="text-lg font-semibold text-blue-400">{t('servicesPage.sections.socialMedia.analyticsTitle')}</h3>
                </div>
                <p className="text-zinc-300 mb-4">
                  {t('servicesPage.sections.socialMedia.analyticsDescription')}
                </p>
                <div className="space-y-3">
                  <div className="bg-blue-900/20 rounded-lg p-3 border border-blue-700/30 hover:bg-blue-800/20 transition-all hover:scale-105 transform">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white">{t('servicesPage.sections.socialMedia.metrics.engagement')}</span>
                      <span className="text-blue-400 font-semibold">4.8%</span>
                    </div>
                    <div className="w-full bg-zinc-700 rounded-full h-2">
                      <div className="bg-blue-400 h-2 rounded-full" style={{width: '75%'}}></div>
                    </div>
                  </div>
                  <div className="bg-blue-900/20 rounded-lg p-3 border border-blue-700/30 hover:bg-blue-800/20 transition-all hover:scale-105 transform">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white">{t('servicesPage.sections.socialMedia.metrics.growth')}</span>
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
                  {t('servicesPage.sections.googleAds.description')}
                </p>
                
                <h3 className="text-xl font-semibold mb-4 text-blue-400">{t('servicesPage.sections.googleAds.servicesTitle')}</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <MegaphoneIcon className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white">{t('servicesPage.sections.googleAds.items.search')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MegaphoneIcon className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white">{t('servicesPage.sections.googleAds.items.display')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MegaphoneIcon className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white">{t('servicesPage.sections.googleAds.items.shopping')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MegaphoneIcon className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white">{t('servicesPage.sections.googleAds.items.video')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MegaphoneIcon className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white">{t('servicesPage.sections.googleAds.items.performance')}</span>
                  </li>
                </ul>
                
                <h3 className="text-xl font-semibold mb-4 text-blue-400">{t('servicesPage.sections.googleAds.certificationsTitle')}</h3>
                <div className="flex gap-3">
                  <div className="bg-blue-900/20 rounded-lg p-3 border border-blue-700/30 hover:bg-blue-800/20 transition-all hover:scale-105 transform">
                    <span className="text-blue-400 font-semibold text-sm">{t('servicesPage.sections.googleAds.certifications.ads')}</span>
                  </div>
                  <div className="bg-blue-900/20 rounded-lg p-3 border border-blue-700/30 hover:bg-blue-800/20 transition-all hover:scale-105 transform">
                    <span className="text-blue-400 font-semibold text-sm">{t('servicesPage.sections.googleAds.certifications.analytics')}</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-950/20 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <ChartBarIcon className="h-6 w-6 text-blue-400" />
                  <h3 className="text-lg font-semibold text-blue-400">{t('servicesPage.sections.googleAds.optimizationTitle')}</h3>
                </div>
                <p className="text-zinc-300 mb-4">
                  {t('servicesPage.sections.googleAds.optimizationDescription')}
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-blue-900/20 rounded-lg p-3 border border-blue-700/30 hover:bg-blue-800/20 transition-all hover:scale-105 transform">
                    <div className="text-2xl font-bold text-blue-400">3.5x</div>
                    <div className="text-xs text-zinc-300">{t('servicesPage.sections.googleAds.metrics.roas')}</div>
                  </div>
                  <div className="bg-blue-900/20 rounded-lg p-3 border border-blue-700/30 hover:bg-blue-800/20 transition-all hover:scale-105 transform">
                    <div className="text-2xl font-bold text-blue-400">-40%</div>
                    <div className="text-xs text-zinc-300">{t('servicesPage.sections.googleAds.metrics.cpc')}</div>
                  </div>
                  <div className="bg-blue-900/20 rounded-lg p-3 border border-blue-700/30 hover:bg-blue-800/20 transition-all hover:scale-105 transform">
                    <div className="text-2xl font-bold text-blue-400">85%</div>
                    <div className="text-xs text-zinc-300">{t('servicesPage.sections.googleAds.metrics.quality')}</div>
                  </div>
                  <div className="bg-blue-900/20 rounded-lg p-3 border border-blue-700/30 hover:bg-blue-800/20 transition-all hover:scale-105 transform">
                    <div className="text-2xl font-bold text-blue-400">12%</div>
                    <div className="text-xs text-zinc-300">{t('servicesPage.sections.googleAds.metrics.ctr')}</div>
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
              <h2 className="text-3xl font-bold tracking-tight mb-4 text-white">{t('servicesPage.contactSection.title')}</h2>
              <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
                {t('servicesPage.contactSection.subtitle')}
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
