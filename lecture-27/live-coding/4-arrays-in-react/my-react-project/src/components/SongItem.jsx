import React from 'react';

// This component receives 'song' and 'onRemove' as props from its parent.
function SongItem({ song, onRemove }) {
  // This handler is called when the button is clicked.
  const handleRemoveClick = () => {
    // It calls the 'onRemove' function that was passed down from the parent,
    // sending its own song's ID back up.
    onRemove(song.id);
  };

  return (
    <li className="song-item">
      <div className="song-details">
        <span className="song-title">{song.title}</span>
        <span className="song-artist">{song.artist}</span>
      </div>
      <button className="remove-btn" onClick={handleRemoveClick}>
        Remove
      </button>
    </li>
  );
}

export default SongItem;
