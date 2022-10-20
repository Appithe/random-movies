import axios from 'axios';

const IMDB_API_URL = 'https://imdb-api.com/es-mx/API';

const imdbApi = axios.create({
    baseURL: IMDB_API_URL
});

export default imdbApi;