// Film.jsx
import React from 'react';
import '../styles/film.css';
const Film = ({ movie }) => {
    const { title, poster_path, overview, vote_average } = movie;
    return (
        <div className="film">
            <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt={title} />
            <div className="film-info">
                <h2>{title}</h2>
                <p>{overview}</p>
                <p>IMDb Rating: {vote_average}</p>
            </div>
        </div>
    );
};

export default Film;
