import { CONTACT } from "@/constants";
import { Button } from "./ui/Button";
import { Phone, MessageCircle } from "lucide-react";

export function IntermediateCTA() {
  return (
    <section className="py-20 bg-brand-gold-dark text-white text-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">
            Não perca a chance de conhecer este imóvel exclusivo
          </h2>
          <p className="text-lg text-white/90 font-light mb-10">
            Imóveis com este padrão e localização são muito disputados. Agende seu atendimento agora mesmo.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-brand-gold-dark hover:bg-brand-light">
              <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Agendar via WhatsApp
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-brand-gold-dark">
              <a href={CONTACT.phone}>
                <Phone className="mr-2 h-5 w-5" />
                Ligar agora
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
