import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Estilos básicos de Swiper
import "swiper/css/navigation";
import "swiper/css/pagination";
import './inicio.css';
import { Navigation, Pagination } from "swiper/modules"; // Módulos adicionales

import Perfiles from "../secciones/Perfiles/Perfiles";
import MiCuenta from "../secciones/MiCuenta/MiCuenta";

export function Inicio() {
  const [selectedOption, setSelectedOption] = useState("inicio");
  const [selectedSubsection, setSelectedSubsection] = useState(null);
  const options = ["Mi cuenta", "Gestiona tus perfiles", "Pagos", "Encuentra tu contenido", "Disfruta tu contenido", "Otras dudas?"];

  const renderContent = () => {
    switch (selectedOption) {
      case "Mi cuenta":   
      return <MiCuenta />; 
      case "Gestiona tus perfiles":
        return <Perfiles />; 
      default:
        return <div>Contenido no disponible.</div>;
    }
  };

  return (
<div className="grid grid-cols-1 gap-y-2 bg-stone-800 overflow-hidden">
  <section className="relative flex flex-col lg:flex-row justify-center items-center overflow-hidden lg:h-screen w-screen text-center">
    
    {/* Imagen de fondo */}
    <img
      className="absolute h-auto w-screen object-cover transform scale-110 -translate-y-10"
      src="https://assets.nflxext.com/ffe/siteui/vlv3/a73c4363-1dcd-4719-b3b1-3725418fd91d/96956889-cd58-48f4-930e-f43fad686c0d/US-es-20231016-popsignuptwoweeks-perspective_alpha_website_large.jpg"
      alt="Background"
    />
    
    {/* Fondo oscuro con gradiente */}
    <div className="absolute top-0 right-0 bottom-0 left-0 h-screen w-screen bg-gradient-to-t from-black via-black60 to-black opacity-60" />
    
    {/* Contenedor de opciones */}
    <div className="z-20 flex flex-col lg:flex-row items-center text-white w-full lg:px-32 justify-center space-y-6 lg:space-y-0 lg:space-x-12">
      {/* Contenedor de la izquierda (más pegado a la izquierda) */}
      <div className="bg-stone-900 bg-opacity-80 p-8 rounded-lg mt-10 lg:mt-0 lg:w-1/5 w-full lg:h-auto min-h-[500px]">
        <ul className="w-full">
          {options.map((option) => (
            <li
              key={option}
              className={`cursor-pointer text-xl hover:text-gray-400 transition-colors duration-300 ${selectedOption === option ? "text-primary" : ""} border-b border-stone-700 py-2 w-full text-center`}
              onClick={() => {
                setSelectedOption(option);
                setSelectedSubsection(null); 
              }}
            >
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </li>
          ))}
        </ul>
      </div>
      
      {/* Contenedor de contenido (ocupa más espacio) */}
      <div
        className="bg-stone-900 bg-opacity-90 rounded-lg lg:w-4/5 w-full mt-10 lg:mt-0"
        style={{ height: "90vh", maxHeight: "90vh", overflowY: "auto" }}
      >
        {renderContent()}
      </div>
    </div>
  </section>
</div>

  );
}

export default Inicio;
