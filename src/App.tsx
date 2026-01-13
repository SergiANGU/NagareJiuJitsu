import { lazy, Suspense, useEffect } from "react";
import  NagareNombre from '@/assets/NagareNombre.svg';
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react";
import { useTranslation } from "react-i18next";

import './App.css';

const HeroSection = lazy(() => import("@/sections/HeroSection"));
const AboutSection = lazy(() => import("@/sections/AboutSection"));
const ClassesSection = lazy(() => import("@/sections/ClassesSection"));
const TestimonialsSection = lazy(() => import("@/sections/TestimonialSection"));
const FAQSection = lazy(() => import("@/sections/FAQSection"));
const MapSection = lazy(() => import("@/sections/MapSection"));
const FooterSection = lazy(() => import("@/sections/FooterSection"));
const ContactSection = lazy(() => import("@/sections/ContactSection"));

function App() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.title = "Nagare Jiu-Jitsu";
  }, []);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <main className="bg-[#FAF9F6]" >
        {process.env.NODE_ENV === 'production' && <SpeedInsights />}
        {process.env.NODE_ENV === 'production' && <Analytics />}
        {/* Header */}
        <header className="flex items-center justify-between p-2 shadow-md sticky top-0 z-10 bg-[#FFA552] text-[#2C2C2C]">
        <img src={NagareNombre} alt="Logo Nagare" width={160} height={40} loading="lazy" className="h-10 w-auto transform scale-450 origin-left" />
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex gap-6 text-md">
              <a href="#about">{t('nav.about')}</a>
              <a href="#classes">{t('nav.classes')}</a>
              <a href="#faq">{t('nav.faq')}</a>
              <a href="#contact">{t('nav.contact')}</a>
            </nav>
            <div className="flex gap-2 ml-4">
              <button onClick={() => changeLanguage('es')} className={`text-xs font-bold ${i18n.language.startsWith('es') ? 'underline' : ''}`}>ES</button>
              <button onClick={() => changeLanguage('ca')} className={`text-xs font-bold ${i18n.language.startsWith('ca') ? 'underline' : ''}`}>CA</button>
              <button onClick={() => changeLanguage('en')} className={`text-xs font-bold ${i18n.language.startsWith('en') ? 'underline' : ''}`}>EN</button>
            </div>
          </div>
        </header>

        <Suspense fallback={<div className="text-center py-20">{t('common.loading')}</div>}>
          <HeroSection />
          <AboutSection />
          <ClassesSection />
          <MapSection />
          <TestimonialsSection />
          <FAQSection />
          <ContactSection />
          <FooterSection />
        </Suspense>
      </main>
    </>
  );
}

export default App;
