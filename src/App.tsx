import { lazy, Suspense, useEffect } from "react";
import  NagareNombre from '@/assets/NagareNombre.svg';
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react";

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
  useEffect(() => {
    document.title = "Nagare Jiu-Jitsu";
  }, []);

  return (
    <>
      <main className="bg-[#FAF9F6]" >
        {process.env.NODE_ENV === 'production' && <SpeedInsights />}
        {process.env.NODE_ENV === 'production' && <Analytics />}
        {/* Header */}
        <header className="flex items-center justify-between p-2 shadow-md sticky top-0 z-10 bg-[#FFA552] text-[#2C2C2C]">
        <img src={NagareNombre} alt="Logo Nagare" width={160} height={40} loading="lazy" className="h-10 w-auto transform scale-450 origin-left" />
          <nav className="hidden md:flex gap-6 text-md">
            <a href="#about">Sobre Nosotros</a>
            <a href="#classes">Clases</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">Contacto</a>
          </nav>
        </header>

        <Suspense fallback={<div className="text-center py-20">Cargando sección...</div>}>
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
