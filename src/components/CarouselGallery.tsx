import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const carouselImages = [
  { src: "https://lh3.googleusercontent.com/d/1CaiLiIHYYoi-4VKeDnlsrxG-QIoLdkOS", alt: "Ambiente do imóvel 1" },
  { src: "https://lh3.googleusercontent.com/d/1zIc4EvcKMXj7mZFESSvdurD6PhjfqzzK", alt: "Ambiente do imóvel 2" },
  { src: "https://lh3.googleusercontent.com/d/1edIkH_uBzYwHy1Y_eTkoikRSgFJCZ6QJ", alt: "Ambiente do imóvel 3" },
  { src: "https://lh3.googleusercontent.com/d/1JNovkZ8rLvXGWLgdFBP966-MjRrBveH-", alt: "Ambiente do imóvel 4" },
  { src: "https://lh3.googleusercontent.com/d/1MNATXynvzXd1wnWadMXvjH7i1K6kHec3", alt: "Ambiente do imóvel 5" },
  { src: "https://lh3.googleusercontent.com/d/1vHih70zVxbSq9PlMFFAfjf4FALdhElog", alt: "Ambiente do imóvel 6" },
  { src: "https://lh3.googleusercontent.com/d/1e9bknSrau7LlkQdm74nO1748mTKxD9ab", alt: "Ambiente do imóvel 7" },
  { src: "https://lh3.googleusercontent.com/d/1NE3ojWrXgz7EhbT1tIvJUs1DhN0IHEHS", alt: "Ambiente do imóvel 8" },
  { src: "https://lh3.googleusercontent.com/d/1aB_p6CXCuD-cZ8_63xXWFWSDgobU0TUy", alt: "Ambiente do imóvel 9" },
  { src: "https://lh3.googleusercontent.com/d/1551MPL232H5Y3Qp9EksgQ3Jk1bSH-V0T", alt: "Ambiente do imóvel 10" },
  { src: "https://lh3.googleusercontent.com/d/1rHw2Xkem85oUuQNjfj5SmuBg2N_IrLsH", alt: "Ambiente do imóvel 11" },
  { src: "https://lh3.googleusercontent.com/d/1xEnoeMMYPP3ADbLvwGflgCYigU5AUw-o", alt: "Ambiente do imóvel 12" },
  { src: "https://lh3.googleusercontent.com/d/1QoJlVvTcbZe7WyUBPDQvge-M0bYFaZfI", alt: "Ambiente do imóvel 13" },
  { src: "https://lh3.googleusercontent.com/d/1ykneTRP9-fNOTRZQAB3HibKIoGNnOf2-", alt: "Ambiente do imóvel 14" },
  { src: "https://lh3.googleusercontent.com/d/1VBv4iYOaozvy_wLvaEF6F8zPlwENJPG6", alt: "Ambiente do imóvel 15" },
  { src: "https://lh3.googleusercontent.com/d/1J1-1WrL2iChUHcI3tggdCj54hfbmaKQa", alt: "Ambiente do imóvel 16" },
  { src: "https://lh3.googleusercontent.com/d/1hjNDuDTAN42ZHZvJQLPRlcI5XB2qRbgm", alt: "Ambiente do imóvel 17" },
  { src: "https://lh3.googleusercontent.com/d/19QZsC62tN7F2mHZoHg_LpMyvtjNtpnTX", alt: "Ambiente do imóvel 18" },
];

export function CarouselGallery() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [selectedIndex]);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = current.clientWidth > 768 ? 400 : current.clientWidth * 0.85;
      current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="py-24 bg-brand-dark text-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">
            Tour Completo
          </h2>
          <p className="text-white/70 text-lg font-light">
            Deslize para ver mais ângulos e detalhes exclusivos deste sobrado de alto padrão.
          </p>
        </motion.div>

        <div className="relative max-w-[1400px] mx-auto">
          {/* Scroll Container */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 md:gap-6 pb-8 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {carouselImages.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: Math.min(idx * 0.05, 0.5) }}
                onClick={() => setSelectedIndex(idx)}
                className="w-[200px] sm:w-[240px] md:w-[280px] aspect-[3/4] snap-center sm:snap-start relative rounded-2xl overflow-hidden shrink-0 group shadow-xl bg-black/20 cursor-pointer"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={() => scroll("left")}
            className="absolute left-2 md:-left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-md border border-white/10 flex items-center justify-center transition-all z-10 shadow-xl"
            aria-label="Rolar para a esquerda"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button 
            onClick={() => scroll("right")}
            className="absolute right-2 md:-right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-md border border-white/10 flex items-center justify-center transition-all z-10 shadow-xl"
            aria-label="Rolar para a direita"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md"
            onClick={() => setSelectedIndex(null)}
          >
            <button 
              className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50"
              onClick={(e) => { e.stopPropagation(); setSelectedIndex(null); }}
              aria-label="Fechar"
            >
              <X className="w-6 h-6" />
            </button>

            <button 
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-14 h-14 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50"
              onClick={(e) => { 
                e.stopPropagation(); 
                setSelectedIndex((prev) => prev !== null ? (prev - 1 + carouselImages.length) % carouselImages.length : null); 
              }}
              aria-label="Foto anterior"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <button 
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-14 h-14 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50"
              onClick={(e) => { 
                e.stopPropagation(); 
                setSelectedIndex((prev) => prev !== null ? (prev + 1) % carouselImages.length : null); 
              }}
              aria-label="Próxima foto"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full h-full p-4 md:p-12 flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={carouselImages[selectedIndex].src} 
                alt={carouselImages[selectedIndex].alt}
                className="w-full h-full object-contain drop-shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
