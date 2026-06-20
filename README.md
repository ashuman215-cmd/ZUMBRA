# ZUMBRA 🎵

An offline music player app designed for seamless local music playback with a modern, intuitive interface.

## Features

- 🎧 **Offline Playback** - Play your music without internet connection
- 📁 **Local File Management** - Browse and organize your music library
- 📝 **Playlist Support** - Create and manage custom playlists
- 🔍 **Search & Filter** - Easily find songs, artists, and albums
- 🎚️ **Playback Controls** - Volume control, play speed adjustment, and more
- 🎨 **Modern UI** - Clean, responsive interface for all devices
- 💾 **Persistent Storage** - Your playlists and preferences are saved locally

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ashuman215-cmd/zumbra.git
cd zumbra
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The app will open at `http://localhost:3000`

## Project Structure

```
zumbra/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Player.jsx
│   │   ├── Playlist.jsx
│   │   ├── FileUploader.jsx
│   │   └── Controls.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── Settings.jsx
│   ├── utils/
│   │   ├── audioPlayer.js
│   │   └── fileHandler.js
│   ├── styles/
│   │   ├── App.css
│   │   └── index.css
│   ├── App.jsx
│   └── index.js
├── package.json
├── .gitignore
└── README.md
```

## Usage

1. **Upload Music** - Click the upload button to add music files from your device
2. **Create Playlist** - Organize your music into custom playlists
3. **Play Music** - Click on any song to start playback
4. **Control Playback** - Use the controls to pause, skip, adjust volume, etc.

## Technologies Used

- React.js - UI framework
- Web Audio API - Audio playback
- IndexedDB - Local storage for playlists and preferences
- CSS3 - Styling and animations

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Author

**ashuman215-cmd**

---

Made with ❤️ for music lovers
