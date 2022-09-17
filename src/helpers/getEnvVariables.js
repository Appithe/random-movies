export const getEnvVariables = () => {

    return {
        VITE_MODE: import.meta.env.VITE_MODE,
        VITE_IMDB_API_KEY: import.meta.env.VITE_IMDB_API_KEY,
    };
    
};