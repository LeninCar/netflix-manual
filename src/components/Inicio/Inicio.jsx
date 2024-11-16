import React, { useState } from "react";
import tv from "../../assets/tv.png";

export function Inicio() {
  const [selectedOption, setSelectedOption] = useState("inicio");
  const [selectedSubsection, setSelectedSubsection] = useState(null); // Nueva variable para subsecciones
  const options = ["inicio", "registro", "suscripciones", "pagos"];

  const renderContent = () => {
    switch (selectedOption) {
      case "inicio":
        return (
          <div>
            <h3 className="text-4xl font-bold">Bienvenido</h3>
            <p className="mt-4">Selecciona una opción para explorar.</p>
            {/* Subsecciones de "Inicio" */}
            <ul className="space-y-2 mt-4">
              <li
                className={`cursor-pointer hover:text-gray-400 ${selectedSubsection === "subinicio1" ? "text-primary" : ""}`}
                onClick={() => setSelectedSubsection("subinicio1")}
              >
                Introducción
              </li>
              <li
                className={`cursor-pointer hover:text-gray-400 ${selectedSubsection === "subinicio2" ? "text-primary" : ""}`}
                onClick={() => setSelectedSubsection("subinicio2")}
              >
                Características
              </li>
            </ul>
            {selectedSubsection === "subinicio1" && (
              <div className="mt-4">
                <p>Bienvenido a la plataforma, explora nuestras opciones.</p>
              </div>
            )}
            {selectedSubsection === "subinicio2" && (
              <div className="mt-4">
                <p>Aquí encontrarás todas las características del servicio.</p>
              </div>
            )}
          </div>
        );
      case "registro":
        return (
          <div>
            <h3 className="text-4xl font-bold">Registro</h3>
            <p className="mt-4">Aquí puedes registrar una nueva cuenta.</p>
            {/* Subsecciones de "Registro" */}
            <ul className="space-y-2 mt-4">
              <li
                className={`cursor-pointer hover:text-gray-400 ${selectedSubsection === "subregistro1" ? "text-primary" : ""}`}
                onClick={() => setSelectedSubsection("subregistro1")}
              >
                Crear cuenta
              </li>
              <li
                className={`cursor-pointer hover:text-gray-400 ${selectedSubsection === "subregistro2" ? "text-primary" : ""}`}
                onClick={() => setSelectedSubsection("subregistro2")}
              >
                Información personal
              </li>
            </ul>
            {selectedSubsection === "subregistro1" && (
              <div className="mt-4">
                <p>Aquí podrás registrar tu cuenta fácilmente.</p>
              </div>
            )}
            {selectedSubsection === "subregistro2" && (
              <div className="mt-4">
                <p>Introduce tu información personal para completar el registro.</p>
              </div>
            )}
          </div>
        );
      case "suscripciones":
        return (
          <div>
            <h3 className="text-4xl font-bold">Suscripciones</h3>
            <p className="mt-4">Administra tus suscripciones aquí.</p>
            {/* Subsubsecciones de "Suscripciones" */}
            <ul className="space-y-2 mt-4">
              <li
                className={`cursor-pointer hover:text-gray-400 ${selectedSubsection === "subsusc1" ? "text-primary" : ""}`}
                onClick={() => setSelectedSubsection("subsusc1")}
              >
                Planes disponibles
              </li>
              <li
                className={`cursor-pointer hover:text-gray-400 ${selectedSubsection === "subsusc2" ? "text-primary" : ""}`}
                onClick={() => setSelectedSubsection("subsusc2")}
              >
                Historial de suscripciones
              </li>
            </ul>
            {selectedSubsection === "subsusc1" && (
              <div className="mt-4">
                <p>Aquí puedes ver los planes de suscripción disponibles.</p>
              </div>
            )}
            {selectedSubsection === "subsusc2" && (
              <div className="mt-4">
                <p>Consulta tu historial de suscripciones pasadas.</p>
              </div>
            )}
          </div>
        );
      case "pagos":
        return (
          <div>
            <h3 className="text-4xl font-bold">Métodos de Pago</h3>
            <p className="mt-4">Configura tus métodos de pago preferidos.</p>
            {/* Subsecciones de "Métodos de pago" */}
            <ul className="space-y-2 mt-4">
              <li
                className={`cursor-pointer hover:text-gray-400 ${selectedSubsection === "subpago1" ? "text-primary" : ""}`}
                onClick={() => setSelectedSubsection("subpago1")}
              >
                Agregar tarjeta
              </li>
              <li
                className={`cursor-pointer hover:text-gray-400 ${selectedSubsection === "subpago2" ? "text-primary" : ""}`}
                onClick={() => setSelectedSubsection("subpago2")}
              >
                Métodos de pago guardados
              </li>
            </ul>
            {selectedSubsection === "subpago1" && (
              <div className="mt-4">
                <p>Añade una nueva tarjeta de crédito o débito aquí.</p>
              </div>
            )}
            {selectedSubsection === "subpago2" && (
              <div className="mt-4">
                <p>Revisa los métodos de pago que ya tienes guardados.</p>
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
          <div className="bg-stone-900 bg-opacity-80 p-6 rounded-lg mt-10 lg:mt-0 lg:w-1/4 w-full lg:h-auto">
            <h3 className="text-xl font-bold mb-4">Selecciona una opción:</h3>
            <ul className="space-y-2">
              {options.map((option) => (
                <li
                  key={option}
                  className={`cursor-pointer hover:text-gray-400 ${selectedOption === option ? "text-primary" : ""}`}
                  onClick={() => setSelectedOption(option)}
                >
                  {option.charAt(0).toUpperCase() + option.slice(1)}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-stone-900 bg-opacity-90 p-12 rounded-lg lg:w-3/4 w-full mt-10 lg:mt-0">
            {renderContent()}
          </div>
        </div>
      </section>
    </div>
  );
}
