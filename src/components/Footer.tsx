import { Heart, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-2xl font-serif font-bold">Graciela Oliveira</h3>
              <p className="text-background/80 leading-relaxed">
                Psicóloga especializada em atendimento humanizado e baseado em evidências. 
                Seu bem-estar é minha prioridade.
              </p>
              <div className="flex items-center space-x-2 text-primary">
                <Heart className="w-4 h-4" />
                <span className="text-sm">CRP 05/75493</span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Links Rápidos</h4>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => {
                      const element = document.getElementById('inicio');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-background/80 hover:text-primary transition-smooth"
                  >
                    Início
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => {
                      const element = document.getElementById('sobre');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-background/80 hover:text-primary transition-smooth"
                  >
                    Sobre
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => {
                      const element = document.getElementById('especialidades');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-background/80 hover:text-primary transition-smooth"
                  >
                    Especialidades
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => {
                      const element = document.getElementById('depoimentos');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-background/80 hover:text-primary transition-smooth"
                  >
                    Depoimentos
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Contato</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-primary" />
                  <span className="text-background/80">(21) 97939-1820</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-primary" />
                  <span className="text-background/80">graciela.souza.oliveira@gmail.com</span>
                </div>
                
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-background/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-background/60 text-sm">
                © {currentYear} Graciela Oliveira. Todos os direitos reservados.
              </p>
              <div className="flex space-x-6 text-sm text-background/60">
                <a href="#" className="hover:text-primary transition-smooth">
                  Política de Privacidade
                </a>
                <a href="#" className="hover:text-primary transition-smooth">
                  Termos de Uso
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
