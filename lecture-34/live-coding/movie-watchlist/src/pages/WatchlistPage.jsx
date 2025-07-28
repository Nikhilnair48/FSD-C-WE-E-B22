import React, { useEffect, useState } from "react";
import { deleteWatchlistItem, getWatchlist } from "../api/watchlist";
import NavBar from "../components/NavBar";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import { Link } from "react-router";
import MovieCard from "../components/MovieCard";

function WatchlistPage() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const load = async () => {
        setLoading(true);
        setError("");
        try {
            const response = await getWatchlist();
            setMovies(response.data);
        } catch {
            setError("Could not load watchlist");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        load();
    }, []);

    const remove = async (id) => {
        try {
            await deleteWatchlistItem(id);
            setMovies(prev => prev.filter(prevMovie => prevMovie.id !== id));
        } catch {
            alert("Removing movie failed");
        }
    }
  
    return (
        <>
            <NavBar />
            {loading && <Loader />}
            {error && <ErrorMessage message={error} />}
            <div style={{ display: "flex", flexWrap: "wrap"}}>
                {movies.map((movie) => (
                    <div key={movie.id} style={{ postion: "relative" }}>
                        <Link to={`/watchlist/${movie.id}`}>
                            <MovieCard movie={movie} />
                        </Link>
                        <button
                            onClick={() => remove(movie.id)}
                            style={{
                                position: "absolute",
                                top: 10, right: 10, color: "white", border: "none"
                            }}
                        >
                            ❌
                        </button>
                    </div>
                ))}
            </div>
        </>
    );
}

export default WatchlistPage;
