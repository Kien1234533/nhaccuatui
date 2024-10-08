import { useState } from "react";
import "./App.css";
import DetailSong from "./components/DetailSong";
import ListSongs from "./components/ListSongs";
import Navbar from "./components/Navbar";
import Playing from "./components/Playing";
import { Songs } from "./Context";
import DataSongs from "./data/songs.json";

function App() {
  const [song, setSong] = useState(DataSongs[0]);
  const handleSetSong = (id) => {
    const song = DataSongs.find((song) => song.id === id);
    if (!song) setSong(DataSongs[0]);
    else setSong(song);
  };

  
  return (
    <div className="App">
      <Songs.Provider value={{ DataSongs, song, handleSetSong }}>
        <Navbar />
        <div className="grid grid-cols-3 bg-white h-screen-navbar-player overflow-hidden">
          <DetailSong />
          <ListSongs />
        </div>
        <Playing />
      </Songs.Provider>
    </div>
  );
}

export default App;
