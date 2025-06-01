'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const SesionPage = () => {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const router = useRouter();

  const manejarEnvio = (e: React.FormEvent) => {
    e.preventDefault();

    // Validación simple (puedes cambiar esto por una llamada a API real)
    if (usuario && contrasena) {
      alert(`Usuario: ${usuario}, Contraseña: ${contrasena}`);
      router.push('/principal'); // Redirige a /principal
    } else {
      alert('Por favor, completa todos los campos');
    }
  };

  return (
    <div className="sesion-contenedor">
      <img className="monje-carp" src="/monje.png" alt="Monje" />

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
        <button type="submit" className="botones">
          Iniciar Sesión
        </button>
      </form>

      <p className="parrafo">
        La información de tu cuenta se utiliza para permitirte iniciar sesión de manera segura y para acceder a tus datos. Cine Teatro Monje Campero recopila determinados datos por motivos de seguridad, soporte y elaboración de informes. Si estás de acuerdo, también se podría usar la información de tu cuenta para enviarte correos electrónicos de marketing y comunicaciones, incluyendo aquellos que se basan en tu uso de los servicios del sitio web.
      </p>
    </div>
  );
};

export default SesionPage;
