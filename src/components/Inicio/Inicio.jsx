import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Estilos básicos de Swiper
import "swiper/css/navigation";
import "swiper/css/pagination";
import './inicio.css';
import { Navigation, Pagination } from "swiper/modules"; // Módulos adicionales

export function Inicio() {
  const [selectedOption, setSelectedOption] = useState("inicio");
  const [selectedSubsection, setSelectedSubsection] = useState(null);
  const options = ["inicio", "registro", "suscripciones", "pagos"];

  const renderContent = () => {
    switch (selectedOption) {
      case "inicio":
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
            {selectedSubsection === "subinicio1" && (
              <div className="mt-4">
                <p className="text-left text-lg font-medium text-white mb-4">
                  Bienvenido a <span className="font-bold text-primary">Netflix</span>, la plataforma de streaming más popular del mundo, con una vasta biblioteca de películas, series y documentales.
                </p>
                {/* Carrusel de imágenes */}
                <Swiper
                  modules={[Navigation, Pagination]}
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
      default:
        return <div>Contenido no disponible.</div>;
    }
  };

  return (
    <div className="grid grid-cols-1 gap-y-2 bg-stone-800 overflow-hidden">
      <section className="relative flex flex-col lg:flex-row justify-center items-center overflow-hidden lg:h-screen w-screen text-center">
        <img
          className="absolute h-auto w-screen transform scale-110 -translate-y-10"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a73c4363-1dcd-4719-b3b1-3725418fd91d/96956889-cd58-48f4-930e-f43fad686c0d/US-es-20231016-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="Background"
        />
        <div className="absolute top-0 right-0 bottom-0 left-0 h-screen w-screen bg-gradient-to-t from-black via-black60 to-black opacity-50" />
        <div className="z-20 flex flex-col lg:flex-row items-center text-white w-full lg:px-32 justify-center">
        <div className="bg-stone-900 bg-opacity-80 p-6 rounded-lg mt-10 lg:mt-0 lg:w-1/4 w-full lg:h-auto min-h-[400px]" style={{ transform: 'translateX(-10px)' }}>


            <h3 className="text-xl font-bold mb-4">Selecciona una opción:</h3>
            <ul className="space-y-2">
              {options.map((option) => (
                <li
                  key={option}
                  className={`cursor-pointer hover:text-gray-400 ${selectedOption === option ? "text-primary" : ""}`}
                  onClick={() => {
                    setSelectedOption(option);
                    setSelectedSubsection(null); // Reiniciar subsección al cambiar de sección
                  }}
                >
                  {option.charAt(0).toUpperCase() + option.slice(1)}
                </li>
              ))}
            </ul>
          </div>
          <div
            className="bg-stone-900 bg-opacity-90 p-12 rounded-lg lg:w-3/4 w-full mt-10 lg:mt-0"
            style={{ height: "500px", maxHeight: "500px", overflowY: "auto" }}
          >
            {renderContent()}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Inicio;
