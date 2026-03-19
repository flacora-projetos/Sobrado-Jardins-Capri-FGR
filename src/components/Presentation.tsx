import { IMAGES } from "@/constants";

export function Presentation() {
  return (
    <section className="py-24 bg-brand-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl">
              <img
                src={IMAGES.escada}
                alt="Detalhe da escada interna"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-2/3 aspect-square overflow-hidden rounded-2xl border-8 border-brand-light hidden md:block shadow-xl">
              <img
                src={IMAGES.quarto}
                alt="Suíte principal"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          
          <div className="order-1 lg:order-2 max-w-xl">
            <h2 className="text-3xl md:text-4xl font-serif font-medium leading-tight mb-8 text-brand-dark">
              Mais do que uma casa, uma escolha de estilo de vida
            </h2>
            
            <div className="space-y-6 text-brand-text-muted text-lg font-light leading-relaxed">
              <p>
                Este sobrado no Jardins Capri FGR entrega o que o comprador de alto padrão procura: ambientes bem distribuídos, acabamento de primeira linha, lazer privativo e uma experiência de moradia que combina conforto, elegância e funcionalidade.
              </p>
              <p>
                Tudo isso em uma localização estratégica dentro do condomínio, com vista privilegiada e forte potencial de valorização.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
