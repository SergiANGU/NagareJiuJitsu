import { useTranslation } from "react-i18next";

export default function FAQSection() {
    const { t } = useTranslation();
    return (
        <section id="faq" className="py-20 px-4 sm:px-8 bg-[#F0EDE7] text-[#2C2C2C]">
        <div className="w-full mx-auto">
          <h3 className="text-3xl font-bold mb-6">{t('faq.title')}</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold">{t('faq.q1')}</h4>
              <p className="text-gray-700">{t('faq.a1')}</p>
            </div>
            <div>
              <h4 className="font-semibold">{t('faq.q2')}</h4>
              <p className="text-gray-700">{t('faq.a2')}</p>
            </div>
            <div>
              <h4 className="font-semibold">{t('faq.q3')}</h4>
              <p className="text-gray-700">{t('faq.a3')}</p>
            </div>
            <div>
              <h4 className="font-semibold">{t('faq.q4')}</h4>
              <p className="text-gray-700">{t('faq.a4')}</p>
            </div>
          </div>
        </div>
      </section>
    );
  }