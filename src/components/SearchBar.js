import "./index.css";

const SearchBar = ({ search, setSearch, placeholderText = "Search" }) => {
  return (
    <input
    className="my-7 -mt-3 rounded-sm  outline-none border-b-2"
      type="search"
      onInput={(e) => setSearch(e.target.value)}
      value={search}
      placeholder={placeholderText}
    />
  );
};

export default SearchBar;
