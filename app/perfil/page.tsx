"use client";
import { useEffect, useState } from "react";

export default function Perfil() {
  const [usuario, setUsuario] = useState({
    nombre: "Juan Pérez",
    correo: "juan.perez@ejemplo.com",
    imagen: "https://i.pravatar.cc/150?u=juan",
  });

  const handleCerrarSesion = () => {
    // Aquí puedes integrar NextAuth signOut() o tu método personalizado
    console.log("Cerrar sesión");
    // Ejemplo con NextAuth: signOut();
  };

  return (
    <div className="perfil-container">
      <h1 className="perfil-titulo">Mi Perfil</h1>
      <div className="perfil-card">
        <img
          src="/icono.png"
          alt="Foto de perfil"
          className="perfil-imagen"
        />
        <div className="perfil-info">
          <p>
            <strong>Nombre:</strong> Yhonatan Leonardo Mamani Torrez
          </p>
          <p>
            <strong>Correo:</strong> ingenieroyhonatan@gmail.com
          </p>
        </div>
        <button className="perfil-boton" onClick={handleCerrarSesion}>
          Cerrar Sesión
        </button>
      </div>
    </div>
  );
}
