
'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formspree.io/f/xldnzqen', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          ...formData,
          formId: 'gs-full-services-contact'
        }).toString()
      });

      if (response.ok) {
        setSubmitStatus('¡Gracias por contactarnos! Te responderemos pronto.');
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      } else {
        setSubmitStatus('Error al enviar el mensaje. Inténtalo de nuevo.');
      }
    } catch (error) {
      setSubmitStatus('Error al enviar el mensaje. Inténtalo de nuevo.');
    }
    
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-blue-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">Contáctanos</h2>
          <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Estamos listos para ayudarte con tu próximo proyecto. Solicita tu cotización gratuita.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="text-white">
            <h3 className="text-2xl font-bold mb-6">Información de Contacto</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 flex items-center justify-center bg-white text-blue-900 rounded-full mr-4 flex-shrink-0">
                  <i className="ri-phone-line text-xl"></i>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Teléfono</h4>
                  <a href="tel:9545209281" className="text-blue-100 hover:text-white transition-colors cursor-pointer">
                    (954) 520-9281
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 flex items-center justify-center bg-white text-blue-900 rounded-full mr-4 flex-shrink-0">
                  <i className="ri-map-pin-line text-xl"></i>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Área de Servicio</h4>
                  <p className="text-blue-100">Sur de la Florida</p>
                  <p className="text-blue-100">Miami-Dade, Broward</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 flex items-center justify-center bg-white text-blue-900 rounded-full mr-4 flex-shrink-0">
                  <i className="ri-time-line text-xl"></i>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Horarios</h4>
                  <p className="text-blue-100">Lunes - Viernes: 7:00 AM - 6:00 PM</p>
                  <p className="text-blue-100">Sábados: 8:00 AM - 4:00 PM</p>
                  <p className="text-blue-100">Emergencias 24/7</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-xl p-8">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">Solicitar Cotización</h3>
            
            <form id="gs-full-services-contact" onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    placeholder="Tu nombre completo"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    placeholder="(XXX) XXX-XXXX"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Tipo de Servicio *
                </label>
                <div className="relative">
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm appearance-none bg-white"
                  >
                    <option value="">Seleccionar servicio</option>
                    <option value="electricidad">Electricidad</option>
                    <option value="plomeria">Plomería</option>
                    <option value="pintura">Pintura</option>
                    <option value="drywall">Drywall</option>
                    <option value="ebanisteria">Ebanistería</option>
                    <option value="remodelacion">Remodelación General</option>
                    <option value="pisos">Pisos Laminados</option>
                    <option value="handyman">Handyman</option>
                    <option value="otro">Otro</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <i className="ri-arrow-down-s-line text-gray-400"></i>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Descripción del Proyecto *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  maxLength={500}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-sm"
                  placeholder="Describe tu proyecto en detalle..."
                ></textarea>
                <div className="text-right text-xs text-gray-500 mt-1">
                  {formData.message.length}/500 caracteres
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-900 text-white py-4 rounded-lg font-semibold hover:bg-blue-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
              >
                {isSubmitting ? 'Enviando...' : 'Solicitar Cotización Gratuita'}
              </button>

              {submitStatus && (
                <div className={`p-4 rounded-lg text-center ${
                  submitStatus.includes('Gracias') 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {submitStatus}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
