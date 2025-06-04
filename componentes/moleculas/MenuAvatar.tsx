"use client";

import React, { useState } from "react";

const MenuAvatar = () => {
  const [abierto, setAbierto] = useState(false);

  const toggleMenu = () => setAbierto(!abierto);

  return (
    <div className="menu-avatar-container">
      <img
        src="/icono.png"
        alt="Avatar usuario"
        onClick={toggleMenu}
        className="menu-avatar"
      />

      {abierto && (
        <div className="menu-avatar-menu">
          <a
            href="/perfil"
            className="menu-avatar-item"
            onClick={() => setAbierto(false)}
          >
            Perfil
          </a>
          <a
            href="/historial"
            className="menu-avatar-item"
            onClick={() => setAbierto(false)}
          >
            Historial de Peliculas
          </a>

          <a
            href="/principal"
            className="menu-avatar-item logout"
            onClick={() => setAbierto(false)}
          >
            Cerrar sesión
          </a>
        </div>
      )}
    </div>
  );
};

export default MenuAvatar;
