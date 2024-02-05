import React from "react";
import { Header } from "../components/Header";

export default function ClientLayouts({ children }) {
  return (
    <div className="w-screen h-screen overflow-x-hidden font-sans">
      <header className="absolute z-10 w-screen overflow-x-hidden">
        <Header />
      </header>
      <div className="overflow-x-hidden z-20">{children}</div>
      <footer className="w-screen overflow-x-hidden">footer</footer>
    </div>
  );
}
