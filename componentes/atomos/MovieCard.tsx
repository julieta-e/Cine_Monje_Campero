// componentes/atomos/MovieCard.tsx
import Link from "next/link";

interface Movie {
  id: string;
  title: string;
  poster: string;
  releaseDate: string;
  genres: string[];
}

interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  return (
    <div className="movieCard">
      <img src={movie.poster} alt={movie.title} className="poster" />
      <h3 className="movieTitle">{movie.title}</h3>
      <p className="pp">
        <b>Fecha:</b> {movie.releaseDate}
      </p>
      <p className="pp">
        <b>Géneros:</b> {movie.genres.join(", ")}
      </p>
      <div className="links">
        <Link href={`/principal/${movie.id}`} className="trailerLink">
          Ver detalle
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
