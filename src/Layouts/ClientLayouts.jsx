import React from "react";
import { Header } from "../components/Header";

export default function ClientLayouts({ children }) {
  return (
    <>
      <header className="absolute z-10 w-screen overflow-x-hidden">
        <Header />
      </header>
      <div className="w-screen overflow-x-hidden">{children}</div>
      <footer className="w-screen overflow-x-hidden">footer</footer>
    </>
  );
}
