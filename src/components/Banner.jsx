import { useEffect, useState } from "react";
import { fetchMovies } from "../services/api";

export default function Banner() {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getMovie = async () => {
      const res = await fetchMovies();
      const random =
        res.data.results[Math.floor(Math.random() * res.data.results.length)];
      setMovie(random);
    };

    getMovie();
  }, []);

  return (
    <div
      className="h-[400px] text-white flex items-center px-6"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})`,
        backgroundSize: "cover",
      }}
    >
      <h1 className="text-3xl font-bold">{movie?.title}</h1>
    </div>
  );
}