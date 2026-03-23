import { CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

const differentials = [
  "Localização premium: em frente à praça, sem vizinho de frente",
  "Vista definitiva com sensação de amplitude e privacidade",
  "4 suítes plenas, garantindo conforto total para a família",
  "Lazer privativo completo com piscina e área gourmet integrada",
  "Acabamento de altíssimo padrão em todos os ambientes",
  "Projeto inteligente unindo sofisticação e funcionalidade",
  "Infraestrutura pronta de automação e energia solar",
  "Casa nova, recém-construída e pronta para morar",
];

export function Differentials() {
  return (
    <section className="py-24 bg-brand-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">
            Diferenciais que fazem este imóvel se destacar
          </h2>
          <p className="text-white/70 text-lg font-light">
            Cada detalhe foi pensado para oferecer o máximo de conforto, segurança e sofisticação.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 max-w-4xl mx-auto">
          {differentials.map((item, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex items-start"
            >
              <CheckCircle2 className="w-6 h-6 text-brand-gold shrink-0 mr-4 mt-1" />
              <p className="text-lg font-light leading-relaxed text-white/90">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
