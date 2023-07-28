import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "../SharedLayout/SharedLayout";

const Home = lazy(() => import("../../pages/Home/Home"));
// const SharedLayout = lazy(() => import("../SharedLayout/SharedLayout"));
const Movies = lazy(() => import("../../pages/Movies/Movies"));
const MovieDetails = lazy(() =>
  import("../../pages/MoiveDetails/MovieDetails")
);
const MovieReviews = lazy(() =>
  import("../../pages/MovieReviews/MovieReviews")
);
const MovieCast = lazy(() => import("../../pages/MovieCast/MovieCast"));

const trendingQuery = "/trending/get-trending";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home trendingQuery={trendingQuery} />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/movies/:id" element={<MovieDetails />}>
          <Route path="reviews" element={<MovieReviews />}></Route>
          <Route path="cast" element={<MovieCast />}></Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
