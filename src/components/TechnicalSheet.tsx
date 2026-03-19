const specs = [
  { label: "Valor do Imóvel", value: "R$ 1.950.000,00", highlight: true },
  { label: "Área do Terreno", value: "353 m²" },
  { label: "Área Construída", value: "267 m²" },
  { label: "Quartos", value: "4" },
  { label: "Suítes Plenas", value: "4" },
  { label: "Banheiros", value: "5" },
  { label: "Vagas Cobertas", value: "3" },
  { label: "Vagas Descobertas", value: "3" },
  { label: "Estado do Imóvel", value: "Novo" },
  { label: "Status", value: "Pronto para morar" },
  { label: "Condomínio", value: "R$ 750,00" },
];

const conditions = [
  "Aceita financiamento",
  "Aceita FGTS",
  "Estuda permuta",
  "Possibilidade de negociação",
  "Documentação regularizada",
];

export function TechnicalSheet() {
  return (
    <section className="py-24 bg-brand-light border-y border-brand-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-brand-dark mb-4">
              Informações do imóvel
            </h2>
            <p className="text-brand-text-muted text-lg font-light">
              Ficha técnica completa e condições de negociação.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            <div className="md:col-span-2">
              <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-brand-gray/50">
                <h3 className="text-2xl font-serif font-medium text-brand-dark mb-8 border-b border-brand-gray pb-4">
                  Ficha Técnica
                </h3>
                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                  {specs.map((spec, idx) => (
                    <div key={idx} className={`flex flex-col border-b border-brand-gray/50 pb-3 ${spec.highlight ? 'sm:col-span-2 bg-brand-light/50 p-4 rounded-lg border-none' : ''}`}>
                      <dt className={`text-sm uppercase tracking-wider mb-1 ${spec.highlight ? 'text-brand-dark font-semibold' : 'text-brand-text-muted'}`}>{spec.label}</dt>
                      <dd className={`font-medium ${spec.highlight ? 'text-brand-gold-dark text-3xl md:text-4xl' : 'text-brand-dark text-lg'}`}>
                        {spec.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            <div className="md:col-span-1">
              <div className="bg-brand-dark text-white rounded-2xl p-8 md:p-10 h-full shadow-lg">
                <h3 className="text-2xl font-serif font-medium mb-8 border-b border-white/20 pb-4">
                  Condições
                </h3>
                <ul className="space-y-6">
                  {conditions.map((condition, idx) => (
                    <li key={idx} className="flex items-center text-white/90 font-light text-lg">
                      <span className="w-2 h-2 rounded-full bg-brand-gold mr-4 shrink-0" />
                      {condition}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
