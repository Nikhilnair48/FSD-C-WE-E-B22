import React, { useState } from 'react';
import SongItem from './SongItem'; // Import the new child component
import './Playlist.css';

// The initial data for our playlist
const initialSongs = [
  { id: 1, title: 'Smells Like Teen Spirit', artist: 'Nirvana', duration: 301 },
  { id: 2, title: 'Wonderwall', artist: 'Oasis', duration: 258 },
  { id: 3, title: '...Baby One More Time', artist: 'Britney Spears', duration: 211 },
  { id: 4, title: 'Waterfalls', artist: 'TLC', duration: 289 },
  { id: 5, title: 'Losing My Religion', artist: 'R.E.M.', duration: 268 },
];

function Playlist() {
  // State for the list of songs
  const [songs, setSongs] = useState(initialSongs);
  // State for the search bar input
  const [searchTerm, setSearchTerm] = useState('');

  // --- HANDLER FUNCTION (LIFTED STATE) ---
  // This function lives in the parent because it needs to modify the parent's state.
  const handleRemoveSong = (songIdToRemove) => {
    console.log('Removing song with ID:', songIdToRemove);
    // Use .filter() to create a NEW array without the song that matches the ID
    const updatedSongs = songs.filter(song => song.id !== songIdToRemove);
    // Update the state with the new, filtered array
    setSongs(updatedSongs);
  };

  // --- DERIVED STATE & CALCULATIONS ---

  // Filter the songs based on the search term before rendering
  const filteredSongs = songs.filter(song =>
    song.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // TASK 1 SOLUTION: Use .reduce() to calculate the total duration
  const totalDuration = songs.reduce((sum, currentSong) => sum + currentSong.duration, 0);
  const minutes = Math.floor(totalDuration / 60);
  const seconds = totalDuration % 60;

  return (
    <div className="playlist-container">
      <h1>My 90s Playlist</h1>

      {/* Display the calculated total duration */}
      <div className="playlist-info">
        Total Duration: {minutes}m {seconds}s
      </div>

      <input
        type="text"
        placeholder="Search for a song..."
        className="search-bar"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />

      <div className="song-list">
        <ul>
          {/* TASK 2 SOLUTION: Map over the filtered songs and render the SongItem component */}
          {filteredSongs.map(song => (
            <SongItem
              key={song.id}
              song={song}
              onRemove={handleRemoveSong} // Pass the handler function down as a prop
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Playlist;
