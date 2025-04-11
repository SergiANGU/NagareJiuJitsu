import nagareLogo from '@/assets/LogoFondoTransparent.svg'
import  NagareNombre from '@/assets/NagareNombre.svg';

export default function FooterSection() {
  return (
    <footer className="flex justify-center items-center text-center py-10 text-sm bg-[--card] text-[--card-foreground]">
      <div className="flex items-center space-x-42">
        <img src={NagareNombre} alt="Logo Nagare" className="h-10 w-auto transform scale-400 origin-left" />
        <img src={nagareLogo} alt="Logo Nagare" className="h-10 w-auto transform scale-230 origin-left" />
      </div>
    </footer>
  );
}


  