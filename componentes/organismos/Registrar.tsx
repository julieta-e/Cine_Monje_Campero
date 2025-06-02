"use client";

import Link from "next/link";
import React, { useState } from "react";

const Registrar = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [genero, setGenero] = useState("");
  const [email, setEmail] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [confirmar, setConfirmar] = useState("");

  const manejarEnvio = (e: React.FormEvent) => {
    e.preventDefault();

    if (contrasena !== confirmar) {
      alert("Las contraseñas no coinciden.");
      return;
    }
  };

  return (
    <div className="sesion-contenedor">
      <img className="monje-carp" src="/monje.png" alt="Monje" />

      <h1>Registro</h1>
      <form onSubmit={manejarEnvio} className="formulario">
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Apellido"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
          required
        />
        <select
          value={genero}
          onChange={(e) => setGenero(e.target.value)}
          required
        >
          <option value="">Selecciona género</option>
          <option value="masculino">Masculino</option>
          <option value="femenino">Femenino</option>
          <option value="otro">Otro</option>
        </select>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirmar contraseña"
          value={confirmar}
          onChange={(e) => setConfirmar(e.target.value)}
          required
        />
        <Link href="/sesion">
          <button className="botones">Registrarse</button>
        </Link>
      </form>

      <p className="parrafo">
        Tus datos serán usados únicamente con fines de acceso al sitio,
        seguridad, soporte y para enviarte comunicaciones si así lo deseas.
      </p>
    </div>
  );
};

export default Registrar;
