import React from "react";
import Logo from "../../assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-4 px-4">
      <div className="max-w-screen-lg mx-auto">
        {/* Contenedor de la imagen y el texto centrado */}
        <div className="flex items-center justify-center space-x-4 mb-6">
          {/* Logo */}
          <img
            className="h-10 cursor-pointer"
            src={Logo}
            alt="Logo"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          />
          {/* Texto de derechos */}
          <p className="text-xs">
            © {new Date().getFullYear()} JJHL. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
