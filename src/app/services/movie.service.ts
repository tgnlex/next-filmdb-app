import Axios from 'axios';

const API_KEY="1644cce8d86d670ea6eac78a464166f3"
const API_BASE_URL='https://api.themoviedb.org/3';

const client = Axios.create({
    baseURL: API_BASE_URL,
    params: {api_key: API_KEY}
});

export const searchMovies = async(query: string) => {
    try {
        const response = await client.get("/search/movie", {
            params: {query,},
        });

        if(response.data && response.data.results) {
            return response.data.results;
        } else { 
            console.error("Couldn't get the data.");
        }
    } catch(error) {
        console.error(error);
        return [];
    }
}