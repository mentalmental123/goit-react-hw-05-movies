import { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { TMDB } from "../../API/MOVIE/TMDBAPI";
import css from "./movieDetails.module.css";
import { Suspense } from "react";

export default function MovieDetails() {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const location = useLocation();
  console.log(location);
  const backLinkHref = location.state?.from ?? "/movies";

  useEffect(() => {
    const fetchData = async () => {
      const data = await TMDB.getData(`3/movie/${id}`);

      setMovieDetails(data);
    };
    fetchData();
  }, []);

  const { poster_path, title, vote_average, overview, genres } = movieDetails;

  return (
    <>
      <div>
        <div>
          <Link className={css["back-link"]} to={backLinkHref}>
            {" "}
            back to movies
          </Link>

          <img
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={title}
          ></img>
          <h2>{title}</h2>

          <p>User score: {Math.round(vote_average * 10)}%</p>
          <p className={css["upper-bold"]}>Overview</p>
          <p>{overview || "no overview yet"}</p>
          <p className={css["upper-bold"]}>Genres</p>
          <p>{genres?.map(({ name }) => ` ${name}`)}</p>
        </div>

        <div className={css["additional-list"]}>
          <p>Additional information</p>
          <Link to={`/movies/${id}/cast`}>Cast</Link>
          <Link to={`/movies/${id}/reviews`}>Reviews</Link>
        </div>
        {/* <Suspense fallback={<div>Loading subpage...</div>}> */}
        <Outlet />
        {/* </Suspense> */}
      </div>
    </>
  );
}
