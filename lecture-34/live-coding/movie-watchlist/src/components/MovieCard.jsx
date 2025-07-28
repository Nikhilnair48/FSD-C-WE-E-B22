import React from "react";

/*
    MovieCard -> show the movie details (Title, Year, Poster)
    User should be able ot add a movie to their watchlist -> onAddToWatchlist
*/
function MovieCard({ movie, onAddToWatchlist }) {
    
    return (
        <div
            style={{
                border: "1px solid #dddddd",
                borderRadius: 4,
                padding: "1rem",
                margin: "0.5rem",
                width: 200,
                textAlign: "center"
            }}
        >
            <img
                src={movie.Poster || ""}
                alt={movie.Title}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <h4>{movie.Title}</h4>
            <p>{movie.Year}</p>
            {
                // if onAddToWatchlist is not undefined or null
                // short circuiting
                onAddToWatchlist && (
                    <button onClick={() => onAddToWatchlist(movie)}>
                        Add to Watchlist
                    </button>
                )
            }
        </div>
    )
}
/*
    let isValid = true;
    let isNumber = true;
    isValid && isNumber => true && true => true
*/
export default MovieCard;
