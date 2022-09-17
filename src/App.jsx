import React, { useEffect } from 'react';
import { MovieCard, Navbar } from './components/';
import 'animate.css';
import { useMovieStore } from './hooks';

function App() {

    // TODO: Implementar modo oscuro
    const { startGetMovies } = useMovieStore();

    useEffect(() => {
        startGetMovies();
    }, []);

    return (
        <main className="h-screen bg-cyan-300">
            <Navbar />
            <div className="flex flex-col gap-8 justify-center">
                <MovieCard />
                <button className="bg-blue-500 hover:bg-blue-400 text-white rounded-md p-3 w-64 place-self-center">Mostrar otra película &#x1F3A5;</button>
            </div>
        </main>
    );
}

export default App;
