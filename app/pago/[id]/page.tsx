"use client";

import Link from "next/link";
import React, { useState } from "react";
const movies = {
  "1": {
    id: "1",
    imdbId: "tt3915174",
    title: "Puss in Boots: The Last Wish",
    releaseDate: "2022-12-21",
    trailerLink: "https://www.youtube.com/watch?v=tHb7WlgyaUc",
    movieLink:
      "https://attackertv.so/watch-movie/puss-in-boots-the-last-wish-91342.9221629",
    poster: "https://image.tmdb.org/t/p/w500/1NqwE6LP9IEdOZ57NCT51ftHtWT.jpg",
    genres: ["Animation", "Action", "Adventure", "Comedy", "Family"],
    sinopsis:
      "El Gato con Botas descubre que su aventura está lejos de terminar cuando busca una última vida, enfrentándose a nuevos villanos y aliados.",
    puntuacion: {
      imdb: "7.8/10",
      sensacine: "4.2/5",
      esponif: "7.5/10",
    },
  },
  "2": {
    id: "2",

    imdbId: "tt1630029",
    title: "Avatar: The Way of Water",
    releaseDate: "2022-12-16",
    trailerLink: "https://www.youtube.com/watch?v=d9MyW72ELq0",
    movieLink:
      "https://attackertv.so/watch-movie/avatar-the-way-of-water-79936.9224431",
    poster: "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
    genres: ["Science Fiction", "Action", "Adventure"],
    sinopsis:
      "Jake Sully y Neytiri deben proteger a su familia y al mundo de Pandora de nuevas amenazas que ponen en riesgo la paz.",
    puntuacion: {
      imdb: "7.9/10",
      sensacine: "4.1/5",
      esponif: "7.8/10",
    },
  },
  "3": {
    id: "3",

    imdbId: "tt8760708",
    title: "M3GAN",
    releaseDate: "2023-01-06",
    trailerLink: "https://www.youtube.com/watch?v=BRb4U99OU80",
    movieLink: "https://attackertv.so/watch-movie/m3gan-91330.9252829",
    poster: "https://image.tmdb.org/t/p/w500/xBl5AGw7HXZcv1nNXPlzGgO4Cfo.jpg",
    genres: ["Science Fiction", "Horror", "Comedy"],
    sinopsis:
      "Una muñeca robot con inteligencia artificial protege a una niña, pero sus límites se vuelven peligrosos.",
    puntuacion: {
      imdb: "6.7/10",
      sensacine: "3.8/5",
      esponif: "6.9/10",
    },
  },
  "4": {
    id: "4",

    imdbId: "tt11116912",
    title: "Troll",
    releaseDate: "2022-12-01",
    trailerLink: "https://www.youtube.com/watch?v=AiohkY_XQYQ",
    movieLink: "https://attackertv.so/watch-movie/troll-89830.9190984",
    poster: "https://image.tmdb.org/t/p/w500/9z4jRr43JdtU66P0iy8h18OyLql.jpg",
    genres: ["Fantasy", "Action", "Adventure"],
    sinopsis:
      "Un gigante troll amenaza Noruega y un grupo de héroes debe detenerlo antes de que cause destrucción masiva.",
    puntuacion: {
      imdb: "6.5/10",
      sensacine: "3.9/5",
      esponif: "6.7/10",
    },
  },
  "5": {
    id: "5",

    imdbId: "tt6443346",
    title: "Black Adam",
    releaseDate: "2022-10-19",
    trailerLink: "https://www.youtube.com/watch?v=JaV7mmc9HGw",
    movieLink: "https://attackertv.so/watch-movie/black-adam-82087.9064972",
    poster: "https://image.tmdb.org/t/p/w500/pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg",
    genres: ["Fantasy", "Action", "Science Fiction"],
    sinopsis:
      "El antihéroe Black Adam usa sus poderes para proteger a su pueblo y enfrentar fuerzas oscuras.",
    puntuacion: {
      imdb: "6.4/10",
      sensacine: "3.7/5",
      esponif: "6.5/10",
    },
  },
  "6": {
    id: "6",

    imdbId: "tt0499549",
    title: "Avatar",
    releaseDate: "2009-12-15",
    trailerLink: "https://www.youtube.com/watch?v=5PSNL1qE6VY",
    movieLink: "https://attackertv.so/watch-movie/avatar-19690",
    poster: "https://image.tmdb.org/t/p/w500/jRXYjXNq0Cs2TcJjLkki24MLp7u.jpg",
    genres: ["Fantasy", "Action", "Science Fiction", "Adventure"],
    sinopsis:
      "Un ex-marine se une a la raza Na'vi para salvar su mundo en Pandora y enfrenta dilemas éticos y de supervivencia.",
    puntuacion: {
      imdb: "7.8/10",
      sensacine: "4.0/5",
      esponif: "7.4/10",
    },
  },
  "7": {
    id: "7",

    imdbId: "tt3447590",
    title: "Roald Dahl's Matilda the Musical",
    releaseDate: "2022-11-25",
    trailerLink: "https://www.youtube.com/watch?v=lroAhsDr2vI",
    movieLink:
      "https://attackertv.so/watch-movie/roald-dahls-matilda-the-musical-91756.9246883",
    poster: "https://image.tmdb.org/t/p/w500/ga8R3OiOMMgSvZ4cOj8x7prUNYZ.jpg",
    genres: ["Fantasy", "Family", "Comedy"],
    sinopsis:
      "La historia musical de Matilda, una niña brillante que usa sus poderes para enfrentar a su mala familia y escuela.",
    puntuacion: {
      imdb: "7.1/10",
      sensacine: "4.1/5",
      esponif: "7.0/10",
    },
  },
  "8": {
    id: "8",

    imdbId: "tt9114286",
    title: "Black Panther: Wakanda Forever",
    releaseDate: "2022-11-11",
    trailerLink: "https://www.youtube.com/watch?v=_Z3QKkl1WyM",
    movieLink:
      "https://attackertv.so/watch-movie/black-panther-ii-66672.9148009",
    poster: "https://image.tmdb.org/t/p/w500/cryEN3sWlgB2wTzcUNVtDGI8bkM.jpg",
    genres: ["Action", "Adventure", "Science Fiction"],
    sinopsis:
      "Tras la muerte del rey T’Challa, Wakanda enfrenta nuevos retos y enemigos mientras lucha por mantener su independencia.",
    puntuacion: {
      imdb: "7.1/10",
      sensacine: "4.1/5",
      esponif: "7.0/10",
    },
  },
};

