import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "5521979391820";
  const message = "Olá Graciela. Gostaria de agendar uma sessão. Podemos conversar?";
  
  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 w-45 h-35 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:scale-110"
      aria-label="Contatar via WhatsApp"
    >Agende sua sessão
      <MessageCircle className="w-11 h-11" />
      
      {/* Tooltip */}
      <div className="absolute bottom-16 right-0 bg-foreground text-background px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Fale conosco no WhatsApp
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-foreground"></div>
      </div>
    </button>
  );
};

export default WhatsAppButton;
