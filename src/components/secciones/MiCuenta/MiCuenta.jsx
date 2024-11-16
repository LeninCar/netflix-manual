import React, { useState } from 'react'; 
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Estilos básicos de Swiper
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules"; // Módulos adicionales

const MiCuenta = () => {
  const [selectedSubsection, setSelectedSubsection] = useState('subinicio1');

  return (
    <div className="relative text-white">
      {/* Navbar horizontal */}
      <nav className="flex justify-around items-center bg-stone-900 border-b border-gray-700 sticky top-0 w-full z-10">
        {[
          { id: "subinicio1", label: "Introducción" },
          { id: "subinicio2", label: "Características" },
          { id: "subinicio3", label: "Beneficios" },
          { id: "subinicio4", label: "Video Introducción" },
        ].map((section) => (
          <button
            key={section.id}
            className={`py-4 px-6 w-full text-center ${
              selectedSubsection === section.id
                ? "bg-black text-primary font-bold"
                : "bg-stone-900 hover:bg-stone-700 text-gray-300"
            }`}
            onClick={() => setSelectedSubsection(section.id)}
          >
            {section.label}
          </button>
        ))}
      </nav>

      {/* Contenido dinámico */}
      <div className="p-6">
        {selectedSubsection === "subinicio1" && (
          <div>
            <p className="text-left text-lg font-medium mb-4">
              Bienvenido a <span className="font-bold text-primary">Netflix</span>, la plataforma de streaming más popular del mundo, con una vasta biblioteca de películas, series y documentales.
            </p>
            {/* Carrusel de imágenes */}
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
                  alt="Imagen 1"
                  className="rounded-lg object-contain w-full h-[200px] mx-auto"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/imgs/2.jpg"
                  alt="Imagen 2"
                  className="rounded-lg object-contain w-full h-[200px] mx-auto"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/imgs/3.jpg"
                  alt="Imagen 3"
                  className="rounded-lg object-contain w-full h-[200px] mx-auto"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        )}

        {selectedSubsection === "subinicio2" && (
          <div className="mt-4">
            <p className="text-xl font-bold mb-4">Características clave de Netflix:</p>
            <ul className="space-y-2 list-disc pl-6">
              <li className="flex items-center gap-2">

                Acceso ilimitado a contenido en HD y 4K.
              </li>
              <li className="flex items-center gap-2">

                Recomendaciones personalizadas.
              </li>
              <li className="flex items-center gap-2">
   
                Ver en múltiples dispositivos.
              </li>
              <li className="flex items-center gap-2">

                Opción de descargar contenido para verlo sin conexión.
              </li>
            </ul>
          </div>
        )}

        {selectedSubsection === "subinicio3" && (
          <div className="mt-4 text-left">
            <p className="text-lg font-medium text-white mb-4">
              Beneficios de usar <span className="font-bold text-primary">Netflix</span>:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-white">
              <li>Variedad de contenido para todos los gustos.</li>
              <li>Posibilidad de ver desde cualquier dispositivo compatible.</li>
              <li>Sin comerciales.</li>
              <li>Ver en cualquier momento y lugar.</li>
            </ul>
          </div>
        )}

        {selectedSubsection === "subinicio4" && (
          <div className="mt-4 text-center">
            <p className="text-left text-lg font-medium text-white mb-4">
              Disfruta de un video introductorio sobre <span className="font-bold text-primary">Netflix</span>:
            </p>
            <div className="video-container" style={{ maxWidth: '800px', margin: '0 auto' }}>
              <iframe
                width="100%"
                height="250"
                src="https://www.youtube.com/embed/WNCiKqe-Jww"
                title="Video Introducción a Netflix"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded shadow-lg"
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MiCuenta;
