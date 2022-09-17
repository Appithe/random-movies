import { configureStore } from '@reduxjs/toolkit';
import { movieSlice } from './';

export const store =  configureStore({
    reducer: {
        movies: movieSlice.reducer,
    },
});