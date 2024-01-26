import React, { useState, useEffect } from 'react';
import Header from './header';
import Footer from './footer';
import GalleryFilm from './galleryFilm';
import '../styles/App.css';
const apiKey = 'c91743cd8227267d56803204905af6c4';

const App = () => {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const searchDefaultMovies = async () => {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setMovies(data.results);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        searchDefaultMovies();
    }, []);

    const searchMovies = async (searchQuery) => {
        if (!searchQuery.trim()) {
            setMovies([]);
            return;
        }

        try {
            const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchQuery}`);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            setMovies(data.results);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div>
            <Header handleSearch={searchMovies} />
            <main>
                <GalleryFilm movies={movies} />
            </main>
            <Footer hasResults={movies.length > 0} />
        </div>
    );
};

export default App;
