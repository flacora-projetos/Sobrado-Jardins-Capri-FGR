import { IMAGES } from "@/constants";
import { motion } from "motion/react";

export function Gallery() {
  const images = [
    { src: IMAGES.fachada, alt: "Fachada imponente", className: "md:col-span-2 md:row-span-2" },
    { src: IMAGES.piscina, alt: "Piscina e área gourmet", className: "md:col-span-1 md:row-span-1" },
    { src: IMAGES.cozinha, alt: "Cozinha integrada", className: "md:col-span-1 md:row-span-1" },
    { src: IMAGES.entrada, alt: "Visão da entrada", className: "md:col-span-1 md:row-span-1" },
    { src: IMAGES.quarto, alt: "Suíte master", className: "md:col-span-1 md:row-span-1" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-brand-dark mb-4">
            Galeria do Imóvel
          </h2>
          <p className="text-brand-text-muted text-lg font-light">
            Conheça os detalhes que fazem deste sobrado uma oportunidade única.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[800px] md:h-[600px]">
          {images.map((img, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`relative overflow-hidden group rounded-xl ${img.className}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-medium text-lg tracking-wide drop-shadow-md">
                  {img.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
