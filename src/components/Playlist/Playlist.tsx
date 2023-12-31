import React from 'react';
import './Playlist.scss';

import TrackList from '../TrackList/TrackList';
import { TrackType } from '../App/App';

type PlaylistProps = {
  playlistName: string;
  playlistTracks: TrackType[];
  updatePlaylistName: (event: React.ChangeEvent<HTMLInputElement>) => void;
  removeTrack: (track:TrackType) => void;
  onSave: () => void;
}

function Playlist({playlistName, playlistTracks, removeTrack, updatePlaylistName, onSave}:PlaylistProps) {
  return (
    <div className="Playlist">
        <input className="Playlist-input" type="text" onChange={updatePlaylistName} value={playlistName}/>
        <button className="Playlist-btn" onClick={onSave}>Save to Spotify</button>
        <TrackList tracks={playlistTracks} onClick={removeTrack} buttonText="-"/>
    </div>
  );
}

export default Playlist;
