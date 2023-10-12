import React from 'react';
import './Track.scss';

interface TrackProps {
    artist: string,
    name: string,
    id: string
}

function Track({artist, name, id}:TrackProps) {
  return (
    <li className="Track">
        <div> 
            <h3 className="Track-name">{name}</h3>
            <p className="Track-artist">{artist}</p>
        </div>
        <button className="Track-btn" onClick={() => {console.log('hi')}}>+ </button>
    </li>
  );
}

export default Track;
