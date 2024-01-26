// Header.jsx
import React from 'react';
import Search from './search';
import '../styles/header.css';
const Header = ({ handleSearch }) => {
    return (
        <header>
            <div>
                <h1>Фильмы</h1>
                <Search handleSearch={handleSearch} />
            </div>
        </header>
    );
};

export default Header;
