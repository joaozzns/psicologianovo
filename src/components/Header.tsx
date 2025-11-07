import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };
  return <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="font-serif text-2xl font-bold text-primary">Graciela Oliveira</div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('inicio')} className="text-foreground hover:text-primary transition-smooth">
              Início
            </button>
            <button onClick={() => scrollToSection('sobre')} className="text-foreground hover:text-primary transition-smooth">
              Sobre
            </button>
            <button onClick={() => scrollToSection('especialidades')} className="text-foreground hover:text-primary transition-smooth">
              Especialidades
            </button>
            <button onClick={() => scrollToSection('depoimentos')} className="text-foreground hover:text-primary transition-smooth">
              Depoimentos
            </button>
            <Button onClick={() => {
             if (typeof window.gtag_report_conversion === 'function') {
                window.gtag_report_conversion(undefined); 
             }
            const whatsappUrl = `https://wa.me/5521979391820?text=${encodeURIComponent('Olá Graciela. Gostaria de agendar uma sessão. Podemos conversar?')}`;
            window.open(whatsappUrl, '_blank');
          }} className="primary-gradient text-primary-foreground hover:scale-105 transition-smooth elegant-shadow">
              Agendar Consulta
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <nav className="md:hidden mt-4 py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('inicio')} className="text-left text-foreground hover:text-primary transition-smooth">
                Início
              </button>
              <button onClick={() => scrollToSection('sobre')} className="text-left text-foreground hover:text-primary transition-smooth">
                Sobre
              </button>
              <button onClick={() => scrollToSection('especialidades')} className="text-left text-foreground hover:text-primary transition-smooth">
                Especialidades
              </button>
              <button onClick={() => scrollToSection('depoimentos')} className="text-left text-foreground hover:text-primary transition-smooth">
                Depoimentos
              </button>
              <Button onClick={() => {
              if (typeof window.gtag_report_conversion === 'function') {
                window.gtag_report_conversion(undefined); 
             }
            const whatsappUrl = `https://wa.me/5521979391820?text=${encodeURIComponent('Olá Graciela. Gostaria de agendar uma sessão. Podemos conversar?')}`;
            window.open(whatsappUrl, '_blank');
            setIsMenuOpen(false);
          }} className="primary-gradient text-primary-foreground w-full mt-2">
                Agendar Sessão
              </Button>
            </div>
          </nav>}
      </div>
    </header>;
};
export default Header;
