import React, { useState } from "react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./inicio.css"; // Asegúrate de que el archivo CSS esté importado

import Perfiles from "../secciones/Perfiles/Perfiles";
import MiCuenta from "../secciones/MiCuenta/MiCuenta";
import Pagos from "../secciones/Pagos/Pagos";
import AjustesReproduccion from "../secciones/AjustesReproduccion/AjustesReproduccion";
import inicio from "../../assets/inicio.png";
import Contenido from "../secciones/Contenido/Contenido";
import MasAyuda from "../secciones/MasAyuda/Ayuda";

export function Inicio() {
  const [selectedOption, setSelectedOption] = useState("Inicio");
  const [selectedSubsection, setSelectedSubsection] = useState(null);
  const options = [
    "Inicio",
    "Mi cuenta",
    "Gestiona tus perfiles",
    "Pagos",
    "Encuentra tu contenido",
    "Ajustes de reproducción",
    "¿Otras dudas?",
  ];

  const renderContent = () => {
    switch (selectedOption) {
      case "Inicio":
        return (
          <>
            <div className="font-sans text-center p-8">
              <div className="flex flex-col items-center mb-6">
                <h2 className="text-2xl font-bold text-white mb-2">Bienvenido al Manual de Usuario de Netflix</h2>
                <hr className="w-full border-t-2 border-gray-500" />
              </div>
              <p className="text-lg text-gray-300">
                Este manual está diseñado para ayudarte a aprovechar al máximo tu experiencia en Netflix. Aquí encontrarás
                información útil sobre cómo gestionar tu cuenta, perfiles, pagos y ajustes de reproducción. ¡Disfruta de tu
                contenido favorito con facilidad!
              </p>

              <div className="flex flex-col items-center justify-center text-center mt-5">
                {/* Imagen de Netflix con animación de salida */}
                <img
                  src={inicio}
                  alt="Logo de Netflix"
                  className="imagen-salida"
                />
              </div>
            </div>
          </>
        );
      case "Mi cuenta":
        return <MiCuenta />;
      case "Gestiona tus perfiles":
        return <Perfiles />;
      case "Pagos":
        return <Pagos />;
      case "Encuentra tu contenido":
        return <Contenido />;
      case "Ajustes de reproducción":
        return <AjustesReproduccion />;
      case "¿Otras dudas?":
          return <MasAyuda />;
      default:
        return <div>Contenido no disponible.</div>;
    }
  };

  return (
    <div className="grid grid-cols-1 gap-y-2 bg-stone-800 overflow-hidden">
      <section className="relative flex flex-col lg:flex-row justify-center items-center overflow-hidden lg:h-screen w-screen text-center">
        <img
          className="absolute h-auto w-screen object-cover transform scale-110 -translate-y-10"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a73c4363-1dcd-4719-b3b1-3725418fd91d/96956889-cd58-48f4-930e-f43fad686c0d/US-es-20231016-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="Background"
        />
        <div className="absolute top-0 right-0 bottom-0 left-0 h-screen w-screen bg-gradient-to-t from-black via-black60 to-black opacity-80" />
        <div className="z-20 flex flex-col lg:flex-row items-center text-white w-full lg:px-10 justify-center space-y-6 lg:space-y-0 lg:space-x-6">
          <div className="bg-stone-900 bg-opacity-80 pt-3 pb-3 rounded-lg mt-10 lg:mt-0 lg:w-1/5 w-full h-auto">
            <ul className="w-full">
              {options.map((option, index) => (
                <li
                  key={option}
                  className={`cursor-pointer text-xl hover:text-gray-400 transition-colors duration-300 ${selectedOption === option ? "text-primary" : ""
                    } ${index !== options.length - 1 ? "border-b border-stone-700" : ""} py-2 w-full text-center`}
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

          <div className="bg-stone-900 bg-opacity-90 rounded-lg lg:w-4/5 w-full mt-10 lg:mt-0" style={{ height: "90vh", maxHeight: "90vh", overflowY: "auto" }}>
            {renderContent()}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Inicio;
