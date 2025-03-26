import React from "react";

export function FAQSection() {
    return (
        <section id="faq" className="py-20 px-4 sm:px-8 bg-[#F0EDE7] text-[#2C2C2C]">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-6">Preguntas Frecuentes</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold">¿Necesito experiencia previa?</h4>
              <p className="text-gray-700">No, nuestras clases están diseñadas para todos los niveles, incluyendo principiantes.</p>
            </div>
            <div>
              <h4 className="font-semibold">¿Qué ropa necesito para entrenar?</h4>
              <p className="text-gray-700">Podés venir con ropa deportiva cómoda. Si tenés gi, mejor, pero no es obligatorio.</p>
            </div>
            <div>
              <h4 className="font-semibold">¿Puedo probar una clase gratis?</h4>
              <p className="text-gray-700">¡Sí! Ven a probar sin compromiso.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }