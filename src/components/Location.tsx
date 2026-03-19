import { MapPin, ShoppingBag, TrendingUp, ShieldCheck } from "lucide-react";

const locationPoints = [
  { icon: ShoppingBag, text: "A poucos minutos do Shopping Flamboyant" },
  { icon: MapPin, text: "Na região dos condomínios Alphaville e Plateau d'Or" },
  { icon: TrendingUp, text: "Próximo à GO-020 e à área comercial" },
  { icon: ShieldCheck, text: "Região com forte expansão e crescimento" },
  { icon: MapPin, text: "Futuro desenvolvimento com escolas, supermercados, lojas, pet shops, academias, restaurantes e bares" },
  { icon: TrendingUp, text: "Condomínio com alto potencial de valorização" },
  { icon: ShieldCheck, text: "Marca FGR reconhecida" },
  { icon: MapPin, text: "Ao lado de condomínios de alto padrão já consolidados" },
];

export function Location() {
  return (
    <section className="py-24 bg-brand-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-brand-dark mb-6">
            Localização estratégica em uma região de crescimento consolidado
          </h2>
          <p className="text-brand-text-muted text-lg font-light leading-relaxed">
            Além da qualidade do imóvel, a localização reforça ainda mais o valor da oportunidade. O Jardins Capri está a poucos minutos do Shopping Flamboyant, próximo à GO-020, no entorno de condomínios de alto padrão já consolidados, como Alphaville e Plateau d'Or. A região segue em expansão, com desenvolvimento comercial e forte perspectiva de valorização.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {locationPoints.map((point, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-brand-gray/50 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-brand-light flex items-center justify-center mb-4 text-brand-gold-dark">
                <point.icon strokeWidth={1.5} size={24} />
              </div>
              <p className="text-brand-text font-light leading-relaxed">{point.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
