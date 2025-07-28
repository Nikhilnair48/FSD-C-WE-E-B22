import { Navigate, Route, Routes } from 'react-router';
import './App.css';
import MovieSearchPage from './pages/MovieSearchPage';
import MovieDetailPage from './pages/MovieDetailPage';
import WatchlistPage from './pages/WatchlistPage';
import WatchlistDetailPage from './pages/WatchlistDetailPage';

/*
  / -> navigate to MovieSearchPage
  /movies -> MovieSearchPage
  /movies/:id -> MovieDetailPage
  /watchlist -> WatchlistPage
  /watchlist/:id -> WatchlistDetailsPage

*/
function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/movies" replace /> } />
      <Route path="/movies" element={<MovieSearchPage /> } />
      <Route path="/movies/:id" element={<MovieDetailPage /> } />
      <Route path="/watchlist" element={<WatchlistPage /> } />
      <Route path="/watchlist/:id" element={<WatchlistDetailPage /> } />
    </Routes>
  );
}

export default App;
