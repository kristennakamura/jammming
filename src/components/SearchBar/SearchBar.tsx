import React, { useState } from 'react';
import './SearchBar.scss';

type SearchBarProps = {
  handleSearch: (term: string) => void;
}

function SearchBar({handleSearch}: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleTermChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  }

  return (
    <div className="SearchBar">
        {/* <label className="SearchBar-label" htmlFor="search">Look for a song:</label> */}
        <input 
          className="SearchBar-input"
          id="search" type="text"
          placeholder="Enter a song name"
          value={searchTerm}
          onChange={handleTermChange}
        />
        <button className="SearchBar-btn" onClick={() => {handleSearch(searchTerm)}}>Search</button>
    </div>
  );
}

export default SearchBar;
