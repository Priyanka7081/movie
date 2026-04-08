export default function MovieCard({ movie }) {
  return (
    <img
      src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
      className="rounded hover:scale-110 transition duration-300 cursor-pointer"
    />
  );
}