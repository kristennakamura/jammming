import React from 'react';
import './Track.scss';

import { TrackType } from '../App/App';

export type TrackProps = {
  track: TrackType;
  buttonText: string; 
  onClick: (track:TrackType) => void;

}

function Track({track, onClick, buttonText}:TrackProps) {
  return (
    <li className="Track">
        <div> 
            <h3 className="Track-name">{track.name}</h3>
            <p className="Track-artist">{track.artist}</p>
        </div>
        <button className="Track-btn" onClick={() => {onClick(track)}}>{buttonText} </button>
    </li>
  );
}

export default Track;
