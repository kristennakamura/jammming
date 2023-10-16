import React, { useState, useCallback, useEffect } from 'react';
import './App.scss';

import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

import useSpotifyApi from '../../utils/useSpotifyApi';

export type TrackType = {
  id: string,
  name: string,
  artist: string,
  album: string,
  uri: string
}

function App() {
  const { data, search } = useSpotifyApi();

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

  const handleSearch = (term: string) => {
    search(term);
  }

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
      <SearchBar handleSearch={handleSearch}/>
      <div className="App-columnWrapper">
        <div className="App-column">
          <SearchResults searchResults={data} addTrack={addTrack}/>
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
