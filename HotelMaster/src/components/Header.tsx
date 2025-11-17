import React, { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">HM</span>
            </div>
            <span className="ml-2 text-xl font-bold text-gray-800">HotelMaster</span>
          </div>

          {/* Menú de navegación para desktop */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition duration-300">Inicio</a>
            <a href="#habitaciones" className="text-gray-700 hover:text-blue-600 font-medium transition duration-300">Habitaciones</a>
            <a href="#servicios" className="text-gray-700 hover:text-blue-600 font-medium transition duration-300">Servicios</a>
            <a href="#contacto" className="text-gray-700 hover:text-blue-600 font-medium transition duration-300">Contacto</a>
          </nav>

          {/* Botones de acción */}
          <div className="hidden md:flex space-x-4">
            <button className="px-4 py-2 text-gray-700 font-medium hover:text-blue-600 transition duration-300">
              Iniciar Sesión
            </button>
            <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-full hover:from-blue-600 hover:to-purple-700 transition duration-300 shadow-md">
              Reservar
            </button>
          </div>

          {/* Botón menú móvil */}
          <button 
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Menú móvil */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Inicio</a>
              <a href="#habitaciones" className="text-gray-700 hover:text-blue-600 font-medium">Habitaciones</a>
              <a href="#servicios" className="text-gray-700 hover:text-blue-600 font-medium">Servicios</a>
              <a href="#contacto" className="text-gray-700 hover:text-blue-600 font-medium">Contacto</a>
              <div className="flex flex-col space-y-2 pt-2">
                <button className="px-4 py-2 text-gray-700 font-medium border border-gray-300 rounded-md hover:bg-gray-50">
                  Iniciar Sesión
                </button>
                <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-md hover:from-blue-600 hover:to-purple-700">
                  Reservar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;