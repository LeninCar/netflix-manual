import React, { useState } from 'react'; 
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Estilos básicos de Swiper
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules"; // Módulos adicionales


const MiCuenta = () => {
  const [selectedSubsection, setSelectedSubsection] = useState('subinicio1');

  return (
    <div>
      <div className="flex justify-start gap-4 mb-6">
        <button
          className={`py-2 px-4 rounded-md ${selectedSubsection === "subinicio1" ? "bg-black text-white" : "bg-primary text-white hover:bg-primary-dark"}`}
          onClick={() => setSelectedSubsection("subinicio1")}
        >
          Introducción
        </button>
        <button
          className={`py-2 px-4 rounded-md ${selectedSubsection === "subinicio2" ? "bg-black text-white" : "bg-primary text-white hover:bg-primary-dark"}`}
          onClick={() => setSelectedSubsection("subinicio2")}
        >
          Características
        </button>
        <button
          className={`py-2 px-4 rounded-md ${selectedSubsection === "subinicio3" ? "bg-black text-white" : "bg-primary text-white hover:bg-primary-dark"}`}
          onClick={() => setSelectedSubsection("subinicio3")}
        >
          Beneficios
        </button>
        <button
          className={`py-2 px-4 rounded-md ${selectedSubsection === "subinicio4" ? "bg-black text-white" : "bg-primary text-white hover:bg-primary-dark"}`}
          onClick={() => setSelectedSubsection("subinicio4")}
        >
          Video Introducción
        </button>
      </div>

      {/* Resto del contenido */}
      {selectedSubsection === "subinicio1" && (
        <div className="mt-4">
          <p className="text-left text-lg font-medium text-white mb-4">
            Bienvenido a <span className="font-bold text-primary">Netflix</span>, la plataforma de streaming más popular del mundo, con una vasta biblioteca de películas, series y documentales.
          </p>
          {/* Carrusel de imágenes */}
          <Swiper
            modules={[Navigation, Pagination]} // Pasar los módulos a Swiper
            navigation
            pagination={{ clickable: true }}
            loop={true}
            autoplay={{ delay: 3000 }} // Establecer el tiempo entre cada cambio de diapositiva (en milisegundos)
            slidesPerView={1} // Mostrar solo una imagen a la vez
            className="mt-6 max-w-full overflow-hidden" // Ajustar el tamaño del carrusel
          >
            <SwiperSlide>
              <img
                src="/imgs/1.jpg"
                alt="Imagen 1"
                className="rounded-lg object-contain w-full h-[200px] mx-auto" // Ajustar imagen con object-contain
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/imgs/2.jpg"
                alt="Imagen 2"
                className="rounded-lg object-contain w-full h-[200px] mx-auto" // Ajustar imagen con object-contain
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/imgs/3.jpg"
                alt="Imagen 3"
                className="rounded-lg object-contain w-full h-[200px] mx-auto" // Ajustar imagen con object-contain
              />
            </SwiperSlide>
          </Swiper>
        </div>
      )}

      {/* Otras subsecciones */}
      {selectedSubsection === "subinicio2" && (
        <div className="mt-4">
          <p className="text-xl font-bold mb-4">Características clave de Netflix:</p>
          <ul className="space-y-2 list-disc pl-6">
            <li className="flex items-center gap-2">
              <img src="/icons/hd-icon.png" alt="HD icon" className="w-6 h-6" />
              Acceso ilimitado a contenido en HD y 4K.
            </li>
            <li className="flex items-center gap-2">
              <img src="/icons/recommendations-icon.png" alt="Recomendaciones icon" className="w-6 h-6" />
              Recomendaciones personalizadas.
            </li>
            <li className="flex items-center gap-2">
              <img src="/icons/devices-icon.png" alt="Devices icon" className="w-6 h-6" />
              Ver en múltiples dispositivos.
            </li>
            <li className="flex items-center gap-2">
              <img src="/icons/download-icon.png" alt="Download icon" className="w-6 h-6" />
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
  );
};

export default MiCuenta;
