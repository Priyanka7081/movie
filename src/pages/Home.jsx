// import { useEffect, useState } from "react";
// import { fetchMovies } from "../services/api";
// import useInfiniteScroll from "../hooks/useInfiniteScroll";

// export default function Home() {
//   const [movies, setMovies] = useState([]);
//   const [page, setPage] = useState(1);

//   useEffect(() => {
//     loadMovies();
//   }, [page]);

//   const loadMovies = async () => {
//     const res = await fetchMovies(page);
//     setMovies((prev) => [...prev, ...res.data.results]);
//   };

//   useInfiniteScroll(() => setPage((prev) => prev + 1));

//   return (
//     <div className="bg-black text-white p-4">
//       <h1 className="text-2xl mb-4">Today's Top Show</h1>

//       <div className="grid grid-cols-5 gap-4">
//         {movies.map((movie) => (
//           <img
//             key={movie.id}
//             src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
//             loading="lazy"
//             className="hover:scale-110 transition"
//           />
//         ))}
//       </div>
//     </div>
//   );
// }






import { useEffect, useState } from "react";
import { fetchMovies } from "../services/api";
import useInfiniteScroll from "../hooks/useInfiniteScroll";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import MovieList from "../components/MovieList";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    let mounted = true;

    const loadMovies = async () => {
      const res = await fetchMovies(page);

      if (mounted) {
        setMovies((prev) => [...prev, ...res.data.results]);
      }
    };

    loadMovies();

    return () => {
      mounted = false;
    };
  }, [page]);

  useInfiniteScroll(() => setPage((prev) => prev + 1));

  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <Banner />

      <div className="p-6">
        <h2 className="text-xl mb-4">Movies</h2>
        <MovieList movies={movies} />
      </div>
    </div>
  );
}