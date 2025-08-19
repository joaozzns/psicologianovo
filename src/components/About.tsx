import { Heart, BookOpen, Users, Award } from "lucide-react";
const About = () => {
  const highlights = [{
    icon: Heart,
    title: "Atendimento Humanizado",
    description: "Cuidado empático e acolhedor em cada sessão"
  }, {
    icon: BookOpen,
    title: "Baseado em Evidências",
    description: "Métodos cientificamente comprovados"
  }, {
    icon: Users,
    title: "Acolhimento",
    description: "Ambiente seguro e livre de julgamentos para seu bem-estar"
  }, {
    icon: Award,
    title: "Formação Continuada",
    description: "Sempre atualizada com as melhores práticas"
  }];
  return <section id="sobre" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-foreground mb-6">
              Sobre mim
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-6">
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Olá! Me chamo <strong className="text-foreground">Graciela Oliveira</strong>, sou psicóloga 
                  (CRP 05/75493) com atuação clínica voltada ao cuidado emocional de pessoas que 
                  enfrentam transtornos de humor, como depressão e transtorno bipolar, além de quadros de ansiedade.
                </p>

                <p>
                  Sou pós-graduada em Terapia Cognitivo-Comportamental e pós-graduanda em Psicopatologia. Acredito na importância de um atendimento ético, acolhedor e embasado na ciência.
                </p>

                <p>
                  Com escuta empática, trabalho para oferecer não apenas alívio dos sintomas, mas também compreensão, educação emocional e estratégias práticas que ajudam você a lidar melhor com suas oscilações de humor, pensamentos negativos e crises de ansiedade ou impulsividade.
                </p>

                <p>
                  Estou em constante atualização para oferecer o melhor cuidado psicológico.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold text-foreground text-lg">Formações principais:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                    Terapia Cognitivo-Comportamental (TCC) – Grupo PBE
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                    Psicopatologia (estudo e compreensão dos transtornos mentais) – Grupo PBE
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                    Formação continuada em Transtorno Bipolar
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                    Intensivo em Prevenção do Suicídio – Grupo PBE
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                    Intensivo em psicofarmacologia - Grupo PBE
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                    Mini-curso em Terapia Comportamental Dialética (DBT) - Grupo PBE
                  </li>
                </ul>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-6">
              {highlights.map((item, index) => <div key={index} className="bg-background p-6 rounded-2xl elegant-shadow hover:scale-105 transition-smooth">
                  <div className="w-12 h-12 primary-gradient rounded-xl flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;
