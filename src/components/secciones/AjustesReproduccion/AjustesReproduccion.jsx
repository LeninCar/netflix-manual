import React, { useState } from 'react'; 
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Estilos básicos de Swiper
import "swiper/css/navigation";
import "swiper/css/pagination";
import VideoCalidad from "../../../assets/gif-h/VideoCalidad.mp4"; // Ruta al video
import VideoSubtitulos from "../../../assets/gif-h/VideoSubtitulos.mp4"; // Ruta al video

import { Navigation, Pagination } from "swiper/modules"; // Módulos adicionales

const AjustesReproduccion = () => {
  const [selectedSubsection, setSelectedSubsection] = useState('subinicio1');

  return (
    <div className="relative text-white">
      {/* Navbar horizontal */}
      <nav className="flex justify-around items-center bg-stone-900 border-b border-gray-700 sticky top-0 w-full z-10">
        {[
          { id: "subinicio1", label: "Audio y Subtítulos" },
          { id: "subinicio2", label: "Calidad de Video" },
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
            {/* Título con línea divisoria */}
            <div className="flex flex-col items-center mb-6">
              <h2 className="text-2xl font-bold text-white mb-2">Audio y Subtitulos</h2>
              <hr className="w-full border-t-2 border-gray-500" />
            </div>
            {/* Contenedor de pasos y Video */}
            <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 mt-6">
              {/* Lista de pasos (20% de la izquierda) */}
              <div className="col-span-1 lg:col-span-2 flex flex-col justify-start items-start space-y-6">
                <p className="text-xl font-bold">Pasos:</p>
                <ol className="list-decimal list-inside text-left space-y-4 text-lg text-gray-300">
                <li>Inicia sesión en tu cuenta de Netflix.</li>
              <li>Selecciona la película o serie que deseas ver.</li>
              <li>En el menú de reproducción, busca y haz clic en el símbolo de dialogo.</li>
              <li>Desde este menú, puedes seleccionar subtítulos o cambiar el idioma del audio según tu preferencia.</li>
              <li>Escoge el idioma deseado tanto para los subtítulos como para el audio.</li>
              <li>Disfruta tu contenido con la configuración personalizada.</li>

                </ol>
              </div>

              {/* Video explicativo (80% de la derecha) */}
              <div className="col-span-1 lg:col-span-8 flex justify-center items-center">
                <video
                  src={VideoSubtitulos}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="rounded-lg shadow-lg w-full h-auto object-contain"
                  controls={false} // Quita los controles del video
                  onContextMenu={(e) => e.preventDefault()} // Evita menú contextual
                />
              </div>
            </div>
          </div>
        )}

        {selectedSubsection === "subinicio2" && (
          <div>
          {/* Título con línea divisoria */}
          <div className="flex flex-col items-center mb-6">
            <h2 className="text-2xl font-bold text-white mb-2">Calidad de Video</h2>
            <hr className="w-full border-t-2 border-gray-500" />
          </div>
          {/* Contenedor de pasos y Video */}
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 mt-6">
            {/* Lista de pasos (20% de la izquierda) */}
            <div className="col-span-1 lg:col-span-2 flex flex-col justify-start items-start space-y-6">
              <p className="text-xl font-bold">Pasos:</p>
              <ol className="list-decimal list-inside text-left space-y-4 text-lg text-gray-300">
              <li>Inicia sesión en tu cuenta de Netflix.</li>
              <li>Dirígete a la sección "Cuenta".</li>
              <li>Haz clic en "Editar Configuración".</li>
              <li>Selecciona "Configuración de Reproducción".</li>
              <li>Elige el uso de datos por pantalla para ajustar la calidad de audio y video según tu preferencia.</li>
              <li>Disfruta tu contenido con la configuración personalizada.</li>
              </ol>
            </div>

            {/* Video explicativo (80% de la derecha) */}
            <div className="col-span-1 lg:col-span-8 flex justify-center items-center">
              <video
                src={VideoCalidad}
                autoPlay
                loop
                muted
                playsInline
                className="rounded-lg shadow-lg w-full h-auto object-contain"
                controls={false} // Quita los controles del video
                onContextMenu={(e) => e.preventDefault()} // Evita menú contextual
              />
            </div>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default AjustesReproduccion;
