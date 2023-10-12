import React from 'react';
import './App.scss';

import SearchBar from '../SearchBar/SearchBar';
// import SearchResults from '../SearchResults/SearchResults';
// import Playlist from '../Playlist/Playlist';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-heading">Ja<span>mmm</span>ing</h1>
      </header>
      <SearchBar/>
      <div className="App-columnWrapper">
        <div className="App-column">
          {/* <SearchResults/> */}
        </div>
        <div className="App-column">
          {/* <Playlist/> */}
        </div>
      </div>

    </div>
  );
}

export default App;
