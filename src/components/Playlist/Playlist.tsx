import React from 'react';
import './Playlist.scss';

import TrackList from '../TrackList/TrackList';
import { TrackType } from '../App/App';

type PlaylistProps = {
  playlistTracks: TrackType[];
  removeTrack: (track:TrackType) => void;
}

function Playlist({playlistTracks, removeTrack}:PlaylistProps) {
  return (
    <div className="Playlist">
        <input className="Playlist-input" placeholder="New Playlist" type="text"/>
        <button className="Playlist-btn">Save to Spotify</button>
        <TrackList tracks={playlistTracks} onClick={removeTrack} buttonText="-"/>
    </div>
  );
}

export default Playlist;
