import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "O imóvel está pronto para morar?",
    answer: "Sim. O imóvel é novo e está pronto para morar.",
  },
  {
    question: "Quantas suítes a casa possui?",
    answer: "A casa conta com 4 suítes, oferecendo conforto e privacidade para a família.",
  },
  {
    question: "Quais são os principais diferenciais?",
    answer: "Entre os destaques estão a localização em frente à praça, a vista privilegiada, a piscina, a área gourmet, a automação, a energia solar e o acabamento de primeira linha.",
  },
  {
    question: "Aceita financiamento ou permuta?",
    answer: "Sim. Há possibilidade de financiamento, uso de FGTS, permuta, negociação e parcelamento.",
  },
  {
    question: "Como posso agendar atendimento?",
    answer: "Basta clicar no botão de WhatsApp ou usar a opção de ligação disponível na página.",
  },
  {
    question: "Qual o horário de atendimento?",
    answer: "O atendimento está disponível 24 horas.",
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
