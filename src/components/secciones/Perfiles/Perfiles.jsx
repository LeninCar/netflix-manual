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

            {/* Contenedor de pasos y GIF */}
            <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 mt-6">
              {/* Lista de pasos (20% de la izquierda) */}
              <div className="col-span-1 lg:col-span-2 flex flex-col justify-start items-start space-y-6">
                <p className="text-xl font-bold text-center w-full">Pasos</p>
                <ol className="list-decimal list-inside text-left space-y-4 text-lg text-gray-300">
                  <li>Inicia sesión en tu cuenta de Netflix.</li>
                  <li>Al iniciar sesión, se desplegará un menú con los perfiles que ya han sido creados.</li>
                  <li>Si hay espacio disponible para un nuevo perfil, aparecerá una opción representada por un ícono o metáfora visual para agregar uno nuevo.</li>
                  <li>Haz clic sobre el ícono para comenzar el proceso de creación del perfil.</li>
                  <li>Ingresa el nombre del nuevo perfil y confirma su creación.</li>
                  <li>El nuevo perfil aparecerá en la ventana principal y estará listo para usarse.</li>
                </ol>
              </div>

              {/* GIF explicativo (80% de la derecha) */}
              <div className="col-span-1 lg:col-span-8 flex justify-center items-center">
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
          </div>
        )}

        {/* Subsection - Eliminar Perfil */}
        {selectedSubsection === "eliminarPerfil" && (
          <div>
            {/* Título con línea divisoria */}
            <div className="flex flex-col items-center mb-6">
              <h2 className="text-2xl font-bold text-white mb-2">Eliminación de un perfil</h2>
              <hr className="w-full border-t-2 border-gray-500" />
            </div>

            {/* Contenedor de pasos y GIF */}
            <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 mt-6">
              {/* Lista de pasos (20% de la izquierda) */}
              <div className="col-span-1 lg:col-span-2 flex flex-col justify-start items-start space-y-6">
                <p className="text-xl font-bold text-center w-full">Pasos</p>
                <ol className="list-decimal list-inside text-left space-y-4 text-lg text-gray-300">
                  <li>Inicia sesión en tu cuenta de Netflix.</li>
                  <li>Una vez dentro, se mostrará un menú con los perfiles existentes.</li>
                  <li>Haz clic en el botón "Administrar perfiles".</li>
                  <li>Selecciona el ícono de edición ubicado sobre el perfil que deseas eliminar.</li>
                  <li>Desplázate hacia la parte inferior del menú de edición y haz clic en el botón "Eliminar perfil".</li>
                  <li>Confirma tu elección haciendo clic nuevamente en "Eliminar perfil".</li>
                  <li>¡Listo! El perfil ha sido eliminado exitosamente.</li>
                </ol>
              </div>

              {/* GIF explicativo (80% de la derecha) */}
              <div className="col-span-1 lg:col-span-8 flex justify-center items-center">
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
            </div>
          </div>
        )}

        {/* Subsection - Cambiar Perfil */}
        {selectedSubsection === "cambiarPerfil" && (
          <div>
            {/* Título con línea divisoria */}
            <div className="flex flex-col items-center mb-6">
              <h2 className="text-2xl font-bold text-white mb-2">Cambio de perfil</h2>
              <hr className="w-full border-t-2 border-gray-500" />
            </div>

            {/* Contenedor de pasos y GIF */}
            <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 mt-6">
              {/* Lista de pasos (20% de la izquierda) */}
              <div className="col-span-1 lg:col-span-2 flex flex-col justify-start items-start space-y-6">
                <p className="text-xl font-bold text-center w-full">Pasos</p>
                <ol className="list-decimal list-inside text-left space-y-4 text-lg text-gray-300">
                  <li>Desde tu perfil actual, desplázate hacia la parte superior derecha y haz clic en la foto de perfil.</li>
                  <li>Se desplegará un menú donde podrás ver los nombres de los demás perfiles.</li>
                  <li>Haz clic en el perfil al que deseas cambiar.</li>
                  <li>¡Listo! Has cambiado de perfil. Puedes repetir estos pasos tantas veces como desees.</li>
                </ol>
              </div>

              {/* GIF explicativo (80% de la derecha) */}
              <div className="col-span-1 lg:col-span-8 flex justify-center items-center">
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
            </div>
          </div>
        )}

        {/* Subsection - Agregar o Quitar PIN */}
        {selectedSubsection === "agregarPin" && (
          <div>
            {/* Título con línea divisoria */}
            <div className="flex flex-col items-center mb-6">
              <h2 className="text-2xl font-bold text-white mb-2">Agregando pin de seguridad a un perfil</h2>
              <hr className="w-full border-t-2 border-gray-500" />
            </div>

            {/* Contenedor de pasos y GIF */}
            <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 mt-6">
              {/* Lista de pasos (20% de la izquierda) */}
              <div className="col-span-1 lg:col-span-2 flex flex-col justify-start items-start space-y-6">
                <p className="text-xl font-bold text-center w-full">Pasos</p>
                <ol className="list-decimal list-inside text-left space-y-4 text-lg text-gray-300">
                  <li>Haz clic en la foto de perfil en la esquina superior derecha.</li>
                  <li>Selecciona "Cuenta" en el menú desplegable.</li>
                  <li>Ve a la sección "Perfiles" en la configuración.</li>
                  <li>Selecciona el perfil al que quieres agregar el PIN.</li>
                  <li>Busca la opción "Bloqueo de perfil".</li>
                  <li>Ingresa tu contraseña.</li>
                  <li>Activa "Requerir PIN para el inicio de sesión".</li>
                  <li>Crea tu PIN de seguridad.</li>
                  <li>Haz clic en "Guardar".</li>
                </ol>
              </div>
              {/* GIF explicativo (80% de la derecha) */}
              <div className="col-span-1 lg:col-span-8 flex justify-center items-center">
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
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MiCuenta;
