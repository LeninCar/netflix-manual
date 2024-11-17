import React, { useState } from 'react'; 
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; 
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

import agregarListas from "../../../assets/videos/agregarListas.mp4";
import descargas from "../../../assets/videos/descargas.mp4";
import verCategoriasSeleccionarUna from "../../../assets/videos/verCategoriasSeleccionarUna.mp4";

const Contenido = () => {
  const [selectedSubsection, setSelectedSubsection] = useState('downloads');

  const sections = [
    {
      id: "downloads",
      label: "Gestión de Descargas",
      steps: [
        "Abre la aplicación de Netflix en tu dispositivo móvil o aplicación de escritorio.",
        "Accede al menú 'Mis Descargas'.",
        "Selecciona el contenido descargado que quieres gestionar.",
        "Puedes reproducir, eliminar o revisar detalles del archivo."
      ],
      video: descargas
    },
    {
      id: "favorites",
      label: "Favoritos/Lista Personal",
      steps: [
        "Navega al contenido que deseas marcar como favorito.",
        "Haz clic en el icono de 'Añadir a Mi Lista'.",
        "Accede a 'Mi Lista' desde el menú principal para ver tus favoritos.",
        "Puedes eliminar contenido de la lista seleccionando el ícono nuevamente."
      ],
      video: agregarListas
    },
    {
      id: "categories",
      label: "Buscar por Categorías",
      steps: [
        "Desde el menú principal, selecciona 'Explorar'.",
        "Navega por las categorías disponibles.",
        "Haz clic en una categoría para ver contenido relacionado.",
        "Puedes filtrar aún más por subcategorías o géneros específicos."
      ],
      video: verCategoriasSeleccionarUna
    }
  ];

  const currentSection = sections.find(section => section.id === selectedSubsection);

  return (
    <div className="relative text-white">
      {/* Navbar horizontal */}
      <nav className="flex justify-around items-center bg-stone-900 border-b border-gray-700 sticky top-0 w-full z-10">
        {sections.map((section) => (
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
        {/* Título con línea divisoria */}
        <div className="flex flex-col items-center mb-6">
          <h2 className="text-2xl font-bold text-white mb-2">{currentSection.label}</h2>
          <hr className="w-full border-t-2 border-gray-500" />
        </div>

        {/* Contenedor de pasos y contenido dinámico */}
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 mt-6">
          {/* Lista de pasos (30% de la izquierda) */}
          <div className="col-span-1 lg:col-span-3 flex flex-col justify-start items-start space-y-6">
            <p className="text-xl font-bold text-center w-full">Pasos</p>
            <ol className="list-decimal list-inside text-left space-y-4 text-lg text-gray-300">
              {currentSection.steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>

          {/* Contenido reducido (70% de la derecha) */}
          <div className="col-span-1 lg:col-span-7 flex justify-center items-center">
            {selectedSubsection === "downloads" ? (
              <div className="w-full max-w-[300px] mx-auto rounded-lg shadow-lg overflow-hidden">
                <div className="relative" style={{ aspectRatio: '9/16' }}>
                  <video
                    className="absolute top-0 left-0 w-full h-full object-contain"
                    autoPlay
                    muted
                    loop
                    controls={false} // Sin controles visibles
                    key={selectedSubsection}
                  >
                    <source src={currentSection.video} type="video/mp4" />
                  </video>
                </div>
              </div>
            ) : (
              <div className="w-[85%] max-h-[500px] rounded-lg shadow-lg overflow-hidden">
                <video
                  className="w-full h-auto"
                  autoPlay
                  muted
                  loop
                  controls={false} // Sin controles visibles
                  key={selectedSubsection}
                >
                  <source src={currentSection.video} type="video/mp4" />
                </video>
              </div>
            )}
          </div>
        </div>

        {/* Nota adicional para la sección de descargas */}
        {selectedSubsection === "downloads" && (
          <div className="mt-4 text-center text-gray-400 text-sm">
            Nota: Las descargas no están disponibles en la versión de navegador.
          </div>
        )}
      </div>
    </div>
  );
};

export default Contenido;
