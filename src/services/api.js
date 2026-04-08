import axios from "axios";

// const API_KEY = "YOUR_TMDB_API_KEY";
const API_KEY = "ffc856b2788ab6144be5e18e0ac0ce69";

export const fetchMovies = (page = 1) =>
  axios.get(
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&page=${page}`
  );