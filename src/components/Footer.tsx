import React from 'react';
import { Wrench } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-lima-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Wrench className="h-8 w-8 text-lima-green" />
              <span className="ml-2 text-white font-bold text-xl">Lima</span>
            </div>
            <p className="text-gray-300 mb-4">
              Sua oficina auto elétrica de confiança há mais de 10 anos.
              CNPJ: 21.313.847/0001-04
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-lima-green transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-gray-300 hover:text-lima-green transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-gray-300 hover:text-lima-green transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#contato" className="text-gray-300 hover:text-lima-green transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Horário</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Segunda - Sexta: 8h às 18h</li>
              <li>Sábado: Fechado</li>
              <li>Domingo: Fechado</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Lima Auto Elétrica. Todos os direitos reservados.
            </p>
            <div className="mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-lima-green text-sm">
                Política de Privacidade
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;