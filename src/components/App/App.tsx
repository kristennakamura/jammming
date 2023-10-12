import React, { useState, useCallback } from 'react';
import './App.scss';

import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

export type TrackType = {
  id: string,
  name: string,
  artist: string,
  album: string,
  uri: string
}

function App() {
  const [searchResults, setSearchResults] = useState<TrackType[]>([
    {
      "id": "4lY95OMGb9WxP6IYut64ir",
      "name": "Shake It Out",
      "artist": "Florence + The Machine",
      "album": "Ceremonials (Deluxe Edition)",
      "uri": "spotify:track:4lY95OMGb9WxP6IYut64ir"
    },
    {
      "id": "4oS1UEAjl1Fs2nCpOAbp9Q",
      "name": "Shake It Out",
      "artist": "Manchester Orchestra",
      "album": "Mean Everything To Nothing",
      "uri": "spotify:track:4oS1UEAjl1Fs2nCpOAbp9Q"
    },
    {
      "id": "3fthfkkvy9av3q3uAGVf7U",
      "name": "Shake It Off",
      "artist": "Taylor Swift",
      "album": "1989 (Deluxe Edition)",
      "uri": "spotify:track:3fthfkkvy9av3q3uAGVf7U"
    }
  ]);
  const [playlistName, setPlaylistName] = useState<string>('New Playlist');
  const [playlistTracks, setPlaylistTracks] = useState<TrackType[]>([]);

  const addTrack = useCallback((track:TrackType):void => {
    //if already on playlist, ignore
    if (playlistTracks.some(savedTrack => savedTrack.id === track.id)){
      return;
    }
    //else add to playlist
    setPlaylistTracks(prevTracks => [...prevTracks, track])
  }, [playlistTracks])

  const removeTrack = (track:TrackType) => {
    setPlaylistTracks(prevTracks => (prevTracks.filter((currentTrack) => track.id !== currentTrack.id)))
  }

  const updatePlaylistName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlaylistName(e.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-heading">Ja<span>mmm</span>ing</h1>
      </header>
      <SearchBar/>
      <div className="App-columnWrapper">
        <div className="App-column">
          <SearchResults searchResults={searchResults} addTrack={addTrack}/>
        </div>
        <div className="App-column">
          <Playlist 
            playlistName={playlistName}
            playlistTracks={playlistTracks}
            updatePlaylistName={updatePlaylistName}
            removeTrack={removeTrack}
            />
        </div>
      </div>

    </div>
  );
}

export default App;
