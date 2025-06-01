// app/sesion/page.tsx
"use client"; // Necesario si luego quieres manejar eventos con React

import React, { useState } from "react";

const SesionPage = () => {
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");

  const manejarEnvio = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes agregar lógica para validar o enviar
    alert(`Usuario: ${usuario}, Contraseña: ${contrasena}`);
  };

  return (
    <div  className="sesion-contenedor">
      <img className="monje" src="/monje.png" alt="Monje" />
      <h1>Iniciar Sesión</h1>
      <form onSubmit={manejarEnvio} className="formulario">
        <input
          type="text"
          placeholder="Nombre de usuario"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
          required
        />
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default SesionPage;
