import React from 'react';
import { useSelector } from 'react-redux';

import { MovieImage, MovieBody } from './';
import { useMovieStore } from '../hooks';

export const MovieCard = () => {

    // TODO: Implementar guardado de películas en lista de favoritos

    const { startGettingTrailerURL } = useMovieStore();

    const { activeMovie } = useSelector(state => state.movies);

    const handleClickShowTrailer = () => {
        let trailerURL = startGettingTrailerURL(activeMovie?.id);
        console.log(trailerURL);
        window.open('https://www.youtube.com/watch?v=mqKAhsp-QqQ');
    };

    return (
        <>
            <section className="shadow-lg bg-cyan-50 rounded-lg grid grid-cols-12 w-4/5 h-fit place-self-center animate__animated animate__backInLeft animate__slow">
                <MovieImage onClick={handleClickShowTrailer} source={activeMovie?.image} alt={activeMovie?.title} />
                <MovieBody onClick={handleClickShowTrailer} title={activeMovie?.title} genres={activeMovie?.genres} imDbRating={activeMovie?.imDbRating} plot={activeMovie?.plot} />
            </section>
        </>
    );
};
