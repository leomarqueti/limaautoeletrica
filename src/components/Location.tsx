import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';

const Location = () => {
  return (
    <section id="localizacao" className="py-20 bg-lima-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Nossa Localização</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Estamos em um local de fácil acesso para melhor atender você.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg overflow-hidden h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3700.785897582888!2d-50.50783037486877!3d-21.942780851612493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9495b800a2fb6f59%3A0xd9dd8aeda4805535!2sAuto%20El%C3%A9trica%20Lima!5e0!3m2!1spt-BR!2sbr!4v1736524772678!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Lima Auto Elétrica"
            />
          </div>

          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg">
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-lima-green flex-shrink-0" />
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-white mb-2">Endereço</h3>
                  <p className="text-gray-300">
                  R. Floriano de Barros, 275 - Mirim l<br />
                  Tupã - SP, 17603-080
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="h-6 w-6 text-lima-green flex-shrink-0" />
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-white mb-2">Horário de Funcionamento</h3>
                  <p className="text-gray-300">
                    Segunda a Sexta: 8h às 18h<br />
                    Sábado: Fechado<br />
                    Domingo: Fechado
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="h-6 w-6 text-lima-green flex-shrink-0" />
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-white mb-2">Contatos</h3>
                  <p className="text-gray-300">
                    Telefone: (14) 34911439<br />
                    WhatsApp: (14) 99795-1011<br />
                    Email: autoeletricalima123@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;