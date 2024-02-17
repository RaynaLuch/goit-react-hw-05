import { NavLink } from "react-router-dom";
import HomePage from "../pages/HomePage";
import MoviesPage from "../pages/MoviesPage";

export const NavBar = () => {
  return (
    <nav style={{ display: "flex", gap: 8 }}>
      <NavLink to="/" element={<HomePage />}>
        Home
      </NavLink>
      <NavLink to="/movies" element={<MoviesPage />}>
        Movies
      </NavLink>
    </nav>
  );
};
