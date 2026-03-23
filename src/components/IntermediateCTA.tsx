import { CONTACT } from "@/constants";
import { Button } from "./ui/Button";
import { Phone, MessageCircle } from "lucide-react";
import { motion } from "motion/react";

export function IntermediateCTA() {
  return (
    <section className="py-20 bg-brand-gold-dark text-white text-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">
            Agende uma visita e conheça este imóvel de perto
          </h2>
          <p className="text-lg text-white/90 font-light mb-10">
            Fale agora no WhatsApp, receba mais informações e descubra todos os diferenciais deste sobrado.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-[#25D366] hover:bg-[#128C7E] text-white border-none shadow-lg">
              <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Falar agora no WhatsApp
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-brand-gold-dark">
              <a href={CONTACT.phone}>
                <Phone className="mr-2 h-5 w-5" />
                Ligar para o corretor
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