export default function Pagina({ params }) {
  const [metodoSeleccionado, setMetodoSeleccionado] = useState("");
  const { id } = params;
  const movie = movies[id];
  const volver = () => setMetodoSeleccionado("");

  return (
    <div className="centrar-pago">
      <h2 className="title-pago">Medios de pago disponibles</h2>

      {!metodoSeleccionado && (
        <>
          <p className="mensaje-pago">
            Elige tu método de pago favorito. Todos nuestros métodos son seguros
            y verificados.
          </p>

          <div className="pagos">
            <div
              className="pag"
              onClick={() => setMetodoSeleccionado("tarjeta")}
            >
              <img src="/tarjeta.jpg" alt="Tarjeta de crédito" />
              <p>Tarjeta de crédito</p>
            </div>

            <div className="pag" onClick={() => setMetodoSeleccionado("tigo")}>
              <img src="/tigo.jpg" alt="Tigo Money" />
              <p>Tigo Money</p>
            </div>

            <div className="pag" onClick={() => setMetodoSeleccionado("qr")}>
              <img src="/qr.jpg" alt="Pago por QR" />
              <p>Pago por QR</p>
            </div>
          </div>
        </>
      )}

      {metodoSeleccionado === "tarjeta" && (
        <div className="detalle-pago">
          <h3>Pago con Tarjeta de Crédito</h3>
          <form className="formulario-pago">
            <label>
              Número de tarjeta:
              <input
                type="text"
                name="tarjeta"
                placeholder="•••• •••• •••• ••••"
                required
              />
            </label>

            <label>
              Fecha de nacimiento:
              <input type="date" name="fecha" required />
            </label>

            <label>
              Nombre del titular:
              <input type="text" name="nombre" placeholder="Juan" required />
            </label>

            <label>
              Apellido del titular:
              <input type="text" name="apellido" placeholder="Pérez" required />
            </label>

            <label>
              Dirección:
              <input
                type="text"
                name="direccion"
                placeholder="Calle Falsa 123"
                required
              />
            </label>
            <Link href={`/comprado/${movie.id}`}>
              <button type="submit" className="btn-pagar">
                Pagar
              </button>
            </Link>
          </form>
          <button onClick={volver} className="btn-volver">
            ← Volver
          </button>
        </div>
      )}

      {metodoSeleccionado === "tigo" && (
        <div className="detalle-pago">
          <h3>Pago con Tigo Money</h3>
          <form className="formulario-pago">
            <label>
              Número de celular:
              <input
                type="tel"
                name="telefono"
                placeholder="Ej: 76543210"
                pattern="[6-7][0-9]{7}"
                required
              />
            </label>

            <p className="sms-aviso">
              Se enviará un SMS a tu celular para confirmar la compra. Sigue las
              instrucciones para completar el pago.
            </p>
            <Link href={`/comprado/${movie.id}`}>
              <button type="submit" className="btn-pagar">
                Confirmar
              </button>
            </Link>
          </form>
          <button onClick={volver} className="btn-volver">
            ← Volver
          </button>
        </div>
      )}

      {metodoSeleccionado === "qr" && (
        <div className="detalle-pago">
          <h3>Pago por QR</h3>
          <p>Escanee el siguiente QR para finalizar el pago.</p>
          <img src="/qr.jpg" alt="Código QR para pago" className="imagen-qr" />
          <p>
            Una vez realizado el pago, presione{" "}
            <strong className="cont">Confirmar</strong> para que podamos
            verificarlo.
          </p>

          <div className="botones-qr">
            <a href="/qr.jpg" download className="btn-descargar btn-pa">
              Descargar QR
            </a>
            <Link href={`/comprado/${movie.id}`}>
              <button className="botones-confi btn-pa">Confirmar</button>
            </Link>
          </div>

          <button onClick={volver} className="btn-volver">
            ← Volver
          </button>
        </div>
      )}
    </div>
  );
}
