const specs = [
  { label: "Valor", value: "R$ 1.850.000,00", highlight: true },
  { label: "Terreno", value: "353 m²" },
  { label: "Construção", value: "267 m²" },
  { label: "Quartos", value: "4" },
  { label: "Suítes", value: "4" },
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
  "Aceita permuta",
  "Possibilidade de negociação",
  "Possibilidade de parcelamento",
];

export function TechnicalSheet() {
  return (
    <section className="py-24 bg-white border-y border-brand-gray">
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

          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <div className="bg-brand-light rounded-2xl p-8 md:p-10">
                <h3 className="text-xl font-serif font-medium text-brand-dark mb-8 border-b border-brand-gray pb-4">
                  Ficha Técnica
                </h3>
                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                  {specs.map((spec, idx) => (
                    <div key={idx} className="flex flex-col border-b border-brand-gray/50 pb-3">
                      <dt className="text-sm text-brand-text-muted uppercase tracking-wider mb-1">{spec.label}</dt>
                      <dd className={`text-lg font-medium ${spec.highlight ? 'text-brand-gold-dark text-2xl' : 'text-brand-dark'}`}>
                        {spec.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            <div className="md:col-span-1">
              <div className="bg-brand-dark text-white rounded-2xl p-8 md:p-10 h-full">
                <h3 className="text-xl font-serif font-medium mb-8 border-b border-white/20 pb-4">
                  Condições de Venda
                </h3>
                <ul className="space-y-6">
                  {conditions.map((condition, idx) => (
                    <li key={idx} className="flex items-center text-white/90 font-light">
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
