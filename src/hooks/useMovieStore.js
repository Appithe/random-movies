import { useDispatch } from 'react-redux';
import { onGetMovies, onGetMovieTrailer, onGetImdbApiUsage } from '../store';
import { imdbApi } from '../api';
import { getEnvVariables } from '../helpers';

const { VITE_IMDB_API_KEY } = getEnvVariables();

export const useMovieStore = () => {
    const dispatch = useDispatch();

    const startGetMovies = async () => {
        try {

            const { data } = await imdbApi.get(`/InTheaters/${VITE_IMDB_API_KEY}`);
            dispatch( onGetMovies(data) );

        } catch (error) {
            console.error('Ups! Algo salió mal: \n', error);
        }
    };

    const startGettingTrailerURL = async (id) => {
        try {

            const { data } = await imdbApi.get(`/YouTubeTrailer/${VITE_IMDB_API_KEY}/${id}`);
            startGettingImdbApiUsage();
            dispatch( onGetMovieTrailer( data ) );

        } catch (error) {
            console.error('Ups! Algo salió mal: \n', error);
        }
    };

    const startGettingImdbApiUsage = async () => {
        try {

            const { data } = await imdbApi.get(`/Usage/${VITE_IMDB_API_KEY}`);
            dispatch( onGetImdbApiUsage( data ) );

        } catch (error) {
            console.error('Ups! Algo salió mal: \n', error);
        }
    };

    return {

        //* Propiedades

        //* Métodos
        startGetMovies,
        startGettingTrailerURL,
        startGettingImdbApiUsage

    };
};
