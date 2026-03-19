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
              Pronto para morar: o alto padrão que sua família merece
            </h2>
            
            <div className="space-y-6 text-brand-text-muted text-lg font-light leading-relaxed">
              <p>
                Este sobrado recém-construído no Jardins Capri FGR entrega exatamente o que você procura: <strong>4 suítes plenas</strong>, ambientes integrados, acabamento premium e uma área de lazer privativa completa para receber amigos e família.
              </p>
              <p>
                Localizado estrategicamente <strong>em frente à praça</strong> do condomínio, você garante não apenas uma vista definitiva e mais privacidade, mas também um imóvel com altíssimo potencial de valorização.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
