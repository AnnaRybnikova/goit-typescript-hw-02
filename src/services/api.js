import axios from "axios";

const ACCESS_KEY = 'n6P5fzeFupmEO9iLuJ-yyEpjIf-WocB0GyZYNaAYHpA';

axios.defaults.baseURL = 'https://api.unsplash.com/';
axios.defaults.headers.common = {
    'Accept-Version': 'v1',
    'Authorization': `Client-ID ${ACCESS_KEY}`
};

export const fetchImages = async (query, page) => {
    const response = await axios.get('/search/photos', {
        params: {
            query,
            page,
            per_page: 12,
        }
    });
    return response.data;
}

