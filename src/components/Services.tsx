import React from 'react';
import { Zap, Car, Battery, Wrench, Settings, Shield } from 'lucide-react';

const services = [
  {
    icon: <Zap className="h-8 w-8" />,
    title: 'Diagnóstico Eletrônico',
    description: 'Análise completa dos sistemas eletrônicos do seu veículo com equipamentos de última geração.'
  },
  {
    icon: <Car className="h-8 w-8" />,
    title: 'Instalação de Acessórios',
    description: 'Instalação profissional de alarmes, som, câmeras de ré e outros acessórios.'
  },
  {
    icon: <Settings className="h-8 w-8" />,
    title: 'Reparos Elétricos',
    description: 'Manutenção e reparo em toda parte elétrica do veículo.'
  },
  {
    icon: <Battery className="h-8 w-8" />,
    title: 'Substituição de Baterias',
    description: 'Troca de baterias com garantia e teste do sistema de carga.'
  },
  {
    icon: <Wrench className="h-8 w-8" />,
    title: 'Manutenção Preventiva',
    description: 'Checagem completa do sistema elétrico para prevenir problemas futuros.'
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: 'Garantia de Serviço',
    description: 'Todos os serviços com garantia e suporte técnico especializado.'
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: 'Motor de partida',
    description: 'Todos os serviços com garantia e suporte técnico especializado.'
  },
  {
    icon: <Battery className="h-8 w-8" />,
    title: 'Alternador',
    description: 'Todos os serviços com garantia e suporte técnico especializado.'
  },
  {
    icon: <Wrench className="h-8 w-8" />,
    title: 'Higienização ar condicionado',
    description: 'Todos os serviços com garantia e suporte técnico especializado.'
  }
];

const Services = () => {
  return (
    <section id="servicos" className="py-20 bg-lima-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Nossos Serviços</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Oferecemos uma ampla gama de serviços automotivos elétricos com a mais alta qualidade e tecnologia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm p-6 rounded-lg hover:bg-white/10 transition-colors"
            >
              <div className="text-lima-green mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;