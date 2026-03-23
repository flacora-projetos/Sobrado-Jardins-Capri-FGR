import { BedDouble, Maximize, Home, Waves, UtensilsCrossed, Sun, Cpu, Car } from "lucide-react";
import { motion } from "motion/react";

const highlights = [
  { icon: BedDouble, value: "4", label: "Suítes" },
  { icon: Home, value: "267 m²", label: "Construídos" },
  { icon: Maximize, value: "353 m²", label: "De terreno" },
  { icon: Waves, value: "Piscina", label: "Privativa" },
  { icon: UtensilsCrossed, value: "Gourmet", label: "Área integrada" },
  { icon: Sun, value: "Solar", label: "Energia" },
  { icon: Cpu, value: "Automação", label: "Residencial" },
  { icon: Car, value: "6", label: "Vagas no total" },
];

export function QuickHighlights() {
  return (
    <section className="bg-white py-16 border-b border-brand-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 md:gap-y-12">
          {highlights.map((item, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-14 h-14 rounded-2xl bg-brand-light flex items-center justify-center mb-5 text-brand-gold-dark group-hover:bg-brand-gold-dark group-hover:text-white transition-colors duration-300 shadow-sm">
                <item.icon strokeWidth={1.5} size={28} />
              </div>
              <span className="text-2xl font-serif font-medium text-brand-dark mb-1">{item.value}</span>
              <span className="text-sm font-medium text-brand-text-muted uppercase tracking-wider">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
