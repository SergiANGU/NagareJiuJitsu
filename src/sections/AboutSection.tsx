import { useTranslation } from "react-i18next";

export default function AboutSection() {
    const { t } = useTranslation();
    return (
        <section id="about" className="py-20 px-4 sm:px-8 bg-[#F0EDE7] text-[#2C2C2C]">
        <h3 className="text-3xl font-bold mb-4">{t('about.title')}</h3>
        <p className="text-lg text-gray-700">
            {t('about.p1')}
        </p>
        <p className="text-lg text-gray-700">
            {t('about.p2')}
        </p>
      </section>
    );
  }