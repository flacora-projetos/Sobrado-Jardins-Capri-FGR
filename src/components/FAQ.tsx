import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "O imóvel já está pronto para morar?",
    answer: "Sim! É uma casa 100% nova, recém-construída e pronta para você se mudar imediatamente com sua família.",
  },
  {
    question: "Como funciona a negociação e pagamento?",
    answer: "O imóvel aceita financiamento bancário, uso de FGTS e estudamos permuta como parte do pagamento. Temos flexibilidade para ouvir sua proposta.",
  },
  {
    question: "Quais os diferenciais da localização dentro do condomínio?",
    answer: "O sobrado está em uma posição premium: em frente à praça. Isso garante uma vista definitiva, maior privacidade (sem vizinho de frente) e mais facilidade para o lazer das crianças.",
  },
  {
    question: "A casa já possui automação e energia solar?",
    answer: "Sim, o imóvel já conta com infraestrutura de automação residencial e sistema de energia solar, garantindo modernidade, conforto e economia desde o primeiro dia.",
  },
  {
    question: "Como faço para visitar o imóvel?",
    answer: "Basta clicar em qualquer botão de WhatsApp nesta página. Nosso atendimento é imediato e podemos agendar sua visita presencial para hoje mesmo ou para o melhor dia da sua agenda.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-brand-dark mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-brand-text-muted text-lg font-light">
              Tire suas dúvidas sobre o imóvel e as condições de negociação.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-brand-gray rounded-2xl overflow-hidden transition-colors hover:border-brand-gold/50"
              >
                <button
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-medium text-brand-dark pr-8">{faq.question}</span>
                  <ChevronDown
                    className={cn(
                      "w-5 h-5 text-brand-gold-dark transition-transform duration-300 shrink-0",
                      openIndex === index && "rotate-180"
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "px-6 overflow-hidden transition-all duration-300 ease-in-out",
                    openIndex === index ? "max-h-48 pb-5 opacity-100" : "max-h-0 opacity-0"
                  )}
                >
                  <p className="text-brand-text-muted font-light leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
