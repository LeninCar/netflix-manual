import React from "react";
import { Route, Routes } from "react-router-dom";
import ClientLayouts from "../Layouts/ClientLayouts.jsx";
import { Inicio } from "../components/Inicio";

export default function ClientRoutes() {
  const loadLayout = (Layout, Page) => {
    return <Layout>{Page}</Layout>;
  };
  return (
    <Routes>
      <Route path="/" element={loadLayout(ClientLayouts, <Inicio />)} />
    </Routes>
  );
}
