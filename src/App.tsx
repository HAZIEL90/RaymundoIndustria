import { MapPin, Clock, ShoppingBag, Instagram } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/image.png"
              alt="Raymundo Industria Logo"
              className="h-16 w-16 object-contain"
            />
            <div>
              <h1 className="text-2xl font-bold text-gray-800">raymundoindustria</h1>
              <p className="text-sm text-green-600 font-semibold">GROWSHOP 🌳</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-6 items-center">
            <a href="#inicio" className="text-gray-700 hover:text-green-600 transition">Inicio</a>
            <a href="#productos" className="text-gray-700 hover:text-green-600 transition">Productos</a>
            <a href="#contacto" className="text-gray-700 hover:text-green-600 transition">Contacto</a>
            <a
              href="https://www.instagram.com/raymundoindustria/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 hover:text-pink-700 transition flex items-center gap-1"
            >
              <Instagram size={20} />
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <img
              src="/image.png"
              alt="Raymundo Industria"
              className="h-40 w-40 mx-auto object-contain mb-6 animate-pulse"
            />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
            𝔾ℝ𝕆𝕎𝕊ℍ𝕆ℙ 🌳
          </h2>
          <p className="text-2xl md:text-3xl text-green-700 font-semibold mb-8">
            X MAYOR Y MENOR
          </p>
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto border-2 border-green-200">
            <div className="flex items-start gap-3 mb-4">
              <MapPin className="text-green-600 flex-shrink-0 mt-1" size={24} />
              <div className="text-left">
                <h3 className="font-bold text-gray-800 mb-2">UBICACIÓN:</h3>
                <p className="text-gray-700">
                  Av. Pres. Dr. Nestor Kirchner 1074<br />
                  Río Gallegos, Santa Cruz 9400
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="productos" className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <ShoppingBag className="mx-auto text-green-600 mb-4" size={48} />
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Nuestros Productos</h2>
            <p className="text-gray-600 text-lg">Calidad premium para tu cultivo</p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* SUAVER Product */}
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-500 border-2 border-gray-100">
              <div className="md:flex">
                {/* Image Section */}
                <div className="md:w-1/2 bg-gradient-to-br from-gray-900 to-gray-800 p-8 flex items-center justify-center">
                  <img
                    src="/files_3621917-2026-02-23T19-25-35-947Z-Captura_de_pantalla_(2).png"
                    alt="SUAVER"
                    className="w-full h-full object-contain rounded-2xl"
                  />
                </div>

                {/* Content Section */}
                <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                  <div className="mb-6">
                    <h3 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-yellow-500 to-green-500 bg-clip-text text-transparent">
                      SUAVER
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      Es un producto muy conocido, revolucionario que te permite guardar el cigarro encendido y continuar fumándolo en el momento que desees sin alterar su sabor Tiene un cierre que es hermético, por eso al cerrarlo evitamos olores y manchas. Cómodo y fácil de transportar: Es compacto y liviano, esto lo hace muy fácil de llevar y además está construido en plástico de primera calidad y con una alta resistencia al calor, lo que garantiza 100% de seguridad al almacenar el cigarro encendido. Fácil de limpiar: El dispositivo se limpia con agua solo con ponerlo debajo de la canilla
                    </p>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500"></div>
                      <span className="text-gray-700 font-medium">Variedad de colores</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500"></div>
                      <span className="text-gray-700 font-medium">Alta calidad</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-gradient-to-r from-green-500 to-blue-500"></div>
                      <span className="text-gray-700 font-medium">Disponible por mayor y menor</span>
                    </div>
                  </div>

                  <a
                    href="https://www.instagram.com/direct/t/17844202904537511/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-gradient-to-r from-green-500 to-green-600 text-white rounded-2xl p-6 text-center hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <p className="text-sm font-semibold mb-2">Consulta por disponibilidad y precios</p>
                    <p className="text-2xl font-bold">Venta x Mayor y Menor</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="bg-gradient-to-br from-green-50 via-white to-green-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Instagram className="mx-auto text-pink-600 mb-4" size={48} />
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Síguenos en Instagram</h2>
            <p className="text-gray-600 text-lg mb-6">Mantente al día con nuestros productos y novedades</p>
            <a
              href="https://www.instagram.com/raymundoindustria/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white font-bold px-8 py-4 rounded-full hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <Instagram size={24} />
              @raymundoindustria
            </a>
          </div>

          <div className="max-w-2xl mx-auto">
            <a
              href="https://www.instagram.com/p/DVB3sqfCT_L/"
              target="_blank"
              rel="noopener noreferrer"
              className="group block relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105"
            >
              <div className="bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 p-1">
                <div className="bg-white rounded-2xl p-8 md:p-12">
                  <div className="flex flex-col items-center text-center space-y-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                      <div className="relative bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 p-4 rounded-full">
                        <Instagram className="text-white" size={48} />
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                        Mira nuestro último reel de nuestro Instagram
                      </h3>
                      <p className="text-gray-600 text-lg">
                        Descubre nuestros productos en acción
                      </p>
                    </div>

                    <div className="flex items-center gap-3 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white font-bold px-8 py-4 rounded-full group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <span className="text-lg">Ver Reel Ahora</span>
                      <svg
                        className="w-6 h-6 transform group-hover:translate-x-2 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span>Activo en Instagram</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-green-600 to-green-700 rounded-2xl shadow-2xl p-8 md:p-12 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Visitanos</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <MapPin className="flex-shrink-0 mt-1" size={28} />
              <div>
                <h3 className="font-bold text-xl mb-2">Ubicación</h3>
                <p className="text-green-50">
                  Av. Pres. Dr. Nestor Kirchner 1074<br />
                  Río Gallegos, Santa Cruz 9400
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="flex-shrink-0 mt-1" size={28} />
              <div>
                <h3 className="font-bold text-xl mb-2">Modalidad</h3>
                <p className="text-green-50">
                  Venta por mayor y menor<br />
                  Consulta disponibilidad
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-4">
            <img
              src="/image.png"
              alt="Raymundo Industria"
              className="h-16 w-16 mx-auto object-contain mb-4"
            />
            <h3 className="text-xl font-bold mb-2">raymundoindustria</h3>
            <p className="text-green-400 font-semibold">GROWSHOP 🌳</p>
          </div>

          <div className="mb-4">
            <a
              href="https://www.instagram.com/raymundoindustria/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-pink-400 hover:text-pink-300 transition-colors"
            >
              <Instagram size={20} />
              <span className="font-semibold">@raymundoindustria</span>
            </a>
          </div>

          <p className="text-gray-400 text-sm">
            Río Gallegos, Santa Cruz - Argentina
          </p>
          <p className="text-gray-500 text-xs mt-4">
            © 2026 raymundoindustria. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
