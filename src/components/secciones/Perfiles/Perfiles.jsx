import React, { useState } from 'react';

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

      <div className="p-6">
      {/* Subsection - Crear Perfil */}
      {selectedSubsection === "crearPerfil" && (
        <div className="mt-4 text-left">
          <p className="text-lg font-medium text-white mb-4">
            Aquí puedes crear un nuevo perfil. Ingresa los detalles necesarios para configurar un nuevo perfil de usuario.
          </p>
        </div>
      )}

      {/* Subsection - Eliminar Perfil */}
      {selectedSubsection === "eliminarPerfil" && (
        <div className="mt-4 text-left">
          <p className="text-lg font-medium text-white mb-4">
            ¿Estás seguro de que deseas eliminar tu perfil? Esta acción es irreversible.
          </p>
        </div>
      )}

      {/* Subsection - Cambiar Perfil */}
      {selectedSubsection === "cambiarPerfil" && (
        <div className="mt-4 text-left">
          <p className="text-lg font-medium text-white mb-4">
            Aquí puedes cambiar el nombre de tu perfil.
          </p>
        </div>
      )}

      {/* Subsection - Agregar o Quitar PIN */}
      {selectedSubsection === "agregarPin" && (
        <div className="mt-4 text-left">
          <p className="text-lg font-medium text-white mb-4">
            Agrega o quita un PIN para proteger el acceso a tu perfil.
          </p>
        </div>
      )}
      </div>
    </div>
  );
};

export default MiCuenta;
