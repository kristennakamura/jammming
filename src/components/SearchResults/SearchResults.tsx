import React from 'react';
import './SearchResults.scss';

import TrackList from '../TrackList/TrackList'
import { TrackType } from '../App/App';

type SearchResultsProps = {
  searchResults: TrackType[];
  addTrack: (track:TrackType) => void;
}

function SearchResults({searchResults, addTrack}: SearchResultsProps) {
  return (
    <div className="SearchResults">
        <h2 className="SearchResults-heading">Results</h2>
        <TrackList tracks={searchResults} onClick={addTrack} buttonText="+"/>
    </div>
  );
}

export default SearchResults;
