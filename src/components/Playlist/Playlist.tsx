import React from 'react';
import './Playlist.scss';

function Playlist() {
  return (
    <div className="Playlist">
        <input className="Playlist-input" placeholder="New Playlist" type="text"/>
        <button className="Playlist-btn">Save to Spotify</button>
        {/* <TrackList /> */}

    </div>
  );
}

export default Playlist;
