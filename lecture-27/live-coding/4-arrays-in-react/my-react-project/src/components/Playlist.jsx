import React, { useState } from 'react';
import './Playlist.css';

const initialSongs = [
  { id: 1, title: 'Smells Like Teen Spirit', artist: 'Nirvana', duration: 301 },
  { id: 2, title: 'Wonderwall', artist: 'Oasis', duration: 258 },
  { id: 3, title: '...Baby One More Time', artist: 'Britney Spears', duration: 211 },
  { id: 4, title: 'Waterfalls', artist: 'TLC', duration: 289 },
  { id: 5, title: 'Losing My Religion', artist: 'R.E.M.', duration: 268 },
];

function Playlist() {
  // initial value is initialSongs
  const [songs, setSongs] = useState(initialSongs);
  // searchTerm is used to filter each song in the playlist
  const [searchTerm, setSearchTerm] = useState("");

  // When searchTerm changes, filter songs by title. 
  // Convert to lowercase so it's easier to search
  // song: losing my religion
  // search keyword is "losing"
  const filteredSongs = songs.filter(song => 
    song.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className='playlist-container'>
      <h1>My 90s Playlist</h1>
      <input
        type="input"
        placeholder='Search for a song...'
        className='search-bar'
        value={searchTerm}
        onChange={event => setSearchTerm(event.target.value) }
      />

      <div className='song-list'>
        <ul>
          {
            filteredSongs.map(song => {
              return (
                <li>
                  <span className='song-title'>{song.title}</span>
                  <span className='song-artist'>{song.artist}</span>
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default Playlist;
