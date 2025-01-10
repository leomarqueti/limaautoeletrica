import React, { useState } from 'react';
import { Send, Facebook, Instagram, Linkedin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-lima-dark mb-4">Entre em Contato</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tire suas dúvidas ou solicite um orçamento. Estamos aqui para ajudar!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-lima-green focus:ring-lima-green"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-lima-green focus:ring-lima-green"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-lima-green focus:ring-lima-green"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-lima-green focus:ring-lima-green"
                />
              </div>

              <button
                type="submit"
                className="w-full flex justify-center items-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-lima-green hover:bg-lime-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lima-green"
              >
                <Send className="h-5 w-5 mr-2" />
                Enviar Mensagem
              </button>
            </form>
          </div>

          <div className="bg-lima-dark rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Redes Sociais</h3>
            <div className="space-y-4">
              <a
                href="#"
                className="flex items-center text-gray-300 hover:text-lima-green transition-colors"
              >
                <Facebook className="h-6 w-6 mr-3" />
                /limaalvesautoeletrica
              </a>
              <a
                href="#"
                className="flex items-center text-gray-300 hover:text-lima-green transition-colors"
              >
                <Instagram className="h-6 w-6 mr-3" />
                @limaalvesautoeletrica
              </a>
              <a
                href="#"
                className="flex items-center text-gray-300 hover:text-lima-green transition-colors"
              >
                <Linkedin className="h-6 w-6 mr-3" />
                Lima & Alves Auto Elétrica
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;