import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Saphyra",
      age: "",
      text: "Minha experiência com a psicóloga Graciela tem sido extremamente positiva e transformadora. Ela é uma profissional excepcional, sempre prestativa e atenciosa, além de ser uma ótima ouvinte. Sua dedicação ao cuidado com os pacientes é admirável e reflete o carinho e o respeito. Graciela é muito querida, educada e possui uma sensibilidade única para entender e apoiar nas mais diversas situações. Sua abordagem acolhedora e profissional faz toda a diferença, e sou profundamente grata por ter uma psicóloga tão excelente ao meu lado.",
      rating: 5,
      treatment: ""
    },
    {
      name: "Victoria",
      age: "", 
      text: "A terapia que mudou minha vida, foi incrível encontrar uma psicóloga que me identificasse e que eu pudesse enxergar os reflexos da terapia no meu dia a dia. Sempre que entro ansiosa ou angustiada para uma sessão, saio dela mais confiante, calma e feliz! 🤍 Obrigada por tudo Gra, você é incrível!",
      rating: 5,
      treatment: ""
    },
    {
      name: "Ana Olivia",
      age: "",
      text: "Só tenho elogios para a Psicóloga Graciela Oliveira. Juntas já há alguns meses, nosso acompanhamento tem sido de extrema importância para mim. É uma profissional atenciosa, respeitosa, observadora e empática. Sempre atenta a cada detalhe e disposta a ajudar na resolução de todas as demandas. Sabe apontar amorosamente os pontos de melhoria e enaltecer os pontos de força. Eternamente grata pelo profissionalismo, ajuda e carinho.",
      rating: 5,
      treatment: ""
    },
    {
      name: "Ana Motta",
      age: "",
      text: "Graci, você é incrível! Sua gentileza e empatia são fundamentais para criar um ambiente seguro e acolhedor. Você realmente se importa com seus pacientes e isso é algo muito raro e valoroso. Sempre que preciso, você está lá para ajudar, mesmo fora das sessões. Muito obrigado por tudo! Super indico!",
      rating: 5,
      treatment: ""
    },
    {
      name: "Gláucia",
      age: "",
      text: "Pessoa incrível! Já na primeira sessão tive certeza que queria continuar com ela e foi uma das melhores escolhas que eu fiz! Trabalho excelente, com metodologia aplicada e ética.. agradeço muito por estarmos juntas nessa ( como ela sempre diz) e a evolução tem sido notável 🥰🥰",
      rating: 5,
      treatment: ""
    },
     {
      name: "Jessinha",
      age: "",
      text: "Uma profissional maravilhosa! Atenciosa, paciente, empática... Estou adorando as terapias com ela, tenho me sentido muito melhor.",
      rating: 5,
      treatment: ""
    },
     {
      name: "Jenifer",
      age: "",
      text: "O atendimento da Graciela é ótimo, ela é muito paciente e atenciosa! Vivi muito tempo com diagnósticos errados, mas com o acompanhamento dela, tive o diagnóstico correto e tratamento certeiro. Graças ao trabalho dela tenho uma vida mais tranquila e um futuro otimista.",
      rating: 5,
      treatment: ""
    },
    {
      name: "Welen",
      age: "",
      text: "A jornada com o transtorno bipolar não é fácil, pelo contrário, é cheia de altos e baixos, incertezas e recomeços. Mas ter uma psicóloga tão sensível, competente e acolhedora ao meu lado fez toda a diferença. Com sua escuta atenta, seu olhar humano e suas orientações firmes, Psicóloga Graciela me ajudou a entender o que antes parecia confuso, a acolher minhas emoções e a construir estratégias para lidar com os extremos que essa condição impõe. Gratidão é pouco diante do cuidado, da paciência e do respeito com que ela me trata em cada sessão. Sua atuação vai muito além da técnica, ela transforma vidas com empatia e dedicação. Sou imensamente grata por tê-la em meu processo de cura e autoconhecimento. Obrigada, de coração.",
      rating: 5,
      treatment: ""
    }
  ];

  return (
    <section id="depoimentos" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-foreground mb-6">
              Depoimentos
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Histórias reais de pessoas que encontraram o caminho para uma vida 
              mais equilibrada através da psicoterapia.
            </p>
            <div className="w-24 h-1 bg-primary mx-auto mt-6"></div>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-background p-8 rounded-2xl elegant-shadow hover:scale-105 transition-smooth group"
              >
                {/* Quote Icon */}
                <div className="w-12 h-12 primary-gradient rounded-xl flex items-center justify-center mb-6">
                  <Quote className="w-6 h-6 text-primary-foreground" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                {/* Author Info */}
                <div className="border-t border-border pt-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.age}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-primary font-medium bg-primary/10 px-2 py-1 rounded-full">
                        {testimonial.treatment}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Trust Indicators */}
          <div className="mt-16 text-center">
            <div className="bg-background p-8 rounded-2xl elegant-shadow max-w-2xl mx-auto">
              <div className="grid grid-cols-3 gap-8">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">Online</div>
                  <div className="text-sm text-muted-foreground">Videochamada</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">50 minutos</div>
                  <div className="text-sm text-muted-foreground">Duração adequada</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">14+</div>
                  <div className="text-sm text-muted-foreground">Adolescentes e adultos</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
