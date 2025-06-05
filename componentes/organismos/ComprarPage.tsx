import Pantalla from "@/componentes/organismos/Pantalla";
import Link from "next/link";

const movies = {
  "1": {
    id: "1",
    imdbId: "tt3915174",
    title: "Puss in Boots: The Last Wish",
    releaseDate: "2022-12-21",
    year: "2022",
    duration: "102 min",
    director: "Joel Crawford",
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
    year: "2022",
    duration: "192 min",
    director: "James Cameron",
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
    year: "2023",
    duration: "105 min",
    director: "Gerard Johnstone",
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
    year: "2022",
    duration: "112 min",
    director: "Roar Uthaug",
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
    year: "2022",
    duration: "125 min",
    director: "Jaume Collet-Serra",
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
    year: "2009",
    duration: "162 min",
    director: "James Cameron",
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
    year: "2022",
    duration: "115 min",
    director: "Matthew Warchus",
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
    year: "2022",
    duration: "161 min",
    director: "Ryan Coogler",
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

interface Props {
  params: {
    id: string;
  };
}

export default function ComprarPage({ params }: Props) {
  const { id } = params;
  const movie = movies[id];
  const trailerId = movie.trailerLink.split("v=")[1]?.split("&")[0];
  const embedLink = `https://www.youtube.com/embed/${trailerId}?autoplay=1&mute=1`;

  return (
    <div className="centro">
      <div className="parte-1">
        <iframe
          className="video-compra w-full h-full"
          src={embedLink}
          allow="autoplay; encrypted-media"
          allowFullScreen
          frameBorder="0"
        ></iframe>
        <div className="poster-name">
          <img
            src={movie.poster}
            className="poster-comprar"
            alt={movie.title}
          />
          <h3>{movie.title}</h3>
          <p>
            DURACION: <span className="movie-duration">{movie.duration}</span>
          </p>
          <p>
            AÑO: <span className="movie-duration">{movie.year}</span>
          </p>
        </div>
      </div>

      <div className="parte-2">
        <h2>Seleccionar dia</h2>
        <div className="seleccion">
          <div className="carta">
            <p>May</p>
            <p>1</p>
          </div>
          <div className="carta">
            <p>May</p>
            <p>2</p>
          </div>
          <div className="carta">
            <p>May</p>
            <p>3</p>
          </div>
          <div className="carta">
            <p>May</p>
            <p>4</p>
          </div>
          <div className="carta">
            <p>May</p>
            <p>5</p>
          </div>
        </div>
      </div>

      <div className="parte-3">
        <h2>Seleccionar calidad</h2>
        <div className="seleccion">
          <div className="carta nueva">
            <p>2D</p>
          </div>
          <div className="carta nueva">
            <p>3D</p>
          </div>
        </div>
      </div>

      <Pantalla />

      <Link href="">
        <button className="btn-continuar-comprar botones">Continuar</button>
      </Link>
    </div>
  );
}
