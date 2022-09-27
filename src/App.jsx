import React, { useEffect } from 'react';
import { Main, Navbar, Error } from './components/';
import 'animate.css';
import { useMovieStore } from './hooks';
import { useSelector } from 'react-redux';

function App() {

    // TODO: Implementar modo oscuro
    const {
        startGetMovies,
        startGettingImdbApiUsage,
    } = useMovieStore();

    const { errorMessage } = useSelector(state => state.movies);

    useEffect(() => {
        startGetMovies();
        startGettingImdbApiUsage();
    }, []);

    return (
        <main className="h-screen bg-gradient-to-br from-[#9FFFF5] to-[#BDFFFD]">
            {/* <main className="h-screen bg-gradient-to-br from-[#134074] to-[#0B2545]"> */}
            <Navbar />
            <div className="flex flex-col gap-8 justify-center">
                {
                    errorMessage
                        ? <Error message={errorMessage} />
                        : <Main />
                }
            </div>
        </main>
    );
}

export default App;
