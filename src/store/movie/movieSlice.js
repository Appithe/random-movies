import { createSlice } from '@reduxjs/toolkit';

export const movieSlice = createSlice({
    name: 'movieSlice',
    initialState: {
        isLoadingMovies: true,
        moviesList: {},
        activeMovie: {},
        activeMovieTrailer: null,
        imdbUsage: {},
    },
    reducers: {
        onGetMovies: (state, { payload }) => {
            state.isLoadingMovies = false;
            state.moviesList = payload.items;
            state.activeMovie = payload.items[0];
        },
        onGetMovieTrailer: (state, { payload }) => {
            state.activeMovieTrailer = payload;
        },
        onGetImdbApiUsage: (state, { payload }) => {
            state.imdbUsage = payload;
        },
        onGetNextMovie: (state) => {
            const { moviesList, activeMovie } = state;
            const activeMovieIndex = moviesList.findIndex(movie => movie.id === activeMovie.id);
            const nextMovie = moviesList[activeMovieIndex + 1];
            state.activeMovie = nextMovie;
        }
    }
});

export const {
    onGetMovies,
    onGetMovieTrailer,
    onGetImdbApiUsage,
    onGetNextMovie,
} = movieSlice.actions;