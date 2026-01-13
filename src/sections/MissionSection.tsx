import { useTranslation } from "react-i18next";

export function MissionSection() {
    const { t } = useTranslation();
    return (
        <section id="classes" className="py-20 px-4 sm:px-8 bg-[#FAF9F6] text-[#1F1F1F]">
            <div>
                <h3 className="text-3xl font-bold mb-4">{t('mission.title')}</h3>
                <ul className="grid gap-4 md:grid-cols-2">
                    <li className="p-4 border rounded-xl shadow-sm bg-[#FFFFFF]">
                        {t('mission.vision')}
                    </li>
                    <li className="p-4 border rounded-xl shadow-sm bg-[#FFFFFF]">
                        {t('mission.mission')}
                        </li>
                </ul>
            </div>
        </section>
    );
}
