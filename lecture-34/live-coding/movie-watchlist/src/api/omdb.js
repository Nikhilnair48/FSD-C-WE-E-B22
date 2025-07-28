import axios from "axios";

const ombd = axios.create({
    baseURL: "http://www.omdbapi.com",
    // TODO: set this API Key before running the application
    params: { apikey: "" }
});

ombd.interceptors.response.use(
    response => response,
    error => {
        console.error("OMDB Error", error);
        return Promise.reject(error);
    }
);

export default ombd;