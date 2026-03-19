import { IMAGES } from "@/constants";

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
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-brand-dark mb-4">
            Galeria do Imóvel
          </h2>
          <p className="text-brand-text-muted text-lg font-light">
            Conheça os detalhes que fazem deste sobrado uma oportunidade única.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[800px] md:h-[600px]">
          {images.map((img, idx) => (
            <div key={idx} className={`relative overflow-hidden group rounded-xl ${img.className}`}>
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-medium text-lg tracking-wide drop-shadow-md">
                  {img.alt}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
