import React from 'react';

const MasDudas = () => {
  const steps = [
    "Visita el sitio web oficial de soporte de Netflix: https://help.netflix.com/",
    "En la barra de búsqueda, escribe tu pregunta o palabra clave relacionada con el problema que tienes.",
    "Explora los resultados proporcionados, que incluyen guías detalladas y artículos de ayuda.",
    "Si no encuentras lo que buscas, puedes contactar con el soporte técnico de Netflix desde la misma página.",
    "¡Listo! Netflix te proveerá toda la información necesaria."
  ];

  return (
    <div className="relative text-white p-6">
      {/* Título con línea divisoria */}
      <div className="flex flex-col items-center mb-6">
        <h2 className="text-2xl font-bold text-white mb-2">¿Más dudas?</h2>
        <hr className="w-full border-t-2 border-gray-500" />
      </div>

      {/* Contenedor de pasos y contenido dinámico */}
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 mt-6">
        {/* Lista de pasos (30% de la izquierda) */}
        <div className="col-span-1 lg:col-span-3 flex flex-col justify-start items-start space-y-6">
          <p className="text-xl font-bold text-center w-full">Pasos</p>
          <ol className="list-decimal list-inside text-left space-y-4 text-lg text-gray-300">
            {steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>

        {/* Contenido (Espacio para el Video) */}
        <div className="col-span-1 lg:col-span-7 flex justify-center items-center">
          <div className="w-[85%] max-h-[500px] rounded-lg shadow-lg bg-gray-800 flex items-center justify-center">
            <p className="text-gray-300">Espacio reservado para video explicativo</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MasDudas;
