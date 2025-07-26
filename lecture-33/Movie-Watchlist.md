# Movie Watchlist

What is it? a Movie Watchlist React Application

Purpose? Demonstrate GET/POST/PUT/PATCH/DELETE with React, Axios, Router

What are the two HTTP methods relevant to updating data (resource)?
- PATCH
- PUT

POST /watchlist
{
    id: 123,
    name: "Superman",
    description: "",
}

PATCH /watchlist/123
{
    rating: 5
}

Updated state of the watchlist with id: 123
{
    id: 123,
    name: "Superman",
    description: "",
    rating: 5
}

PUT /watchlist/123
{
    id: 123,
    name: "Lord of the Rings",
    description: "asdf",
}

DELETE /watchlist/123

Key Features
- Search (HTTP method: GET)
    - Search for movies
    - view details of a movie result
- Watchlist
    - Add movie to watchlist (HTTP method: POST)
    - Give the movie in the watchlist a rating (HTTP method: PATCH)
    - Delete a movie from the watchlist (HTTP method: DELETE)

Tech & Architecture

## Tech Stack

React + Vite, React Router v6, Axios (replacement for fetch)

Backend server: node + express

## Routes

GET movies for a search keyword: /movies?s={keyword}&apikey={apiKey}
GET movie details for selected result: /movies/{movieId}
GET list of saved movies: /watchlist
PATCH a movie in our watchlist to update the rating: /watchlist/{movieId}
DELETE a movie in our watchlist: /watchlist/{movieId}

## Folder Structure

src/
|-- api/             # omdb.js, watchlist.js
|-- components/      # NavBar, SearchBar, MovieCard, Rating, Loader, ErrorMessage
|-- pages/           # MovieSearchPage, MovieDetailPage, WatchlistPage, WatchlistDetailPage
|-- App.jsx          # React router setup
|-- main.jsx         # JSX entry point
