
export default function TestimonialsSection() {
  return (
    <section id="testimonios" className="py-20 px-4 sm:px-8 bg-[#FAF9F6] text-[#1F1F1F]">
      <div className="w-full mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-[#1F1F1F]">Nuestros profesores</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Carta de Axel */}
          <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 flex flex-col">
            <h3 className="text-3xl font-bold mb-6 text-center text-[#1F1F1F]">Axel</h3>
            <div className="flex-grow flex justify-center items-center">
              <div className="text-lg text-gray-700 text-center leading-relaxed space-y-2">
                <p>Jiu-Jitsu: 25 años de experiencia</p>
                <p>Judo: 35 años de experiencia</p>
                <p>4.º DAN de Jiu-Jitsu tradicional</p>
                <p>4.º DAN de Judo</p>
                <p>Cinturón marrón de Brazilian Jiu-Jitsu</p>
                <p>Varias medallas nacionales</p>
                <p>Técnico deportivo nivel 3 de Jiu-Jitsu y Judo y profesor de Brazilian Jiu-Jitsu</p>
              </div>
            </div>
          </div>

          {/* Carta de Paula */}
          <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 flex flex-col">
            <h3 className="text-3xl font-bold mb-6 text-center text-[#1F1F1F]">Paula</h3>
            <div className="flex-grow flex justify-center items-center">
              <div className="text-lg text-gray-700 text-center leading-relaxed space-y-2">
                <p>1.er DAN de Jiu-Jitsu</p>
                <p>Técnica deportiva nivel 1 de Jiu-Jitsu</p>
                <p>Varias medallas nacionales</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
