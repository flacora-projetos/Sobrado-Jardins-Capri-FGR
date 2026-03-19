import { CheckCircle2 } from "lucide-react";

const differentials = [
  "Localização estratégica no condomínio, em frente à praça",
  "Vista agradável e sensação de amplitude",
  "4 suítes para mais conforto e privacidade",
  "Piscina e área gourmet para viver e receber bem",
  "Acabamento de primeira linha",
  "Ambientes planejados para funcionalidade e sofisticação",
  "Energia solar e automação para mais eficiência e conveniência",
  "Armários planejados, closet, varanda e jardim",
];

export function Differentials() {
  return (
    <section className="py-24 bg-brand-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">
            Diferenciais que fazem este imóvel se destacar
          </h2>
          <p className="text-white/70 text-lg font-light">
            Cada detalhe foi pensado para oferecer o máximo de conforto, segurança e sofisticação.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 max-w-4xl mx-auto">
          {differentials.map((item, idx) => (
            <div key={idx} className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-brand-gold shrink-0 mr-4 mt-1" />
              <p className="text-lg font-light leading-relaxed text-white/90">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
