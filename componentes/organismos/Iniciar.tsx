"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Iniciar = () => {
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");
  const router = useRouter();

  const manejarEnvio = (e: React.FormEvent) => {
    e.preventDefault();

    // Aquí puedes hacer validación o autenticación real

    // Redirigir después del envío exitoso
    router.push("../principal");
  };

  return (
    <div className="sesion-contenedor">
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

export default Iniciar;
