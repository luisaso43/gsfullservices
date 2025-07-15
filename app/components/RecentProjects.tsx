
'use client';

export default function RecentProjects() {
  const projects = [
    {
      title: 'Remodelación de Consultorio',
      date: 'Mayo 2025',
      location: 'Kendall, FL',
      description: 'Renovación completa del consultorio médico, incluyendo nuevas instalaciones eléctricas, pintura y pisos laminados de alta resistencia.',
      image: 'https://readdy.ai/api/search-image?query=Modern%20medical%20office%20renovation%20with%20new%20electrical%20installations%2C%20fresh%20paint%2C%20and%20high-resistance%20laminate%20flooring%2C%20professional%20medical%20environment%20with%20navy%20blue%20and%20gray%20accents%2C%20clean%20minimalist%20design&width=600&height=400&seq=project-1&orientation=landscape'
    },
    {
      title: 'Remodelación de Cocina',
      date: 'Marzo 2025',
      location: 'Miami, FL',
      description: 'Modernización total con gabinetes personalizados, encimeras de cuarzo y actualización de sistemas eléctricos.',
      image: 'https://readdy.ai/api/search-image?query=Modern%20kitchen%20renovation%20with%20custom%20cabinets%2C%20quartz%20countertops%20and%20electrical%20system%20updates%2C%20contemporary%20design%20with%20navy%20blue%20and%20white%20color%20scheme%2C%20professional%20construction%20work%20visible&width=600&height=400&seq=project-2&orientation=landscape'
    },
    {
      title: 'Remodelación de Baño',
      date: 'Marzo 2025',
      location: 'Miami, FL',
      description: 'Reestructuración y diseño nuevo de baño, instalación de azulejos, accesorios y mejoras en plomería.',
      image: 'https://readdy.ai/api/search-image?query=Modern%20bathroom%20renovation%20with%20new%20tile%20installation%2C%20fixtures%20and%20plumbing%20improvements%2C%20contemporary%20bathroom%20design%20with%20navy%20blue%20and%20gray%20accents%2C%20professional%20renovation%20work&width=600&height=400&seq=project-3&orientation=landscape'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-900 mb-6">Proyectos Recientes</h2>
          <div className="w-24 h-1 bg-blue-900 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Conoce algunos de nuestros trabajos más recientes y la calidad que ofrecemos en cada proyecto.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover object-top"
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <i className="ri-calendar-line w-4 h-4 flex items-center justify-center mr-2"></i>
                  <span>{project.date}</span>
                  <i className="ri-map-pin-line w-4 h-4 flex items-center justify-center ml-4 mr-2"></i>
                  <span>{project.location}</span>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 leading-relaxed">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
