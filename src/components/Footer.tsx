import { CONTACT } from "@/constants";

export function Footer() {
  return (
    <footer className="bg-brand-dark text-white/60 py-12 border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm font-light">
              &copy; {new Date().getFullYear()} Jardins Capri FGR. Todos os direitos reservados.
            </p>
            <p className="text-xs mt-2 opacity-70">
              As imagens apresentadas são reais e correspondem exatamente ao imóvel anunciado.
            </p>
          </div>
          
          <div className="flex items-center gap-6 text-sm">
            <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              WhatsApp
            </a>
            <a href={CONTACT.phone} className="hover:text-white transition-colors">
              Ligar: {CONTACT.displayPhone}
            </a>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a 
            href="https://wa.me/556299465725" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[10px] opacity-30 hover:opacity-100 transition-opacity uppercase tracking-widest"
          >
            Desenvolvido por Flávio Corá
          </a>
        </div>
      </div>
    </footer>
  );
}
