import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../../pages/Home/Home";
import Header from "../Header/Header";
import Movies from "../../pages/Movies/Movies";

const trendingQuery = '/trending/get-trending';

function App() {
  return (<>
  <Header/>
  <Routes>
    <Route path="/" element={<Home trendingQuery = {trendingQuery}/>}></Route>
    <Route path="/movies" element={<Movies/>}></Route>
  </Routes>
  </>);
}

export default App;
 