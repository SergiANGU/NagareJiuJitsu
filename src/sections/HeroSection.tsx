// src/sections/Hero.tsx
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function HeroSection() {

  const scrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="flex flex-col items-center justify-center text-center py-24 px-4 bg-[#FAF9F6] text-[#1F1F1F]">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-extrabold mb-4"
      >
        Aprende Jiu-Jitsu con nosotros
      </motion.h2>
      <p className="text-lg md:text-xl max-w-xl mb-6">
        Entrenamientos para todos los niveles. Ven a probar sin compromiso.
      </p>
      <Button
       className="bg-[#FFA552] text-[#1F1F1F] hover:bg-[#FF8C42]"
      onClick={scrollToContact}>
        Preguntanos lo que quieras
      </Button>
    </section>
  );
}

