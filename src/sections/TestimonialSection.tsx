import { useTranslation } from "react-i18next";

export default function TestimonialsSection() {
  const { t } = useTranslation();
  return (
    <section id="testimonios" className="py-20 px-4 sm:px-8 bg-[#FAF9F6] text-[#1F1F1F]">
      <div className="w-full mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-[#1F1F1F]">{t('testimonials.title')}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Carta de Axel */}
          <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 flex flex-col">
            <h3 className="text-3xl font-bold mb-6 text-center text-[#1F1F1F]">Axel</h3>
            <div className="flex-grow flex justify-center items-center">
              <div className="text-lg text-gray-700 text-center leading-relaxed space-y-2">
                <p>{t('testimonials.axel.exp_jj')}</p>
                <p>{t('testimonials.axel.exp_judo')}</p>
                <p>{t('testimonials.axel.dan_jj')}</p>
                <p>{t('testimonials.axel.dan_judo')}</p>
                <p>{t('testimonials.axel.bjj')}</p>
                <p>{t('testimonials.axel.medals')}</p>
                <p>{t('testimonials.axel.coach')}</p>
              </div>
            </div>
          </div>

          {/* Carta de Paula */}
          <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 flex flex-col">
            <h3 className="text-3xl font-bold mb-6 text-center text-[#1F1F1F]">Paula</h3>
            <div className="flex-grow flex justify-center items-center">
              <div className="text-lg text-gray-700 text-center leading-relaxed space-y-2">
                <p>{t('testimonials.paula.dan')}</p>
                <p>{t('testimonials.paula.coach')}</p>
                <p>{t('testimonials.paula.medals')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
