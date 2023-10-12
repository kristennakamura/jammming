import React from 'react';
import './SearchResults.scss';

import TrackList from '../TrackList/TrackList'

function SearchResults() {
  return (
    <div className="SearchResults">
        <h2 className="SearchResults-heading">Results</h2>
        <TrackList />
    </div>
  );
}

export default SearchResults;
