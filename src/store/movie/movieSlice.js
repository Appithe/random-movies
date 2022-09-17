import { createSlice } from '@reduxjs/toolkit';

export const movieSlice = createSlice({
    name: 'movieSlice',
    initialState: {
        isLoadingMovies: true,
        moviesList: {},
        activeMovie: null
    },
    reducers: {
        onGetMovies: (state, { payload }) => {
            state.isLoadingMovies = false;
            state.moviesList = payload.items;
            state.activeMovie = payload.items[0];
        },
    }
});

export const {
    onGetMovies,
    onShowRandomMovie
} = movieSlice.actions;