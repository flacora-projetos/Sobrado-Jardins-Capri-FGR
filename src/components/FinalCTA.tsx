import { CONTACT } from "@/constants";
import { Button } from "./ui/Button";
import { Phone, MessageCircle } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-32 bg-brand-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-gold rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-brand-gold rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-medium leading-tight mb-8">
            Agende seu atendimento e conheça de perto este sobrado no Jardins Capri FGR
          </h2>
          
          <p className="text-xl text-white/80 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
            Se você procura uma casa nova, sofisticada, bem localizada e pronta para morar, esta pode ser a oportunidade certa. Entre em contato agora e receba atendimento direto.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button asChild size="lg" className="bg-[#25D366] hover:bg-[#128C7E] text-white border-none h-14 px-10 text-lg shadow-lg shadow-[#25D366]/20">
              <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-3 h-6 w-6" />
                Quero falar no WhatsApp
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white hover:text-brand-dark h-14 px-10 text-lg">
              <a href={CONTACT.phone}>
                <Phone className="mr-3 h-6 w-6" />
                Quero ligar agora
              </a>
            </Button>
          </div>
          
          <p className="mt-8 text-sm text-white/50 uppercase tracking-widest">
            Atendimento 24 horas
          </p>
        </div>
      </div>
    </section>
  );
}
