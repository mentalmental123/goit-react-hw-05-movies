import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { TMDB } from "../../API/MOVIE/TMDBAPI";

export default function MovieCast() {
  const { id } = useParams();
  const [movieCast, setMovieCast] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await TMDB.getData(`3/movie/${id}/credits`);
      setMovieCast(data.cast);
    };
    fetchData();
  }, [id]);

  console.log(movieCast);

  return (
    <ul>
      {movieCast?.map(({ profile_path, character, name, id }) => (
        <li key={id}>
          <img
            src={`https://image.tmdb.org/t/p/w200${profile_path}`}
            alt={(character, name)}
          ></img>
          <h3>{name}</h3>
          <p>{character}</p>
        </li>
      ))}
    </ul>
  );
}
