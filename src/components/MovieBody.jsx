import React from 'react';
import propTypes from 'prop-types';

export const MovieBody = ({
    title,
    genres,
    imDbRating,
    plot,
    onClick
}) => {

    // const userStatus = 'not-auth'; // checking, auth, not-auth

    return (
        <>
            <main className="box-border place-self-center col-start-4 col-span-9 flex flex-col p-5">
                <div className="flex flex-row text-center">
                    <h2 className="text-lg text-left font-bold m-4">{title}</h2>
                    <span className="m-4 text-slate-500">Géneros: {genres}</span>
                    <span className="m-4 text-slate-500">Rating: {imDbRating}</span>
                </div>
                <span className="m-4">{plot}</span>
                <footer className="place-self-end place-content-end flex flex-row gap-4">
                    {/* {
                        userStatus === 'auth' ? (
                            <button className="bg-blue-500 hover:bg-blue-400 text-white rounded-md p-3" >
                            Guardar película
                            </button>
                        ) : null
                    } */}
                    <button
                        className="border-2 border-blue-500 hover:bg-blue-400 hover:text-white hover:border-blue-400 rounded-md p-3"
                        onClick={onClick}
                    >
                        Ver trailer
                    </button>
                </footer>
            </main>
        </>
    );
};

MovieBody.propTypes = {
    title: propTypes.string.isRequired,
    genres: propTypes.string.isRequired,
    imDbRating: propTypes.string.isRequired,
    plot: propTypes.string.isRequired,
    onClick: propTypes.func.isRequired,
};
