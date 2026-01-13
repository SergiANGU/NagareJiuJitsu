// src/sections/Hero.tsx
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/HeroBanner_optimized.webp"

export default function HeroSection() {

  const scrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="flex flex-col items-center justify-between text-center py-50 px-4 bg-cover bg-[#FAF9F6] text-[#FFA552]"
      style={{ backgroundImage: `url(${heroImage})` }}
    >

      <div className="text-center mb-10"> {/* Agregamos margen inferior */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold drop-shadow-xl"
        >
          Aprende Jiu-Jitsu con nosotros
        </motion.h2>
      </div>

      <div className="flex justify-center">
        <Button
          className="bg-[#FFA552] text-[#1F1F1F] hover:bg-[#FF8C42]"
          onClick={scrollToContact}
        >
          Pregunta como
        </Button>
      </div>
    </section>
  );

}

