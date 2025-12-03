import { useTranslations } from 'next-intl';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function TermsAndConditions() {
  const t = useTranslations();

  return (
    <div className="min-h-screen bg-black text-zinc-50">
      <div className="relative z-50">
        <Header />
      </div>

      <main className="relative z-10 mx-auto max-w-4xl px-4 pt-24 pb-16">
        <div className="rounded-2xl border-2 border-white/10 bg-blue-950/20 p-8 shadow-sm sm:p-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-8 text-white">
            <span className="block sm:hidden">AGB</span>
            <span className="hidden sm:block">{t('legal.termsAndConditions.title')}</span>
          </h1>
          
          <div className="space-y-6 text-zinc-300">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">1. {t('legal.termsAndConditions.sections.general.title')}</h2>
              <p className="mb-4">
                {t('legal.termsAndConditions.sections.general.content1')}
              </p>
              <p>
                {t('legal.termsAndConditions.sections.general.content2')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">2. {t('legal.termsAndConditions.sections.services.title')}</h2>
              <p className="mb-4">
                {t('legal.termsAndConditions.sections.services.content')}
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                {t.raw('legal.termsAndConditions.sections.services.items').map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">3. {t('legal.termsAndConditions.sections.clientObligations.title')}</h2>
              <p className="mb-4">
                {t('legal.termsAndConditions.sections.clientObligations.content')}
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                {t.raw('legal.termsAndConditions.sections.clientObligations.items').map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">4. {t('legal.termsAndConditions.sections.companyObligations.title')}</h2>
              <p className="mb-4">
                {t('legal.termsAndConditions.sections.companyObligations.content')}
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                {t.raw('legal.termsAndConditions.sections.companyObligations.items').map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">5. {t('legal.termsAndConditions.sections.pricingPayment.title')}</h2>
              <p className="mb-4">
                {t('legal.termsAndConditions.sections.pricingPayment.content1')}
              </p>
              <p className="mb-4">
                {t('legal.termsAndConditions.sections.pricingPayment.paymentTerms')}
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                {t.raw('legal.termsAndConditions.sections.pricingPayment.items').map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p>
                {t('legal.termsAndConditions.sections.pricingPayment.content2')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">6. {t('legal.termsAndConditions.sections.ownership.title')}</h2>
              <p className="mb-4">
                {t('legal.termsAndConditions.sections.ownership.content1')}
              </p>
              <p>
                {t('legal.termsAndConditions.sections.ownership.content2')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">7. {t('legal.termsAndConditions.sections.confidentiality.title')}</h2>
              <p>
                {t('legal.termsAndConditions.sections.confidentiality.content')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">8. {t('legal.termsAndConditions.sections.liability.title')}</h2>
              <p>
                {t('legal.termsAndConditions.sections.liability.content')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">9. {t('legal.termsAndConditions.sections.termination.title')}</h2>
              <p className="mb-4">
                {t('legal.termsAndConditions.sections.termination.content1')}
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                {t.raw('legal.termsAndConditions.sections.termination.items').map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p>
                {t('legal.termsAndConditions.sections.termination.content2')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">10. {t('legal.termsAndConditions.sections.applicableLaw.title')}</h2>
              <p>
                {t('legal.termsAndConditions.sections.applicableLaw.content')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">11. {t('legal.termsAndConditions.sections.amendments.title')}</h2>
              <p>
                {t('legal.termsAndConditions.sections.amendments.content')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">12. {t('legal.termsAndConditions.sections.contactInfo.title')}</h2>
              <p className="mb-2">
                {t('legal.termsAndConditions.sections.contactInfo.content1')}
              </p>
              <p dangerouslySetInnerHTML={{ __html: t('legal.termsAndConditions.sections.contactInfo.address') }} />
            </section>

            <section className="mt-8 pt-6 border-t border-white/20">
              <p className="text-sm text-zinc-400">
                {t('legal.termsAndConditions.sections.lastUpdated')} {new Date().toLocaleDateString()}
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
