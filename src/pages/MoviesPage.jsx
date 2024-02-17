import { useEffect, useState } from "react";
import { getMovies } from "../api";
import { SearchBar } from "../components/SearchBar";
import { TrendingList } from "../components/TrendingList";
import { useSearchParams } from "react-router-dom";

export default function MoviesPage() {
  const [movies, setMovies] = useState();
  const [searchParams, setSearchParams] = useSearchParams();
  // const [query, setQuery] = useState(searchParams.query);
  const query = searchParams.get("query") ?? "";
  const changeQuery = (newQuery) => {
    searchParams.set("query", newQuery);
    setSearchParams(searchParams);
  };
  useEffect(() => {
    const localGetMovies = async () => {
      const response = await getMovies(query);
      setMovies(response.data.results);
      setSearchParams({ query: query });
    };
    localGetMovies();
  }, [query]);

  return (
    <div>
      <SearchBar query={query} setQuery={changeQuery} />
      <TrendingList trending={movies} />
    </div>
  );
}
