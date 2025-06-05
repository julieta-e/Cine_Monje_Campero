"use client";

import React, { useState } from "react";

const Navegacion = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  return (
    <nav className="navegacion">
      <a href="/principal/" className="logo-link">
        <h1 className="titulo">
          <img src="monje.png" className="monje" alt="" />
        </h1>
      </a>

      {/* Icono hamburguesa */}
      <div
        className={`hamburguesa ${menuAbierto ? "activo" : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Menú, visible solo si menuAbierto es true */}
      <div className={`navegacion-principal ${menuAbierto ? "mostrar" : ""}`}>
        <a
          className="enlace"
          href="/horario"
          onClick={() => setMenuAbierto(false)}
        >
          Horario
        </a>
        <a
          className="enlace"
          href="/oferta"
          onClick={() => setMenuAbierto(false)}
        >
          Oferta
        </a>
        <a
          className="enlace"
          href="/confiteria"
          onClick={() => setMenuAbierto(false)}
        >
          Confiteria
        </a>
        <a
          className="enlace"
          href="https://coddy-kia.vercel.app/"
          onClick={() => setMenuAbierto(false)}
        >
          Chatboot
        </a>
      </div>
    </nav>
  );
};

export default Navegacion;
