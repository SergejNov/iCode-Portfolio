import { useTranslations } from 'next-intl';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function PrivacyPolicy() {
  const t = useTranslations();

  return (
    <div className="min-h-screen bg-black text-zinc-50">
      <div className="relative z-50">
        <Header />
      </div>

      <main className="relative z-10 mx-auto max-w-4xl px-4 pt-24 pb-16">
        <div className="rounded-2xl border-2 border-white/10 bg-blue-950/20 p-8 shadow-sm sm:p-12">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-8 text-white">{t('legal.privacyPolicy.title')}</h1>
          
          <div className="space-y-6 text-zinc-300">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">1. {t('legal.privacyPolicy.sections.introduction.title')}</h2>
              <p>
                {t('legal.privacyPolicy.sections.introduction.content')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">2. {t('legal.privacyPolicy.sections.dataCollected.title')}</h2>
              <p className="mb-4">
                {t('legal.privacyPolicy.sections.dataCollected.content')}
              </p>
              
              <h3 className="text-xl font-semibold mb-3 text-blue-300">2.1. {t('legal.privacyPolicy.sections.dataCollected.directData.title')}</h3>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                {t('legal.privacyPolicy.sections.dataCollected.directData.items' as any).map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-blue-300">2.2. {t('legal.privacyPolicy.sections.dataCollected.automaticData.title')}</h3>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                {t('legal.privacyPolicy.sections.dataCollected.automaticData.items' as any).map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-blue-300">2.3. {t('legal.privacyPolicy.sections.dataCollected.cookiesData.title')}</h3>
              <p>
                {t('legal.privacyPolicy.sections.dataCollected.cookiesData.content')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">3. {t('legal.privacyPolicy.sections.dataUsage.title')}</h2>
              <p className="mb-4">
                {t('legal.privacyPolicy.sections.dataUsage.content')}
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                {t('legal.privacyPolicy.sections.dataUsage.items' as any).map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">4. {t('legal.privacyPolicy.sections.dataProtection.title')}</h2>
              <p className="mb-4">
                {t('legal.privacyPolicy.sections.dataProtection.content')}
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                {t('legal.privacyPolicy.sections.dataProtection.items' as any).map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">5. {t('legal.privacyPolicy.sections.yourRights.title')}</h2>
              <p className="mb-4">
                {t('legal.privacyPolicy.sections.yourRights.content')}
              </p>
              
              <h3 className="text-xl font-semibold mb-3 text-blue-300">5.1. {t('legal.privacyPolicy.sections.yourRights.rightToAccess.title')}</h3>
              <p className="mb-4">
                {t('legal.privacyPolicy.sections.yourRights.rightToAccess.content')}
              </p>

              <h3 className="text-xl font-semibold mb-3 text-blue-300">5.2. {t('legal.privacyPolicy.sections.yourRights.rightToRectification.title')}</h3>
              <p className="mb-4">
                {t('legal.privacyPolicy.sections.yourRights.rightToRectification.content')}
              </p>

              <h3 className="text-xl font-semibold mb-3 text-blue-300">5.3. {t('legal.privacyPolicy.sections.yourRights.rightToErasure.title')}</h3>
              <p className="mb-4">
                {t('legal.privacyPolicy.sections.yourRights.rightToErasure.content')}
              </p>

              <h3 className="text-xl font-semibold mb-3 text-blue-300">5.4. {t('legal.privacyPolicy.sections.yourRights.rightToRestriction.title')}</h3>
              <p className="mb-4">
                {t('legal.privacyPolicy.sections.yourRights.rightToRestriction.content')}
              </p>

              <h3 className="text-xl font-semibold mb-3 text-blue-300">5.5. {t('legal.privacyPolicy.sections.yourRights.rightToPortability.title')}</h3>
              <p className="mb-4">
                {t('legal.privacyPolicy.sections.yourRights.rightToPortability.content')}
              </p>

              <h3 className="text-xl font-semibold mb-3 text-blue-300">5.6. {t('legal.privacyPolicy.sections.yourRights.rightToObject.title')}</h3>
              <p className="mb-4">
                {t('legal.privacyPolicy.sections.yourRights.rightToObject.content')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">6. {t('legal.privacyPolicy.sections.cookiesPolicy.title')}</h2>
              <p className="mb-4">
                {t('legal.privacyPolicy.sections.cookiesPolicy.content')}
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4" dangerouslySetInnerHTML={{ __html: (t('legal.privacyPolicy.sections.cookiesPolicy.items' as any) as string[]).map(item => `<li>${item}</li>`).join('') }}>
              </ul>
              <p>
                {t('legal.privacyPolicy.sections.cookiesPolicy.controlNote')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">7. {t('legal.privacyPolicy.sections.thirdParties.title')}</h2>
              <p className="mb-4">
                {t('legal.privacyPolicy.sections.thirdParties.content1')}
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                {t('legal.privacyPolicy.sections.thirdParties.items').map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p>
                {t('legal.privacyPolicy.sections.thirdParties.content2')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">8. {t('legal.privacyPolicy.sections.dataRetention.title')}</h2>
              <p className="mb-4">
                {t('legal.privacyPolicy.sections.dataRetention.content1')}
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                {t('legal.privacyPolicy.sections.dataRetention.items' as any).map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p>
                {t('legal.privacyPolicy.sections.dataRetention.content2')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">9. {t('legal.privacyPolicy.sections.internationalTransfer.title')}</h2>
              <p>
                {t('legal.privacyPolicy.sections.internationalTransfer.content')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">10. {t('legal.privacyPolicy.sections.gdprContact.title')}</h2>
              <p className="mb-4">
                {t('legal.privacyPolicy.sections.gdprContact.content1')}
              </p>
              <p dangerouslySetInnerHTML={{ __html: t('legal.privacyPolicy.sections.gdprContact.contactInfo') }} />
              <p className="mt-4">
                {t('legal.privacyPolicy.sections.gdprContact.content2')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">11. {t('legal.privacyPolicy.sections.amendments.title')}</h2>
              <p>
                {t('legal.privacyPolicy.sections.amendments.content')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">12. {t('legal.privacyPolicy.sections.complaints.title')}</h2>
              <p>
                {t('legal.privacyPolicy.sections.complaints.content')}
              </p>
            </section>

            <section className="mt-8 pt-6 border-t border-white/20">
              <p className="text-sm text-zinc-400">
                {t('legal.privacyPolicy.sections.lastUpdated')} {new Date().toLocaleDateString()}
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
