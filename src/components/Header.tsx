import { useState } from "react";
import { useTranslation } from "react-i18next";
import NagareNombre from '@/assets/NagareNombre.svg';
import { ChevronDown } from "lucide-react";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'es', label: 'ES', flag: '🇪🇸' },
    { code: 'ca', label: 'CA', flag: '󠁥󠁳󠁣󠁴󠁿' }, // Emoji de la bandera de Cataluña (🏴󠁥󠁳󠁣󠁴󠁿)
    { code: 'en', label: 'EN', flag: '🇬🇧' }
  ];

  const currentLanguage = languages.find(l => i18n.language.startsWith(l.code)) || languages[0];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  return (
    <header className="flex items-center justify-between p-2 shadow-md sticky top-0 z-50 bg-[#FFA552] text-[#2C2C2C]">
      <img src={NagareNombre} alt="Logo Nagare" width={160} height={40} loading="lazy" className="h-10 w-auto transform scale-450 origin-left" />
      <div className="flex items-center gap-4">
        <nav className="hidden md:flex gap-6 text-md font-medium">
          <a href="#about" className="hover:opacity-80 transition-opacity">{t('nav.about')}</a>
          <a href="#classes" className="hover:opacity-80 transition-opacity">{t('nav.classes')}</a>
          <a href="#faq" className="hover:opacity-80 transition-opacity">{t('nav.faq')}</a>
          <a href="#contact" className="hover:opacity-80 transition-opacity">{t('nav.contact')}</a>
        </nav>
        
        <div className="relative ml-4">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-3 py-1.5 rounded-lg transition-colors text-sm font-bold border border-black/10"
          >
            <span>{currentLanguage.flag}</span>
            <span>{currentLanguage.label}</span>
            <ChevronDown size={16} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
          </button>

          {isOpen && (
            <>
              <div 
                className="fixed inset-0 z-10" 
                onClick={() => setIsOpen(false)}
              ></div>
              <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-xl border border-gray-100 py-1 z-20 overflow-hidden animate-in fade-in zoom-in duration-200">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={`flex items-center gap-3 w-full px-4 py-2 text-sm text-left hover:bg-gray-50 transition-colors ${
                      i18n.language.startsWith(lang.code) ? 'bg-gray-50 font-bold text-[#FFA552]' : 'text-gray-700'
                    }`}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.label}</span>
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
