import React, { useState } from 'react'; 
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Estilos básicos de Swiper
import "swiper/css/navigation";
import "swiper/css/pagination";
import gifPago from "../../../assets/gif-h/pago.gif";

import { Navigation, Pagination } from "swiper/modules"; // Módulos adicionales

const MiCuenta = () => {
  const [selectedSubsection, setSelectedSubsection] = useState('subinicio1');

  return (
    <div className="relative text-white">
      {/* Navbar horizontal */}
      <nav className="flex justify-around items-center bg-stone-900 border-b border-gray-700 sticky top-0 w-full z-10">
        {[
          { id: "subinicio1", label: "Añade tu Tarjeta" },
          { id: "subinicio2", label: "Cambiar el Plan de Suscripción" },
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
      {/* GIF explicativo */}
      <div className="flex justify-center items-center w-full mb-6">
        <img
          src={gifPago}
          alt="GIF mostrando cómo agregar tarjeta de crédito en Netflix"
          className="rounded-lg shadow-lg w-full h-auto object-cover max-h-[500px]"
        />
      </div>

      {/* Lista de pasos */}
      <div className="flex flex-col justify-start items-start space-y-4">
        <p className="text-lg font-semibold text-center mb-4">Pasos para agregar una tarjeta:</p>
        <ol className="list-decimal list-inside space-y-2 text-gray-300 text-left w-full">
          <li>Inicia sesión en tu cuenta de Netflix.</li>
          <li>Dirígete a la sección "Cuenta".</li>
          <li>Haz clic en "Administrar forma de pago".</li>
          <li>Selecciona "Agregar una forma de pago".</li>
          <li>Introduce los datos de tu tarjeta de crédito.</li>
          <li>Confirma los detalles y guarda los cambios.</li>
        </ol>
      </div>
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
      </div>
    </div>
  );
};

export default MiCuenta;
