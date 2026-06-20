import React, { useRef, useEffect } from 'react';

function Player({ song, isPlaying, setIsPlaying, onNext, onPrevious }) {
  const audioRef = useRef(null);

  useEffect(() => {
    if (!audioRef.current) return;

    if (isPlaying && song) {
      audioRef.current.src = song.url;
      audioRef.current.play().catch(err => console.error('Play error:', err));
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, song]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="player">
      <audio ref={audioRef} />
      
      <div className="player-info">
        <h2>{song ? song.name : 'No song selected'}</h2>
        <p>{song ? song.artist || 'Unknown Artist' : 'Select a song to play'}</p>
      </div>

      <div className="player-controls">
        <button className="control-btn" onClick={onPrevious} title="Previous">
          ⏮️
        </button>
        <button
          className="control-btn play-btn"
          onClick={handlePlayPause}
          title={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? '⏸️' : '▶️'}
        </button>
        <button className="control-btn" onClick={onNext} title="Next">
          ⏭️
        </button>
      </div>
    </div>
  );
}

export default Player;
