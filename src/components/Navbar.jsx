import React from 'react';

export const Navbar = () => {
    
    // const userStatus = 'not-auth'; // checking, auth, not-auth

    return (

        <nav className="bg-white border-gray-200 px-2 mb-8 sm:px-4 py-2.5 rounded dark:bg-gray-900">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <a href="/" className="flex items-center">
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Películas en cines  &#x1F37F;</span>
                </a>
                <div className="hidden w-full md:block md:w-auto">
                    <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    {/* TODO: poner numero de peticiones a imdb */}
                        <li>
                            <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                {/* {
                                    userStatus === 'auth' ? 'Cerrar sesión' : 'Iniciar sesión'
                                } */}
                            </a>
                        </li>                          
                    </ul>
                </div>
            </div>
        </nav>

    );
};
