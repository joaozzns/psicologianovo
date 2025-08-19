import { Brain, Heart, Users2, Lightbulb, Shield, Smile } from "lucide-react";
const Specialties = () => {
  const specialties = [{
    icon: Brain,
    title: "Ansiedade",
    description: "Preocupações excessivas, insônia, tensão, medo constante, crises de pânico, fobia social ou ansiedade generalizada.",
    features: ["Técnicas de relaxamento", "Reestruturação cognitiva", "Exposição gradual"]
  }, {
    icon: Heart,
    title: "Depressão",
    description: "Tristeza profunda, falta de motivação, culpa excessiva, cansaço constante, perda de interesse pelas atividades do dia a dia.",
    features: ["Ativação comportamental", "Mindfulness", "Prevenção de recaídas"]
  }, {
    icon: Users2,
    title: "Transtorno Bipolar",
    description: "Oscilações intensas de humor entre episódios depressivos e fases de euforia, impulsividade ou irritabilidade (hipomania ou mania).",
    features: ["Monitoramento do humor", "Reestruturação cognitiva", "Tolerância do desconforto"]
  }, {
    icon: Lightbulb,
    title: "Autoestima",
    description: "Desenvolvimento da autoconfiança e aceitação pessoal",
    features: ["Autocompaixão", "Identificação de recursos", "Objetivos pessoais"]
  }, {
    icon: Shield,
    title: "Oscilações de humor sem diagnóstico definido",
    description: "Casos em que a pessoa ainda não recebeu um diagnóstico, mas percebe instabilidade emocional, dificuldade de concentração, irritabilidade frequente ou crises recorrentes.",
    features: ["Técnicas de coping", "Tolerância do desconforto", "Reestruturação cognitiva"]
  }, {
    icon: Smile,
    title: "Bem-estar",
    description: "Promoção da saúde mental e qualidade de vida",
    features: ["Psicoeducação", "Hábitos saudáveis", "Projeto de vida"]
  }];
  return <section id="especialidades" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-foreground mb-6">
              Áreas de Atuação
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Especialidades desenvolvidas ao longo de anos de experiência clínica, 
              sempre com foco no seu bem-estar e crescimento pessoal.
            </p>
            <div className="w-24 h-1 bg-primary mx-auto mt-6"></div>
          </div>

          {/* Specialties Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialties.map((specialty, index) => <div key={index} className="bg-card p-8 rounded-2xl elegant-shadow hover:scale-105 transition-smooth group">
                <div className="w-16 h-16 primary-gradient rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-smooth">
                  <specialty.icon className="w-8 h-8 text-primary-foreground" />
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {specialty.title}
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {specialty.description}
                </p>

                <div className="space-y-2">
                  {specialty.features.map((feature, featureIndex) => <div key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </div>)}
                </div>
              </div>)}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            
          </div>
        </div>
      </div>
    </section>;
};
export default Specialties;
