import React from 'react';
import Film from './film';
import '../styles/GalleryFilm.css';

const GalleryFilm = ({ movies }) => {
  return (
    <div className="wrapper">
      <div className="gallery">
        {movies.length > 0 ? (
          <div className="gallery-container">
            {movies.map(movie => (
              <Film key={movie.id} movie={movie} />
            ))}
          </div>
        ) : (
          <p>No movies found</p>
        )}
      </div>
    </div>
  );
};

export default GalleryFilm;
