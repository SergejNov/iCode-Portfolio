import { useTranslations } from 'next-intl';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Disclaimer() {
  const t = useTranslations();

  return (
    <div className="min-h-screen bg-black text-zinc-50">
      <div className="relative z-50">
        <Header />
      </div>

      <main className="relative z-10 mx-auto max-w-4xl px-4 pt-24 pb-16">
        <div className="rounded-2xl border-2 border-white/10 bg-blue-950/20 p-8 shadow-sm sm:p-12">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-8 text-white">{t('legal.disclaimer.title')}</h1>
          
          <div className="space-y-6 text-zinc-300">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">1. {t('legal.disclaimer.sections.generalInfo.title')}</h2>
              <p className="mb-4">
                {t('legal.disclaimer.sections.generalInfo.content1')}
              </p>
              <p>
                {t('legal.disclaimer.sections.generalInfo.content2')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">2. {t('legal.disclaimer.sections.liabilityDisclaimer.title')}</h2>
              <p className="mb-4">
                {t('legal.disclaimer.sections.liabilityDisclaimer.content')}
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                {t.raw('legal.disclaimer.sections.liabilityDisclaimer.items').map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p>
                {t('legal.disclaimer.sections.liabilityDisclaimer.noWarranty')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">3. {t('legal.disclaimer.sections.accuracy.title')}</h2>
              <p className="mb-4">
                {t('legal.disclaimer.sections.accuracy.content1')}
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                {t.raw('legal.disclaimer.sections.accuracy.items').map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p>
                {t('legal.disclaimer.sections.accuracy.content2')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">4. {t('legal.disclaimer.sections.externalLinks.title')}</h2>
              <p className="mb-4">
                {t('legal.disclaimer.sections.externalLinks.content1')}
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                {t.raw('legal.disclaimer.sections.externalLinks.items').map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p>
                {t('legal.disclaimer.sections.externalLinks.recommendation')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">5. {t('legal.disclaimer.sections.intellectualProperty.title')}</h2>
              <p className="mb-4">
                {t('legal.disclaimer.sections.intellectualProperty.content1')}
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                {t.raw('legal.disclaimer.sections.intellectualProperty.items').map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p className="mb-4">
                {t('legal.disclaimer.sections.intellectualProperty.content2')}
              </p>
              <p>
                {t('legal.disclaimer.sections.intellectualProperty.unauthorizedUse')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">6. {t('legal.disclaimer.sections.servicesResults.title')}</h2>
              <p className="mb-4">
                {t('legal.disclaimer.sections.servicesResults.content1')}
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                {t.raw('legal.disclaimer.sections.servicesResults.items').map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p>
                {t('legal.disclaimer.sections.servicesResults.content2')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">7. {t('legal.disclaimer.sections.technicalLimitations.title')}</h2>
              <p className="mb-4">
                {t('legal.disclaimer.sections.technicalLimitations.content1')}
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                {t.raw('legal.disclaimer.sections.technicalLimitations.items').map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p>
                {t('legal.disclaimer.sections.technicalLimitations.content2')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">8. {t('legal.disclaimer.sections.legalProvisions.title')}</h2>
              <p className="mb-4">
                {t('legal.disclaimer.sections.legalProvisions.content1')}
              </p>
              <p>
                {t('legal.disclaimer.sections.legalProvisions.content2')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">9. {t('legal.disclaimer.sections.communication.title')}</h2>
              <p className="mb-4">
                {t('legal.disclaimer.sections.communication.content1')}
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                {t.raw('legal.disclaimer.sections.communication.items').map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p>
                {t('legal.disclaimer.sections.communication.content2')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">10. {t('legal.disclaimer.sections.amendments.title')}</h2>
              <p>
                {t('legal.disclaimer.sections.amendments.content')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">11. {t('legal.disclaimer.sections.contactInfo.title')}</h2>
              <p className="mb-2">
                {t('legal.disclaimer.sections.contactInfo.content1')}
              </p>
              <p dangerouslySetInnerHTML={{ __html: t('legal.disclaimer.sections.contactInfo.address') }} />
            </section>

            <section className="mt-8 pt-6 border-t border-white/20">
              <p className="text-sm text-zinc-400">
                {t('legal.disclaimer.sections.lastUpdated')} {new Date().toLocaleDateString()}
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
