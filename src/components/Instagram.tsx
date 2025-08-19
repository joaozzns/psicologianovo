import { Instagram, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const InstagramSection = () => {
  const instagramPosts = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=400&h=400&fit=crop&crop=center",
      caption: "Pequenos passos podem levar a grandes transformações. 🌱 #psicologia #bemestar"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop&crop=center",
      caption: "A natureza nos ensina sobre paciência e renovação. 🍃 #mindfulness #equilibrio"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop&crop=center",
      caption: "Cuidar da mente é um ato de amor próprio. 💝 #autocuidado #saúdemental"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop&crop=center",
      caption: "Cada pessoa tem seu tempo para crescer e florescer. 🌸 #terapia #crescimento"
    }
  ];

  const handleInstagramClick = () => {
    window.open('https://instagram.com/gracielaoliveira.psi', '_blank');
  };

  return (
    <section id="instagram" className="py-20 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Instagram className="w-8 h-8 text-primary mr-3" />
              <h2 className="text-4xl font-serif font-bold text-foreground">
                Siga no Instagram
              </h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Acompanhe conteúdos sobre ansiedade, depressão, bipolaridade e 
              saúde mental no meu perfil do Instagram.
            </p>
            <Button 
              onClick={handleInstagramClick}
              className="primary-gradient text-primary-foreground hover:scale-105 transition-smooth elegant-shadow"
            >
              <Instagram className="w-5 h-5 mr-2" />
              @gracielaoliveira.psi
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Instagram Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {instagramPosts.map((post) => (
              <div 
                key={post.id}
                onClick={handleInstagramClick}
                className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer elegant-shadow hover:scale-105 transition-smooth"
              >
                <img 
                  src={post.image} 
                  alt="Post do Instagram"
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Instagram className="w-8 h-8 text-white" />
                </div>
                
                {/* Caption preview */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-sm line-clamp-2">{post.caption}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <p className="text-muted-foreground mb-4">
              Quer ver mais conteúdos sobre ansiedade, depressão, bipolaridade e saúde mental?
            </p>
            <Button 
              variant="outline"
              onClick={handleInstagramClick}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
            >
              Ver todos os posts
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
