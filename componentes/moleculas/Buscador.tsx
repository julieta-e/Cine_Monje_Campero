"use client";

import React, { useState } from "react";


const Buscador = () => {
  const [busqueda, setBusqueda] = useState("");

  const manejarBusqueda = (e) => {
    setBusqueda(e.target.value);
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    alert(`Buscando películas con: ${busqueda}`);
    // Aquí puedes poner la lógica para filtrar o llamar API
  };

  return (
    <form onSubmit={manejarEnvio} className="buscador-form">
      <input
        type="text"
        placeholder="Buscar películas..."
        value={busqueda}
        onChange={manejarBusqueda}
        className="buscador-input"
      />
      <button type="submit" className="buscador-boton">
        Buscar
      </button>
    </form>
  );
};

export default Buscador;
