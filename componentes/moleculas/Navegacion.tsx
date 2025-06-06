"use client";

import React, { useState, useEffect } from "react";

const Navegacion = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);
  // Por defecto modo oscuro
  const [modo, setModo] = useState("oscuro");

  const toggleMenu = () => setMenuAbierto(!menuAbierto);

  // Alterna entre claro y oscuro
  const toggleModo = () => {
    setModo((prev) => (prev === "claro" ? "oscuro" : "claro"));
  };

  useEffect(() => {
    const body = document.body;

    if (modo === "claro") {
      body.classList.add("modo-claro");
      body.classList.remove("modo-oscuro");
    } else {
      body.classList.add("modo-oscuro");
      body.classList.remove("modo-claro");
    }
  }, [modo]);

  return (
    <nav className="navegacion">
      <a href="/principal/" className="logo-link">
        <h1 className="titulo">
          <img src="monje.png" className="monje" alt="Logo" />
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

      {/* Menú */}
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
          href="/streming"
          onClick={() => setMenuAbierto(false)}
        >
          Streming
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
          Confitería
        </a>
        <a
          className="enlace"
          href="https://coddy-kia.vercel.app/"
          onClick={() => setMenuAbierto(false)}
        >
          Chatboot
        </a>

        {/* Botón para cambiar modo claro/oscuro */}
        <button
          className={`modo-btn ${modo === "claro" ? "claro" : "oscuro"}`}
          onClick={toggleModo}
        >
          {modo === "claro" ? "Modo Oscuro " : "Modo Claro "}
        </button>
      </div>
    </nav>
  );
};

export default Navegacion;
