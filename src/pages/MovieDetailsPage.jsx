import { useParams, Link, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieDetails } from "../api";
import { Suspense, useRef } from "react";
import { BackLink } from "../components/BackLink";

export default function MovieDetailsPage() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backLinkRef = useRef(location.state);
  console.log(location);
  useEffect(() => {
    const localGetMovieDetails = async () => {
      const response = await getMovieDetails(id);
      setMovie(response.data);
    };
    localGetMovieDetails();
  }, [id]);
  return (
    <div>
      <div>
        <BackLink href={backLinkRef.current ?? "/movies"} />
      </div>
      <div style={{ display: "flex", gap: 8 }}>
        <img
          src={"https://image.tmdb.org/t/p/w500/" + movie?.poster_path}
          alt={movie?.original_title}
          height="500"
        />
        <div>
          <h2>{movie?.original_title}</h2>
          <p>User score: {movie?.vote_average * 10}</p>
          <h3>Overview</h3>
          <p>{movie?.overview}</p>
          <h3>Genres</h3>
          <p>{movie?.genres.map((genre) => genre.name).join(", ")}</p>
        </div>
      </div>
      <div style={{ display: "flex", gap: 8 }}>
        <Link to="Reviews" params={{ id: id }} state={location.state}>
          Reviews
        </Link>
        <Link to="Cast" params={{ id: id }} state={location.state}>
          Cast
        </Link>
      </div>

      <Suspense fallback={<b>Loading subpage...</b>}>
        <Outlet />
      </Suspense>
    </div>
  );
}
