import React, { useState } from 'react';

const MiCuenta = () => {
  const [selectedSubsection, setSelectedSubsection] = useState('crearPerfil');

  return (
    <div>
      <div className="flex justify-start gap-4 mb-6">
        <button
          className={`py-2 px-4 rounded-md ${selectedSubsection === "crearPerfil" ? "bg-black text-white" : "bg-primary text-white hover:bg-primary-dark"}`}
          onClick={() => setSelectedSubsection("crearPerfil")}
        >
          Crear Perfil
        </button>
        <button
          className={`py-2 px-4 rounded-md ${selectedSubsection === "eliminarPerfil" ? "bg-black text-white" : "bg-primary text-white hover:bg-primary-dark"}`}
          onClick={() => setSelectedSubsection("eliminarPerfil")}
        >
          Eliminar Perfil
        </button>
        <button
          className={`py-2 px-4 rounded-md ${selectedSubsection === "cambiarPerfil" ? "bg-black text-white" : "bg-primary text-white hover:bg-primary-dark"}`}
          onClick={() => setSelectedSubsection("cambiarPerfil")}
        >
          Cambiar Perfil
        </button>
        <button
          className={`py-2 px-4 rounded-md ${selectedSubsection === "agregarPin" ? "bg-black text-white" : "bg-primary text-white hover:bg-primary-dark"}`}
          onClick={() => setSelectedSubsection("agregarPin")}
        >
          Agregar o Quitar PIN
        </button>
      </div>

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
  );
};

export default MiCuenta;
