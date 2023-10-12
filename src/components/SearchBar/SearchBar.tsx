import React from 'react';
import './SearchBar.scss';

function SearchBar() {
  return (
    <div className="SearchBar">
        {/* <label className="SearchBar-label" htmlFor="search">Look for a song:</label> */}
        <input className="SearchBar-input" id="search" type="text" placeholder='Enter a song name'/>
        <button className="SearchBar-btn">Search</button>
    </div>
  );
}

export default SearchBar;
