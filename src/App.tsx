import { useEffect } from "react";
import { HeroSection } from "@/sections/HeroSection"
import { AboutSection } from "@/sections/AboutSection"
import { ClassesSection } from "@/sections/ClassesSection"
import { TestimonialsSection } from "@/sections/TestimonialSection"
import { FAQSection } from "@/sections/FAQSection"
import { MapSection } from "@/sections/MapSection"
import { FooterSection } from "@/sections/FooterSection"
import { ContactSection } from "@/sections/ContactSection"
import  NagareNombre from '@/assets/NagareNombre.svg';
import { SpeedInsights } from "@vercel/speed-insights/react"



import './App.css'



function App() {

  useEffect(() => {
    document.title = "Nagare Jiu-Jitsu";
  }, []);

  return (
    <>
      <main className="bg-[#FAF9F6]" >
      <SpeedInsights/>
        {/* Header */}
        <header
          className="flex items-center justify-between p-4 shadow-md sticky top-1 z-6 bg-[#FFA552] text-[#2C2C2C] rounded-lg">
             <img src={NagareNombre} alt="Logo Nagare" className="h-10 w-auto transform scale-450 origin-left" />
          <nav className="hidden md:flex gap-6 text-md">
            <a href="#about">Sobre Nosotros</a>
            <a href="#classes">Clases</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">Contacto</a>
          </nav>
        </header>
        <HeroSection />
        <AboutSection />
        <ClassesSection />
        <MapSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
        <FooterSection />
      </main>
    </>
  )
}

export default App
