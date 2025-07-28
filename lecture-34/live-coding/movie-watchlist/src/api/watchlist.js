import axios from "axios";

const watchlist = axios.create({
    baseURL: "http://localhost:3001"
});

// GET movies in watchlist
export const getWatchlist = () => watchlist.get("/watchlist");
// POST a movie to watchlist
export const addToWatchlist = (movie) => watchlist.post("/watchlist", movie);
// PATCH a movie in watchlist
export const updateWatchlistItem = (id, update) => watchlist.patch(`/watchlist/${id}`, update);
// DELETE a movie in watchlist
export const deleteWatchlistItem = (id) => watchlist.delete(`/watchlist/${id}`);