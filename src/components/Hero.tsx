import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center bg-lima-dark">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
          opacity: '0.3'
        }}
      />
      
      <div className="relative text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Lima <span className="text-lima-green">Auto Elétrica</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Confiança e tecnologia para o seu veículo
        </p>
        <a
          href="#servicos"
          className="inline-block bg-lima-green text-white px-8 py-3 rounded-full font-medium hover:bg-lime-600 transition-colors"
        >
          Nossos Serviços
        </a>
      </div>
      
      <a
        href="#sobre"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
      >
        <ChevronDown className="h-8 w-8" />
      </a>
    </section>
  );
};

export default Hero;