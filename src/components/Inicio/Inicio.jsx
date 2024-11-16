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
                    setSelectedSubsection(null); 
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
