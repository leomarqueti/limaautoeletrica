import React from 'react';
import { Star, Users, Clock } from 'lucide-react';

const testimonials = [
  {
    name: 'João Silva',
    text: 'Excelente atendimento e profissionalismo. Resolveram o problema elétrico do meu carro rapidamente.',
    role: 'Cliente desde 2020'
  },
  {
    name: 'Maria Santos',
    text: 'Equipe muito competente e preços justos. Recomendo fortemente!',
    role: 'Cliente desde 2021'
  },
  {
    name: 'Pedro Oliveira',
    text: 'O melhor serviço de auto elétrica da região. Trabalho de qualidade e garantido.',
    role: 'Cliente desde 2019'
  }
];

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-lima-dark mb-4">Sobre Nós</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Há mais de 10 anos, a Lima Auto Elétrica é sinônimo de excelência em serviços automotivos elétricos. Nossa missão é oferecer soluções confiáveis e tecnológicas para nossos clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <img
              src="/lima-auto-eletrica.jpg"
              alt="Fachada da Lima Auto Elétrica"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <div className="grid grid-cols-1 gap-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Users className="h-6 w-6 text-lima-green" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-lima-dark">Equipe Especializada</h3>
                  <p className="mt-2 text-gray-600">
                    Nossa equipe é formada por profissionais altamente qualificados e constantemente atualizados.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Star className="h-6 w-6 text-lima-green" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-lima-dark">Qualidade Garantida</h3>
                  <p className="mt-2 text-gray-600">
                    Utilizamos equipamentos de última geração e peças originais em todos os serviços.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Clock className="h-6 w-6 text-lima-green" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-lima-dark">Agilidade</h3>
                  <p className="mt-2 text-gray-600">
                    Comprometimento com prazos e eficiência no diagnóstico e resolução de problemas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-lima-dark mb-12">O que nossos clientes dizem</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-600 mb-4">{testimonial.text}</p>
                <div>
                  <p className="font-semibold text-lima-dark">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;