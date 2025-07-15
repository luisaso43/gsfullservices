
'use client';

export default function Gallery() {
  const galleryItems = [
    {
      title: 'Trabajo de Pintura de Interior',
      image: 'https://static.readdy.ai/image/1a49486be0cdb3f0e37f09284bf04aec/f09d3f268244fa3de39475d43c19536c.jfif'
    },
    {
      title: 'Remodelación de Cocina',
      image: 'https://readdy.ai/api/search-image?query=Kitchen%20remodeling%20project%20showing%20custom%20cabinets%20installation%2C%20modern%20appliances%20and%20quartz%20countertops%2C%20navy%20blue%20and%20white%20kitchen%20design%2C%20professional%20construction%20work%20in%20progress&width=600&height=600&seq=gallery-2&orientation=squarish'
    },
    {
      title: 'Diseño y Renovación de Baño',
      image: 'https://readdy.ai/api/search-image?query=Bathroom%20design%20and%20renovation%20project%2C%20modern%20tile%20work%20and%20fixture%20installation%2C%20contemporary%20bathroom%20with%20navy%20blue%20accents%2C%20professional%20plumbing%20and%20renovation%20work%20visible&width=600&height=600&seq=gallery-3&orientation=squarish'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-900 mb-6">Galería de Trabajos</h2>
          <div className="w-24 h-1 bg-blue-900 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explora algunos ejemplos de nuestro trabajo y la calidad que entregamos en cada proyecto.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {galleryItems.map((item, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-80 object-cover object-top group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <div className="w-12 h-0.5 bg-white"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="tel:9545209281" 
            className="bg-blue-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-colors cursor-pointer whitespace-nowrap inline-block"
          >
            Ver Más Proyectos
          </a>
        </div>
      </div>
    </section>
  );
}
