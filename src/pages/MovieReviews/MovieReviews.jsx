import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { TMDB } from "../../API/MOVIE/TMDBAPI";

export default function MovieReviews() {
  const { id } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await TMDB.getData(`3/movie/${id}/reviews`);
      setMovieReviews(data.results);
    };
    fetchData();
  }, [id]);

  return (
    <ul>
      {movieReviews.length === 0 ? (
        <p>No reviews yet</p>
      ) : (
        movieReviews?.map(({ author, content, id }) => (
          <li key={id}>
            <h3>{author}</h3>
            <p>{content}</p>
          </li>
        ))
      )}
    </ul>
  );
}
