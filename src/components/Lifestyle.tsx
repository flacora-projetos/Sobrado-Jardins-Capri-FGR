import { IMAGES } from "@/constants";

export function Lifestyle() {
  return (
    <section className="py-24 bg-brand-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 max-w-xl">
            <h2 className="text-3xl md:text-4xl font-serif font-medium leading-tight mb-8 text-brand-dark">
              O momento ideal para garantir seu novo endereço
            </h2>
            
            <div className="space-y-6 text-brand-text-muted text-lg font-light leading-relaxed">
              <p>
                Este imóvel é a oportunidade perfeita para quem não quer perder tempo com obras e busca uma <strong>casa nova, pronta para morar</strong>, com projeto moderno e inteligente.
              </p>
              <p>
                O Jardins Capri FGR está em uma região de expansão consistente, cercado por condomínios de alto padrão. É a garantia de investir em um patrimônio sólido, com segurança e infraestrutura completa.
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={IMAGES.piscina}
                alt="Área de lazer com piscina"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
