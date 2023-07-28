import { useEffect, useState } from "react";
import { searchParams, TMDB } from "../../API/MOVIE/TMDBAPI";
import { Link, useLocation, useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

import css from "./movies.module.css";

export default function Movies() {
  const [movie, setMovie] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchParamsQuery, setSearchParamsQuery] = useSearchParams();
  const location = useLocation();
  const name = searchParamsQuery.get("query") || "";
  // setSearchQuery(name || "");
  // console.log(name);

  useEffect(
    () => {
      const fetchData = async () => {
        console.log(name);
        searchParams.append("query", searchQuery || name);
        const data = await TMDB.getData("3/search/movie");
        setMovie(data.results);
      };

      fetchData();
    },
    [searchQuery],
    [name]
  );

  function onSubmitGetQuery(evt) {
    evt.preventDefault();
    const inputValue = evt.target.query.value;
    inputValue.trim();
    if (inputValue === "") {
      // setMovie([]);
      setSearchParamsQuery({});
      return;
    }
    const nextParams = { query: inputValue };
    setSearchParamsQuery(nextParams);
    setSearchQuery(inputValue);
  }

  return (
    <>
      <form onSubmit={onSubmitGetQuery}>
        <label htmlFor="query"></label>
        <input id="query"></input>
        <button type="submit">find</button>
      </form>

      <ul className={css["movie-list"]}>
        {movie.map(({ title, id }) => (
          <Link state={{ from: location }} to={`/movies/${id}`} key={id}>
            {title}
          </Link>
        ))}
      </ul>
    </>
  );
}
