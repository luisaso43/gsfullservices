
'use client';

export default function Hero() {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.8), rgba(30, 58, 138, 0.6)), url('https://readdy.ai/api/search-image?query=Modern%20luxury%20house%20exterior%20with%20contemporary%20architecture%2C%20clean%20lines%20and%20minimalist%20design%2C%20navy%20blue%20and%20gray%20color%20accents%2C%20professional%20residential%20construction%2C%20beautiful%20landscaping%20and%20lighting%2C%20high-end%20home%20design%20with%20glass%20windows%20and%20modern%20materials&width=1920&height=1080&seq=hero-house&orientation=landscape')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          <span className="font-pacifico text-4xl md:text-5xl block mb-2">GS Full Services</span>
          Servicios Profesionales
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Más de 10 años de experiencia en el sur de la Florida ofreciendo servicios de electricidad, plomería, pintura, remodelaciones y más.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#contact" 
            className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap"
          >
            Solicitar Cotización
          </a>
          <a 
            href="tel:9545209281" 
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors cursor-pointer whitespace-nowrap"
          >
            Llamar Ahora
          </a>
        </div>
      </div>
    </section>
  );
}
