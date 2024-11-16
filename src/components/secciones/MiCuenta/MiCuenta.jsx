import React, { useState } from 'react'; 
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Estilos básicos de Swiper
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules"; // Módulos adicionales
import crearPerfil from "../../../assets/gifs/Login.gif";
import Registrar from "../../../assets/videos/Registrarse.mp4";
import suscribeteImage from '../../../assets/Suscribete.jpg';

const MiCuenta = () => {
  const [selectedSubsection, setSelectedSubsection] = useState('subinicio1');

  return (
    <div className="relative text-white">
      {/* Navbar horizontal */}
      <nav className="flex justify-around items-center bg-stone-900 border-b border-gray-700 sticky top-0 w-full z-10">
        {[ 
          { id: "subinicio1", label: "Introducción" },
          { id: "subinicio2", label: "Registro" },
          { id: "subinicio3", label: "Inicio de sesión" },
          { id: "subinicio4", label: "Suscríbete" },
        ].map((section) => (
          <button
            key={section.id}
            className={`py-4 px-6 w-full text-center ${selectedSubsection === section.id ? "bg-black text-primary font-bold" : "bg-stone-900 hover:bg-stone-700 text-gray-300"}`}
            onClick={() => setSelectedSubsection(section.id)}
          >
            {section.label}
          </button>
        ))}
      </nav>

      {/* Contenido dinámico */}
      <div className="p-6">

        {selectedSubsection === "subinicio1" && (
          <div className="flex flex-wrap justify-between items-center">
            {/* Información sobre Netflix */}
            <div className="w-full md:w-1/2 mb-6 md:mb-0">
              <h1 className="text-2xl font-bold text-primary mb-4">Bienvenido a <span className="font-bold">Netflix</span></h1>
              <div className="border-b-2 border-white mb-6"></div>

              <p className="text-left text-lg font-medium mb-4">
                La plataforma de streaming líder a nivel mundial con una vasta biblioteca de películas, series y contenido original exclusivo.
              </p>
              <p className="text-left text-md mb-6">
                Disfruta de tus títulos favoritos en HD y 4K, accede a producciones galardonadas como <i>Stranger Things</i> y <i>The Crown</i>, y personaliza tu experiencia con recomendaciones inteligentes.
              </p>
              <p className="text-left text-md">
                Disponible en dispositivos móviles, televisores y computadoras, Netflix transforma cómo ves entretenimiento, ofreciéndote opciones flexibles para todos los gustos.
              </p>
            </div>

            {/* Carrusel de imágenes */}
            <div className="w-full md:w-1/2">
              <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                loop={true}
                slidesPerView={1}
                className="mt-6 max-w-full overflow-hidden"
              >
                <SwiperSlide>
                  <img
                    src="/imgs/1.jpg"
                    alt="Imagen de una serie popular en Netflix"
                    className="rounded-lg object-contain w-full h-[200px] mx-auto"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="/imgs/2.jpg"
                    alt="Imagen de un documental exclusivo de Netflix"
                    className="rounded-lg object-contain w-full h-[200px] mx-auto"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="/imgs/3.jpg"
                    alt="Imagen de una película de Netflix"
                    className="rounded-lg object-contain w-full h-[200px] mx-auto"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        )}

        {selectedSubsection === "subinicio2" && (
          <div className="mt-4">
            <p className="text-xl font-bold text-center mb-4">Guía para registrarse</p>
            <hr className="border-t-2 border-white mb-6" />
            <div className="flex flex-col md:flex-row items-start justify-between">
              <div className="text-left md:w-1/2 space-y-4">
                <ol className="list-decimal pl-5 space-y-2 text-white">
                  <li>Visita la página oficial: 
                    <a href="https://www.netflix.com" target="_blank" rel="noopener noreferrer" className="font-bold text-primary">
                      www.netflix.com
                    </a>
                  </li>
                  <li>Haz clic en el botón <span className="font-bold">"Comienza tu prueba gratuita"</span> o <span className="font-bold">"Regístrate ahora"</span>.</li>
                  <li>Elige un plan que se ajuste a tus necesidades (Básico, Estándar o Premium).</li>
                  <li>Ingresa tu correo electrónico y crea una contraseña segura.</li>
                  <li>Agrega un método de pago válido (tarjeta de crédito, débito o PayPal).</li>
                  <li>¡Confirma tu registro y empieza a disfrutar del contenido de Netflix!</li>
                </ol>
              </div>
              <div className="flex justify-center items-center md:w-1/2 mt-4 md:mt-0">
                <video
                  className="rounded-lg shadow-lg w-full h-auto object-cover max-h-[740px]"
                  autoPlay={true}
                  muted={true}
                  loop={true}
                >
                  <source src={Registrar} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        )}

        {selectedSubsection === "subinicio3" && (
          <div className="mt-4">
            <p className="text-lg font-medium text-white mb-2 text-center">Guía para iniciar sesión</p>
            <hr className="border-t-2 border-white mb-4" />
            <div className="flex flex-col md:flex-row items-start justify-between">
              <div className="text-left md:w-1/2 space-y-4">
                <ol className="list-decimal pl-5 space-y-2 text-white">
                  <li>Abre la aplicación de Netflix o visita <span className="font-bold text-primary">www.netflix.com</span></li>
                  <li>Haz clic en el botón <span className="font-bold">"Iniciar sesión"</span>, ubicado en la esquina superior derecha</li>
                  <li>Ingresa tu correo electrónico y contraseña registrados</li>
                  <li>Haz clic en el botón <span className="font-bold">"Iniciar sesión"</span></li>
                  <li>¡Disfruta del contenido disponible en tu cuenta!</li>
                </ol>
              </div>
              <div className="flex justify-center items-center md:w-1/2 mt-4 md:mt-0">
                <img src={crearPerfil} alt="Guía para iniciar sesión" className="w-full max-w-[500px] h-auto object-contain rounded-sm" />
              </div>
            </div>
          </div>
        )}

        {selectedSubsection === "subinicio4" && (
          <div className="mt-4">
            <p className="text-lg font-medium text-white mb-2 text-center">Disfruta de Netflix</p>
            <hr className="border-t-2 border-white mb-4" />
            <div className="flex flex-col md:flex-row items-start justify-between">
              <div className="text-left md:w-1/2 space-y-4 text-white">
                <p className="text-lg font-medium mb-4">
                  Únete a millones de usuarios que disfrutan de contenido ilimitado como series, películas y documentales. Como miembro de Netflix, pagarás una vez al mes sin contratos ni cargos por cancelación. Puedes cambiar o cancelar tu plan en cualquier momento.
                </p>
                <p className="text-lg font-medium mb-4"><strong>Cómo suscribirse:</strong></p>
                <p className="text-md mb-4"><strong>En Android:</strong> Visita <a href="https://netflix.com/signup" target="_blank" className="text-primary">netflix.com/signup</a> desde un navegador o usa la app de Netflix.</p>
                <p className="text-md mb-4"><strong>En Computadora:</strong> Visita <a href="https://netflix.com/signup" target="_blank" className="text-primary">netflix.com/signup</a>, selecciona un plan y crea tu cuenta.</p>
                <p className="text-md mb-4"><strong>En iPhone o iPad:</strong> Visita <a href="https://netflix.com/signup" target="_blank" className="text-primary">netflix.com/signup</a> y descarga la app de Netflix para iniciar sesión.</p>
                <p className="text-md mb-4"><strong>En TV o Dispositivos de Streaming:</strong> Abre la app de Netflix y selecciona el plan.</p>
              </div>
              <div className="flex justify-center items-center md:w-1/2 mt-4 md:mt-0">
                <img
                  src={suscribeteImage}
                  alt="Promoción de Suscripción"
                  className="rounded-lg object-cover w-full h-[300px] md:h-[500px] mx-auto"
                />
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default MiCuenta;
