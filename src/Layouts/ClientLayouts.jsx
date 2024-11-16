import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer"; // Importa el componente Footer

export default function ClientLayouts({ children }) {
  return (
    <div className="w-screen h-screen overflow-x-hidden font-sans">
      <header className="absolute z-10 w-screen overflow-x-hidden">
        <Header />
      </header>
      <div className="overflow-x-hidden z-20 flex-1">{children}</div>
      {/* Agregar el Footer aquí */}
      <footer className="w-full overflow-x-hidden mt-auto">
        <Footer />
      </footer>
    </div>
  );
}
