import { IMAGES, CONTACT } from "@/constants";
import { Button } from "./ui/Button";
import { Phone, MessageCircle } from "lucide-react";
import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-24 lg:pt-0 lg:pb-24">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30 z-10" />
        <img
          src={IMAGES.fachada}
          alt="Fachada do Sobrado no Jardins Capri FGR"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
      
      <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl text-white"
        >
          <div className="inline-block px-3 py-1 mb-6 border border-white/30 rounded-full text-xs font-medium tracking-wider uppercase backdrop-blur-sm">
            Jardins Capri FGR
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight mb-6">
            Sobrado pronto para morar no Jardins Capri FGR
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-6 font-light max-w-2xl leading-relaxed">
            Casa nova de alto padrão com 4 suítes, lazer privativo completo e localização privilegiada em frente à praça.
          </p>
          
          <div className="mb-10">
            <p className="text-sm text-white/70 uppercase tracking-wider mb-1">Valor do Imóvel</p>
            <p className="text-3xl md:text-4xl font-medium text-white">R$ 1.950.000</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-[#25D366] hover:bg-[#128C7E] text-white border-none shadow-lg shadow-[#25D366]/20">
              <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" onClick={() => (window as any).fbq && (window as any).fbq('track', 'Lead')}>
                <MessageCircle className="mr-2 h-5 w-5" />
                Falar no WhatsApp
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-brand-dark backdrop-blur-sm">
              <a href={CONTACT.phone} onClick={() => (window as any).fbq && (window as any).fbq('track', 'Lead')}>
                <Phone className="mr-2 h-5 w-5" />
                Ligar agora
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
