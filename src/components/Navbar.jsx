import React from 'react';
import { useSelector } from 'react-redux';

export const Navbar = () => {

    // const userStatus = 'not-auth'; // checking, auth, not-auth
    // TODO: Implementar autenticación de usuario
    const { imdbUsage } = useSelector(state => state.movies);

    return (

        <nav className="bg-white border-gray-200 px-2 mb-8 sm:px-4 py-2.5 rounded dark:bg-gray-900">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <a href="/" className="flex items-center">
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Películas en cines  &#x1F37F;</span>
                </a>
                <div className="hidden w-full md:block md:w-auto">
                    <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <span href="#" className="block py-2 pr-4 pl-3 text-gray-700 rounded md:border-0  md:p-0 dark:text-gray-400">
                                {
                                    imdbUsage.errorMessage ? imdbUsage.errorMessage : `API Usage: ${imdbUsage?.count} / ${imdbUsage?.maximum}`
                                }
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
};
