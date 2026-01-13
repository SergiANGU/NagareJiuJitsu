import { lazy, Suspense, useEffect } from "react";
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react";
import { useTranslation } from "react-i18next";
import Header from "@/components/Header";

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
  const { t } = useTranslation();

  useEffect(() => {
    document.title = "Nagare Jiu-Jitsu";
  }, []);

  return (
    <>
      <main className="bg-[#FAF9F6]" >
        {process.env.NODE_ENV === 'production' && <SpeedInsights />}
        {process.env.NODE_ENV === 'production' && <Analytics />}
        <Header />

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
