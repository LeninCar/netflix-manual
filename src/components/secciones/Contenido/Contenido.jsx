import React, { useState } from 'react'; 
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; 
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const Contenido = () => {
  const [selectedSubsection, setSelectedSubsection] = useState('downloads');

  const sections = [
    {
      id: "downloads",
      label: "Gestión de Descargas",
      steps: [
        "Abre la aplicación de Netflix.",
        "Accede al menú 'Mis Descargas'.",
        "Selecciona el contenido descargado que quieres gestionar.",
        "Puedes reproducir, eliminar o revisar detalles del archivo."
      ],
      content: (
        <Swiper modules={[Navigation, Pagination]} navigation pagination>
          <SwiperSlide>
            <div className="bg-gray-800 p-4 rounded-lg">
              <p className="text-white">Título descargado 1</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-gray-800 p-4 rounded-lg">
              <p className="text-white">Título descargado 2</p>
            </div>
          </SwiperSlide>
        </Swiper>
      )
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
      content: (
        <ul className="space-y-4 mt-4">
          <li className="bg-gray-800 p-4 rounded-lg">Favorito 1</li>
          <li className="bg-gray-800 p-4 rounded-lg">Favorito 2</li>
        </ul>
      )
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
      content: (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          <div className="bg-gray-800 p-4 rounded-lg">Acción</div>
          <div className="bg-gray-800 p-4 rounded-lg">Comedia</div>
          <div className="bg-gray-800 p-4 rounded-lg">Drama</div>
          <div className="bg-gray-800 p-4 rounded-lg">Documentales</div>
        </div>
      )
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
          {/* Lista de pasos (20% de la izquierda) */}
          <div className="col-span-1 lg:col-span-2 flex flex-col justify-start items-start space-y-6">
            <p className="text-xl font-bold text-center w-full">Pasos</p>
            <ol className="list-decimal list-inside text-left space-y-4 text-lg text-gray-300">
              {currentSection.steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>

          {/* Contenido (80% de la derecha) */}
          <div className="col-span-1 lg:col-span-8 flex justify-center items-center">
            {currentSection.content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contenido;
