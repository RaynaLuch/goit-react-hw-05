export const SearchBar = ({ query, setQuery }) => {
  const submitHandler = (e) => {
    e.preventDefault();

    setQuery(e.target.elements.query.value);
  };
  return (
    <header>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          autoComplete="off"
          name="query"
          autoFocus
          placeholder="Search movies"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {/* <button type="submit">Search</button> */}
      </form>
    </header>
  );
};
