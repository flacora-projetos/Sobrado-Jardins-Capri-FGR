import { BedDouble, Maximize, Home, Waves, UtensilsCrossed, Sun, Cpu, Car } from "lucide-react";

const highlights = [
  { icon: BedDouble, label: "4 Suítes" },
  { icon: Home, label: "267 m² construídos" },
  { icon: Maximize, label: "353 m² de terreno" },
  { icon: Waves, label: "Piscina" },
  { icon: UtensilsCrossed, label: "Área Gourmet" },
  { icon: Sun, label: "Energia Solar" },
  { icon: Cpu, label: "Automação" },
  { icon: Car, label: "6 Vagas no total" },
];

export function QuickHighlights() {
  return (
    <section className="bg-white py-12 border-b border-brand-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {highlights.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-brand-light transition-colors">
              <div className="w-12 h-12 rounded-full bg-brand-light flex items-center justify-center mb-4 text-brand-gold-dark">
                <item.icon strokeWidth={1.5} size={24} />
              </div>
              <span className="text-sm font-medium text-brand-text uppercase tracking-wide">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
