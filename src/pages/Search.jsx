// import { useState, useEffect } from "react";
// import axios from "axios";
// import useDebounce from "../hooks/useDebounce";

// const API_KEY = "YOUR_API_KEY";

// export default function Search() {
//   const [query, setQuery] = useState("");
//   const [movies, setMovies] = useState([]);

//   const debounced = useDebounce(query, 500);

//   useEffect(() => {
//     if (!debounced) return;

//     axios
//       .get(
//         `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${debounced}`
//       )
//       .then((res) => setMovies(res.data.results));
//   }, [debounced]);

//   return (
//     <div className="bg-black text-white p-4">
//       <input
//         onChange={(e) => setQuery(e.target.value)}
//         className="p-2 text-black"
//       />

//       <div className="grid grid-cols-5 gap-4 mt-4">
//         {movies.map((m) => (
//           <img key={m.id} src={`https://image.tmdb.org/t/p/w300${m.poster_path}`} />
//         ))}
//       </div>
//     </div>
//   );
// }




import { useState, useEffect } from "react";
import axios from "axios";
import useDebounce from "../hooks/useDebounce";
import Navbar from "../components/Navbar";

// const API_KEY = "YOUR_TMDB_API_KEY";
const API_KEY = "ffc856b2788ab6144be5e18e0ac0ce69";

export default function Search() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const debounced = useDebounce(query, 500);

  useEffect(() => {
    let mounted = true;

    if (!debounced) return;

    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${debounced}`
      )
      .then((res) => {
        if (mounted) setMovies(res.data.results);
      });

    return () => {
      mounted = false;
    };
  }, [debounced]);

  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />

      <div className="p-6">
        <input
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
          className="p-2 text-black w-full mb-4"
        />

        <div className="grid grid-cols-5 gap-4">
          {movies.map((movie) => (
            <img
              key={movie.id}
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}