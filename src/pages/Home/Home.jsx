import { Link } from "react-router-dom";

import { TMDB } from "../../API/MOVIE/TMDBAPI";
import { useEffect, useState } from "react";
import css from "./home.module.css";

export default function Hom(trendingQuery) {
  const [trandingMovies, setTrandingMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await TMDB.getData("3/trending/all/day");
      setTrandingMovies(data.results);
    };
    fetchData();
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <ul className={css["movies-list"]}>
        {trandingMovies.map(({ title, id }) => (
          <Link to={`/movies/${id}`} key={id} className={css.movie}>
            {title}
          </Link>
        ))}
      </ul>
    </>
  );
}
