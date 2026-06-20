import React, { useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';

function FileUploader({ onAddSongs }) {
  const fileInputRef = useRef(null);

  const handleFileSelect = (e) => {
    const files = Array.from(e.target.files);
    const audioFiles = files.filter(file =>
      file.type.startsWith('audio/')
    );

    const newSongs = audioFiles.map(file => ({
      id: uuidv4(),
      name: file.name.replace(/\.[^/.]+$/, ''),
      url: URL.createObjectURL(file),
      artist: 'Unknown Artist',
      duration: 0,
    }));

    if (newSongs.length > 0) {
      onAddSongs(newSongs);
      alert(`Successfully added ${newSongs.length} song(s)!`);
    } else {
      alert('Please select audio files (mp3, wav, ogg, etc.)');
    }

    // Reset input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="file-uploader">
      <input
        ref={fileInputRef}
        type="file"
        multiple
        accept="audio/*"
        onChange={handleFileSelect}
        style={{ display: 'none' }}
      />
      <button
        className="upload-btn"
        onClick={() => fileInputRef.current?.click()}
      >
        📁 Upload Music
      </button>
    </div>
  );
}

export default FileUploader;
