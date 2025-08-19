import { Button } from "@/components/ui/button";
import psychologistPhoto from "@/assets/grazzi2.jpeg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="min-h-screen hero-gradient flex items-center pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-serif font-bold text-foreground leading-tight">
                Seu <span className="text-primary">bem-estar</span> começa com um{" "}
                <span className="text-primary">primeiro passo</span>
              </h1>
              
              <div className="space-y-4 text-lg text-muted-foreground max-w-xl">
                <p>
                  Cada pessoa tem seu tempo, seu ritmo e sua história. Aqui, você encontra 
                  um espaço para ser ouvido(a), acolhido(a) e guiado(a) com empatia no seu 
                  processo de transformação.
                </p>
                
                <p>
                  Se você vive com depressão, transtorno bipolar ou ansiedade, saiba que não está só, e que é possível viver com mais equilíbrio e bem-estar.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                onClick={() => {
                  const whatsappUrl = `https://wa.me/5521979391820?text=${encodeURIComponent('Olá Graciela. Gostaria de agendar uma sessão. Podemos conversar?')}`;
                  window.open(whatsappUrl, '_blank');
                }}
                className="primary-gradient text-primary-foreground hover:scale-105 transition-smooth elegant-shadow"
              >
                Agende sua sessão
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('sobre')}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
              >
                Saiba mais sobre mim
              </Button>
            </div>
          </div>

          {/* Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden elegant-shadow animate-float">
                <img 
                  src={psychologistPhoto} 
                  alt="Dra. Ana Silva - Psicóloga"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/30 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
