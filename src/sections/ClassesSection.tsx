import React from "react";

export function ClassesSection() {
    return (
        <section id="classes" className="py-20 px-6 bg-[#FAF9F6] text-[#1F1F1F]">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-4">Clases</h3>
          <ul className="grid gap-4 md:grid-cols-2">
            <li className="p-4 border rounded-xl shadow-sm bg-[#FFFFFF]">
                Sants:  Lunes, Miércoles y Viernes 20:30 - 22:00
                </li>
                <li className="p-4 border rounded-xl shadow-sm bg-[#FFFFFF]">
                    Horta - Guinardó: Martes y Jueves 20:30 - 22:00</li>
          </ul>
        </div>
      </section>
    );
  }