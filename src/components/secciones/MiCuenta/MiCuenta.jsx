import React, { useState } from 'react'; 
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Estilos básicos de Swiper
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules"; // Módulos adicionales
import crearPerfil from "../../../assets/gifs/Login.gif";
import Registrar from "../../../assets/videos/Registrarse.mp4";
import suscribeteImage from '../../../assets/videos/Suscribete.mp4';
import Intro from "../../../assets/videos/Introduccion.mp4";

const MiCuenta = () => {
  const [selectedSubsection, setSelectedSubsection] = useState('subinicio1');

  return (
    <div className="relative text-white font-roboto">
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
            <h2 className="text-2xl font-bold text-white mb-2">Bienvenido a Netflix</h2>

            <div className="p-5">
  <hr className="border-t-1 border-white" />
</div>              <ol className="list-decimal list-inside text-left space-y-4 text-lg text-gray-300">
              La plataforma de streaming líder a nivel mundial con una vasta biblioteca de películas, series y contenido original exclusivo.
              </ol>
              <ol className="list-decimal list-inside text-left space-y-4 text-lg text-gray-300">
                Disfruta de tus títulos favoritos en HD y 4K, accede a producciones galardonadas como <i>Stranger Things</i> y <i>The Crown</i>, y personaliza tu experiencia con recomendaciones inteligentes.
              </ol>
              <ol className="list-decimal list-inside text-left space-y-4 text-lg text-gray-300">
                Disponible en dispositivos móviles, televisores y computadoras, Netflix transforma cómo ves entretenimiento, ofreciéndote opciones flexibles para todos los gustos.
              </ol>
            </div>

            {/* Contenedor del video con margen solo aplicado al video */}
            <div className="w-full md:w-1/2 flex justify-center mt-8">
              <div className="w-75 h-60 overflow-hidden rounded-lg shadow-lg mt-20">
                <video
                  className="w-full h-full object-cover"
                  autoPlay={true}
                  muted={true}
                  loop={true}
                >
                  <source src={Intro} type="video/mp4" />
                </video>
              </div>
            </div>

            <div className="w-full md:w-full px-4">

            <div className="p-3">
  <hr className="border-t-1 border-white" />
</div>
  <Swiper
    modules={[Pagination]} // Solo necesitamos el módulo de paginación
    pagination={{ clickable: true }}  // Paginación para controlar los puntos
    autoplay={{
      delay: 3000, // El carrusel se moverá automáticamente cada 3 segundos
      disableOnInteraction: false, // Para que no se detenga cuando el usuario interactúa con el carrusel
    }}
    loop={true} // Hace que el carrusel sea infinito
    slidesPerView={1}
    className="mt-20 max-w-full overflow-hidden relative"
  >
    <SwiperSlide>
      <div className="relative group">
        <img
          src="/imgs/1.jpg"
          alt="Imagen de una serie popular en Netflix"
          className="rounded-lg object-cover w-full h-[350px] mx-auto transition-transform duration-700 ease-in-out transform group-hover:scale-105 shadow-lg group-hover:shadow-2xl"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>
      </div>
    </SwiperSlide>

    <SwiperSlide>
      <div className="relative group">
        <img
          src="/imgs/2.jpg"
          alt="Imagen de un documental exclusivo de Netflix"
          className="rounded-lg object-cover w-full h-[350px] mx-auto transition-transform duration-700 ease-in-out transform group-hover:scale-105 shadow-lg group-hover:shadow-2xl"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>
      </div>
    </SwiperSlide>

    <SwiperSlide>
      <div className="relative group">
        <img
          src="/imgs/3.jpg"
          alt="Imagen de una película de Netflix"
          className="rounded-lg object-cover w-full h-[350px] mx-auto transition-transform duration-700 ease-in-out transform group-hover:scale-105 shadow-lg group-hover:shadow-2xl"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>
      </div>
    </SwiperSlide>
  </Swiper>
</div>
          </div>
        )}

        {selectedSubsection === "subinicio2" && (
          <div className="mt-4">
            <h2 className="text-2xl font-bold text-white mb-2">Guia para registrarse</h2>
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
            <h2 className="text-2xl font-bold text-white mb-2">Guia para iniciar sesión</h2>
            <hr className="border-t-2 border-white mb-4" />
            <div className="flex flex-col md:flex-row items-start justify-between">
              <div className="text-left md:w-1/2 space-y-4">
                <ol className="list-decimal pl-5 space-y-2 text-white">



                <li>Abre la aplicación de Netflix o visita:
                    <a href="https://www.netflix.com" target="_blank" rel="noopener noreferrer" className="font-bold text-primary">
                      www.netflix.com
                    </a>
                  </li>


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
          
            <h2 className="text-2xl font-bold text-white mb-2">Accede al Mejor Contenido Exclusivo en Netflix</h2>

            <hr className="border-t-2 border-white mb-4" />
            <div className="flex flex-col md:flex-row items-start justify-between">
              <div className="text-left md:w-1/2 space-y-4">
                <p className="text-xl font-medium text-white">Suscríbete a Netflix y disfruta de:</p>
                <ul className="list-disc pl-5 text-white">


                <ol className="list-decimal list-inside text-left space-y-4 text-lg text-gray-300">
            
                  <li>Acceso ilimitado a películas, series y documentales exclusivos.</li>
                  <li>Contenido en 4K y HD en todos los dispositivos compatibles.</li>
                  <li>Sin anuncios, solo entretenimiento de calidad.</li>
                  <li>Disfruta donde quieras, cuando quieras.</li>
                  <a href="https://www.netflix.com/signup" className="font-bold text-primary">
                    ¡Haz clic aquí para suscribirte!
                  </a>
                  </ol>
                </ul>
              </div>
              <div className="flex justify-center items-center md:w-1/2 mt-4 md:mt-0">
                <video
                  className="w-full h-auto object-cover rounded-lg shadow-lg"
                  autoPlay={true}
                  muted={true}
                  loop={true}
                >
                  <source src={suscribeteImage} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MiCuenta;
