import React from "react";

export function TestimonialsSection() {
    return (
        <section id="testimonios" className="py-20 px-4 sm:px-8 bg-[#FAF9F6] text-[#1F1F1F]">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-8 text-center">Nuestros alumnos</h3>
            <div className="grid gap-6 md:grid-cols-2">
              <blockquote className="p-6 border-l-4 border-orange-300 shadow-sm bg-white">
                <p className="text-lg italic">3r Copa Absoluta Española -69kg 2025</p>
                <footer className="mt-2 text-md text-gray-600">Marc L.</footer>
              </blockquote>
              <blockquote className="p-6 border-l-4 border-orange-300 shadow-sm bg-white">
                <p className="text-lg italic">Campeona absoluta de España 2022 y 2023</p>
                <footer className="mt-2 text-md text-gray-600">Nuria A.</footer>
              </blockquote>
              <blockquote className="p-6 border-l-4 border-orange-300 shadow-sm bg-white">
                <p className="text-lg italic">Campeón absoluto de Catalunya 2023</p>
                <footer className="mt-2 text-md text-gray-600">Sergi A.</footer>
              </blockquote>
            </div>
          </div>
        </section>
      );
  }
