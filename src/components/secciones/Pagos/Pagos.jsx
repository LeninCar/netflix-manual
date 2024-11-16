import React, { useState } from 'react'; 
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Estilos básicos de Swiper
import "swiper/css/navigation";
import "swiper/css/pagination";
import videoPago from "../../../assets/gif-h/pago.mp4"; // Ruta al video
import videoPago2 from "../../../assets/gif-h/pago2.mp4"; // Ruta al video

import { Navigation, Pagination } from "swiper/modules"; // Módulos adicionales

const Pagos = () => {
  const [selectedSubsection, setSelectedSubsection] = useState('subinicio1');

  return (
    <div className="relative text-white">
      {/* Navbar horizontal */}
      <nav className="flex justify-around items-center bg-stone-900 border-b border-gray-700 sticky top-0 w-full z-10">
        {[
          { id: "subinicio1", label: "Añade tu Tarjeta" },
          { id: "subinicio2", label: "Cambia tu Plan" },
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
              <h2 className="text-2xl font-bold text-white mb-2">Añade tu Tarjeta</h2>
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
                  <li>Haz clic en "Administrar forma de pago".</li>
                  <li>Selecciona "Agregar una forma de pago".</li>
                  <li>Introduce los datos de tu tarjeta de crédito.</li>
                  <li>Confirma los detalles y guarda los cambios.</li>
                </ol>
              </div>

              {/* Video explicativo (80% de la derecha) */}
              <div className="col-span-1 lg:col-span-8 flex justify-center items-center">
                <video
                  src={videoPago}
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
            <h2 className="text-2xl font-bold text-white mb-2">Cambiar el Plan</h2>
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
              <li>Haz clic en "Cambiar de plan".</li>
              <li>Escoge el nuevo plan que deseas (Básico, Estándar o Premium).</li>
              <li>Haz clic en el botón "Continuar" para confirmar el cambio.</li>

              </ol>
            </div>

            {/* Video explicativo (80% de la derecha) */}
            <div className="col-span-1 lg:col-span-8 flex justify-center items-center">
              <video
                src={videoPago2}
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

export default Pagos;
