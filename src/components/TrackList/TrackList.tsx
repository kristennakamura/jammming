import React from 'react';
import './TrackList.scss';

import Track from '../Track/Track';

const tracks = [
  {
    name: 'Soul Meets Body',
    artist: 'Death Cab for Cutie',
    id: '123'
  },
  {
    name: 'Take Me to the Riot',
    artist: 'Stars',
    id: '124'
  },
  {
    name: 'Hell',
    artist: 'Tegan and Sara',
    id: '125'
  },
]

function TrackList() {
  return (
    <ul className="TrackList">
      {tracks.map(track => (
        <Track {...track} key={track.id}/>
      ))}
    </ul>
  );
}

export default TrackList;
