export function MissionSection() {
    return (
        <section id="classes" className="py-20 px-4 sm:px-8 bg-[#FAF9F6] text-[#1F1F1F]">
            <div>
                <h3 className="text-3xl font-bold mb-4">Misión y Visión</h3>
                <ul className="grid gap-4 md:grid-cols-2">
                    <li className="p-4 border rounded-xl shadow-sm bg-[#FFFFFF]">
                        Nuestra visión es...
                    </li>
                    <li className="p-4 border rounded-xl shadow-sm bg-[#FFFFFF]">
                        Nuestra misión es...
                        </li>
                </ul>
            </div>
        </section>
    );
}
