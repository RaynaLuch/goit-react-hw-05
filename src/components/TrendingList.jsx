import { Link, useLocation } from "react-router-dom";

export const TrendingList = ({ trending = [] }) => {
  const location = useLocation();
  let trendingList = trending.map(function (trendingMovie) {
    return (
      <li key={trendingMovie.id}>
        <Link to={`/movies/${trendingMovie.id}`} state={location}>
          {trendingMovie.original_title}
        </Link>
      </li>
    );
  });
  return <ul>{trendingList}</ul>;
};
