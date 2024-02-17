import { getMovieCast } from "../api";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Cast() {
  const { id } = useParams();

  const [cast, setCast] = useState(null);
  useEffect(() => {
    const localGetMovieCast = async () => {
      const response = await getMovieCast(id);
      setCast(
        response.data.cast.map((actor) => (
          <div>
            <img
              src={"https://image.tmdb.org/t/p/w500/" + actor.profile_path}
              alt={actor.name}
              height="120"
            />
            <h2> {actor.name}</h2>
            <p>{actor.character}</p>
          </div>
        ))
      );
    };
    localGetMovieCast();
  }, [id]);
  return <p>{cast}</p>;
}
