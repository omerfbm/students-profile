
const SearchInput = ({ search, setSearch, placeholderText="Search" }) => {
    return (
        <input
            type="search"
            onInput={e => setSearch(e.target.value)}
            value={search}
            placeholder={placeholderText}
        />
    )
}

export default SearchInput
