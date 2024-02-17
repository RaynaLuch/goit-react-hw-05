import { useState } from "react";
import { Suspense, lazy } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
const HomePage = lazy(() => import("../pages/HomePage"));
const MoviesPage = lazy(() => import("../pages/MoviesPage"));
import { NavBar } from "./NavBar";
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));
const MovieDetailsPage = lazy(() => import("../pages/MovieDetailsPage"));
const Cast = lazy(() => import("./Cast"));
const Reviews = lazy(() => import("./Reviews"));

export const App = () => {
  return (
    <div>
      <NavBar />
      <Suspense fallback={<b>Loading page...</b>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:id" element={<MovieDetailsPage />}>
            <Route path="/movies/:id/reviews" element={<Reviews />} />
            <Route path="/movies/:id/cast" element={<Cast />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
