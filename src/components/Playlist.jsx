import React, { useState } from 'react';

function Playlist({ songs, currentSongIndex, onSelectSong, onRemoveSong }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSongs = songs.filter(song =>
    song.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (song.artist && song.artist.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="playlist">
      <h3>Playlist ({songs.length} songs)</h3>
      
      <div className="playlist-search">
        <input
          type="text"
          placeholder="Search songs or artists..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="playlist-items">
        {filteredSongs.length === 0 ? (
          <p className="no-songs">No songs found. Upload some music to get started!</p>
        ) : (
          filteredSongs.map((song, index) => {
            const actualIndex = songs.indexOf(song);
            return (
              <div
                key={actualIndex}
                className={`playlist-item ${currentSongIndex === actualIndex ? 'active' : ''}`}
                onClick={() => onSelectSong(actualIndex)}
              >
                <div className="song-info">
                  <span className="song-name">{song.name}</span>
                  <span className="song-artist">{song.artist || 'Unknown Artist'}</span>
                </div>
                <button
                  className="remove-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    onRemoveSong(actualIndex);
                  }}
                  title="Remove song"
                >
                  ✕
                </button>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default Playlist;
