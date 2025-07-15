
'use client';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-pacifico text-2xl mb-4">GS Full Services</h3>
            <p className="text-gray-300 mb-4">
              Más de 10 años ofreciendo soluciones integrales de construcción y remodelación en el sur de la Florida.
            </p>
            <div className="flex items-center">
              <i className="ri-phone-line w-5 h-5 flex items-center justify-center mr-3"></i>
              <a href="tel:9545209281" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                (954) 520-9281
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Nuestros Servicios</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Electricidad</li>
              <li>Plomería</li>
              <li>Pintura</li>
              <li>Drywall</li>
              <li>Ebanistería</li>
              <li>Remodelaciones</li>
              <li>Pisos Laminados</li>
              <li>Handyman</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Área de Servicio</h4>
            <p className="text-gray-300 mb-4">
              Sur de la Florida<br />
              Miami-Dade County<br />
              Broward County
            </p>
            
            <div className="flex items-center space-x-4">
              <a 
                href="https://www.instagram.com/gsfullservices?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-blue-600 rounded-full transition-colors cursor-pointer"
              >
                <i className="ri-instagram-line text-lg"></i>
              </a>
              <a 
                href="tel:9545209281"
                className="w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-blue-600 rounded-full transition-colors cursor-pointer"
              >
                <i className="ri-phone-line text-lg"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            2025 GS Full Services. Todos los derechos reservados.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Síguenos en Instagram para ver más de nuestros trabajos
          </p>
        </div>
      </div>
    </footer>
  );
}
