import React, { useState } from 'react';
import crearPerfil from "../../../assets/videos/crear_perfil.mp4";
import eliminarPerfil from "../../../assets/videos/eliminar_perfil.mp4";
import cambiarPerfil from "../../../assets/videos/cambio_perfil.mp4";
import agregarPin from "../../../assets/videos/poner_pin.mp4";

const MiCuenta = () => {
  const [selectedSubsection, setSelectedSubsection] = useState('crearPerfil');

  return (
    <div className="relative text-white">

      <nav className="flex justify-around items-center bg-stone-900 border-b border-gray-700 sticky top-0 w-full z-10">
        {[
          { id: "crearPerfil", label: "Crear Perfil" },
          { id: "eliminarPerfil", label: "Eliminar Perfil" },
          { id: "cambiarPerfil", label: "Cambiar Perfil" },
          { id: "agregarPin", label: "Agregar o Quitar PIN" },
        ].map((section) => (
          <button
            key={section.id}
            className={`py-4 px-6 w-full text-center ${selectedSubsection === section.id
              ? "bg-black text-primary font-bold"
              : "bg-stone-900 hover:bg-stone-700 text-gray-300"
              }`}
            onClick={() => setSelectedSubsection(section.id)}
          >
            {section.label}
          </button>
        ))}
      </nav>

      <div className="p-6">

        {/* Subsection - Crear Perfil */}
        {selectedSubsection === "crearPerfil" && (
          <div>
            {/* Título con línea divisoria */}
            <div className="flex flex-col items-center mb-6">
              <h2 className="text-2xl font-bold text-white mb-2">Creación de un perfil</h2>
              <hr className="w-full border-t-2 border-gray-500" />
            </div>

            {/* Lista de pasos */}
            <div className="flex flex-col justify-start items-start space-y-4">
              <p className="text-lg text-gray-300 mb-4 text-left">
                Sigue estos pasos para agregar un nuevo perfil y disfrutar de una experiencia personalizada:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-300 text-left w-full">
                <li>Inicia sesión en tu cuenta de Netflix.</li>
                <li>Al iniciar sesión, se desplegará un menú con los perfiles que ya han sido creados.</li>
                <li>Si hay espacio disponible para un nuevo perfil, aparecerá una opción representada por un ícono o metáfora visual para agregar uno nuevo.</li>
                <li>Haz clic sobre el ícono para comenzar el proceso de creación del perfil.</li>
                <li>Ingresa el nombre del nuevo perfil y confirma su creación.</li>
                <li>El nuevo perfil aparecerá en la ventana principal y estará listo para usarse.</li>
              </ol>
            </div>

            {/* GIF explicativo */}
            <div className="flex justify-center items-center w-full mt-6">
              <video
                className="rounded-lg shadow-lg w-full h-auto object-cover max-h-[740px]"
                autoPlay={true}
                muted={true}
                loop={true}
              >
                <source 
                  src={crearPerfil}
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        )}

        {/* Subsection - Eliminar Perfil */}
        {selectedSubsection === "eliminarPerfil" && (
          <div>
            {/* GIF explicativo */}
            <div className="flex justify-center items-center w-full mb-6">
              <video
                className="rounded-lg shadow-lg w-full h-auto object-cover max-h-[740px]"
                autoPlay={true}
                muted={true}
                loop={true}
              >
                <source
                  src={eliminarPerfil}
                  type="video/mp4"
                />
              </video>
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

        {/* Subsection - Cambiar Perfil */}
        {selectedSubsection === "cambiarPerfil" && (
          <div>
            {/* GIF explicativo */}
            <div className="flex justify-center items-center w-full mb-6">
              <video
                className="rounded-lg shadow-lg w-full h-auto object-cover max-h-[740px]"
                autoPlay={true}
                muted={true}
                loop={true}
              >
                <source
                  src={cambiarPerfil}
                  type="video/mp4"
                />
              </video>
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

        {/* Subsection - Agregar o Quitar PIN */}
        {selectedSubsection === "agregarPin" && (
          <div>
            {/* GIF explicativo */}
            <div className="flex justify-center items-center w-full mb-6">
              <video
                className="rounded-lg shadow-lg w-full h-auto object-cover max-h-[740px]"
                autoPlay={true}
                muted={true}
                loop={true}
              >
                <source
                  src={agregarPin}
                  type="video/mp4"
                />
              </video>
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
      </div>
    </div>
  );
};

export default MiCuenta;
