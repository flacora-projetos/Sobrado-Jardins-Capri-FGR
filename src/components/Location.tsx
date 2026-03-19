import { MapPin, ShoppingBag, TrendingUp, ShieldCheck } from "lucide-react";

const locationPoints = [
  { icon: ShoppingBag, title: "Shopping Flamboyant", text: "A poucos minutos do principal polo comercial e de lazer de Goiânia." },
  { icon: MapPin, title: "Eixo Alphaville e Plateau", text: "Inserido na região mais nobre e desejada de condomínios horizontais." },
  { icon: TrendingUp, title: "Acesso pela GO-020", text: "Mobilidade rápida e fácil acesso às principais vias da cidade." },
  { icon: ShieldCheck, title: "Alta Valorização", text: "Região em plena expansão com forte perspectiva de rentabilidade." },
];

export function Location() {
  return (
    <section className="py-24 bg-brand-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-brand-dark mb-6">
            Localização estratégica: o vetor de maior crescimento da região
          </h2>
          <p className="text-brand-text-muted text-lg font-light leading-relaxed">
            A localização do Jardins Capri FGR não é apenas um endereço, é um <strong>ativo de valorização</strong>. Estar próximo à GO-020 e ao eixo Alphaville/Plateau d'Or significa conveniência hoje e rentabilidade amanhã.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {locationPoints.map((point, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-brand-gray/50 hover:shadow-md transition-shadow group">
              <div className="w-14 h-14 rounded-2xl bg-brand-light flex items-center justify-center mb-6 text-brand-gold-dark group-hover:bg-brand-gold-dark group-hover:text-white transition-colors duration-300">
                <point.icon strokeWidth={1.5} size={28} />
              </div>
              <h3 className="text-xl font-serif font-medium text-brand-dark mb-3">{point.title}</h3>
              <p className="text-brand-text-muted font-light leading-relaxed">{point.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
