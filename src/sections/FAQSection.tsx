
export default function FAQSection() {
    return (
        <section id="faq" className="py-20 px-4 sm:px-8 bg-[#F0EDE7] text-[#2C2C2C]">
        <div className="w-full mx-auto">
          <h3 className="text-3xl font-bold mb-6">Preguntas Frecuentes</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold">¿Necesito experiencia previa?</h4>
              <p className="text-gray-700">No, nuestras clases están diseñadas para todos los niveles, incluyendo principiantes.</p>
            </div>
            <div>
              <h4 className="font-semibold">¿Qué ropa necesito para entrenar?</h4>
              <p className="text-gray-700">Ven con ropa deportiva cómoda.</p>
            </div>
            <div>
              <h4 className="font-semibold">¿Puedo probar una clase gratis?</h4>
              <p className="text-gray-700">¡Sí! Ven a probar varios entrenamientos sin compromiso.</p>
            </div>
            <div>
              <h4 className="font-semibold">¿Voy a tener cobertura médica?</h4>
              <p className="text-gray-700">Sí, la federación cuenta con un seguro médico para los federados.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }