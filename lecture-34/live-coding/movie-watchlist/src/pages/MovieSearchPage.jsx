import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";
import ErrorMessage from "../components/ErrorMessage";
import ombd from "../api/omdb";
import MovieCard from "../components/MovieCard";
import Loader from "../components/Loader";
import { addToWatchlist } from "../api/watchlist";

/*
    MovieSearchPage - the complete search page visible to the user
        Components to be used: NavBar, SearchBar, MovieCard, Loader, ErrorMessage
        For API calls: omdb
        addToWatchlist from watchlist APIs
*/
function MovieSearchPage() {
    const navigate = useNavigate();
    const { search } = useLocation();
    // TODO: search level queries - initial query, etc

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
  
    const performSearch = async (searchQuery) => {
        setLoading(true);
        setError("");
        try {
            const response = await ombd.get("/", { params: { s: searchQuery }});
            setMovies(response.data.Search);
        } catch {
            setError("Could not fetch movies");
        } finally {
            setLoading(false);
        }
    }

    const handleSearch = (searchQuery) => {
        // navigate(`/movies?q=${searchQuery}`);
        performSearch(searchQuery);
    }

    const handleAdd = async (movie) => {
        try {
            await addToWatchlist(movie);
            alert(`${movie.Title} added!`);
        } catch {
            alert("Adding the movie failed");
        }
    }

    return (
        // React fragment
        <>
            <NavBar />
            <SearchBar onSearch={handleSearch} />
            {/* In a conditional manner, I need to show a loader */}
            {loading && <Loader />}
            {error && <ErrorMessage message={error} />}
            <div style={{ display: "flex", flexWrap: "wrap" }}>
                {
                    movies.map(movie => {
                        return (
                            <Link
                                key={movie.imdbID}
                                to={`/movies/${movie.imdbID}`}
                                style={{ textDecoration: "none" }}
                            >
                                <MovieCard
                                    movie={movie}
                                    onAddToWatchlist={handleAdd}
                                />
                            </Link>
                        )
                    })
                }
            </div>

        </>
    );
}

export default MovieSearchPage;
