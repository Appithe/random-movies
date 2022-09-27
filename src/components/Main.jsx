import React from 'react';
import { useSelector } from 'react-redux';
import { useMovieStore } from '../hooks';
import { MovieCard } from './';

export const Main = () => {

    const { activeMovie } = useSelector(state => state.movies);

    const {
        startGetNextMovie,
        startGettingTrailerURL
    } = useMovieStore();

    const handleClickNextMovie = () => {
        startGetNextMovie();
        startGettingTrailerURL(activeMovie.id);
    };

    return (
        <>
            < MovieCard />
            <button onClick={handleClickNextMovie} className="bg-blue-500 hover:bg-blue-400 text-white rounded-md p-3 w-64 place-self-center">Mostrar otra película &#x1F3A5;</button>
        </>
    );
};
