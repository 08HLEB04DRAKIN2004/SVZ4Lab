// Search.jsx
import React, { useState } from 'react';
import '../styles/SearchButton.css'
const Search = ({ handleSearch }) => {
    const [query, setQuery] = useState('');

    const searchMovies = () => {
        handleSearch(query);
    };

    const clearSearch = () => {
        setQuery('');
        handleSearch(''); // Очистка поиска
    };

    return (
        <div className="search">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search movies"
            />
            <button onClick={searchMovies}>Search</button>
            <button onClick={clearSearch}>Clear</button>
        </div>
    );
};

export default Search;
