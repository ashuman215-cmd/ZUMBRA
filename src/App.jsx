import React, { useState, useEffect } from 'react';
import './styles/App.css';
import Player from './components/Player';
import Playlist from './components/Playlist';
import FileUploader from './components/FileUploader';

function App() {
  const [songs, setSongs] = useState([]);
  const [currentSongIndex, setCurrentSongIndex] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Load songs from localStorage on mount
    const savedSongs = localStorage.getItem('zumbraSongs');
    if (savedSongs) {
      setSongs(JSON.parse(savedSongs));
    }
  }, []);

  useEffect(() => {
    // Save songs to localStorage whenever they change
    localStorage.setItem('zumbraSongs', JSON.stringify(songs));
  }, [songs]);

  const addSongs = (newSongs) => {
    setSongs([...songs, ...newSongs]);
  };

  const removeSong = (index) => {
    const newSongs = songs.filter((_, i) => i !== index);
    setSongs(newSongs);
    if (currentSongIndex === index) {
      setIsPlaying(false);
      setCurrentSongIndex(null);
    }
  };

  const currentSong = currentSongIndex !== null ? songs[currentSongIndex] : null;

  return (
    <div className="app">
      <header className="app-header">
        <h1>🎵 ZUMBRA</h1>
        <p>Offline Music Player</p>
      </header>

      <main className="app-main">
        <div className="player-section">
          <Player
            song={currentSong}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            onNext={() => {
              if (currentSongIndex !== null && currentSongIndex < songs.length - 1) {
                setCurrentSongIndex(currentSongIndex + 1);
              }
            }}
            onPrevious={() => {
              if (currentSongIndex !== null && currentSongIndex > 0) {
                setCurrentSongIndex(currentSongIndex - 1);
              }
            }}
          />
        </div>

        <div className="content-section">
          <FileUploader onAddSongs={addSongs} />
          <Playlist
            songs={songs}
            currentSongIndex={currentSongIndex}
            onSelectSong={(index) => {
              setCurrentSongIndex(index);
              setIsPlaying(true);
            }}
            onRemoveSong={removeSong}
          />
        </div>
      </main>

      <footer className="app-footer">
        <p>Made with ❤️ for music lovers</p>
      </footer>
    </div>
  );
}

export default App;
