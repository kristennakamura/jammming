import React from 'react';
import './TrackList.scss';

import Track from '../Track/Track';
import { TrackType } from '../App/App';

type TrackListProps = {
  tracks: TrackType[],
  onClick: (track:TrackType) => void,
  buttonText: string,
}

function TrackList({tracks, onClick, buttonText}:TrackListProps) {
  return (
    <ul className="TrackList">
      {tracks.map(track => (
        <Track track={track} key={track.id} onClick={onClick} buttonText={buttonText}/>
      ))}
    </ul>
  );
}

export default TrackList;
