"use client";

import React from "react";

const Home = () => {
  return (
    <div>
      <header className="encabezado">
        <video
          className="video"
          src="/video/videocine.mp4"
          loop
          muted
          autoPlay
          playsInline
        ></video>

        <nav className="navegacion">
          <a href="/">
            <h1 className="titulo">
              <span className="titulo-diferente">Monje</span> Campero
            </h1>
          </a>
          <div className="navegacion-principal">
            <a className="enlace" href="/peliculas">
              Películas
            </a>
            <a className="enlace" href="/cartelera">
              Cartelera
            </a>
            <a className="enlace" href="/ofertas">
              Ofertas
            </a>
            <a className="enlace" href="/streaming">
              Streaming
            </a>
          </div>
        </nav>
      </header>

      <main className="contenido-principal contenedor">
        <section className="cartelera">
          <h2 className="peliculas-titulo">Cartelera Semanal</h2>
          <div className="peliculas">{/* API */}</div>
        </section>

        <section className="proximos-estrenos">
          <h2 className="peliculas-titulo">Próximos Estrenos</h2>
          <div className="peliculas">{/* API */}</div>
        </section>

        <section className="ofertas">
          <h2 className="peliculas-titulo">Ofertas</h2>
          <div className="peliculas">{/* API */}</div>
        </section>

        <section className="streaming">
          <h2 className="peliculas-titulo">
            Disfruta de nuestro servicio de streaming
          </h2>
          <div className="peliculas">{/* API */}</div>
        </section>
      </main>

      <footer className="pie-pagina">
        <div className="sociales">
          <div className="redes-sociales">
            <a href="#">
              <img src="/img/facebook.png" alt="Facebook" />
              <p>Facebook</p>
            </a>
            <a href="#">
              <img src="/img/icons8-tik-tok.svg" alt="TikTok" />
              <p>TikTok</p>
            </a>
            <a href="#">
              <img src="/img/icons8-instagram.svg" alt="Instagram" />
              <p>Instagram</p>
            </a>
          </div>

          <nav className="navegacion">
            <div className="navegacion-foot navegacion-principal">
              <a className="enlace" href="/peliculas">
                Películas
              </a>
              <a className="enlace" href="/cartelera">
                Cartelera
              </a>
              <a className="enlace" href="/ofertas">
                Ofertas
              </a>
              <a className="enlace" href="/streaming">
                Streaming
              </a>
            </div>
          </nav>
        </div>

        <div className="creditos">
          <p>Creado por Yhonatan Leonardo Mamani Torrez ©</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
