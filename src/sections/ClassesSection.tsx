
export default function ClassesSection() {
    return (
        <section id="classes" className="py-20 px-4 sm:px-8 bg-[#FAF9F6] text-[#1F1F1F]">
        <div>
          <h3 className="text-3xl font-bold mb-4">Clases</h3>
          <ul className="grid gap-4 md:grid-cols-2">
            <li className="p-4 border rounded-xl shadow-sm bg-[#FFFFFF]">
                Sants: Lunes a Viernes 13:00 - 14:00 y 20:30 - 22:00
                </li>
                <li className="p-4 border rounded-xl shadow-sm bg-[#FFFFFF]">
                    Horta - Guinardó: Martes y Jueves 20:00 - 21:30</li>
          </ul>
        </div>
      </section>
    );
  }