import React from "react";
import Header from "../components/Header";
import '../index.css'

function Home() {
  // Datos de habitaciones más pedidas
  const habitacionesPopulares = [
    {
      id: 1,
      nombre: "Suite Presidencial",
      descripcion: "Nuestra suite más lujosa con vista panorámica y jacuzzi privado",
      imagen: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      estrellas: 5,
      precio: "$450/noche",
      caracteristicas: ["Jacuzzi", "Vista al mar", "Desayuno incluido", "Minibar"]
    },
    {
      id: 2,
      nombre: "Habitación Ejecutiva",
      descripcion: "Ideal para viajes de negocios con escritorio y sala de reuniones",
      imagen: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      estrellas: 4,
      precio: "$280/noche",
      caracteristicas: ["Escritorio", "WiFi premium", "Cafetera", "Servicio de habitación"]
    },
    {
      id: 3,
      nombre: "Habitación Familiar",
      descripcion: "Amplia habitación perfecta para familias con niños",
      imagen: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      estrellas: 4,
      precio: "$320/noche",
      caracteristicas: ["Dos camas dobles", "Zona de juegos", "Microondas", "TV familiar"]
    },
    {
      id: 4,
      nombre: "Habitación Deluxe",
      descripcion: "Comodidad y estilo en un espacio moderno y acogedor",
      imagen: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      estrellas: 4,
      precio: "$210/noche",
      caracteristicas: ["Balcón privado", "TV Smart", "Cafetera", "Baño de lujo"]
    }
  ];

  // Datos del equipo directivo
  const equipoDirectivo = [
    {
      id: 1,
      nombre: "María González",
      puesto: "Directora General",
      imagen: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      experiencia: "15+ años en hotelería de lujo",
      descripcion: "Apasionada por crear experiencias memorables para nuestros huéspedes."
    },
    {
      id: 2,
      nombre: "Carlos Rodríguez",
      puesto: "Director de Operaciones",
      imagen: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      experiencia: "12+ años en gestión hotelera",
      descripcion: "Comprometido con la excelencia operativa y el servicio al cliente."
    },
    {
      id: 3,
      nombre: "Ana Martínez",
      puesto: "Directora de Marketing",
      imagen: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      experiencia: "10+ años en marketing turístico",
      descripcion: "Especialista en posicionamiento de marcas de lujo en el sector hotelero."
    }
  ];

  // Datos de departamentos y personal
  const departamentos = [
    {
      id: 1,
      nombre: "Recepción y Concierge",
      personal: 12,
      descripcion: "Nuestro equipo de recepción está disponible 24/7 para asistirle en cualquier necesidad.",
      icono: "🎯"
    },
    {
      id: 2,
      nombre: "Servicio de Habitaciones",
      personal: 25,
      descripcion: "Personal dedicado a mantener la excelencia en cada una de nuestras habitaciones.",
      icono: "🏨"
    },
    {
      id: 3,
      nombre: "Gastronomía",
      personal: 18,
      descripcion: "Chefs y personal de restaurante comprometidos con experiencias culinarias excepcionales.",
      icono: "🍽️"
    },
    {
      id: 4,
      nombre: "Limpieza y Mantenimiento",
      personal: 30,
      descripcion: "Garantizamos estándares de limpieza y mantenimiento de primer nivel.",
      icono: "✨"
    }
  ];

  // Estadísticas de la empresa
  const estadisticas = [
    { numero: "15", texto: "Años de Experiencia" },
    { numero: "50K+", texto: "Huéspedes Satisfechos" },
    { numero: "120", texto: "Habitaciones Disponibles" },
    { numero: "98%", texto: "Tasa de Satisfacción" }
  ];

  // Valores corporativos
  const valores = [
    {
      titulo: "Excelencia",
      descripcion: "Buscamos la perfección en cada detalle para superar las expectativas de nuestros huéspedes.",
      icono: "⭐"
    },
    {
      titulo: "Innovación",
      descripcion: "Implementamos las últimas tendencias en hospitalidad para ofrecer experiencias únicas.",
      icono: "💡"
    },
    {
      titulo: "Sostenibilidad",
      descripcion: "Comprometidos con prácticas hoteleras responsables y respetuosas con el medio ambiente.",
      icono: "🌱"
    },
    {
      titulo: "Trabajo en Equipo",
      descripcion: "Valoramos la colaboración y el desarrollo profesional de cada miembro de nuestro staff.",
      icono: "🤝"
    }
  ];

  // Función para renderizar estrellas
  const renderEstrellas = (numero) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg 
        key={index} 
        className={`w-5 h-5 ${index < numero ? 'text-yellow-400' : 'text-gray-300'}`} 
        fill="currentColor" 
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Bienvenido a HotelMaster</h1>
            <p className="text-xl mb-8 opacity-90">Experimente el lujo y la comodidad en nuestro exclusivo hotel. Donde cada detalle está pensado para su bienestar.</p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="px-8 py-3 bg-white text-blue-600 font-bold rounded-full hover:bg-gray-100 transition duration-300 shadow-lg">
                Ver Habitaciones
              </button>
              <button className="px-8 py-3 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-blue-600 transition duration-300">
                Contactar Ahora
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Habitaciones Populares */}
      <section id="habitaciones" className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Habitaciones Más Pedidas</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Descubre nuestras habitaciones más populares, diseñadas para ofrecerte la máxima comodidad durante tu estancia.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {habitacionesPopulares.map((habitacion) => (
              <div key={habitacion.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img 
                    src={habitacion.imagen} 
                    alt={habitacion.nombre}
                    className="w-full h-48 object-cover transition duration-500 hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-md">
                    <span className="font-bold text-blue-600">{habitacion.precio}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-800">{habitacion.nombre}</h3>
                    <div className="flex">
                      {renderEstrellas(habitacion.estrellas)}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 text-sm">{habitacion.descripcion}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-700 mb-2">Características:</h4>
                    <div className="flex flex-wrap gap-2">
                      {habitacion.caracteristicas.map((caracteristica, index) => (
                        <span key={index} className="bg-blue-50 text-blue-600 text-xs px-2 py-1 rounded">
                          {caracteristica}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition duration-300">
                    Reservar Ahora
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección Sobre Nosotros */}
      <section id="nosotros" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Sobre HotelMaster</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Con más de 15 años de excelencia en el sector hotelero, HotelMaster se ha consolidado 
              como referente en hospitalidad de lujo, combinando tradición e innovación para crear 
              experiencias únicas e inolvidables.
            </p>
          </div>

          {/* Estadísticas */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {estadisticas.map((estadistica, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{estadistica.numero}</div>
                <div className="text-gray-600 font-medium">{estadistica.texto}</div>
              </div>
            ))}
          </div>

          {/* Misión y Visión */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl mb-4">
                🎯
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Nuestra Misión</h3>
              <p className="text-gray-600">
                Ofrecer experiencias hoteleras excepcionales mediante servicios personalizados, 
                instalaciones de primera categoría y un equipo comprometido que supere las expectativas 
                de cada huésped, creando momentos memorables que perduren en el tiempo.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white text-xl mb-4">
                🔭
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Nuestra Visión</h3>
              <p className="text-gray-600">
                Ser reconocidos como el hotel líder en hospitalidad de lujo a nivel internacional, 
                innovando constantemente en servicios sostenibles mientras mantenemos nuestra esencia 
                de calidez humana y atención meticulosa al detalle.
              </p>
            </div>
          </div>

          {/* Valores Corporativos */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">Nuestros Valores</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {valores.map((valor, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <div className="text-3xl mb-4">{valor.icono}</div>
                  <h4 className="text-xl font-bold text-gray-800 mb-3">{valor.titulo}</h4>
                  <p className="text-gray-600 text-sm">{valor.descripcion}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Equipo Directivo */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">Nuestro Equipo Directivo</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {equipoDirectivo.map((miembro) => (
                <div key={miembro.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={miembro.imagen} 
                      alt={miembro.nombre}
                      className="w-full h-full object-cover transition duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-800 mb-2">{miembro.nombre}</h4>
                    <p className="text-blue-600 font-semibold mb-2">{miembro.puesto}</p>
                    <p className="text-gray-500 text-sm mb-3">{miembro.experiencia}</p>
                    <p className="text-gray-600 text-sm">{miembro.descripcion}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Departamentos y Personal */}
          <div>
            <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">Nuestro Equipo</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {departamentos.map((depto) => (
                <div key={depto.id} className="bg-gradient-to-br from-blue-500 to-purple-600 text-white p-6 rounded-xl shadow-lg">
                  <div className="text-3xl mb-4">{depto.icono}</div>
                  <h4 className="text-xl font-bold mb-3">{depto.nombre}</h4>
                  <div className="flex items-center mb-3">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
                    </svg>
                    <span className="font-semibold">{depto.personal} profesionales</span>
                  </div>
                  <p className="text-blue-100 text-sm">{depto.descripcion}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Sección de Contacto */}
      <section id="contacto" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="md:flex">
              {/* Información de contacto */}
              <div className="md:w-2/5 bg-gradient-to-b from-blue-600 to-purple-700 text-white p-8">
                <h2 className="text-2xl font-bold mb-6">Contáctanos</h2>
                <p className="mb-6">Estamos aquí para ayudarte. No dudes en ponerte en contacto con nosotros para cualquier consulta o reserva.</p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-white bg-opacity-20 p-2 rounded-full mr-3">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold">Dirección</h3>
                      <p>Av. Principal 123, Ciudad Turística</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-white bg-opacity-20 p-2 rounded-full mr-3">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold">Teléfono</h3>
                      <p>+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-white bg-opacity-20 p-2 rounded-full mr-3">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p>info@hotelmaster.com</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="font-semibold mb-3">Síguenos en:</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="bg-white bg-opacity-20 p-2 rounded-full hover:bg-opacity-30 transition duration-300">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                      </svg>
                    </a>
                    <a href="#" className="bg-white bg-opacity-20 p-2 rounded-full hover:bg-opacity-30 transition duration-300">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                    <a href="#" className="bg-white bg-opacity-20 p-2 rounded-full hover:bg-opacity-30 transition duration-300">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Formulario de contacto */}
              <div className="md:w-3/5 p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Envíanos un Mensaje</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="nombre" className="block text-gray-700 font-medium mb-2">Nombre</label>
                      <input 
                        type="text" 
                        id="nombre" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="asunto" className="block text-gray-700 font-medium mb-2">Asunto</label>
                    <input 
                      type="text" 
                      id="asunto" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Asunto del mensaje"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="mensaje" className="block text-gray-700 font-medium mb-2">Mensaje</label>
                    <textarea 
                      id="mensaje" 
                      rows="5"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Escribe tu mensaje aquí..."
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition duration-300 shadow-md"
                  >
                    Enviar Mensaje
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">HM</span>
                </div>
                <span className="ml-2 text-lg font-bold">HotelMaster</span>
              </div>
              <p className="mt-2 text-gray-400 text-sm">Tu destino de lujo y confort</p>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">Términos y Condiciones</a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">Política de Privacidad</a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">FAQ</a>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-6 pt-6 text-center text-gray-400 text-sm">
            <p>© 2023 HotelMaster. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;