
'use client';

export default function AboutSection() {
  const services = [
    { icon: 'ri-flashlight-line', name: 'Electricidad' },
    { icon: 'ri-drop-line', name: 'Plomería' },
    { icon: 'ri-brush-line', name: 'Pintura' },
    { icon: 'ri-hammer-line', name: 'Drywall' },
    { icon: 'ri-home-line', name: 'Ebanistería' },
    { icon: 'ri-tools-line', name: 'Remodelaciones' },
    { icon: 'ri-layout-line', name: 'Pisos Laminados' },
    { icon: 'ri-service-line', name: 'Handyman' }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-900 mb-6">Sobre Nosotros</h2>
          <div className="w-24 h-1 bg-blue-900 mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 leading-relaxed">
            GS Full Services cuenta con más de 10 años de experiencia ofreciendo soluciones integrales 
            en el sur de la Florida. Nos especializamos en electricidad, plomería, pintura, drywall, 
            ebanistería, remodelaciones en general, pisos laminados, ensamblaje de muebles y servicios 
            de handyman. Nuestro compromiso es brindar calidad, puntualidad y resultados que superen 
            las expectativas de nuestros clientes.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4 bg-blue-900 text-white rounded-full">
                <i className={`${service.icon} text-xl`}></i>
              </div>
              <h3 className="font-semibold text-gray-800">{service.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
