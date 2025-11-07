import { useState } from "react";
import { MapPin, Phone, Mail, Clock, MessageCircle, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: formData
      });

      if (error) throw error;

      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Entraremos em contato em breve para agendar sua consulta.",
      });
      
      // Reset form
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Erro ao enviar mensagem",
        description: "Tente novamente ou entre em contato pelo WhatsApp.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      info: "(21) 97939-1820",
      action: "Conversar",
      onClick: () => {
        if (typeof window.gtag_report_conversion === 'function') {
                window.gtag_report_conversion(undefined); 
             }
        const whatsappUrl = `https://wa.me/5521979391820?text=${encodeURIComponent('Olá Graciela. Gostaria de agendar uma sessão. Podemos conversar?')}`;
        window.open(whatsappUrl, '_blank');
      }
    }
  ];

  const scheduleInfo = [
    {
      icon: Clock,
      title: "Horários",
      info: "Segunda a Sexta"
    },
    {
      icon: Calendar,
      title: "Agendamento",
      info: "Entre em contato pelo WhatsApp"
    }
  ];

  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-foreground mb-6">
              Entre em Contato
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Estou aqui para ouvir você. Entre em contato para agendar sua sessão 
              ou tirar suas dúvidas.
            </p>
            <div className="w-24 h-1 bg-primary mx-auto mt-6"></div>
          </div>

          <div className="grid lg:grid-cols-1 gap-16">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-serif font-bold text-foreground mb-6">
                  Informações de contato
                </h3>
              </div>

              {/* Contact Methods */}
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div 
                    key={index}
                    onClick={item.onClick}
                    className="bg-card p-6 rounded-2xl elegant-shadow hover:scale-105 transition-smooth group cursor-pointer"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 primary-gradient rounded-xl flex items-center justify-center group-hover:scale-110 transition-smooth">
                        <item.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                        <p className="text-muted-foreground mb-2">{item.info}</p>
                        <span className="text-sm text-primary font-medium">{item.action}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Schedule Info */}
              <div className="space-y-4">
                {scheduleInfo.map((item, index) => (
                  <div 
                    key={index}
                    className="bg-card p-6 rounded-2xl elegant-shadow"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-accent-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                        <p className="text-muted-foreground whitespace-pre-line">{item.info}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Emergency Note */}
              <div className="bg-accent/20 p-6 rounded-2xl border border-accent">
                <h4 className="font-semibold text-foreground mb-2">Emergências</h4>
                <p className="text-sm text-muted-foreground">
                  Em caso de emergência psiquiátrica, procure imediatamente o CVV (188) 
                  ou o serviço de emergência mais próximo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
