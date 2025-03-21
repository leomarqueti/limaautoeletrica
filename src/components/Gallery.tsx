import React from 'react';

const images = [
  {
    url: '/elevador.jpg',
    alt: 'Oficina moderna'
  },
  {
    url: '/diagnostico.jpg',
    alt: 'Diagnóstico eletrônico'
  },
  {
    url: '/multimetro.jpg',
    alt: 'Serviço especializado'
  },
  {
    url: '/osciloscopio.jpg',
    alt: 'Equipamentos modernos'
  },
  {
    url: '/chicote completo.jpg',
    alt: 'Chicote completo'
  },
  {
    url: '/equipe.jpg',
    alt: 'Instalação de acessórios'
  }
];

const Gallery = () => {
  return (
    <section id="galeria" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-lima-dark mb-4">Nossa Galeria</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conheça nossa estrutura moderna e equipada para melhor atender você e seu veículo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div key={index} className="relative h-64 overflow-hidden rounded-lg group">
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-lg font-medium">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
